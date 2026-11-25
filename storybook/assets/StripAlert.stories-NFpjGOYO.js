import{j as t,V as c}from"./iframe-DK2xttIN.js";import{S as o}from"./StripAlert-CKclIk9-.js";import{T as p}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-VjBCu6Ra.js";import"./index-mJl4hEuB.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./tagVariants-BxEvvwJ1.js";const l=["brand","gray","success","warning","error","info","sky","rose","purple"],rt={title:"Components/Messages and tooltips/StripAlert",component:o,tags:["autodocs","live"],parameters:{source:"src/molecules/StripAlert.tsx",docs:{description:{component:"A thin full-width strip attached to the top or bottom of a block, with one caption and an optional link CTA."}}},argTypes:{tone:{control:"select",options:l},layout:{control:"select",options:["center","left-cta"]},icon:{control:"boolean"},leadingIcon:{control:"select",options:["message-outline","clock-outline","check-circle-outline","desc-exclamation"]},text:{control:"text"},ctaLabel:{control:"text"},onCtaPress:{control:!1}},args:{tone:"info",layout:"left-cta",icon:!0,text:"Extra X% cashback on Amazon today",ctaLabel:"Shop now"},decorators:[e=>t.jsx(c,{style:{width:390},children:t.jsx(e,{})})]},i=({children:e})=>t.jsx(p,{variant:"body12Medium",style:{marginBottom:s[4],marginTop:s[12]},children:e}),r={},a={render:()=>t.jsxs(c,{style:{width:390},children:[t.jsx(i,{children:"layout: center"}),t.jsx(o,{layout:"center",text:"Cashback tracked for your Flipkart order"}),t.jsx(i,{children:"layout: left-cta"}),t.jsx(o,{layout:"left-cta",text:"Cashback tracked for your Flipkart order",ctaLabel:"Details"}),t.jsx(i,{children:"layout: left-cta with icon"}),t.jsx(o,{layout:"left-cta",icon:!0,text:"Cashback tracked for your Flipkart order",ctaLabel:"Details"})]})},n={parameters:{docs:{description:{story:'The caption has numberOfLines=1, so long text is cut off with an ellipsis. In "center" layout the CTA is ignored. Open question for the owner: should long text wrap on a second line, or stay cut off?'}}},render:()=>t.jsxs(c,{style:{width:390,gap:s[4]},children:[l.map(e=>t.jsx(o,{tone:e,layout:"left-cta",icon:!0,text:`Tone ${e}: X% on Myntra`,ctaLabel:"Shop now"},e)),t.jsx(o,{tone:"warning",layout:"left-cta",icon:!0,leadingIcon:"clock-outline",text:"Your HDFC Millennia application for ₹1,00,000 limit is awaiting documents and review",ctaLabel:"Resume"}),t.jsx(o,{tone:"success",layout:"center",text:"₹1,250 cashback added"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
