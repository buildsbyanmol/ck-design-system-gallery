import{j as e,V as s}from"./iframe-BxRbKpJi.js";import{B as r,a as m}from"./BrandLogo-fhcJ2xNs.js";import{S as g,B as c}from"./_chrome-DBrYcJuA.js";import{i as o}from"./index-DCss3D-b.js";import{s as p}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const l={flexDirection:"row",flexWrap:"wrap",gap:p[8],paddingHorizontal:p[16]},ne={title:"Components/Media/BrandLogo",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/molecules/BrandLogo.tsx",docs:{description:{component:"A 104 by 48 bordered chip with a contained 74 by 32 logo; becomes a button when onPress is set. BrandLogoGrid lays out one chip for each image in a collection."}}},argTypes:{source:{control:!1},onPress:{control:!1,description:"When set, the chip is a button."},accessibilityLabel:{control:"text",description:'Brand name for screen readers. Default "Brand logo".'},style:{control:!1}},args:{source:o.brands.ajio,accessibilityLabel:"Ajio"}},a={},t={render:()=>e.jsxs(g,{width:420,children:[e.jsx(c,{label:"Static chip (no onPress)",children:e.jsx(s,{style:l,children:e.jsx(r,{source:o.brands.amazon,accessibilityLabel:"Amazon"})})}),e.jsx(c,{label:"Pressable chip (onPress set)",children:e.jsx(s,{style:l,children:e.jsx(r,{source:o.brands.flipkart,accessibilityLabel:"Flipkart",onPress:()=>{}})})})]})},i={parameters:{docs:{description:{story:"Open question: there is no pressed style and no error fallback. A failed image leaves an empty chip (RemoteImage only retries CashKaro hosts)."}}},render:()=>e.jsxs(g,{width:420,children:[e.jsx(c,{label:"Store art instead of a brand tile",children:e.jsxs(s,{style:l,children:[e.jsx(r,{source:o.stores.sbicard,accessibilityLabel:"SBI Card"}),e.jsx(r,{source:o.stores.tatamg,accessibilityLabel:"Tata MG"})]})}),e.jsx(c,{label:"Broken source (inline data URI): empty chip",children:e.jsx(s,{style:l,children:e.jsx(r,{source:{uri:"data:image/png;base64,AAAA"}})})})]})},n={name:"BrandLogoGrid: brands",parameters:{layout:"padded",docs:{description:{story:"BrandLogoGrid renders every entry of images.brands by default. Add a logo with one line in src/assets/images/index.ts."}}},render:()=>e.jsx(s,{style:{width:460},children:e.jsx(m,{})})},d={name:"BrandLogoGrid: stores",parameters:{layout:"padded",docs:{description:{story:"Pass Object.values(images.stores) for store and partner logos. Brands and stores are never mixed in one grid."}}},render:()=>e.jsx(s,{style:{width:460},children:e.jsx(m,{logos:Object.values(o.stores),onLogoPress:()=>{}})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
