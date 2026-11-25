import{j as e}from"./iframe-DK2xttIN.js";import{useMDXComponents as o}from"./react-DKKTS5ax.js";import{M as n}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as l,S as a}from"./index-Da0salGJ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";function r(s){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Flows/4b Beat my card/Overview"}),`
`,e.jsx(l,{title:"4b Beat my card",meta:"flow · 3 steps",children:"Is there a better card than the one I have? The user picks the card they hold, enters spends for the categories they use, and sees the best other card against it."}),`
`,e.jsx(t.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`Home tools row
   |
   v
Pick list (BeatMyCardPick)         "Can't find your card? Tell us" -> request sheet
   |  Use this card  { cardAlias }
   v
Spends (BeatMyCardSpends)          category chips, one spend card per question; "Change" goes back
   |  See result  { cardAlias, spends, answers, categories }
   v
Result (BeatMyCardResult)          "Based on <categories>" opens the edit sheet
   verdicts: best_wins, mine_wins, equal, not_found
   |
   +-- Full ranking (ToolResults, highlightAlias)
   |      Breakdown sheet -> click-out (not for the user's own card)
   +-- Try another card -> back to Pick list
`})}),`
`,e.jsx(t.p,{children:"Stories reset the shared store, cache and fetch mock when they mount, so each step is its own page. Open them from the tables below. The old spend quiz is no longer part of this flow."}),`
`,e.jsx(t.h2,{id:"pick-list",children:"Pick list"}),`
`,e.jsx(a,{rows:[{state:"Loaded",status:"live",story:"flows-4b-beat-my-card-pick-list--loaded",note:"A to Z, with search and bank chips."},{state:"Card picked",status:"live",story:"flows-4b-beat-my-card-pick-list--picked-card",note:'Radio selected, "Use this card" shows.'},{state:"Loading",status:"live",story:"flows-4b-beat-my-card-pick-list--loading",note:"Waits for the whole calculate call (G7)."},{state:"Error",status:"live",story:"flows-4b-beat-my-card-pick-list--error",note:"Calculate answers 500."},{state:"Offline",status:"live",story:"flows-4b-beat-my-card-pick-list--offline",note:"Paused query."},{state:"Empty",status:"live",story:"flows-4b-beat-my-card-pick-list--empty",note:"No cards to compare yet."},{state:"Search, no match",status:"live",story:"flows-4b-beat-my-card-pick-list--search-no-match",note:"Clear search, and Tell us stays under the list."},{state:"Tell us your card sheet",status:"live",story:"flows-4b-beat-my-card-pick-list--card-request-sheet",note:"Replaces the old proposed exit (Q2)."}]}),`
`,e.jsx(t.h2,{id:"spends",children:"Spends"}),`
`,e.jsx(a,{rows:[{state:"Default, nothing selected",status:"live",story:"flows-4b-beat-my-card-spends--default",note:'Chips, "Pick where you spend", See result disabled.'},{state:"Category selected",status:"live",story:"flows-4b-beat-my-card-spends--category-selected",note:"Group opens, all values 0."},{state:"Typed value",status:"live",story:"flows-4b-beat-my-card-spends--typed-value",note:'Footer "Based on 1 category", See result enabled.'},{state:"Folded group",status:"live",story:"flows-4b-beat-my-card-spends--folded-group",note:"A finished group folds to one line while another is edited."},{state:"See result",status:"live",story:"flows-4b-beat-my-card-spends--see-result",note:"Next route params include categories."},{state:"Card list loading",status:"live",story:"flows-4b-beat-my-card-spends--card-list-loading",note:"No card name in the strip; the screen has no loading state."},{state:"Card list error",status:"live",story:"flows-4b-beat-my-card-spends--card-list-error",note:"Calculate answers 500."}]}),`
`,e.jsx(t.h2,{id:"result",children:"Result"}),`
`,e.jsx(a,{rows:[{state:"best_wins",status:"live",story:"flows-4b-beat-my-card-result--best-wins",note:"Another card beats the user's card."},{state:"mine_wins",status:"live",story:"flows-4b-beat-my-card-result--mine-wins",note:"Rank 1 card is not in the app list; check the hero."},{state:"equal",status:"live",story:"flows-4b-beat-my-card-result--equal",note:"Built tie: the story edits the calculate answer."},{state:"not_found",status:"live",story:"flows-4b-beat-my-card-result--not-found",note:"Card missing from the calculate list."},{state:"best_wins, Apply now",status:"live",story:"flows-4b-beat-my-card-result--best-wins-applyable",note:"Main revenue branch; the card rule (leagueForDisplay) may hide Apply for a card with no CashKaro rate."},{state:"best_wins, no Apply",status:"live",story:"flows-4b-beat-my-card-result--best-wins-no-apply",note:"Best other card also loses money."},{state:"Based on, edit sheet",status:"live",story:"flows-4b-beat-my-card-result--based-on-edit",note:"Sheet holds only the picked categories."},{state:"Loading",status:"live",story:"flows-4b-beat-my-card-result--loading",note:"Calculate never answers."},{state:"Error",status:"live",story:"flows-4b-beat-my-card-result--error",note:"Calculate answers 500."},{state:"Offline",status:"live",story:"flows-4b-beat-my-card-result--offline",note:"Paused query."},{state:"Filter matches nothing",status:"live",story:"flows-4b-beat-my-card-result--filter-no-match",note:"Lifetime free tapped on an all-paid answer."}]}),`
`,e.jsx(t.h2,{id:"full-ranking",children:"Full ranking"}),`
`,e.jsx(a,{rows:[{state:"Loaded",status:"live",story:"flows-4b-beat-my-card-full-ranking--loaded",note:"User's card highlighted, no Apply for it."},{state:"Find my card, far down",status:"live",story:"flows-4b-beat-my-card-full-ranking--find-my-card-far",note:"220 rows; the card is about row 200."}]}),`
`,e.jsx(t.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"R7 (score 6): the top rows of the league can be cards the app cannot sell, with no Apply and no card page. Decision D27 is directional."}),`
`,e.jsx(t.li,{children:"R11 (score 4): Apply from the tools skips the eligibility gate that Home runs. The user sees no verdict. A tool click-out has no gate."}),`
`,e.jsx(t.li,{children:'R8 (score 6): no "redirecting" step and no pre-apply terms before the click-out from the breakdown sheet.'}),`
`,e.jsx(t.li,{children:`R6 (score 6): offline cold start. The tool results handle the paused call with "You're offline"; most other screens show a false empty state.`}),`
`]}),`
`,e.jsx(t.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"League table scope (D27, directional): keep showing cards the app cannot sell, loss-making and discontinued cards, with Apply only in the breakdown sheet? Owner: product owner."}),`
`,e.jsx(t.li,{children:"Should Apply from the tools run the same eligibility gate as Home? Owner: product owner."}),`
`,e.jsx(t.li,{children:'What does the user see before and after a click-out (redirect step, terms, a "did you apply" return state)? Owner: product owner with the CashKaro tracking team.'}),`
`]})]})}function b(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{b as default};
