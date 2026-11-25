import{j as e}from"./iframe-EJmZd_T6.js";import{useMDXComponents as i}from"./react-B0Om2SSL.js";import{M as a,C as o}from"./WithTooltip-SK46ZJ2J-rCpNH0z7.js";import{P as r,A as d,D as c}from"./index-DBEiMuYB.js";import{T as l,S as h,W as p,R as x,L as m}from"./typography.stories-RVm6Zr2Y.js";import"./preload-helper-Zf8nSx-t.js";import"./index-D8VRYNrP.js";import"./index-C8i_Hfs2.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./_shared-DjQe7OVj.js";function s(n){const t={code:"code",h2:"h2",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(r,{title:"Typography",meta:"Foundations · tokens",children:e.jsxs(t.p,{children:[`One family, Outfit, in five weights. 53 named text styles in four groups: display, heading, body, caption.
Render text with the `,e.jsx(t.code,{children:"Text"})," atom and a ",e.jsx(t.code,{children:"variant"}),". Never set size, weight or line height by hand."]})}),`
`,e.jsxs(t.p,{children:["Source: ",e.jsx(t.code,{children:"src/tokens/typography.ts"}),", ",e.jsx(t.code,{children:"src/atoms/Text.tsx"}),"."]}),`
`,e.jsx(t.h2,{id:"the-naming-rule",children:"The naming rule"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"<group><size><Weight>"}),": ",e.jsx(t.code,{children:"heading20SemiBold"})," is the Figma style Heading / 20 / Semi Bold. Each token is a full style: family, size, line height, letter spacing."]}),`
`,e.jsx(d,{parts:[{part:"Family",token:"fontFamily.regular … extraBold",note:"Outfit_400Regular to Outfit_800ExtraBold. One font file for each weight."},{part:"Size and line height",token:"typography.<variant>",note:"Set together. Do not override."},{part:"Colour",token:"Text color prop, default colors.text.primary",note:"Pass a semantic colour, such as colors.text.secondary."}]}),`
`,e.jsx(t.h2,{id:"scale",children:"Scale"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(t.h2,{id:"weights",children:"Weights"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h2,{id:"raw-scales",children:"Raw scales"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.h2,{id:"d7-no-font-size-caps",children:"D7: no font-size caps"}),`
`,e.jsxs(t.p,{children:["Decision D7 in ",e.jsx(t.code,{children:"docs/decision.md"}),": ",e.jsx(t.code,{children:"maxFontSizeMultiplier"})," and ",e.jsx(t.code,{children:"adjustsFontSizeToFit"})," misbehave on React Native's new architecture on Android. Text follows the OS setting and the layout grows with it. Known gap: no step-down rule for very long display amounts (for example 8 digits in the Earnings masthead)."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(c,{dos:['Use `<Text variant="body14Regular">`.',"Let containers grow: `minHeight`, wrapping labels.","Pass `color={colors.text.secondary}` for secondary copy."],donts:["Do not set `fontWeight`. Weights are separate fonts.","Do not add `maxFontSizeMultiplier` or `adjustsFontSizeToFit` (D7).","Do not type a font size in a screen. Extend the token file instead."]})]})}function v(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
