import{j as e}from"./iframe-BxRbKpJi.js";import{C as t}from"./CardFeeStrip-DyfK0gUv.js";import{L as r,i as n,F as p}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mTzrbk.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./cards-Bc9fBrua.js";const oe={title:"Components/Cards/CardFeeStrip",component:t,tags:["autodocs","live"],decorators:[a=>e.jsx(p,{children:e.jsx(a,{})})],parameters:{source:"src/molecules/CardFeeStrip.tsx",docs:{description:{component:"The bottom strip of the Home tile: fees and a CTA. Three types: lifetime-free, discontinued, with-fees."}}},argTypes:{type:{control:"select",options:["lifetime-free","discontinued","with-fees"]},joiningFee:{control:"text"},annualFee:{control:"text"},ctaLabel:{control:"text"},joiningSub:{control:!1},annualSub:{control:!1},onPress:{control:!1},style:{control:!1}},args:{type:"with-fees",joiningFee:"₹2,950",annualFee:"₹2,950",onPress:()=>{}}},o={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:'type="with-fees"'}),e.jsx(t,{type:"with-fees",joiningFee:"₹2,950",annualFee:"₹2,950",onPress:()=>{}}),e.jsx(r,{children:'type="lifetime-free"'}),e.jsx(t,{type:"lifetime-free",onPress:()=>{}}),e.jsx(r,{children:'type="discontinued"'}),e.jsx(t,{type:"discontinued",onPress:()=>{}}),e.jsx(r,{children:"custom ctaLabel"}),e.jsx(t,{type:"with-fees",joiningFee:"₹999",annualFee:"₹999",ctaLabel:"Check eligibility",onPress:()=>{}})]})},i={parameters:{docs:{description:{story:'With-fees defaults a missing fee to "Free". When the fees and the button do not fit one line (large text), the button wraps under the fees and stays right aligned.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"fees ₹0"}),e.jsx(t,{type:"with-fees",joiningFee:"₹0",annualFee:"₹0",onPress:()=>{}}),e.jsx(r,{children:"fees not given (defaults to Free)"}),e.jsx(t,{type:"with-fees",onPress:()=>{}}),e.jsx(r,{children:"fees ₹10,00,000 (long amounts, the button may wrap)"}),e.jsx(t,{type:"with-fees",joiningFee:n(1e6),annualFee:n(1e6),onPress:()=>{}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>type="with-fees"</Label>
      <CardFeeStrip type="with-fees" joiningFee="₹2,950" annualFee="₹2,950" onPress={() => {}} />
      <Label>type="lifetime-free"</Label>
      <CardFeeStrip type="lifetime-free" onPress={() => {}} />
      <Label>type="discontinued"</Label>
      <CardFeeStrip type="discontinued" onPress={() => {}} />
      <Label>custom ctaLabel</Label>
      <CardFeeStrip type="with-fees" joiningFee="₹999" annualFee="₹999" ctaLabel="Check eligibility" onPress={() => {}} />
    </>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With-fees defaults a missing fee to "Free". When the fees and the button do not fit one line (large text), the button wraps under the fees and stays right aligned.'
      }
    }
  },
  render: () => <>
      <Label>fees ₹0</Label>
      <CardFeeStrip type="with-fees" joiningFee="₹0" annualFee="₹0" onPress={() => {}} />
      <Label>fees not given (defaults to Free)</Label>
      <CardFeeStrip type="with-fees" onPress={() => {}} />
      <Label>fees ₹10,00,000 (long amounts, the button may wrap)</Label>
      <CardFeeStrip type="with-fees" joiningFee={inr(1000000)} annualFee={inr(1000000)} onPress={() => {}} />
    </>
}`,...i.parameters?.docs?.source}}};const se=["Playground","Variants","States"];export{o as Playground,i as States,s as Variants,se as __namedExportsOrder,oe as default};
