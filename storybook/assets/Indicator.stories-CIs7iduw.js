import{j as r,V as a,c}from"./iframe-BxRbKpJi.js";import{I as t}from"./StepIndicator-QGdoZiTE.js";import{S as p,B as o}from"./_chrome-DBrYcJuA.js";import{r as g,s}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./Text-Ck5O8Bhy.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const ir={title:"Components/Carousels/Indicator",component:t,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/Indicator.tsx",docs:{description:{component:"Shows where you are in a sideways row: step dots, a sliding scroll thumb, or timed story bars."}}},argTypes:{variant:{control:"inline-radio",options:["steps","scroll","progress"]},total:{control:{type:"number",min:1,max:12},description:"steps and progress: number of dots or bars."},active:{control:{type:"number",min:0,max:11},description:"steps and progress: 0-based active index."},progress:{control:{type:"range",min:0,max:1,step:.05},description:"scroll only: 0 to 1 along the track."},durationMs:{control:"number",description:"progress only: fill time of the active bar. 0 fills at once."},style:{control:!1}},args:{variant:"steps",total:4,active:1,progress:.5,durationMs:3e3}},e={decorators:[(l,m)=>r.jsx(a,{style:{width:320,padding:s[24],alignItems:"center",borderRadius:g.xl,backgroundColor:m.args.variant==="progress"?c.surface.dark:c.surface.default},children:r.jsx(l,{})})]},d=({children:l})=>r.jsx(a,{style:{marginHorizontal:s[16],padding:s[16],borderRadius:g.lg,backgroundColor:c.surface.dark},children:l}),i={render:()=>r.jsxs(p,{width:360,children:[r.jsx(o,{label:"steps: 4 dots, active 0",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:4,active:0})})}),r.jsx(o,{label:"steps: 4 dots, active 2",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:4,active:2})})}),r.jsx(o,{label:"scroll: progress 0",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:0})})}),r.jsx(o,{label:"scroll: progress 0.5",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:.5})})}),r.jsx(o,{label:"scroll: progress 1",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:1})})}),r.jsx(o,{label:"progress: bar 1 of 3 fills over 3 s (on a dark ground)",children:r.jsx(d,{children:r.jsx(t,{variant:"progress",total:3,active:1,durationMs:3e3})})}),r.jsx(o,{label:"progress: durationMs 0 (static position)",children:r.jsx(d,{children:r.jsx(t,{variant:"progress",total:3,active:1,durationMs:0})})})]})},n={render:()=>r.jsxs(p,{width:360,children:[r.jsx(o,{label:"steps: 1 dot",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:1,active:0})})}),r.jsx(o,{label:"steps: 12 dots, last active",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:12,active:11})})}),r.jsx(o,{label:"steps: active beyond total (no active dot)",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:4,active:7})})}),r.jsx(o,{label:"scroll: progress above 1 (clamped to the end)",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:1.5})})}),r.jsx(o,{label:"progress: first and last bar",children:r.jsx(d,{children:r.jsxs(a,{style:{gap:s[12]},children:[r.jsx(t,{variant:"progress",total:5,active:0,durationMs:0}),r.jsx(t,{variant:"progress",total:5,active:4,durationMs:0})]})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  decorators: [(Story, ctx) =>
  // The progress variant is white on translucent white, so it needs a dark ground.
  <View style={{
    width: 320,
    padding: spacing[24],
    alignItems: 'center',
    borderRadius: radius.xl,
    backgroundColor: ctx.args.variant === 'progress' ? colors.surface.dark : colors.surface.default
  }}>
      <Story />
    </View>]
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={360}>
      <Block label="steps: 4 dots, active 0"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="steps" total={4} active={0} /></View></Block>
      <Block label="steps: 4 dots, active 2"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="steps" total={4} active={2} /></View></Block>
      <Block label="scroll: progress 0"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="scroll" progress={0} /></View></Block>
      <Block label="scroll: progress 0.5"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="scroll" progress={0.5} /></View></Block>
      <Block label="scroll: progress 1"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="scroll" progress={1} /></View></Block>
      <Block label="progress: bar 1 of 3 fills over 3 s (on a dark ground)"><Dark><Indicator variant="progress" total={3} active={1} durationMs={3000} /></Dark></Block>
      <Block label="progress: durationMs 0 (static position)"><Dark><Indicator variant="progress" total={3} active={1} durationMs={0} /></Dark></Block>
    </Stack>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={360}>
      <Block label="steps: 1 dot"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="steps" total={1} active={0} /></View></Block>
      <Block label="steps: 12 dots, last active"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="steps" total={12} active={11} /></View></Block>
      <Block label="steps: active beyond total (no active dot)"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="steps" total={4} active={7} /></View></Block>
      <Block label="scroll: progress above 1 (clamped to the end)"><View style={{
        paddingHorizontal: spacing[16]
      }}><Indicator variant="scroll" progress={1.5} /></View></Block>
      <Block label="progress: first and last bar"><Dark><View style={{
          gap: spacing[12]
        }}><Indicator variant="progress" total={5} active={0} durationMs={0} /><Indicator variant="progress" total={5} active={4} durationMs={0} /></View></Dark></Block>
    </Stack>
}`,...n.parameters?.docs?.source}}};const nr=["Playground","Variants","States"];export{e as Playground,n as States,i as Variants,nr as __namedExportsOrder,ir as default};
