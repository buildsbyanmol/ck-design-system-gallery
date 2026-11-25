import{j as r,V as s}from"./iframe-DK2xttIN.js";import{P as i}from"./PartnerCard-Ny9V1xMi.js";import{L as l,F as c}from"./_shared-DTtNh5Zn.js";import{s as p}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./cards-Bc9fBrua.js";const m=[{id:"amazon",name:"Amazon",logo:"🛍",placeholderColor:"saffron",rate:"5%"},{id:"flipkart",name:"Flipkart",logo:"📦",placeholderColor:"cobalt",rate:"4%"},{id:"reliance-digital",name:"Reliance Digital",logo:"🖥",placeholderColor:"violet",rate:"4%"},{id:"ajio",name:"Ajio",logo:"👕",placeholderColor:"rose",rate:"4%"},{id:"foxtale",name:"Foxtale",logo:"🧴",placeholderColor:"sky",rate:"4%"},{id:"times-prime",name:"Times Prime",logo:"⭐",placeholderColor:"fern",rate:"4%"}],d=m[0],h=["saffron","cobalt","fern","violet","sky","rose"],lr={title:"Components/Cards/PartnerCard",component:i,tags:["autodocs","live"],decorators:[e=>r.jsx(c,{children:r.jsx(s,{style:{width:170},children:r.jsx(e,{})})})],parameters:{source:"src/molecules/PartnerCard.tsx",docs:{description:{component:'UNUSED today: no screen renders it. A cell for a 2 column offers grid: logo box and name, a picture box, and a full width "Shop & Earn" button. Logo and picture are coloured placeholders with an emoji. Fixture: SAMPLE_PARTNERS in src/data/partners.ts.'}}},argTypes:{partner:{control:"object"},onPress:{control:!1},style:{control:!1}},args:{partner:d,onPress:()=>{}}},o={},t={parameters:{docs:{description:{story:"One tile per placeholderColor key: saffron, cobalt, fern, violet, sky, rose. The rates here come from the fixture file."}}},decorators:[e=>r.jsx(s,{style:{width:360},children:r.jsx(e,{})})],render:()=>r.jsx(s,{style:{flexDirection:"row",flexWrap:"wrap",gap:p[12]},children:m.map((e,n)=>r.jsxs(s,{style:{width:168,gap:p[4]},children:[r.jsx(l,{children:`placeholderColor="${h[n]}"`}),r.jsx(i,{partner:e,onPress:()=>{}})]},e.id))})},a={parameters:{docs:{description:{story:'Open question for product: the part is unused, so should it stay in the design system? A long name is cut to one line. The rate text is plain copy, here "X%" or the fixture value.'}}},render:()=>{const e={id:"long",name:"Reliance Digital Electronics Superstore",logo:"🖥",placeholderColor:"violet",rate:"X%"},n={id:"zero",name:"Foxtale",logo:"🧴",placeholderColor:"sky",rate:"0%"};return r.jsxs(r.Fragment,{children:[r.jsx(l,{children:"long name"}),r.jsx(i,{partner:e,onPress:()=>{}}),r.jsx(l,{children:"rate 0%"}),r.jsx(i,{partner:n,onPress:()=>{}})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
