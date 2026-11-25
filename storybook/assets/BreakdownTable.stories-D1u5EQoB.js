import{j as e,R as b,c as d,V as p}from"./iframe-EJmZd_T6.js";import{B as a}from"./BreakdownTable-MeGvsWWS.js";import{t as m,s as i}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const c=390,w=({children:o})=>e.jsx(p,{style:{width:c,padding:i[16],gap:i[12]},children:o}),r=({children:o})=>e.jsx(b,{style:{...m.caption10Medium,color:d.text.tertiary},children:o}),n=[{label:"Amazon spends",a:4200,b:5900},{label:"Dining and delivery",a:1800,b:3600},{label:"Milestones",a:0,b:2500},{label:"Annual fee",a:-2950,b:-999}],ne={title:"Components/Tables/BreakdownTable",component:a,tags:["autodocs","live"],decorators:[o=>e.jsx(w,{children:e.jsx(o,{})})],parameters:{source:"src/molecules/BreakdownTable.tsx",docs:{description:{component:'Two cards line by line (Breakdown, Your pick, Our pick) with a net total and a "Better" mark under the winner.'}}},argTypes:{rows:{control:"object"},headers:{control:"object"},totalLabel:{control:"text"},total:{control:"object"},lowerIsBetter:{control:"boolean"}},args:{rows:n,totalLabel:"Your net savings",lowerIsBetter:!1}},t={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"higher total wins (default)"}),e.jsx(a,{rows:n}),e.jsx(r,{children:"lowerIsBetter: lower total wins (fees)"}),e.jsx(a,{rows:[{label:"Joining fee",a:2500,b:999},{label:"Annual fee",a:2500,b:999}],totalLabel:"Fees you pay",lowerIsBetter:!0}),e.jsx(r,{children:"custom headers"}),e.jsx(a,{rows:n,headers:{label:"Per year",a:"HDFC Regalia",b:"SBI Cashback"}}),e.jsx(r,{children:"total overridden by the caller"}),e.jsx(a,{rows:n,total:{a:3050,b:11001}})]})},l={parameters:{docs:{description:{story:'A tie shows no "Better" mark. Negative values show as a minus, for example -₹2,950. Totals add in paise. The "Better" word is added by the app so colour is not the only cue; it is not in the Figma.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"tie"}),e.jsx(a,{rows:[{label:"Amazon spends",a:3e3,b:3e3}]}),e.jsx(r,{children:"zero and ₹10,00,000"}),e.jsx(a,{rows:[{label:"Welcome benefit",a:0,b:1e6},{label:"Annual fee",a:0,b:-2500}]}),e.jsx(r,{children:"1 row"}),e.jsx(a,{rows:[{label:"Fuel surcharge waiver",a:450,b:300}]}),e.jsx(r,{children:"many rows, long label"}),e.jsx(a,{rows:[{label:"Amazon spends",a:4200,b:5900},{label:"Flipkart spends",a:1200,b:800},{label:"Myntra and Ajio fashion spends",a:900,b:1500},{label:"Swiggy and Zomato dining and food delivery",a:1800,b:3600},{label:"Fuel",a:300,b:300},{label:"Milestones",a:0,b:2500},{label:"Annual fee",a:-2950,b:-999}]}),e.jsx(r,{children:"no rows"}),e.jsx(a,{rows:[]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>higher total wins (default)</Label>
      <BreakdownTable rows={rows} />
      <Label>lowerIsBetter: lower total wins (fees)</Label>
      <BreakdownTable rows={[{
      label: 'Joining fee',
      a: 2500,
      b: 999
    }, {
      label: 'Annual fee',
      a: 2500,
      b: 999
    }]} totalLabel="Fees you pay" lowerIsBetter />
      <Label>custom headers</Label>
      <BreakdownTable rows={rows} headers={{
      label: 'Per year',
      a: 'HDFC Regalia',
      b: 'SBI Cashback'
    }} />
      <Label>total overridden by the caller</Label>
      <BreakdownTable rows={rows} total={{
      a: 3050,
      b: 11001
    }} />
    </>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A tie shows no "Better" mark. Negative values show as a minus, for example -₹2,950. Totals add in paise. The "Better" word is added by the app so colour is not the only cue; it is not in the Figma.'
      }
    }
  },
  render: () => <>
      <Label>tie</Label>
      <BreakdownTable rows={[{
      label: 'Amazon spends',
      a: 3000,
      b: 3000
    }]} />
      <Label>zero and ₹10,00,000</Label>
      <BreakdownTable rows={[{
      label: 'Welcome benefit',
      a: 0,
      b: 1000000
    }, {
      label: 'Annual fee',
      a: 0,
      b: -2500
    }]} />
      <Label>1 row</Label>
      <BreakdownTable rows={[{
      label: 'Fuel surcharge waiver',
      a: 450,
      b: 300
    }]} />
      <Label>many rows, long label</Label>
      <BreakdownTable rows={[{
      label: 'Amazon spends',
      a: 4200,
      b: 5900
    }, {
      label: 'Flipkart spends',
      a: 1200,
      b: 800
    }, {
      label: 'Myntra and Ajio fashion spends',
      a: 900,
      b: 1500
    }, {
      label: 'Swiggy and Zomato dining and food delivery',
      a: 1800,
      b: 3600
    }, {
      label: 'Fuel',
      a: 300,
      b: 300
    }, {
      label: 'Milestones',
      a: 0,
      b: 2500
    }, {
      label: 'Annual fee',
      a: -2950,
      b: -999
    }]} />
      <Label>no rows</Label>
      <BreakdownTable rows={[]} />
    </>
}`,...l.parameters?.docs?.source}}};const ie=["Playground","Variants","States"];export{t as Playground,l as States,s as Variants,ie as __namedExportsOrder,ne as default};
