import{j as e,a as l}from"./iframe-DK2xttIN.js";import{G as n}from"./GainBand-BMDMIDTL.js";import{L as t,F as m}from"./_shared-DTtNh5Zn.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./cards-Bc9fBrua.js";const s=["success","brand","info","purple","gray"],c=["feat-savings-outline","feat-rewards-outline","feat-discount-outline","check-circle-outline","clock-outline"],ie={title:"Components/Cards/GainBand",component:n,tags:["autodocs","live"],decorators:[o=>e.jsx(m,{children:e.jsx(o,{})})],parameters:{source:"src/molecules/GainBand.tsx",docs:{description:{component:'A flat colour band across the top of a card: icon, an optional big amount, and a caption, or the gray "Viewed" state.'}}},argTypes:{tone:{control:"select",options:[...s]},icon:{control:"select",options:[...c]},text:{control:"text"},amount:{control:"text"},viewed:{control:"boolean"}},args:{tone:"success",icon:"feat-savings-outline",text:"less a year",amount:"₹1,180",viewed:!1}},a={},r={render:()=>e.jsxs(e.Fragment,{children:[s.map((o,d)=>e.jsxs(l.Fragment,{children:[e.jsx(t,{children:`tone="${o}"`}),e.jsx(n,{tone:o,icon:c[d],amount:"₹1,180",text:"less a year"})]},o)),e.jsx(t,{children:"no amount: caption in body14SemiBold"}),e.jsx(n,{tone:"info",icon:"feat-rewards-outline",text:"Same fees, better rewards"})]})},i={parameters:{docs:{description:{story:'Viewed turns the band gray and adds a check and "Viewed" at the right end. On native a long caption shrinks to 85% before it is cut. On web `adjustsFontSizeToFit` does nothing, so a long caption only ends with an ellipsis.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"viewed"}),e.jsx(n,{tone:"success",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year",viewed:!0}),e.jsx(t,{children:"amount ₹0"}),e.jsx(n,{tone:"gray",icon:"clock-outline",amount:"₹0",text:"no change a year"}),e.jsx(t,{children:"amount ₹10,00,000"}),e.jsx(n,{tone:"purple",icon:"feat-rewards-outline",amount:`₹${1e6.toLocaleString("en-IN")}`,text:"more in rewards every year"}),e.jsx(t,{children:"long caption, never cuts the amount"}),e.jsx(n,{tone:"success",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year on fees and fuel and dining and travel and shopping"}),e.jsx(t,{children:"long caption, viewed (no shrink, ellipsis)"}),e.jsx(n,{tone:"info",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year on fees and fuel and dining and travel",viewed:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
