import{j as e,V as i,r as p}from"./iframe-DK2xttIN.js";import{T as s}from"./Toast-D7ijkSGP.js";import{T as h}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import{B as f}from"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s as l}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./index-mJl4hEuB.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const u=["brand","gray","success","warning","error","info","sky","rose","purple"],le={title:"Components/Messages and tooltips/Toast",component:s,tags:["autodocs","live"],parameters:{source:"src/molecules/Toast.tsx",docs:{description:{component:"A compact transient feedback row. The screen shows it with local state and hides it with a timer (about 3 s in the app)."}}},argTypes:{tone:{control:"select",options:u},icon:{control:"select",options:[void 0,"check-circle-outline","message-outline","clock-outline","desc-exclamation"]},action:{control:"select",options:["none","single"]},message:{control:"text"},actionLabel:{control:"text"},onActionPress:{control:!1},onDismiss:{control:!1}},args:{tone:"success",icon:"check-circle-outline",message:"Excel downloaded to your phone",action:"none",actionLabel:"Undo"},decorators:[o=>e.jsx(i,{style:{width:360},children:e.jsx(o,{})})]},t=({children:o})=>e.jsx(h,{variant:"body12Medium",style:{marginBottom:l[4],marginTop:l[12]},children:o});function w(){const[o,d]=p.useState(!1),n=p.useRef(null);p.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]);const g=()=>{d(!0),n.current&&clearTimeout(n.current),n.current=setTimeout(()=>d(!1),3e3)};return e.jsxs(i,{style:{width:360,gap:l[12]},children:[e.jsx(f,{label:"Download PDF",variant:"solid",tone:"main",size:44,onPress:g}),e.jsx(i,{style:{height:48},children:o?e.jsx(s,{tone:"success",icon:"check-circle-outline",message:"PDF downloaded for request CKORDER0001"}):null})]})}const r={},a={name:"Triggered (3 s)",parameters:{docs:{description:{story:"Press the button. The toast shows for 3 s and then hides. This is the app behaviour on the payment history details screen."}}},render:()=>e.jsx(w,{})},c={render:()=>e.jsxs(i,{style:{width:360},children:[e.jsx(t,{children:"action: none"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Link copied"}),e.jsx(t,{children:"action: single"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Card removed from compare",action:"single",actionLabel:"Undo"}),e.jsx(t,{children:"with dismiss"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Link copied",onDismiss:()=>{}}),e.jsx(t,{children:"action and dismiss"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Card removed from compare",action:"single",actionLabel:"Undo",onDismiss:()=>{}}),e.jsx(t,{children:"without icon"}),e.jsx(s,{tone:"info",message:"Link copied"})]})},m={parameters:{docs:{description:{story:"All nine tones, long text (wraps, no line limit) and a large rupee amount."}}},render:()=>e.jsxs(i,{style:{width:360,gap:l[8]},children:[u.map(o=>e.jsx(s,{tone:o,icon:"message-outline",message:`Tone ${o}`,action:"single",actionLabel:"Undo",onDismiss:()=>{}},o)),e.jsx(s,{tone:"success",icon:"check-circle-outline",message:"₹1,00,000 withdrawal requested to the bank account ending 4321. You will get a confirmation on the app and by SMS once the payout is done.",action:"single",actionLabel:"Track",onDismiss:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Triggered (3 s)',
  parameters: {
    docs: {
      description: {
        story: 'Press the button. The toast shows for 3 s and then hides. This is the app behaviour on the payment history details screen.'
      }
    }
  },
  render: () => <Triggered />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 360
  }}>
      <Label>action: none</Label>
      <Toast tone="info" icon="message-outline" message="Link copied" />
      <Label>action: single</Label>
      <Toast tone="info" icon="message-outline" message="Card removed from compare" action="single" actionLabel="Undo" />
      <Label>with dismiss</Label>
      <Toast tone="info" icon="message-outline" message="Link copied" onDismiss={() => {}} />
      <Label>action and dismiss</Label>
      <Toast tone="info" icon="message-outline" message="Card removed from compare" action="single" actionLabel="Undo" onDismiss={() => {}} />
      <Label>without icon</Label>
      <Toast tone="info" message="Link copied" />
    </View>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All nine tones, long text (wraps, no line limit) and a large rupee amount.'
      }
    }
  },
  render: () => <View style={{
    width: 360,
    gap: spacing[8]
  }}>
      {TONES.map(t => <Toast key={t} tone={t} icon="message-outline" message={\`Tone \${t}\`} action="single" actionLabel="Undo" onDismiss={() => {}} />)}
      <Toast tone="success" icon="check-circle-outline" message="₹1,00,000 withdrawal requested to the bank account ending 4321. You will get a confirmation on the app and by SMS once the payout is done." action="single" actionLabel="Track" onDismiss={() => {}} />
    </View>
}`,...m.parameters?.docs?.source}}};const pe=["Playground","Triggered3s","Variants","States"];export{r as Playground,m as States,a as Triggered3s,c as Variants,pe as __namedExportsOrder,le as default};
