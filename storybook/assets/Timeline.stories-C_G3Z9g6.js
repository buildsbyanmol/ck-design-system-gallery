import{j as e,V as l,c as d}from"./iframe-EJmZd_T6.js";import{T as o}from"./Timeline-B3tv93TO.js";import{T as m}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as a}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const c=[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"check-circle-outline",title:"Cashback tracked",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"wallet-filled",title:"Cashback paid",date:"2 Oct 2026",fill:"solid",tone:"success"}],f=[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"check-circle-outline",title:"Cashback tracked",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"close",title:"Order cancelled",date:"24 Sep 2026",fill:"solid",tone:"error"}],ae={title:"Components/Steppers/Timeline",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/Timeline.tsx",docs:{description:{component:"Vertical status history for an order: 44 px tone circles, a dashed connector and a date per step."}}},decorators:[t=>e.jsx(l,{style:{width:340},children:e.jsx(t,{})})],argTypes:{steps:{control:"object"},style:{control:!1}},args:{steps:c}},s={},r=({title:t,children:p})=>e.jsxs(l,{style:{gap:a[4]},children:[e.jsx(m,{variant:"body12Medium",color:d.text.secondary,children:t}),p]}),h=["success","warning","error","brand"],i={parameters:{docs:{description:{story:"Tone (success, warning, error, brand) crossed with fill (soft for a past step, solid for the current or final one)."}}},render:()=>e.jsx(l,{style:{width:340,gap:a[8]},children:h.map(t=>e.jsx(r,{title:`tone ${t}: soft, then solid`,children:e.jsx(o,{style:{paddingVertical:a[8]},steps:[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:t},{iconName:"clock-outline",title:"Cashback pending",date:"20 Sep 2026",fill:"solid",tone:t}]})},t))})},n={render:()=>e.jsxs(l,{style:{width:340,gap:a[8]},children:[e.jsx(r,{title:"paid",children:e.jsx(o,{steps:c})}),e.jsx(r,{title:"cancelled",children:e.jsx(o,{steps:f})}),e.jsx(r,{title:"one step",children:e.jsx(o,{steps:c.slice(0,1)})}),e.jsx(r,{title:"long title",children:e.jsx(o,{steps:[{iconName:"cart-outline",title:"Order of ₹10,00,000 placed on the partner store through the CashKaro app",date:"19 Sep 2026",fill:"solid",tone:"brand"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tone (success, warning, error, brand) crossed with fill (soft for a past step, solid for the current or final one).'
      }
    }
  },
  render: () => <View style={{
    width: 340,
    gap: spacing[8]
  }}>
      {TONES.map(tone => <Block key={tone} title={\`tone \${tone}: soft, then solid\`}>
          <Timeline style={{
        paddingVertical: spacing[8]
      }} steps={[{
        iconName: 'cart-outline',
        title: 'Order placed',
        date: '19 Sep 2026',
        fill: 'soft',
        tone
      }, {
        iconName: 'clock-outline',
        title: 'Cashback pending',
        date: '20 Sep 2026',
        fill: 'solid',
        tone
      }]} />
        </Block>)}
    </View>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 340,
    gap: spacing[8]
  }}>
      <Block title="paid"><Timeline steps={PAID} /></Block>
      <Block title="cancelled"><Timeline steps={CANCELLED} /></Block>
      <Block title="one step"><Timeline steps={PAID.slice(0, 1)} /></Block>
      <Block title="long title"><Timeline steps={[{
        iconName: 'cart-outline',
        title: 'Order of ₹10,00,000 placed on the partner store through the CashKaro app',
        date: '19 Sep 2026',
        fill: 'solid',
        tone: 'brand'
      }]} /></Block>
    </View>
}`,...n.parameters?.docs?.source}}};const le=["Playground","Variants","States"];export{s as Playground,n as States,i as Variants,le as __namedExportsOrder,ae as default};
