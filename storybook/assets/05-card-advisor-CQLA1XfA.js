import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as a}from"./react-hfl1SUVM.js";import{M as i}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as n,S as o}from"./index-Ji8mAZlR.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";function r(s){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Flows/5 Card advisor/Overview"}),`
`,e.jsx(n,{title:"5 Card advisor",meta:"flow · 2 steps",children:"A short chat with the card advisor: one tap-to-answer question at a time, three cards after the first answer, an optional eligibility check, and a full list. Guest flow; income and pincode never go to route params or analytics."}),`
`,e.jsx(t.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`Search sheet: advisor row (empty query or no results)
   |
   v
Chat (Advisor)
   intro -> opener -> reveal (3 cards) -> questions -> tip(s)
        -> eligibility bridge -> form -> likely to qualify / error
        -> end menu: See all N cards | Check which cards I can get | Change an answer | Start over
   |                                   |
   | card tap -> card detail           v
   v                          Results (AdvisorResults): sort, Free cards only
click-out (source: advisor)
`})}),`
`,e.jsx(t.p,{children:"Stories reset the shared store, cache and fetch mock when they mount, so each step is its own page. Open them from the tables below."}),`
`,e.jsx(t.h2,{id:"chat",children:"Chat"}),`
`,e.jsx(t.p,{children:"Mid-chat states are seeded through the advisor session store (the chat is rebuilt from the answers), not replayed with taps."}),`
`,e.jsx(o,{rows:[{state:"Intro",status:"live",story:"flows-5-card-advisor-chat--intro",note:"Empty session."},{state:"Question",status:"live",story:"flows-5-card-advisor-chat--question",note:"Seeded answer."},{state:"Reveal",status:"live",story:"flows-5-card-advisor-chat--reveal",note:"Seeded answer."},{state:"Tip",status:"live",story:"flows-5-card-advisor-chat--tip",note:"Seeded answers."},{state:"Eligibility bridge",status:"live",story:"flows-5-card-advisor-chat--eligibility-bridge",note:"Seeded answers."},{state:"Form",status:"live",story:"flows-5-card-advisor-chat--eligibility-form",note:"Seeded answers."},{state:"Likely to qualify",status:"live",story:"flows-5-card-advisor-chat--likely-to-qualify",note:"Seeded answers, partial eligibility fixture."},{state:"Eligibility error",status:"live",story:"flows-5-card-advisor-chat--eligibility-error",note:"Eligibility answers 500."},{state:"Relaxed results",status:"live",story:"flows-5-card-advisor-chat--relaxed",note:"Free filter relaxed for Fuel."},{state:"End menu",status:"live",story:"flows-5-card-advisor-chat--end-menu",note:"Seeded answers."},{state:"Change answer",status:"live",story:"flows-5-card-advisor-chat--change-answer",note:"One tap after mount."},{state:"Start over confirm",status:"proposed",story:"flows-5-card-advisor-chat--start-over-confirm",note:"Today a native Alert. Proposed: a sheet."},{state:"Catalogue error",status:"live",story:"flows-5-card-advisor-chat--catalogue-error",note:"Cards list answers 500."},{state:"Catalogue loading",status:"live",story:"flows-5-card-advisor-chat--catalogue-loading",note:"Skeleton transcript."},{state:"Checking eligibility",status:"live",story:"flows-5-card-advisor-chat--checking-eligibility",note:"Eligibility call never answers."},{state:"Pincode rejected (422)",status:"live",story:"flows-5-card-advisor-chat--pincode-rejected",note:"Same error copy as a server error (Q5)."},{state:"Offline shows No cards (G5)",status:"live",story:"flows-5-card-advisor-chat--offline-shows-no-cards",note:"App bug: no retry."},{state:"Offline, proposed",status:"proposed",story:"flows-5-card-advisor-chat--offline-proposed",note:"Standard offline state."},{state:"Eligibility offline, proposed",status:"proposed",story:"flows-5-card-advisor-chat--eligibility-offline-proposed",note:"Waiting for connection."},{state:"Checking, long, proposed",status:"proposed",story:"flows-5-card-advisor-chat--checking-long-proposed",note:"Second line after 10 s."}]}),`
`,e.jsx(t.h2,{id:"results",children:"Results"}),`
`,e.jsx(o,{rows:[{state:"Loaded",status:"live",story:"flows-5-card-advisor-results--loaded",note:""},{state:"Sorted by lowest fee",status:"live",story:"flows-5-card-advisor-results--sorted",note:"One tap after mount."},{state:"Free only",status:"live",story:"flows-5-card-advisor-results--free-only",note:"One tap after mount."},{state:"No cards",status:"live",story:"flows-5-card-advisor-results--no-cards",note:"Ids not in the catalogue."},{state:"Loading",status:"live",story:"flows-5-card-advisor-results--loading",note:"Card list skeleton."},{state:"Error",status:"live",story:"flows-5-card-advisor-results--error",note:"Cards answer 500."},{state:"Offline shows No cards (G5)",status:"live",story:"flows-5-card-advisor-results--offline-shows-no-cards",note:"App bug: wrong advice."},{state:"Offline, proposed",status:"proposed",story:"flows-5-card-advisor-results--offline-proposed",note:"Standard offline state."}]}),`
`,e.jsx(t.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"R11 (score 4): Apply from the tools skips the eligibility gate that Home runs. The user sees no verdict. A tool click-out has no gate."}),`
`,e.jsx(t.li,{children:`R6 (score 6): offline cold start. The tool results handle the paused call with "You're offline"; most other screens show a false empty state. The advisor shows "No cards are available right now" when the card list is paused offline (ux-states section 5, missing).`}),`
`,e.jsx(t.li,{children:"Consciously not covered: the advisor went back to its first question and closed, seen once (D28, cause unknown)."}),`
`]}),`
`,e.jsx(t.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Should Apply from the tools run the same eligibility gate as Home? Owner: product owner."}),`
`,e.jsx(t.li,{children:'Native Alert for Start over and the rewind warning ("Change this answer?"): keep, or use a sheet like the other confirms? Owner: product owner with design.'}),`
`,e.jsx(t.li,{children:"Should the chat keep its answers for the app session (today) or reset when the user leaves? Owner: product owner."}),`
`]})]})}function w(s={}){const{wrapper:t}={...a(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{w as default};
