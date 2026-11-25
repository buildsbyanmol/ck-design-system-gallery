import{j as r,V as a,c}from"./iframe-DK2xttIN.js";import{I as t}from"./StepIndicator-ysgTNStF.js";import{S as p,B as o}from"./_chrome-iej18qaj.js";import{r as g,s}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./Text-Czhgaopg.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const ir={title:"Components/Carousels/Indicator",component:t,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/Indicator.tsx",docs:{description:{component:"Shows where you are in a sideways row: step dots, a sliding scroll thumb, or timed story bars."}}},argTypes:{variant:{control:"inline-radio",options:["steps","scroll","progress"]},total:{control:{type:"number",min:1,max:12},description:"steps and progress: number of dots or bars."},active:{control:{type:"number",min:0,max:11},description:"steps and progress: 0-based active index."},progress:{control:{type:"range",min:0,max:1,step:.05},description:"scroll only: 0 to 1 along the track."},durationMs:{control:"number",description:"progress only: fill time of the active bar. 0 fills at once."},style:{control:!1}},args:{variant:"steps",total:4,active:1,progress:.5,durationMs:3e3}},e={decorators:[(l,m)=>r.jsx(a,{style:{width:320,padding:s[24],alignItems:"center",borderRadius:g.xl,backgroundColor:m.args.variant==="progress"?c.surface.dark:c.surface.default},children:r.jsx(l,{})})]},d=({children:l})=>r.jsx(a,{style:{marginHorizontal:s[16],padding:s[16],borderRadius:g.lg,backgroundColor:c.surface.dark},children:l}),i={render:()=>r.jsxs(p,{width:360,children:[r.jsx(o,{label:"steps: 4 dots, active 0",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:4,active:0})})}),r.jsx(o,{label:"steps: 4 dots, active 2",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:4,active:2})})}),r.jsx(o,{label:"scroll: progress 0",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:0})})}),r.jsx(o,{label:"scroll: progress 0.5",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:.5})})}),r.jsx(o,{label:"scroll: progress 1",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:1})})}),r.jsx(o,{label:"progress: bar 1 of 3 fills over 3 s (on a dark ground)",children:r.jsx(d,{children:r.jsx(t,{variant:"progress",total:3,active:1,durationMs:3e3})})}),r.jsx(o,{label:"progress: durationMs 0 (static position)",children:r.jsx(d,{children:r.jsx(t,{variant:"progress",total:3,active:1,durationMs:0})})})]})},n={render:()=>r.jsxs(p,{width:360,children:[r.jsx(o,{label:"steps: 1 dot",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:1,active:0})})}),r.jsx(o,{label:"steps: 12 dots, last active",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:12,active:11})})}),r.jsx(o,{label:"steps: active beyond total (no active dot)",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"steps",total:4,active:7})})}),r.jsx(o,{label:"scroll: progress above 1 (clamped to the end)",children:r.jsx(a,{style:{paddingHorizontal:s[16]},children:r.jsx(t,{variant:"scroll",progress:1.5})})}),r.jsx(o,{label:"progress: first and last bar",children:r.jsx(d,{children:r.jsxs(a,{style:{gap:s[12]},children:[r.jsx(t,{variant:"progress",total:5,active:0,durationMs:0}),r.jsx(t,{variant:"progress",total:5,active:4,durationMs:0})]})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
