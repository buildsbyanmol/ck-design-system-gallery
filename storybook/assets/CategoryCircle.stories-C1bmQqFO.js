import{j as o,V as a}from"./iframe-EJmZd_T6.js";import{C as e}from"./CategoryCircle-Bh_wNAa8.js";import{S as p,B as s}from"./_chrome-B1UVqLGg.js";import{s as r}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const d=["saffron","cobalt","fern","violet","sky","rose"],to={title:"Components/Carousels/CategoryCircle",component:e,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/molecules/CategoryCircle.tsx",docs:{description:{component:"A round tinted disc with an emoji over a two-line label. Not used by any screen today: CategoryTiles replaced it on Home, and Offers has its own strip."}}},argTypes:{label:{control:"text"},icon:{control:"text",description:"An emoji."},placeholderColor:{control:"select",options:d},size:{control:{type:"number",min:40,max:96},description:"Disc diameter. Default 64."},onPress:{control:!1},style:{control:!1}},args:{label:"Fuel",icon:"⛽",placeholderColor:"saffron",size:64,onPress:()=>{}}},l={},i={render:()=>o.jsxs(p,{width:520,children:[o.jsx(s,{label:"placeholderColor: saffron, cobalt, fern, violet, sky, rose",children:o.jsx(a,{style:{flexDirection:"row",gap:r[12],paddingHorizontal:r[16]},children:d.map((n,c)=>o.jsx(e,{label:["Fuel","Travel","Grocery","Dining","Shopping","Bills"][c],icon:["⛽","✈️","🛒","🍽️","🛍️","💡"][c],placeholderColor:n},n))})}),o.jsx(s,{label:"size 48, 64 (default), 80",children:o.jsxs(a,{style:{flexDirection:"row",gap:r[12],paddingHorizontal:r[16]},children:[o.jsx(e,{label:"Fuel",icon:"⛽",size:48}),o.jsx(e,{label:"Fuel",icon:"⛽"}),o.jsx(e,{label:"Fuel",icon:"⛽",size:80})]})})]})},t={render:()=>o.jsxs(p,{width:520,children:[o.jsx(s,{label:"Long label (two lines, then clipped)",children:o.jsx(a,{style:{paddingHorizontal:r[16]},children:o.jsx(e,{label:"Online Food Ordering and Delivery",icon:"🍔",placeholderColor:"rose"})})}),o.jsx(s,{label:"No onPress (still announces as a button)",children:o.jsx(a,{style:{paddingHorizontal:r[16]},children:o.jsx(e,{label:"Bills",icon:"💡",placeholderColor:"sky"})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={520}>
      <Block label="placeholderColor: saffron, cobalt, fern, violet, sky, rose">
        <View style={{
        flexDirection: 'row',
        gap: spacing[12],
        paddingHorizontal: spacing[16]
      }}>
          {COLORS.map((c, i) => <CategoryCircle key={c} label={['Fuel', 'Travel', 'Grocery', 'Dining', 'Shopping', 'Bills'][i]} icon={['⛽', '✈️', '\\u{1F6D2}', '\\u{1F37D}️', '\\u{1F6CD}️', '\\u{1F4A1}'][i]} placeholderColor={c} />)}
        </View>
      </Block>
      <Block label="size 48, 64 (default), 80">
        <View style={{
        flexDirection: 'row',
        gap: spacing[12],
        paddingHorizontal: spacing[16]
      }}>
          <CategoryCircle label="Fuel" icon={'⛽'} size={48} />
          <CategoryCircle label="Fuel" icon={'⛽'} />
          <CategoryCircle label="Fuel" icon={'⛽'} size={80} />
        </View>
      </Block>
    </Stack>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={520}>
      <Block label="Long label (two lines, then clipped)">
        <View style={{
        paddingHorizontal: spacing[16]
      }}><CategoryCircle label="Online Food Ordering and Delivery" icon={'\\u{1F354}'} placeholderColor="rose" /></View>
      </Block>
      <Block label="No onPress (still announces as a button)">
        <View style={{
        paddingHorizontal: spacing[16]
      }}><CategoryCircle label="Bills" icon={'\\u{1F4A1}'} placeholderColor="sky" /></View>
      </Block>
    </Stack>
}`,...t.parameters?.docs?.source}}};const ao=["Playground","Variants","States"];export{l as Playground,t as States,i as Variants,ao as __namedExportsOrder,to as default};
