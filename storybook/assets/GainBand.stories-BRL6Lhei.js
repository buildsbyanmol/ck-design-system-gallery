import{j as e,a as l}from"./iframe-EJmZd_T6.js";import{G as n}from"./GainBand-By1tcNfV.js";import{L as t,F as m}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./cards-Bc9fBrua.js";const s=["success","brand","info","purple","gray"],c=["feat-savings-outline","feat-rewards-outline","feat-discount-outline","check-circle-outline","clock-outline"],ie={title:"Components/Cards/GainBand",component:n,tags:["autodocs","live"],decorators:[o=>e.jsx(m,{children:e.jsx(o,{})})],parameters:{source:"src/molecules/GainBand.tsx",docs:{description:{component:'A flat colour band across the top of a card: icon, an optional big amount, and a caption, or the gray "Viewed" state.'}}},argTypes:{tone:{control:"select",options:[...s]},icon:{control:"select",options:[...c]},text:{control:"text"},amount:{control:"text"},viewed:{control:"boolean"}},args:{tone:"success",icon:"feat-savings-outline",text:"less a year",amount:"₹1,180",viewed:!1}},a={},r={render:()=>e.jsxs(e.Fragment,{children:[s.map((o,d)=>e.jsxs(l.Fragment,{children:[e.jsx(t,{children:`tone="${o}"`}),e.jsx(n,{tone:o,icon:c[d],amount:"₹1,180",text:"less a year"})]},o)),e.jsx(t,{children:"no amount: caption in body14SemiBold"}),e.jsx(n,{tone:"info",icon:"feat-rewards-outline",text:"Same fees, better rewards"})]})},i={parameters:{docs:{description:{story:'Viewed turns the band gray and adds a check and "Viewed" at the right end. On native a long caption shrinks to 85% before it is cut. On web `adjustsFontSizeToFit` does nothing, so a long caption only ends with an ellipsis.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"viewed"}),e.jsx(n,{tone:"success",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year",viewed:!0}),e.jsx(t,{children:"amount ₹0"}),e.jsx(n,{tone:"gray",icon:"clock-outline",amount:"₹0",text:"no change a year"}),e.jsx(t,{children:"amount ₹10,00,000"}),e.jsx(n,{tone:"purple",icon:"feat-rewards-outline",amount:`₹${1e6.toLocaleString("en-IN")}`,text:"more in rewards every year"}),e.jsx(t,{children:"long caption, never cuts the amount"}),e.jsx(n,{tone:"success",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year on fees and fuel and dining and travel and shopping"}),e.jsx(t,{children:"long caption, viewed (no shrink, ellipsis)"}),e.jsx(n,{tone:"info",icon:"feat-savings-outline",amount:"₹1,180",text:"less a year on fees and fuel and dining and travel",viewed:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
