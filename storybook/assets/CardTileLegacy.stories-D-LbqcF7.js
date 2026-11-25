import{j as e,a as l}from"./iframe-DK2xttIN.js";import{C as o}from"./CardTile-BTfStbVG.js";import{c,L as s,F as p}from"./_shared-DTtNh5Zn.js";import{S as i}from"./cards-Bc9fBrua.js";import"./preload-helper-Zf8nSx-t.js";import"./motion-q_NUJArm.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const ae={title:"Components/Cards/CardTile (molecule, legacy)",component:o,tags:["autodocs","live"],decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/CardTile.tsx",docs:{description:{component:'LEGACY molecule CardTile: a coloured placeholder box instead of card art, emoji benefits, plain fee strip. It is not the Home tile (that is the organism CardTile, see "CardTile (organism, current)"). This file is also where the CardModel type lives.'}}},argTypes:{card:c,onPress:{control:!1},style:{control:!1}},args:{card:i[0],onPress:()=>{}}},t={},n={parameters:{docs:{description:{story:"One tile per placeholder colour key: dark, saffron, cobalt, ruby, violet. The colour key maps to a semantic token, never to raw hex."}}},render:()=>e.jsx(e.Fragment,{children:i.map(r=>e.jsxs(l.Fragment,{children:[e.jsx(s,{children:`placeholderColor="${r.placeholderColor}"${r.inviteOnly?" · inviteOnly":""}`}),e.jsx(o,{card:r,onPress:()=>{}})]},r.id))})},a={parameters:{docs:{description:{story:'Open question for product: no screen uses this tile today, so the tag is "live" only because the code ships. Check with the owner before relying on it. Always shows a VISA mark in the placeholder, whatever the card network is.'}}},render:()=>{const r=i[2];return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"no tags and no benefits"}),e.jsx(o,{card:{...r,tags:[],benefits:[]},onPress:()=>{}}),e.jsx(s,{children:"1 benefit, fees ₹0"}),e.jsx(o,{card:{...r,benefits:r.benefits.slice(0,1),joiningFee:"₹0",annualFee:"₹0"},onPress:()=>{}}),e.jsx(s,{children:"long name, fee ₹10,00,000"}),e.jsx(o,{card:{...r,name:"Axis Bank Magnus for Burgundy Private The One Credit Card with Metal Edition",joiningFee:`₹${1e6.toLocaleString("en-IN")}`,annualFee:`₹${1e6.toLocaleString("en-IN")}`},onPress:()=>{}})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
