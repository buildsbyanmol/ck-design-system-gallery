import{j as r,V as i}from"./iframe-EJmZd_T6.js";import{L as o}from"./StepIndicator-Cre4iz30.js";import{S as c,B as n}from"./_chrome-B1UVqLGg.js";import{i as a}from"./index-DCss3D-b.js";import{s as p}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./Text-CwaPBD6t.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const m={flexDirection:"row",flexWrap:"wrap",gap:p[8],paddingHorizontal:p[16]},ar={title:"Components/Media/LogoContainer",component:o,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/LogoContainer.tsx",docs:{description:{component:"A fixed 80 by 48 framed logo with a contained 56 by 24 image, used at the left of order rows and order cards."}}},argTypes:{source:{control:!1},style:{control:!1}},args:{source:a.brands.myntra}},e={},t={render:()=>r.jsx(c,{width:420,children:r.jsx(n,{label:"Brand logos (fixed size, no size prop)",children:r.jsx(i,{style:m,children:Object.entries(a.brands).slice(0,8).map(([l,d])=>r.jsx(o,{source:d},l))})})})},s={parameters:{docs:{description:{story:"Open question: unlike BrandLogoTile there is no error fallback. A logo that fails to load leaves an empty frame."}}},render:()=>r.jsxs(c,{width:420,children:[r.jsx(n,{label:"Wide store art (contained in 56 by 24)",children:r.jsxs(i,{style:m,children:[r.jsx(o,{source:a.stores.amazon2}),r.jsx(o,{source:a.stores.myntra31})]})}),r.jsx(n,{label:"Broken source (inline data URI): empty frame",children:r.jsx(i,{style:m,children:r.jsx(o,{source:{uri:"data:image/png;base64,AAAA"}})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={420}>
      <Block label="Brand logos (fixed size, no size prop)">
        <View style={row}>{Object.entries(images.brands).slice(0, 8).map(([k, src]) => <LogoContainer key={k} source={src} />)}</View>
      </Block>
    </Stack>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: unlike BrandLogoTile there is no error fallback. A logo that fails to load leaves an empty frame.'
      }
    }
  },
  render: () => <Stack width={420}>
      <Block label="Wide store art (contained in 56 by 24)"><View style={row}><LogoContainer source={images.stores.amazon2} /><LogoContainer source={images.stores.myntra31} /></View></Block>
      <Block label="Broken source (inline data URI): empty frame"><View style={row}><LogoContainer source={{
          uri: 'data:image/png;base64,AAAA'
        }} /></View></Block>
    </Stack>
}`,...s.parameters?.docs?.source}}};const ir=["Playground","Variants","States"];export{e as Playground,s as States,t as Variants,ir as __namedExportsOrder,ar as default};
