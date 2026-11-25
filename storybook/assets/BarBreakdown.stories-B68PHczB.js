import{j as e,V as p}from"./iframe-DK2xttIN.js";import{B as o}from"./BarBreakdown-Ov1ar3LP.js";import{S as m,B as r,i as d}from"./_chrome-iej18qaj.js";import{s as u}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const s=[{label:"Online shopping",value:42500,icon:"cart-outline"},{label:"Dining",value:18200,icon:"feat-dining-outline"},{label:"Fuel",value:12750,icon:"feat-fuel-outline"},{label:"Travel",value:9400,icon:"feat-travel-outline"},{label:"Bills",value:6100,icon:"feat-mobile-recharge-outline"}],a=t=>e.jsx(p,{style:{paddingHorizontal:u[16]},children:t}),le={title:"Components/Charts/BarBreakdown",component:o,tags:["autodocs","live"],decorators:[t=>e.jsx(p,{style:{width:360},children:e.jsx(t,{})})],parameters:{layout:"centered",source:"src/molecules/BarBreakdown.tsx",docs:{description:{component:"Ranked horizontal bars, one for each item, each with its label and rupee value written out."}}},argTypes:{items:{control:"object",description:"Items: label, value in rupees, optional icon and note."},max:{control:"number",description:"Value that fills a whole bar. Default: the largest value."},sort:{control:"inline-radio",options:["desc","none"]},showTotal:{control:"boolean"}},args:{items:s,sort:"desc",showTotal:!1}},n={},l={parameters:{docs:{description:{story:"Not used by any screen yet. It appears only in the DS additions gallery."}}},render:()=>e.jsxs(m,{width:360,children:[e.jsx(r,{label:"Sorted, with total (default order is desc)",children:a(e.jsx(o,{items:s,showTotal:!0}))}),e.jsx(r,{label:"sort: none (input order kept)",children:a(e.jsx(o,{items:[...s].reverse(),sort:"none"}))}),e.jsx(r,{label:"With icons and notes",children:a(e.jsx(o,{items:s.slice(0,3).map((t,c)=>({...t,note:["Amazon and Flipkart","12 orders","Two cards"][c]}))}))}),e.jsx(r,{label:"max set to 1,00,000 (bars shorter than the largest value)",children:a(e.jsx(o,{items:s,max:1e5}))})]})},i={parameters:{docs:{description:{story:"Open question: there is no loading, empty or error state. An empty list renders nothing, not even a message."}}},render:()=>e.jsxs(m,{width:360,children:[e.jsx(r,{label:"1 item",children:a(e.jsx(o,{items:s.slice(0,1),showTotal:!0}))}),e.jsx(r,{label:"Many items (10)",children:a(e.jsx(o,{items:[...s,...s.map(t=>({...t,label:t.label+" 2",value:Math.round(t.value/3)}))]}))}),e.jsx(r,{label:`${d(0)} everywhere (zero-width bars)`,children:a(e.jsx(o,{items:s.map(t=>({...t,value:0})),showTotal:!0}))}),e.jsx(r,{label:`${d(1e6)} and ${d(0)} (Indian grouping)`,children:a(e.jsx(o,{items:[{label:"Annual spends",value:1e6},{label:"Not started",value:0}],showTotal:!0}))}),e.jsx(r,{label:"Long label and note",children:a(e.jsx(o,{items:[{label:"Online shopping on Amazon, Flipkart, Myntra and other partner stores",value:42500,note:"Includes orders still waiting for the store to confirm them"}]}))})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
