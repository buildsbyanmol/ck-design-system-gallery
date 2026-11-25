import{j as e,V as c}from"./iframe-BxRbKpJi.js";import{S as s}from"./StackedBar-DrIlUKGr.js";import{S as g,B as t,i as p}from"./_chrome-DBrYcJuA.js";import{s as h}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const d=["series1","series2","series3","positive","negative","muted"],n=[{label:"Confirmed",value:8450,series:"positive"},{label:"Pending",value:3200,series:"series2"},{label:"Cancelled",value:750,series:"muted"}],a=r=>e.jsx(c,{style:{paddingHorizontal:h[16]},children:r}),le={title:"Components/Charts/StackedBar",component:s,tags:["autodocs","live"],decorators:[r=>e.jsx(c,{style:{width:360},children:e.jsx(r,{})})],parameters:{layout:"centered",source:"src/molecules/StackedBar.tsx",docs:{description:{component:"One horizontal bar split into the parts of a total, with a legend row (label and rupee value) for every segment."}}},argTypes:{segments:{control:"object",description:`Items: label, value in rupees, series (${d.join(", ")}).`},legend:{control:"boolean"}},args:{segments:n,legend:!0}},o={},l={parameters:{docs:{description:{story:"Not used by any screen yet. It appears only in the DS additions gallery."}}},render:()=>e.jsxs(g,{width:360,children:[e.jsx(t,{label:"With legend",children:a(e.jsx(s,{segments:n}))}),e.jsx(t,{label:"Without legend (the bar still has a screen reader label)",children:a(e.jsx(s,{segments:n,legend:!1}))}),e.jsx(t,{label:"Every series colour",children:a(e.jsx(s,{segments:d.map((r,i)=>({label:r,value:(i+1)*1e3,series:r}))}))})]})},m={parameters:{docs:{description:{story:"Open question: there is no empty state. All values at 0 draw an empty bar with a legend of zeros."}}},render:()=>e.jsxs(g,{width:360,children:[e.jsx(t,{label:"1 segment",children:a(e.jsx(s,{segments:n.slice(0,1)}))}),e.jsx(t,{label:"Many segments (6)",children:a(e.jsx(s,{segments:d.map((r,i)=>({label:`Segment ${i+1}`,value:500+i*300,series:r}))}))}),e.jsx(t,{label:`${p(0)} in one segment (hidden in the bar, kept in the legend)`,children:a(e.jsx(s,{segments:[...n,{label:"Withdrawn",value:0,series:"series1"}]}))}),e.jsx(t,{label:`${p(1e6)} against ${p(250)}`,children:a(e.jsx(s,{segments:[{label:"Lifetime earnings",value:1e6,series:"positive"},{label:"This month",value:250,series:"series2"}]}))}),e.jsx(t,{label:"Long labels",children:a(e.jsx(s,{segments:[{label:"Confirmed cashback from partner stores",value:8450,series:"positive"},{label:"Pending until the store confirms the order",value:3200,series:"series2"}]}))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
