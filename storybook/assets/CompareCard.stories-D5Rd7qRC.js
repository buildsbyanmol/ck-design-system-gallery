import{j as e,V as d}from"./iframe-BxRbKpJi.js";import{C as a}from"./CompareCard-B_lKF5nT.js";import{L as t,F as m,s as c}from"./_shared-B6uq1mSV.js";import{S as p}from"./cards-Bc9fBrua.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./GainBand-Dzg8_3xz.js";import"./elevation-DG0ULmpQ.js";const b=[{label:"Annual fee",value:"₹999",delta:"₹1,501 less",direction:"down",sentiment:"good"},{label:"Yearly rewards",value:"₹7,200",delta:"₹600 more",direction:"up",sentiment:"good"}],i=p[2],n={cardImage:i.cardImage,name:c(i),sourceName:"HDFC Regalia Gold",bandTone:"success",bandIcon:"feat-savings-outline",bandText:"less a year",bandAmount:"₹1,180",stats:b,eligible:!1,viewed:!1,onPress:()=>{}},me={title:"Components/Cards/CompareCard",component:a,tags:["autodocs","live"],decorators:[l=>e.jsx(m,{children:e.jsx(d,{style:{alignSelf:"flex-start"},children:e.jsx(l,{})})})],parameters:{source:"src/molecules/CompareCard.tsx",docs:{description:{component:'A card in a "compare with another card" rail: GainBand, art and name, two stat rows with a delta, and View card. 236 wide, so a 360 phone shows one card and a peek of the next.'}}},argTypes:{bandTone:{control:"select",options:["success","brand","info","purple","gray"]},bandIcon:{control:"select",options:["feat-savings-outline","feat-rewards-outline","feat-discount-outline","check-circle-outline"]},bandText:{control:"text"},bandAmount:{control:"text"},name:{control:"text"},sourceName:{control:"text"},eligible:{control:"boolean"},viewed:{control:"boolean"},stats:{control:"object"},cardImage:{control:!1},onPress:{control:!1},style:{control:!1}},args:n},r={},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"default"}),e.jsx(a,{...n}),e.jsx(t,{children:'eligible: adds "You can get this card"'}),e.jsx(a,{...n,eligible:!0}),e.jsx(t,{children:"viewed: gray band, full opacity"}),e.jsx(a,{...n,viewed:!0}),e.jsx(t,{children:"no band amount"}),e.jsx(a,{...n,bandTone:"info",bandIcon:"feat-rewards-outline",bandAmount:void 0,bandText:"Better rewards on dining"})]})},s={parameters:{docs:{description:{story:'A delta of "Same" shows no arrow. Values are never cut, so a long value wraps. The long caption in the band ends with an ellipsis on web (the native shrink does not run).'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:'delta "Same"'}),e.jsx(a,{...n,bandTone:"gray",bandAmount:"₹0",bandText:"no change a year",stats:[{label:"Annual fee",value:"₹999",delta:"Same",direction:"same",sentiment:"neutral"},{label:"Yearly rewards",value:"₹0",delta:"Same",direction:"same",sentiment:"neutral"}]}),e.jsx(t,{children:"worse on both lines (bad sentiment), ₹10,00,000"}),e.jsx(a,{...n,bandTone:"purple",stats:[{label:"Annual fee",value:`₹${1e6.toLocaleString("en-IN")}`,delta:"₹9,99,001 more",direction:"up",sentiment:"bad"},{label:"Yearly rewards",value:"₹1,200",delta:"₹6,000 less",direction:"down",sentiment:"bad"}]}),e.jsx(t,{children:"long name and long band caption"}),e.jsx(a,{...n,name:"Axis Bank Magnus for Burgundy Private The One Metal Edition",bandText:"less a year on fees, fuel, dining, travel and shopping together",eligible:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
