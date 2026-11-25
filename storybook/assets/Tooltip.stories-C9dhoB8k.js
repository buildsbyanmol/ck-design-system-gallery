import{j as t,V as o,r as h}from"./iframe-BxRbKpJi.js";import{T as i}from"./Tooltip-LcYOE9Ky.js";import{T as c}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as r}from"./motion-C4NNgPp6.js";import{P as g}from"./index-DEPmHYsu.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const pt={title:"Components/Messages and tooltips/Tooltip",component:i,tags:["autodocs","live"],parameters:{source:"src/molecules/Tooltip.tsx",docs:{description:{component:"A bubble with an arrow that explains one thing on demand. It only draws the bubble: the screen decides when it shows and where it sits."}}},argTypes:{theme:{control:"select",options:["dark","light"]},position:{control:"select",options:["top","bottom","left","right"]},size:{control:"select",options:["sm","md"]},arrowAlign:{control:"select",options:["start","center","end"]},icon:{control:"select",options:[void 0,"message-outline","clock-outline","desc-exclamation"]},title:{control:"text"},supporting:{control:"text"},maxWidth:{control:"number"}},args:{title:"Confirmed cashback",supporting:"Cashback the store has approved. You can withdraw it.",theme:"dark",position:"top",size:"sm",arrowAlign:"center",maxWidth:280},decorators:[e=>t.jsx(o,{style:{padding:r[32],minHeight:160},children:t.jsx(e,{})})]},a=({children:e})=>t.jsx(c,{variant:"body12Medium",style:{marginBottom:r[8]},children:e});function u(){const[e,s]=h.useState(!0);return t.jsxs(o,{style:{padding:r[32],minHeight:140,alignItems:"flex-start"},children:[t.jsx(g,{accessibilityRole:"button",onPress:()=>s(d=>!d),children:t.jsx(c,{variant:"body14SemiBold",children:"Pending cashback ⓘ (tap to toggle)"})}),e?t.jsx(i,{title:"Pending cashback",supporting:"Waiting for Flipkart to confirm your order.",position:"bottom",arrowAlign:"start"}):null]})}const n={},p={name:"On demand (toggle)",parameters:{docs:{description:{story:"Tap the label to show or hide the tooltip. The app hides it after 4 s on the Earnings masthead."}}},render:()=>t.jsx(u,{})},l={render:()=>t.jsxs(o,{style:{padding:r[24],gap:r[24]},children:[["dark","light"].map(e=>t.jsxs(o,{style:{gap:r[12]},children:[t.jsx(a,{children:`theme: ${e}`}),t.jsx(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:r[24]},children:["top","bottom","left","right"].map(s=>t.jsxs(o,{children:[t.jsx(a,{children:`position: ${s}`}),t.jsx(i,{theme:e,position:s,title:"Cashback X%",supporting:"On Amazon orders"})]},s))})]},e)),t.jsxs(o,{style:{flexDirection:"row",gap:r[24],flexWrap:"wrap"},children:[["sm","md"].map(e=>t.jsxs(o,{children:[t.jsx(a,{children:`size: ${e}`}),t.jsx(i,{size:e,title:"Cashback X%",supporting:"On Amazon orders"})]},e)),["start","center","end"].map(e=>t.jsxs(o,{style:{minWidth:200},children:[t.jsx(a,{children:`arrowAlign: ${e}`}),t.jsx(i,{position:"bottom",arrowAlign:e,title:"Cashback X%",supporting:"On Amazon orders"})]},e))]})]})},m={parameters:{docs:{description:{story:"Title only, title with icon, long text capped at maxWidth, and a large rupee amount."}}},render:()=>t.jsxs(o,{style:{padding:r[24],gap:r[16]},children:[t.jsx(i,{title:"Pending"}),t.jsx(i,{icon:"clock-outline",title:"Pending",supporting:"Store confirms in up to 90 days."}),t.jsx(i,{size:"md",theme:"light",title:"Total earned: ₹1,00,000",supporting:"Across SBI Cashback and HDFC Millennia, including rewards that are still locked until the store confirms every order, which can take up to ninety days after you shop at Myntra.",maxWidth:280})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'On demand (toggle)',
  parameters: {
    docs: {
      description: {
        story: 'Tap the label to show or hide the tooltip. The app hides it after 4 s on the Earnings masthead.'
      }
    }
  },
  render: () => <OnDemand />
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    padding: spacing[24],
    gap: spacing[24]
  }}>
      {(['dark', 'light'] as const).map(theme => <View key={theme} style={{
      gap: spacing[12]
    }}>
          <Label>{\`theme: \${theme}\`}</Label>
          <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing[24]
      }}>
            {(['top', 'bottom', 'left', 'right'] as const).map(position => <View key={position}>
                <Label>{\`position: \${position}\`}</Label>
                <Tooltip theme={theme} position={position} title="Cashback X%" supporting="On Amazon orders" />
              </View>)}
          </View>
        </View>)}
      <View style={{
      flexDirection: 'row',
      gap: spacing[24],
      flexWrap: 'wrap'
    }}>
        {(['sm', 'md'] as const).map(size => <View key={size}><Label>{\`size: \${size}\`}</Label><Tooltip size={size} title="Cashback X%" supporting="On Amazon orders" /></View>)}
        {(['start', 'center', 'end'] as const).map(a => <View key={a} style={{
        minWidth: 200
      }}><Label>{\`arrowAlign: \${a}\`}</Label><Tooltip position="bottom" arrowAlign={a} title="Cashback X%" supporting="On Amazon orders" /></View>)}
      </View>
    </View>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Title only, title with icon, long text capped at maxWidth, and a large rupee amount.'
      }
    }
  },
  render: () => <View style={{
    padding: spacing[24],
    gap: spacing[16]
  }}>
      <Tooltip title="Pending" />
      <Tooltip icon="clock-outline" title="Pending" supporting="Store confirms in up to 90 days." />
      <Tooltip size="md" theme="light" title="Total earned: ₹1,00,000" supporting="Across SBI Cashback and HDFC Millennia, including rewards that are still locked until the store confirms every order, which can take up to ninety days after you shop at Myntra." maxWidth={280} />
    </View>
}`,...m.parameters?.docs?.source}}};const lt=["Playground","OnDemandToggle","Variants","States"];export{p as OnDemandToggle,n as Playground,m as States,l as Variants,lt as __namedExportsOrder,pt as default};
