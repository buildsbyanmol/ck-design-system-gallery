import{j as e,V as s}from"./iframe-DK2xttIN.js";import{B as r,a as m}from"./BrandLogo-C4MMBo3z.js";import{S as g,B as c}from"./_chrome-iej18qaj.js";import{i as o}from"./index-DCss3D-b.js";import{s as p}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const l={flexDirection:"row",flexWrap:"wrap",gap:p[8],paddingHorizontal:p[16]},ne={title:"Components/Media/BrandLogo",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/molecules/BrandLogo.tsx",docs:{description:{component:"A 104 by 48 bordered chip with a contained 74 by 32 logo; becomes a button when onPress is set. BrandLogoGrid lays out one chip for each image in a collection."}}},argTypes:{source:{control:!1},onPress:{control:!1,description:"When set, the chip is a button."},accessibilityLabel:{control:"text",description:'Brand name for screen readers. Default "Brand logo".'},style:{control:!1}},args:{source:o.brands.ajio,accessibilityLabel:"Ajio"}},a={},t={render:()=>e.jsxs(g,{width:420,children:[e.jsx(c,{label:"Static chip (no onPress)",children:e.jsx(s,{style:l,children:e.jsx(r,{source:o.brands.amazon,accessibilityLabel:"Amazon"})})}),e.jsx(c,{label:"Pressable chip (onPress set)",children:e.jsx(s,{style:l,children:e.jsx(r,{source:o.brands.flipkart,accessibilityLabel:"Flipkart",onPress:()=>{}})})})]})},i={parameters:{docs:{description:{story:"Open question: there is no pressed style and no error fallback. A failed image leaves an empty chip (RemoteImage only retries CashKaro hosts)."}}},render:()=>e.jsxs(g,{width:420,children:[e.jsx(c,{label:"Store art instead of a brand tile",children:e.jsxs(s,{style:l,children:[e.jsx(r,{source:o.stores.sbicard,accessibilityLabel:"SBI Card"}),e.jsx(r,{source:o.stores.tatamg,accessibilityLabel:"Tata MG"})]})}),e.jsx(c,{label:"Broken source (inline data URI): empty chip",children:e.jsx(s,{style:l,children:e.jsx(r,{source:{uri:"data:image/png;base64,AAAA"}})})})]})},n={name:"BrandLogoGrid: brands",parameters:{layout:"padded",docs:{description:{story:"BrandLogoGrid renders every entry of images.brands by default. Add a logo with one line in src/assets/images/index.ts."}}},render:()=>e.jsx(s,{style:{width:460},children:e.jsx(m,{})})},d={name:"BrandLogoGrid: stores",parameters:{layout:"padded",docs:{description:{story:"Pass Object.values(images.stores) for store and partner logos. Brands and stores are never mixed in one grid."}}},render:()=>e.jsx(s,{style:{width:460},children:e.jsx(m,{logos:Object.values(o.stores),onLogoPress:()=>{}})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={420}>
      <Block label="Static chip (no onPress)"><View style={row}><BrandLogo source={images.brands.amazon} accessibilityLabel="Amazon" /></View></Block>
      <Block label="Pressable chip (onPress set)"><View style={row}><BrandLogo source={images.brands.flipkart} accessibilityLabel="Flipkart" onPress={() => {}} /></View></Block>
    </Stack>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: there is no pressed style and no error fallback. A failed image leaves an empty chip (RemoteImage only retries CashKaro hosts).'
      }
    }
  },
  render: () => <Stack width={420}>
      <Block label="Store art instead of a brand tile"><View style={row}><BrandLogo source={images.stores.sbicard} accessibilityLabel="SBI Card" /><BrandLogo source={images.stores.tatamg} accessibilityLabel="Tata MG" /></View></Block>
      <Block label="Broken source (inline data URI): empty chip"><View style={row}><BrandLogo source={{
          uri: 'data:image/png;base64,AAAA'
        }} /></View></Block>
    </Stack>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'BrandLogoGrid: brands',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'BrandLogoGrid renders every entry of images.brands by default. Add a logo with one line in src/assets/images/index.ts.'
      }
    }
  },
  render: () => <View style={{
    width: 460
  }}><BrandLogoGrid /></View>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'BrandLogoGrid: stores',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Pass Object.values(images.stores) for store and partner logos. Brands and stores are never mixed in one grid.'
      }
    }
  },
  render: () => <View style={{
    width: 460
  }}><BrandLogoGrid logos={Object.values(images.stores)} onLogoPress={() => {}} /></View>
}`,...d.parameters?.docs?.source}}};const de=["Playground","Variants","States","Grid","GridStores"];export{n as Grid,d as GridStores,a as Playground,i as States,t as Variants,de as __namedExportsOrder,ne as default};
