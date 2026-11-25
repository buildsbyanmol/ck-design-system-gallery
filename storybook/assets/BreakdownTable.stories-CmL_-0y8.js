import{j as e,R as b,c as d,V as p}from"./iframe-BxRbKpJi.js";import{B as a}from"./BreakdownTable-CuqOn1js.js";import{t as m,s as i}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const c=390,w=({children:o})=>e.jsx(p,{style:{width:c,padding:i[16],gap:i[12]},children:o}),r=({children:o})=>e.jsx(b,{style:{...m.caption10Medium,color:d.text.tertiary},children:o}),n=[{label:"Amazon spends",a:4200,b:5900},{label:"Dining and delivery",a:1800,b:3600},{label:"Milestones",a:0,b:2500},{label:"Annual fee",a:-2950,b:-999}],ne={title:"Components/Tables/BreakdownTable",component:a,tags:["autodocs","live"],decorators:[o=>e.jsx(w,{children:e.jsx(o,{})})],parameters:{source:"src/molecules/BreakdownTable.tsx",docs:{description:{component:'Two cards line by line (Breakdown, Your pick, Our pick) with a net total and a "Better" mark under the winner.'}}},argTypes:{rows:{control:"object"},headers:{control:"object"},totalLabel:{control:"text"},total:{control:"object"},lowerIsBetter:{control:"boolean"}},args:{rows:n,totalLabel:"Your net savings",lowerIsBetter:!1}},t={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"higher total wins (default)"}),e.jsx(a,{rows:n}),e.jsx(r,{children:"lowerIsBetter: lower total wins (fees)"}),e.jsx(a,{rows:[{label:"Joining fee",a:2500,b:999},{label:"Annual fee",a:2500,b:999}],totalLabel:"Fees you pay",lowerIsBetter:!0}),e.jsx(r,{children:"custom headers"}),e.jsx(a,{rows:n,headers:{label:"Per year",a:"HDFC Regalia",b:"SBI Cashback"}}),e.jsx(r,{children:"total overridden by the caller"}),e.jsx(a,{rows:n,total:{a:3050,b:11001}})]})},l={parameters:{docs:{description:{story:'A tie shows no "Better" mark. Negative values show as a minus, for example -₹2,950. Totals add in paise. The "Better" word is added by the app so colour is not the only cue; it is not in the Figma.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"tie"}),e.jsx(a,{rows:[{label:"Amazon spends",a:3e3,b:3e3}]}),e.jsx(r,{children:"zero and ₹10,00,000"}),e.jsx(a,{rows:[{label:"Welcome benefit",a:0,b:1e6},{label:"Annual fee",a:0,b:-2500}]}),e.jsx(r,{children:"1 row"}),e.jsx(a,{rows:[{label:"Fuel surcharge waiver",a:450,b:300}]}),e.jsx(r,{children:"many rows, long label"}),e.jsx(a,{rows:[{label:"Amazon spends",a:4200,b:5900},{label:"Flipkart spends",a:1200,b:800},{label:"Myntra and Ajio fashion spends",a:900,b:1500},{label:"Swiggy and Zomato dining and food delivery",a:1800,b:3600},{label:"Fuel",a:300,b:300},{label:"Milestones",a:0,b:2500},{label:"Annual fee",a:-2950,b:-999}]}),e.jsx(r,{children:"no rows"}),e.jsx(a,{rows:[]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
