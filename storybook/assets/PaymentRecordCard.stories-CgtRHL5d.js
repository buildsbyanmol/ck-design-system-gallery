import{j as r}from"./iframe-EJmZd_T6.js";import{P as o}from"./PaymentRecordCard-Cf9JYD_t.js";import{L as e,i as m,F as l}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./ListRow-D2H9PhpP.js";import"./cards-Bc9fBrua.js";const a=[{label:"Amount",value:"₹1,500"},{label:"Paid to",value:"UPI, user@example.com"},{label:"Date",value:"02 Mar 2026"},{label:"Reference",value:"CKORDER0001"}],sr={title:"Components/Cards/PaymentRecordCard",component:o,tags:["autodocs","hidden"],decorators:[n=>r.jsx(l,{children:r.jsx(n,{})})],parameters:{source:"src/molecules/PaymentRecordCard.tsx",docs:{description:{component:'HIDDEN (decision D4: Payment History is hidden until it shows real data). A bordered card of label and value rows with dividers, and an optional final "Info / View" link row.'}}},argTypes:{rows:{control:"object"},infoLabel:{control:"text"},onView:{control:!1},style:{control:!1}},args:{rows:a,infoLabel:"Info",onView:()=>{}}},t={},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"rows only"}),r.jsx(o,{rows:a}),r.jsx(e,{children:"with the View row"}),r.jsx(o,{rows:a,onView:()=>{}}),r.jsx(e,{children:"custom infoLabel"}),r.jsx(o,{rows:a.slice(0,2),onView:()=>{},infoLabel:"Payment details"})]})},i={parameters:{docs:{description:{story:'Open question for product (D4): the Figma "List" card has no View row, so the View row is an addition. The header comment suggests promoting this to a generic List part.'}}},render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"1 row"}),r.jsx(o,{rows:a.slice(0,1)}),r.jsx(e,{children:"amount ₹0 and ₹10,00,000"}),r.jsx(o,{rows:[{label:"Amount",value:"₹0"},{label:"Limit",value:m(1e6)}]}),r.jsx(e,{children:"long value"}),r.jsx(o,{rows:[{label:"Paid to",value:"HDFC Bank savings account ending 0000, Mumbai Fort branch, via IMPS"}]}),r.jsx(e,{children:"no rows"}),r.jsx(o,{rows:[]}),r.jsx(e,{children:"many rows"}),r.jsx(o,{rows:[...a,...a],onView:()=>{}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
