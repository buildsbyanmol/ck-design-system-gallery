import{j as e}from"./iframe-DK2xttIN.js";import{useMDXComponents as o}from"./react-DKKTS5ax.js";import{M as a}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as i,S as s}from"./index-Da0salGJ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";function r(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Flows/4d Best for brands/Overview"}),`
`,e.jsx(i,{title:"4d Best for brands",meta:"flow · 4 steps",children:"Best card for the brands the user buys from. Up to 5 of 13 brands, then a monthly spend for each. Only Amazon and Flipkart are exact brands in BankKaro; the rest are counted in their category, and the screen says so."}),`
`,e.jsx(t.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`Home tools row (tile with the rotating brand word)
   |  brandId optional
   v
Brand pick (up to 5)  ->  Spends (one monthly amount per brand)  ->  Results (ToolResults, tool: brands)
   |                                                                       |
   +-- limit reached: info message, other tiles disabled       Breakdown sheet -> click-out
Brand runs are not saved to the device.
`})}),`
`,e.jsx(t.p,{children:"Stories reset the shared store, cache and fetch mock when they mount, so each step is its own page. Open them from the tables below."}),`
`,e.jsx(t.h2,{id:"brand-pick",children:"Brand pick"}),`
`,e.jsx(s,{rows:[{state:"Nothing picked",status:"live",story:"flows-4d-best-for-brands-brand-pick--nothing-picked",note:"No footer."},{state:"Preselected from the Home tile",status:"live",story:"flows-4d-best-for-brands-brand-pick--preselected",note:"Route param brandId."}]}),`
`,e.jsx(t.h2,{id:"limit-reached",children:"Limit reached"}),`
`,e.jsx(s,{rows:[{state:"Five brands picked",status:"live",story:"flows-4d-best-for-brands-limit-reached--five-brands-picked",note:"Five taps after mount."}]}),`
`,e.jsx(t.h2,{id:"spends",children:"Spends"}),`
`,e.jsx(s,{rows:[{state:"One brand",status:"live",story:"flows-4d-best-for-brands-spends--one-brand",note:"One tap after mount."},{state:"Nothing entered",status:"live",story:"flows-4d-best-for-brands-spends--nothing-entered",note:"Warning shown, no navigation."}]}),`
`,e.jsx(t.h2,{id:"results",children:"Results"}),`
`,e.jsx(s,{rows:[{state:"Loaded",status:"live",story:"flows-4d-best-for-brands-results--loaded",note:"Shared table, brand column labels."}]}),`
`,e.jsx(t.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"R7 (score 6): the top rows of the league can be cards the app cannot sell, with no Apply and no card page. Decision D27 is directional."}),`
`,e.jsx(t.li,{children:"R11 (score 4): Apply from the tools skips the eligibility gate that Home runs. The user sees no verdict. A tool click-out has no gate."}),`
`,e.jsx(t.li,{children:"Brands other than Amazon and Flipkart are counted in a category, so a result can differ from the real brand rate. The screen states it; no state shows the difference (product requirement, not ranked)."}),`
`]}),`
`,e.jsx(t.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"League table scope (D27, directional): keep showing cards the app cannot sell, loss-making and discontinued cards, with Apply only in the breakdown sheet? Owner: product owner."}),`
`,e.jsx(t.li,{children:"Should Apply from the tools run the same eligibility gate as Home? Owner: product owner."}),`
`,e.jsx(t.li,{children:"Brand tiles are text only (no brand logos exist). Design gap. Owner: design."}),`
`]})]})}function b(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default};
