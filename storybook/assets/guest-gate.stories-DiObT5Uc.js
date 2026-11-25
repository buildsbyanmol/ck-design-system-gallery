import{j as e,r as n,V as u}from"./iframe-EJmZd_T6.js";import{G as c}from"./GuestPrompt-Cr6AQfsx.js";import{E as h}from"./EarnLoginSheet-CZRvNNUk.js";import{B as g,P as m,L as i,n as o}from"./_shared-BtkDuKJ0.js";const y={title:"Patterns/Guest gate",parameters:{layout:"padded",docs:{description:{component:"Login is optional (D12). A guest sees why logging in pays off, and is never blocked from a click-out."}}}},s={tags:["live"],parameters:{source:"src/screens/EarningsScreen.tsx:165",docs:{description:{story:"GuestPrompt replaces the content of an account-only tab. Earnings and Profile use it, each with its own icon, title and body."}}},render:()=>e.jsx(g,{children:e.jsxs(m,{children:[e.jsx(i,{label:"Earnings",children:e.jsx(c,{title:"See every rupee you earn",body:"Log in to track cashback from card applications and shopping, and withdraw it to UPI or a gift card.",onLogin:o,style:{alignSelf:"stretch"}})}),e.jsx(i,{label:"Profile",children:e.jsx(c,{icon:"feat-rewards-outline",title:"Your CashKaro account",body:"Log in to see your earnings, withdraw cashback and raise missing-cashback claims.",onLogin:o,style:{alignSelf:"stretch"}})})]})})};function l({kind:d}){const a=n.useRef(null);return n.useEffect(()=>{const p=setTimeout(()=>a.current?.present(),300);return()=>clearTimeout(p)},[]),e.jsx(u,{style:{width:390,height:844,alignSelf:"center"},children:e.jsx(h,{ref:a,kind:d,onLogin:o,onContinue:o})})}const r={tags:["live"],parameters:{layout:"fullscreen",source:"src/organisms/EarnLoginSheet.tsx:35",docs:{description:{story:'A guest taps Apply on a card. The sheet says cashback needs a login and offers "Apply without cashback". Opens on mount.'}}},render:()=>e.jsx(l,{kind:"card"})},t={tags:["live"],parameters:{layout:"fullscreen",source:"src/organisms/EarnLoginSheet.tsx:38",docs:{description:{story:'A guest taps Shop & Earn on a store. Same sheet, store copy, "Shop without cashback". Opens on mount.'}}},render:()=>e.jsx(l,{kind:"store"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/EarningsScreen.tsx:165',
    docs: {
      description: {
        story: 'GuestPrompt replaces the content of an account-only tab. Earnings and Profile use it, each with its own icon, title and body.'
      }
    }
  },
  render: () => <Board><Phone>
      <Labelled label="Earnings">
        <GuestPrompt title="See every rupee you earn" body="Log in to track cashback from card applications and shopping, and withdraw it to UPI or a gift card." onLogin={noop} style={{
          alignSelf: 'stretch'
        }} />
      </Labelled>
      <Labelled label="Profile">
        <GuestPrompt icon="feat-rewards-outline" title="Your CashKaro account" body="Log in to see your earnings, withdraw cashback and raise missing-cashback claims." onLogin={noop} style={{
          alignSelf: 'stretch'
        }} />
      </Labelled>
    </Phone></Board>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    layout: 'fullscreen',
    source: 'src/organisms/EarnLoginSheet.tsx:35',
    docs: {
      description: {
        story: 'A guest taps Apply on a card. The sheet says cashback needs a login and offers "Apply without cashback". Opens on mount.'
      }
    }
  },
  render: () => <Sheet kind="card" />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    layout: 'fullscreen',
    source: 'src/organisms/EarnLoginSheet.tsx:38',
    docs: {
      description: {
        story: 'A guest taps Shop & Earn on a store. Same sheet, store copy, "Shop without cashback". Opens on mount.'
      }
    }
  },
  render: () => <Sheet kind="store" />
}`,...t.parameters?.docs?.source}}};const f=["TabPrompt","ClickOutCard","ClickOutStore"],x=Object.freeze(Object.defineProperty({__proto__:null,ClickOutCard:r,ClickOutStore:t,TabPrompt:s,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{x as S,s as T};
