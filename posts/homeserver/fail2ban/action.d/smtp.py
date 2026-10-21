# This is a modified version of smtp.py shipped by fail2ban 
# This modified version reads the smtp environment variables (.env->docker-compose->smtp.py), 
# because there is no way to hand them over via the jail.local
# Further improvements: Group multiple jails into one email when started / stopped

# emacs: -*- mode: python; py-indent-offset: 4; indent-tabs-mode: t -*-
# vi: set ft=python sts=4 ts=4 sw=4 noet :

# This file is part of Fail2Ban.
#
# Fail2Ban is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# Fail2Ban is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Fail2Ban; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

import socket
import smtplib
import os
import threading
import atexit
import re
from email.mime.text import MIMEText
from email.utils import formatdate, formataddr

from fail2ban.server.actions import ActionBase, CallingMap

messages = {}
messages['start'] = \
"""Hi Homeserver Admin,

The jail %(jailname)s has been started successfully.

Regards,
Your Fail2Ban Server"""

messages['stop'] = \
"""Hi Homeserver Admin,

The jail %(jailname)s has been stopped.

Regards,
Your Fail2Ban Server"""

messages['ban'] = {}
messages['ban']['head'] = \
"""Hi Homeserver Admin,

The IP %(ip)s has just been banned for %(bantime)i seconds (%(bantime_formatted)s) by Fail2Ban %(jailname)s filter because of %(failures)i unsuccessful attempts.
"""
messages['ban']['tail'] = \
"""
Regards,
Your Fail2Ban Server"""
messages['ban']['matches'] = \
"""
Matches for this ban:
%(matches)s
"""
messages['ban']['ipmatches'] = \
"""
Matches for %(ip)s:
%(ipmatches)s
"""
messages['ban']['ipjailmatches'] = \
"""
Matches for %(ip)s for jail %(jailname)s:
%(ipjailmatches)s
"""


class SMTPAction(ActionBase):
	"""Fail2Ban action which sends emails to inform on jail starting,
	stopping and bans.
	"""

	_buffer = []
	_timer = None
	_lock = threading.Lock()
	_last_instance = None

	def _buffer_message(self, subject, body, jailname=None, event_type=None):
		with SMTPAction._lock:
			SMTPAction._buffer.append({
				'subject': subject,
				'body': body,
				'jailname': jailname,
				'event_type': event_type
			})
			SMTPAction._last_instance = self
			if SMTPAction._timer is None:
				SMTPAction._timer = threading.Timer(2.0, SMTPAction._flush_buffer)
				SMTPAction._timer.start()

	@staticmethod
	def _flush_buffer():
		with SMTPAction._lock:
			messages = list(SMTPAction._buffer)
			SMTPAction._buffer = []
			if SMTPAction._timer:
				SMTPAction._timer.cancel()
				SMTPAction._timer = None
			instance = SMTPAction._last_instance
		
		if not messages or not instance:
			return

		# CallingMap items are callables or values. hostname is usually a callable (socket.gethostname)
		hostname_val = instance.message_values['hostname']
		if callable(hostname_val):
			hostname = hostname_val()
		else:
			hostname = hostname_val
		
		event_types = [m.get('event_type') for m in messages]
		jailnames = [m.get('jailname') for m in messages]
		count = len(messages)

		if all(t == 'start' for t in event_types):
			combined_subject = "[Fail2Ban] %d jails started on %s" % (count, hostname)
			jail_list = "\n".join(["- %s" % name for name in jailnames if name])
			combined_body = """Hi Homeserver Admin,

The following %d jails have been started successfully:
%s

Regards,
Your Fail2Ban Server""" % (count, jail_list)

		elif all(t == 'stop' for t in event_types):
			combined_subject = "[Fail2Ban] %d jails stopped on %s" % (count, hostname)
			jail_list = "\n".join(["- %s" % name for name in jailnames if name])
			combined_body = """Hi Homeserver Admin,

The following %d jails have been stopped:
%s

Regards,
Your Fail2Ban Server""" % (count, jail_list)

		else:
			# Fallback for mixed events or bans
			subjects = [m['subject'] for m in messages]
			is_start = all("started on" in s for s in subjects)
			is_stop = all("stopped on" in s for s in subjects)
			
			if is_start:
				combined_subject = "[Fail2Ban] %d jails started on %s" % (count, hostname)
			elif is_stop:
				combined_subject = "[Fail2Ban] %d jails stopped on %s" % (count, hostname)
			else:
				combined_subject = "[Fail2Ban] %d jail events on %s" % (count, hostname)
				
			combined_body = "\n\n--------------------------------------------------\n\n".join([m['body'] for m in messages])
		
		try:
			instance._sendMessage(combined_subject, combined_body)
		except Exception as e:
			pass

	def __init__(
		self, jail, name, host="localhost", ssl=False, user=None, password=None,
		sendername="Fail2Ban", sender="fail2ban", dest="root", matches=None):
		"""Initialise action.

		Parameters
		----------
		jail : Jail
			The jail which the action belongs to.
		name : str
			Named assigned to the action.
		host : str, optional
			SMTP host, of host:port format. Default host "localhost" and
			port "25"
		ssl : bool, optional
			Whether to use TLS for the SMTP connection or not.  Default False.
		user : str, optional
			Username used for authentication with SMTP server.
		password : str, optional
			Password used for authentication with SMTP server.
		sendername : str, optional
			Name to use for from address in email. Default "Fail2Ban".
		sender : str, optional
			Email address to use for from address in email.
			Default "fail2ban".
		dest : str, optional
			Email addresses of intended recipient(s) in comma space ", "
			delimited format. Default "root".
		matches : str, optional
			Type of matches to be included from ban in email. Can be one
			of "matches", "ipmatches" or "ipjailmatches". Default None
			(see man jail.conf.5).
		"""

		super(SMTPAction, self).__init__(jail, name)

		self.host = host
		self.ssl = ssl

		# Try to get credentials from environment if not provided
		self.user = user or os.getenv('SMTP_USERNAME')
		self.password = password or os.getenv('SMTP_PASSWORD')

		self.fromname = sendername
		self.fromaddr = sender if sender != "fail2ban" else (os.getenv('SMTP_FROM') or sender)
		self.toaddr = dest if dest != "root" else (os.getenv('SMTP_TO') or dest)

		self.matches = matches

		def format_bantime(seconds):
			m, s = divmod(seconds, 60)
			h, m = divmod(m, 60)
			d, h = divmod(h, 24)
			parts = []
			if d > 0: parts.append("%d days" % d)
			if h > 0: parts.append("%d hours" % h)
			if m > 0: parts.append("%d minutes" % m)
			if s > 0 or not parts: parts.append("%d seconds" % s)
			return ", ".join(parts)

		self.message_values = CallingMap(
			jailname = self._jail.name,
			hostname = socket.gethostname,
			bantime = lambda: self._jail.actions.getBanTime(),
			bantime_formatted = lambda: format_bantime(self._jail.actions.getBanTime()),
			)

		# bypass ban/unban for restored tickets
		self.norestored = 1

	def _sendMessage(self, subject, text):
		"""Sends message based on arguments and instance's properties.

		Parameters
		----------
		subject : str
			Subject of the email.
		text : str
			Body of the email.

		Raises
		------
		SMTPConnectionError
			Error on connecting to host.
		SMTPAuthenticationError
			Error authenticating with SMTP server.
		SMTPException
			See Python `smtplib` for full list of other possible
			exceptions.
		"""
		msg = MIMEText(text)
		msg['Subject'] = subject
		msg['From'] = formataddr((self.fromname, self.fromaddr))
		msg['To'] = self.toaddr
		msg['Date'] = formatdate()

		smtp_host, smtp_port = self.host.split(':')
		smtp = smtplib.SMTP(host=smtp_host, port=smtp_port)
		try:
			r = smtp.connect(host=smtp_host, port=smtp_port)
			self._logSys.debug("Connected to SMTP '%s', response: %i: %s",
				self.host, *r)

			if self.ssl: # pragma: no cover
				r = smtp.starttls()[0];
				if r != 220: # pragma: no cover
					raise Exception("Failed to starttls() on '%s': %s" % (self.host, r))
			
			if self.user and self.password: # pragma: no cover (ATM no tests covering that)
				smtp.login(self.user, self.password)
			
			failed_recipients = smtp.sendmail(
				self.fromaddr, self.toaddr.split(", "), msg.as_string())
		except smtplib.SMTPConnectError: # pragma: no cover
			self._logSys.error("Error connecting to host '%s'", self.host)
			raise
		except smtplib.SMTPAuthenticationError: # pragma: no cover
			self._logSys.error(
				"Failed to authenticate with host '%s' user '%s'",
				self.host, self.user)
			raise
		except smtplib.SMTPException: # pragma: no cover
			self._logSys.error(
				"Error sending mail to host '%s' from '%s' to '%s'",
				self.host, self.fromaddr, self.toaddr)
			raise
		else:
			if failed_recipients: # pragma: no cover
				self._logSys.warning(
					"Email to '%s' failed to following recipients: %r",
					self.toaddr, failed_recipients)
			self._logSys.debug("Email '%s' successfully sent", subject)
		finally:
			try:
				self._logSys.debug("Disconnected from '%s', response %i: %s",
					self.host, *smtp.quit())
			except smtplib.SMTPServerDisconnected: # pragma: no cover
				pass # Not connected

	def start(self):
		"""Sends email to recipients informing that the jail has started.
		"""
		self._buffer_message(
			"[Fail2Ban] %(jailname)s: started on %(hostname)s" %
				self.message_values,
			messages['start'] % self.message_values,
			jailname=self.message_values['jailname'],
			event_type='start')

	def stop(self):
		"""Sends email to recipients informing that the jail has stopped.
		"""
		self._buffer_message(
			"[Fail2Ban] %(jailname)s: stopped on %(hostname)s" %
				self.message_values,
			messages['stop'] % self.message_values,
			jailname=self.message_values['jailname'],
			event_type='stop')

	def _extract_summary(self, logs, jailname=None):
		if not logs:
			return ""
		
		combinations = set()
		
		# Clean up jailname for display (e.g. nextcloud-short -> nextcloud)
		jail_display = jailname
		if jail_display:
			for suffix in ['-short', '-long', '.local']:
				if jail_display.endswith(suffix):
					jail_display = jail_display[:-len(suffix)]
		
		# Map jail names to full hostnames
		jail_host_map = {
			'nextcloud': 'nextcloud.example.com',
			'vaultwarden': 'bitwarden.example.com',
			'vaultwarden-admin': 'bitwarden.example.com',
			'vaultwarden-totp': 'bitwarden.example.com',
			'immich': 'immich.example.com',
		}

		# Determine fallback host from jailname
		fallback_host = jail_display
		if jail_display in jail_host_map:
			fallback_host = jail_host_map[jail_display]
		
		for line in logs.splitlines():
			user = None
			host = None
			
			# Extract Host (Caddy JSON)
			m = re.search(r'[\'"]host[\'"]\s*[:=]\s*[\'"]([^\'"]+)[\'"]', line, re.IGNORECASE)
			if m: host = m.group(1)

			# Priority 1: Specific failure messages
			# Nextcloud Login failed
			m = re.search(r'Login failed:\s*([^\s\(]+)', line, re.IGNORECASE)
			if m: user = m.group(1)
			
			# Vaultwarden Username
			if not user:
				m = re.search(r'Username:\s*([^\s]+)\.', line, re.IGNORECASE)
				if m: user = m.group(1)

			# Priority 2: Email (if not found yet)
			if not user:
				m = re.search(r'\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b', line)
				if m: user = m.group(1)

			# Priority 3: Generic fields
			if not user:
				m = re.search(r'[\'"]user(?:name)?[\'"]\s*[:=]\s*[\'"]([^\'"]+)[\'"]', line, re.IGNORECASE)
				if m: user = m.group(1)
			
			if not user:
				m = re.search(r'user\s+[\'"]([^\'"]+)[\'"]', line, re.IGNORECASE)
				if m: user = m.group(1)

			# Filter out placeholders
			if user in ["--", "-"]:
				user = None

			if user:
				if host:
					combinations.add("%s at %s" % (user, host))
				elif fallback_host:
					combinations.add("%s at %s" % (user, fallback_host))
				else:
					combinations.add(user)
			elif host:
				combinations.add("(unknown user) at %s" % host)
			elif fallback_host:
				combinations.add("(unknown user) at %s" % fallback_host)
		
		if not combinations:
			return ""
			
		return "Summary of failed attempts:\n" + "\n".join(sorted(combinations))

	def ban(self, aInfo):
		"""Sends email to recipients informing that ban has occurred.

		Parameters
		----------
		aInfo : dict
			Dictionary which includes information in relation to
			the ban.
		"""
		if aInfo.get('restored'):
			return
		aInfo.update(self.message_values)
		
		summary = "\n" + self._extract_summary(str(aInfo.get('matches', '')), aInfo.get('jailname')) + "\n"

		message = "".join([
			messages['ban']['head'],
			summary,
			messages['ban'].get(self.matches, ""),
			messages['ban']['tail']
			])
		self._sendMessage(
			"[Fail2Ban] %(jailname)s: banned %(ip)s from %(hostname)s" %
				aInfo,
			message % aInfo)

Action = SMTPAction

atexit.register(SMTPAction._flush_buffer)