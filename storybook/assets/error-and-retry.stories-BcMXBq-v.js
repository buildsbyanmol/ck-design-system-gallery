import{j as e}from"./iframe-EJmZd_T6.js";import{S as p}from"./ScreenState-DxqUWntH.js";import{I as h}from"./InlineMessage-Hdq8xuDM.js";import{I as m}from"./Input-DiY7GBOZ.js";import{B as r,P as o,n as a}from"./_shared-BtkDuKJ0.js";const u={title:"Patterns/Error and retry",parameters:{layout:"padded",docs:{description:{component:"Say what failed, say what to do, and give a way to retry."}}}},s={tags:["live"],parameters:{source:"src/screens/EarningsScreen.tsx:217",docs:{description:{story:'A whole screen failed to load: ScreenState with a title, a cause line and "Try again".'}}},render:()=>e.jsx(r,{children:e.jsx(o,{padded:!1,children:e.jsx(p,{title:"Couldn’t load your earnings",body:"Check your connection and try again.",actionLabel:"Try again",onAction:a})})})},t={tags:["live"],parameters:{source:"src/screens/OrdersList.tsx:411",docs:{description:{story:'While the retry runs, the action label changes to "Retrying…". Orders, claims and transactions do this.'}}},render:()=>e.jsx(r,{children:e.jsx(o,{padded:!1,children:e.jsx(p,{title:"Couldn’t load your orders",body:"Something went wrong. Please try again.",actionLabel:"Retrying…",onAction:a})})})},n={tags:["live"],parameters:{source:"src/screens/OffersScreen.tsx:537",docs:{description:{story:"When the cause is on our side, say so and do not blame the connection."}}},render:()=>e.jsx(r,{children:e.jsx(o,{padded:!1,children:e.jsx(p,{title:"Couldn’t load offers",body:"Something went wrong on our side. Please try again in a bit.",actionLabel:"Try again",onAction:a})})})},i={tags:["live"],parameters:{source:"src/atoms/Input.tsx:71",docs:{description:{story:'Inline field error: `state="error"` and a `hint` that says how to fix it. The error stays next to the field.'}}},render:()=>e.jsx(r,{children:e.jsx(o,{children:e.jsx(m,{label:"UPI ID",value:"user@",state:"error",hint:"Enter a valid UPI ID, like name@bank.",onChangeText:a})})})},d={tags:["proposed"],parameters:{source:"ux-states.md section 6 (WithdrawVerifyOTP, network failure)",docs:{description:{story:"Proposed: replace the native Alert on a network or resend failure with an InlineMessage (tone warning). Open question: does a failed resend count toward the OTP rate limit (R20)?"}}},render:()=>e.jsx(r,{children:e.jsx(o,{children:e.jsx(h,{tone:"warning",message:"Connection problem. Please try again."})})})},c={tags:["proposed"],parameters:{source:"ux-states.md section 3 (CardDetailSheet, detail fetch failed)",docs:{description:{story:"Proposed: a failed card-detail fetch today falls back silently (`src/organisms/CardDetailSheet.tsx:1111`). An InlineMessage in the benefits block with a retry. Open question: show the cached benefits above it, or hide them?"}}},render:()=>e.jsx(r,{children:e.jsx(o,{children:e.jsx(h,{tone:"warning",message:"Couldn't load all benefits for this card.",action:"single",primaryActionLabel:"Try again",onPrimaryAction:a})})})},l={tags:["proposed"],parameters:{source:"ux-states.md section 2 (Home, catalogue error)",docs:{description:{story:"Proposed: Home builds its own text and Pressable on error (`src/screens/HomeScreen.tsx:2244`). Use ScreenState, as Cards you can get already does. Open question: keep the masthead and tools row above it (assumed yes)."}}},render:()=>e.jsx(r,{children:e.jsx(o,{padded:!1,children:e.jsx(p,{title:"Couldn't load cards",body:"Check your connection and try again.",actionLabel:"Try again",onAction:a})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/EarningsScreen.tsx:217',
    docs: {
      description: {
        story: 'A whole screen failed to load: ScreenState with a title, a cause line and "Try again".'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="Couldn’t load your earnings" body="Check your connection and try again." actionLabel="Try again" onAction={noop} />
    </Phone></Board>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OrdersList.tsx:411',
    docs: {
      description: {
        story: 'While the retry runs, the action label changes to "Retrying…". Orders, claims and transactions do this.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="Couldn’t load your orders" body="Something went wrong. Please try again." actionLabel="Retrying…" onAction={noop} />
    </Phone></Board>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OffersScreen.tsx:537',
    docs: {
      description: {
        story: 'When the cause is on our side, say so and do not blame the connection.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="Couldn’t load offers" body="Something went wrong on our side. Please try again in a bit." actionLabel="Try again" onAction={noop} />
    </Phone></Board>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/atoms/Input.tsx:71',
    docs: {
      description: {
        story: 'Inline field error: \`state="error"\` and a \`hint\` that says how to fix it. The error stays next to the field.'
      }
    }
  },
  render: () => <Board><Phone>
      <Input label="UPI ID" value="user@" state="error" hint="Enter a valid UPI ID, like name@bank." onChangeText={noop} />
    </Phone></Board>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 6 (WithdrawVerifyOTP, network failure)',
    docs: {
      description: {
        story: 'Proposed: replace the native Alert on a network or resend failure with an InlineMessage (tone warning). Open question: does a failed resend count toward the OTP rate limit (R20)?'
      }
    }
  },
  render: () => <Board><Phone>
      <InlineMessage tone="warning" message="Connection problem. Please try again." />
    </Phone></Board>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 3 (CardDetailSheet, detail fetch failed)',
    docs: {
      description: {
        story: 'Proposed: a failed card-detail fetch today falls back silently (\`src/organisms/CardDetailSheet.tsx:1111\`). An InlineMessage in the benefits block with a retry. Open question: show the cached benefits above it, or hide them?'
      }
    }
  },
  render: () => <Board><Phone>
      <InlineMessage tone="warning" message="Couldn't load all benefits for this card." action="single" primaryActionLabel="Try again" onPrimaryAction={noop} />
    </Phone></Board>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 2 (Home, catalogue error)',
    docs: {
      description: {
        story: 'Proposed: Home builds its own text and Pressable on error (\`src/screens/HomeScreen.tsx:2244\`). Use ScreenState, as Cards you can get already does. Open question: keep the masthead and tools row above it (assumed yes).'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="Couldn't load cards" body="Check your connection and try again." actionLabel="Try again" onAction={noop} />
    </Phone></Board>
}`,...l.parameters?.docs?.source}}};const g=["LoadFailed","Retrying","ServerSide","FieldError","NetworkProblemProposed","BenefitsErrorProposed","HomeCatalogueProposed"],S=Object.freeze(Object.defineProperty({__proto__:null,BenefitsErrorProposed:c,FieldError:i,HomeCatalogueProposed:l,LoadFailed:s,NetworkProblemProposed:d,Retrying:t,ServerSide:n,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{c as B,i as F,l as H,s as L,d as N,t as R,S,n as a};
