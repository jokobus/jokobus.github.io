(function(){"use strict";function e(){const t=document.querySelector(".pse-container");if(!t||!window.SMIDR_PSE_DATA)return;const m=window.SMIDR_PSE_DATA;let n=t.dataset.lang||"en",o=!1,s=!1,c=null,i=1,a=1,l="",d=!1,e={enMin:null,enMax:null,densityMin:null,densityMax:null,mpMin:null,mpMax:null,bpMin:null,bpMax:null,config:"",ox:""};const v=new Map;m.forEach(e=>v.set(e.z,e));const g={en:{search_placeholder:"Search element (e.g. Fe, Iron, 26)...",detailed_search:"Detailed Search",density_label:"Density",density_unit:"g/cm³",boiling_point:"Boiling Point",melting_point:"Melting Point",electronegativity:"Electronegativity (Pauling)",electron_config:"Electron Configuration",electron_config_placeholder:"e.g. 3d, 4f, [Xe], 6s",oxidation_states:"Oxidation States",oxidation_states_placeholder:"e.g. +2, +3, -1",filter_min:"Min",filter_max:"Max",reset_filters:"Reset Filters",results_count:"elements",toggle_f_block:"Lanthanoids & Actinoids",toggle_d_block:"Transition Metals (3-12)",main_groups_badge:"8 Main Groups",full_table_badge:"Complete 18 Groups",group_col_prefix:"Group",period_row_prefix:"P",state_title:"State at 20°C:",cat_title:"Categories:",state_solid:"Solid",state_liquid:"Liquid",state_gas:"Gas",state_synthetic:"Synthetic",cat_alkali:"Alkali metals",cat_alkaline:"Alkaline earth",cat_transition:"Transition metals",cat_post_transition:"Post-transition",cat_metalloid:"Metalloids",cat_nonmetal:"Nonmetals",cat_halogen:"Halogens",cat_noble:"Noble gases",cat_lanthanide:"Lanthanoids",cat_actinide:"Actinoids",lbl_z:"Atomic Number",lbl_mass:"Relative Atomic Mass",lbl_en_pauling:"Electronegativity (Pauling)",lbl_en_ar:"Electronegativity (Allred-Rochow)",lbl_config:"Electron Configuration",lbl_ox:"Oxidation States",lbl_mp:"Melting Point",lbl_bp:"Boiling Point",lbl_density:"Density (20°C)",lbl_discovery:"Discovered",lbl_block:"Block & Period",wiki_btn:"Wikipedia Article ↗",prev:"← Previous",next:"Next →",close:"Close (Esc)",zoom_in:"Zoom In (+)",zoom_out:"Zoom Out (−)",zoom_reset:"Reset Zoom"},de:{search_placeholder:"Element suchen (z.B. Fe, Eisen, 26)...",detailed_search:"Erweiterte Suche",density_label:"Dichte",density_unit:"g/cm³",boiling_point:"Siedepunkt",melting_point:"Schmelzpunkt",electronegativity:"Elektronegativität (Pauling)",electron_config:"Elektronenkonfiguration",electron_config_placeholder:"z.B. 3d, 4f, [Xe], 6s",oxidation_states:"Oxidationsstufen",oxidation_states_placeholder:"z.B. +2, +3, -1",filter_min:"Min",filter_max:"Max",reset_filters:"Filter zurücksetzen",results_count:"Elemente",toggle_f_block:"Lanthanoide & Actinoide",toggle_d_block:"Nebengruppen (3-12)",main_groups_badge:"8 Hauptgruppen",full_table_badge:"Alle 18 Gruppen",group_col_prefix:"Gruppe",period_row_prefix:"P",state_title:"Aggregatzustand (20°C):",cat_title:"Serien:",state_solid:"Fest",state_liquid:"Flüssig",state_gas:"Gasförmig",state_synthetic:"Künstlich",cat_alkali:"Alkalimetalle",cat_alkaline:"Erdalkalimetalle",cat_transition:"Übergangsmetalle",cat_post_transition:"Metalle",cat_metalloid:"Halbmetalle",cat_nonmetal:"Nichtmetalle",cat_halogen:"Halogene",cat_noble:"Edelgase",cat_lanthanide:"Lanthanoide",cat_actinide:"Actinoide",lbl_z:"Ordnungszahl",lbl_mass:"Relative Atommasse",lbl_en_pauling:"Elektronegativität (Pauling)",lbl_en_ar:"Elektronegativität (Allred-Rochow)",lbl_config:"Elektronenkonfiguration",lbl_ox:"Oxidationsstufen",lbl_mp:"Schmelzpunkt",lbl_bp:"Siedepunkt",lbl_density:"Dichte (20°C)",lbl_discovery:"Entdeckung",lbl_block:"Block & Periode",wiki_btn:"Wikipedia-Artikel ↗",prev:"← Vorheriges",next:"Nächstes →",close:"Schließen (Esc)",zoom_in:"Vergrößern (+)",zoom_out:"Verkleinern (−)",zoom_reset:"Zoom zurücksetzen"}},j=[{key:"alkali",labelKey:"cat_alkali",color:"var(--pse-cat-alkali)"},{key:"alkaline-earth",labelKey:"cat_alkaline",color:"var(--pse-cat-alkaline)"},{key:"transition",labelKey:"cat_transition",color:"var(--pse-cat-transition)"},{key:"post-transition",labelKey:"cat_post_transition",color:"var(--pse-cat-post-transition)"},{key:"metalloid",labelKey:"cat_metalloid",color:"var(--pse-cat-metalloid)"},{key:"nonmetal",labelKey:"cat_nonmetal",color:"var(--pse-cat-nonmetal)"},{key:"halogen",labelKey:"cat_halogen",color:"var(--pse-cat-halogen)"},{key:"noble",labelKey:"cat_noble",color:"var(--pse-cat-noble)"},{key:"lanthanide",labelKey:"cat_lanthanide",color:"var(--pse-cat-lanthanide)"},{key:"actinide",labelKey:"cat_actinide",color:"var(--pse-cat-actinide)"}],C=[{g:1,roman:"I A",name_en:"Alkali metals",name_de:"Alkalimetalle"},{g:2,roman:"II A",name_en:"Alkaline earth",name_de:"Erdalkalimetalle"},{g:3,roman:"III B",name_en:"Scandium group",name_de:"Scandiumgruppe"},{g:4,roman:"IV B",name_en:"Titanium group",name_de:"Titangruppe"},{g:5,roman:"V B",name_en:"Vanadium group",name_de:"Vanadiumgruppe"},{g:6,roman:"VI B",name_en:"Chromium group",name_de:"Chromgruppe"},{g:7,roman:"VII B",name_en:"Manganese group",name_de:"Mangangruppe"},{g:8,roman:"VIII B",name_en:"Iron group",name_de:"Eisengruppe"},{g:9,roman:"VIII B",name_en:"Cobalt group",name_de:"Cobaltgruppe"},{g:10,roman:"VIII B",name_en:"Nickel group",name_de:"Nickelgruppe"},{g:11,roman:"I B",name_en:"Copper group",name_de:"Kupfergruppe"},{g:12,roman:"II B",name_en:"Zinc group",name_de:"Zinkgruppe"},{g:13,roman:"III A",name_en:"Boron group",name_de:"Borgruppe"},{g:14,roman:"IV A",name_en:"Carbon group",name_de:"Kohlenstoffgruppe"},{g:15,roman:"V A",name_en:"Pnictogens",name_de:"Stickstoffgruppe"},{g:16,roman:"VI A",name_en:"Chalcogens",name_de:"Chalkogene"},{g:17,roman:"VII A",name_en:"Halogens",name_de:"Halogene"},{g:18,roman:"VIII A",name_en:"Noble gases",name_de:"Edelgase"}],x=[{g:1,roman:"I A",name_en:"Alkali metals",name_de:"Alkalimetalle"},{g:2,roman:"II A",name_en:"Alkaline earth",name_de:"Erdalkalimetalle"},{g:13,roman:"III A",name_en:"Boron group",name_de:"Borgruppe"},{g:14,roman:"IV A",name_en:"Carbon group",name_de:"Kohlenstoffgruppe"},{g:15,roman:"V A",name_en:"Nitrogen group",name_de:"Stickstoffgruppe"},{g:16,roman:"VI A",name_en:"Chalcogens",name_de:"Chalkogene"},{g:17,roman:"VII A",name_en:"Halogens",name_de:"Halogene"},{g:18,roman:"VIII A",name_en:"Noble gases",name_de:"Edelgase"}];function y(e,t){const o=e.z,i=e.p,n=e.g,a=e.cat;if(a==="lanthanide"){const e=o-57;return{row:10,col:4+e,isFBlock:!0,isDBlock:!1}}if(a==="actinide"){const e=o-89;return{row:11,col:4+e,isFBlock:!0,isDBlock:!1}}const r=1+i;let s=1+n;const c=n>=3&&n<=12&&i>=4;return t&&(n<=2?s=1+n:n>=13&&(s=1+(n-10))),{row:r,col:s,isFBlock:!1,isDBlock:c}}function f(){t.innerHTML="";const i=g[n],z=document.createElement("div");z.className="pse-toolbar";const H=document.createElement("div");H.className="pse-controls-group";const R=document.createElement("div");R.className="pse-search-box",R.innerHTML=`
        <div class="pse-search-input-wrap">
          <span class="pse-search-icon">🔍</span>
          <input type="text" id="pse-search-input" placeholder="${i.search_placeholder}" autocomplete="off" value="${l||""}" />
          <button class="pse-search-clear" id="pse-search-clear" title="Clear" style="${l?"display:block;":""}">✕</button>
        </div>
        <button type="button" class="pse-detailed-search-btn ${d?"active":""}" id="pse-btn-detailed-search" title="${i.detailed_search}">
          <span>⚙️</span>
          <span>${i.detailed_search}</span>
        </button>
      `,H.appendChild(R);const v=document.createElement("div");v.className="pse-controls-group";const w=document.createElement("button");w.className=`pse-btn ${o?"":"active"}`,w.id="pse-btn-dblock",w.innerHTML=`<span>⊞</span> <span>${i.toggle_d_block}</span>`,w.title=o?i.full_table_badge:i.main_groups_badge;const A=document.createElement("button");A.className=`pse-btn ${s?"":"active"}`,A.id="pse-btn-fblock",A.innerHTML=`<span>⊟</span> <span>${i.toggle_f_block}</span>`;const k=document.createElement("button");k.className="pse-btn",k.id="pse-btn-lang",k.innerHTML=`<span>🌐</span> <strong>${n.toUpperCase()}</strong>`,k.title=n==="en"?"Auf Deutsch umschalten":"Switch to English";const L=document.createElement("div");L.className="pse-zoom-btns",L.innerHTML=`
        <button id="pse-zoom-out" title="${i.zoom_out}">−</button>
        <button id="pse-zoom-reset" title="${i.zoom_reset}">100%</button>
        <button id="pse-zoom-in" title="${i.zoom_in}">+</button>
      `,v.appendChild(w),v.appendChild(A),v.appendChild(k),v.appendChild(L),z.appendChild(H),z.appendChild(v),t.appendChild(z);const b=document.createElement("div");b.className="pse-detailed-panel",b.id="pse-detailed-panel",b.style.display=d?"block":"none",b.innerHTML=`
        <div class="pse-detailed-grid">
          <div class="pse-detailed-field">
            <label>${i.electronegativity}</label>
            <div class="pse-range-inputs">
              <input type="number" step="0.1" min="0" max="4.0" id="pse-filter-en-min" placeholder="${i.filter_min} (0.7)" value="${e.enMin!==null?e.enMin:""}" />
              <span>–</span>
              <input type="number" step="0.1" min="0" max="4.0" id="pse-filter-en-max" placeholder="${i.filter_max} (4.0)" value="${e.enMax!==null?e.enMax:""}" />
            </div>
          </div>
          <div class="pse-detailed-field">
            <label>${i.density_label} (${i.density_unit})</label>
            <div class="pse-range-inputs">
              <input type="number" step="0.01" min="0" id="pse-filter-density-min" placeholder="${i.filter_min}" value="${e.densityMin!==null?e.densityMin:""}" />
              <span>–</span>
              <input type="number" step="0.01" min="0" id="pse-filter-density-max" placeholder="${i.filter_max}" value="${e.densityMax!==null?e.densityMax:""}" />
            </div>
          </div>
          <div class="pse-detailed-field">
            <label>${i.melting_point} (°C)</label>
            <div class="pse-range-inputs">
              <input type="number" step="1" id="pse-filter-mp-min" placeholder="${i.filter_min}" value="${e.mpMin!==null?e.mpMin:""}" />
              <span>–</span>
              <input type="number" step="1" id="pse-filter-mp-max" placeholder="${i.filter_max}" value="${e.mpMax!==null?e.mpMax:""}" />
            </div>
          </div>
          <div class="pse-detailed-field">
            <label>${i.boiling_point} (°C)</label>
            <div class="pse-range-inputs">
              <input type="number" step="1" id="pse-filter-bp-min" placeholder="${i.filter_min}" value="${e.bpMin!==null?e.bpMin:""}" />
              <span>–</span>
              <input type="number" step="1" id="pse-filter-bp-max" placeholder="${i.filter_max}" value="${e.bpMax!==null?e.bpMax:""}" />
            </div>
          </div>
          <div class="pse-detailed-field">
            <label>${i.electron_config}</label>
            <input type="text" id="pse-filter-config" placeholder="${i.electron_config_placeholder}" value="${e.config||""}" />
          </div>
          <div class="pse-detailed-field">
            <label>${i.oxidation_states}</label>
            <input type="text" id="pse-filter-ox" placeholder="${i.oxidation_states_placeholder}" value="${e.ox||""}" />
          </div>
        </div>
        <div class="pse-detailed-footer">
          <span class="pse-detailed-count" id="pse-detailed-count"></span>
          <button type="button" class="pse-btn pse-btn-reset-filters" id="pse-btn-reset-filters">${i.reset_filters}</button>
        </div>
      `,t.appendChild(b);const S=document.createElement("div");S.className="pse-legend-bar";const M=document.createElement("div");M.className="pse-legend-row",M.innerHTML=`<span class="pse-legend-title">${i.cat_title}</span>`;const B=document.createElement("div");B.className="pse-legend-items",j.forEach(e=>{const n=document.createElement("span");n.className=`pse-legend-pill ${c===e.key?"active":""}`,n.dataset.cat=e.key,n.innerHTML=`
          <span class="pse-pill-dot" style="background:${e.color};"></span>
          <span>${i[e.labelKey]}</span>
        `,n.addEventListener("click",()=>{c===e.key?c=null:c=e.key;const n=t.querySelectorAll(".pse-legend-pill[data-cat]");n.forEach(e=>e.classList.toggle("active",e.dataset.cat===c)),u()}),B.appendChild(n)}),M.appendChild(B);const T=document.createElement("div");T.className="pse-legend-row",T.innerHTML=`<span class="pse-legend-title">${i.state_title}</span>`;const I=document.createElement("div");I.className="pse-legend-items";const V=[{key:"solid",label:i.state_solid,dotClass:"pse-state-dot-solid"},{key:"liquid",label:i.state_liquid,dotClass:"pse-state-dot-liquid"},{key:"gas",label:i.state_gas,dotClass:"pse-state-dot-gas"},{key:"synthetic",label:i.state_synthetic,dotClass:"pse-state-dot-synthetic"}];V.forEach(e=>{const t=document.createElement("span");t.className="pse-legend-pill",t.style.cursor="default",t.innerHTML=`
          <span class="pse-pill-dot ${e.dotClass}"></span>
          <span>${e.label}</span>
        `,I.appendChild(t)}),T.appendChild(I),S.appendChild(M),S.appendChild(T),t.appendChild(S);const N=document.createElement("div");N.className="pse-viewport";const D=document.createElement("div");D.className="pse-canvas",D.id="pse-canvas";const a=document.createElement("div");a.className="pse-grid";const _=document.createElement("div");_.className="pse-hdr-col",_.style.gridRow="1",_.style.gridColumn="1",_.textContent="#",a.appendChild(_);const $=o?x:C;$.forEach((e,t)=>{const s=document.createElement("div");s.className=`pse-hdr-col ${e.g>=3&&e.g<=12?"pse-hdr-d-block":""}`,s.style.gridRow="1",s.style.gridColumn=String(2+t),s.innerHTML=`
          <span>${e.g}</span>
          <span class="sub">${e.roman}</span>
        `,s.title=n==="de"?e.name_de:e.name_en,a.appendChild(s)});for(let t=1;t<=7;t++){const e=document.createElement("div");e.className="pse-hdr-row",e.style.gridRow=String(1+t),e.style.gridColumn="1",e.textContent=String(t),a.appendChild(e)}const P=document.createElement("div");P.className="pse-f-block-gap",P.style.gridRow="9",a.appendChild(P);const p=document.createElement("div");p.className="pse-hdr-row pse-f-block-row",p.style.gridRow="10",p.style.gridColumn="1 / span 3",p.style.fontSize="0.7rem",p.textContent=n==="de"?"Lanthanoide *":"Lanthanoids *",a.appendChild(p);const f=document.createElement("div");if(f.className="pse-hdr-row pse-f-block-row",f.style.gridRow="11",f.style.gridColumn="1 / span 3",f.style.fontSize="0.7rem",f.textContent=n==="de"?"Actinoide **":"Actinoids **",a.appendChild(f),!o){const e=document.createElement("div");e.className="pse-f-placeholder",e.dataset.series="lanthanide",e.style.gridRow="7",e.style.gridColumn="4",e.innerHTML=`
          <span class="z-range">* 57–71</span>
          <span class="series-name">La–Lu</span>
        `,e.title=n==="de"?"Zu den Lanthanoiden springen":"View Lanthanoids",e.addEventListener("click",()=>{s&&(s=!1,h());const e=document.querySelector('.pse-cell[data-z="57"]');e&&e.scrollIntoView({behavior:"smooth",block:"center"})}),a.appendChild(e);const t=document.createElement("div");t.className="pse-f-placeholder",t.dataset.series="actinide",t.style.gridRow="8",t.style.gridColumn="4",t.innerHTML=`
          <span class="z-range">** 89–103</span>
          <span class="series-name">Ac–Lr</span>
        `,t.title=n==="de"?"Zu den Actinoiden springen":"View Actinoids",t.addEventListener("click",()=>{s&&(s=!1,h());const e=document.querySelector('.pse-cell[data-z="89"]');e&&e.scrollIntoView({behavior:"smooth",block:"center"})}),a.appendChild(t)}m.forEach(e=>{const s=y(e,o),u=n==="de"?e.n_de:e.n_en,t=document.createElement("div");let c=`pse-cell`;s.isDBlock&&(c+=` pse-d-block`),s.isFBlock&&(c+=` pse-f-block-row`),t.className=c,t.dataset.z=e.z,t.dataset.sym=e.s.toLowerCase(),t.dataset.nameEn=e.n_en.toLowerCase(),t.dataset.nameDe=e.n_de.toLowerCase(),t.dataset.cat=e.cat,t.dataset.state=e.state,t.style.gridRow=String(s.row),t.style.gridColumn=String(s.col);let l=e.mp!=="-"?`${e.mp}°`:"-",d=e.bp!=="-"?`${e.bp}°`:"-";t.innerHTML=`
          <div class="pse-cell-top">
            <span class="pse-mass" title="${i.lbl_mass}: ${e.mass}">${e.mass}</span>
            <span class="pse-en" title="${i.lbl_en_pauling}: ${e.en}">${e.en!=="-"?e.en:""}</span>
          </div>
          <div class="pse-cell-mid">
            <span class="pse-z">${e.z}</span>
            <span class="pse-symbol">${e.s}</span>
          </div>
          <div class="pse-cell-bot">
            <span class="pse-name">${u}</span>
            <div class="pse-cell-bot-metrics">
              <span class="pse-mpbp" title="${i.lbl_mp}: ${l} / ${i.lbl_bp}: ${d}">${l}/${d}</span>
              <span class="pse-density" title="${i.lbl_density}: ${e.density}">${e.density.split(" ")[0]}</span>
            </div>
          </div>
        `,t.addEventListener("click",()=>r(e.z)),a.appendChild(t)}),D.appendChild(a),N.appendChild(D),t.appendChild(N);const F=document.createElement("div");F.className="pse-modal-overlay",F.id="pse-modal",F.innerHTML=`
        <div class="pse-modal-card" role="dialog" aria-modal="true">
          <button class="pse-modal-close" id="pse-modal-close" title="${i.close}">✕</button>
          
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
              <span class="pse-prop-label">${i.lbl_mass}</span>
              <span class="pse-prop-value" id="modal-prop-mass"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_en_pauling}</span>
              <span class="pse-prop-value" id="modal-prop-en"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_en_ar}</span>
              <span class="pse-prop-value" id="modal-prop-en-ar"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_config}</span>
              <span class="pse-prop-value" id="modal-prop-config"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_ox}</span>
              <span class="pse-prop-value" id="modal-prop-ox"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_mp}</span>
              <span class="pse-prop-value" id="modal-prop-mp"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_bp}</span>
              <span class="pse-prop-value" id="modal-prop-bp"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_density}</span>
              <span class="pse-prop-value" id="modal-prop-density"></span>
            </div>
            <div class="pse-prop-item">
              <span class="pse-prop-label">${i.lbl_discovery}</span>
              <span class="pse-prop-value" id="modal-prop-year"></span>
            </div>
          </div>

          <div class="pse-modal-desc" id="modal-desc"></div>

          <div class="pse-modal-footer">
            <div class="pse-modal-nav">
              <button class="pse-btn" id="modal-btn-prev">${i.prev}</button>
              <button class="pse-btn" id="modal-btn-next">${i.next}</button>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" class="pse-wiki-btn" id="modal-wiki-btn">
              <span>📖</span> <span id="modal-wiki-text">${i.wiki_btn}</span>
            </a>
          </div>
        </div>
      `,t.appendChild(F),O(),h(),E()}function h(){o?t.classList.add("collapse-d-block"):t.classList.remove("collapse-d-block"),s?t.classList.add("collapse-f-block"):t.classList.remove("collapse-f-block");const e=document.getElementById("pse-btn-dblock");e&&e.classList.toggle("active",!o);const n=document.getElementById("pse-btn-fblock");n&&n.classList.toggle("active",!s),u()}function b(e){if(!e)return"";const t={"¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","⁰":"0"};return e.replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g,e=>t[e]||e).toLowerCase().replace(/\s+/g,"")}function _(e){if(!e||e==="-")return null;const t=parseFloat(e);return isNaN(t)?null:e.includes("g/L")?t/1e3:t}function w(e,t){if(!e||e==="-"||!t)return!1;const n=t.trim(),s=n.replace(/^\+/,""),o=n.startsWith("-"),i=e.split(",").map(e=>e.trim());return i.some(e=>{if(o)return e===n;const t=e.replace(/^\+/,"");return t===s||e===n})}function u(){const a=l.trim().toLowerCase(),v=e.enMin!==null||e.enMax!==null,p=e.densityMin!==null||e.densityMax!==null,h=e.mpMin!==null||e.mpMax!==null,u=e.bpMin!==null||e.bpMax!==null,r=Boolean(e.config&&e.config.trim()),d=Boolean(e.ox&&e.ox.trim()),f=Boolean(c),C=Boolean(a||v||p||h||u||r||d||f),E=r?b(e.config):"",k=d?e.ox.trim():"",A=t.querySelectorAll(".pse-cell"),i=t.querySelector('.pse-f-placeholder[data-series="lanthanide"]'),o=t.querySelector('.pse-f-placeholder[data-series="actinide"]');if(!C){A.forEach(e=>e.classList.remove("dimmed","matched")),i&&i.classList.remove("dimmed","matched"),o&&o.classList.remove("dimmed","matched");const e=document.getElementById("pse-detailed-count");e&&(e.textContent="");return}let j=0,y=!1,O=!1;m.forEach(n=>{let s=!0;if(a){const t=String(n.z),e=n.s.toLowerCase(),o=n.n_en.toLowerCase(),i=n.n_de.toLowerCase(),r=t===a||e===a||e.startsWith(a)||o.includes(a)||i.includes(a);r||(s=!1)}if(s&&f&&n.cat!==c&&(s=!1),s&&v)if(n.en==="-"||!n.en)s=!1;else{const t=parseFloat(n.en);isNaN(t)?s=!1:(e.enMin!==null&&t<e.enMin&&(s=!1),e.enMax!==null&&t>e.enMax&&(s=!1))}if(s&&p){const t=_(n.density);t===null?s=!1:(e.densityMin!==null&&t<e.densityMin&&(s=!1),e.densityMax!==null&&t>e.densityMax&&(s=!1))}if(s&&h)if(n.mp==="-"||!n.mp)s=!1;else{const t=parseFloat(n.mp);isNaN(t)?s=!1:(e.mpMin!==null&&t<e.mpMin&&(s=!1),e.mpMax!==null&&t>e.mpMax&&(s=!1))}if(s&&u)if(n.bp==="-"||!n.bp)s=!1;else{const t=parseFloat(n.bp);isNaN(t)?s=!1:(e.bpMin!==null&&t<e.bpMin&&(s=!1),e.bpMax!==null&&t>e.bpMax&&(s=!1))}if(s&&r){const e=b(n.config);e.includes(E)||(s=!1)}s&&d&&(w(n.ox,k)||(s=!1));const o=t.querySelector(`.pse-cell[data-z="${n.z}"]`);o&&(s?(o.classList.remove("dimmed"),o.classList.add("matched"),j++,n.cat==="lanthanide"&&(y=!0),n.cat==="actinide"&&(O=!0)):(o.classList.add("dimmed"),o.classList.remove("matched")))}),i&&(y&&s?(i.classList.add("matched"),i.classList.remove("dimmed")):(i.classList.remove("matched"),i.classList.add("dimmed"))),o&&(O&&s?(o.classList.add("matched"),o.classList.remove("dimmed")):(o.classList.remove("matched"),o.classList.add("dimmed")));const x=document.getElementById("pse-detailed-count");if(x){const e=g[n];x.textContent=`${j} / 118 ${e.results_count}`}}function O(){const P=document.getElementById("pse-btn-dblock");P&&P.addEventListener("click",()=>{o=!o,f()});const T=document.getElementById("pse-btn-fblock");T&&T.addEventListener("click",()=>{s=!s,h()});const F=document.getElementById("pse-btn-lang");F&&F.addEventListener("click",()=>{n=n==="en"?"de":"en",t.dataset.lang=n,f()});const M=document.getElementById("pse-btn-detailed-search"),R=document.getElementById("pse-detailed-panel");M&&R&&M.addEventListener("click",()=>{d=!d,R.style.display=d?"block":"none",M.classList.toggle("active",d)});const c=e=>{const t=(e||"").trim();if(!t)return null;const n=parseFloat(t);return isNaN(n)?null:n},y=document.getElementById("pse-filter-en-min"),_=document.getElementById("pse-filter-en-max"),g=document.getElementById("pse-filter-density-min"),O=document.getElementById("pse-filter-density-max"),x=document.getElementById("pse-filter-mp-min"),C=document.getElementById("pse-filter-mp-max"),w=document.getElementById("pse-filter-bp-min"),b=document.getElementById("pse-filter-bp-max"),m=document.getElementById("pse-filter-config"),j=document.getElementById("pse-filter-ox"),z=document.getElementById("pse-btn-reset-filters"),V=()=>{y&&(e.enMin=c(y.value)),_&&(e.enMax=c(_.value)),g&&(e.densityMin=c(g.value)),O&&(e.densityMax=c(O.value)),x&&(e.mpMin=c(x.value)),C&&(e.mpMax=c(C.value)),w&&(e.bpMin=c(w.value)),b&&(e.bpMax=c(b.value)),m&&(e.config=m.value),j&&(e.ox=j.value),u()};[y,_,g,O,x,C,w,b,m,j].forEach(e=>{e&&e.addEventListener("input",V)}),z&&z.addEventListener("click",()=>{e={enMin:null,enMax:null,densityMin:null,densityMax:null,mpMin:null,mpMax:null,bpMin:null,bpMax:null,config:"",ox:""},y&&(y.value=""),_&&(_.value=""),g&&(g.value=""),O&&(O.value=""),x&&(x.value=""),C&&(C.value=""),w&&(w.value=""),b&&(b.value=""),m&&(m.value=""),j&&(j.value=""),u()});const E=document.getElementById("pse-search-input"),k=document.getElementById("pse-search-clear");E&&k&&(E.addEventListener("input",e=>{l=e.target.value.trim().toLowerCase(),k.style.display=l?"block":"none",u()}),k.addEventListener("click",()=>{E.value="",l="",k.style.display="none",u(),E.focus()}));const D=document.getElementById("pse-canvas"),N=document.getElementById("pse-zoom-in"),L=document.getElementById("pse-zoom-out"),A=document.getElementById("pse-zoom-reset");function S(){D&&(D.style.transform=`scale(${i})`,A&&(A.textContent=`${Math.round(i*100)}%`))}N&&N.addEventListener("click",()=>{i<1.4&&(i=parseFloat((i+.1).toFixed(1)),S())}),L&&L.addEventListener("click",()=>{i>.6&&(i=parseFloat((i-.1).toFixed(1)),S())}),A&&A.addEventListener("click",()=>{i=1,S()});const v=document.getElementById("pse-modal"),H=document.getElementById("pse-modal-close"),I=document.getElementById("modal-btn-prev"),B=document.getElementById("modal-btn-next");H&&H.addEventListener("click",p),v&&v.addEventListener("click",e=>{e.target===v&&p()}),I&&I.addEventListener("click",()=>{const e=a>1?a-1:118;r(e)}),B&&B.addEventListener("click",()=>{const e=a<118?a+1:1;r(e)}),window.addEventListener("keydown",e=>{if(!v||!v.classList.contains("open"))return;if(e.key==="Escape")p();else if(e.key==="ArrowLeft"){const e=a>1?a-1:118;r(e)}else if(e.key==="ArrowRight"){const e=a<118?a+1:1;r(e)}})}function r(e){const t=v.get(Number(e));if(!t)return;a=t.z;const o=g[n],i=document.getElementById("pse-modal");if(!i)return;const r=n==="de"?t.n_de:t.n_en,c=n==="de"?t.desc_de:t.desc_en,l=n==="de"?t.wiki_de:t.wiki_en,d=document.getElementById("modal-symbol-badge");d.style.borderColor=`var(--pse-cat-${t.cat})`,document.getElementById("modal-z").textContent=t.z,document.getElementById("modal-sym").textContent=t.s,document.getElementById("modal-sym").style.color=`var(--pse-state-${t.state})`,document.getElementById("modal-mass").textContent=t.mass,document.getElementById("modal-title").textContent=`${r} (${t.s})`;const u=j.find(e=>e.key===t.cat)?.labelKey||"cat_nonmetal";document.getElementById("modal-badge-cat").innerHTML=`🏷️ ${o[u]}`,document.getElementById("modal-badge-cat").style.borderColor=`var(--pse-cat-${t.cat})`;const h=o[`state_${t.state}`]||t.state;document.getElementById("modal-badge-state").innerHTML=`💧 ${h}`;let s="s";t.cat==="lanthanide"||t.cat==="actinide"?s="f":t.g>=13?s="p":t.g>=3&&t.g<=12&&(s="d"),document.getElementById("modal-badge-block").innerHTML=`⚛️ Block ${s.toUpperCase()} • P${t.p} G${t.g}`,document.getElementById("modal-prop-mass").textContent=t.mass,document.getElementById("modal-prop-en").textContent=t.en!=="-"?t.en:"—",document.getElementById("modal-prop-en-ar").textContent=t.en_ar!=="-"?t.en_ar:"—",document.getElementById("modal-prop-config").textContent=t.config,document.getElementById("modal-prop-ox").textContent=t.ox,document.getElementById("modal-prop-mp").textContent=t.mp!=="-"?`${t.mp} °C`:"—",document.getElementById("modal-prop-bp").textContent=t.bp!=="-"?`${t.bp} °C`:"—",document.getElementById("modal-prop-density").textContent=t.density,document.getElementById("modal-prop-year").textContent=t.year,document.getElementById("modal-desc").textContent=c;const m=document.getElementById("modal-wiki-btn");m.href=l,history.replaceState(null,null,`#el-${t.s}`),i.classList.add("open"),document.body.style.overflow="hidden"}function p(){const e=document.getElementById("pse-modal");e&&(e.classList.remove("open"),document.body.style.overflow=""),history.replaceState(null,null,window.location.pathname)}function E(){const e=window.location.hash;if(!e)return;if(e.startsWith("#el-")){const n=e.replace("#el-","").toLowerCase(),t=m.find(e=>e.s.toLowerCase()===n);t&&r(t.z)}else if(e.startsWith("#z-")){const t=parseInt(e.replace("#z-",""),10);t>=1&&t<=118&&r(t)}else{const t=parseInt(e.replace("#",""),10);!isNaN(t)&&t>=1&&t<=118&&r(t)}}f()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})()