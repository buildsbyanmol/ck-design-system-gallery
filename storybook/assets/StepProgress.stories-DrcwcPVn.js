import{j as e,V as l,c as p}from"./iframe-EJmZd_T6.js";import{T as m}from"./Text-CwaPBD6t.js";import{S as t}from"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as n}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const se={title:"Components/Steppers/StepProgress",component:t,tags:["autodocs","live"],parameters:{source:"src/atoms/StepProgress.tsx",docs:{description:{component:'A determinate progress bar with an optional label and a "2 of 6" count. No steps are drawn.'}}},decorators:[i=>e.jsx(l,{style:{width:340},children:e.jsx(i,{})})],argTypes:{value:{control:{type:"number",min:0,max:10,step:1}},total:{control:{type:"number",min:0,max:10,step:1}},label:{control:"text"},showCount:{control:"boolean"},tone:{control:"inline-radio",options:["accent","success"]}},args:{value:2,total:6,label:"Your spends",showCount:!0,tone:"accent"}},s={},o=({title:i,children:c})=>e.jsxs(l,{style:{gap:n[4]},children:[e.jsx(m,{variant:"body12Medium",color:p.text.secondary,children:i}),c]}),a={render:()=>e.jsxs(l,{style:{width:340,gap:n[20]},children:[e.jsx(o,{title:"tone accent",children:e.jsx(t,{value:3,total:6,label:"Step 3",tone:"accent"})}),e.jsx(o,{title:"tone success",children:e.jsx(t,{value:3,total:6,label:"Step 3",tone:"success"})}),e.jsx(o,{title:"no label",children:e.jsx(t,{value:3,total:6})}),e.jsx(o,{title:"no count",children:e.jsx(t,{value:3,total:6,label:"Spend questions",showCount:!1})})]})},r={parameters:{docs:{description:{story:"The fill animates with reanimated (width as a percentage). Value is clamped to 0..total and total 0 gives an empty bar, shown below. Check the fill width on web: it needs the reanimated web build."}}},render:()=>e.jsxs(l,{style:{width:340,gap:n[20]},children:[e.jsx(o,{title:"0 of 6",children:e.jsx(t,{value:0,total:6,label:"Not started"})}),e.jsx(o,{title:"6 of 6, success",children:e.jsx(t,{value:6,total:6,label:"Done",tone:"success"})}),e.jsx(o,{title:"value above total (clamped to 6 of 6)",children:e.jsx(t,{value:9,total:6})}),e.jsx(o,{title:"total 0 (empty bar)",children:e.jsx(t,{value:2,total:0})}),e.jsx(o,{title:"long label",children:e.jsx(t,{value:2,total:5,label:"Tell us your monthly spends on groceries, fuel, dining and travel so we can rank cards"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 340,
    gap: spacing[20]
  }}>
      <Block title="tone accent"><StepProgress value={3} total={6} label="Step 3" tone="accent" /></Block>
      <Block title="tone success"><StepProgress value={3} total={6} label="Step 3" tone="success" /></Block>
      <Block title="no label"><StepProgress value={3} total={6} /></Block>
      <Block title="no count"><StepProgress value={3} total={6} label="Spend questions" showCount={false} /></Block>
    </View>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The fill animates with reanimated (width as a percentage). Value is clamped to 0..total and total 0 gives an empty bar, shown below. Check the fill width on web: it needs the reanimated web build.'
      }
    }
  },
  render: () => <View style={{
    width: 340,
    gap: spacing[20]
  }}>
      <Block title="0 of 6"><StepProgress value={0} total={6} label="Not started" /></Block>
      <Block title="6 of 6, success"><StepProgress value={6} total={6} label="Done" tone="success" /></Block>
      <Block title="value above total (clamped to 6 of 6)"><StepProgress value={9} total={6} /></Block>
      <Block title="total 0 (empty bar)"><StepProgress value={2} total={0} /></Block>
      <Block title="long label"><StepProgress value={2} total={5} label="Tell us your monthly spends on groceries, fuel, dining and travel so we can rank cards" /></Block>
    </View>
}`,...r.parameters?.docs?.source}}};const ae=["Playground","Variants","States"];export{s as Playground,r as States,a as Variants,ae as __namedExportsOrder,se as default};
