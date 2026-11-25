import{j as r,V as s}from"./iframe-EJmZd_T6.js";import{P as i}from"./PartnerCard-Cp1HSolV.js";import{L as l,F as c}from"./_shared-DUO1fe1c.js";import{s as p}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./cards-Bc9fBrua.js";const m=[{id:"amazon",name:"Amazon",logo:"🛍",placeholderColor:"saffron",rate:"5%"},{id:"flipkart",name:"Flipkart",logo:"📦",placeholderColor:"cobalt",rate:"4%"},{id:"reliance-digital",name:"Reliance Digital",logo:"🖥",placeholderColor:"violet",rate:"4%"},{id:"ajio",name:"Ajio",logo:"👕",placeholderColor:"rose",rate:"4%"},{id:"foxtale",name:"Foxtale",logo:"🧴",placeholderColor:"sky",rate:"4%"},{id:"times-prime",name:"Times Prime",logo:"⭐",placeholderColor:"fern",rate:"4%"}],d=m[0],h=["saffron","cobalt","fern","violet","sky","rose"],lr={title:"Components/Cards/PartnerCard",component:i,tags:["autodocs","live"],decorators:[e=>r.jsx(c,{children:r.jsx(s,{style:{width:170},children:r.jsx(e,{})})})],parameters:{source:"src/molecules/PartnerCard.tsx",docs:{description:{component:'UNUSED today: no screen renders it. A cell for a 2 column offers grid: logo box and name, a picture box, and a full width "Shop & Earn" button. Logo and picture are coloured placeholders with an emoji. Fixture: SAMPLE_PARTNERS in src/data/partners.ts.'}}},argTypes:{partner:{control:"object"},onPress:{control:!1},style:{control:!1}},args:{partner:d,onPress:()=>{}}},o={},t={parameters:{docs:{description:{story:"One tile per placeholderColor key: saffron, cobalt, fern, violet, sky, rose. The rates here come from the fixture file."}}},decorators:[e=>r.jsx(s,{style:{width:360},children:r.jsx(e,{})})],render:()=>r.jsx(s,{style:{flexDirection:"row",flexWrap:"wrap",gap:p[12]},children:m.map((e,n)=>r.jsxs(s,{style:{width:168,gap:p[4]},children:[r.jsx(l,{children:`placeholderColor="${h[n]}"`}),r.jsx(i,{partner:e,onPress:()=>{}})]},e.id))})},a={parameters:{docs:{description:{story:'Open question for product: the part is unused, so should it stay in the design system? A long name is cut to one line. The rate text is plain copy, here "X%" or the fixture value.'}}},render:()=>{const e={id:"long",name:"Reliance Digital Electronics Superstore",logo:"🖥",placeholderColor:"violet",rate:"X%"},n={id:"zero",name:"Foxtale",logo:"🧴",placeholderColor:"sky",rate:"0%"};return r.jsxs(r.Fragment,{children:[r.jsx(l,{children:"long name"}),r.jsx(i,{partner:e,onPress:()=>{}}),r.jsx(l,{children:"rate 0%"}),r.jsx(i,{partner:n,onPress:()=>{}})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One tile per placeholderColor key: saffron, cobalt, fern, violet, sky, rose. The rates here come from the fixture file.'
      }
    }
  },
  decorators: [Story => <View style={{
    width: 360
  }}><Story /></View>],
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[12]
  }}>
      {SAMPLE_PARTNERS.map((m, i) => <View key={m.id} style={{
      width: 168,
      gap: spacing[4]
    }}>
          <Label>{\`placeholderColor="\${COLORS[i]}"\`}</Label>
          <PartnerCard partner={m} onPress={() => {}} />
        </View>)}
    </View>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question for product: the part is unused, so should it stay in the design system? A long name is cut to one line. The rate text is plain copy, here "X%" or the fixture value.'
      }
    }
  },
  render: () => {
    const long: PartnerModel = {
      id: 'long',
      name: 'Reliance Digital Electronics Superstore',
      logo: '🖥',
      placeholderColor: 'violet',
      rate: 'X%'
    };
    const zero: PartnerModel = {
      id: 'zero',
      name: 'Foxtale',
      logo: '🧴',
      placeholderColor: 'sky',
      rate: '0%'
    };
    return <>
        <Label>long name</Label>
        <PartnerCard partner={long} onPress={() => {}} />
        <Label>rate 0%</Label>
        <PartnerCard partner={zero} onPress={() => {}} />
      </>;
  }
}`,...a.parameters?.docs?.source}}};const pr=["Playground","Variants","States"];export{o as Playground,a as States,t as Variants,pr as __namedExportsOrder,lr as default};
