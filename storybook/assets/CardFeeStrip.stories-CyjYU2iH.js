import{j as e}from"./iframe-EJmZd_T6.js";import{C as t}from"./CardFeeStrip-CtjeB6LS.js";import{L as r,i as n,F as p}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mm0dto.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./cards-Bc9fBrua.js";const oe={title:"Components/Cards/CardFeeStrip",component:t,tags:["autodocs","live"],decorators:[a=>e.jsx(p,{children:e.jsx(a,{})})],parameters:{source:"src/molecules/CardFeeStrip.tsx",docs:{description:{component:"The bottom strip of the Home tile: fees and a CTA. Three types: lifetime-free, discontinued, with-fees."}}},argTypes:{type:{control:"select",options:["lifetime-free","discontinued","with-fees"]},joiningFee:{control:"text"},annualFee:{control:"text"},ctaLabel:{control:"text"},joiningSub:{control:!1},annualSub:{control:!1},onPress:{control:!1},style:{control:!1}},args:{type:"with-fees",joiningFee:"₹2,950",annualFee:"₹2,950",onPress:()=>{}}},o={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:'type="with-fees"'}),e.jsx(t,{type:"with-fees",joiningFee:"₹2,950",annualFee:"₹2,950",onPress:()=>{}}),e.jsx(r,{children:'type="lifetime-free"'}),e.jsx(t,{type:"lifetime-free",onPress:()=>{}}),e.jsx(r,{children:'type="discontinued"'}),e.jsx(t,{type:"discontinued",onPress:()=>{}}),e.jsx(r,{children:"custom ctaLabel"}),e.jsx(t,{type:"with-fees",joiningFee:"₹999",annualFee:"₹999",ctaLabel:"Check eligibility",onPress:()=>{}})]})},i={parameters:{docs:{description:{story:'With-fees defaults a missing fee to "Free". When the fees and the button do not fit one line (large text), the button wraps under the fees and stays right aligned.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"fees ₹0"}),e.jsx(t,{type:"with-fees",joiningFee:"₹0",annualFee:"₹0",onPress:()=>{}}),e.jsx(r,{children:"fees not given (defaults to Free)"}),e.jsx(t,{type:"with-fees",onPress:()=>{}}),e.jsx(r,{children:"fees ₹10,00,000 (long amounts, the button may wrap)"}),e.jsx(t,{type:"with-fees",joiningFee:n(1e6),annualFee:n(1e6),onPress:()=>{}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
