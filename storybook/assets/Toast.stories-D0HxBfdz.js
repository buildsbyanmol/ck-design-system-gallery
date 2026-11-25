import{j as e,V as i,r as p}from"./iframe-EJmZd_T6.js";import{T as s}from"./Toast-HuIOiDYF.js";import{T as h}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import{B as f}from"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as l}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./index-AjmY8xRX.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const u=["brand","gray","success","warning","error","info","sky","rose","purple"],le={title:"Components/Messages and tooltips/Toast",component:s,tags:["autodocs","live"],parameters:{source:"src/molecules/Toast.tsx",docs:{description:{component:"A compact transient feedback row. The screen shows it with local state and hides it with a timer (about 3 s in the app)."}}},argTypes:{tone:{control:"select",options:u},icon:{control:"select",options:[void 0,"check-circle-outline","message-outline","clock-outline","desc-exclamation"]},action:{control:"select",options:["none","single"]},message:{control:"text"},actionLabel:{control:"text"},onActionPress:{control:!1},onDismiss:{control:!1}},args:{tone:"success",icon:"check-circle-outline",message:"Excel downloaded to your phone",action:"none",actionLabel:"Undo"},decorators:[o=>e.jsx(i,{style:{width:360},children:e.jsx(o,{})})]},t=({children:o})=>e.jsx(h,{variant:"body12Medium",style:{marginBottom:l[4],marginTop:l[12]},children:o});function w(){const[o,d]=p.useState(!1),n=p.useRef(null);p.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]);const g=()=>{d(!0),n.current&&clearTimeout(n.current),n.current=setTimeout(()=>d(!1),3e3)};return e.jsxs(i,{style:{width:360,gap:l[12]},children:[e.jsx(f,{label:"Download PDF",variant:"solid",tone:"main",size:44,onPress:g}),e.jsx(i,{style:{height:48},children:o?e.jsx(s,{tone:"success",icon:"check-circle-outline",message:"PDF downloaded for request CKORDER0001"}):null})]})}const r={},a={name:"Triggered (3 s)",parameters:{docs:{description:{story:"Press the button. The toast shows for 3 s and then hides. This is the app behaviour on the payment history details screen."}}},render:()=>e.jsx(w,{})},c={render:()=>e.jsxs(i,{style:{width:360},children:[e.jsx(t,{children:"action: none"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Link copied"}),e.jsx(t,{children:"action: single"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Card removed from compare",action:"single",actionLabel:"Undo"}),e.jsx(t,{children:"with dismiss"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Link copied",onDismiss:()=>{}}),e.jsx(t,{children:"action and dismiss"}),e.jsx(s,{tone:"info",icon:"message-outline",message:"Card removed from compare",action:"single",actionLabel:"Undo",onDismiss:()=>{}}),e.jsx(t,{children:"without icon"}),e.jsx(s,{tone:"info",message:"Link copied"})]})},m={parameters:{docs:{description:{story:"All nine tones, long text (wraps, no line limit) and a large rupee amount."}}},render:()=>e.jsxs(i,{style:{width:360,gap:l[8]},children:[u.map(o=>e.jsx(s,{tone:o,icon:"message-outline",message:`Tone ${o}`,action:"single",actionLabel:"Undo",onDismiss:()=>{}},o)),e.jsx(s,{tone:"success",icon:"check-circle-outline",message:"₹1,00,000 withdrawal requested to the bank account ending 4321. You will get a confirmation on the app and by SMS once the payout is done.",action:"single",actionLabel:"Track",onDismiss:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
