import{j as t,V as l,c as p}from"./iframe-BxRbKpJi.js";import{D as e}from"./DiscBulletList-CE50HxqV.js";import{T as d}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as c}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const m=["Cashback is tracked only when you shop through the CashKaro link.","Orders paid with gift cards or store credit may not earn cashback.","Cashback rates are up to X% and can change without notice.","Cancelled or returned orders do not earn cashback."],ot={title:"Components/Lists/DiscBulletList",component:e,tags:["autodocs","live"],parameters:{source:"src/molecules/DiscBulletList.tsx",docs:{description:{component:"A plain disc-bulleted text list with a hanging indent, used for terms and conditions copy."}}},decorators:[r=>t.jsx(l,{style:{width:340},children:t.jsx(r,{})})],argTypes:{items:{control:"object"},style:{control:!1}},args:{items:m}},o={},i=({title:r,children:s})=>t.jsxs(l,{style:{gap:c[8]},children:[t.jsx(d,{variant:"body12Medium",color:p.text.secondary,children:r}),s]}),a={parameters:{docs:{description:{story:"There is one visual style. The list below shows short and wrapped items, to see the hanging indent."}}},render:()=>t.jsxs(l,{style:{width:340,gap:c[16]},children:[t.jsx(i,{title:"short items",children:t.jsx(e,{items:["Valid on all orders","No minimum value"]})}),t.jsx(i,{title:"wrapped items (text aligns under the text, not the disc)",children:t.jsx(e,{items:m})})]})},n={render:()=>t.jsxs(l,{style:{width:340,gap:c[16]},children:[t.jsx(i,{title:"empty list (renders nothing)",children:t.jsx(e,{items:[]})}),t.jsx(i,{title:"one item",children:t.jsx(e,{items:[m[0]]})}),t.jsx(i,{title:"many items",children:t.jsx(e,{items:Array.from({length:12},(r,s)=>`Term ${s+1}: ${m[s%4]}`)})}),t.jsx(i,{title:"amounts",children:t.jsx(e,{items:[`Minimum order ₹${0 .toLocaleString("en-IN")}`,`Maximum cashback ₹${1e6.toLocaleString("en-IN")} per month`]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
