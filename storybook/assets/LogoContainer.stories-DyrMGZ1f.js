import{j as r,V as i}from"./iframe-DK2xttIN.js";import{L as o}from"./StepIndicator-ysgTNStF.js";import{S as c,B as n}from"./_chrome-iej18qaj.js";import{i as a}from"./index-DCss3D-b.js";import{s as p}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./Text-Czhgaopg.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const m={flexDirection:"row",flexWrap:"wrap",gap:p[8],paddingHorizontal:p[16]},ar={title:"Components/Media/LogoContainer",component:o,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/LogoContainer.tsx",docs:{description:{component:"A fixed 80 by 48 framed logo with a contained 56 by 24 image, used at the left of order rows and order cards."}}},argTypes:{source:{control:!1},style:{control:!1}},args:{source:a.brands.myntra}},e={},t={render:()=>r.jsx(c,{width:420,children:r.jsx(n,{label:"Brand logos (fixed size, no size prop)",children:r.jsx(i,{style:m,children:Object.entries(a.brands).slice(0,8).map(([l,d])=>r.jsx(o,{source:d},l))})})})},s={parameters:{docs:{description:{story:"Open question: unlike BrandLogoTile there is no error fallback. A logo that fails to load leaves an empty frame."}}},render:()=>r.jsxs(c,{width:420,children:[r.jsx(n,{label:"Wide store art (contained in 56 by 24)",children:r.jsxs(i,{style:m,children:[r.jsx(o,{source:a.stores.amazon2}),r.jsx(o,{source:a.stores.myntra31})]})}),r.jsx(n,{label:"Broken source (inline data URI): empty frame",children:r.jsx(i,{style:m,children:r.jsx(o,{source:{uri:"data:image/png;base64,AAAA"}})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
