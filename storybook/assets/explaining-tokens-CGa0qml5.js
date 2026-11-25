import{j as e}from"./iframe-DK2xttIN.js";import{useMDXComponents as i}from"./react-DKKTS5ax.js";import{M as r,C as s}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as a,A as c,D as l}from"./index-Da0salGJ.js";import{T as d,C as h,R as p,B as m}from"./explaining-tokens.stories-Cra_LKsm.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./Button-CAf0Zm_X.js";import"./opacity-rEjPgtwf.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./gradients-Yoe7k8Uk.js";import"./elevation-DG0ULmpQ.js";import"./_shared-CYDU9U12.js";function t(o){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(a,{title:"Explaining tokens",meta:"Foundations",children:e.jsxs(n.p,{children:["A token is a named design value: a colour, a size, a type style. Cards.xtra keeps every one in ",e.jsx(n.code,{children:"src/tokens"}),`.
Components use the names, never the raw values, so a change in one place reaches the whole app.`]})}),`
`,e.jsxs(n.p,{children:["Source: ",e.jsx(n.code,{children:"src/tokens/index.ts"})," (the barrel), ",e.jsx(n.code,{children:"src/tokens/*.ts"}),", ",e.jsx(n.code,{children:"src/theme/gradients.ts"}),"."]}),`
`,e.jsx(n.h2,{id:"primitive-and-semantic",children:"Primitive and semantic"}),`
`,e.jsx(n.p,{children:"Colour has two layers."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives"})," are the raw palette: Saffron, Cobalt, Slate, Fern, Amber, Ruby, Rose, Violet, Sky and two transparent ramps. Never use them in a component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic tokens"})," give a primitive a role: ",e.jsx(n.code,{children:"colors.action.primary.default"}),", ",e.jsx(n.code,{children:"colors.text.secondary"}),", ",e.jsx(n.code,{children:"colors.feedback.error.text"}),". Components use only these."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Size, spacing, type, shadow and motion have one layer each: ",e.jsx(n.code,{children:"spacing"}),", ",e.jsx(n.code,{children:"radius"}),", ",e.jsx(n.code,{children:"typography"}),", ",e.jsx(n.code,{children:"elevation"}),", ",e.jsx(n.code,{children:"motion"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"saffron-and-cobalt-d17",children:"Saffron and Cobalt (D17)"}),`
`,e.jsxs(n.p,{children:["Decision D17 in ",e.jsx(n.code,{children:"docs/decision.md"}),": Saffron is the only solid button colour. Cobalt stays for links, outline and secondary buttons, selected chips, and the opt-in ",e.jsx(n.code,{children:'tone="accent"'})," fill. Figma draws Cobalt in some places. The app follows D17."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"type-d7",children:"Type (D7)"}),`
`,e.jsxs(n.p,{children:["Decision D7: no ",e.jsx(n.code,{children:"maxFontSizeMultiplier"})," and no ",e.jsx(n.code,{children:"adjustsFontSizeToFit"}),". Text follows the OS font size and the layout grows. Details are on the Typography page."]}),`
`,e.jsx(n.h2,{id:"where-each-token-lives",children:"Where each token lives"}),`
`,e.jsx(c,{parts:[{part:"Colour",token:"primitives, colors",note:"src/tokens/colors.ts. Page: Colors."},{part:"Gradients",token:"gradients",note:"src/tokens/gradients.ts, plus named brand gradients in src/theme/gradients.ts."},{part:"Type",token:"typography, fontFamily, fontSize, letterSpacing",note:"src/tokens/typography.ts. Page: Typography."},{part:"Spacing, radius, stroke",token:"spacing, radius, borderWidth",note:"src/tokens/spacing.ts. Page: Values."},{part:"Sizes",token:"iconSize, avatarSize, mediaSize, sizing",note:"src/tokens/spacing.ts. Page: Sizes."},{part:"Shadow",token:"elevation",note:"src/tokens/elevation.ts. Page: Shadows."},{part:"Transparency",token:"opacity, alpha",note:"src/tokens/opacity.ts. Page: Values."},{part:"Motion",token:"motion",note:"src/tokens/motion.ts. Page: Animations."}]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"gaps-in-the-token-layer",children:"Gaps in the token layer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Some semantic colours hold a raw hex with no primitive (see Colors, "no primitive").'}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gradients.ts"})," and ",e.jsx(n.code,{children:"elevation.brand"})," hold raw hex values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"saffron[50]"})," and ",e.jsx(n.code,{children:"saffron[100]"})," share one hex, and ",e.jsx(n.code,{children:"primitives.transparentBlack"})," repeats ",e.jsx(n.code,{children:"alpha.black"}),"."]}),`
`,e.jsx(n.li,{children:"There is no step-down rule for very long display amounts (D7 bans auto-shrink)."}),`
`]}),`
`,e.jsx(l,{dos:['Import from the barrel: `import { colors, spacing } from "../tokens"`.',"Pick the semantic token that names the job.","Add a semantic token when a role is missing."],donts:["Do not import `primitives` in a component.","Do not type a hex, a px size or a font size in a screen.","Do not invent a token in a component. Ask for it in the token file."]})]})}function R(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{R as default};
