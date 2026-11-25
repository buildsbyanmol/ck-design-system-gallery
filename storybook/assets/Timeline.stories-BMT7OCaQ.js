import{j as e,V as l,c as d}from"./iframe-DK2xttIN.js";import{T as o}from"./Timeline-CJcRO7Eq.js";import{T as m}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s as a}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const c=[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"check-circle-outline",title:"Cashback tracked",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"wallet-filled",title:"Cashback paid",date:"2 Oct 2026",fill:"solid",tone:"success"}],f=[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"check-circle-outline",title:"Cashback tracked",date:"19 Sep 2026",fill:"soft",tone:"success"},{iconName:"close",title:"Order cancelled",date:"24 Sep 2026",fill:"solid",tone:"error"}],ae={title:"Components/Steppers/Timeline",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/Timeline.tsx",docs:{description:{component:"Vertical status history for an order: 44 px tone circles, a dashed connector and a date per step."}}},decorators:[t=>e.jsx(l,{style:{width:340},children:e.jsx(t,{})})],argTypes:{steps:{control:"object"},style:{control:!1}},args:{steps:c}},s={},r=({title:t,children:p})=>e.jsxs(l,{style:{gap:a[4]},children:[e.jsx(m,{variant:"body12Medium",color:d.text.secondary,children:t}),p]}),h=["success","warning","error","brand"],i={parameters:{docs:{description:{story:"Tone (success, warning, error, brand) crossed with fill (soft for a past step, solid for the current or final one)."}}},render:()=>e.jsx(l,{style:{width:340,gap:a[8]},children:h.map(t=>e.jsx(r,{title:`tone ${t}: soft, then solid`,children:e.jsx(o,{style:{paddingVertical:a[8]},steps:[{iconName:"cart-outline",title:"Order placed",date:"19 Sep 2026",fill:"soft",tone:t},{iconName:"clock-outline",title:"Cashback pending",date:"20 Sep 2026",fill:"solid",tone:t}]})},t))})},n={render:()=>e.jsxs(l,{style:{width:340,gap:a[8]},children:[e.jsx(r,{title:"paid",children:e.jsx(o,{steps:c})}),e.jsx(r,{title:"cancelled",children:e.jsx(o,{steps:f})}),e.jsx(r,{title:"one step",children:e.jsx(o,{steps:c.slice(0,1)})}),e.jsx(r,{title:"long title",children:e.jsx(o,{steps:[{iconName:"cart-outline",title:"Order of ₹10,00,000 placed on the partner store through the CashKaro app",date:"19 Sep 2026",fill:"solid",tone:"brand"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
