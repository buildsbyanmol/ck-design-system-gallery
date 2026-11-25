import{j as e,V as l,c as d}from"./iframe-BxRbKpJi.js";import{T as o}from"./Timeline-CLTJvpeB.js";import{T as m}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as a}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const c=[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"check-circle-outline",title:"Cashback tracked",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"wallet-filled",title:"Cashback paid",date:"2 Oct 2026",fill:"solid",tone:"success"}],f=[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"check-circle-outline",title:"Cashback tracked",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"close",title:"Order cancelled",date:"24 Sep 2026",fill:"solid",tone:"error"}],ae={title:"Components/Steppers/Timeline",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/Timeline.tsx",docs:{description:{component:"Vertical status history for an order: 44 px tone circles, a dashed connector and a date per step."}}},decorators:[t=>e.jsx(l,{style:{width:340},children:e.jsx(t,{})})],argTypes:{steps:{control:"object"},style:{control:!1}},args:{steps:c}},s={},r=({title:t,children:p})=>e.jsxs(l,{style:{gap:a[4]},children:[e.jsx(m,{variant:"body12Medium",color:d.text.secondary,children:t}),p]}),h=["success","warning","error","brand"],i={parameters:{docs:{description:{story:"Tone (success, warning, error, brand) crossed with fill (soft for a past step, solid for the current or final one)."}}},render:()=>e.jsx(l,{style:{width:340,gap:a[8]},children:h.map(t=>e.jsx(r,{title:`tone ${t}: soft, then solid`,children:e.jsx(o,{style:{paddingVertical:a[8]},steps:[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:t},{iconName:"clock-outline",title:"Cashback pending",date:"20 Sep 2026",fill:"solid",tone:t}]})},t))})},n={render:()=>e.jsxs(l,{style:{width:340,gap:a[8]},children:[e.jsx(r,{title:"paid",children:e.jsx(o,{steps:c})}),e.jsx(r,{title:"cancelled",children:e.jsx(o,{steps:f})}),e.jsx(r,{title:"one step",children:e.jsx(o,{steps:c.slice(0,1)})}),e.jsx(r,{title:"long title",children:e.jsx(o,{steps:[{iconName:"cart-outline",title:"Order of ₹10,00,000 placed on the partner store through the CashKaro app",date:"19 Sep 2026",fill:"solid",tone:"brand"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
