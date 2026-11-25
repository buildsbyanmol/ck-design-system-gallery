import{j as e,V as c,c as b}from"./iframe-DK2xttIN.js";import{O as t}from"./OrderRow-D1HcXpVR.js";import{T as g}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{i as s}from"./index-DCss3D-b.js";import{s as d}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const p=()=>{},y=["cashback","rewards","referral","bonus"],m=["requested","pending","delayed","cancelled","confirmed","paid","expired"],u=["success","error","brand","gray","warning","info","purple","sky","rose"],de={title:"Components/Lists/OrderRow",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/OrderRow.tsx",docs:{description:{component:"A flat order list row: store logo, a status badge or tag, the cashback amount, a meta line and an optional expandable note."}}},decorators:[a=>e.jsx(c,{style:{width:380},children:e.jsx(a,{})})],argTypes:{type:{control:"select",options:y},badgeVariant:{control:"inline-radio",options:["status","tag"]},status:{control:"select",options:m},tagLabel:{control:"text"},tagTone:{control:"select",options:u},amount:{control:"text"},showAmountChevron:{control:"boolean"},metaLabel:{control:"text"},metaValue:{control:"text"},note:{control:"object"},logoSrc:{control:!1},onPress:{control:!1},style:{control:!1}},args:{type:"cashback",badgeVariant:"status",status:"pending",tagLabel:"Bonus",tagTone:"success",amount:"₹1,250",showAmountChevron:!0,metaLabel:"Order date:",metaValue:"19 Sep 2026",logoSrc:s.brands.amazon,onPress:p}},n={},o=({title:a,children:h})=>e.jsxs(c,{style:{gap:d[4]},children:[e.jsx(g,{variant:"body12Medium",color:b.text.secondary,children:a}),h]}),r={badgeVariant:"status",status:"confirmed",amount:"₹1,250",showAmountChevron:!0,metaLabel:"Order date:",metaValue:"19 Sep 2026",logoSrc:s.brands.flipkart,onPress:p},i={parameters:{docs:{description:{story:"The four types (cashback, rewards, referral, bonus) and the two badge variants (status pill, tag). Referral has no chevron in Figma, so showAmountChevron is false there."}}},render:()=>e.jsxs(c,{style:{width:380,gap:d[8]},children:[e.jsx(o,{title:"cashback, status",children:e.jsx(t,{...r,type:"cashback"})}),e.jsx(o,{title:"rewards, status",children:e.jsx(t,{...r,type:"rewards",logoSrc:s.brands.timesprime,status:"paid"})}),e.jsx(o,{title:"referral, no chevron",children:e.jsx(t,{...r,type:"referral",showAmountChevron:!1,amount:"₹100",metaLabel:"Friend joined:",metaValue:"2 Oct 2026",logoSrc:s.brands.myntra})}),e.jsx(o,{title:"bonus, tag",children:e.jsx(t,{...r,type:"bonus",badgeVariant:"tag",tagLabel:"Welcome bonus",tagTone:"success",amount:"₹50",logoSrc:s.brands.nykaa})}),u.slice(1,4).map(a=>e.jsx(o,{title:`tag tone ${a}`,children:e.jsx(t,{...r,type:"bonus",badgeVariant:"tag",tagLabel:"Limited offer",tagTone:a})},a))]})},l={parameters:{docs:{description:{story:"Every status value, an expandable note (More and Less), and amounts at both ends (₹0, ₹10,00,000). The row has no loading or error mode: a list loads with Skeleton rows built by the screen."}}},render:()=>e.jsxs(c,{style:{width:380,gap:d[8]},children:[m.map(a=>e.jsx(o,{title:`status ${a}`,children:e.jsx(t,{...r,type:"cashback",status:a})},a)),e.jsx(o,{title:"₹0",children:e.jsx(t,{...r,type:"cashback",status:"requested",amount:`₹${0 .toLocaleString("en-IN")}`})}),e.jsx(o,{title:"₹10,00,000",children:e.jsx(t,{...r,type:"cashback",status:"paid",amount:`₹${1e6.toLocaleString("en-IN")}`})}),e.jsx(o,{title:"expandable note",children:e.jsx(t,{...r,type:"cashback",status:"delayed",note:{text:"The store has not confirmed this order yet. Cashback is added after the return window ends and the store sends the final report to CashKaro.",expandable:!0}})}),e.jsx(o,{title:"short note",children:e.jsx(t,{...r,type:"cashback",status:"cancelled",note:{text:"Order cancelled by the store.",expandable:!1}})}),e.jsx(o,{title:"long meta value",children:e.jsx(t,{...r,type:"cashback",metaLabel:"Order id:",metaValue:"CKORDER0001-A-very-long-store-reference-that-does-not-fit-on-one-line"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
