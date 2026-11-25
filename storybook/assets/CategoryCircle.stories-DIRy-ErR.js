import{j as o,V as a}from"./iframe-DK2xttIN.js";import{C as e}from"./CategoryCircle-Cc2y7IyX.js";import{S as p,B as s}from"./_chrome-iej18qaj.js";import{s as r}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const d=["saffron","cobalt","fern","violet","sky","rose"],to={title:"Components/Carousels/CategoryCircle",component:e,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/molecules/CategoryCircle.tsx",docs:{description:{component:"A round tinted disc with an emoji over a two-line label. Not used by any screen today: CategoryTiles replaced it on Home, and Offers has its own strip."}}},argTypes:{label:{control:"text"},icon:{control:"text",description:"An emoji."},placeholderColor:{control:"select",options:d},size:{control:{type:"number",min:40,max:96},description:"Disc diameter. Default 64."},onPress:{control:!1},style:{control:!1}},args:{label:"Fuel",icon:"⛽",placeholderColor:"saffron",size:64,onPress:()=>{}}},l={},i={render:()=>o.jsxs(p,{width:520,children:[o.jsx(s,{label:"placeholderColor: saffron, cobalt, fern, violet, sky, rose",children:o.jsx(a,{style:{flexDirection:"row",gap:r[12],paddingHorizontal:r[16]},children:d.map((n,c)=>o.jsx(e,{label:["Fuel","Travel","Grocery","Dining","Shopping","Bills"][c],icon:["⛽","✈️","🛒","🍽️","🛍️","💡"][c],placeholderColor:n},n))})}),o.jsx(s,{label:"size 48, 64 (default), 80",children:o.jsxs(a,{style:{flexDirection:"row",gap:r[12],paddingHorizontal:r[16]},children:[o.jsx(e,{label:"Fuel",icon:"⛽",size:48}),o.jsx(e,{label:"Fuel",icon:"⛽"}),o.jsx(e,{label:"Fuel",icon:"⛽",size:80})]})})]})},t={render:()=>o.jsxs(p,{width:520,children:[o.jsx(s,{label:"Long label (two lines, then clipped)",children:o.jsx(a,{style:{paddingHorizontal:r[16]},children:o.jsx(e,{label:"Online Food Ordering and Delivery",icon:"🍔",placeholderColor:"rose"})})}),o.jsx(s,{label:"No onPress (still announces as a button)",children:o.jsx(a,{style:{paddingHorizontal:r[16]},children:o.jsx(e,{label:"Bills",icon:"💡",placeholderColor:"sky"})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
