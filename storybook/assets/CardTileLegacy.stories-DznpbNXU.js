import{j as e,a as l}from"./iframe-EJmZd_T6.js";import{C as o}from"./CardTile-Bob45dXu.js";import{c,L as s,F as p}from"./_shared-DUO1fe1c.js";import{S as i}from"./cards-Bc9fBrua.js";import"./preload-helper-Zf8nSx-t.js";import"./motion-CMqo2j38.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const ae={title:"Components/Cards/CardTile (molecule, legacy)",component:o,tags:["autodocs","live"],decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/CardTile.tsx",docs:{description:{component:'LEGACY molecule CardTile: a coloured placeholder box instead of card art, emoji benefits, plain fee strip. It is not the Home tile (that is the organism CardTile, see "CardTile (organism, current)"). This file is also where the CardModel type lives.'}}},argTypes:{card:c,onPress:{control:!1},style:{control:!1}},args:{card:i[0],onPress:()=>{}}},t={},n={parameters:{docs:{description:{story:"One tile per placeholder colour key: dark, saffron, cobalt, ruby, violet. The colour key maps to a semantic token, never to raw hex."}}},render:()=>e.jsx(e.Fragment,{children:i.map(r=>e.jsxs(l.Fragment,{children:[e.jsx(s,{children:`placeholderColor="${r.placeholderColor}"${r.inviteOnly?" · inviteOnly":""}`}),e.jsx(o,{card:r,onPress:()=>{}})]},r.id))})},a={parameters:{docs:{description:{story:'Open question for product: no screen uses this tile today, so the tag is "live" only because the code ships. Check with the owner before relying on it. Always shows a VISA mark in the placeholder, whatever the card network is.'}}},render:()=>{const r=i[2];return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"no tags and no benefits"}),e.jsx(o,{card:{...r,tags:[],benefits:[]},onPress:()=>{}}),e.jsx(s,{children:"1 benefit, fees ₹0"}),e.jsx(o,{card:{...r,benefits:r.benefits.slice(0,1),joiningFee:"₹0",annualFee:"₹0"},onPress:()=>{}}),e.jsx(s,{children:"long name, fee ₹10,00,000"}),e.jsx(o,{card:{...r,name:"Axis Bank Magnus for Burgundy Private The One Credit Card with Metal Edition",joiningFee:`₹${1e6.toLocaleString("en-IN")}`,annualFee:`₹${1e6.toLocaleString("en-IN")}`},onPress:()=>{}})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
