import{j as e,V as c,c as b}from"./iframe-BxRbKpJi.js";import{O as t}from"./OrderRow-D_J-ATbo.js";import{T as g}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{i as s}from"./index-DCss3D-b.js";import{s as d}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-Bn01aVoN.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./tagVariants-CS75JYCB.js";const p=()=>{},y=["cashback","rewards","referral","bonus"],m=["requested","pending","delayed","cancelled","confirmed","paid","expired"],u=["success","error","brand","gray","warning","info","purple","sky","rose"],de={title:"Components/Lists/OrderRow",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/OrderRow.tsx",docs:{description:{component:"A flat order list row: store logo, a status badge or tag, the cashback amount, a meta line and an optional expandable note."}}},decorators:[a=>e.jsx(c,{style:{width:380},children:e.jsx(a,{})})],argTypes:{type:{control:"select",options:y},badgeVariant:{control:"inline-radio",options:["status","tag"]},status:{control:"select",options:m},tagLabel:{control:"text"},tagTone:{control:"select",options:u},amount:{control:"text"},showAmountChevron:{control:"boolean"},metaLabel:{control:"text"},metaValue:{control:"text"},note:{control:"object"},logoSrc:{control:!1},onPress:{control:!1},style:{control:!1}},args:{type:"cashback",badgeVariant:"status",status:"pending",tagLabel:"Bonus",tagTone:"success",amount:"₹1,250",showAmountChevron:!0,metaLabel:"Order date:",metaValue:"19 Sep 2026",logoSrc:s.brands.amazon,onPress:p}},n={},o=({title:a,children:h})=>e.jsxs(c,{style:{gap:d[4]},children:[e.jsx(g,{variant:"body12Medium",color:b.text.secondary,children:a}),h]}),r={badgeVariant:"status",status:"confirmed",amount:"₹1,250",showAmountChevron:!0,metaLabel:"Order date:",metaValue:"19 Sep 2026",logoSrc:s.brands.flipkart,onPress:p},i={parameters:{docs:{description:{story:"The four types (cashback, rewards, referral, bonus) and the two badge variants (status pill, tag). Referral has no chevron in Figma, so showAmountChevron is false there."}}},render:()=>e.jsxs(c,{style:{width:380,gap:d[8]},children:[e.jsx(o,{title:"cashback, status",children:e.jsx(t,{...r,type:"cashback"})}),e.jsx(o,{title:"rewards, status",children:e.jsx(t,{...r,type:"rewards",logoSrc:s.brands.timesprime,status:"paid"})}),e.jsx(o,{title:"referral, no chevron",children:e.jsx(t,{...r,type:"referral",showAmountChevron:!1,amount:"₹100",metaLabel:"Friend joined:",metaValue:"2 Oct 2026",logoSrc:s.brands.myntra})}),e.jsx(o,{title:"bonus, tag",children:e.jsx(t,{...r,type:"bonus",badgeVariant:"tag",tagLabel:"Welcome bonus",tagTone:"success",amount:"₹50",logoSrc:s.brands.nykaa})}),u.slice(1,4).map(a=>e.jsx(o,{title:`tag tone ${a}`,children:e.jsx(t,{...r,type:"bonus",badgeVariant:"tag",tagLabel:"Limited offer",tagTone:a})},a))]})},l={parameters:{docs:{description:{story:"Every status value, an expandable note (More and Less), and amounts at both ends (₹0, ₹10,00,000). The row has no loading or error mode: a list loads with Skeleton rows built by the screen."}}},render:()=>e.jsxs(c,{style:{width:380,gap:d[8]},children:[m.map(a=>e.jsx(o,{title:`status ${a}`,children:e.jsx(t,{...r,type:"cashback",status:a})},a)),e.jsx(o,{title:"₹0",children:e.jsx(t,{...r,type:"cashback",status:"requested",amount:`₹${0 .toLocaleString("en-IN")}`})}),e.jsx(o,{title:"₹10,00,000",children:e.jsx(t,{...r,type:"cashback",status:"paid",amount:`₹${1e6.toLocaleString("en-IN")}`})}),e.jsx(o,{title:"expandable note",children:e.jsx(t,{...r,type:"cashback",status:"delayed",note:{text:"The store has not confirmed this order yet. Cashback is added after the return window ends and the store sends the final report to CashKaro.",expandable:!0}})}),e.jsx(o,{title:"short note",children:e.jsx(t,{...r,type:"cashback",status:"cancelled",note:{text:"Order cancelled by the store.",expandable:!1}})}),e.jsx(o,{title:"long meta value",children:e.jsx(t,{...r,type:"cashback",metaLabel:"Order id:",metaValue:"CKORDER0001-A-very-long-store-reference-that-does-not-fit-on-one-line"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The four types (cashback, rewards, referral, bonus) and the two badge variants (status pill, tag). Referral has no chevron in Figma, so showAmountChevron is false there.'
      }
    }
  },
  render: () => <View style={{
    width: 380,
    gap: spacing[8]
  }}>
      <Block title="cashback, status"><OrderRow {...base} type="cashback" /></Block>
      <Block title="rewards, status"><OrderRow {...base} type="rewards" logoSrc={images.brands.timesprime} status="paid" /></Block>
      <Block title="referral, no chevron"><OrderRow {...base} type="referral" showAmountChevron={false} amount="₹100" metaLabel="Friend joined:" metaValue="2 Oct 2026" logoSrc={images.brands.myntra} /></Block>
      <Block title="bonus, tag"><OrderRow {...base} type="bonus" badgeVariant="tag" tagLabel="Welcome bonus" tagTone="success" amount="₹50" logoSrc={images.brands.nykaa} /></Block>
      {TONES.slice(1, 4).map(t => <Block key={t} title={\`tag tone \${t}\`}><OrderRow {...base} type="bonus" badgeVariant="tag" tagLabel="Limited offer" tagTone={t} /></Block>)}
    </View>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Every status value, an expandable note (More and Less), and amounts at both ends (₹0, ₹10,00,000). The row has no loading or error mode: a list loads with Skeleton rows built by the screen.'
      }
    }
  },
  render: () => <View style={{
    width: 380,
    gap: spacing[8]
  }}>
      {STATUSES.map(s => <Block key={s} title={\`status \${s}\`}><OrderRow {...base} type="cashback" status={s} /></Block>)}
      <Block title="₹0"><OrderRow {...base} type="cashback" status="requested" amount={\`₹\${0 .toLocaleString('en-IN')}\`} /></Block>
      <Block title="₹10,00,000"><OrderRow {...base} type="cashback" status="paid" amount={\`₹\${1000000 .toLocaleString('en-IN')}\`} /></Block>
      <Block title="expandable note"><OrderRow {...base} type="cashback" status="delayed" note={{
        text: 'The store has not confirmed this order yet. Cashback is added after the return window ends and the store sends the final report to CashKaro.',
        expandable: true
      }} /></Block>
      <Block title="short note"><OrderRow {...base} type="cashback" status="cancelled" note={{
        text: 'Order cancelled by the store.',
        expandable: false
      }} /></Block>
      <Block title="long meta value"><OrderRow {...base} type="cashback" metaLabel="Order id:" metaValue="CKORDER0001-A-very-long-store-reference-that-does-not-fit-on-one-line" /></Block>
    </View>
}`,...l.parameters?.docs?.source}}};const pe=["Playground","Variants","States"];export{n as Playground,l as States,i as Variants,pe as __namedExportsOrder,de as default};
