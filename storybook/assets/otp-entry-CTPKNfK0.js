import{j as e}from"./iframe-DK2xttIN.js";import{useMDXComponents as o}from"./react-DKKTS5ax.js";import{M as i,C as s}from"./WithTooltip-SK46ZJ2J-CiBQoaEX.js";import{P as a,D as d,S as c}from"./index-Da0salGJ.js";import{P as h}from"./_links-N_yOaGmK.js";import{S as l,E as p,W as m,R as u}from"./otp-entry.stories-Be1kGYVe.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CMps8-7B.js";import"./index-FMyJPicQ.js";import"./OtpInput-ULhMVoH4.js";import"./motion-q_NUJArm.js";import"./Text-Czhgaopg.js";import"./haptics-CV4QS1hG.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./index-mJl4hEuB.js";import"./_shared-CCkWhCsa.js";function r(n){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(a,{title:"OTP entry",meta:"Pattern",children:e.jsx(t.p,{children:"Six boxes (D19), one resend timer, and one error line under the boxes. Login and withdraw use the same input."})}),`
`,e.jsx(t.h2,{id:"the-rule",children:"The rule"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Six digits, because CashKaro production sends six (D19). Figma still draws four."}),`
`,e.jsx(t.li,{children:'The resend control has three states: hidden while verifying, a countdown, then "ready".'}),`
`,e.jsxs(t.li,{children:["A wrong or expired code sets ",e.jsx(t.code,{children:'state="error"'}),' and a short hint: "Enter a valid OTP" or "OTP is expired" (',e.jsx(t.code,{children:"src/screens/withdraw/WithdrawVerifyOTP.tsx:211"}),")."]}),`
`,e.jsxs(t.li,{children:["While the code is being verified or the payment is being made, the input is blocked (",e.jsx(t.code,{children:"WithdrawVerifyOTP.tsx:297"}),")."]}),`
`,e.jsx(t.li,{children:"Open risk (R20): the rate limit (5 per number, 10 per IP in 10 minutes) shows the raw API message with no time to retry. The audit has no copy for it, so none is shown here."}),`
`,e.jsx(t.li,{children:"Edit contact and Delete account accept any six digits today (R5). They are demos."}),`
`]}),`
`,e.jsx(t.h2,{id:"use-these-parts",children:"Use these parts"}),`
`,e.jsx(h,{rows:[{name:"OtpInput",id:"components-input-fields-otpinput--docs",note:"six boxes, hint, resend timer."},{name:"OtpBox",id:"components-input-fields-otpbox--docs",note:"one box (unused on its own)."},{name:"Timer",id:"components-text-and-numbers-timer--docs",note:"the countdown."},{name:"FooterButtons",id:"components-footers-footerbuttons--docs",note:"the Verify CTA, with primaryLoading."},{name:"InlineMessage",id:"components-messages-and-tooltips-inlinemessage--docs",note:"send failures. See Error and retry."}]}),`
`,e.jsx(t.h2,{id:"where-it-appears",children:"Where it appears"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Flow 1 Launch and login: Login sheet (OTP, wrong OTP, resend, rate limit not built)."}),`
`,e.jsx(t.li,{children:"Flow 7 Earnings and withdraw: Details, Verify OTP (entry, wrong, resend, connection problem, payment failed, unknown outcome, session expired)."}),`
`,e.jsx(t.li,{children:"Flow 9 Profile and account: Edit contact (demo), Delete account (hidden, demo)."}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(d,{dos:["Show six boxes.","Put the error in the hint under the boxes.","Hide the resend control while verifying."],donts:["Do not show the raw API message for a rate limit.","Do not accept a code the server did not check (R5).","Do not auto-focus on web where it hides the page."]}),`
`,e.jsx(t.h2,{id:"state-matrix",children:"State matrix"}),`
`,e.jsx(c,{rows:[{state:"Entry with resend timer",status:"live",source:"src/auth/LoginSheetProvider.tsx:520",story:"patterns-otp-entry--entry"},{state:"Wrong or expired OTP",status:"live",source:"src/screens/withdraw/WithdrawVerifyOTP.tsx:214",story:"patterns-otp-entry--wrong-code"},{state:"Resend ready",status:"live",source:"src/screens/withdraw/WithdrawVerifyOTP.tsx:217",story:"patterns-otp-entry--resend-ready"},{state:"Verifying (input blocked)",status:"live",source:"src/screens/withdraw/WithdrawVerifyOTP.tsx:297",story:"patterns-otp-entry--resend-ready"},{state:"Send OTP failed (login)",status:"live",source:"src/auth/LoginSheetProvider.tsx:231"},{state:"Send OTP failed (withdraw: UPI, Amazon, Flipkart)",status:"proposed",source:"ux-states.md section 6",note:`InlineMessage error "We couldn't send the OTP. Please try again." Native Alert today (WithdrawEnterUPI.tsx:75).`},{state:"Rate limit (R20)",status:"proposed",source:"pm-flows.md R20",note:"Open question: copy and time to retry. Not designed."},{state:"Edit contact: wrong OTP",status:"proposed",source:"ux-states.md section 8",note:'After the API exists: error state with hint "Wrong OTP. Please try again."'}]})]})}function M(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{M as default};
