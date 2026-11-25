import{j as t,V as c}from"./iframe-EJmZd_T6.js";import{S as o}from"./StripAlert-BLrZOWat.js";import{T as p}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./index-AjmY8xRX.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./tagVariants-C3ziFvwj.js";const l=["brand","gray","success","warning","error","info","sky","rose","purple"],rt={title:"Components/Messages and tooltips/StripAlert",component:o,tags:["autodocs","live"],parameters:{source:"src/molecules/StripAlert.tsx",docs:{description:{component:"A thin full-width strip attached to the top or bottom of a block, with one caption and an optional link CTA."}}},argTypes:{tone:{control:"select",options:l},layout:{control:"select",options:["center","left-cta"]},icon:{control:"boolean"},leadingIcon:{control:"select",options:["message-outline","clock-outline","check-circle-outline","desc-exclamation"]},text:{control:"text"},ctaLabel:{control:"text"},onCtaPress:{control:!1}},args:{tone:"info",layout:"left-cta",icon:!0,text:"Extra X% cashback on Amazon today",ctaLabel:"Shop now"},decorators:[e=>t.jsx(c,{style:{width:390},children:t.jsx(e,{})})]},i=({children:e})=>t.jsx(p,{variant:"body12Medium",style:{marginBottom:s[4],marginTop:s[12]},children:e}),r={},a={render:()=>t.jsxs(c,{style:{width:390},children:[t.jsx(i,{children:"layout: center"}),t.jsx(o,{layout:"center",text:"Cashback tracked for your Flipkart order"}),t.jsx(i,{children:"layout: left-cta"}),t.jsx(o,{layout:"left-cta",text:"Cashback tracked for your Flipkart order",ctaLabel:"Details"}),t.jsx(i,{children:"layout: left-cta with icon"}),t.jsx(o,{layout:"left-cta",icon:!0,text:"Cashback tracked for your Flipkart order",ctaLabel:"Details"})]})},n={parameters:{docs:{description:{story:'The caption has numberOfLines=1, so long text is cut off with an ellipsis. In "center" layout the CTA is ignored. Open question for the owner: should long text wrap on a second line, or stay cut off?'}}},render:()=>t.jsxs(c,{style:{width:390,gap:s[4]},children:[l.map(e=>t.jsx(o,{tone:e,layout:"left-cta",icon:!0,text:`Tone ${e}: X% on Myntra`,ctaLabel:"Shop now"},e)),t.jsx(o,{tone:"warning",layout:"left-cta",icon:!0,leadingIcon:"clock-outline",text:"Your HDFC Millennia application for ₹1,00,000 limit is awaiting documents and review",ctaLabel:"Resume"}),t.jsx(o,{tone:"success",layout:"center",text:"₹1,250 cashback added"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 390
  }}>
      <Label>layout: center</Label>
      <StripAlert layout="center" text="Cashback tracked for your Flipkart order" />
      <Label>layout: left-cta</Label>
      <StripAlert layout="left-cta" text="Cashback tracked for your Flipkart order" ctaLabel="Details" />
      <Label>layout: left-cta with icon</Label>
      <StripAlert layout="left-cta" icon text="Cashback tracked for your Flipkart order" ctaLabel="Details" />
    </View>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The caption has numberOfLines=1, so long text is cut off with an ellipsis. In "center" layout the CTA is ignored. Open question for the owner: should long text wrap on a second line, or stay cut off?'
      }
    }
  },
  render: () => <View style={{
    width: 390,
    gap: spacing[4]
  }}>
      {TONES.map(t => <StripAlert key={t} tone={t} layout="left-cta" icon text={\`Tone \${t}: X% on Myntra\`} ctaLabel="Shop now" />)}
      <StripAlert tone="warning" layout="left-cta" icon leadingIcon="clock-outline" text="Your HDFC Millennia application for ₹1,00,000 limit is awaiting documents and review" ctaLabel="Resume" />
      <StripAlert tone="success" layout="center" text="₹1,250 cashback added" />
    </View>
}`,...n.parameters?.docs?.source}}};const at=["Playground","Variants","States"];export{r as Playground,n as States,a as Variants,at as __namedExportsOrder,rt as default};
