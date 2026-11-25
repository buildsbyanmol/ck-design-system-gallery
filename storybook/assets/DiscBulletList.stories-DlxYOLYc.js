import{j as t,V as l,c as p}from"./iframe-EJmZd_T6.js";import{D as e}from"./DiscBulletList-Wfqt5xzY.js";import{T as d}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as c}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const m=["Cashback is tracked only when you shop through the CashKaro link.","Orders paid with gift cards or store credit may not earn cashback.","Cashback rates are up to X% and can change without notice.","Cancelled or returned orders do not earn cashback."],ot={title:"Components/Lists/DiscBulletList",component:e,tags:["autodocs","live"],parameters:{source:"src/molecules/DiscBulletList.tsx",docs:{description:{component:"A plain disc-bulleted text list with a hanging indent, used for terms and conditions copy."}}},decorators:[r=>t.jsx(l,{style:{width:340},children:t.jsx(r,{})})],argTypes:{items:{control:"object"},style:{control:!1}},args:{items:m}},o={},i=({title:r,children:s})=>t.jsxs(l,{style:{gap:c[8]},children:[t.jsx(d,{variant:"body12Medium",color:p.text.secondary,children:r}),s]}),a={parameters:{docs:{description:{story:"There is one visual style. The list below shows short and wrapped items, to see the hanging indent."}}},render:()=>t.jsxs(l,{style:{width:340,gap:c[16]},children:[t.jsx(i,{title:"short items",children:t.jsx(e,{items:["Valid on all orders","No minimum value"]})}),t.jsx(i,{title:"wrapped items (text aligns under the text, not the disc)",children:t.jsx(e,{items:m})})]})},n={render:()=>t.jsxs(l,{style:{width:340,gap:c[16]},children:[t.jsx(i,{title:"empty list (renders nothing)",children:t.jsx(e,{items:[]})}),t.jsx(i,{title:"one item",children:t.jsx(e,{items:[m[0]]})}),t.jsx(i,{title:"many items",children:t.jsx(e,{items:Array.from({length:12},(r,s)=>`Term ${s+1}: ${m[s%4]}`)})}),t.jsx(i,{title:"amounts",children:t.jsx(e,{items:[`Minimum order ₹${0 .toLocaleString("en-IN")}`,`Maximum cashback ₹${1e6.toLocaleString("en-IN")} per month`]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'There is one visual style. The list below shows short and wrapped items, to see the hanging indent.'
      }
    }
  },
  render: () => <View style={{
    width: 340,
    gap: spacing[16]
  }}>
      <Block title="short items"><DiscBulletList items={['Valid on all orders', 'No minimum value']} /></Block>
      <Block title="wrapped items (text aligns under the text, not the disc)"><DiscBulletList items={TERMS} /></Block>
    </View>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 340,
    gap: spacing[16]
  }}>
      <Block title="empty list (renders nothing)"><DiscBulletList items={[]} /></Block>
      <Block title="one item"><DiscBulletList items={[TERMS[0]]} /></Block>
      <Block title="many items"><DiscBulletList items={Array.from({
        length: 12
      }, (_, i) => \`Term \${i + 1}: \${TERMS[i % 4]}\`)} /></Block>
      <Block title="amounts"><DiscBulletList items={[\`Minimum order ₹\${0 .toLocaleString('en-IN')}\`, \`Maximum cashback ₹\${1000000 .toLocaleString('en-IN')} per month\`]} /></Block>
    </View>
}`,...n.parameters?.docs?.source}}};const at=["Playground","Variants","States"];export{o as Playground,n as States,a as Variants,at as __namedExportsOrder,ot as default};
