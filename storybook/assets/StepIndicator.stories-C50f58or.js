import{j as e,V as s,c as l}from"./iframe-BxRbKpJi.js";import{a as r}from"./StepIndicator-QGdoZiTE.js";import{T as g}from"./Text-Ck5O8Bhy.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{i as p}from"./index-DCss3D-b.js";import{s as n}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const m=["done","current","locked","info","footprints","cashback","image"],ae={title:"Components/Steppers/StepIndicator",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/StepIndicator.tsx",docs:{description:{component:"The marker at the start of a step: done, current, locked, info, footprints, cashback or an image."}}},argTypes:{kind:{control:"select",options:m},image:{control:!1,description:"Required for kind image. Any ImageSourcePropType."}},args:{kind:"current",image:p.brands.amazon}},o={},c=({label:t,children:d})=>e.jsxs(s,{style:{alignItems:"center",gap:n[8],minWidth:72},children:[d,e.jsx(g,{variant:"body12Medium",color:l.text.secondary,children:t})]}),i={render:()=>e.jsx(s,{style:{flexDirection:"row",flexWrap:"wrap",gap:n[16],alignItems:"flex-end",maxWidth:420},children:m.map(t=>e.jsx(c,{label:t,children:e.jsx(r,{kind:t,image:p.brands.flipkart})},t))})},a={parameters:{docs:{description:{story:"A path of three steps (done, current, locked) and the edge case of kind image with no image set (an empty 56 px frame). The footprints marker draws a small dot: the shoe-prints glyph is not built (see the source header)."}}},render:()=>e.jsxs(s,{style:{gap:n[16]},children:[e.jsxs(s,{style:{flexDirection:"row",gap:n[16],alignItems:"center"},children:[e.jsx(r,{kind:"done"}),e.jsx(r,{kind:"current"}),e.jsx(r,{kind:"locked"})]}),e.jsx(c,{label:"image, no source",children:e.jsx(r,{kind:"image"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
