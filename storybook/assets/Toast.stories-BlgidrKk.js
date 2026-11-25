import{j as e,V as i,r as p}from"./iframe-BxRbKpJi.js";import{T as s}from"./Toast-cSX7M2TK.js";import{T as h}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import{B as f}from"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as l}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DEPmHYsu.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const u=["brand","gray","success","warning","error","info","sky","rose","purple"],le={title:"Components/Messages and tooltips/Toast",component:s,tags:["autodocs","live"],parameters:{source:"src/molecules/Toast.tsx",docs:{description:{component:"A compact transient feedback row. The screen shows it with local state and hides it with a timer (about 3 s in the app)."}}},argTypes:{tone:{control:"select",options:u},icon:{control:"select",options:[void 0,"check-circle-outline","message-outline","clock-outline","desc-exclamation"]},action:{control:"select",options:["none","single"]},message:{control:"text"},actionLabel:{control:"text"},onActionPress:{control:!1},onDismiss:{control:!1}},args:{tone:"success",icon:"check-circle-outline",message:"Excel downloaded to your phone",action:"none",actionLabel:"Undo"},decorators:[o=>e.jsx(i,{style:{width:360},children:e.jsx(o,{})})]},t=({children:o})=>e.jsx(h,{variant:"body12Medium",style:{marginBottom:l[4],marginTop:l[12]},children:o});function w(){const[o,d]=p.useState(!1),n=p.useRef(null);p.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]);const g=()=>{d(!0),n.current&&clearTimeout(n.current),n.current=setTimeout(()=>d(!1),3e3)};return e.jsxs(i,{style:{width:360,gap:l[12]},children:[e.jsx(f,{label:"Download PDF",variant:"solid",tone:"main",size:44,onPress:g}),e.jsx(i,{style:{height:48},children:o?e.jsx(s,{tone:"success",icon:"check-circle-outline",message:"PDF downloaded for request CKORDER0001"}):null})]})}const r={},a={name:"Triggered (3 s)",parameters:{docs:{description:{story:"Press the button. The toast shows for 3 s and then hides. This is the app behaviour on the payment history details screen."}}},render:()=>e.jsx(w,{})},c={render:()=>e.jsxs(i,{style:{width:360},children:[e.jsx(t,{children:"action: none"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Link copied"}),e.jsx(t,{children:"action: single"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Card removed from compare",action:"single",actionLabel:"Undo"}),e.jsx(t,{children:"with dismiss"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Link copied",onDismiss:()=>{}}),e.jsx(t,{children:"action and dismiss"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Card removed from compare",action:"single",actionLabel:"Undo",onDismiss:()=>{}}),e.jsx(t,{children:"without icon"}),e.jsx(s,{tone:"info",message:"Link copied"})]})},m={parameters:{docs:{description:{story:"All nine tones, long text (wraps, no line limit) and a large rupee amount."}}},render:()=>e.jsxs(i,{style:{width:360,gap:l[8]},children:[u.map(o=>e.jsx(s,{tone:o,icon:"message-outline",message:`Tone ${o}`,action:"single",actionLabel:"Undo",onDismiss:()=>{}},o)),e.jsx(s,{tone:"success",icon:"check-circle-outline",message:"₹1,00,000 withdrawal requested to the bank account ending 4321. You will get a confirmation on the app and by SMS once the payout is done.",action:"single",actionLabel:"Track",onDismiss:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
