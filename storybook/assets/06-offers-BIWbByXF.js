import{j as e}from"./iframe-BxRbKpJi.js";import{useMDXComponents as a}from"./react-hfl1SUVM.js";import{M as n}from"./WithTooltip-SK46ZJ2J-DZIhKbNq.js";import{P as i,S as o}from"./index-Ji8mAZlR.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BpbXxej1.js";import"./index-iryqQeOY.js";function r(t){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Flows/6 Offers/Overview"}),`
`,e.jsx(i,{title:"6 Offers",meta:"flow · 2 steps",children:"Shop at a store through CashKaro and earn cashback. The Offers tab lists stores by category. A store page ends in the cashback click-out. Guest users can read everything and are asked to log in at the click-out."}),`
`,e.jsx(s.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Offers tab (MainTabs/Offers)
   |  category strip, 2-column store grid
   |  welcome promo sheet (once per session, only when stores exist)
   |  tap a store
   v
Store page (OffersBrandAmazon, any slug)
   |  about, cashback rates, how it works, timelines, terms,
   |  Best cards to use here, similar stores, FAQ
   |  share (OS share sheet)
   |  tap "Earn Cashback on <Brand>"
   v
$ Click-out (useClickOut, kind store, source store_page)
   guest: "Log in to earn" prompt, then the click continues
   signed in: link opens in the browser
   exit: store site or app, outside the app. Best cards opens card detail (flow 3a)
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"$"})," marks a money step: the click-out carries the attribution (user id, click id). Its states live in flow 3a, Click-out."]}),`
`,e.jsx(s.p,{children:"Stories reset the shared store, cache and fetch mock when they mount, so each step is its own page. Open them from the tables below."}),`
`,e.jsx(s.h2,{id:"offers-tab",children:"Offers tab"}),`
`,e.jsx(o,{rows:[{state:"Loading",status:"live",story:"flows-6-offers-offers-tab--loading",note:"Three rows of skeleton tiles."},{state:"Loaded",status:"live",story:"flows-6-offers-offers-tab--loaded",note:"Category strip and 5 stores."},{state:"Promo sheet",status:"live",story:"flows-6-offers-offers-tab--promo-sheet",note:"Once per page load. The seen flag cannot be reset; reload the iframe to see it again."},{state:"Empty, No offers here yet (R10)",status:"live",story:"flows-6-offers-offers-tab--empty-no-offers-yet",note:"Production today (D11), not re-checked since 2026-11-09."},{state:"Error",status:"live",story:"flows-6-offers-offers-tab--load-error",note:"HTTP 500, after the app's retries."},{state:"Offline, shows No offers here yet (R6)",status:"live",story:"flows-6-offers-offers-tab--offline-shows-empty",note:"Inferred from code: false empty state."},{state:"Offline, proposed fix (R6)",status:"proposed",story:"flows-6-offers-offers-tab--offline-proposed",note:"Standard offline state. Needs the shared paused-with-no-data helper."},{state:"Category fallback (production today)",status:"live",story:"flows-6-offers-offers-tab--category-fallback",note:"Tree call answers 400; top-level categories."},{state:"Network drop",status:"live",story:"flows-6-offers-offers-tab--network-drop",note:"Copy blames the server (G11)."},{state:"Retry after error",status:"live",story:"flows-6-offers-offers-tab--retry-after-error",note:"Three failures, then Try again loads."},{state:"Search, results",status:"live",story:"flows-6-offers-offers-tab--search-results",note:"Store index lists AJIO."},{state:"Search, no results",status:"live",story:"flows-6-offers-offers-tab--search-no-results",note:"Hint under No results."},{state:"Search while the index loads (G12)",status:"live",story:"flows-6-offers-offers-tab--search-index-loading",note:"App bug: no-results while loading."},{state:"Search while the index loads, proposed",status:"proposed",story:"flows-6-offers-offers-tab--search-index-loading-proposed",note:"Hint says it is still loading."},{state:"Store with no rate",status:"live",story:"flows-6-offers-offers-tab--store-no-rate",note:"Tile CTA has no figure."}]}),`
`,e.jsx(s.h2,{id:"store-page",children:"Store page"}),`
`,e.jsx(o,{rows:[{state:"Loading",status:"live",story:"flows-6-offers-store-page--loading",note:"Bare spinner today."},{state:"Loading, proposed skeleton",status:"proposed",story:"flows-6-offers-store-page--loading-proposed",note:"Skeleton blocks in the page shape."},{state:"Loaded",status:"live",story:"flows-6-offers-store-page--loaded",note:"AJIO fixture; the fixture answers every slug."},{state:"Error",status:"live",story:"flows-6-offers-store-page--load-error",note:"Store call answers 404."},{state:"Best cards",status:"live",story:"flows-6-offers-store-page--best-cards",note:"Page scrolled to the carousel after mount."},{state:"Share",status:"live",story:"flows-6-offers-store-page--share",note:"Share glyph tapped; the harness only logs it."},{state:"No shop link today (G2)",status:"live",story:"flows-6-offers-store-page--no-shop-link-today",note:"App bug: Shop does nothing, silent."},{state:"No shop link, proposed",status:"proposed",story:"flows-6-offers-store-page--no-shop-link-proposed",note:"Disabled button and a message."},{state:"Guest taps Shop",status:"live",story:"flows-6-offers-store-page--guest-shop",note:"Login sheet for the store click-out."},{state:"Signed in taps Shop",status:"live",story:"flows-6-offers-store-page--signed-in-shop",note:"Console logs the click-out."},{state:"No cashback rate (G4)",status:"live",story:"flows-6-offers-store-page--no-cashback-rate",note:"App bug: prints Cashback as the rate."},{state:"No cashback rate, proposed",status:"proposed",story:"flows-6-offers-store-page--no-cashback-rate-proposed",note:"Open question Q3."},{state:"Offline",status:"live",story:"flows-6-offers-store-page--offline",note:"Error shows at once."},{state:"Session expired",status:"live",story:"flows-6-offers-store-page--session-expired",note:"Login sheet asked to open."}]}),`
`,e.jsx(s.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'R10: the Offers tab may be empty on production, so every visit shows "No offers here yet". A whole revenue tab looks broken and store click-outs are lost. Doc only, not re-checked since 2026-11-09.'}),`
`,e.jsx(s.li,{children:'R6: offline cold start with no cache. The tab shows "No offers here yet" while only the top banner says offline. Inferred from code, not seen on a device.'}),`
`,e.jsx(s.li,{children:'R3 and R8 (click-out): a blocked click-out is silent, and there is no "Redirecting" step. Both are drawn in flow 3a.'}),`
`,e.jsx(s.li,{children:"R11: Apply from the store page best cards skips the eligibility gate that Home runs."}),`
`]}),`
`,e.jsx(s.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'Should the empty state stay "No offers here yet" with an Explore cards action, or should the tab hide until stores are mapped on production (R10)?'}),`
`,e.jsx(s.li,{children:"What does the user see before and after the store click-out: a redirect step, terms to accept, a return state (pm-flows question 5)?"}),`
`,e.jsx(s.li,{children:"Should Apply from the store best cards run the same eligibility gate as Home (pm-flows question 2)?"}),`
`]})]})}function y(t={}){const{wrapper:s}={...a(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{y as default};
