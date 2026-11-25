import{j as e,V as a,c as p,I as m}from"./iframe-BxRbKpJi.js";import{F as t}from"./Footer-DDs15kCI.js";import{S as l}from"./cards-Bc9fBrua.js";import{s as d}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const h=()=>{},u=l[0].cardImage,g=()=>e.jsx(m,{source:u,accessibilityIgnoresInvertColors:!0,style:{width:240,height:152,resizeMode:"contain",alignSelf:"center"}}),o=({theme:r,children:c})=>e.jsx(a,{style:{width:360,backgroundColor:r==="light"?p.surface.dark:p.background.default,paddingBottom:d[24]},children:c}),de={title:"Components/Footers/Footer",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/Footer.tsx",docs:{description:{component:"The big closing block at the end of a page: a headline, a supporting line, an optional saffron CTA and a slot for card art."}}},decorators:[(r,c)=>e.jsx(o,{theme:c.args.theme??"dark",children:e.jsx(r,{})})],argTypes:{theme:{control:"inline-radio",options:["dark","light"],description:"Text colour: dark text over a light surface, light text over a dark surface or image."},headline:{control:"text"},subtext:{control:"text"},ctaLabel:{control:"text",description:"When set, a saffron solid button shows."},onCtaPress:{control:!1},children:{control:!1},style:{control:!1}},args:{theme:"dark",headline:"Find your card",subtext:"Rewards that pay you back, on every spend.",ctaLabel:"Apply Now",onCtaPress:h,children:e.jsx(g,{})}},s={},i={parameters:{docs:{description:{story:"Dark theme (dark text, light surface) and light theme (white text, dark surface), each with a CTA and card art."}}},decorators:[r=>e.jsx(a,{children:e.jsx(r,{})})],render:r=>e.jsxs(a,{style:{gap:d[16]},children:[e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,theme:"dark"})}),e.jsx(o,{theme:"light",children:e.jsx(t,{...r,theme:"light"})})]})},n={parameters:{docs:{description:{story:"Without a CTA, without art, headline only wrapped on several lines, and long copy. Both text lines render at 0.32 opacity in the source (see its comment): check contrast on your surface."}}},decorators:[r=>e.jsx(a,{children:e.jsx(r,{})})],render:r=>e.jsxs(a,{style:{gap:d[16]},children:[e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,ctaLabel:void 0,children:null})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,children:null})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,headline:"Earn up to ₹10,00,000 in rewards every year on all your spends",subtext:"Pay no joining fee in the first year. Lifetime free on spends of ₹2,00,000 or more."})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,headline:"₹0 fees",subtext:"No hidden charges.",ctaLabel:"Apply Now"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
