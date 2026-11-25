import{j as e}from"./iframe-DK2xttIN.js";import{useMDXComponents as i}from"./react-DKKTS5ax.js";import{M as r}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as a,S as o}from"./index-Da0salGJ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";function t(n){const s={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Flows/10 Offline and session/Overview"}),`
`,e.jsx(a,{title:"Offline and session",meta:"flow 10 · screens and states",children:"Never lose my place, or think my money is gone, because the network or the session failed. Cross-cutting: the offline banner is on every screen, paused queries leave false empties (R6), and an expired session opens the login sheet by itself."}),`
`,e.jsx(s.p,{children:"Open a state from the matrix. Every flow story renders in its own frame, so a state opens as a page and not inline."}),`
`,e.jsx(s.h2,{id:"flow",children:"Flow"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`OFFLINE
  device loses network ──> Offline banner (top strip, every screen)
        │
        └─ first load with no cache ──> query PAUSED (not loading, not error)
              Home | Earnings | Offers | Orders | Order detail | Claims | Profile
                 └─> falls to its loaded or empty layout: "0 cards", ₹0, "No orders yet"  (R6)
              Proposed: one shared offline state "You're offline / Try again"

SESSION
  refresh token rejected ──> cache cleared ──> status "unauthenticated"
        └─> login sheet opens itself (source session_expired, one fixed title)
              ├─ screen behind shows a false empty ("No orders yet")
              └─ after login the user stays where they were (no onSuccess)
  during a money step (withdraw OTP, claim submit, invoice upload):
        └─> return to the step is not defined  [not built, R17]
`})}),`
`,e.jsx(s.h2,{id:"offline-banner",children:"Offline banner"}),`
`,e.jsx(s.p,{children:"Needs the browser to report offline; see the story notes."}),`
`,e.jsx(o,{rows:[{state:"Banner Over Orders",status:"live",story:"flows-10-offline-and-session-offline-banner--banner-over-orders",note:"The warning strip at the top of the screen while the device is offline. Under it, Orders list shows its loaded or empty layout."},{state:"Banner Over Profile",status:"live",story:"flows-10-offline-and-session-offline-banner--banner-over-profile",note:"The same strip over the Profile tab: name and contact empty under it."}]}),`
`,e.jsx(s.h2,{id:"paused-screens",children:"Paused screens"}),`
`,e.jsx(s.p,{children:"Live stories show what the app does today. Proposed stories show the standard offline state."}),`
`,e.jsx(o,{rows:[{state:"Home Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--home-offline",note:"Home: no cards, no error, no message."},{state:"Earnings Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--earnings-offline",note:"Earnings: Confirmed and Pending read ₹0 (a wrong money figure)."},{state:"Offers Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--offers-offline",note:"Offers: 'No offers here yet'."},{state:"Orders List Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--orders-list-offline",note:"Orders list: 'No orders yet'."},{state:"Order Detail Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--order-detail-offline",note:"Order detail: the body renders with empty values."},{state:"Claims List Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--claims-list-offline",note:"Claims list: the empty tab copy."},{state:"Missing Cashback Yes Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--missing-cashback-yes-offline",note:"Missing cashback 'Yes' offline: the paused lookup counts as 'no visits' and goes to Oops. A play function taps Yes."},{state:"Profile Offline",status:"live",story:"flows-10-offline-and-session-paused-screens--profile-offline",note:"Profile: blank name and contact."},{state:"Orders List Offline Fix",status:"proposed",story:"flows-10-offline-and-session-paused-screens--orders-list-offline-fix",note:"PROPOSED: Orders list offline with no cache."},{state:"Order Detail Offline Fix",status:"proposed",story:"flows-10-offline-and-session-paused-screens--order-detail-offline-fix",note:"PROPOSED: Order detail offline with no cache."},{state:"Claims List Offline Fix",status:"proposed",story:"flows-10-offline-and-session-paused-screens--claims-list-offline-fix",note:"PROPOSED: Claims list offline with no cache."},{state:"Earnings Offline Fix",status:"proposed",story:"flows-10-offline-and-session-paused-screens--earnings-offline-fix",note:"PROPOSED: Earnings offline with no cache: no ₹0 figures."},{state:"Profile Offline Fix",status:"proposed",story:"flows-10-offline-and-session-paused-screens--profile-offline-fix",note:"PROPOSED: Profile offline with no cache: skeleton lines and a warning."},{state:"Reconnect Resumes",status:"live",story:"flows-10-offline-and-session-paused-screens--reconnect-resumes",note:"Back online: the paused query resumes and Earnings goes from ₹0 to the real figures."}]}),`
`,e.jsx(s.h2,{id:"session-expired",children:"Session expired"}),`
`,e.jsx(o,{rows:[{state:"Orders List Session Expired",status:"live",story:"flows-10-offline-and-session-session-expired--orders-list-session-expired",note:"Orders list when the refresh token is rejected: the login sheet rises over 'No orders yet'."},{state:"Earnings Session Expired",status:"live",story:"flows-10-offline-and-session-session-expired--earnings-session-expired",note:"Earnings when the session ends: the sheet over the guest layout."},{state:"Profile Session Expired",status:"live",story:"flows-10-offline-and-session-session-expired--profile-session-expired",note:"Profile when the session ends: the account card gives way to the guest prompt, the sheet opens."},{state:"Orders List Login Prompt",status:"proposed",story:"flows-10-offline-and-session-session-expired--orders-list-login-prompt",note:"PROPOSED: Orders list shows a login prompt instead of a false 'No orders yet'."}]}),`
`,e.jsx(s.h2,{id:"mid-flow-return",children:"Mid-flow return"}),`
`,e.jsx(s.p,{children:"Not built (R17). One design each; the return behaviour is an open question."}),`
`,e.jsx(o,{rows:[{state:"Withdraw Otp Session Ended",status:"proposed",story:"flows-10-offline-and-session-mid-flow-return--withdraw-otp-session-ended",note:"PROPOSED: the session ends on the withdraw OTP step. Details kept, the user logs in, then confirms again."},{state:"Claim Submit Session Ended",status:"proposed",story:"flows-10-offline-and-session-mid-flow-return--claim-submit-session-ended",note:"PROPOSED: the session ends while a claim is being submitted (amount step)."},{state:"Invoice Upload Session Ended",status:"proposed",story:"flows-10-offline-and-session-mid-flow-return--invoice-upload-session-ended",note:"PROPOSED: the session ends while an invoice is uploading (C1-Other and C2 claims)."}]}),`
`,e.jsx(s.h2,{id:"risks",children:"Risks"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"R6: offline cold start shows false empties and a wrong ₹0. Stories: Paused screens."}),`
`,e.jsx(s.li,{children:"R17: session ends during a money step; the return is not defined. Stories: Mid-flow return."}),`
`,e.jsx(s.li,{children:"R20: the OTP rate limit shows the raw API message with no time to retry (login, not shown here; see Flow 1)."}),`
`]}),`
`,e.jsx(s.h2,{id:"open-questions",children:"Open questions"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:`With a cache, show the last known data with a "last updated" label, or keep today's silent stale data? (R6)`}),`
`,e.jsx(s.li,{children:"Should the login sheet say the session ended (needs a title and body per source, DS gap 4)? (Session expired)"}),`
`,e.jsx(s.li,{children:"After login, return to the same step with entered values, restart it, or repeat the action on its own? (R17)"}),`
`,e.jsx(s.li,{children:"How long should a withdraw OTP stay valid across a login? (R17)"}),`
`]})]})}function w(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{w as default};
