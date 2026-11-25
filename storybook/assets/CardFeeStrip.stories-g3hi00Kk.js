import{j as e}from"./iframe-DK2xttIN.js";import{C as t}from"./CardFeeStrip-2hPpjNsb.js";import{L as r,i as n,F as p}from"./_shared-DTtNh5Zn.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-CErKe_YJ.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./cards-Bc9fBrua.js";const oe={title:"Components/Cards/CardFeeStrip",component:t,tags:["autodocs","live"],decorators:[a=>e.jsx(p,{children:e.jsx(a,{})})],parameters:{source:"src/molecules/CardFeeStrip.tsx",docs:{description:{component:"The bottom strip of the Home tile: fees and a CTA. Three types: lifetime-free, discontinued, with-fees."}}},argTypes:{type:{control:"select",options:["lifetime-free","discontinued","with-fees"]},joiningFee:{control:"text"},annualFee:{control:"text"},ctaLabel:{control:"text"},joiningSub:{control:!1},annualSub:{control:!1},onPress:{control:!1},style:{control:!1}},args:{type:"with-fees",joiningFee:"₹2,950",annualFee:"₹2,950",onPress:()=>{}}},o={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:'type="with-fees"'}),e.jsx(t,{type:"with-fees",joiningFee:"₹2,950",annualFee:"₹2,950",onPress:()=>{}}),e.jsx(r,{children:'type="lifetime-free"'}),e.jsx(t,{type:"lifetime-free",onPress:()=>{}}),e.jsx(r,{children:'type="discontinued"'}),e.jsx(t,{type:"discontinued",onPress:()=>{}}),e.jsx(r,{children:"custom ctaLabel"}),e.jsx(t,{type:"with-fees",joiningFee:"₹999",annualFee:"₹999",ctaLabel:"Check eligibility",onPress:()=>{}})]})},i={parameters:{docs:{description:{story:'With-fees defaults a missing fee to "Free". When the fees and the button do not fit one line (large text), the button wraps under the fees and stays right aligned.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"fees ₹0"}),e.jsx(t,{type:"with-fees",joiningFee:"₹0",annualFee:"₹0",onPress:()=>{}}),e.jsx(r,{children:"fees not given (defaults to Free)"}),e.jsx(t,{type:"with-fees",onPress:()=>{}}),e.jsx(r,{children:"fees ₹10,00,000 (long amounts, the button may wrap)"}),e.jsx(t,{type:"with-fees",joiningFee:n(1e6),annualFee:n(1e6),onPress:()=>{}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
