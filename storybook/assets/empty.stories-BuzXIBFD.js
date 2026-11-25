import{j as e}from"./iframe-BxRbKpJi.js";import{S as s}from"./ScreenState-DU2alm3W.js";import{i as h}from"./index-DCss3D-b.js";import{B as t,P as r,n as l,L as p}from"./_shared-BNwWO92Z.js";const u={title:"Patterns/Empty",parameters:{layout:"padded",docs:{description:{component:"ScreenState is the one block for empty, no-results and error screens."}}}},a={tags:["live"],parameters:{source:"src/screens/OrdersList.tsx:425",docs:{description:{story:"First-use empty. An illustration, a title that says what is missing, one line on how it fills."}}},render:()=>e.jsx(t,{children:e.jsx(r,{padded:!1,children:e.jsx(s,{image:h.screenstate.appOrders,title:"No orders yet",body:"Shop via Cards.xtra and your orders will show up here."})})})},o={tags:["live"],parameters:{source:"src/screens/OrdersList.tsx:418",docs:{description:{story:"Filters hide everything. Offer one tap to clear them."}}},render:()=>e.jsx(t,{children:e.jsx(r,{padded:!1,children:e.jsx(s,{title:"No matching results",body:"Try adjusting your filters.",actionLabel:"Clear filters",onAction:l})})})},i={tags:["live"],parameters:{source:"src/screens/CardsYouCanGetScreen.tsx:293",docs:{description:{story:"The list is empty because of what the user entered. The action changes the input."}}},render:()=>e.jsx(t,{children:e.jsx(r,{padded:!1,children:e.jsx(s,{title:"No cards to show",body:"We could not find a card you can get with these details.",actionLabel:"Change my details",onAction:l})})})},n={tags:["live"],parameters:{source:"src/screens/OffersScreen.tsx:552",docs:{description:{story:"Empty tab with a way forward. The audit notes this can be the default on production (R10) and shows the same text when the device is offline with no cache (see the Offline pattern)."}}},render:()=>e.jsx(t,{children:e.jsx(r,{padded:!1,children:e.jsx(s,{title:"No offers here yet",body:"New stores are added often. Pull down to refresh, or find a card that earns you cashback.",actionLabel:"Explore cards",onAction:l})})})},d={tags:["live"],parameters:{source:"src/screens/NotificationsScreen.tsx:172",docs:{description:{story:"Notifications always shows this (R19): the bell suggests a feature that does not exist yet."}}},render:()=>e.jsx(t,{children:e.jsx(r,{padded:!1,children:e.jsx(s,{title:"You're all caught up",body:"Offers and updates about your cashback will show up here."})})})},c={tags:["live"],parameters:{source:"src/screens/MissingCashbackDidYouShop.tsx:212",docs:{description:{story:"Per-tab empty on the claims list, with the tracking illustration. Parts: optional 156 px illustration, title (heading18SemiBold), optional body (body14Regular), one optional action."}}},render:()=>e.jsx(t,{children:e.jsx(p,{label:"Closed tab",children:e.jsx(r,{padded:!1,children:e.jsx(s,{image:h.screenstate.tracking,title:"No closed claims yet",body:"Cashback being tracked shows up here."})})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OrdersList.tsx:425',
    docs: {
      description: {
        story: 'First-use empty. An illustration, a title that says what is missing, one line on how it fills.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState image={images.screenstate.appOrders} title="No orders yet" body="Shop via Cards.xtra and your orders will show up here." />
    </Phone></Board>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OrdersList.tsx:418',
    docs: {
      description: {
        story: 'Filters hide everything. Offer one tap to clear them.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="No matching results" body="Try adjusting your filters." actionLabel="Clear filters" onAction={noop} />
    </Phone></Board>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/CardsYouCanGetScreen.tsx:293',
    docs: {
      description: {
        story: 'The list is empty because of what the user entered. The action changes the input.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="No cards to show" body="We could not find a card you can get with these details." actionLabel="Change my details" onAction={noop} />
    </Phone></Board>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OffersScreen.tsx:552',
    docs: {
      description: {
        story: 'Empty tab with a way forward. The audit notes this can be the default on production (R10) and shows the same text when the device is offline with no cache (see the Offline pattern).'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="No offers here yet" body="New stores are added often. Pull down to refresh, or find a card that earns you cashback." actionLabel="Explore cards" onAction={noop} />
    </Phone></Board>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/NotificationsScreen.tsx:172',
    docs: {
      description: {
        story: 'Notifications always shows this (R19): the bell suggests a feature that does not exist yet.'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState title="You're all caught up" body="Offers and updates about your cashback will show up here." />
    </Phone></Board>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/MissingCashbackDidYouShop.tsx:212',
    docs: {
      description: {
        story: 'Per-tab empty on the claims list, with the tracking illustration. Parts: optional 156 px illustration, title (heading18SemiBold), optional body (body14Regular), one optional action.'
      }
    }
  },
  render: () => <Board>
      <Labelled label="Closed tab">
        <Phone padded={false}><ScreenState image={images.screenstate.tracking} title="No closed claims yet" body="Cashback being tracked shows up here." /></Phone>
      </Labelled>
    </Board>
}`,...c.parameters?.docs?.source}}};const m=["NothingYet","NoMatchingResults","NoCardsForTheseDetails","NoOffers","AllCaughtUp","WithIllustration"],x=Object.freeze(Object.defineProperty({__proto__:null,AllCaughtUp:d,NoCardsForTheseDetails:i,NoMatchingResults:o,NoOffers:n,NothingYet:a,WithIllustration:c,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{d as A,a as N,x as S,c as W,o as a,i as b,n as c};
