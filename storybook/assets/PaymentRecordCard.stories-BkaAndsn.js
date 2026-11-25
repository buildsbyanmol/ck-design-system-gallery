import{j as r}from"./iframe-DK2xttIN.js";import{P as o}from"./PaymentRecordCard-BSnxSZ7y.js";import{L as e,i as m,F as l}from"./_shared-DTtNh5Zn.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./ListRow-BQc2dCdC.js";import"./cards-Bc9fBrua.js";const a=[{label:"Amount",value:"₹1,500"},{label:"Paid to",value:"UPI, user@example.com"},{label:"Date",value:"02 Mar 2026"},{label:"Reference",value:"CKORDER0001"}],sr={title:"Components/Cards/PaymentRecordCard",component:o,tags:["autodocs","hidden"],decorators:[n=>r.jsx(l,{children:r.jsx(n,{})})],parameters:{source:"src/molecules/PaymentRecordCard.tsx",docs:{description:{component:'HIDDEN (decision D4: Payment History is hidden until it shows real data). A bordered card of label and value rows with dividers, and an optional final "Info / View" link row.'}}},argTypes:{rows:{control:"object"},infoLabel:{control:"text"},onView:{control:!1},style:{control:!1}},args:{rows:a,infoLabel:"Info",onView:()=>{}}},t={},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"rows only"}),r.jsx(o,{rows:a}),r.jsx(e,{children:"with the View row"}),r.jsx(o,{rows:a,onView:()=>{}}),r.jsx(e,{children:"custom infoLabel"}),r.jsx(o,{rows:a.slice(0,2),onView:()=>{},infoLabel:"Payment details"})]})},i={parameters:{docs:{description:{story:'Open question for product (D4): the Figma "List" card has no View row, so the View row is an addition. The header comment suggests promoting this to a generic List part.'}}},render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"1 row"}),r.jsx(o,{rows:a.slice(0,1)}),r.jsx(e,{children:"amount ₹0 and ₹10,00,000"}),r.jsx(o,{rows:[{label:"Amount",value:"₹0"},{label:"Limit",value:m(1e6)}]}),r.jsx(e,{children:"long value"}),r.jsx(o,{rows:[{label:"Paid to",value:"HDFC Bank savings account ending 0000, Mumbai Fort branch, via IMPS"}]}),r.jsx(e,{children:"no rows"}),r.jsx(o,{rows:[]}),r.jsx(e,{children:"many rows"}),r.jsx(o,{rows:[...a,...a],onView:()=>{}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>rows only</Label>
      <PaymentRecordCard rows={rows} />
      <Label>with the View row</Label>
      <PaymentRecordCard rows={rows} onView={() => {}} />
      <Label>custom infoLabel</Label>
      <PaymentRecordCard rows={rows.slice(0, 2)} onView={() => {}} infoLabel="Payment details" />
    </>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question for product (D4): the Figma "List" card has no View row, so the View row is an addition. The header comment suggests promoting this to a generic List part.'
      }
    }
  },
  render: () => <>
      <Label>1 row</Label>
      <PaymentRecordCard rows={rows.slice(0, 1)} />
      <Label>amount ₹0 and ₹10,00,000</Label>
      <PaymentRecordCard rows={[{
      label: 'Amount',
      value: '₹0'
    }, {
      label: 'Limit',
      value: inr(1000000)
    }]} />
      <Label>long value</Label>
      <PaymentRecordCard rows={[{
      label: 'Paid to',
      value: 'HDFC Bank savings account ending 0000, Mumbai Fort branch, via IMPS'
    }]} />
      <Label>no rows</Label>
      <PaymentRecordCard rows={[]} />
      <Label>many rows</Label>
      <PaymentRecordCard rows={[...rows, ...rows]} onView={() => {}} />
    </>
}`,...i.parameters?.docs?.source}}};const ir=["Playground","Variants","States"];export{t as Playground,i as States,s as Variants,ir as __namedExportsOrder,sr as default};
