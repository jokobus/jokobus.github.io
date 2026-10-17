(function(){"use strict";function e(){const t=document.querySelector(".pse-container");if(!t||!window.SMIDR_PSE_DATA)return;const u=window.SMIDR_PSE_DATA;let e=t.dataset.lang||"en",n=!1,s=!1,r=null,o=1,i=1;const m=new Map;u.forEach(e=>m.set(e.z,e));const p={en:{search_placeholder:"Search element (e.g. Fe, Iron, 26)...",toggle_f_block:"Lanthanoids & Actinoids",toggle_d_block:"Transition Metals (3-12)",main_groups_badge:"8 Main Groups",full_table_badge:"Complete 18 Groups",group_col_prefix:"Group",period_row_prefix:"P",state_title:"State at 20°C:",cat_title:"Categories:",state_solid:"Solid",state_liquid:"Liquid",state_gas:"Gas",state_synthetic:"Synthetic",cat_alkali:"Alkali metals",cat_alkaline:"Alkaline earth",cat_transition:"Transition metals",cat_post_transition:"Post-transition",cat_metalloid:"Metalloids",cat_nonmetal:"Nonmetals",cat_halogen:"Halogens",cat_noble:"Noble gases",cat_lanthanide:"Lanthanoids",cat_actinide:"Actinoids",lbl_z:"Atomic Number",lbl_mass:"Relative Atomic Mass",lbl_en_pauling:"Electronegativity (Pauling)",lbl_en_ar:"Electronegativity (Allred-Rochow)",lbl_config:"Electron Configuration",lbl_ox:"Oxidation States",lbl_mp:"Melting Point",lbl_bp:"Boiling Point",lbl_density:"Density (20°C)",lbl_discovery:"Discovered",lbl_block:"Block & Period",wiki_btn:"Wikipedia Article ↗",prev:"← Previous",next:"Next →",close:"Close (Esc)",zoom_in:"Zoom In (+)",zoom_out:"Zoom Out (−)",zoom_reset:"Reset Zoom"},de:{search_placeholder:"Element suchen (z.B. Fe, Eisen, 26)...",toggle_f_block:"Lanthanoide & Actinoide",toggle_d_block:"Nebengruppen (3-12)",main_groups_badge:"8 Hauptgruppen",full_table_badge:"Alle 18 Gruppen",group_col_prefix:"Gruppe",period_row_prefix:"P",state_title:"Aggregatzustand (20°C):",cat_title:"Serien:",state_solid:"Fest",state_liquid:"Flüssig",state_gas:"Gasförmig",state_synthetic:"Künstlich",cat_alkali:"Alkalimetalle",cat_alkaline:"Erdalkalimetalle",cat_transition:"Übergangsmetalle",cat_post_transition:"Metalle",cat_metalloid:"Halbmetalle",cat_nonmetal:"Nichtmetalle",cat_halogen:"Halogene",cat_noble:"Edelgase",cat_lanthanide:"Lanthanoide",cat_actinide:"Actinoide",lbl_z:"Ordnungszahl",lbl_mass:"Relative Atommasse",lbl_en_pauling:"Elektronegativität (Pauling)",lbl_en_ar:"Elektronegativität (Allred-Rochow)",lbl_config:"Elektronenkonfiguration",lbl_ox:"Oxidationsstufen",lbl_mp:"Schmelzpunkt",lbl_bp:"Siedepunkt",lbl_density:"Dichte (20°C)",lbl_discovery:"Entdeckung",lbl_block:"Block & Periode",wiki_btn:"Wikipedia-Artikel ↗",prev:"← Vorheriges",next:"Nächstes →",close:"Schließen (Esc)",zoom_in:"Vergrößern (+)",zoom_out:"Verkleinern (−)",zoom_reset:"Zoom zurücksetzen"}},g=[{key:"alkali",labelKey:"cat_alkali",color:"var(--pse-cat-alkali)"},{key:"alkaline-earth",labelKey:"cat_alkaline",color:"var(--pse-cat-alkaline)"},{key:"transition",labelKey:"cat_transition",color:"var(--pse-cat-transition)"},{key:"post-transition",labelKey:"cat_post_transition",color:"var(--pse-cat-post-transition)"},{key:"metalloid",labelKey:"cat_metalloid",color:"var(--pse-cat-metalloid)"},{key:"nonmetal",labelKey:"cat_nonmetal",color:"var(--pse-cat-nonmetal)"},{key:"halogen",labelKey:"cat_halogen",color:"var(--pse-cat-halogen)"},{key:"noble",labelKey:"cat_noble",color:"var(--pse-cat-noble)"},{key:"lanthanide",labelKey:"cat_lanthanide",color:"var(--pse-cat-lanthanide)"},{key:"actinide",labelKey:"cat_actinide",color:"var(--pse-cat-actinide)"}],y=[{g:1,roman:"I A",name_en:"Alkali metals",name_de:"Alkalimetalle"},{g:2,roman:"II A",name_en:"Alkaline earth",name_de:"Erdalkalimetalle"},{g:3,roman:"III B",name_en:"Scandium group",name_de:"Scandiumgruppe"},{g:4,roman:"IV B",name_en:"Titanium group",name_de:"Titangruppe"},{g:5,roman:"V B",name_en:"Vanadium group",name_de:"Vanadiumgruppe"},{g:6,roman:"VI B",name_en:"Chromium group",name_de:"Chromgruppe"},{g:7,roman:"VII B",name_en:"Manganese group",name_de:"Mangangruppe"},{g:8,roman:"VIII B",name_en:"Iron group",name_de:"Eisengruppe"},{g:9,roman:"VIII B",name_en:"Cobalt group",name_de:"Cobaltgruppe"},{g:10,roman:"VIII B",name_en:"Nickel group",name_de:"Nickelgruppe"},{g:11,roman:"I B",name_en:"Copper group",name_de:"Kupfergruppe"},{g:12,roman:"II B",name_en:"Zinc group",name_de:"Zinkgruppe"},{g:13,roman:"III A",name_en:"Boron group",name_de:"Borgruppe"},{g:14,roman:"IV A",name_en:"Carbon group",name_de:"Kohlenstoffgruppe"},{g:15,roman:"V A",name_en:"Pnictogens",name_de:"Stickstoffgruppe"},{g:16,roman:"VI A",name_en:"Chalcogens",name_de:"Chalkogene"},{g:17,roman:"VII A",name_en:"Halogens",name_de:"Halogene"},{g:18,roman:"VIII A",name_en:"Noble gases",name_de:"Edelgase"}],b=[{g:1,roman:"I A",name_en:"Alkali metals",name_de:"Alkalimetalle"},{g:2,roman:"II A",name_en:"Alkaline earth",name_de:"Erdalkalimetalle"},{g:13,roman:"III A",name_en:"Boron group",name_de:"Borgruppe"},{g:14,roman:"IV A",name_en:"Carbon group",name_de:"Kohlenstoffgruppe"},{g:15,roman:"V A",name_en:"Nitrogen group",name_de:"Stickstoffgruppe"},{g:16,roman:"VI A",name_en:"Chalcogens",name_de:"Chalkogene"},{g:17,roman:"VII A",name_en:"Halogens",name_de:"Halogene"},{g:18,roman:"VIII A",name_en:"Noble gases",name_de:"Edelgase"}];function v(e,t){const o=e.z,i=e.p,n=e.g,a=e.cat;if(a==="lanthanide"){const e=o-57;return{row:10,col:4+e,isFBlock:!0,isDBlock:!1}}if(a==="actinide"){const e=o-89;return{row:11,col:4+e,isFBlock:!0,isDBlock:!1}}const r=1+i;let s=1+n;const c=n>=3&&n<=12&&i>=4;return t&&(n<=2?s=1+n:n>=13&&(s=1+(n-10))),{row:r,col:s,isFBlock:!1,isDBlock:c}}function l(){t.innerHTML="";const o=p[e],S=document.createElement("div");S.className="pse-toolbar";const N=document.createElement("div");N.className="pse-controls-group";const z=document.createElement("div");z.className="pse-search-box",z.innerHTML=`
        <span class="pse-search-icon">🔍</span>
        <input type="text" id="pse-search-input" placeholder="${o.search_placeholder}" autocomplete="off" />
        <button class="pse-search-clear" id="pse-search-clear" title="Clear">✕</button>
      `,N.appendChild(z);const m=document.createElement("div");m.className="pse-controls-group";const w=document.createElement("button");w.className=`pse-btn ${n?"active":""}`,w.id="pse-btn-dblock",w.innerHTML=`<span>⊞</span> <span>${o.toggle_d_block}</span>`,w.title=n?o.full_table_badge:o.main_groups_badge;const x=document.createElement("button");x.className=`pse-btn ${s?"":"active"}`,x.id="pse-btn-fblock",x.innerHTML=`<span>⊟</span> <span>${o.toggle_f_block}</span>`;const O=document.createElement("button");O.className="pse-btn",O.id="pse-btn-lang",O.innerHTML=`<span>🌐</span> <strong>${e.toUpperCase()}</strong>`,O.title=e==="en"?"Auf Deutsch umschalten":"Switch to English";const T=document.createElement("div");T.className="pse-zoom-btns",T.innerHTML=`
        <button id="pse-zoom-out" title="${o.zoom_out}">−</button>
        <button id="pse-zoom-reset" title="${o.zoom_reset}">100%</button>
        <button id="pse-zoom-in" title="${o.zoom_in}">+</button>
      `,m.appendChild(w),m.appendChild(x),m.appendChild(O),m.appendChild(T),S.appendChild(N),S.appendChild(m),t.appendChild(S);const C=document.createElement("div");C.className="pse-legend-bar";const E=document.createElement("div");E.className="pse-legend-row",E.innerHTML=`<span class="pse-legend-title">${o.cat_title}</span>`;const R=document.createElement("div");R.className="pse-legend-items",g.forEach(e=>{const t=document.createElement("span");t.className=`pse-legend-pill ${r===e.key?"active":""}`,t.dataset.cat=e.key,t.innerHTML=`
          <span class="pse-pill-dot" style="background:${e.color};"></span>
          <span>${o[e.labelKey]}</span>
        `,t.addEventListener("click",()=>{r===e.key?r=null:r=e.key,h()}),R.appendChild(t)}),E.appendChild(R);const A=document.createElement("div");A.className="pse-legend-row",A.innerHTML=`<span class="pse-legend-title">${o.state_title}</span>`;const L=document.createElement("div");L.className="pse-legend-items";const P=[{key:"solid",label:o.state_solid,dotClass:"pse-state-dot-solid"},{key:"liquid",label:o.state_liquid,dotClass:"pse-state-dot-liquid"},{key:"gas",label:o.state_gas,dotClass:"pse-state-dot-gas"},{key:"synthetic",label:o.state_synthetic,dotClass:"pse-state-dot-synthetic"}];P.forEach(e=>{const t=document.createElement("span");t.className="pse-legend-pill",t.style.cursor="default",t.innerHTML=`
          <span class="pse-pill-dot ${e.dotClass}"></span>
          <span>${e.label}</span>
        `,L.appendChild(t)}),A.appendChild(L),C.appendChild(E),C.appendChild(A),t.appendChild(C);const F=document.createElement("div");F.className="pse-viewport";const M=document.createElement("div");M.className="pse-canvas",M.id="pse-canvas";const i=document.createElement("div");i.className="pse-grid";const f=document.createElement("div");f.className="pse-hdr-col",f.style.gridRow="1",f.style.gridColumn="1",f.textContent="#",i.appendChild(f);const H=n?b:y;H.forEach((t,n)=>{const s=document.createElement("div");s.className=`pse-hdr-col ${t.g>=3&&t.g<=12?"pse-hdr-d-block":""}`,s.style.gridRow="1",s.style.gridColumn=String(2+n),s.innerHTML=`
          <span>${t.g}</span>
          <span class="sub">${t.roman}</span>
        `,s.title=e==="de"?t.name_de:t.name_en,i.appendChild(s)});for(let t=1;t<=7;t++){const e=document.createElement("div");e.className="pse-hdr-row",e.style.gridRow=String(1+t),e.style.gridColumn="1",e.textContent=String(t),i.appendChild(e)}const D=document.createElement("div");D.className="pse-f-block-gap",D.style.gridRow="9",i.appendChild(D);const d=document.createElement("div");d.className="pse-hdr-row pse-f-block-row",d.style.gridRow="10",d.style.gridColumn="1 / span 3",d.style.fontSize="0.7rem",d.textContent=e==="de"?"Lanthanoide *":"Lanthanoids *",i.appendChild(d);const l=document.createElement("div");if(l.className="pse-hdr-row pse-f-block-row",l.style.gridRow="11",l.style.gridColumn="1 / span 3",l.style.fontSize="0.7rem",l.textContent=e==="de"?"Actinoide **":"Actinoids **",i.appendChild(l),!n){const t=document.createElement("div");t.className="pse-f-placeholder",t.style.gridRow="7",t.style.gridColumn="4",t.innerHTML=`
          <span class="z-range">* 57–71</span>
          <span class="series-name">La–Lu</span>
        `,t.title=e==="de"?"Zu den Lanthanoiden springen":"View Lanthanoids",t.addEventListener("click",()=>{s&&(s=!1,c());const e=document.querySelector('.pse-cell[data-z="57"]');e&&e.scrollIntoView({behavior:"smooth",block:"center"})}),i.appendChild(t);const n=document.createElement("div");n.className="pse-f-placeholder",n.style.gridRow="8",n.style.gridColumn="4",n.innerHTML=`
          <span class="z-range">** 89–103</span>
          <span class="series-name">Ac–Lr</span>
        `,n.title=e==="de"?"Zu den Actinoiden springen":"View Actinoids",n.addEventListener("click",()=>{s&&(s=!1,c());const e=document.querySelector('.pse-cell[data-z="89"]');e&&e.scrollIntoView({behavior:"smooth",block:"center"})}),i.appendChild(n)}u.forEach(t=>{const r=v(t,n),u=e==="de"?t.n_de:t.n_en,s=document.createElement("div");let c=`pse-cell`;r.isDBlock&&(c+=` pse-d-block`),r.isFBlock&&(c+=` pse-f-block-row`),s.className=c,s.dataset.z=t.z,s.dataset.sym=t.s.toLowerCase(),s.dataset.nameEn=t.n_en.toLowerCase(),s.dataset.nameDe=t.n_de.toLowerCase(),s.dataset.cat=t.cat,s.dataset.state=t.state,s.style.gridRow=String(r.row),s.style.gridColumn=String(r.col);let l=t.mp!=="-"?`${t.mp}°`:"-",d=t.bp!=="-"?`${t.bp}°`:"-";s.innerHTML=`
          <div class="pse-cell-top">
            <span class="pse-mass" title="${o.lbl_mass}: ${t.mass}">${t.mass}</span>
            <span class="pse-en" title="${o.lbl_en_pauling}: ${t.en}">${t.en!=="-"?t.en:""}</span>
          </div>
          <div class="pse-cell-mid">
            <span class="pse-z">${t.z}</span>
            <span class="pse-symbol">${t.s}</span>
          </div>
          <div class="pse-cell-bot">
            <span class="pse-name">${u}</span>
            <div class="pse-cell-bot-metrics">
              <span class="pse-mpbp" title="${o.lbl_mp}: ${l} / ${o.lbl_bp}: ${d}">${l}/${d}</span>
              <span class="pse-density" title="${o.lbl_density}: ${t.density}">${t.density.split(" ")[0]}</span>
            </div>
          </div>
        `,s.addEventListener("click",()=>a(t.z)),i.appendChild(s)}),M.appendChild(i),F.appendChild(M),t.appendChild(F);const k=document.createElement("div");k.className="pse-modal-overlay",k.id="pse-modal",k.innerHTML=`
        <div class="pse-modal-card" role="dialog" aria-modal="true">
          <button class="pse-modal-close" id="pse-modal-close" title="${o.close}">✕</button>
          
          <div class="pse-modal-header">
            <div class="pse-modal-symbol-badge" id="modal-symbol-badge">
              <span class="z" id="modal-z"></span>
              <span class="sym" id="modal-sym"></span>
              <span class="mass" id="modal-mass"></span>
            </div>
            <div class="pse-modal-title-wrap">
              <h2 class="pse-modal-title" id="modal-title"></h2>
              <div class="pse-modal-badges">
                <span class="pse-badge" id="modal-badge-cat"></span>
                <span class="pse-badge" id="modal-badge-state"></span>
                <span class="pse-badge" id="modal-badge-block"></span>
              </div>
            </div>
          </div>

          <div class="pse-prop-grid">
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_mass}</span>
              <span class="pse-prop-value" id="modal-prop-mass"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_en_pauling}</span>
              <span class="pse-prop-value" id="modal-prop-en"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_en_ar}</span>
              <span class="pse-prop-value" id="modal-prop-en-ar"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_config}</span>
              <span class="pse-prop-value" id="modal-prop-config"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_ox}</span>
              <span class="pse-prop-value" id="modal-prop-ox"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_mp}</span>
              <span class="pse-prop-value" id="modal-prop-mp"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_bp}</span>
              <span class="pse-prop-value" id="modal-prop-bp"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_density}</span>
              <span class="pse-prop-value" id="modal-prop-density"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${o.lbl_discovery}</span>
              <span class="pse-prop-value" id="modal-prop-year"></span>
            </div>
          </div>

          <div class="pse-modal-desc" id="modal-desc"></div>

          <div class="pse-modal-footer">
            <div class="pse-modal-nav">
              <button class="pse-btn" id="modal-btn-prev">${o.prev}</button>
              <button class="pse-btn" id="modal-btn-next">${o.next}</button>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" class="pse-wiki-btn" id="modal-wiki-btn">
              <span>📖</span> <span id="modal-wiki-text">${o.wiki_btn}</span>
            </a>
          </div>
        </div>
      `,t.appendChild(k),j(),c(),_()}function c(){n?t.classList.add("collapse-d-block"):t.classList.remove("collapse-d-block"),s?t.classList.add("collapse-f-block"):t.classList.remove("collapse-f-block");const e=document.getElementById("pse-btn-dblock");e&&e.classList.toggle("active",n);const o=document.getElementById("pse-btn-fblock");o&&o.classList.toggle("active",!s)}function j(){const y=document.getElementById("pse-btn-dblock");y&&y.addEventListener("click",()=>{n=!n,l()});const _=document.getElementById("pse-btn-fblock");_&&_.addEventListener("click",()=>{s=!s,c()});const j=document.getElementById("pse-btn-lang");j&&j.addEventListener("click",()=>{e=e==="en"?"de":"en",t.dataset.lang=e,l()});const m=document.getElementById("pse-search-input"),u=document.getElementById("pse-search-clear");m&&u&&(m.addEventListener("input",e=>{const t=e.target.value.trim().toLowerCase();u.style.display=t?"block":"none",f(t)}),u.addEventListener("click",()=>{m.value="",u.style.display="none",f(""),m.focus()}));const g=document.getElementById("pse-canvas"),v=document.getElementById("pse-zoom-in"),b=document.getElementById("pse-zoom-out"),h=document.getElementById("pse-zoom-reset");function p(){g&&(g.style.transform=`scale(${o})`,h&&(h.textContent=`${Math.round(o*100)}%`))}v&&v.addEventListener("click",()=>{o<1.4&&(o=parseFloat((o+.1).toFixed(1)),p())}),b&&b.addEventListener("click",()=>{o>.6&&(o=parseFloat((o-.1).toFixed(1)),p())}),h&&h.addEventListener("click",()=>{o=1,p()});const r=document.getElementById("pse-modal"),w=document.getElementById("pse-modal-close"),O=document.getElementById("modal-btn-prev"),x=document.getElementById("modal-btn-next");w&&w.addEventListener("click",d),r&&r.addEventListener("click",e=>{e.target===r&&d()}),O&&O.addEventListener("click",()=>{const e=i>1?i-1:118;a(e)}),x&&x.addEventListener("click",()=>{const e=i<118?i+1:1;a(e)}),window.addEventListener("keydown",e=>{if(!r||!r.classList.contains("open"))return;if(e.key==="Escape")d();else if(e.key==="ArrowLeft"){const e=i>1?i-1:118;a(e)}else if(e.key==="ArrowRight"){const e=i<118?i+1:1;a(e)}})}function f(e){const n=t.querySelectorAll(".pse-cell");if(!e){n.forEach(e=>{e.classList.remove("dimmed","matched")}),r&&h();return}n.forEach(t=>{const s=t.dataset.z,n=t.dataset.sym,o=t.dataset.nameEn,i=t.dataset.nameDe,a=s===e||n===e||n.startsWith(e)||o.includes(e)||i.includes(e);a?(t.classList.remove("dimmed"),t.classList.add("matched")):(t.classList.add("dimmed"),t.classList.remove("matched"))})}function h(){const n=t.querySelectorAll(".pse-legend-pill[data-cat]");n.forEach(e=>{e.classList.toggle("active",e.dataset.cat===r)});const e=t.querySelectorAll(".pse-cell");if(!r){e.forEach(e=>e.classList.remove("dimmed"));return}e.forEach(e=>{e.dataset.cat===r?e.classList.remove("dimmed"):e.classList.add("dimmed")})}function a(t){const n=m.get(Number(t));if(!n)return;i=n.z;const o=p[e],a=document.getElementById("pse-modal");if(!a)return;const r=e==="de"?n.n_de:n.n_en,c=e==="de"?n.desc_de:n.desc_en,l=e==="de"?n.wiki_de:n.wiki_en,d=document.getElementById("modal-symbol-badge");d.style.borderColor=`var(--pse-cat-${n.cat})`,document.getElementById("modal-z").textContent=n.z,document.getElementById("modal-sym").textContent=n.s,document.getElementById("modal-sym").style.color=`var(--pse-state-${n.state})`,document.getElementById("modal-mass").textContent=n.mass,document.getElementById("modal-title").textContent=`${r} (${n.s})`;const u=g.find(e=>e.key===n.cat)?.labelKey||"cat_nonmetal";document.getElementById("modal-badge-cat").innerHTML=`🏷️ ${o[u]}`,document.getElementById("modal-badge-cat").style.borderColor=`var(--pse-cat-${n.cat})`;const h=o[`state_${n.state}`]||n.state;document.getElementById("modal-badge-state").innerHTML=`💧 ${h}`;let s="s";n.cat==="lanthanide"||n.cat==="actinide"?s="f":n.g>=13?s="p":n.g>=3&&n.g<=12&&(s="d"),document.getElementById("modal-badge-block").innerHTML=`⚛️ Block ${s.toUpperCase()} • P${n.p} G${n.g}`,document.getElementById("modal-prop-mass").textContent=n.mass,document.getElementById("modal-prop-en").textContent=n.en!=="-"?n.en:"—",document.getElementById("modal-prop-en-ar").textContent=n.en_ar!=="-"?n.en_ar:"—",document.getElementById("modal-prop-config").textContent=n.config,document.getElementById("modal-prop-ox").textContent=n.ox,document.getElementById("modal-prop-mp").textContent=n.mp!=="-"?`${n.mp} °C`:"—",document.getElementById("modal-prop-bp").textContent=n.bp!=="-"?`${n.bp} °C`:"—",document.getElementById("modal-prop-density").textContent=n.density,document.getElementById("modal-prop-year").textContent=n.year,document.getElementById("modal-desc").textContent=c;const f=document.getElementById("modal-wiki-btn");f.href=l,history.replaceState(null,null,`#el-${n.s}`),a.classList.add("open"),document.body.style.overflow="hidden"}function d(){const e=document.getElementById("pse-modal");e&&(e.classList.remove("open"),document.body.style.overflow=""),history.replaceState(null,null,window.location.pathname)}function _(){const e=window.location.hash;if(!e)return;if(e.startsWith("#el-")){const n=e.replace("#el-","").toLowerCase(),t=u.find(e=>e.s.toLowerCase()===n);t&&a(t.z)}else if(e.startsWith("#z-")){const t=parseInt(e.replace("#z-",""),10);t>=1&&t<=118&&a(t)}else{const t=parseInt(e.replace("#",""),10);!isNaN(t)&&t>=1&&t<=118&&a(t)}}l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})()