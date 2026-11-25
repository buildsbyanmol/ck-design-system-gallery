import{j as e,V as p}from"./iframe-BxRbKpJi.js";import{B as o}from"./BarBreakdown-BQ5JLUA5.js";import{S as m,B as r,i as d}from"./_chrome-DBrYcJuA.js";import{s as u}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const s=[{label:"Online shopping",value:42500,icon:"cart-outline"},{label:"Dining",value:18200,icon:"feat-dining-outline"},{label:"Fuel",value:12750,icon:"feat-fuel-outline"},{label:"Travel",value:9400,icon:"feat-travel-outline"},{label:"Bills",value:6100,icon:"feat-mobile-recharge-outline"}],a=t=>e.jsx(p,{style:{paddingHorizontal:u[16]},children:t}),le={title:"Components/Charts/BarBreakdown",component:o,tags:["autodocs","live"],decorators:[t=>e.jsx(p,{style:{width:360},children:e.jsx(t,{})})],parameters:{layout:"centered",source:"src/molecules/BarBreakdown.tsx",docs:{description:{component:"Ranked horizontal bars, one for each item, each with its label and rupee value written out."}}},argTypes:{items:{control:"object",description:"Items: label, value in rupees, optional icon and note."},max:{control:"number",description:"Value that fills a whole bar. Default: the largest value."},sort:{control:"inline-radio",options:["desc","none"]},showTotal:{control:"boolean"}},args:{items:s,sort:"desc",showTotal:!1}},n={},l={parameters:{docs:{description:{story:"Not used by any screen yet. It appears only in the DS additions gallery."}}},render:()=>e.jsxs(m,{width:360,children:[e.jsx(r,{label:"Sorted, with total (default order is desc)",children:a(e.jsx(o,{items:s,showTotal:!0}))}),e.jsx(r,{label:"sort: none (input order kept)",children:a(e.jsx(o,{items:[...s].reverse(),sort:"none"}))}),e.jsx(r,{label:"With icons and notes",children:a(e.jsx(o,{items:s.slice(0,3).map((t,c)=>({...t,note:["Amazon and Flipkart","12 orders","Two cards"][c]}))}))}),e.jsx(r,{label:"max set to 1,00,000 (bars shorter than the largest value)",children:a(e.jsx(o,{items:s,max:1e5}))})]})},i={parameters:{docs:{description:{story:"Open question: there is no loading, empty or error state. An empty list renders nothing, not even a message."}}},render:()=>e.jsxs(m,{width:360,children:[e.jsx(r,{label:"1 item",children:a(e.jsx(o,{items:s.slice(0,1),showTotal:!0}))}),e.jsx(r,{label:"Many items (10)",children:a(e.jsx(o,{items:[...s,...s.map(t=>({...t,label:t.label+" 2",value:Math.round(t.value/3)}))]}))}),e.jsx(r,{label:`${d(0)} everywhere (zero-width bars)`,children:a(e.jsx(o,{items:s.map(t=>({...t,value:0})),showTotal:!0}))}),e.jsx(r,{label:`${d(1e6)} and ${d(0)} (Indian grouping)`,children:a(e.jsx(o,{items:[{label:"Annual spends",value:1e6},{label:"Not started",value:0}],showTotal:!0}))}),e.jsx(r,{label:"Long label and note",children:a(e.jsx(o,{items:[{label:"Online shopping on Amazon, Flipkart, Myntra and other partner stores",value:42500,note:"Includes orders still waiting for the store to confirm them"}]}))})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Not used by any screen yet. It appears only in the DS additions gallery.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label="Sorted, with total (default order is desc)">{pad(<BarBreakdown items={spends} showTotal />)}</Block>
      <Block label="sort: none (input order kept)">{pad(<BarBreakdown items={[...spends].reverse()} sort="none" />)}</Block>
      <Block label="With icons and notes">{pad(<BarBreakdown items={spends.slice(0, 3).map((s, i) => ({
        ...s,
        note: ['Amazon and Flipkart', '12 orders', 'Two cards'][i]
      }))} />)}</Block>
      <Block label="max set to 1,00,000 (bars shorter than the largest value)">{pad(<BarBreakdown items={spends} max={100000} />)}</Block>
    </Stack>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: there is no loading, empty or error state. An empty list renders nothing, not even a message.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label="1 item">{pad(<BarBreakdown items={spends.slice(0, 1)} showTotal />)}</Block>
      <Block label="Many items (10)">{pad(<BarBreakdown items={[...spends, ...spends.map(s => ({
        ...s,
        label: s.label + ' 2',
        value: Math.round(s.value / 3)
      }))]} />)}</Block>
      <Block label={\`\${inr(0)} everywhere (zero-width bars)\`}>{pad(<BarBreakdown items={spends.map(s => ({
        ...s,
        value: 0
      }))} showTotal />)}</Block>
      <Block label={\`\${inr(10_00_000)} and \${inr(0)} (Indian grouping)\`}>{pad(<BarBreakdown items={[{
        label: 'Annual spends',
        value: 1000000
      }, {
        label: 'Not started',
        value: 0
      }]} showTotal />)}</Block>
      <Block label="Long label and note">{pad(<BarBreakdown items={[{
        label: 'Online shopping on Amazon, Flipkart, Myntra and other partner stores',
        value: 42500,
        note: 'Includes orders still waiting for the store to confirm them'
      }]} />)}</Block>
    </Stack>
}`,...i.parameters?.docs?.source}}};const ie=["Playground","Variants","States"];export{n as Playground,i as States,l as Variants,ie as __namedExportsOrder,le as default};
