import{j as t,V as c,c as m}from"./iframe-BxRbKpJi.js";import{P as o}from"./ProcessSteps-D1RhRVIQ.js";import{T as d}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as l}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const r=[{title:"Click on a store from CashKaro",caption:"Pick the store and tap Shop Now"},{title:"Shop as usual on the store",caption:"Do not use another coupon site in between"},{title:"Cashback shows as Pending",caption:"Generally takes 2 to 72 hrs"},{title:"Withdraw your cashback",caption:"Minimum ₹250 to your bank or UPI"}],it={title:"Components/Steppers/ProcessSteps",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/ProcessSteps.tsx",docs:{description:{component:'Vertical "what happens next" explainer: numbered saffron tiles joined by a dotted line, title and caption per step.'}}},decorators:[e=>t.jsx(c,{style:{width:340},children:t.jsx(e,{})})],argTypes:{steps:{control:"object"},style:{control:!1}},args:{steps:r}},a={},i=({title:e,children:s})=>t.jsxs(c,{style:{gap:l[8]},children:[t.jsx(d,{variant:"body12Medium",color:m.text.secondary,children:e}),s]}),p={parameters:{docs:{description:{story:"There is one layout. The caption is optional per step. The icon field of ProcessStep is declared but the tile shows the step number today."}}},render:()=>t.jsxs(c,{style:{width:340,gap:l[24]},children:[t.jsx(i,{title:"title and caption",children:t.jsx(o,{steps:r.slice(0,3)})}),t.jsx(i,{title:"title only",children:t.jsx(o,{steps:r.slice(0,3).map(({title:e})=>({title:e}))})})]})},n={render:()=>t.jsxs(c,{style:{width:340,gap:l[24]},children:[t.jsx(i,{title:"one step (no connector)",children:t.jsx(o,{steps:r.slice(0,1)})}),t.jsx(i,{title:"eight steps",children:t.jsx(o,{steps:Array.from({length:8},(e,s)=>({title:`Step ${s+1}: ${r[s%4].title}`,caption:r[s%4].caption}))})}),t.jsx(i,{title:"long copy",children:t.jsx(o,{steps:[{title:"Place an order of ₹10,00,000 or more on the partner store using the CashKaro link only",caption:"Orders placed through an app that was already open, or after clearing the cart, may not track at all"},{title:"Wait",caption:"₹0 until tracked"}]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'There is one layout. The caption is optional per step. The icon field of ProcessStep is declared but the tile shows the step number today.'
      }
    }
  },
  render: () => <View style={{
    width: 340,
    gap: spacing[24]
  }}>
      <Block title="title and caption"><ProcessSteps steps={STEPS.slice(0, 3)} /></Block>
      <Block title="title only"><ProcessSteps steps={STEPS.slice(0, 3).map(({
        title
      }) => ({
        title
      }))} /></Block>
    </View>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 340,
    gap: spacing[24]
  }}>
      <Block title="one step (no connector)"><ProcessSteps steps={STEPS.slice(0, 1)} /></Block>
      <Block title="eight steps">
        <ProcessSteps steps={Array.from({
        length: 8
      }, (_, i) => ({
        title: \`Step \${i + 1}: \${STEPS[i % 4].title}\`,
        caption: STEPS[i % 4].caption
      }))} />
      </Block>
      <Block title="long copy">
        <ProcessSteps steps={[{
        title: 'Place an order of ₹10,00,000 or more on the partner store using the CashKaro link only',
        caption: 'Orders placed through an app that was already open, or after clearing the cart, may not track at all'
      }, {
        title: 'Wait',
        caption: '₹0 until tracked'
      }]} />
      </Block>
    </View>
}`,...n.parameters?.docs?.source}}};const at=["Playground","Variants","States"];export{a as Playground,n as States,p as Variants,at as __namedExportsOrder,it as default};
