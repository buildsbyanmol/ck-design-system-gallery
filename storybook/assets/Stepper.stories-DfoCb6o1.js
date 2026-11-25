import{j as t,V as n,c as m}from"./iframe-BxRbKpJi.js";import{S as e}from"./Stepper-ATItk0Xz.js";import{T as u}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{i as l}from"./index-DCss3D-b.js";import{s as c}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const o=[{title:"Order placed",subtext:"Shop through CashKaro"},{title:"Cashback tracked",subtext:"Within 72 hours"},{title:"Cashback confirmed",subtext:"After the return window"},{title:"Cashback paid",subtext:"Withdraw from ₹250"}],at={title:"Components/Steppers/Stepper",component:e,tags:["autodocs","live"],parameters:{source:"src/molecules/Stepper.tsx",docs:{description:{component:"Vertical stepper with a 20 px marker, a solid connector and a title with optional subtext. State comes from currentIndex."}}},decorators:[p=>t.jsx(n,{style:{width:340},children:t.jsx(p,{})})],argTypes:{currentIndex:{control:{type:"number",min:-1,max:5,step:1},description:"Before it = done, at it = current, after it = locked. Below 0 = all locked. At or past the count = all done."},steps:{control:"object"}},args:{steps:o,currentIndex:1}},s={},r=({title:p,children:d})=>t.jsxs(n,{style:{gap:c[8]},children:[t.jsx(u,{variant:"body12Medium",color:m.text.secondary,children:p}),d]}),i={parameters:{docs:{description:{story:"A step can override the state marker with indicator: info, footprints, cashback or image."}}},render:()=>t.jsxs(n,{style:{width:340,gap:c[24]},children:[t.jsx(r,{title:"milestone (done, current, locked)",children:t.jsx(e,{steps:o,currentIndex:1})}),t.jsx(r,{title:"per-step indicator: info, footprints, cashback",children:t.jsx(e,{currentIndex:0,steps:[{title:"Know the rules",subtext:"Read before you shop",indicator:"info"},{title:"Visit the store",subtext:"Use the CashKaro link",indicator:"footprints"},{title:"Earn cashback",subtext:"Up to X% on this store",indicator:"cashback"}]})}),t.jsx(r,{title:"per-step indicator: image",children:t.jsx(e,{currentIndex:0,steps:[{title:"Open Amazon",subtext:"From the store page",indicator:"image",image:l.brands.amazon},{title:"Open Flipkart",subtext:"From the store page",indicator:"image",image:l.brands.flipkart}]})})]})},a={render:()=>t.jsxs(n,{style:{width:340,gap:c[24]},children:[t.jsx(r,{title:"currentIndex 0 (first step current)",children:t.jsx(e,{steps:o,currentIndex:0})}),t.jsx(r,{title:"currentIndex 3 (last step current)",children:t.jsx(e,{steps:o,currentIndex:3})}),t.jsx(r,{title:"currentIndex 4 (all done)",children:t.jsx(e,{steps:o,currentIndex:4})}),t.jsx(r,{title:"currentIndex -1 (all locked)",children:t.jsx(e,{steps:o,currentIndex:-1})}),t.jsx(r,{title:"one step",children:t.jsx(e,{steps:[o[0]],currentIndex:0})}),t.jsx(r,{title:"long title and subtext",children:t.jsx(e,{currentIndex:1,steps:[{title:"Order placed on the partner store through the CashKaro app link",subtext:"Keep the order confirmation email until the cashback is paid to your bank account"},{title:"Cashback tracked",subtext:"₹10,00,000 order value is the cap"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A step can override the state marker with indicator: info, footprints, cashback or image.'
      }
    }
  },
  render: () => <View style={{
    width: 340,
    gap: spacing[24]
  }}>
      <Block title="milestone (done, current, locked)"><Stepper steps={STEPS} currentIndex={1} /></Block>
      <Block title="per-step indicator: info, footprints, cashback">
        <Stepper currentIndex={0} steps={[{
        title: 'Know the rules',
        subtext: 'Read before you shop',
        indicator: 'info'
      }, {
        title: 'Visit the store',
        subtext: 'Use the CashKaro link',
        indicator: 'footprints'
      }, {
        title: 'Earn cashback',
        subtext: 'Up to X% on this store',
        indicator: 'cashback'
      }]} />
      </Block>
      <Block title="per-step indicator: image">
        <Stepper currentIndex={0} steps={[{
        title: 'Open Amazon',
        subtext: 'From the store page',
        indicator: 'image',
        image: images.brands.amazon
      }, {
        title: 'Open Flipkart',
        subtext: 'From the store page',
        indicator: 'image',
        image: images.brands.flipkart
      }]} />
      </Block>
    </View>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 340,
    gap: spacing[24]
  }}>
      <Block title="currentIndex 0 (first step current)"><Stepper steps={STEPS} currentIndex={0} /></Block>
      <Block title="currentIndex 3 (last step current)"><Stepper steps={STEPS} currentIndex={3} /></Block>
      <Block title="currentIndex 4 (all done)"><Stepper steps={STEPS} currentIndex={4} /></Block>
      <Block title="currentIndex -1 (all locked)"><Stepper steps={STEPS} currentIndex={-1} /></Block>
      <Block title="one step"><Stepper steps={[STEPS[0]]} currentIndex={0} /></Block>
      <Block title="long title and subtext">
        <Stepper currentIndex={1} steps={[{
        title: 'Order placed on the partner store through the CashKaro app link',
        subtext: 'Keep the order confirmation email until the cashback is paid to your bank account'
      }, {
        title: 'Cashback tracked',
        subtext: '₹10,00,000 order value is the cap'
      }]} />
      </Block>
    </View>
}`,...a.parameters?.docs?.source}}};const nt=["Playground","Variants","States"];export{s as Playground,a as States,i as Variants,nt as __namedExportsOrder,at as default};
