import{j as e,r as n,V as u}from"./iframe-DK2xttIN.js";import{P as p}from"./PaymentProcessingSheet-B873lPAd.js";import{S as l}from"./ScreenState-sH8dnbA1.js";import{I as h}from"./InlineMessage-BdiJ76-B.js";import{i as m}from"./index-DCss3D-b.js";import{B as i,P as c,n as o}from"./_shared-CCkWhCsa.js";const y={title:"Patterns/Money confirmation",parameters:{layout:"padded",docs:{description:{component:"A money step never leaves the user guessing: if the outcome is unknown, do not let them submit again."}}}};function g(){const a=n.useRef(null);return n.useEffect(()=>{const d=setTimeout(()=>a.current?.present(),300);return()=>clearTimeout(d)},[]),e.jsx(u,{style:{width:390,height:844,alignSelf:"center"},children:e.jsx(p,{ref:a,amount:"₹1,250",onBrowseDeals:o})})}const t={tags:["live"],parameters:{layout:"fullscreen",source:"src/screens/withdraw/useWithdrawGate.tsx:126",docs:{description:{story:"A payout is already settling: Withdraw opens this sheet instead of a second request. Opens on mount."}}},render:()=>e.jsx(g,{})},s={tags:["proposed"],parameters:{source:"ux-states.md section 6 (WithdrawVerifyOTP, outcome unknown)",docs:{description:{story:"Proposed: a timeout after the send is a money state in limbo. A native Alert today (`src/screens/withdraw/WithdrawVerifyOTP.tsx:89`). A full state that says not to request again. DS gap: ScreenState takes one action only. Open question: how long until the app checks the payout status by itself?"}}},render:()=>e.jsx(i,{children:e.jsx(c,{padded:!1,children:e.jsx(l,{image:m.screenstate.tracking,title:"We're confirming your withdrawal",body:"This can take a few minutes. Don't request again until it shows in Earnings.",actionLabel:"Go to Earnings",onAction:o})})})},r={tags:["proposed"],parameters:{source:"ux-states.md section 6 (WithdrawVerifyOTP, payout failed)",docs:{description:{story:"Proposed: replaces the native Alert that disappears on tap (`src/screens/withdraw/WithdrawVerifyOTP.tsx:177`). An InlineMessage over the footer with a retry. Open question: can the user retry safely, or is the outcome unknown (see the story above)?"}}},render:()=>e.jsx(i,{children:e.jsx(c,{children:e.jsx(h,{tone:"error",title:"Withdrawal didn't go through",message:"Please try again in a few minutes.",action:"single",primaryActionLabel:"Try again",onPrimaryAction:o})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    layout: 'fullscreen',
    source: 'src/screens/withdraw/useWithdrawGate.tsx:126',
    docs: {
      description: {
        story: 'A payout is already settling: Withdraw opens this sheet instead of a second request. Opens on mount.'
      }
    }
  },
  render: () => <Sheet />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 6 (WithdrawVerifyOTP, outcome unknown)',
    docs: {
      description: {
        story: 'Proposed: a timeout after the send is a money state in limbo. A native Alert today (\`src/screens/withdraw/WithdrawVerifyOTP.tsx:89\`). A full state that says not to request again. DS gap: ScreenState takes one action only. Open question: how long until the app checks the payout status by itself?'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState image={images.screenstate.tracking} title="We're confirming your withdrawal" body="This can take a few minutes. Don't request again until it shows in Earnings." actionLabel="Go to Earnings" onAction={noop} />
    </Phone></Board>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 6 (WithdrawVerifyOTP, payout failed)',
    docs: {
      description: {
        story: 'Proposed: replaces the native Alert that disappears on tap (\`src/screens/withdraw/WithdrawVerifyOTP.tsx:177\`). An InlineMessage over the footer with a retry. Open question: can the user retry safely, or is the outcome unknown (see the story above)?'
      }
    }
  },
  render: () => <Board><Phone>
      <InlineMessage tone="error" title="Withdrawal didn't go through" message="Please try again in a few minutes." action="single" primaryActionLabel="Try again" onPrimaryAction={noop} />
    </Phone></Board>
}`,...r.parameters?.docs?.source}}};const w=["PayoutInProcess","UnknownOutcomeProposed","PayoutFailedProposed"],b=Object.freeze(Object.defineProperty({__proto__:null,PayoutFailedProposed:r,PayoutInProcess:t,UnknownOutcomeProposed:s,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{r as P,b as S,s as U};
