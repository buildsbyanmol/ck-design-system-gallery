import{j as t,V as c}from"./iframe-BxRbKpJi.js";import{S as o}from"./StripAlert-dlh5xzCN.js";import{T as p}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-Bn01aVoN.js";import"./index-DEPmHYsu.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./tagVariants-CS75JYCB.js";const l=["brand","gray","success","warning","error","info","sky","rose","purple"],rt={title:"Components/Messages and tooltips/StripAlert",component:o,tags:["autodocs","live"],parameters:{source:"src/molecules/StripAlert.tsx",docs:{description:{component:"A thin full-width strip attached to the top or bottom of a block, with one caption and an optional link CTA."}}},argTypes:{tone:{control:"select",options:l},layout:{control:"select",options:["center","left-cta"]},icon:{control:"boolean"},leadingIcon:{control:"select",options:["message-outline","clock-outline","check-circle-outline","desc-exclamation"]},text:{control:"text"},ctaLabel:{control:"text"},onCtaPress:{control:!1}},args:{tone:"info",layout:"left-cta",icon:!0,text:"Extra X% cashback on Amazon today",ctaLabel:"Shop now"},decorators:[e=>t.jsx(c,{style:{width:390},children:t.jsx(e,{})})]},i=({children:e})=>t.jsx(p,{variant:"body12Medium",style:{marginBottom:s[4],marginTop:s[12]},children:e}),r={},a={render:()=>t.jsxs(c,{style:{width:390},children:[t.jsx(i,{children:"layout: center"}),t.jsx(o,{layout:"center",text:"Cashback tracked for your Flipkart order"}),t.jsx(i,{children:"layout: left-cta"}),t.jsx(o,{layout:"left-cta",text:"Cashback tracked for your Flipkart order",ctaLabel:"Details"}),t.jsx(i,{children:"layout: left-cta with icon"}),t.jsx(o,{layout:"left-cta",icon:!0,text:"Cashback tracked for your Flipkart order",ctaLabel:"Details"})]})},n={parameters:{docs:{description:{story:'The caption has numberOfLines=1, so long text is cut off with an ellipsis. In "center" layout the CTA is ignored. Open question for the owner: should long text wrap on a second line, or stay cut off?'}}},render:()=>t.jsxs(c,{style:{width:390,gap:s[4]},children:[l.map(e=>t.jsx(o,{tone:e,layout:"left-cta",icon:!0,text:`Tone ${e}: X% on Myntra`,ctaLabel:"Shop now"},e)),t.jsx(o,{tone:"warning",layout:"left-cta",icon:!0,leadingIcon:"clock-outline",text:"Your HDFC Millennia application for ₹1,00,000 limit is awaiting documents and review",ctaLabel:"Resume"}),t.jsx(o,{tone:"success",layout:"center",text:"₹1,250 cashback added"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
