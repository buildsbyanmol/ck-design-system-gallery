import{j as e,V as d}from"./iframe-EJmZd_T6.js";import{C as a}from"./CompareCard-CxZ6DwhZ.js";import{L as t,F as m,s as c}from"./_shared-DUO1fe1c.js";import{S as p}from"./cards-Bc9fBrua.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./GainBand-By1tcNfV.js";import"./elevation-DG0ULmpQ.js";const b=[{label:"Annual fee",value:"₹999",delta:"₹1,501 less",direction:"down",sentiment:"good"},{label:"Yearly rewards",value:"₹7,200",delta:"₹600 more",direction:"up",sentiment:"good"}],i=p[2],n={cardImage:i.cardImage,name:c(i),sourceName:"HDFC Regalia Gold",bandTone:"success",bandIcon:"feat-savings-outline",bandText:"less a year",bandAmount:"₹1,180",stats:b,eligible:!1,viewed:!1,onPress:()=>{}},me={title:"Components/Cards/CompareCard",component:a,tags:["autodocs","live"],decorators:[l=>e.jsx(m,{children:e.jsx(d,{style:{alignSelf:"flex-start"},children:e.jsx(l,{})})})],parameters:{source:"src/molecules/CompareCard.tsx",docs:{description:{component:'A card in a "compare with another card" rail: GainBand, art and name, two stat rows with a delta, and View card. 236 wide, so a 360 phone shows one card and a peek of the next.'}}},argTypes:{bandTone:{control:"select",options:["success","brand","info","purple","gray"]},bandIcon:{control:"select",options:["feat-savings-outline","feat-rewards-outline","feat-discount-outline","check-circle-outline"]},bandText:{control:"text"},bandAmount:{control:"text"},name:{control:"text"},sourceName:{control:"text"},eligible:{control:"boolean"},viewed:{control:"boolean"},stats:{control:"object"},cardImage:{control:!1},onPress:{control:!1},style:{control:!1}},args:n},r={},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"default"}),e.jsx(a,{...n}),e.jsx(t,{children:'eligible: adds "You can get this card"'}),e.jsx(a,{...n,eligible:!0}),e.jsx(t,{children:"viewed: gray band, full opacity"}),e.jsx(a,{...n,viewed:!0}),e.jsx(t,{children:"no band amount"}),e.jsx(a,{...n,bandTone:"info",bandIcon:"feat-rewards-outline",bandAmount:void 0,bandText:"Better rewards on dining"})]})},s={parameters:{docs:{description:{story:'A delta of "Same" shows no arrow. Values are never cut, so a long value wraps. The long caption in the band ends with an ellipsis on web (the native shrink does not run).'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:'delta "Same"'}),e.jsx(a,{...n,bandTone:"gray",bandAmount:"₹0",bandText:"no change a year",stats:[{label:"Annual fee",value:"₹999",delta:"Same",direction:"same",sentiment:"neutral"},{label:"Yearly rewards",value:"₹0",delta:"Same",direction:"same",sentiment:"neutral"}]}),e.jsx(t,{children:"worse on both lines (bad sentiment), ₹10,00,000"}),e.jsx(a,{...n,bandTone:"purple",stats:[{label:"Annual fee",value:`₹${1e6.toLocaleString("en-IN")}`,delta:"₹9,99,001 more",direction:"up",sentiment:"bad"},{label:"Yearly rewards",value:"₹1,200",delta:"₹6,000 less",direction:"down",sentiment:"bad"}]}),e.jsx(t,{children:"long name and long band caption"}),e.jsx(a,{...n,name:"Axis Bank Magnus for Burgundy Private The One Metal Edition",bandText:"less a year on fees, fuel, dining, travel and shopping together",eligible:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>default</Label>
      <CompareCard {...base} />
      <Label>eligible: adds "You can get this card"</Label>
      <CompareCard {...base} eligible />
      <Label>viewed: gray band, full opacity</Label>
      <CompareCard {...base} viewed />
      <Label>no band amount</Label>
      <CompareCard {...base} bandTone="info" bandIcon="feat-rewards-outline" bandAmount={undefined} bandText="Better rewards on dining" />
    </>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A delta of "Same" shows no arrow. Values are never cut, so a long value wraps. The long caption in the band ends with an ellipsis on web (the native shrink does not run).'
      }
    }
  },
  render: () => <>
      <Label>delta "Same"</Label>
      <CompareCard {...base} bandTone="gray" bandAmount="₹0" bandText="no change a year" stats={[{
      label: 'Annual fee',
      value: '₹999',
      delta: 'Same',
      direction: 'same',
      sentiment: 'neutral'
    }, {
      label: 'Yearly rewards',
      value: '₹0',
      delta: 'Same',
      direction: 'same',
      sentiment: 'neutral'
    }]} />
      <Label>worse on both lines (bad sentiment), ₹10,00,000</Label>
      <CompareCard {...base} bandTone="purple" stats={[{
      label: 'Annual fee',
      value: \`₹\${1000000 .toLocaleString('en-IN')}\`,
      delta: '₹9,99,001 more',
      direction: 'up',
      sentiment: 'bad'
    }, {
      label: 'Yearly rewards',
      value: '₹1,200',
      delta: '₹6,000 less',
      direction: 'down',
      sentiment: 'bad'
    }]} />
      <Label>long name and long band caption</Label>
      <CompareCard {...base} name="Axis Bank Magnus for Burgundy Private The One Metal Edition" bandText="less a year on fees, fuel, dining, travel and shopping together" eligible />
    </>
}`,...s.parameters?.docs?.source}}};const ce=["Playground","Variants","States"];export{r as Playground,s as States,o as Variants,ce as __namedExportsOrder,me as default};
