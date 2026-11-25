import{c as d,j as e,V as i}from"./iframe-BxRbKpJi.js";import{R as o}from"./StepIndicator-QGdoZiTE.js";import{S as p,B as n}from"./_chrome-DBrYcJuA.js";import{i as l}from"./index-DCss3D-b.js";import{b as h,r as g,s as c}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./Text-Ck5O8Bhy.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const r={width:160,height:96,borderRadius:g.md,borderWidth:h.thin,borderColor:d.border.default,backgroundColor:d.surface.default},ne={title:"Components/Media/RemoteImage",component:o,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/RemoteImage.tsx",docs:{description:{component:"A drop-in Image that retries once on the other CashKaro asset host when a store image fails to load. Local images behave exactly like Image."}}},argTypes:{source:{control:!1},resizeMode:{control:"inline-radio",options:["cover","contain","stretch","center"]},style:{control:!1},onError:{control:!1}},args:{source:l.brands.amazon,resizeMode:"contain",style:r}},t={},s={parameters:{docs:{description:{story:"Local assets only: the stories make no network call. The host retry (asset11 and asset21 swap) only runs for CashKaro URLs, so it is not shown here."}}},render:()=>e.jsx(p,{width:420,children:["contain","cover","stretch","center"].map(m=>e.jsx(n,{label:`resizeMode: ${m}`,children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.brands.myntra,resizeMode:m,style:r})})},m))})},a={parameters:{docs:{description:{story:"Open question: when the retry also fails the component calls onError and renders nothing, so the parent must supply its own fallback (BrandLogoTile swaps in the Cards.xtra mark). A broken local source here shows an empty box."}}},render:()=>e.jsxs(p,{width:420,children:[e.jsx(n,{label:"Local brand logo",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.brands.flipkart,resizeMode:"contain",style:r})})}),e.jsx(n,{label:"Local card art",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.cards.hdfcSwiggy,resizeMode:"contain",style:r})})}),e.jsx(n,{label:"Broken source (inline data URI, no network): empty",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:{uri:"data:image/png;base64,AAAA"},style:r})})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
