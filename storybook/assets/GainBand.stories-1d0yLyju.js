import{j as e,a as l}from"./iframe-BxRbKpJi.js";import{G as n}from"./GainBand-Dzg8_3xz.js";import{L as t,F as m}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./cards-Bc9fBrua.js";const s=["success","brand","info","purple","gray"],c=["feat-savings-outline","feat-rewards-outline","feat-discount-outline","check-circle-outline","clock-outline"],ie={title:"Components/Cards/GainBand",component:n,tags:["autodocs","live"],decorators:[o=>e.jsx(m,{children:e.jsx(o,{})})],parameters:{source:"src/molecules/GainBand.tsx",docs:{description:{component:'A flat colour band across the top of a card: icon, an optional big amount, and a caption, or the gray "Viewed" state.'}}},argTypes:{tone:{control:"select",options:[...s]},icon:{control:"select",options:[...c]},text:{control:"text"},amount:{control:"text"},viewed:{control:"boolean"}},args:{tone:"success",icon:"feat-savings-outline",text:"less a year",amount:"₹1,180",viewed:!1}},a={},r={render:()=>e.jsxs(e.Fragment,{children:[s.map((o,d)=>e.jsxs(l.Fragment,{children:[e.jsx(t,{children:`tone="${o}"`}),e.jsx(n,{tone:o,icon:c[d],amount:"₹1,180",text:"less a year"})]},o)),e.jsx(t,{children:"no amount: caption in body14SemiBold"}),e.jsx(n,{tone:"info",icon:"feat-rewards-outline",text:"Same fees, better rewards"})]})},i={parameters:{docs:{description:{story:'Viewed turns the band gray and adds a check and "Viewed" at the right end. On native a long caption shrinks to 85% before it is cut. On web `adjustsFontSizeToFit` does nothing, so a long caption only ends with an ellipsis.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"viewed"}),e.jsx(n,{tone:"success",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year",viewed:!0}),e.jsx(t,{children:"amount ₹0"}),e.jsx(n,{tone:"gray",icon:"clock-outline",amount:"₹0",text:"no change a year"}),e.jsx(t,{children:"amount ₹10,00,000"}),e.jsx(n,{tone:"purple",icon:"feat-rewards-outline",amount:`₹${1e6.toLocaleString("en-IN")}`,text:"more in rewards every year"}),e.jsx(t,{children:"long caption, never cuts the amount"}),e.jsx(n,{tone:"success",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year on fees and fuel and dining and travel and shopping"}),e.jsx(t,{children:"long caption, viewed (no shrink, ellipsis)"}),e.jsx(n,{tone:"info",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year on fees and fuel and dining and travel",viewed:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {TONES.map((t, i) => <React.Fragment key={t}>
          <Label>{\`tone="\${t}"\`}</Label>
          <GainBand tone={t} icon={ICONS[i]} amount="₹1,180" text="less a year" />
        </React.Fragment>)}
      <Label>no amount: caption in body14SemiBold</Label>
      <GainBand tone="info" icon="feat-rewards-outline" text="Same fees, better rewards" />
    </>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Viewed turns the band gray and adds a check and "Viewed" at the right end. On native a long caption shrinks to 85% before it is cut. On web \`adjustsFontSizeToFit\` does nothing, so a long caption only ends with an ellipsis.'
      }
    }
  },
  render: () => <>
      <Label>viewed</Label>
      <GainBand tone="success" icon="feat-savings-outline" amount="₹1,180" text="less a year" viewed />
      <Label>amount ₹0</Label>
      <GainBand tone="gray" icon="clock-outline" amount="₹0" text="no change a year" />
      <Label>amount ₹10,00,000</Label>
      <GainBand tone="purple" icon="feat-rewards-outline" amount={\`₹\${1000000 .toLocaleString('en-IN')}\`} text="more in rewards every year" />
      <Label>long caption, never cuts the amount</Label>
      <GainBand tone="success" icon="feat-savings-outline" amount="₹1,180" text="less a year on fees and fuel and dining and travel and shopping" />
      <Label>long caption, viewed (no shrink, ellipsis)</Label>
      <GainBand tone="info" icon="feat-savings-outline" amount="₹1,180" text="less a year on fees and fuel and dining and travel" viewed />
    </>
}`,...i.parameters?.docs?.source}}};const se=["Playground","Variants","States"];export{a as Playground,i as States,r as Variants,se as __namedExportsOrder,ie as default};
