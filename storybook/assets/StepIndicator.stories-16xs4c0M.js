import{j as e,V as s,c as l}from"./iframe-EJmZd_T6.js";import{a as r}from"./StepIndicator-Cre4iz30.js";import{T as g}from"./Text-CwaPBD6t.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{i as p}from"./index-DCss3D-b.js";import{s as n}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const m=["done","current","locked","info","footprints","cashback","image"],ae={title:"Components/Steppers/StepIndicator",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/StepIndicator.tsx",docs:{description:{component:"The marker at the start of a step: done, current, locked, info, footprints, cashback or an image."}}},argTypes:{kind:{control:"select",options:m},image:{control:!1,description:"Required for kind image. Any ImageSourcePropType."}},args:{kind:"current",image:p.brands.amazon}},o={},c=({label:t,children:d})=>e.jsxs(s,{style:{alignItems:"center",gap:n[8],minWidth:72},children:[d,e.jsx(g,{variant:"body12Medium",color:l.text.secondary,children:t})]}),i={render:()=>e.jsx(s,{style:{flexDirection:"row",flexWrap:"wrap",gap:n[16],alignItems:"flex-end",maxWidth:420},children:m.map(t=>e.jsx(c,{label:t,children:e.jsx(r,{kind:t,image:p.brands.flipkart})},t))})},a={parameters:{docs:{description:{story:"A path of three steps (done, current, locked) and the edge case of kind image with no image set (an empty 56 px frame). The footprints marker draws a small dot: the shoe-prints glyph is not built (see the source header)."}}},render:()=>e.jsxs(s,{style:{gap:n[16]},children:[e.jsxs(s,{style:{flexDirection:"row",gap:n[16],alignItems:"center"},children:[e.jsx(r,{kind:"done"}),e.jsx(r,{kind:"current"}),e.jsx(r,{kind:"locked"})]}),e.jsx(c,{label:"image, no source",children:e.jsx(r,{kind:"image"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
