import{j as o}from"./iframe-DK2xttIN.js";import{useMDXComponents as a}from"./react-DKKTS5ax.js";import{M as s,C as n}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as r,A as c,D as d}from"./index-Da0salGJ.js";import{S as h,I as m,A as l,M as p,T as x}from"./sizes.stories-Btwqaz1y.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./motion-q_NUJArm.js";import"./_shared-CYDU9U12.js";import"./Text-Czhgaopg.js";function i(e){const t={code:"code",h2:"h2",p:"p",...a(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:h}),`
`,o.jsx(r,{title:"Sizes",meta:"Foundations · tokens",children:o.jsx(t.p,{children:'Edge lengths for icons, avatars and media, and the touch and layout sizes. From the Figma "sizes" collection.'})}),`
`,o.jsxs(t.p,{children:["Source: ",o.jsx(t.code,{children:"src/tokens/spacing.ts"})," (",o.jsx(t.code,{children:"iconSize"}),", ",o.jsx(t.code,{children:"avatarSize"}),", ",o.jsx(t.code,{children:"mediaSize"}),", ",o.jsx(t.code,{children:"sizing"}),")."]}),`
`,o.jsx(c,{parts:[{part:"Icon edge",token:"iconSize[n]",note:"8 to 56. The Icon atom default is iconSize[20]."},{part:"Avatar diameter",token:"avatarSize[n]",note:"24 to 80."},{part:"Logo or illustration height",token:"mediaSize[n]",note:"16 to 64. Not the icon scale."},{part:"Minimum touch target",token:"sizing.touchMin",note:"44. Comfortable: sizing.touchComfortable, 48."},{part:"Fixed heights",token:"sizing.inputHeight, headerHeight, bottomNavHeight",note:"44, 56, 64."}]}),`
`,o.jsx(t.h2,{id:"icons",children:"Icons"}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(t.h2,{id:"avatars",children:"Avatars"}),`
`,o.jsx(n,{of:l}),`
`,o.jsx(t.h2,{id:"media",children:"Media"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(t.h2,{id:"touch-and-layout",children:"Touch and layout"}),`
`,o.jsx(n,{of:x}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"sizing.ticketLogoW"})," (74) has no slot on the spacing or media scale. It is a named one-off for the help ticket card logo box."]}),`
`,o.jsx(d,{dos:["Keep every tap target at least `sizing.touchMin` (44) tall.","Pick a logo height from `mediaSize`.","Let containers grow with the font scale (D7)."],donts:["Do not size an icon with a raw number.","Do not reuse `iconSize` for a logo.","Do not set a fixed height on a text container."]})]})}function I(e={}){const{wrapper:t}={...a(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{I as default};
