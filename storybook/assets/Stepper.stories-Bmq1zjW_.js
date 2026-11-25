import{j as t,V as n,c as m}from"./iframe-EJmZd_T6.js";import{S as e}from"./Stepper-BRwdq6El.js";import{T as u}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{i as l}from"./index-DCss3D-b.js";import{s as c}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const o=[{title:"Order placed",subtext:"Shop through CashKaro"},{title:"Cashback tracked",subtext:"Within 72 hours"},{title:"Cashback confirmed",subtext:"After the return window"},{title:"Cashback paid",subtext:"Withdraw from ₹250"}],at={title:"Components/Steppers/Stepper",component:e,tags:["autodocs","live"],parameters:{source:"src/molecules/Stepper.tsx",docs:{description:{component:"Vertical stepper with a 20 px marker, a solid connector and a title with optional subtext. State comes from currentIndex."}}},decorators:[p=>t.jsx(n,{style:{width:340},children:t.jsx(p,{})})],argTypes:{currentIndex:{control:{type:"number",min:-1,max:5,step:1},description:"Before it = done, at it = current, after it = locked. Below 0 = all locked. At or past the count = all done."},steps:{control:"object"}},args:{steps:o,currentIndex:1}},s={},r=({title:p,children:d})=>t.jsxs(n,{style:{gap:c[8]},children:[t.jsx(u,{variant:"body12Medium",color:m.text.secondary,children:p}),d]}),i={parameters:{docs:{description:{story:"A step can override the state marker with indicator: info, footprints, cashback or image."}}},render:()=>t.jsxs(n,{style:{width:340,gap:c[24]},children:[t.jsx(r,{title:"milestone (done, current, locked)",children:t.jsx(e,{steps:o,currentIndex:1})}),t.jsx(r,{title:"per-step indicator: info, footprints, cashback",children:t.jsx(e,{currentIndex:0,steps:[{title:"Know the rules",subtext:"Read before you shop",indicator:"info"},{title:"Visit the store",subtext:"Use the CashKaro link",indicator:"footprints"},{title:"Earn cashback",subtext:"Up to X% on this store",indicator:"cashback"}]})}),t.jsx(r,{title:"per-step indicator: image",children:t.jsx(e,{currentIndex:0,steps:[{title:"Open Amazon",subtext:"From the store page",indicator:"image",image:l.brands.amazon},{title:"Open Flipkart",subtext:"From the store page",indicator:"image",image:l.brands.flipkart}]})})]})},a={render:()=>t.jsxs(n,{style:{width:340,gap:c[24]},children:[t.jsx(r,{title:"currentIndex 0 (first step current)",children:t.jsx(e,{steps:o,currentIndex:0})}),t.jsx(r,{title:"currentIndex 3 (last step current)",children:t.jsx(e,{steps:o,currentIndex:3})}),t.jsx(r,{title:"currentIndex 4 (all done)",children:t.jsx(e,{steps:o,currentIndex:4})}),t.jsx(r,{title:"currentIndex -1 (all locked)",children:t.jsx(e,{steps:o,currentIndex:-1})}),t.jsx(r,{title:"one step",children:t.jsx(e,{steps:[o[0]],currentIndex:0})}),t.jsx(r,{title:"long title and subtext",children:t.jsx(e,{currentIndex:1,steps:[{title:"Order placed on the partner store through the CashKaro app link",subtext:"Keep the order confirmation email until the cashback is paid to your bank account"},{title:"Cashback tracked",subtext:"₹10,00,000 order value is the cap"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
