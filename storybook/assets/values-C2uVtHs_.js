import{j as n}from"./iframe-DK2xttIN.js";import{useMDXComponents as s}from"./react-DKKTS5ax.js";import{M as r,C as o}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as i,A as d,D as p}from"./index-Da0salGJ.js";import{V as c,S as h,R as l,B as m,O as x,I as u}from"./values.stories-BK4f8li0.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./opacity-rEjPgtwf.js";import"./_shared-CYDU9U12.js";function t(e){const a={code:"code",h2:"h2",p:"p",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
`,n.jsx(i,{title:"Values",meta:"Foundations · tokens",children:n.jsx(a.p,{children:'The numbers behind layout: spacing, radius, border width and opacity. All come from the Figma "values" collection.'})}),`
`,n.jsxs(a.p,{children:["Source: ",n.jsx(a.code,{children:"src/tokens/spacing.ts"}),", ",n.jsx(a.code,{children:"src/tokens/opacity.ts"}),". Icon, avatar, media and touch sizes are on the Sizes page."]}),`
`,n.jsx(d,{parts:[{part:"Padding, margin, gap",token:"spacing[n]",note:"0 to 128 px, 18 steps."},{part:"Corner",token:"radius.xs … radius.full",note:"4 to 48 px, and 10000 for a pill."},{part:"Stroke",token:"borderWidth.hairline … extra",note:"0.5 to 3 px."},{part:"Transparency",token:"opacity[n], alpha.black[n], alpha.white[n]",note:"Named by the percentage."}]}),`
`,n.jsx(a.h2,{id:"spacing",children:"Spacing"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(a.h2,{id:"radius",children:"Radius"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(a.h2,{id:"border-width",children:"Border width"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(a.h2,{id:"opacity-and-alpha",children:"Opacity and alpha"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(a.h2,{id:"in-use",children:"In use"}),`
`,n.jsx(o,{of:u}),`
`,n.jsx(p,{dos:["Pick the nearest step: `spacing[12]`, `radius.lg`.","Use `opacity[40]` for a disabled look.","Use `alpha.black[50]` for a modal scrim."],donts:["Do not type `margin: 13`.","Do not mix a raw number with a token in one style.","Do not invent a step. Ask for a token."]})]})}function A(e={}){const{wrapper:a}={...s(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(t,{...e})}):t(e)}export{A as default};
