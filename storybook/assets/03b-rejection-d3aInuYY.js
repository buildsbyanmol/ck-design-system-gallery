import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as r}from"./react-hfl1SUVM.js";import{M as i}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as a,S as o}from"./index-Ji8mAZlR.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";function n(s){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Flows/3b Rejection/Overview"}),`
`,e.jsx(a,{title:"3b Rejection",meta:"Flow 3b · 2 steps · 14 states",children:e.jsx(t.p,{children:"I was told no; show me cards I can get. Entry: the red Ineligible sheet after a check says no. Auth: guest, with a login gate at click-out. Money-sensitive: click-out (source rejection_pick or cards_you_can_get)."})}),`
`,e.jsx(t.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`ENTRY: Ineligible sheet (after a check on a card says no; shown on every Apply)
  v
Rejection sheet
  |-- "Edit" ----------------------------> Eligibility checker (reopens)
  |-- a pick (closest | most Rewards | lifetime free) -> Home card detail -> Apply: Home gate, then click-out [MONEY]
  |-- "See all N cards you can get" -----> Cards you can get (rejection)
  |-- "Continue to Apply" ---------------> click-out [MONEY]
  v
Cards you can get (rejection)
  strip "You wanted X" -> closest row -> category chips, lifetime free, sort -> card list
  |-- tile -> Card detail sheet -> Apply: skips Home gate (R11) -> click-out [MONEY, AUTH gate]
EXIT: bank page; back to Home.
`})}),`
`,e.jsx(t.p,{children:"States: 12 live, 2 proposed, 0 hidden, 0 demo. Each state is a story; a row links to it. Screen stories use the real app screen with no network (fixtures answer every call); a proposed state is composed from design-system parts and is not in the app."}),`
`,e.jsx(t.h2,{id:"steps-and-states",children:"Steps and states"}),`
`,e.jsx(t.h3,{id:"rejection-sheet",children:"Rejection sheet"}),`
`,e.jsx(o,{rows:[{state:"Income Reason With Picks",status:"live",source:"src/organisms/IneligibleSheet.tsx:130",story:"flows-3b-rejection-rejection-sheet--income-reason-with-picks",note:"Income reason with the alternatives (closest, most Rewards, lifetime free)"},{state:"Generic Reason",status:"live",source:"src/organisms/IneligibleSheet.tsx:130",story:"flows-3b-rejection-rejection-sheet--generic-reason",note:"Generic reason: income is not the cause"},{state:"Zero Picks (today)",status:"live",source:"src/organisms/IneligibleSheet.tsx:130",story:"flows-3b-rejection-rejection-sheet--zero-picks-today",note:"Zero alternatives, as it is today: blocks 2 and 3 are simply left out (R15)"},{state:"Zero Picks (proposed)",status:"proposed",source:"src/organisms/IneligibleSheet.tsx:130",story:"flows-3b-rejection-rejection-sheet--zero-picks-proposed",note:"Proposed: zero alternatives with a way forward"},{state:"One Pick",status:"live",source:"src/organisms/IneligibleSheet.tsx:130",story:"flows-3b-rejection-rejection-sheet--one-pick",note:"One alternative only: the block shrinks to a single pick"}]}),`
`,e.jsx(t.h3,{id:"cards-you-can-get-rejection",children:"Cards you can get (rejection)"}),`
`,e.jsx(o,{rows:[{state:"Loading",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:273",story:"flows-3b-rejection-cards-you-can-get-rejection--loading",note:"Loading: card list skeleton"},{state:"Loaded",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:127",story:"flows-3b-rejection-cards-you-can-get-rejection--loaded",note:"Loaded: context strip, closest row, chips, list"},{state:"Filter Applied",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:443",story:"flows-3b-rejection-cards-you-can-get-rejection--filter-applied",note:'A filter on: "Lifetime free only" tapped'},{state:"No Match",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:478",story:"flows-3b-rejection-cards-you-can-get-rejection--no-match",note:"Filters match nothing"},{state:"Load Error",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:280",story:"flows-3b-rejection-cards-you-can-get-rejection--load-error",note:"Cards request fails"},{state:"No Cards To Show",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:291",story:"flows-3b-rejection-cards-you-can-get-rejection--no-cards-to-show",note:'No eligible cards passed: "No cards to show"'},{state:"Offline Today",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:291",story:"flows-3b-rejection-cards-you-can-get-rejection--offline-today",note:'Offline with no cache, today: the same "No cards to show" (A6)'},{state:"Offline (proposed)",status:"proposed",source:"src/screens/CardsYouCanGetScreen.tsx:291",story:"flows-3b-rejection-cards-you-can-get-rejection--offline-proposed",note:"Proposed: the standard offline state under the header"},{state:"Long Name 360",status:"live",source:"src/screens/CardsYouCanGetScreen.tsx:127",story:"flows-3b-rejection-cards-you-can-get-rejection--long-name-360",note:"The rejected card has a 71-character name, on the small Android viewport (360 dp)"}]}),`
`,e.jsx(t.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"R11"}),": A pick tapped on the sheet opens the Home card detail, so its Apply runs the Home gate. Apply on the Cards you can get page skips it. Same card, different friction. Seen in: both steps."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"R15"}),": Zero alternatives (low income): the sheet drops the alternatives block and leaves only Edit and Continue to Apply. Seen in: Rejection sheet, zero picks."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"R3"}),": A blocked click-out from a pick or the page is silent. Seen in: both steps (see flow 3a, Click-out)."]}),`
`]}),`
`,e.jsx(t.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.ol,{start:"2",children:[`
`,e.jsx(t.li,{children:"Should Apply from Cards you can get run the same gate as Home? Owner: product owner."}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.ol,{start:"3",children:[`
`,e.jsx(t.li,{children:"Closing the checker (Edit) without a result: what should happen to the pending Apply? Owner: product owner."}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:'Zero alternatives: where does "Browse all cards" go, and should "Continue to Apply" stay for a card the bank will probably refuse? Owner: product owner.'}),`
`]}),`
`,e.jsx(t.p,{children:"Not storied: the card detail sheet opened from this page is the flow 3a step. The number of picks depends on the fixture data; the sheet shows up to three."})]})}function y(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{y as default};
