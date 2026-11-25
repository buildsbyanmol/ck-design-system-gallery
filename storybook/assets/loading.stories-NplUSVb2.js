import{j as e,V as o,c as u}from"./iframe-EJmZd_T6.js";import{S as r}from"./Skeleton-FGxaOzMx.js";import{A as y}from"./StepIndicator-Cre4iz30.js";import{T as g}from"./Text-CwaPBD6t.js";import{C as f,H as w}from"./HomeSkeleton-BQ6kMID7.js";import{C as S}from"./ScreenHarness-Dd1A2iH9.js";import{s,r as j}from"./motion-CMqo2j38.js";import{B as n,P as a,L as x}from"./_shared-BtkDuKJ0.js";const b={title:"Patterns/Loading",parameters:{layout:"padded",docs:{description:{component:"Skeleton first. A wait line for long calls. No spinner on money values."}}}};function t(){return e.jsxs(o,{style:{flexDirection:"row",gap:s[12],alignItems:"center"},children:[e.jsx(r,{width:48,height:48,radius:"full"}),e.jsxs(o,{style:{flex:1,gap:s[8]},children:[e.jsx(r,{height:14,width:"70%"}),e.jsx(r,{height:12,width:"45%"})]})]})}const i={tags:["live"],parameters:{source:"src/atoms/Skeleton.tsx:29",docs:{description:{story:"The Skeleton atom: any width, height and radius, pulsing between opacity[16] and opacity[40]."}}},render:()=>e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]})})},l={tags:["live"],parameters:{source:"src/atoms/AmountSkeleton.tsx:39",docs:{description:{story:'AmountSkeleton stands in for a money value while it loads. The user never sees a fake ₹0 that then changes. Use `tone="onDark"` on a dark hero.'}}},render:()=>e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(x,{label:"Loading",children:e.jsxs(o,{style:{flexDirection:"row",justifyContent:"space-between",alignSelf:"stretch"},children:[e.jsx(g,{variant:"body14Regular",color:u.text.secondary,children:"Confirmed"}),e.jsx(y,{width:72,height:20})]})}),e.jsx(x,{label:"Loaded",children:e.jsxs(o,{style:{flexDirection:"row",justifyContent:"space-between",alignSelf:"stretch"},children:[e.jsx(g,{variant:"body14Regular",color:u.text.secondary,children:"Confirmed"}),e.jsx(g,{variant:"body16SemiBold",children:"₹1,250"})]})}),e.jsx(x,{label:"On a dark hero",children:e.jsx(o,{style:{alignSelf:"stretch",padding:s[16],borderRadius:j.lg,backgroundColor:u.surface.dark},children:e.jsx(y,{width:140,height:36,tone:"onDark"})})})]})})},d={tags:["live"],parameters:{source:"src/organisms/HomeSkeleton.tsx:136",docs:{description:{story:"CardListSkeleton: card-tile-shaped rows, shown while a freshly picked category loads."}}},render:()=>e.jsx(n,{children:e.jsx(a,{padded:!1,children:e.jsx(o,{style:{paddingVertical:s[16]},children:e.jsx(f,{count:2})})})})},c={tags:["live"],parameters:{layout:"fullscreen",source:"src/organisms/HomeSkeleton.tsx:36",docs:{description:{story:"HomeSkeleton mirrors the Home layout: masthead, search pill, filter chips, card tiles. Use one skeleton that matches the page, not a spinner."}}},render:()=>e.jsx(S,{children:e.jsx(o,{style:{width:390,height:844,alignSelf:"center",overflow:"hidden",backgroundColor:u.surface.default},children:e.jsx(w,{})})})},h={tags:["proposed"],parameters:{source:"src/screens/tools/ToolResultsScreen.tsx:522",docs:{description:{story:"For a call that can take a long time, the tools show one line that says why, above the skeleton rows. Replica, not the real screen: the real copy and Text atom, with hand-built skeleton rows (the screen keeps its row local). The real state is in Flows/4 Shared result/League table, Loading."}}},render:()=>e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(g,{variant:"body14Medium",children:"Checking every card against your spends. This can take up to a minute."}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]})})},p={tags:["proposed"],parameters:{source:"ux-states.md section 2 (OffersBrandAmazon, loading)",docs:{description:{story:"Proposed: the store page shows a bare spinner today (`src/screens/OffersBrandAmazon.tsx:362`). Skeleton blocks in the page shape: a hero and three rows. Open question: none, a visual change only."}}},render:()=>e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(r,{height:s[128],radius:"lg"}),e.jsx(r,{height:s[48],radius:"lg"}),e.jsx(r,{height:s[48],radius:"lg"}),e.jsx(r,{height:s[48],radius:"lg"})]})})},m={tags:["proposed"],parameters:{source:"ux-states.md section 3 (AllCardBenefits, loading)",docs:{description:{story:"Proposed: All card benefits shows a bare spinner today (`src/screens/AllCardBenefitsScreen.tsx:129`). Four skeleton rows. Open question: none."}}},render:()=>e.jsx(n,{children:e.jsx(a,{children:[0,1,2,3].map(k=>e.jsx(r,{height:s[48],radius:"lg"},k))})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/atoms/Skeleton.tsx:29',
    docs: {
      description: {
        story: 'The Skeleton atom: any width, height and radius, pulsing between opacity[16] and opacity[40].'
      }
    }
  },
  render: () => <Board>
      <Phone>
        <RowSkeleton /><RowSkeleton /><RowSkeleton />
      </Phone>
    </Board>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/atoms/AmountSkeleton.tsx:39',
    docs: {
      description: {
        story: 'AmountSkeleton stands in for a money value while it loads. The user never sees a fake ₹0 that then changes. Use \`tone="onDark"\` on a dark hero.'
      }
    }
  },
  render: () => <Board>
      <Phone>
        <Labelled label="Loading">
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch'
        }}>
            <Text variant="body14Regular" color={colors.text.secondary}>Confirmed</Text>
            <AmountSkeleton width={72} height={20} />
          </View>
        </Labelled>
        <Labelled label="Loaded">
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch'
        }}>
            <Text variant="body14Regular" color={colors.text.secondary}>Confirmed</Text>
            <Text variant="body16SemiBold">₹1,250</Text>
          </View>
        </Labelled>
        <Labelled label="On a dark hero">
          <View style={{
          alignSelf: 'stretch',
          padding: spacing[16],
          borderRadius: radius.lg,
          backgroundColor: colors.surface.dark
        }}>
            <AmountSkeleton width={140} height={36} tone="onDark" />
          </View>
        </Labelled>
      </Phone>
    </Board>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/organisms/HomeSkeleton.tsx:136',
    docs: {
      description: {
        story: 'CardListSkeleton: card-tile-shaped rows, shown while a freshly picked category loads.'
      }
    }
  },
  render: () => <Board>
      <Phone padded={false}><View style={{
        paddingVertical: spacing[16]
      }}><CardListSkeleton count={2} /></View></Phone>
    </Board>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    layout: 'fullscreen',
    source: 'src/organisms/HomeSkeleton.tsx:36',
    docs: {
      description: {
        story: 'HomeSkeleton mirrors the Home layout: masthead, search pill, filter chips, card tiles. Use one skeleton that matches the page, not a spinner.'
      }
    }
  },
  render: () => <ComponentHarness>
      <View style={{
      width: 390,
      height: 844,
      alignSelf: 'center',
      overflow: 'hidden',
      backgroundColor: colors.surface.default
    }}><HomeSkeleton /></View>
    </ComponentHarness>
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'src/screens/tools/ToolResultsScreen.tsx:522',
    docs: {
      description: {
        story: 'For a call that can take a long time, the tools show one line that says why, above the skeleton rows. Replica, not the real screen: the real copy and Text atom, with hand-built skeleton rows (the screen keeps its row local). The real state is in Flows/4 Shared result/League table, Loading.'
      }
    }
  },
  render: () => <Board>
      <Phone>
        <Text variant="body14Medium">Checking every card against your spends. This can take up to a minute.</Text>
        <RowSkeleton /><RowSkeleton /><RowSkeleton />
      </Phone>
    </Board>
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 2 (OffersBrandAmazon, loading)',
    docs: {
      description: {
        story: 'Proposed: the store page shows a bare spinner today (\`src/screens/OffersBrandAmazon.tsx:362\`). Skeleton blocks in the page shape: a hero and three rows. Open question: none, a visual change only.'
      }
    }
  },
  render: () => <Board>
      <Phone>
        <Skeleton height={spacing[128]} radius="lg" />
        <Skeleton height={spacing[48]} radius="lg" /><Skeleton height={spacing[48]} radius="lg" /><Skeleton height={spacing[48]} radius="lg" />
      </Phone>
    </Board>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 3 (AllCardBenefits, loading)',
    docs: {
      description: {
        story: 'Proposed: All card benefits shows a bare spinner today (\`src/screens/AllCardBenefitsScreen.tsx:129\`). Four skeleton rows. Open question: none.'
      }
    }
  },
  render: () => <Board>
      <Phone>
        {[0, 1, 2, 3].map(i => <Skeleton key={i} height={spacing[48]} radius="lg" />)}
      </Phone>
    </Board>
}`,...m.parameters?.docs?.source}}};const v=["GenericBlocks","MoneyAmounts","CardListShimmer","WholeScreen","WaitLine","StoreHeaderProposed","BenefitsProposed"],V=Object.freeze(Object.defineProperty({__proto__:null,BenefitsProposed:m,CardListShimmer:d,GenericBlocks:i,MoneyAmounts:l,StoreHeaderProposed:p,WaitLine:h,WholeScreen:c,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{d as C,i as G,l as M,V as S,h as W};
