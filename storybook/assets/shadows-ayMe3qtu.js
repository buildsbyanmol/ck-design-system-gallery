import{j as t}from"./iframe-DK2xttIN.js";import{useMDXComponents as a}from"./react-DKKTS5ax.js";import{M as r,C as n}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as i,A as d,D as h}from"./index-Da0salGJ.js";import{S as l,L as c,N as m,B as p,P as f}from"./shadows.stories-VjHGCvXF.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./elevation-DG0ULmpQ.js";import"./_shared-CYDU9U12.js";function s(o){const e={code:"code",h2:"h2",p:"p",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(i,{title:"Shadows",meta:"Foundations · tokens",children:t.jsx(e.p,{children:"Elevation tokens from the Figma effect styles. Three families (light, neutral, brand) with the levels xs, sm, md, lg, xl and up. Light also has glow."})}),`
`,t.jsxs(e.p,{children:["Source: ",t.jsx(e.code,{children:"src/tokens/elevation.ts"}),"."]}),`
`,t.jsx(d,{parts:[{part:"iOS shadow",token:"shadowColor, shadowOffset, shadowOpacity, shadowRadius",note:"Figma spread is ignored. iOS has no spread."},{part:"Android shadow",token:"elevation",note:"One number, set to the blur by default."},{part:"Use",token:"[styles.card, elevation.light.md]",note:"Spread the token into the style array."}]}),`
`,t.jsx(e.h2,{id:"light",children:"Light"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h2,{id:"neutral",children:"Neutral"}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h2,{id:"brand",children:"Brand"}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h2,{id:"platforms",children:"Platforms"}),`
`,t.jsx(n,{of:f}),`
`,t.jsxs(e.p,{children:["The storybook runs on react-native-web, so the picture is the iOS look. Check Android ",t.jsx(e.code,{children:"elevation"})," on a device."]}),`
`,t.jsx(h,{dos:["Use `light` by default.","Use `up` for a sticky footer that sits above content.","Use `brand` only for a saffron-tinted surface."],donts:["Do not set `shadowOpacity` by hand.","Do not stack two elevations on one surface.","Do not use `brand.*` on a neutral card."]})]})}function O(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{O as default};
