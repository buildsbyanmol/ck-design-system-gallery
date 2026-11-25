import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as i}from"./react-hfl1SUVM.js";import{M as r}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as a,S as n}from"./index-Ji8mAZlR.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";function o(s){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Flows/4c Ultimate card/Overview"}),`
`,e.jsx(a,{title:"4c Ultimate card",meta:"flow · 3 steps",children:"Rank every card on the user's own spends. A 21-question quiz, a Skip to results button on every question, then the shared league table."}),`
`,e.jsx(t.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`Home tools row
   |
   v
Quiz step (SpendQuiz {next:'ultimate'}, 21 questions)
   |  Next x21                \\  Skip to results (needs one spend above 0)
   v                           v
Results (ToolResults, tool: ultimate)  <-- replace, so Back skips the quiz
   |
Breakdown sheet -> card detail / click-out
`})}),`
`,e.jsx(t.p,{children:"Stories reset the shared store, cache and fetch mock when they mount, so each step is its own page. Open them from the tables below."}),`
`,e.jsx(t.h2,{id:"quiz-step",children:"Quiz step"}),`
`,e.jsx(n,{rows:[{state:"First question",status:"live",story:"flows-4c-ultimate-card-quiz-step--first-question",note:"Question 1 of 21."},{state:"Middle question",status:"live",story:"flows-4c-ultimate-card-quiz-step--middle-question",note:"Seven taps on Next after mount."},{state:"Last question",status:"live",story:"flows-4c-ultimate-card-quiz-step--last-question",note:"Twenty taps on Next after mount; button reads See my cards."},{state:"Typed amount above the max",status:"live",story:"flows-4c-ultimate-card-quiz-step--typed-amount-capped",note:"99999999 typed, field blurred; shows ₹10,00,000."}]}),`
`,e.jsx(t.h2,{id:"skip",children:"Skip"}),`
`,e.jsx(n,{rows:[{state:"Skip with nothing entered",status:"live",story:"flows-4c-ultimate-card-skip--skip-with-nothing-entered",note:"Warning shown. Skip with a typed spend is not scripted."}]}),`
`,e.jsx(t.h2,{id:"results",children:"Results"}),`
`,e.jsx(n,{rows:[{state:"Loaded",status:"live",story:"flows-4c-ultimate-card-results--loaded",note:"Shared table."}]}),`
`,e.jsx(t.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"R7 (score 6): the top rows of the league can be cards the app cannot sell, with no Apply and no card page. Decision D27 is directional."}),`
`,e.jsx(t.li,{children:"R11 (score 4): Apply from the tools skips the eligibility gate that Home runs. The user sees no verdict. A tool click-out has no gate."}),`
`,e.jsx(t.li,{children:'R8 (score 6): no "redirecting" step and no pre-apply terms before the click-out from the breakdown sheet.'}),`
`,e.jsx(t.li,{children:"The quiz has no review step: the user cannot see all 21 answers before the result (code comment, not ranked)."}),`
`]}),`
`,e.jsx(t.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"League table scope (D27, directional): keep showing cards the app cannot sell, loss-making and discontinued cards, with Apply only in the breakdown sheet? Owner: product owner."}),`
`,e.jsx(t.li,{children:"Should Apply from the tools run the same eligibility gate as Home? Owner: product owner."}),`
`,e.jsx(t.li,{children:"21 questions on one run: keep the full quiz, or ship a short version first? Not in the product docs. Owner: product owner."}),`
`]})]})}function w(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{w as default};
