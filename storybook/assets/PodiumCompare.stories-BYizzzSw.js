import{j as e,V as d}from"./iframe-EJmZd_T6.js";import{P as n}from"./PodiumCompare-CwSVDn2u.js";import{S as b,B as r,i as a}from"./_chrome-B1UVqLGg.js";import{i as c}from"./index-DCss3D-b.js";import{s as u}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const t={name:"SBI Cashback",image:c.cards.sbiCashback,value:14200},o={name:"HDFC Swiggy",image:c.cards.hdfcSwiggy,value:18600},s=p=>e.jsx(d,{style:{paddingHorizontal:u[16]},children:p}),le={title:"Components/Charts/PodiumCompare",component:n,tags:["autodocs","live"],decorators:[p=>e.jsx(d,{style:{width:360},children:e.jsx(p,{})})],parameters:{layout:"centered",source:"src/molecules/PodiumCompare.tsx",docs:{description:{component:'Two cards on podium bars with a rupee value above each; the winner bar is green and says "Best". Used on the Beat my card result.'}}},argTypes:{title:{control:"text",description:"Heading, for example the store name."},contextLabel:{control:"text",description:'Context chip, for example "₹40,000 spends".'},onContextPress:{control:!1,description:"When set, the context label is a link with an edit icon."},a:{control:"object"},b:{control:"object"}},args:{title:"Yearly savings on Amazon",contextLabel:`${a(4e4)} spends`,a:t,b:o,onContextPress:()=>{}}},i={},l={render:()=>e.jsxs(b,{width:360,children:[e.jsx(r,{label:"B wins",children:s(e.jsx(n,{title:"Yearly savings on Amazon",contextLabel:`${a(4e4)} spends`,onContextPress:()=>{},a:t,b:o}))}),e.jsx(r,{label:"A wins",children:s(e.jsx(n,{title:"Yearly savings on Amazon",contextLabel:`${a(4e4)} spends`,a:{...t,value:21e3},b:{...o,value:9800}}))}),e.jsx(r,{label:"Equal (no winner, both bars neutral)",children:s(e.jsx(n,{title:"Yearly savings on Myntra",contextLabel:`${a(25e3)} spends`,a:{...t,value:5e3},b:{...o,value:5e3}}))}),e.jsx(r,{label:"No context label",children:s(e.jsx(n,{title:"Yearly savings on Flipkart",a:t,b:o}))})]})},m={parameters:{docs:{description:{story:"Open question: a result of 0 against 0 shows two flat bars and no winner, with no message that neither card earns here."}}},render:()=>e.jsxs(b,{width:360,children:[e.jsx(r,{label:`Both ${a(0)} (no winner)`,children:s(e.jsx(n,{title:"Yearly savings on Ajio",contextLabel:`${a(0)} spends`,a:{...t,value:0},b:{...o,value:0}}))}),e.jsx(r,{label:`${a(0)} against ${a(1e6)} (minimum bar height)`,children:s(e.jsx(n,{title:"Yearly savings",a:{...t,value:0},b:{...o,value:1e6}}))}),e.jsx(r,{label:"Long title and long names",children:s(e.jsx(n,{title:"Yearly savings on Amazon Pay and other partner stores",contextLabel:`${a(1e6)} spends`,onContextPress:()=>{},a:{...t,name:"Axis Bank Burgundy Private The One Card",image:c.cards.axisBurgundyPrivateTheOneCard},b:o}))})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
