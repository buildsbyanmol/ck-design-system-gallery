import{j as r,V as s}from"./iframe-BxRbKpJi.js";import{P as i}from"./PartnerCard-DIzckGY3.js";import{L as l,F as c}from"./_shared-B6uq1mSV.js";import{s as p}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./cards-Bc9fBrua.js";const m=[{id:"amazon",name:"Amazon",logo:"🛍",placeholderColor:"saffron",rate:"5%"},{id:"flipkart",name:"Flipkart",logo:"📦",placeholderColor:"cobalt",rate:"4%"},{id:"reliance-digital",name:"Reliance Digital",logo:"🖥",placeholderColor:"violet",rate:"4%"},{id:"ajio",name:"Ajio",logo:"👕",placeholderColor:"rose",rate:"4%"},{id:"foxtale",name:"Foxtale",logo:"🧴",placeholderColor:"sky",rate:"4%"},{id:"times-prime",name:"Times Prime",logo:"⭐",placeholderColor:"fern",rate:"4%"}],d=m[0],h=["saffron","cobalt","fern","violet","sky","rose"],lr={title:"Components/Cards/PartnerCard",component:i,tags:["autodocs","live"],decorators:[e=>r.jsx(c,{children:r.jsx(s,{style:{width:170},children:r.jsx(e,{})})})],parameters:{source:"src/molecules/PartnerCard.tsx",docs:{description:{component:'UNUSED today: no screen renders it. A cell for a 2 column offers grid: logo box and name, a picture box, and a full width "Shop & Earn" button. Logo and picture are coloured placeholders with an emoji. Fixture: SAMPLE_PARTNERS in src/data/partners.ts.'}}},argTypes:{partner:{control:"object"},onPress:{control:!1},style:{control:!1}},args:{partner:d,onPress:()=>{}}},o={},t={parameters:{docs:{description:{story:"One tile per placeholderColor key: saffron, cobalt, fern, violet, sky, rose. The rates here come from the fixture file."}}},decorators:[e=>r.jsx(s,{style:{width:360},children:r.jsx(e,{})})],render:()=>r.jsx(s,{style:{flexDirection:"row",flexWrap:"wrap",gap:p[12]},children:m.map((e,n)=>r.jsxs(s,{style:{width:168,gap:p[4]},children:[r.jsx(l,{children:`placeholderColor="${h[n]}"`}),r.jsx(i,{partner:e,onPress:()=>{}})]},e.id))})},a={parameters:{docs:{description:{story:'Open question for product: the part is unused, so should it stay in the design system? A long name is cut to one line. The rate text is plain copy, here "X%" or the fixture value.'}}},render:()=>{const e={id:"long",name:"Reliance Digital Electronics Superstore",logo:"🖥",placeholderColor:"violet",rate:"X%"},n={id:"zero",name:"Foxtale",logo:"🧴",placeholderColor:"sky",rate:"0%"};return r.jsxs(r.Fragment,{children:[r.jsx(l,{children:"long name"}),r.jsx(i,{partner:e,onPress:()=>{}}),r.jsx(l,{children:"rate 0%"}),r.jsx(i,{partner:n,onPress:()=>{}})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
