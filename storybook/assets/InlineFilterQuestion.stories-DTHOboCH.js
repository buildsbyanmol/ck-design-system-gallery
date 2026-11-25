import{j as e,r as k}from"./iframe-BxRbKpJi.js";import{I as m}from"./InlineFilterQuestion-CeljCFeZ.js";import{S as d,G as i}from"./_kit-CssoIcXV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const r={kind:"question",id:"fee",title:"What annual fee are you comfortable with?",answered:!1,chips:[{key:"free",label:"Lifetime free",selected:!1,count:14},{key:"u1k",label:"Under ₹1,000",selected:!1,count:22},{key:"u5k",label:"Up to ₹5,000",selected:!1,count:31},{key:"any",label:"Any",selected:!1,count:36}]};function s({row:t}){const[c,h]=k.useState(t),f=n=>{n.action||h(u=>({...u,answered:!n.selected,chips:u.chips.map(p=>({...p,selected:p.key===n.key?!p.selected:!1}))}))};return e.jsx(m,{row:c,onChipPress:f})}const pe={title:"Components/Selections/InlineFilterQuestion",component:m,tags:["autodocs","live"],parameters:{source:"src/molecules/InlineFilterQuestion.tsx",docs:{description:{component:"One filter question placed between Home card tiles: a title and wrapping answer chips. A flat tinted panel so it does not read as a card."}}},args:{row:r,onChipPress:()=>{}},render:t=>e.jsx(d,{children:e.jsx(s,{row:t.row})})},o={},a={render:()=>e.jsxs(d,{children:[e.jsx(i,{label:"fee question",children:e.jsx(s,{row:r})}),e.jsx(i,{label:"first card question",children:e.jsx(s,{row:{kind:"question",id:"firstCard",title:"Is this your first credit card?",answered:!1,chips:[{key:"yes",label:"Yes, first card",selected:!1,count:18},{key:"no",label:"I have one already",selected:!1,count:36}]}})}),e.jsx(i,{label:"eligibility question with an action chip",children:e.jsx(s,{row:{kind:"question",id:"eligibility",title:"See only cards you can get?",answered:!1,chips:[{key:"check",label:"Check which cards I can get",selected:!1,action:"eligibility"},{key:"skip",label:"Not now",selected:!1}]}})})]})},l={render:()=>e.jsxs(d,{children:[e.jsx(i,{label:"one answer selected (count shown on the chip)",children:e.jsx(s,{row:{...r,answered:!0,chips:r.chips.map(t=>({...t,selected:t.key==="u1k"}))}})}),e.jsx(i,{label:"chip without a count",children:e.jsx(s,{row:{...r,chips:r.chips.map(({count:t,...c})=>c)}})}),e.jsx(i,{label:"long title and many chips",children:e.jsx(s,{row:{kind:"question",id:"fee",title:"Which annual fee range works for you if the card gives lounge access and fuel savings?",answered:!1,chips:[...r.chips,{key:"u10k",label:"Up to ₹10,000",selected:!1,count:36},{key:"u1l",label:"Up to ₹1,00,000 for premium cards",selected:!1,count:36}]}})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Group label="fee question"><Live row={FEE_ROW} /></Group>
      <Group label="first card question">
        <Live row={{
        kind: 'question',
        id: 'firstCard',
        title: 'Is this your first credit card?',
        answered: false,
        chips: [{
          key: 'yes',
          label: 'Yes, first card',
          selected: false,
          count: 18
        }, {
          key: 'no',
          label: 'I have one already',
          selected: false,
          count: 36
        }]
      }} />
      </Group>
      <Group label="eligibility question with an action chip">
        <Live row={{
        kind: 'question',
        id: 'eligibility',
        title: 'See only cards you can get?',
        answered: false,
        chips: [{
          key: 'check',
          label: 'Check which cards I can get',
          selected: false,
          action: 'eligibility'
        }, {
          key: 'skip',
          label: 'Not now',
          selected: false
        }]
      }} />
      </Group>
    </Stack>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Group label="one answer selected (count shown on the chip)">
        <Live row={{
        ...FEE_ROW,
        answered: true,
        chips: FEE_ROW.chips.map(c => ({
          ...c,
          selected: c.key === 'u1k'
        }))
      }} />
      </Group>
      <Group label="chip without a count"><Live row={{
        ...FEE_ROW,
        chips: FEE_ROW.chips.map(({
          count,
          ...c
        }) => c)
      }} /></Group>
      <Group label="long title and many chips">
        <Live row={{
        kind: 'question',
        id: 'fee',
        title: 'Which annual fee range works for you if the card gives lounge access and fuel savings?',
        answered: false,
        chips: [...FEE_ROW.chips, {
          key: 'u10k',
          label: 'Up to ₹10,000',
          selected: false,
          count: 36
        }, {
          key: 'u1l',
          label: 'Up to ₹1,00,000 for premium cards',
          selected: false,
          count: 36
        }]
      }} />
      </Group>
    </Stack>
}`,...l.parameters?.docs?.source}}};const de=["Playground","Variants","States"];export{o as Playground,l as States,a as Variants,de as __namedExportsOrder,pe as default};
