import{c as d,j as e,V as i}from"./iframe-EJmZd_T6.js";import{R as o}from"./StepIndicator-Cre4iz30.js";import{S as p,B as n}from"./_chrome-B1UVqLGg.js";import{i as l}from"./index-DCss3D-b.js";import{b as h,r as g,s as c}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./Text-CwaPBD6t.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const r={width:160,height:96,borderRadius:g.md,borderWidth:h.thin,borderColor:d.border.default,backgroundColor:d.surface.default},ne={title:"Components/Media/RemoteImage",component:o,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/RemoteImage.tsx",docs:{description:{component:"A drop-in Image that retries once on the other CashKaro asset host when a store image fails to load. Local images behave exactly like Image."}}},argTypes:{source:{control:!1},resizeMode:{control:"inline-radio",options:["cover","contain","stretch","center"]},style:{control:!1},onError:{control:!1}},args:{source:l.brands.amazon,resizeMode:"contain",style:r}},t={},s={parameters:{docs:{description:{story:"Local assets only: the stories make no network call. The host retry (asset11 and asset21 swap) only runs for CashKaro URLs, so it is not shown here."}}},render:()=>e.jsx(p,{width:420,children:["contain","cover","stretch","center"].map(m=>e.jsx(n,{label:`resizeMode: ${m}`,children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.brands.myntra,resizeMode:m,style:r})})},m))})},a={parameters:{docs:{description:{story:"Open question: when the retry also fails the component calls onError and renders nothing, so the parent must supply its own fallback (BrandLogoTile swaps in the Cards.xtra mark). A broken local source here shows an empty box."}}},render:()=>e.jsxs(p,{width:420,children:[e.jsx(n,{label:"Local brand logo",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.brands.flipkart,resizeMode:"contain",style:r})})}),e.jsx(n,{label:"Local card art",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:l.cards.hdfcSwiggy,resizeMode:"contain",style:r})})}),e.jsx(n,{label:"Broken source (inline data URI, no network): empty",children:e.jsx(i,{style:{paddingHorizontal:c[16]},children:e.jsx(o,{source:{uri:"data:image/png;base64,AAAA"},style:r})})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
