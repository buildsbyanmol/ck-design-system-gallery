import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as r}from"./react-hfl1SUVM.js";import{M as a}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as i,S as o}from"./index-Ji8mAZlR.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";function n(s){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Flows/4a Best for category/Overview"}),`
`,e.jsx(i,{title:"4a Best for category",meta:"flow · 3 steps",children:"Best card for where the user spends. The user picks categories, answers a few spend questions for each, and lands on the shared league table. Guest flow; saved spends stay on the device."}),`
`,e.jsx(t.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`Home tools row (tile with the rotating category word)
   |  categoryId optional
   v
Category pick  ->  Questions (one step per chosen category)  ->  Results
 (BestForCategory)        (same screen, next step)             (ToolResults, tool: category)
                                                                    |
                                                    Breakdown sheet -> card detail / click-out
`})}),`
`,e.jsx(t.p,{children:"Stories reset the shared store, cache and fetch mock when they mount, so each step is its own page. Open them from the tables below."}),`
`,e.jsx(t.h2,{id:"category-pick",children:"Category pick"}),`
`,e.jsx(o,{rows:[{state:"Nothing selected",status:"live",story:"flows-4a-best-for-category-category-pick--nothing-selected",note:"Footer hidden until one tile is picked."},{state:"Preselected from the Home tile",status:"live",story:"flows-4a-best-for-category-category-pick--preselected",note:"Route param categoryId."},{state:"Three picked",status:"live",story:"flows-4a-best-for-category-category-pick--three-picked",note:"Three taps after mount."}]}),`
`,e.jsx(t.h2,{id:"questions",children:"Questions"}),`
`,e.jsx(o,{rows:[{state:"First category",status:"live",story:"flows-4a-best-for-category-questions--first-category",note:"One tap on Enter spends after mount."},{state:"Second of two categories",status:"live",story:"flows-4a-best-for-category-questions--second-category-of-two",note:"Taps after mount; button reads Find my best card."},{state:"Nothing entered",status:"live",story:"flows-4a-best-for-category-questions--nothing-entered",note:"Warning shown, no navigation."}]}),`
`,e.jsx(t.h2,{id:"results",children:"Results"}),`
`,e.jsx(o,{rows:[{state:"Loaded",status:"live",story:"flows-4a-best-for-category-results--loaded",note:"Shared table. Other states: Flows/4 Shared result."}]}),`
`,e.jsx(t.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"R7 (score 6): the top rows of the league can be cards the app cannot sell, with no Apply and no card page. Decision D27 is directional."}),`
`,e.jsx(t.li,{children:"R11 (score 4): Apply from the tools skips the eligibility gate that Home runs. The user sees no verdict. A tool click-out has no gate."}),`
`,e.jsx(t.li,{children:`R6 (score 6): offline cold start. The tool results handle the paused call with "You're offline"; most other screens show a false empty state.`}),`
`]}),`
`,e.jsx(t.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"League table scope (D27, directional): keep showing cards the app cannot sell, loss-making and discontinued cards, with Apply only in the breakdown sheet? Owner: product owner."}),`
`,e.jsx(t.li,{children:"Should Apply from the tools run the same eligibility gate as Home? Owner: product owner."}),`
`,e.jsx(t.li,{children:"Category tiles are text only because no category illustrations exist. Design gap, no decision yet. Owner: design."}),`
`]})]})}function y(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{y as default};
