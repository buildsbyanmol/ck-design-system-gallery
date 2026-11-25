import{j as e,V as i,c as l,I as m}from"./iframe-DK2xttIN.js";import{B as a}from"./BigAmountCard-Cp6wv979.js";import{i as p}from"./index-DCss3D-b.js";import{s as d,r as c}from"./motion-q_NUJArm.js";import{L as t,i as u,F as h}from"./_shared-DTtNh5Zn.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const b=()=>e.jsx(i,{style:{width:112,height:68,borderRadius:c.md,overflow:"hidden",backgroundColor:l.surface.default},children:e.jsx(m,{source:p.stores.amazon2,style:{width:112,height:68},resizeMode:"cover"})}),pe={title:"Components/Cards/BigAmountCard",component:a,tags:["autodocs","live"],decorators:[r=>e.jsx(h,{children:e.jsx(i,{style:{paddingTop:d[40]},children:e.jsx(r,{})})})],parameters:{source:"src/molecules/BigAmountCard.tsx",docs:{description:{component:'UNUSED today: no screen renders it. A large rupee amount with a label, an optional status tag, and a footer note with "Read more". The picture that overlaps the top edge in Figma is a slot (`media`).'}}},argTypes:{amount:{control:"number"},label:{control:"text"},status:{control:"object"},note:{control:"text"},media:{control:!1},onReadMore:{control:!1}},args:{amount:12480,label:"All-time Rewards earned",status:{label:"Confirmed",tone:"success"},note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}}},o={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"with status, note and Read more"}),e.jsx(a,{amount:12480,label:"All-time Rewards earned",status:{label:"Confirmed",tone:"success"},note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}}),e.jsx(t,{children:"amount and label only"}),e.jsx(a,{amount:775.6,label:"Available to withdraw"}),e.jsx(t,{children:"with a media slot (logo tile)"}),e.jsx(i,{style:{paddingTop:d[16]},children:e.jsx(a,{amount:12480,label:"All-time Rewards earned",media:e.jsx(b,{}),note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}})}),e.jsx(t,{children:"status tones"}),["success","warning","error","info","neutral"].map(r=>e.jsx(a,{amount:1500,label:"Pending rewards",status:{label:r,tone:r}},r))]})},n={parameters:{docs:{description:{story:"The amount uses formatINR: Indian grouping and exact paise. A note without `onReadMore` shows no link. Open question for product: the part is unused, so should it stay in the design system?"}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"₹0"}),e.jsx(a,{amount:0,label:"All-time Rewards earned"}),e.jsx(t,{children:`${u(1e6)}`}),e.jsx(a,{amount:1e6,label:"All-time Rewards earned",status:{label:"Paid",tone:"success"}}),e.jsx(t,{children:"note without Read more, long note"}),e.jsx(a,{amount:12480,label:"All-time Rewards earned",note:"Rewards on a card are paid after the bank approves the application and the first transaction is made on the card, within 90 days."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
