import{j as e,V as s}from"./iframe-EJmZd_T6.js";import{B as r,a as m}from"./BrandLogo-Cr22hXoS.js";import{S as g,B as c}from"./_chrome-B1UVqLGg.js";import{i as o}from"./index-DCss3D-b.js";import{s as p}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const l={flexDirection:"row",flexWrap:"wrap",gap:p[8],paddingHorizontal:p[16]},ne={title:"Components/Media/BrandLogo",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/molecules/BrandLogo.tsx",docs:{description:{component:"A 104 by 48 bordered chip with a contained 74 by 32 logo; becomes a button when onPress is set. BrandLogoGrid lays out one chip for each image in a collection."}}},argTypes:{source:{control:!1},onPress:{control:!1,description:"When set, the chip is a button."},accessibilityLabel:{control:"text",description:'Brand name for screen readers. Default "Brand logo".'},style:{control:!1}},args:{source:o.brands.ajio,accessibilityLabel:"Ajio"}},a={},t={render:()=>e.jsxs(g,{width:420,children:[e.jsx(c,{label:"Static chip (no onPress)",children:e.jsx(s,{style:l,children:e.jsx(r,{source:o.brands.amazon,accessibilityLabel:"Amazon"})})}),e.jsx(c,{label:"Pressable chip (onPress set)",children:e.jsx(s,{style:l,children:e.jsx(r,{source:o.brands.flipkart,accessibilityLabel:"Flipkart",onPress:()=>{}})})})]})},i={parameters:{docs:{description:{story:"Open question: there is no pressed style and no error fallback. A failed image leaves an empty chip (RemoteImage only retries CashKaro hosts)."}}},render:()=>e.jsxs(g,{width:420,children:[e.jsx(c,{label:"Store art instead of a brand tile",children:e.jsxs(s,{style:l,children:[e.jsx(r,{source:o.stores.sbicard,accessibilityLabel:"SBI Card"}),e.jsx(r,{source:o.stores.tatamg,accessibilityLabel:"Tata MG"})]})}),e.jsx(c,{label:"Broken source (inline data URI): empty chip",children:e.jsx(s,{style:l,children:e.jsx(r,{source:{uri:"data:image/png;base64,AAAA"}})})})]})},n={name:"BrandLogoGrid: brands",parameters:{layout:"padded",docs:{description:{story:"BrandLogoGrid renders every entry of images.brands by default. Add a logo with one line in src/assets/images/index.ts."}}},render:()=>e.jsx(s,{style:{width:460},children:e.jsx(m,{})})},d={name:"BrandLogoGrid: stores",parameters:{layout:"padded",docs:{description:{story:"Pass Object.values(images.stores) for store and partner logos. Brands and stores are never mixed in one grid."}}},render:()=>e.jsx(s,{style:{width:460},children:e.jsx(m,{logos:Object.values(o.stores),onLogoPress:()=>{}})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
