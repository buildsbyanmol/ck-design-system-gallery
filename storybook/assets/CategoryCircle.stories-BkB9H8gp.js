import{j as o,V as a}from"./iframe-BxRbKpJi.js";import{C as e}from"./CategoryCircle-Tr6Y7Ea8.js";import{S as p,B as s}from"./_chrome-DBrYcJuA.js";import{s as r}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const d=["saffron","cobalt","fern","violet","sky","rose"],to={title:"Components/Carousels/CategoryCircle",component:e,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/molecules/CategoryCircle.tsx",docs:{description:{component:"A round tinted disc with an emoji over a two-line label. Not used by any screen today: CategoryTiles replaced it on Home, and Offers has its own strip."}}},argTypes:{label:{control:"text"},icon:{control:"text",description:"An emoji."},placeholderColor:{control:"select",options:d},size:{control:{type:"number",min:40,max:96},description:"Disc diameter. Default 64."},onPress:{control:!1},style:{control:!1}},args:{label:"Fuel",icon:"⛽",placeholderColor:"saffron",size:64,onPress:()=>{}}},l={},i={render:()=>o.jsxs(p,{width:520,children:[o.jsx(s,{label:"placeholderColor: saffron, cobalt, fern, violet, sky, rose",children:o.jsx(a,{style:{flexDirection:"row",gap:r[12],paddingHorizontal:r[16]},children:d.map((n,c)=>o.jsx(e,{label:["Fuel","Travel","Grocery","Dining","Shopping","Bills"][c],icon:["⛽","✈️","🛒","🍽️","🛍️","💡"][c],placeholderColor:n},n))})}),o.jsx(s,{label:"size 48, 64 (default), 80",children:o.jsxs(a,{style:{flexDirection:"row",gap:r[12],paddingHorizontal:r[16]},children:[o.jsx(e,{label:"Fuel",icon:"⛽",size:48}),o.jsx(e,{label:"Fuel",icon:"⛽"}),o.jsx(e,{label:"Fuel",icon:"⛽",size:80})]})})]})},t={render:()=>o.jsxs(p,{width:520,children:[o.jsx(s,{label:"Long label (two lines, then clipped)",children:o.jsx(a,{style:{paddingHorizontal:r[16]},children:o.jsx(e,{label:"Online Food Ordering and Delivery",icon:"🍔",placeholderColor:"rose"})})}),o.jsx(s,{label:"No onPress (still announces as a button)",children:o.jsx(a,{style:{paddingHorizontal:r[16]},children:o.jsx(e,{label:"Bills",icon:"💡",placeholderColor:"sky"})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
