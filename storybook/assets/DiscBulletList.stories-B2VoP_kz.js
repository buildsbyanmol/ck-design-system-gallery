import{j as t,V as l,c as p}from"./iframe-DK2xttIN.js";import{D as e}from"./DiscBulletList-B7UugVnF.js";import{T as d}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s as c}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const m=["Cashback is tracked only when you shop through the CashKaro link.","Orders paid with gift cards or store credit may not earn cashback.","Cashback rates are up to X% and can change without notice.","Cancelled or returned orders do not earn cashback."],ot={title:"Components/Lists/DiscBulletList",component:e,tags:["autodocs","live"],parameters:{source:"src/molecules/DiscBulletList.tsx",docs:{description:{component:"A plain disc-bulleted text list with a hanging indent, used for terms and conditions copy."}}},decorators:[r=>t.jsx(l,{style:{width:340},children:t.jsx(r,{})})],argTypes:{items:{control:"object"},style:{control:!1}},args:{items:m}},o={},i=({title:r,children:s})=>t.jsxs(l,{style:{gap:c[8]},children:[t.jsx(d,{variant:"body12Medium",color:p.text.secondary,children:r}),s]}),a={parameters:{docs:{description:{story:"There is one visual style. The list below shows short and wrapped items, to see the hanging indent."}}},render:()=>t.jsxs(l,{style:{width:340,gap:c[16]},children:[t.jsx(i,{title:"short items",children:t.jsx(e,{items:["Valid on all orders","No minimum value"]})}),t.jsx(i,{title:"wrapped items (text aligns under the text, not the disc)",children:t.jsx(e,{items:m})})]})},n={render:()=>t.jsxs(l,{style:{width:340,gap:c[16]},children:[t.jsx(i,{title:"empty list (renders nothing)",children:t.jsx(e,{items:[]})}),t.jsx(i,{title:"one item",children:t.jsx(e,{items:[m[0]]})}),t.jsx(i,{title:"many items",children:t.jsx(e,{items:Array.from({length:12},(r,s)=>`Term ${s+1}: ${m[s%4]}`)})}),t.jsx(i,{title:"amounts",children:t.jsx(e,{items:[`Minimum order ₹${0 .toLocaleString("en-IN")}`,`Maximum cashback ₹${1e6.toLocaleString("en-IN")} per month`]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
