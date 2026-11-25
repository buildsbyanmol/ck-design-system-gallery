import{j as e,a as l}from"./iframe-BxRbKpJi.js";import{C as o}from"./CardTile-B5yCU4Zu.js";import{c,L as s,F as p}from"./_shared-B6uq1mSV.js";import{S as i}from"./cards-Bc9fBrua.js";import"./preload-helper-Zf8nSx-t.js";import"./motion-C4NNgPp6.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const ae={title:"Components/Cards/CardTile (molecule, legacy)",component:o,tags:["autodocs","live"],decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/CardTile.tsx",docs:{description:{component:'LEGACY molecule CardTile: a coloured placeholder box instead of card art, emoji benefits, plain fee strip. It is not the Home tile (that is the organism CardTile, see "CardTile (organism, current)"). This file is also where the CardModel type lives.'}}},argTypes:{card:c,onPress:{control:!1},style:{control:!1}},args:{card:i[0],onPress:()=>{}}},t={},n={parameters:{docs:{description:{story:"One tile per placeholder colour key: dark, saffron, cobalt, ruby, violet. The colour key maps to a semantic token, never to raw hex."}}},render:()=>e.jsx(e.Fragment,{children:i.map(r=>e.jsxs(l.Fragment,{children:[e.jsx(s,{children:`placeholderColor="${r.placeholderColor}"${r.inviteOnly?" · inviteOnly":""}`}),e.jsx(o,{card:r,onPress:()=>{}})]},r.id))})},a={parameters:{docs:{description:{story:'Open question for product: no screen uses this tile today, so the tag is "live" only because the code ships. Check with the owner before relying on it. Always shows a VISA mark in the placeholder, whatever the card network is.'}}},render:()=>{const r=i[2];return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"no tags and no benefits"}),e.jsx(o,{card:{...r,tags:[],benefits:[]},onPress:()=>{}}),e.jsx(s,{children:"1 benefit, fees ₹0"}),e.jsx(o,{card:{...r,benefits:r.benefits.slice(0,1),joiningFee:"₹0",annualFee:"₹0"},onPress:()=>{}}),e.jsx(s,{children:"long name, fee ₹10,00,000"}),e.jsx(o,{card:{...r,name:"Axis Bank Magnus for Burgundy Private The One Credit Card with Metal Edition",joiningFee:`₹${1e6.toLocaleString("en-IN")}`,annualFee:`₹${1e6.toLocaleString("en-IN")}`},onPress:()=>{}})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One tile per placeholder colour key: dark, saffron, cobalt, ruby, violet. The colour key maps to a semantic token, never to raw hex.'
      }
    }
  },
  render: () => <>
      {SAMPLE_CARDS.map(c => <React.Fragment key={c.id}>
          <Label>{\`placeholderColor="\${c.placeholderColor}"\${c.inviteOnly ? ' · inviteOnly' : ''}\`}</Label>
          <CardTile card={c} onPress={() => {}} />
        </React.Fragment>)}
    </>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question for product: no screen uses this tile today, so the tag is "live" only because the code ships. Check with the owner before relying on it. Always shows a VISA mark in the placeholder, whatever the card network is.'
      }
    }
  },
  render: () => {
    const base = SAMPLE_CARDS[2];
    return <>
        <Label>no tags and no benefits</Label>
        <CardTile card={{
        ...base,
        tags: [],
        benefits: []
      }} onPress={() => {}} />
        <Label>1 benefit, fees ₹0</Label>
        <CardTile card={{
        ...base,
        benefits: base.benefits.slice(0, 1),
        joiningFee: '₹0',
        annualFee: '₹0'
      }} onPress={() => {}} />
        <Label>long name, fee ₹10,00,000</Label>
        <CardTile card={{
        ...base,
        name: 'Axis Bank Magnus for Burgundy Private The One Credit Card with Metal Edition',
        joiningFee: \`₹\${1000000 .toLocaleString('en-IN')}\`,
        annualFee: \`₹\${1000000 .toLocaleString('en-IN')}\`
      }} onPress={() => {}} />
      </>;
  }
}`,...a.parameters?.docs?.source}}};const se=["Playground","Variants","States"];export{t as Playground,a as States,n as Variants,se as __namedExportsOrder,ae as default};
