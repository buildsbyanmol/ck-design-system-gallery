import{j as r,V as i}from"./iframe-BxRbKpJi.js";import{L as o}from"./StepIndicator-QGdoZiTE.js";import{S as c,B as n}from"./_chrome-DBrYcJuA.js";import{i as a}from"./index-DCss3D-b.js";import{s as p}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./Text-Ck5O8Bhy.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const m={flexDirection:"row",flexWrap:"wrap",gap:p[8],paddingHorizontal:p[16]},ar={title:"Components/Media/LogoContainer",component:o,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/LogoContainer.tsx",docs:{description:{component:"A fixed 80 by 48 framed logo with a contained 56 by 24 image, used at the left of order rows and order cards."}}},argTypes:{source:{control:!1},style:{control:!1}},args:{source:a.brands.myntra}},e={},t={render:()=>r.jsx(c,{width:420,children:r.jsx(n,{label:"Brand logos (fixed size, no size prop)",children:r.jsx(i,{style:m,children:Object.entries(a.brands).slice(0,8).map(([l,d])=>r.jsx(o,{source:d},l))})})})},s={parameters:{docs:{description:{story:"Open question: unlike BrandLogoTile there is no error fallback. A logo that fails to load leaves an empty frame."}}},render:()=>r.jsxs(c,{width:420,children:[r.jsx(n,{label:"Wide store art (contained in 56 by 24)",children:r.jsxs(i,{style:m,children:[r.jsx(o,{source:a.stores.amazon2}),r.jsx(o,{source:a.stores.myntra31})]})}),r.jsx(n,{label:"Broken source (inline data URI): empty frame",children:r.jsx(i,{style:m,children:r.jsx(o,{source:{uri:"data:image/png;base64,AAAA"}})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
