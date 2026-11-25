import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as n}from"./react-hfl1SUVM.js";import{M as a,C as r}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as i,A as d,D as c}from"./index-Ji8mAZlR.js";import{I as m,C as l,S as h,a as p,b as g,B as x,A as j}from"./imagery.stories-CtN-ufRm.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./index-DCss3D-b.js";import"./logos-XBz1XT29.js";import"./xml-Bn01aVoN.js";import"./_shared-DPMwbqRR.js";function s(o){const t={code:"code",h2:"h2",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(i,{title:"Imagery",meta:"Foundations · assets",children:e.jsx(t.p,{children:`Raster and SVG art the app ships: card art, store and brand logos, categories, illustrations, backgrounds and the app wordmark.
The component pages are under Components / Media.`})}),`
`,e.jsxs(t.p,{children:["Source: ",e.jsx(t.code,{children:"src/assets/images/index.ts"})," (the ",e.jsx(t.code,{children:"images"})," registry), ",e.jsx(t.code,{children:"src/assets/logos.ts"}),"."]}),`
`,e.jsx(d,{parts:[{part:"Registry",token:"images.<group>.<name>",note:"Every file is listed by hand, because Metro needs a string-literal require()."},{part:"Card art",token:"images.cards.*",note:"Key is the filename without the card- prefix, in camelCase."},{part:"Logo height",token:"mediaSize[n]",note:"Pick the frame from Components / Media."},{part:"Wordmark",token:"logos.lightSmall, darkSmall, …",note:"SVG components."}]}),`
`,e.jsx(t.h2,{id:"card-art",children:"Card art"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t.h2,{id:"store-and-brand-logos",children:"Store and brand logos"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h2,{id:"categories-and-filters",children:"Categories and filters"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.h2,{id:"illustrations",children:"Illustrations"}),`
`,e.jsx(r,{of:g}),`
`,e.jsxs(t.p,{children:["Only three illustrations exist for ",e.jsx(t.code,{children:"ScreenState"})," today: ",e.jsx(t.code,{children:"appOrders"}),", ",e.jsx(t.code,{children:"tracking"}),", ",e.jsx(t.code,{children:"confirmation"}),`. Figma has "Connection lost" and "Something didn't go as planned" frames that are not exported yet (a gap, see the Patterns pages).`]}),`
`,e.jsx(t.h2,{id:"backgrounds",children:"Backgrounds"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(t.h2,{id:"app-wordmark",children:"App wordmark"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(c,{dos:["Import from the `images` registry.","Use the `light*` logo on dark surfaces and `dark*` on light ones.","Add a new file to the registry and the manifest together."],donts:["Do not `require()` a path in a screen.",'Do not stretch art. Use `resizeMode="contain"` in a sized box.',"Do not use a card image as a logo."]})]})}function P(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
