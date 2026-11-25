import{j as e,V as i,c as l,I as m}from"./iframe-EJmZd_T6.js";import{B as a}from"./BigAmountCard-DM9gMl4b.js";import{i as p}from"./index-DCss3D-b.js";import{s as d,r as c}from"./motion-CMqo2j38.js";import{L as t,i as u,F as h}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const b=()=>e.jsx(i,{style:{width:112,height:68,borderRadius:c.md,overflow:"hidden",backgroundColor:l.surface.default},children:e.jsx(m,{source:p.stores.amazon2,style:{width:112,height:68},resizeMode:"cover"})}),pe={title:"Components/Cards/BigAmountCard",component:a,tags:["autodocs","live"],decorators:[r=>e.jsx(h,{children:e.jsx(i,{style:{paddingTop:d[40]},children:e.jsx(r,{})})})],parameters:{source:"src/molecules/BigAmountCard.tsx",docs:{description:{component:'UNUSED today: no screen renders it. A large rupee amount with a label, an optional status tag, and a footer note with "Read more". The picture that overlaps the top edge in Figma is a slot (`media`).'}}},argTypes:{amount:{control:"number"},label:{control:"text"},status:{control:"object"},note:{control:"text"},media:{control:!1},onReadMore:{control:!1}},args:{amount:12480,label:"All-time Rewards earned",status:{label:"Confirmed",tone:"success"},note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}}},o={},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"with status, note and Read more"}),e.jsx(a,{amount:12480,label:"All-time Rewards earned",status:{label:"Confirmed",tone:"success"},note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}}),e.jsx(t,{children:"amount and label only"}),e.jsx(a,{amount:775.6,label:"Available to withdraw"}),e.jsx(t,{children:"with a media slot (logo tile)"}),e.jsx(i,{style:{paddingTop:d[16]},children:e.jsx(a,{amount:12480,label:"All-time Rewards earned",media:e.jsx(b,{}),note:"Rewards are paid after the bank confirms your card.",onReadMore:()=>{}})}),e.jsx(t,{children:"status tones"}),["success","warning","error","info","neutral"].map(r=>e.jsx(a,{amount:1500,label:"Pending rewards",status:{label:r,tone:r}},r))]})},n={parameters:{docs:{description:{story:"The amount uses formatINR: Indian grouping and exact paise. A note without `onReadMore` shows no link. Open question for product: the part is unused, so should it stay in the design system?"}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"₹0"}),e.jsx(a,{amount:0,label:"All-time Rewards earned"}),e.jsx(t,{children:`${u(1e6)}`}),e.jsx(a,{amount:1e6,label:"All-time Rewards earned",status:{label:"Paid",tone:"success"}}),e.jsx(t,{children:"note without Read more, long note"}),e.jsx(a,{amount:12480,label:"All-time Rewards earned",note:"Rewards on a card are paid after the bank approves the application and the first transaction is made on the card, within 90 days."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
