import{j as e,V as a,c as p,I as m}from"./iframe-EJmZd_T6.js";import{F as t}from"./Footer-_zPdVOOL.js";import{S as l}from"./cards-Bc9fBrua.js";import{s as d}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const h=()=>{},u=l[0].cardImage,g=()=>e.jsx(m,{source:u,accessibilityIgnoresInvertColors:!0,style:{width:240,height:152,resizeMode:"contain",alignSelf:"center"}}),o=({theme:r,children:c})=>e.jsx(a,{style:{width:360,backgroundColor:r==="light"?p.surface.dark:p.background.default,paddingBottom:d[24]},children:c}),de={title:"Components/Footers/Footer",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/Footer.tsx",docs:{description:{component:"The big closing block at the end of a page: a headline, a supporting line, an optional saffron CTA and a slot for card art."}}},decorators:[(r,c)=>e.jsx(o,{theme:c.args.theme??"dark",children:e.jsx(r,{})})],argTypes:{theme:{control:"inline-radio",options:["dark","light"],description:"Text colour: dark text over a light surface, light text over a dark surface or image."},headline:{control:"text"},subtext:{control:"text"},ctaLabel:{control:"text",description:"When set, a saffron solid button shows."},onCtaPress:{control:!1},children:{control:!1},style:{control:!1}},args:{theme:"dark",headline:"Find your card",subtext:"Rewards that pay you back, on every spend.",ctaLabel:"Apply Now",onCtaPress:h,children:e.jsx(g,{})}},s={},i={parameters:{docs:{description:{story:"Dark theme (dark text, light surface) and light theme (white text, dark surface), each with a CTA and card art."}}},decorators:[r=>e.jsx(a,{children:e.jsx(r,{})})],render:r=>e.jsxs(a,{style:{gap:d[16]},children:[e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,theme:"dark"})}),e.jsx(o,{theme:"light",children:e.jsx(t,{...r,theme:"light"})})]})},n={parameters:{docs:{description:{story:"Without a CTA, without art, headline only wrapped on several lines, and long copy. Both text lines render at 0.32 opacity in the source (see its comment): check contrast on your surface."}}},decorators:[r=>e.jsx(a,{children:e.jsx(r,{})})],render:r=>e.jsxs(a,{style:{gap:d[16]},children:[e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,ctaLabel:void 0,children:null})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,children:null})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,headline:"Earn up to ₹10,00,000 in rewards every year on all your spends",subtext:"Pay no joining fee in the first year. Lifetime free on spends of ₹2,00,000 or more."})}),e.jsx(o,{theme:"dark",children:e.jsx(t,{...r,headline:"₹0 fees",subtext:"No hidden charges.",ctaLabel:"Apply Now"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
