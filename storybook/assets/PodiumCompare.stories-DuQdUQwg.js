import{j as e,V as d}from"./iframe-DK2xttIN.js";import{P as n}from"./PodiumCompare-nloRnlEo.js";import{S as b,B as r,i as a}from"./_chrome-iej18qaj.js";import{i as c}from"./index-DCss3D-b.js";import{s as u}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const t={name:"SBI Cashback",image:c.cards.sbiCashback,value:14200},o={name:"HDFC Swiggy",image:c.cards.hdfcSwiggy,value:18600},s=p=>e.jsx(d,{style:{paddingHorizontal:u[16]},children:p}),le={title:"Components/Charts/PodiumCompare",component:n,tags:["autodocs","live"],decorators:[p=>e.jsx(d,{style:{width:360},children:e.jsx(p,{})})],parameters:{layout:"centered",source:"src/molecules/PodiumCompare.tsx",docs:{description:{component:'Two cards on podium bars with a rupee value above each; the winner bar is green and says "Best". Used on the Beat my card result.'}}},argTypes:{title:{control:"text",description:"Heading, for example the store name."},contextLabel:{control:"text",description:'Context chip, for example "₹40,000 spends".'},onContextPress:{control:!1,description:"When set, the context label is a link with an edit icon."},a:{control:"object"},b:{control:"object"}},args:{title:"Yearly savings on Amazon",contextLabel:`${a(4e4)} spends`,a:t,b:o,onContextPress:()=>{}}},i={},l={render:()=>e.jsxs(b,{width:360,children:[e.jsx(r,{label:"B wins",children:s(e.jsx(n,{title:"Yearly savings on Amazon",contextLabel:`${a(4e4)} spends`,onContextPress:()=>{},a:t,b:o}))}),e.jsx(r,{label:"A wins",children:s(e.jsx(n,{title:"Yearly savings on Amazon",contextLabel:`${a(4e4)} spends`,a:{...t,value:21e3},b:{...o,value:9800}}))}),e.jsx(r,{label:"Equal (no winner, both bars neutral)",children:s(e.jsx(n,{title:"Yearly savings on Myntra",contextLabel:`${a(25e3)} spends`,a:{...t,value:5e3},b:{...o,value:5e3}}))}),e.jsx(r,{label:"No context label",children:s(e.jsx(n,{title:"Yearly savings on Flipkart",a:t,b:o}))})]})},m={parameters:{docs:{description:{story:"Open question: a result of 0 against 0 shows two flat bars and no winner, with no message that neither card earns here."}}},render:()=>e.jsxs(b,{width:360,children:[e.jsx(r,{label:`Both ${a(0)} (no winner)`,children:s(e.jsx(n,{title:"Yearly savings on Ajio",contextLabel:`${a(0)} spends`,a:{...t,value:0},b:{...o,value:0}}))}),e.jsx(r,{label:`${a(0)} against ${a(1e6)} (minimum bar height)`,children:s(e.jsx(n,{title:"Yearly savings",a:{...t,value:0},b:{...o,value:1e6}}))}),e.jsx(r,{label:"Long title and long names",children:s(e.jsx(n,{title:"Yearly savings on Amazon Pay and other partner stores",contextLabel:`${a(1e6)} spends`,onContextPress:()=>{},a:{...t,name:"Axis Bank Burgundy Private The One Card",image:c.cards.axisBurgundyPrivateTheOneCard},b:o}))})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={360}>
      <Block label="B wins">{pad(<PodiumCompare title="Yearly savings on Amazon" contextLabel={\`\${inr(40000)} spends\`} onContextPress={() => {}} a={mine} b={best} />)}</Block>
      <Block label="A wins">{pad(<PodiumCompare title="Yearly savings on Amazon" contextLabel={\`\${inr(40000)} spends\`} a={{
        ...mine,
        value: 21000
      }} b={{
        ...best,
        value: 9800
      }} />)}</Block>
      <Block label="Equal (no winner, both bars neutral)">{pad(<PodiumCompare title="Yearly savings on Myntra" contextLabel={\`\${inr(25000)} spends\`} a={{
        ...mine,
        value: 5000
      }} b={{
        ...best,
        value: 5000
      }} />)}</Block>
      <Block label="No context label">{pad(<PodiumCompare title="Yearly savings on Flipkart" a={mine} b={best} />)}</Block>
    </Stack>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: a result of 0 against 0 shows two flat bars and no winner, with no message that neither card earns here.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label={\`Both \${inr(0)} (no winner)\`}>{pad(<PodiumCompare title="Yearly savings on Ajio" contextLabel={\`\${inr(0)} spends\`} a={{
        ...mine,
        value: 0
      }} b={{
        ...best,
        value: 0
      }} />)}</Block>
      <Block label={\`\${inr(0)} against \${inr(10_00_000)} (minimum bar height)\`}>{pad(<PodiumCompare title="Yearly savings" a={{
        ...mine,
        value: 0
      }} b={{
        ...best,
        value: 1000000
      }} />)}</Block>
      <Block label="Long title and long names">{pad(<PodiumCompare title="Yearly savings on Amazon Pay and other partner stores" contextLabel={\`\${inr(1000000)} spends\`} onContextPress={() => {}} a={{
        ...mine,
        name: 'Axis Bank Burgundy Private The One Card',
        image: images.cards.axisBurgundyPrivateTheOneCard
      }} b={best} />)}</Block>
    </Stack>
}`,...m.parameters?.docs?.source}}};const me=["Playground","Variants","States"];export{i as Playground,m as States,l as Variants,me as __namedExportsOrder,le as default};
