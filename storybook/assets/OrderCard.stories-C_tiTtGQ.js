import{j as e,a as c}from"./iframe-DK2xttIN.js";import{O as r}from"./OrderCard-CJ3jSQ5j.js";import{i}from"./index-DCss3D-b.js";import{L as a,F as u}from"./_shared-DTtNh5Zn.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const m=["requested","pending","delayed","cancelled","confirmed","paid","expired"],p=["cashback","rewards","referral","bonus"],h={cashback:"CKORDER0001",rewards:"CKORDER0001",referral:"Test User",bonus:"Welcome bonus"},o={type:"cashback",status:"pending",amount:"₹19.90",metaValue:"CKORDER0001",logoSrc:i.stores.myntra31,note:{text:"Cashback is added after the store confirms the order, within 90 days of purchase.",expandable:!0},onPress:()=>{}},pe={title:"Components/Cards/OrderCard",component:r,tags:["autodocs","live"],decorators:[t=>e.jsx(u,{children:e.jsx(t,{})})],parameters:{source:"src/organisms/OrderCard.tsx",docs:{description:{component:"One order in the orders list: a status strip, the store logo with the amount, a second info row, and an optional note with More and Less. Four types and seven statuses."}}},argTypes:{type:{control:"select",options:[...p]},status:{control:"select",options:[...m]},amount:{control:"text"},metaValue:{control:"text"},note:{control:"object"},logoSrc:{control:!1},onPress:{control:!1},style:{control:!1}},args:o},s={},n={render:()=>e.jsxs(e.Fragment,{children:[p.map(t=>e.jsxs(c.Fragment,{children:[e.jsx(a,{children:`type="${t}"`}),e.jsx(r,{...o,type:t,metaValue:h[t],note:void 0,onPress:t==="referral"?void 0:()=>{}})]},t)),e.jsx(a,{children:"every status"}),m.map(t=>e.jsx(r,{...o,status:t,note:void 0},t))]})},d={parameters:{docs:{description:{story:'No `onPress` hides the chevron (referrals have no detail page). A note longer than 2 lines shows a More toggle. The "Paid" Figma variant has a 3 dot ornament that the part leaves out on purpose.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"amount ₹0"}),e.jsx(r,{...o,amount:"₹0",status:"cancelled",note:void 0}),e.jsx(a,{children:"amount ₹10,00,000"}),e.jsx(r,{...o,amount:`₹${1e6.toLocaleString("en-IN")}`,status:"paid",note:void 0}),e.jsx(a,{children:"long order id and long note (More)"}),e.jsx(r,{...o,metaValue:"CKORDER0001-CKORDER0001-CKORDER0001-CKORDER0001",note:{text:"Cashback is added after the store confirms the order. If the order is returned or cancelled by you or the store, the cashback is cancelled too. Delayed stores can take up to 90 days to confirm.",expandable:!0}}),e.jsx(a,{children:"note, not expandable"}),e.jsx(r,{...o,note:{text:"Added on 02 Mar 2026.",expandable:!1}}),e.jsx(a,{children:"list of many orders"}),m.map((t,l)=>e.jsx(r,{...o,status:t,logoSrc:[i.stores.myntra31,i.stores.amazon2,i.stores.tata][l%3],note:void 0},t))]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
