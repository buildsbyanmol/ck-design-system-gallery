import{j as e,V as c,c as b}from"./iframe-EJmZd_T6.js";import{O as t}from"./OrderRow-C5X_5FUy.js";import{T as g}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{i as s}from"./index-DCss3D-b.js";import{s as d}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./tagVariants-C3ziFvwj.js";const p=()=>{},y=["cashback","rewards","referral","bonus"],m=["requested","pending","delayed","cancelled","confirmed","paid","expired"],u=["success","error","brand","gray","warning","info","purple","sky","rose"],de={title:"Components/Lists/OrderRow",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/OrderRow.tsx",docs:{description:{component:"A flat order list row: store logo, a status badge or tag, the cashback amount, a meta line and an optional expandable note."}}},decorators:[a=>e.jsx(c,{style:{width:380},children:e.jsx(a,{})})],argTypes:{type:{control:"select",options:y},badgeVariant:{control:"inline-radio",options:["status","tag"]},status:{control:"select",options:m},tagLabel:{control:"text"},tagTone:{control:"select",options:u},amount:{control:"text"},showAmountChevron:{control:"boolean"},metaLabel:{control:"text"},metaValue:{control:"text"},note:{control:"object"},logoSrc:{control:!1},onPress:{control:!1},style:{control:!1}},args:{type:"cashback",badgeVariant:"status",status:"pending",tagLabel:"Bonus",tagTone:"success",amount:"₹1,250",showAmountChevron:!0,metaLabel:"Order date:",metaValue:"19 Sep 2026",logoSrc:s.brands.amazon,onPress:p}},n={},o=({title:a,children:h})=>e.jsxs(c,{style:{gap:d[4]},children:[e.jsx(g,{variant:"body12Medium",color:b.text.secondary,children:a}),h]}),r={badgeVariant:"status",status:"confirmed",amount:"₹1,250",showAmountChevron:!0,metaLabel:"Order date:",metaValue:"19 Sep 2026",logoSrc:s.brands.flipkart,onPress:p},i={parameters:{docs:{description:{story:"The four types (cashback, rewards, referral, bonus) and the two badge variants (status pill, tag). Referral has no chevron in Figma, so showAmountChevron is false there."}}},render:()=>e.jsxs(c,{style:{width:380,gap:d[8]},children:[e.jsx(o,{title:"cashback, status",children:e.jsx(t,{...r,type:"cashback"})}),e.jsx(o,{title:"rewards, status",children:e.jsx(t,{...r,type:"rewards",logoSrc:s.brands.timesprime,status:"paid"})}),e.jsx(o,{title:"referral, no chevron",children:e.jsx(t,{...r,type:"referral",showAmountChevron:!1,amount:"₹100",metaLabel:"Friend joined:",metaValue:"2 Oct 2026",logoSrc:s.brands.myntra})}),e.jsx(o,{title:"bonus, tag",children:e.jsx(t,{...r,type:"bonus",badgeVariant:"tag",tagLabel:"Welcome bonus",tagTone:"success",amount:"₹50",logoSrc:s.brands.nykaa})}),u.slice(1,4).map(a=>e.jsx(o,{title:`tag tone ${a}`,children:e.jsx(t,{...r,type:"bonus",badgeVariant:"tag",tagLabel:"Limited offer",tagTone:a})},a))]})},l={parameters:{docs:{description:{story:"Every status value, an expandable note (More and Less), and amounts at both ends (₹0, ₹10,00,000). The row has no loading or error mode: a list loads with Skeleton rows built by the screen."}}},render:()=>e.jsxs(c,{style:{width:380,gap:d[8]},children:[m.map(a=>e.jsx(o,{title:`status ${a}`,children:e.jsx(t,{...r,type:"cashback",status:a})},a)),e.jsx(o,{title:"₹0",children:e.jsx(t,{...r,type:"cashback",status:"requested",amount:`₹${0 .toLocaleString("en-IN")}`})}),e.jsx(o,{title:"₹10,00,000",children:e.jsx(t,{...r,type:"cashback",status:"paid",amount:`₹${1e6.toLocaleString("en-IN")}`})}),e.jsx(o,{title:"expandable note",children:e.jsx(t,{...r,type:"cashback",status:"delayed",note:{text:"The store has not confirmed this order yet. Cashback is added after the return window ends and the store sends the final report to CashKaro.",expandable:!0}})}),e.jsx(o,{title:"short note",children:e.jsx(t,{...r,type:"cashback",status:"cancelled",note:{text:"Order cancelled by the store.",expandable:!1}})}),e.jsx(o,{title:"long meta value",children:e.jsx(t,{...r,type:"cashback",metaLabel:"Order id:",metaValue:"CKORDER0001-A-very-long-store-reference-that-does-not-fit-on-one-line"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
