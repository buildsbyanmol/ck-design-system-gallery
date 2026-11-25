import{j as t,V as c,c as m}from"./iframe-DK2xttIN.js";import{P as o}from"./ProcessSteps-DKdg8R2t.js";import{T as d}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s as l}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const r=[{title:"Click on a store from CashKaro",caption:"Pick the store and tap Shop Now"},{title:"Shop as usual on the store",caption:"Do not use another coupon site in between"},{title:"Cashback shows as Pending",caption:"Generally takes 2 to 72 hrs"},{title:"Withdraw your cashback",caption:"Minimum ₹250 to your bank or UPI"}],it={title:"Components/Steppers/ProcessSteps",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/ProcessSteps.tsx",docs:{description:{component:'Vertical "what happens next" explainer: numbered saffron tiles joined by a dotted line, title and caption per step.'}}},decorators:[e=>t.jsx(c,{style:{width:340},children:t.jsx(e,{})})],argTypes:{steps:{control:"object"},style:{control:!1}},args:{steps:r}},a={},i=({title:e,children:s})=>t.jsxs(c,{style:{gap:l[8]},children:[t.jsx(d,{variant:"body12Medium",color:m.text.secondary,children:e}),s]}),p={parameters:{docs:{description:{story:"There is one layout. The caption is optional per step. The icon field of ProcessStep is declared but the tile shows the step number today."}}},render:()=>t.jsxs(c,{style:{width:340,gap:l[24]},children:[t.jsx(i,{title:"title and caption",children:t.jsx(o,{steps:r.slice(0,3)})}),t.jsx(i,{title:"title only",children:t.jsx(o,{steps:r.slice(0,3).map(({title:e})=>({title:e}))})})]})},n={render:()=>t.jsxs(c,{style:{width:340,gap:l[24]},children:[t.jsx(i,{title:"one step (no connector)",children:t.jsx(o,{steps:r.slice(0,1)})}),t.jsx(i,{title:"eight steps",children:t.jsx(o,{steps:Array.from({length:8},(e,s)=>({title:`Step ${s+1}: ${r[s%4].title}`,caption:r[s%4].caption}))})}),t.jsx(i,{title:"long copy",children:t.jsx(o,{steps:[{title:"Place an order of ₹10,00,000 or more on the partner store using the CashKaro link only",caption:"Orders placed through an app that was already open, or after clearing the cart, may not track at all"},{title:"Wait",caption:"₹0 until tracked"}]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
