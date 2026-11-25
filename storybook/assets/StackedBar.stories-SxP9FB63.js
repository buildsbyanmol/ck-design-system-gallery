import{j as e,V as c}from"./iframe-DK2xttIN.js";import{S as s}from"./StackedBar-B7RTqn76.js";import{S as g,B as t,i as p}from"./_chrome-iej18qaj.js";import{s as h}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const d=["series1","series2","series3","positive","negative","muted"],n=[{label:"Confirmed",value:8450,series:"positive"},{label:"Pending",value:3200,series:"series2"},{label:"Cancelled",value:750,series:"muted"}],a=r=>e.jsx(c,{style:{paddingHorizontal:h[16]},children:r}),le={title:"Components/Charts/StackedBar",component:s,tags:["autodocs","live"],decorators:[r=>e.jsx(c,{style:{width:360},children:e.jsx(r,{})})],parameters:{layout:"centered",source:"src/molecules/StackedBar.tsx",docs:{description:{component:"One horizontal bar split into the parts of a total, with a legend row (label and rupee value) for every segment."}}},argTypes:{segments:{control:"object",description:`Items: label, value in rupees, series (${d.join(", ")}).`},legend:{control:"boolean"}},args:{segments:n,legend:!0}},o={},l={parameters:{docs:{description:{story:"Not used by any screen yet. It appears only in the DS additions gallery."}}},render:()=>e.jsxs(g,{width:360,children:[e.jsx(t,{label:"With legend",children:a(e.jsx(s,{segments:n}))}),e.jsx(t,{label:"Without legend (the bar still has a screen reader label)",children:a(e.jsx(s,{segments:n,legend:!1}))}),e.jsx(t,{label:"Every series colour",children:a(e.jsx(s,{segments:d.map((r,i)=>({label:r,value:(i+1)*1e3,series:r}))}))})]})},m={parameters:{docs:{description:{story:"Open question: there is no empty state. All values at 0 draw an empty bar with a legend of zeros."}}},render:()=>e.jsxs(g,{width:360,children:[e.jsx(t,{label:"1 segment",children:a(e.jsx(s,{segments:n.slice(0,1)}))}),e.jsx(t,{label:"Many segments (6)",children:a(e.jsx(s,{segments:d.map((r,i)=>({label:`Segment ${i+1}`,value:500+i*300,series:r}))}))}),e.jsx(t,{label:`${p(0)} in one segment (hidden in the bar, kept in the legend)`,children:a(e.jsx(s,{segments:[...n,{label:"Withdrawn",value:0,series:"series1"}]}))}),e.jsx(t,{label:`${p(1e6)} against ${p(250)}`,children:a(e.jsx(s,{segments:[{label:"Lifetime earnings",value:1e6,series:"positive"},{label:"This month",value:250,series:"series2"}]}))}),e.jsx(t,{label:"Long labels",children:a(e.jsx(s,{segments:[{label:"Confirmed cashback from partner stores",value:8450,series:"positive"},{label:"Pending until the store confirms the order",value:3200,series:"series2"}]}))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Not used by any screen yet. It appears only in the DS additions gallery.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label="With legend">{pad(<StackedBar segments={earnings} />)}</Block>
      <Block label="Without legend (the bar still has a screen reader label)">{pad(<StackedBar segments={earnings} legend={false} />)}</Block>
      <Block label="Every series colour">{pad(<StackedBar segments={SERIES.map((s, i) => ({
        label: s,
        value: (i + 1) * 1000,
        series: s
      }))} />)}</Block>
    </Stack>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: there is no empty state. All values at 0 draw an empty bar with a legend of zeros.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label="1 segment">{pad(<StackedBar segments={earnings.slice(0, 1)} />)}</Block>
      <Block label="Many segments (6)">{pad(<StackedBar segments={SERIES.map((s, i) => ({
        label: \`Segment \${i + 1}\`,
        value: 500 + i * 300,
        series: s
      }))} />)}</Block>
      <Block label={\`\${inr(0)} in one segment (hidden in the bar, kept in the legend)\`}>{pad(<StackedBar segments={[...earnings, {
        label: 'Withdrawn',
        value: 0,
        series: 'series1'
      }]} />)}</Block>
      <Block label={\`\${inr(10_00_000)} against \${inr(250)}\`}>{pad(<StackedBar segments={[{
        label: 'Lifetime earnings',
        value: 1000000,
        series: 'positive'
      }, {
        label: 'This month',
        value: 250,
        series: 'series2'
      }]} />)}</Block>
      <Block label="Long labels">{pad(<StackedBar segments={[{
        label: 'Confirmed cashback from partner stores',
        value: 8450,
        series: 'positive'
      }, {
        label: 'Pending until the store confirms the order',
        value: 3200,
        series: 'series2'
      }]} />)}</Block>
    </Stack>
}`,...m.parameters?.docs?.source}}};const me=["Playground","Variants","States"];export{o as Playground,m as States,l as Variants,me as __namedExportsOrder,le as default};
