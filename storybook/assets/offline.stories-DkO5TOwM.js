import{j as e,V as p,c as w,r as h}from"./iframe-BxRbKpJi.js";import{O as x}from"./OfflineBanner-CSlN1bHS.js";import{S as c}from"./ScreenState-DU2alm3W.js";import{I as O}from"./InlineMessage-B-yUy7QX.js";import{T as P}from"./Text-Ck5O8Bhy.js";import{C as b}from"./ScreenHarness-Iz1hq-Wj.js";import{s as u}from"./motion-C4NNgPp6.js";import{B as i,P as d,n as l}from"./_shared-BNwWO92Z.js";const S={title:"Patterns/Offline",parameters:{layout:"padded",docs:{description:{component:"The global strip says the device is offline. Each screen must also say what is missing, never show a false empty or a false zero."}}}};function T({children:g}){const[m,y]=h.useState(!1);return h.useEffect(()=>{const o=window.navigator,f=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o),"onLine");return Object.defineProperty(o,"onLine",{configurable:!0,get:()=>!1}),window.dispatchEvent(new Event("offline")),y(!0),()=>{delete o.onLine,f&&!("onLine"in o)&&Object.defineProperty(Object.getPrototypeOf(o),"onLine",f),window.dispatchEvent(new Event("online"))}},[]),m?e.jsx(e.Fragment,{children:g}):null}const n={tags:["live"],parameters:{source:"src/molecules/OfflineBanner.tsx:16",docs:{description:{story:"The real OfflineBanner. It renders only when NetInfo reports offline, so this story sets the browser online flag to false while it is mounted. It is pinned to the top of its frame."}}},render:()=>e.jsx(i,{children:e.jsx(b,{children:e.jsx(T,{children:e.jsxs(p,{style:{width:390,height:160,position:"relative",overflow:"hidden",backgroundColor:w.surface.default},children:[e.jsx(x,{}),e.jsx(p,{style:{padding:u[16],paddingTop:u[48]},children:e.jsx(P,{variant:"body14Medium",children:"Data already loaded stays on screen."})})]})})})})},s={tags:["live"],parameters:{source:"src/screens/tools/ToolResultsScreen.tsx:536",docs:{description:{story:'The tools already handle paused queries: a ScreenState with "Try again". This is the copy the proposal reuses on every other screen.'}}},render:()=>e.jsx(i,{children:e.jsx(d,{padded:!1,children:e.jsx(c,{title:"You're offline",body:"Check your connection and try again.",actionLabel:"Try again",onAction:l})})})},r={tags:["proposed"],parameters:{source:'ux-states.md "Standard offline state"',docs:{description:{story:'Proposed: the one offline state for Home, Offers, Orders, Claims, Cards you can get, Advisor and All card benefits. Today a paused query with no cache falls through to the empty branch and says "0 cards" or "No offers here yet". Needs a shared helper that maps "paused with no data" to an offline flag (engineering, see `src/query/useCardSavings.ts:124`). Open question: add the "Connection lost" illustration when it exists.'}}},render:()=>e.jsx(i,{children:e.jsx(d,{padded:!1,children:e.jsx(c,{title:"You're offline",body:"Check your connection and try again.",actionLabel:"Try again",onAction:l})})})},t={tags:["proposed"],parameters:{source:"ux-states.md section 6 (Earnings, offline no cache)",docs:{description:{story:'Proposed: Earnings offline with no cache shows Confirmed ₹0 and Pending ₹0 today (`src/screens/EarningsScreen.tsx:288`). Show the offline state in place of the masthead and rows. Never render ₹0 for "unknown". Open question: none.'}}},render:()=>e.jsx(i,{children:e.jsx(d,{padded:!1,children:e.jsx(c,{title:"You're offline",body:"Your balance will show when you're back online.",actionLabel:"Try again",onAction:l})})})},a={tags:["proposed"],parameters:{source:"ux-states.md section 1 (Login sheet, offline when requesting OTP)",docs:{description:{story:"Proposed: offline when requesting an OTP shows the raw API text today (`src/auth/LoginSheetProvider.tsx:466`). An InlineMessage in the warning tone."}}},render:()=>e.jsx(i,{children:e.jsx(d,{children:e.jsx(O,{tone:"warning",message:"You're offline. Connect to get your OTP."})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/molecules/OfflineBanner.tsx:16',
    docs: {
      description: {
        story: 'The real OfflineBanner. It renders only when NetInfo reports offline, so this story sets the browser online flag to false while it is mounted. It is pinned to the top of its frame.'
      }
    }
  },
  render: () => <Board>
      <ComponentHarness>
        <ForceOffline>
          <View style={{
          width: 390,
          height: 160,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: colors.surface.default
        }}>
            <OfflineBanner />
            <View style={{
            padding: spacing[16],
            paddingTop: spacing[48]
          }}><Text variant="body14Medium">Data already loaded stays on screen.</Text></View>
          </View>
        </ForceOffline>
      </ComponentHarness>
    </Board>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/tools/ToolResultsScreen.tsx:536',
    docs: {
      description: {
        story: 'The tools already handle paused queries: a ScreenState with "Try again". This is the copy the proposal reuses on every other screen.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="You're offline" body="Check your connection and try again." actionLabel="Try again" onAction={noop} />
    </Phone></Board>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md "Standard offline state"',
    docs: {
      description: {
        story: 'Proposed: the one offline state for Home, Offers, Orders, Claims, Cards you can get, Advisor and All card benefits. Today a paused query with no cache falls through to the empty branch and says "0 cards" or "No offers here yet". Needs a shared helper that maps "paused with no data" to an offline flag (engineering, see \`src/query/useCardSavings.ts:124\`). Open question: add the "Connection lost" illustration when it exists.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="You're offline" body="Check your connection and try again." actionLabel="Try again" onAction={noop} />
    </Phone></Board>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 6 (Earnings, offline no cache)',
    docs: {
      description: {
        story: 'Proposed: Earnings offline with no cache shows Confirmed ₹0 and Pending ₹0 today (\`src/screens/EarningsScreen.tsx:288\`). Show the offline state in place of the masthead and rows. Never render ₹0 for "unknown". Open question: none.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="You're offline" body="Your balance will show when you're back online." actionLabel="Try again" onAction={noop} />
    </Phone></Board>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 1 (Login sheet, offline when requesting OTP)',
    docs: {
      description: {
        story: 'Proposed: offline when requesting an OTP shows the raw API text today (\`src/auth/LoginSheetProvider.tsx:466\`). An InlineMessage in the warning tone.'
      }
    }
  },
  render: () => <Board><Phone>
      <InlineMessage tone="warning" message="You're offline. Connect to get your OTP." />
    </Phone></Board>
}`,...a.parameters?.docs?.source}}};const j=["Banner","ToolsOffline","StandardOfflineProposed","EarningsOfflineProposed","LoginOfflineProposed"],k=Object.freeze(Object.defineProperty({__proto__:null,Banner:n,EarningsOfflineProposed:t,LoginOfflineProposed:a,StandardOfflineProposed:r,ToolsOffline:s,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{n as B,t as E,a as L,k as S,s as T,r as a};
