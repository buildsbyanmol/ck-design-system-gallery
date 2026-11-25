import{j as e,V as i,c as l,I as m}from"./iframe-BxRbKpJi.js";import{B as a}from"./BigAmountCard-Dw5K3zhx.js";import{i as p}from"./index-DCss3D-b.js";import{s as d,r as c}from"./motion-C4NNgPp6.js";import{L as t,i as u,F as h}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const b=()=>e.jsx(i,{style:{width:112,height:68,borderRadius:c.md,overflow:"hidden",backgroundColor:l.surface.default},children:e.jsx(m,{source:p.stores.amazon2,style:{width:112,height:68},resizeMode:"cover"})}),pe={title:"Components/Cards/BigAmountCard",component:a,tags:["autodocs","live"],decorators:[r=>e.jsx(h,{children:e.jsx(i,{style:{paddingTop:d[40]},children:e.jsx(r,{})})})],parameters:{source:"src/molecules/BigAmountCard.tsx",docs:{description:{component:'UNUSED today: no screen renders it. A large rupee amount with a label, an optional status tag, and a footer note with "Read more". The picture that overlaps the top edge in Figma is a slot (`media`).'}}},argTypes:{amount:{control:"number"},label:{control:"text"},status:{control:"object"},note:{control:"text"},media:{control:!1},onReadMore:{control:!1}},args:{amount:12480,label:"All-time Rewards earned",status:{label:"Confirmed",tone:"success"},note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}}},o={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"with status, note and Read more"}),e.jsx(a,{amount:12480,label:"All-time Rewards earned",status:{label:"Confirmed",tone:"success"},note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}}),e.jsx(t,{children:"amount and label only"}),e.jsx(a,{amount:775.6,label:"Available to withdraw"}),e.jsx(t,{children:"with a media slot (logo tile)"}),e.jsx(i,{style:{paddingTop:d[16]},children:e.jsx(a,{amount:12480,label:"All-time Rewards earned",media:e.jsx(b,{}),note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}})}),e.jsx(t,{children:"status tones"}),["success","warning","error","info","neutral"].map(r=>e.jsx(a,{amount:1500,label:"Pending rewards",status:{label:r,tone:r}},r))]})},n={parameters:{docs:{description:{story:"The amount uses formatINR: Indian grouping and exact paise. A note without `onReadMore` shows no link. Open question for product: the part is unused, so should it stay in the design system?"}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"₹0"}),e.jsx(a,{amount:0,label:"All-time Rewards earned"}),e.jsx(t,{children:`${u(1e6)}`}),e.jsx(a,{amount:1e6,label:"All-time Rewards earned",status:{label:"Paid",tone:"success"}}),e.jsx(t,{children:"note without Read more, long note"}),e.jsx(a,{amount:12480,label:"All-time Rewards earned",note:"Rewards on a card are paid after the bank approves the application and the first transaction is made on the card, within 90 days."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>with status, note and Read more</Label>
      <BigAmountCard amount={12480} label="All-time Rewards earned" status={{
      label: 'Confirmed',
      tone: 'success'
    }} note="Rewards are paid after the bank confirms your card." onReadMore={() => {}} />
      <Label>amount and label only</Label>
      <BigAmountCard amount={775.6} label="Available to withdraw" />
      <Label>with a media slot (logo tile)</Label>
      <View style={{
      paddingTop: spacing[16]
    }}>
        <BigAmountCard amount={12480} label="All-time Rewards earned" media={<Media />} note="Rewards are paid after the bank confirms your card." onReadMore={() => {}} />
      </View>
      <Label>status tones</Label>
      {(['success', 'warning', 'error', 'info', 'neutral'] as const).map(t => <BigAmountCard key={t} amount={1500} label="Pending rewards" status={{
      label: t,
      tone: t
    }} />)}
    </>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The amount uses formatINR: Indian grouping and exact paise. A note without \`onReadMore\` shows no link. Open question for product: the part is unused, so should it stay in the design system?'
      }
    }
  },
  render: () => <>
      <Label>₹0</Label>
      <BigAmountCard amount={0} label="All-time Rewards earned" />
      <Label>{\`\${inr(1000000)}\`}</Label>
      <BigAmountCard amount={1000000} label="All-time Rewards earned" status={{
      label: 'Paid',
      tone: 'success'
    }} />
      <Label>note without Read more, long note</Label>
      <BigAmountCard amount={12480} label="All-time Rewards earned" note="Rewards on a card are paid after the bank approves the application and the first transaction is made on the card, within 90 days." />
    </>
}`,...n.parameters?.docs?.source}}};const ce=["Playground","Variants","States"];export{o as Playground,n as States,s as Variants,ce as __namedExportsOrder,pe as default};
