import{j as r}from"./iframe-BxRbKpJi.js";import{P as o}from"./PaymentRecordCard-OzKu3YE_.js";import{L as e,i as m,F as l}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./ListRow-BcUcxFnw.js";import"./cards-Bc9fBrua.js";const a=[{label:"Amount",value:"₹1,500"},{label:"Paid to",value:"UPI, user@example.com"},{label:"Date",value:"02 Mar 2026"},{label:"Reference",value:"CKORDER0001"}],sr={title:"Components/Cards/PaymentRecordCard",component:o,tags:["autodocs","hidden"],decorators:[n=>r.jsx(l,{children:r.jsx(n,{})})],parameters:{source:"src/molecules/PaymentRecordCard.tsx",docs:{description:{component:'HIDDEN (decision D4: Payment History is hidden until it shows real data). A bordered card of label and value rows with dividers, and an optional final "Info / View" link row.'}}},argTypes:{rows:{control:"object"},infoLabel:{control:"text"},onView:{control:!1},style:{control:!1}},args:{rows:a,infoLabel:"Info",onView:()=>{}}},t={},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"rows only"}),r.jsx(o,{rows:a}),r.jsx(e,{children:"with the View row"}),r.jsx(o,{rows:a,onView:()=>{}}),r.jsx(e,{children:"custom infoLabel"}),r.jsx(o,{rows:a.slice(0,2),onView:()=>{},infoLabel:"Payment details"})]})},i={parameters:{docs:{description:{story:'Open question for product (D4): the Figma "List" card has no View row, so the View row is an addition. The header comment suggests promoting this to a generic List part.'}}},render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"1 row"}),r.jsx(o,{rows:a.slice(0,1)}),r.jsx(e,{children:"amount ₹0 and ₹10,00,000"}),r.jsx(o,{rows:[{label:"Amount",value:"₹0"},{label:"Limit",value:m(1e6)}]}),r.jsx(e,{children:"long value"}),r.jsx(o,{rows:[{label:"Paid to",value:"HDFC Bank savings account ending 0000, Mumbai Fort branch, via IMPS"}]}),r.jsx(e,{children:"no rows"}),r.jsx(o,{rows:[]}),r.jsx(e,{children:"many rows"}),r.jsx(o,{rows:[...a,...a],onView:()=>{}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
