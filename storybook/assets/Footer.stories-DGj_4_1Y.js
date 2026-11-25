import{j as e,V as a,c as p,I as m}from"./iframe-DK2xttIN.js";import{F as t}from"./Footer-CeTwgTME.js";import{S as l}from"./cards-Bc9fBrua.js";import{s as d}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const h=()=>{},u=l[0].cardImage,g=()=>e.jsx(m,{source:u,accessibilityIgnoresInvertColors:!0,style:{width:240,height:152,resizeMode:"contain",alignSelf:"center"}}),o=({theme:r,children:c})=>e.jsx(a,{style:{width:360,backgroundColor:r==="light"?p.surface.dark:p.background.default,paddingBottom:d[24]},children:c}),de={title:"Components/Footers/Footer",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/Footer.tsx",docs:{description:{component:"The big closing block at the end of a page: a headline, a supporting line, an optional saffron CTA and a slot for card art."}}},decorators:[(r,c)=>e.jsx(o,{theme:c.args.theme??"dark",children:e.jsx(r,{})})],argTypes:{theme:{control:"inline-radio",options:["dark","light"],description:"Text colour: dark text over a light surface, light text over a dark surface or image."},headline:{control:"text"},subtext:{control:"text"},ctaLabel:{control:"text",description:"When set, a saffron solid button shows."},onCtaPress:{control:!1},children:{control:!1},style:{control:!1}},args:{theme:"dark",headline:"Find your card",subtext:"Rewards that pay you back, on every spend.",ctaLabel:"Apply Now",onCtaPress:h,children:e.jsx(g,{})}},s={},i={parameters:{docs:{description:{story:"Dark theme (dark text, light surface) and light theme (white text, dark surface), each with a CTA and card art."}}},decorators:[r=>e.jsx(a,{children:e.jsx(r,{})})],render:r=>e.jsxs(a,{style:{gap:d[16]},children:[e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,theme:"dark"})}),e.jsx(o,{theme:"light",children:e.jsx(t,{...r,theme:"light"})})]})},n={parameters:{docs:{description:{story:"Without a CTA, without art, headline only wrapped on several lines, and long copy. Both text lines render at 0.32 opacity in the source (see its comment): check contrast on your surface."}}},decorators:[r=>e.jsx(a,{children:e.jsx(r,{})})],render:r=>e.jsxs(a,{style:{gap:d[16]},children:[e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,ctaLabel:void 0,children:null})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,children:null})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,headline:"Earn up to ₹10,00,000 in rewards every year on all your spends",subtext:"Pay no joining fee in the first year. Lifetime free on spends of ₹2,00,000 or more."})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,headline:"₹0 fees",subtext:"No hidden charges.",ctaLabel:"Apply Now"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Dark theme (dark text, light surface) and light theme (white text, dark surface), each with a CTA and card art.'
      }
    }
  },
  decorators: [Story => <View><Story /></View>],
  render: args => <View style={{
    gap: spacing[16]
  }}>
      <Surface theme="dark"><Footer {...args} theme="dark" /></Surface>
      <Surface theme="light"><Footer {...args} theme="light" /></Surface>
    </View>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Without a CTA, without art, headline only wrapped on several lines, and long copy. Both text lines render at 0.32 opacity in the source (see its comment): check contrast on your surface.'
      }
    }
  },
  decorators: [Story => <View><Story /></View>],
  render: args => <View style={{
    gap: spacing[16]
  }}>
      <Surface theme="dark"><Footer {...args} ctaLabel={undefined}>{null}</Footer></Surface>
      <Surface theme="dark"><Footer {...args} children={null} /></Surface>
      <Surface theme="dark"><Footer {...args} headline="Earn up to ₹10,00,000 in rewards every year on all your spends" subtext="Pay no joining fee in the first year. Lifetime free on spends of ₹2,00,000 or more." /></Surface>
      <Surface theme="dark"><Footer {...args} headline="₹0 fees" subtext="No hidden charges." ctaLabel="Apply Now" /></Surface>
    </View>
}`,...n.parameters?.docs?.source}}};const pe=["Playground","Variants","States"];export{s as Playground,n as States,i as Variants,pe as __namedExportsOrder,de as default};
