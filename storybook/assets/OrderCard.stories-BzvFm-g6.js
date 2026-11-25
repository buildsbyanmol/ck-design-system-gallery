import{j as e,a as c}from"./iframe-BxRbKpJi.js";import{O as r}from"./OrderCard-D6lkT661.js";import{i}from"./index-DCss3D-b.js";import{L as a,F as u}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-Bn01aVoN.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const m=["requested","pending","delayed","cancelled","confirmed","paid","expired"],p=["cashback","rewards","referral","bonus"],h={cashback:"CKORDER0001",rewards:"CKORDER0001",referral:"Test User",bonus:"Welcome bonus"},o={type:"cashback",status:"pending",amount:"₹19.90",metaValue:"CKORDER0001",logoSrc:i.stores.myntra31,note:{text:"Cashback is added after the store confirms the order, within 90 days of purchase.",expandable:!0},onPress:()=>{}},pe={title:"Components/Cards/OrderCard",component:r,tags:["autodocs","live"],decorators:[t=>e.jsx(u,{children:e.jsx(t,{})})],parameters:{source:"src/organisms/OrderCard.tsx",docs:{description:{component:"One order in the orders list: a status strip, the store logo with the amount, a second info row, and an optional note with More and Less. Four types and seven statuses."}}},argTypes:{type:{control:"select",options:[...p]},status:{control:"select",options:[...m]},amount:{control:"text"},metaValue:{control:"text"},note:{control:"object"},logoSrc:{control:!1},onPress:{control:!1},style:{control:!1}},args:o},s={},n={render:()=>e.jsxs(e.Fragment,{children:[p.map(t=>e.jsxs(c.Fragment,{children:[e.jsx(a,{children:`type="${t}"`}),e.jsx(r,{...o,type:t,metaValue:h[t],note:void 0,onPress:t==="referral"?void 0:()=>{}})]},t)),e.jsx(a,{children:"every status"}),m.map(t=>e.jsx(r,{...o,status:t,note:void 0},t))]})},d={parameters:{docs:{description:{story:'No `onPress` hides the chevron (referrals have no detail page). A note longer than 2 lines shows a More toggle. The "Paid" Figma variant has a 3 dot ornament that the part leaves out on purpose.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"amount ₹0"}),e.jsx(r,{...o,amount:"₹0",status:"cancelled",note:void 0}),e.jsx(a,{children:"amount ₹10,00,000"}),e.jsx(r,{...o,amount:`₹${1e6.toLocaleString("en-IN")}`,status:"paid",note:void 0}),e.jsx(a,{children:"long order id and long note (More)"}),e.jsx(r,{...o,metaValue:"CKORDER0001-CKORDER0001-CKORDER0001-CKORDER0001",note:{text:"Cashback is added after the store confirms the order. If the order is returned or cancelled by you or the store, the cashback is cancelled too. Delayed stores can take up to 90 days to confirm.",expandable:!0}}),e.jsx(a,{children:"note, not expandable"}),e.jsx(r,{...o,note:{text:"Added on 02 Mar 2026.",expandable:!1}}),e.jsx(a,{children:"list of many orders"}),m.map((t,l)=>e.jsx(r,{...o,status:t,logoSrc:[i.stores.myntra31,i.stores.amazon2,i.stores.tata][l%3],note:void 0},t))]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {TYPES.map(t => <React.Fragment key={t}>
          <Label>{\`type="\${t}"\`}</Label>
          <OrderCard {...base} type={t} metaValue={META[t]} note={undefined} onPress={t === 'referral' ? undefined : () => {}} />
        </React.Fragment>)}
      <Label>every status</Label>
      {STATUSES.map(s => <OrderCard key={s} {...base} status={s} note={undefined} />)}
    </>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No \`onPress\` hides the chevron (referrals have no detail page). A note longer than 2 lines shows a More toggle. The "Paid" Figma variant has a 3 dot ornament that the part leaves out on purpose.'
      }
    }
  },
  render: () => <>
      <Label>amount ₹0</Label>
      <OrderCard {...base} amount="₹0" status="cancelled" note={undefined} />
      <Label>amount ₹10,00,000</Label>
      <OrderCard {...base} amount={\`₹\${1000000 .toLocaleString('en-IN')}\`} status="paid" note={undefined} />
      <Label>long order id and long note (More)</Label>
      <OrderCard {...base} metaValue="CKORDER0001-CKORDER0001-CKORDER0001-CKORDER0001" note={{
      text: 'Cashback is added after the store confirms the order. If the order is returned or cancelled by you or the store, the cashback is cancelled too. Delayed stores can take up to 90 days to confirm.',
      expandable: true
    }} />
      <Label>note, not expandable</Label>
      <OrderCard {...base} note={{
      text: 'Added on 02 Mar 2026.',
      expandable: false
    }} />
      <Label>list of many orders</Label>
      {STATUSES.map((s, i) => <OrderCard key={s} {...base} status={s} logoSrc={[images.stores.myntra31, images.stores.amazon2, images.stores.tata][i % 3]} note={undefined} />)}
    </>
}`,...d.parameters?.docs?.source}}};const le=["Playground","Variants","States"];export{s as Playground,d as States,n as Variants,le as __namedExportsOrder,pe as default};
