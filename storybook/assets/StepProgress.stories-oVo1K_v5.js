import{j as e,V as l,c as p}from"./iframe-BxRbKpJi.js";import{T as m}from"./Text-Ck5O8Bhy.js";import{S as t}from"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as n}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const se={title:"Components/Steppers/StepProgress",component:t,tags:["autodocs","live"],parameters:{source:"src/atoms/StepProgress.tsx",docs:{description:{component:'A determinate progress bar with an optional label and a "2 of 6" count. No steps are drawn.'}}},decorators:[i=>e.jsx(l,{style:{width:340},children:e.jsx(i,{})})],argTypes:{value:{control:{type:"number",min:0,max:10,step:1}},total:{control:{type:"number",min:0,max:10,step:1}},label:{control:"text"},showCount:{control:"boolean"},tone:{control:"inline-radio",options:["accent","success"]}},args:{value:2,total:6,label:"Your spends",showCount:!0,tone:"accent"}},s={},o=({title:i,children:c})=>e.jsxs(l,{style:{gap:n[4]},children:[e.jsx(m,{variant:"body12Medium",color:p.text.secondary,children:i}),c]}),a={render:()=>e.jsxs(l,{style:{width:340,gap:n[20]},children:[e.jsx(o,{title:"tone accent",children:e.jsx(t,{value:3,total:6,label:"Step 3",tone:"accent"})}),e.jsx(o,{title:"tone success",children:e.jsx(t,{value:3,total:6,label:"Step 3",tone:"success"})}),e.jsx(o,{title:"no label",children:e.jsx(t,{value:3,total:6})}),e.jsx(o,{title:"no count",children:e.jsx(t,{value:3,total:6,label:"Spend questions",showCount:!1})})]})},r={parameters:{docs:{description:{story:"The fill animates with reanimated (width as a percentage). Value is clamped to 0..total and total 0 gives an empty bar, shown below. Check the fill width on web: it needs the reanimated web build."}}},render:()=>e.jsxs(l,{style:{width:340,gap:n[20]},children:[e.jsx(o,{title:"0 of 6",children:e.jsx(t,{value:0,total:6,label:"Not started"})}),e.jsx(o,{title:"6 of 6, success",children:e.jsx(t,{value:6,total:6,label:"Done",tone:"success"})}),e.jsx(o,{title:"value above total (clamped to 6 of 6)",children:e.jsx(t,{value:9,total:6})}),e.jsx(o,{title:"total 0 (empty bar)",children:e.jsx(t,{value:2,total:0})}),e.jsx(o,{title:"long label",children:e.jsx(t,{value:2,total:5,label:"Tell us your monthly spends on groceries, fuel, dining and travel so we can rank cards"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
