import{j as e,V as r,c as a}from"./iframe-EJmZd_T6.js";import{B as p}from"./BottomSheetHeader--tduzGuO.js";import{T as i}from"./Text-CwaPBD6t.js";import{B as u}from"./Button-DYQYKJ2f.js";import{b as g,r as n,s as t}from"./motion-CMqo2j38.js";import{B as d,L as m,n as y}from"./_shared-BtkDuKJ0.js";const x={title:"Patterns/Session expiry",parameters:{layout:"padded",docs:{description:{component:"When the refresh token is rejected the login sheet opens by itself. Today it never says why."}}}};function l({title:h,body:c}){return e.jsxs(r,{style:{width:390,backgroundColor:a.surface.default,borderTopLeftRadius:n["2xl"],borderTopRightRadius:n["2xl"],borderWidth:g.thin,borderColor:a.border.subtle3,overflow:"hidden"},children:[e.jsx(p,{showStroke:!1}),e.jsxs(r,{style:{paddingHorizontal:t[16],paddingBottom:t[24],gap:t[16]},children:[e.jsxs(r,{style:{alignItems:"center",gap:t[4]},children:[e.jsx(i,{variant:"heading24SemiBold",align:"center",children:h}),e.jsx(i,{variant:"body14Regular",color:a.text.secondary,align:"center",children:c})]}),e.jsx(u,{label:"Get OTP",variant:"solid",tone:"second",size:52,fullWidth:!0,onPress:y})]})]})}const s={tags:["proposed"],parameters:{source:"src/auth/LoginSheetProvider.tsx:427",docs:{description:{story:"The sheet for every source: the title and body are fixed (`src/auth/LoginSheetProvider.tsx:427`). A user whose session ended sees the same text as a new user. Replica, not the real sheet: the real copy drawn from the sheet parts (the real sheet needs the login provider and its OTP state). The real sheet is in Flows/1 Launch and login/Login sheet."}}},render:()=>e.jsx(d,{children:e.jsx(l,{title:"Log in or sign up",body:"Enter your mobile number. We will text you a 6-digit OTP."})})},o={tags:["proposed"],parameters:{source:"ux-states.md section 1 (Login sheet, session expired)",docs:{description:{story:"Proposed: the same sheet with a title and body for `source: session_expired`. DS gap: the sheet has no title or body slot per source. Open question: after login, return the user to the step they were on (R17). Not designed: the cache is cleared on expiry."}}},render:()=>e.jsx(d,{children:e.jsx(m,{label:"session_expired",children:e.jsx(l,{title:"Please log in again",body:"You were logged out to keep your account safe. Your cashback is safe."})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'src/auth/LoginSheetProvider.tsx:427',
    docs: {
      description: {
        story: 'The sheet for every source: the title and body are fixed (\`src/auth/LoginSheetProvider.tsx:427\`). A user whose session ended sees the same text as a new user. Replica, not the real sheet: the real copy drawn from the sheet parts (the real sheet needs the login provider and its OTP state). The real sheet is in Flows/1 Launch and login/Login sheet.'
      }
    }
  },
  render: () => <Board><Sheet title="Log in or sign up" body="Enter your mobile number. We will text you a 6-digit OTP." /></Board>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 1 (Login sheet, session expired)',
    docs: {
      description: {
        story: 'Proposed: the same sheet with a title and body for \`source: session_expired\`. DS gap: the sheet has no title or body slot per source. Open question: after login, return the user to the step they were on (R17). Not designed: the cache is cleared on expiry.'
      }
    }
  },
  render: () => <Board>
      <Labelled label="session_expired">
        <Sheet title="Please log in again" body="You were logged out to keep your account safe. Your cashback is safe." />
      </Labelled>
    </Board>
}`,...o.parameters?.docs?.source}}};const b=["TodaySheet","PerReasonTitleProposed"],L=Object.freeze(Object.defineProperty({__proto__:null,PerReasonTitleProposed:o,TodaySheet:s,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{o as P,L as S,s as T};
