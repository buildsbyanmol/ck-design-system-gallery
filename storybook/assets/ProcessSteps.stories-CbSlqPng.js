import{j as t,V as c,c as m}from"./iframe-EJmZd_T6.js";import{P as o}from"./ProcessSteps-BV7pORo_.js";import{T as d}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as l}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const r=[{title:"Click on a store from CashKaro",caption:"Pick the store and tap Shop Now"},{title:"Shop as usual on the store",caption:"Do not use another coupon site in between"},{title:"Cashback shows as Pending",caption:"Generally takes 2 to 72 hrs"},{title:"Withdraw your cashback",caption:"Minimum ₹250 to your bank or UPI"}],it={title:"Components/Steppers/ProcessSteps",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/ProcessSteps.tsx",docs:{description:{component:'Vertical "what happens next" explainer: numbered saffron tiles joined by a dotted line, title and caption per step.'}}},decorators:[e=>t.jsx(c,{style:{width:340},children:t.jsx(e,{})})],argTypes:{steps:{control:"object"},style:{control:!1}},args:{steps:r}},a={},i=({title:e,children:s})=>t.jsxs(c,{style:{gap:l[8]},children:[t.jsx(d,{variant:"body12Medium",color:m.text.secondary,children:e}),s]}),p={parameters:{docs:{description:{story:"There is one layout. The caption is optional per step. The icon field of ProcessStep is declared but the tile shows the step number today."}}},render:()=>t.jsxs(c,{style:{width:340,gap:l[24]},children:[t.jsx(i,{title:"title and caption",children:t.jsx(o,{steps:r.slice(0,3)})}),t.jsx(i,{title:"title only",children:t.jsx(o,{steps:r.slice(0,3).map(({title:e})=>({title:e}))})})]})},n={render:()=>t.jsxs(c,{style:{width:340,gap:l[24]},children:[t.jsx(i,{title:"one step (no connector)",children:t.jsx(o,{steps:r.slice(0,1)})}),t.jsx(i,{title:"eight steps",children:t.jsx(o,{steps:Array.from({length:8},(e,s)=>({title:`Step ${s+1}: ${r[s%4].title}`,caption:r[s%4].caption}))})}),t.jsx(i,{title:"long copy",children:t.jsx(o,{steps:[{title:"Place an order of ₹10,00,000 or more on the partner store using the CashKaro link only",caption:"Orders placed through an app that was already open, or after clearing the cart, may not track at all"},{title:"Wait",caption:"₹0 until tracked"}]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
