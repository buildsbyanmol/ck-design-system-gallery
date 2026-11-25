import{j as e,V as s,c as l}from"./iframe-DK2xttIN.js";import{a as r}from"./StepIndicator-ysgTNStF.js";import{T as g}from"./Text-Czhgaopg.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{i as p}from"./index-DCss3D-b.js";import{s as n}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const m=["done","current","locked","info","footprints","cashback","image"],ae={title:"Components/Steppers/StepIndicator",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/StepIndicator.tsx",docs:{description:{component:"The marker at the start of a step: done, current, locked, info, footprints, cashback or an image."}}},argTypes:{kind:{control:"select",options:m},image:{control:!1,description:"Required for kind image. Any ImageSourcePropType."}},args:{kind:"current",image:p.brands.amazon}},o={},c=({label:t,children:d})=>e.jsxs(s,{style:{alignItems:"center",gap:n[8],minWidth:72},children:[d,e.jsx(g,{variant:"body12Medium",color:l.text.secondary,children:t})]}),i={render:()=>e.jsx(s,{style:{flexDirection:"row",flexWrap:"wrap",gap:n[16],alignItems:"flex-end",maxWidth:420},children:m.map(t=>e.jsx(c,{label:t,children:e.jsx(r,{kind:t,image:p.brands.flipkart})},t))})},a={parameters:{docs:{description:{story:"A path of three steps (done, current, locked) and the edge case of kind image with no image set (an empty 56 px frame). The footprints marker draws a small dot: the shoe-prints glyph is not built (see the source header)."}}},render:()=>e.jsxs(s,{style:{gap:n[16]},children:[e.jsxs(s,{style:{flexDirection:"row",gap:n[16],alignItems:"center"},children:[e.jsx(r,{kind:"done"}),e.jsx(r,{kind:"current"}),e.jsx(r,{kind:"locked"})]}),e.jsx(c,{label:"image, no source",children:e.jsx(r,{kind:"image"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[16],
    alignItems: 'flex-end',
    maxWidth: 420
  }}>
      {KINDS.map(k => <Cell key={k} label={k}><StepIndicator kind={k} image={images.brands.flipkart} /></Cell>)}
    </View>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A path of three steps (done, current, locked) and the edge case of kind image with no image set (an empty 56 px frame). The footprints marker draws a small dot: the shoe-prints glyph is not built (see the source header).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16]
  }}>
      <View style={{
      flexDirection: 'row',
      gap: spacing[16],
      alignItems: 'center'
    }}>
        <StepIndicator kind="done" /><StepIndicator kind="current" /><StepIndicator kind="locked" />
      </View>
      <Cell label="image, no source"><StepIndicator kind="image" /></Cell>
    </View>
}`,...a.parameters?.docs?.source}}};const se=["Playground","Variants","States"];export{o as Playground,a as States,i as Variants,se as __namedExportsOrder,ae as default};
