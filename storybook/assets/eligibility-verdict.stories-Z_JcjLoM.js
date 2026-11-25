import{j as e,V as p,c as h}from"./iframe-BxRbKpJi.js";import{E as u}from"./EligibleSheet-Db0JbGum.js";import{M as b}from"./MaybeSheet-Cd5aKRDe.js";import{I as m}from"./IneligibleSheet-kDsmNYFG.js";import{I as y}from"./InlineMessage-B-yUy7QX.js";import{B as x}from"./Button-DVRCyaXo.js";import{i}from"./index-DCss3D-b.js";import{s as c,r as f}from"./motion-C4NNgPp6.js";import{B as n,n as s}from"./_shared-BNwWO92Z.js";const k={title:"Patterns/Eligibility verdict",parameters:{layout:"padded",docs:{description:{component:"One classifier gives one of three results: eligible, maybe, ineligible. Each has its own sheet."}}}},d={pincode:"110001",amount:"₹1,50,000",occupation:"Salaried"},l=({children:g})=>e.jsx(p,{style:{width:390,backgroundColor:h.surface.dark,overflow:"hidden",borderRadius:f["2xl"]},children:g}),a={tags:["live"],parameters:{source:"src/organisms/EligibleSheet.tsx:38",docs:{description:{story:'Eligible: confetti masthead, the reward headline and "Apply Now". Home passes several card images to show a fanned stack.'}}},render:()=>e.jsx(n,{children:e.jsx(l,{children:e.jsx(u,{...d,cardImage:i.cards.axisMagnus,onApply:s,onEditPress:s})})})},r={tags:["live"],parameters:{source:"src/organisms/MaybeSheet.tsx:29",docs:{description:{story:'Maybe: the user may qualify. The sheet lists cards they can explore and keeps "Continue to Apply".'}}},render:()=>e.jsx(n,{children:e.jsx(l,{children:e.jsx(b,{...d,cards:[{id:"a",cardImage:i.cards.axisMagnus,cardName:"Axis Bank Magnus",cashbackText:"₹1,200"},{id:"b",cardImage:i.cards.hdfcRegaliaGold,cardName:"HDFC Regalia Gold",cashbackText:"₹1,000"},{id:"c",cardImage:i.cards.sbiCashback,cardName:"SBI Cashback",cashbackText:"₹800"}],onContinue:s,onEditPress:s})})})},t={tags:["live"],parameters:{source:"src/organisms/IneligibleSheet.tsx:130",docs:{description:{story:'Ineligible with no alternatives: the real sheet with no picks. Blocks 2 and 3 (alternatives, "See all") are left out, so the only exits are Edit and "Continue to Apply" (D22: a rejection is not a hard stop). The audit rates this PARTIAL (R15). The with-alternatives look needs card cross-sell data that these stories do not have.'}}},render:()=>e.jsx(n,{children:e.jsx(l,{children:e.jsx(m,{...d,onContinue:s,onEditPress:s,picks:[]})})})},o={tags:["proposed"],parameters:{source:"ux-states.md section 3 (IneligibleSheet, zero alternatives)",docs:{description:{story:'Proposed: under the sheet, an InlineMessage and an outline button give a way forward. Open question: where does "Browse all cards" go, and does it keep the details the user typed (R15)?'}}},render:()=>e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(m,{...d,onContinue:s,onEditPress:s,picks:[]}),e.jsxs(p,{style:{backgroundColor:h.surface.default,padding:c[16],gap:c[12]},children:[e.jsx(y,{tone:"info",message:"No other card fits these details yet. Try different details, or browse all cards."}),e.jsx(x,{label:"Browse all cards",variant:"outline",tone:"second",size:44,fullWidth:!0,onPress:s})]})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/organisms/EligibleSheet.tsx:38',
    docs: {
      description: {
        story: 'Eligible: confetti masthead, the reward headline and "Apply Now". Home passes several card images to show a fanned stack.'
      }
    }
  },
  render: () => <Board><Frame>
      <EligibleSheet {...details} cardImage={images.cards.axisMagnus} onApply={noop} onEditPress={noop} />
    </Frame></Board>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/organisms/MaybeSheet.tsx:29',
    docs: {
      description: {
        story: 'Maybe: the user may qualify. The sheet lists cards they can explore and keeps "Continue to Apply".'
      }
    }
  },
  render: () => <Board><Frame>
      <MaybeSheet {...details} cards={[{
        id: 'a',
        cardImage: images.cards.axisMagnus,
        cardName: 'Axis Bank Magnus',
        cashbackText: '₹1,200'
      }, {
        id: 'b',
        cardImage: images.cards.hdfcRegaliaGold,
        cardName: 'HDFC Regalia Gold',
        cashbackText: '₹1,000'
      }, {
        id: 'c',
        cardImage: images.cards.sbiCashback,
        cardName: 'SBI Cashback',
        cashbackText: '₹800'
      }]} onContinue={noop} onEditPress={noop} />
    </Frame></Board>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/organisms/IneligibleSheet.tsx:130',
    docs: {
      description: {
        story: 'Ineligible with no alternatives: the real sheet with no picks. Blocks 2 and 3 (alternatives, "See all") are left out, so the only exits are Edit and "Continue to Apply" (D22: a rejection is not a hard stop). The audit rates this PARTIAL (R15). The with-alternatives look needs card cross-sell data that these stories do not have.'
      }
    }
  },
  render: () => <Board><Frame>
      <IneligibleSheet {...details} onContinue={noop} onEditPress={noop} picks={[]} />
    </Frame></Board>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 3 (IneligibleSheet, zero alternatives)',
    docs: {
      description: {
        story: 'Proposed: under the sheet, an InlineMessage and an outline button give a way forward. Open question: where does "Browse all cards" go, and does it keep the details the user typed (R15)?'
      }
    }
  },
  render: () => <Board><Frame>
      <IneligibleSheet {...details} onContinue={noop} onEditPress={noop} picks={[]} />
      <View style={{
        backgroundColor: colors.surface.default,
        padding: spacing[16],
        gap: spacing[12]
      }}>
        <InlineMessage tone="info" message="No other card fits these details yet. Try different details, or browse all cards." />
        <Button label="Browse all cards" variant="outline" tone="second" size={44} fullWidth onPress={noop} />
      </View>
    </Frame></Board>
}`,...o.parameters?.docs?.source}}};const I=["Eligible","Maybe","IneligibleNoAlternatives","IneligibleZeroAlternativesProposed"],P=Object.freeze(Object.defineProperty({__proto__:null,Eligible:a,IneligibleNoAlternatives:t,IneligibleZeroAlternativesProposed:o,Maybe:r,__namedExportsOrder:I,default:k},Symbol.toStringTag,{value:"Module"}));export{P as S};
