import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as i}from"./react-hfl1SUVM.js";import{M as r,C as t}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as a,A as c,D as l}from"./index-Ji8mAZlR.js";import{C as d,P as h,S as m,N as p,A as f,T as x,G as j}from"./colors.stories-BkQoZGOe.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";import"./LinearGradient-D-mTzrbk.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./Button-DVRCyaXo.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./gradients-Yoe7k8Uk.js";import"./gradients-Yl7j2Tm5.js";import"./_shared-DPMwbqRR.js";function s(n){const o={code:"code",h2:"h2",p:"p",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(a,{title:"Colors",meta:"Foundations · tokens",children:e.jsx(o.p,{children:`Nine primitive ramps, a semantic layer on top, and a few named gradients. Components read the semantic layer only.
Saffron is the action colour (D17). Cobalt is the accent.`})}),`
`,e.jsxs(o.p,{children:["Source: ",e.jsx(o.code,{children:"src/tokens/colors.ts"}),", ",e.jsx(o.code,{children:"src/tokens/gradients.ts"}),", ",e.jsx(o.code,{children:"src/theme/gradients.ts"}),"."]}),`
`,e.jsx(o.h2,{id:"how-the-layers-work",children:"How the layers work"}),`
`,e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"primitive"})," is a raw value: ",e.jsx(o.code,{children:"primitives.saffron[500]"}),". A ",e.jsx(o.strong,{children:"semantic"})," token is a role that points at a primitive: ",e.jsx(o.code,{children:"colors.action.primary.default"}),". A component asks for the role and never for the raw value. To re-theme, change the semantic mapping in one place."]}),`
`,e.jsx(c,{parts:[{part:"Primary action fill",token:"colors.action.primary.default",note:"Saffron 500. D17: the only solid button colour."},{part:"Accent and links",token:"colors.action.accent.default, colors.text.link",note:"Cobalt. Outline and secondary buttons, selected chips, links."},{part:"Cashback",token:"colors.cashback.default",note:"Saffron 500. Shares a hex with the primary action on purpose."},{part:"Feedback",token:"colors.feedback.{success,warning,error,info}",note:"Fern, Amber, Ruby, Cobalt."},{part:"Text",token:"colors.text.{primary,secondary,tertiary,disabled}",note:"Slate 900, 700, 600, 500."}]}),`
`,e.jsx(o.h2,{id:"primitives",children:"Primitives"}),`
`,e.jsx(t,{of:h}),`
`,e.jsxs(o.p,{children:['Two things to know when you read the "semantic" lines. Several steps share a hex: saffron 50 and 100 are both ',e.jsx(o.code,{children:"#fff4eb"}),", so both swatches list the same semantic names. The transparent ramps repeat the values in ",e.jsx(o.code,{children:"alpha"})," (opacity.ts)."]}),`
`,e.jsx(o.h2,{id:"semantic-tokens",children:"Semantic tokens"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h2,{id:"semantic-tokens-with-no-primitive",children:"Semantic tokens with no primitive"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(o.p,{children:"These hold raw hex or rgba: a design system gap. Decide per token: add a primitive, or keep it as a documented one-off."}),`
`,e.jsx(o.h2,{id:"action-roles-d17",children:"Action roles (D17)"}),`
`,e.jsx(t,{of:f}),`
`,e.jsxs(o.p,{children:["Decision D17 in ",e.jsx(o.code,{children:"docs/decision.md"}),": every solid button is Saffron, including the places Figma draws Cobalt. ",e.jsx(o.code,{children:'tone="accent"'})," is the opt-in Cobalt fill."]}),`
`,e.jsx(o.h2,{id:"tones",children:"Tones"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(o.h2,{id:"gradients",children:"Gradients"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(l,{dos:["Use `colors.*` in components.","Use `colors.action.primary.*` for the one solid action on a screen.","Use `colors.tones.*` for feedback surfaces."],donts:["Do not import `primitives` in a component.","Do not type a hex value in a component.","Do not fill a button with Cobalt unless it is the opt-in accent."]})]})}function X(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{X as default};
