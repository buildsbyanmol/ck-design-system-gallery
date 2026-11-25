import{j as e}from"./iframe-DK2xttIN.js";import{useMDXComponents as o}from"./react-DKKTS5ax.js";import{M as l}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as r,S as t}from"./index-Da0salGJ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";function i(n){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Flows/3c Bounce/Overview"}),`
`,e.jsx(r,{title:"3c Bounce",meta:"Flow 3c · 2 steps · 7 states",children:e.jsx(s.p,{children:"I left a card without applying; show me a better-fitting one. Entry: closing a card detail that was opened from a Home tile, with no Apply. Auth: guest. Money-sensitive: click-out (source crosssell_rail)."})}),`
`,e.jsx(s.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`ENTRY: close a Home-tile card detail with no Apply
  v
Cross-sell rail under the tile   (flag crosssell_rail = "rail" by default; holdout logs nothing)
  lens chips -> up to 3 picks -> "Check what I can get" -> Hide -> "View all cards"
  |-- a pick ------------------> Card detail (3a) -> Apply [MONEY]
  |-- "Check what I can get" --> Eligibility checker (no event)
  |-- "View all cards" --------> Cards you can get (bounce)
  v
Cards you can get (bounce)   copy does not promise eligibility when it is unknown
  |-- tile -> Card detail -> Apply -> click-out [MONEY, AUTH gate]
EXIT: bank page; card detail (3a).
`})}),`
`,e.jsx(s.p,{children:"States: 7 live, 0 proposed, 0 hidden, 0 demo. Each state is a story; a row links to it. Screen stories use the real app screen with no network (fixtures answer every call); a proposed state is composed from design-system parts and is not in the app."}),`
`,e.jsx(s.h2,{id:"steps-and-states",children:"Steps and states"}),`
`,e.jsx(s.h3,{id:"cross-sell-rail",children:"Cross-sell rail"}),`
`,e.jsx(t,{rows:[{state:"Lenses",status:"live",source:"src/organisms/CrossSellRail.tsx:158",story:"flows-3c-bounce-cross-sell-rail--lenses",note:'Lenses: Top picks, eligibility unknown (dashed "Check what I can get" chip)'},{state:"Other Lens",status:"live",source:"src/organisms/CrossSellRail.tsx:158",story:"flows-3c-bounce-cross-sell-rail--other-lens",note:"A different lens selected"},{state:"Viewed Pick",status:"live",source:"src/organisms/CrossSellRail.tsx:158",story:"flows-3c-bounce-cross-sell-rail--viewed-pick",note:'A pick already viewed: dimmed, "Viewed ·"'},{state:"One Pick",status:"live",source:"src/organisms/CrossSellRail.tsx:158",story:"flows-3c-bounce-cross-sell-rail--one-pick",note:"One pick only"},{state:"Hidden No Rail",status:"live",source:"src/screens/useCrossSellRail.ts:176",story:"flows-3c-bounce-cross-sell-rail--hidden-no-rail",note:"Hidden: fewer than 2 picks, or the holdout arm. Nothing opens under the tile"}]}),`
`,e.jsx(s.h3,{id:"cards-you-can-get-bounce",children:"Cards you can get (bounce)"}),`
`,e.jsx(t,{rows:[{state:"Eligibility Unknown",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:127",story:"flows-3c-bounce-cards-you-can-get-bounce--eligibility-unknown",note:'Eligibility unknown: "N cards, closest first", no promise'},{state:"Eligibility Known",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:127",story:"flows-3c-bounce-cards-you-can-get-bounce--eligibility-known",note:'Eligibility known: the count reads "N cards you can get"'}]}),`
`,e.jsx(s.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"R1"}),": The bank page return gives no record of the click, so a rail pick and an applied card look the same afterwards. Seen in: both steps (see flow 3a, Click-out)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"R11"}),": Apply on the bounce page skips Home's eligibility gate. Seen in: Cards you can get (bounce)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"R3"}),": A blocked click-out is silent (see flow 3a). Seen in: Cards you can get (bounce)."]}),`
`]}),`
`,e.jsx(s.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.ol,{start:"6",children:[`
`,e.jsx(s.li,{children:'crosssell_rail default: "rail" (today) or "holdout" before any release? Owner: product owner.'}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"The rail can open below the visible area and look like nothing happened (PRD section 9, not covered here). Scroll the tile into view? Owner: product owner with design."}),`
`,e.jsx(s.li,{children:'"Check what I can get" has no analytics event. Add one? Owner: analytics owner.'}),`
`]}),`
`,e.jsx(s.p,{children:'Not storied: the rail on Home (the close-to-rail interaction) is not driven; the stories render the real rail under a tile. Rail "off screen" is not covered, as listed in pm-flows.'})]})}function g(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default};
