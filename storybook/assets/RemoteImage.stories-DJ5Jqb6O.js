import{c as d,j as e,V as i}from"./iframe-DK2xttIN.js";import{R as o}from"./StepIndicator-ysgTNStF.js";import{S as p,B as n}from"./_chrome-iej18qaj.js";import{i as l}from"./index-DCss3D-b.js";import{b as h,r as g,s as c}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./Text-Czhgaopg.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const r={width:160,height:96,borderRadius:g.md,borderWidth:h.thin,borderColor:d.border.default,backgroundColor:d.surface.default},ne={title:"Components/Media/RemoteImage",component:o,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/RemoteImage.tsx",docs:{description:{component:"A drop-in Image that retries once on the other CashKaro asset host when a store image fails to load. Local images behave exactly like Image."}}},argTypes:{source:{control:!1},resizeMode:{control:"inline-radio",options:["cover","contain","stretch","center"]},style:{control:!1},onError:{control:!1}},args:{source:l.brands.amazon,resizeMode:"contain",style:r}},t={},s={parameters:{docs:{description:{story:"Local assets only: the stories make no network call. The host retry (asset11 and asset21 swap) only runs for CashKaro URLs, so it is not shown here."}}},render:()=>e.jsx(p,{width:420,children:["contain","cover","stretch","center"].map(m=>e.jsx(n,{label:`resizeMode: ${m}`,children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.brands.myntra,resizeMode:m,style:r})})},m))})},a={parameters:{docs:{description:{story:"Open question: when the retry also fails the component calls onError and renders nothing, so the parent must supply its own fallback (BrandLogoTile swaps in the Cards.xtra mark). A broken local source here shows an empty box."}}},render:()=>e.jsxs(p,{width:420,children:[e.jsx(n,{label:"Local brand logo",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.brands.flipkart,resizeMode:"contain",style:r})})}),e.jsx(n,{label:"Local card art",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.cards.hdfcSwiggy,resizeMode:"contain",style:r})})}),e.jsx(n,{label:"Broken source (inline data URI, no network): empty",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:{uri:"data:image/png;base64,AAAA"},style:r})})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Local assets only: the stories make no network call. The host retry (asset11 and asset21 swap) only runs for CashKaro URLs, so it is not shown here.'
      }
    }
  },
  render: () => <Stack width={420}>
      {(['contain', 'cover', 'stretch', 'center'] as const).map(m => <Block key={m} label={\`resizeMode: \${m}\`}>
          <View style={{
        paddingHorizontal: spacing[16]
      }}><RemoteImage source={images.brands.myntra} resizeMode={m} style={box} /></View>
        </Block>)}
    </Stack>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: when the retry also fails the component calls onError and renders nothing, so the parent must supply its own fallback (BrandLogoTile swaps in the Cards.xtra mark). A broken local source here shows an empty box.'
      }
    }
  },
  render: () => <Stack width={420}>
      <Block label="Local brand logo"><View style={{
        paddingHorizontal: spacing[16]
      }}><RemoteImage source={images.brands.flipkart} resizeMode="contain" style={box} /></View></Block>
      <Block label="Local card art"><View style={{
        paddingHorizontal: spacing[16]
      }}><RemoteImage source={images.cards.hdfcSwiggy} resizeMode="contain" style={box} /></View></Block>
      <Block label="Broken source (inline data URI, no network): empty"><View style={{
        paddingHorizontal: spacing[16]
      }}><RemoteImage source={{
          uri: 'data:image/png;base64,AAAA'
        }} style={box} /></View></Block>
    </Stack>
}`,...a.parameters?.docs?.source}}};const ce=["Playground","Variants","States"];export{t as Playground,a as States,s as Variants,ce as __namedExportsOrder,ne as default};
