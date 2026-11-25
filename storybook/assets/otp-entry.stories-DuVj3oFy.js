import{j as e,r as m}from"./iframe-BxRbKpJi.js";import{O as x}from"./OtpInput-CmjSyeXa.js";import{B as a,P as o,L as r,n as i}from"./_shared-BNwWO92Z.js";const b={title:"Patterns/OTP entry",parameters:{layout:"padded",docs:{description:{component:"Six boxes (D19), a resend timer, and one error line under the boxes."}}}};function s({initial:l,...c}){const[h,p]=m.useState(l);return e.jsx(x,{length:6,value:h,onChangeText:p,...c})}const t={tags:["live"],parameters:{source:"src/auth/LoginSheetProvider.tsx:511",docs:{description:{story:'Empty, then partly filled. The resend link counts down (`resend="timer"`).'}}},render:()=>e.jsx(a,{children:e.jsxs(o,{children:[e.jsx(r,{label:"Empty, resend timer",children:e.jsx(s,{initial:"",resend:"timer",seconds:24,onResend:i})}),e.jsx(r,{label:"Partly filled",children:e.jsx(s,{initial:"482",resend:"timer",seconds:18,onResend:i})})]})})},n={tags:["live"],parameters:{source:"src/screens/withdraw/WithdrawVerifyOTP.tsx:211",docs:{description:{story:'Wrong or expired code: `state="error"` and a short hint under the boxes. The two hints below are the copy the withdraw screen uses.'}}},render:()=>e.jsx(a,{children:e.jsxs(o,{children:[e.jsx(r,{label:"Invalid",children:e.jsx(s,{initial:"482915",state:"error",hint:"Enter a valid OTP",resend:"ready",onResend:i})}),e.jsx(r,{label:"Expired",children:e.jsx(s,{initial:"482915",state:"error",hint:"OTP is expired",resend:"ready",onResend:i})})]})})},d={tags:["live"],parameters:{source:"src/screens/withdraw/WithdrawVerifyOTP.tsx:217",docs:{description:{story:"Timer finished: the resend link is active. While the code is being verified, the resend is hidden and the boxes are blocked."}}},render:()=>e.jsx(a,{children:e.jsxs(o,{children:[e.jsx(r,{label:"Ready to resend",children:e.jsx(s,{initial:"",resend:"ready",onResend:i})}),e.jsx(r,{label:"Verifying (resend hidden)",children:e.jsx(s,{initial:"482915",state:"default",resend:"hidden"})})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/auth/LoginSheetProvider.tsx:511',
    docs: {
      description: {
        story: 'Empty, then partly filled. The resend link counts down (\`resend="timer"\`).'
      }
    }
  },
  render: () => <Board><Phone>
      <Labelled label="Empty, resend timer"><Otp initial="" resend="timer" seconds={24} onResend={noop} /></Labelled>
      <Labelled label="Partly filled"><Otp initial="482" resend="timer" seconds={18} onResend={noop} /></Labelled>
    </Phone></Board>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/withdraw/WithdrawVerifyOTP.tsx:211',
    docs: {
      description: {
        story: 'Wrong or expired code: \`state="error"\` and a short hint under the boxes. The two hints below are the copy the withdraw screen uses.'
      }
    }
  },
  render: () => <Board><Phone>
      <Labelled label="Invalid"><Otp initial="482915" state="error" hint="Enter a valid OTP" resend="ready" onResend={noop} /></Labelled>
      <Labelled label="Expired"><Otp initial="482915" state="error" hint="OTP is expired" resend="ready" onResend={noop} /></Labelled>
    </Phone></Board>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/withdraw/WithdrawVerifyOTP.tsx:217',
    docs: {
      description: {
        story: 'Timer finished: the resend link is active. While the code is being verified, the resend is hidden and the boxes are blocked.'
      }
    }
  },
  render: () => <Board><Phone>
      <Labelled label="Ready to resend"><Otp initial="" resend="ready" onResend={noop} /></Labelled>
      <Labelled label="Verifying (resend hidden)"><Otp initial="482915" state="default" resend="hidden" /></Labelled>
    </Phone></Board>
}`,...d.parameters?.docs?.source}}};const y=["Entry","WrongCode","ResendReady"],j=Object.freeze(Object.defineProperty({__proto__:null,Entry:t,ResendReady:d,WrongCode:n,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{t as E,d as R,j as S,n as W};
