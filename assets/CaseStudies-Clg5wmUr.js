import{r as c,j as e}from"./index-DcEn3_Ky.js";const n="/redsgn/assets/test1-DexlCYZw.jpg",l="/redsgn/assets/test2-mgGO3-S6.jpg",m="/redsgn/assets/test3-B4LngWZf.jpg";function o(){const[s,r]=c.useState(0),i=[{title:"Økologisk Gårdbutik",description:"Komplet website-optimering der forbedrede brugeroplevelsen og hjemmesidens ydeevne markant.",metrics:{beforeSize:"3.2 MB",afterSize:"0.8 MB",beforeSpeed:"5.2s",afterSpeed:"1.8s",performanceImprovement:"65% hurtigere"},image:n},{title:"Lokal Håndværker",description:"Udvikling af nyt, responsivt website med fokus på brugervenlig navigation og klart kommunikationsdesign.",metrics:{beforeSize:"N/A",afterSize:"0.6 MB",beforeSpeed:"N/A",afterSpeed:"1.5s",performanceImprovement:"Betydelig hastighedsoptimering"},image:l},{title:"Tøjbutik Online",description:"Digital transformation med fokus på at forbedre kundens digitale oplevelse og hjemmesidens funktionalitet.",metrics:{beforeSize:"4.5 MB",afterSize:"1.1 MB",beforeSpeed:"8.3s",afterSpeed:"2.1s",performanceImprovement:"75% hurtigere indlæsning"},image:m}];return e.jsx("section",{id:"cases",className:"case-studies",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Case Studies"}),e.jsx("p",{children:"Se hvordan vi har hjulpet små virksomheder med effektive webløsninger"})]}),e.jsx("div",{className:"cases-tabs",children:i.map((t,a)=>e.jsx("button",{className:`case-tab ${s===a?"active":""}`,onClick:()=>r(a),children:t.title},a))}),e.jsxs("div",{className:"case-content",children:[e.jsx("div",{className:"case-image",children:e.jsx("div",{className:"responsive-image-container aspect-16-9",children:e.jsx("img",{src:i[s].image,alt:`Case studie for ${i[s].title}`,className:"case-img"})})}),e.jsxs("div",{className:"case-details",children:[e.jsx("h3",{children:i[s].title}),e.jsx("p",{children:i[s].description}),e.jsxs("div",{className:"case-metrics",children:[e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Før størrelse:"}),e.jsx("span",{className:"metric-value",children:i[s].metrics.beforeSize})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Efter størrelse:"}),e.jsx("span",{className:"metric-value",children:i[s].metrics.afterSize})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Før indlæsningstid:"}),e.jsx("span",{className:"metric-value",children:i[s].metrics.beforeSpeed})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Efter indlæsningstid:"}),e.jsx("span",{className:"metric-value",children:i[s].metrics.afterSpeed})]}),e.jsxs("div",{className:"metric highlight",children:[e.jsx("span",{className:"metric-label",children:"Ydelsesforbedring:"}),e.jsx("span",{className:"metric-value",children:i[s].metrics.performanceImprovement})]})]}),e.jsx("a",{href:"#contact",className:"btn btn-primary",children:"Kontakt os"})]})]})]})})}export{o as default};
