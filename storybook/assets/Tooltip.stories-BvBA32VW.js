import{j as t,V as o,r as h}from"./iframe-DK2xttIN.js";import{T as i}from"./Tooltip-DuDw3JkL.js";import{T as c}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s as r}from"./motion-q_NUJArm.js";import{P as g}from"./index-mJl4hEuB.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const pt={title:"Components/Messages and tooltips/Tooltip",component:i,tags:["autodocs","live"],parameters:{source:"src/molecules/Tooltip.tsx",docs:{description:{component:"A bubble with an arrow that explains one thing on demand. It only draws the bubble: the screen decides when it shows and where it sits."}}},argTypes:{theme:{control:"select",options:["dark","light"]},position:{control:"select",options:["top","bottom","left","right"]},size:{control:"select",options:["sm","md"]},arrowAlign:{control:"select",options:["start","center","end"]},icon:{control:"select",options:[void 0,"message-outline","clock-outline","desc-exclamation"]},title:{control:"text"},supporting:{control:"text"},maxWidth:{control:"number"}},args:{title:"Confirmed cashback",supporting:"Cashback the store has approved. You can withdraw it.",theme:"dark",position:"top",size:"sm",arrowAlign:"center",maxWidth:280},decorators:[e=>t.jsx(o,{style:{padding:r[32],minHeight:160},children:t.jsx(e,{})})]},a=({children:e})=>t.jsx(c,{variant:"body12Medium",style:{marginBottom:r[8]},children:e});function u(){const[e,s]=h.useState(!0);return t.jsxs(o,{style:{padding:r[32],minHeight:140,alignItems:"flex-start"},children:[t.jsx(g,{accessibilityRole:"button",onPress:()=>s(d=>!d),children:t.jsx(c,{variant:"body14SemiBold",children:"Pending cashback ⓘ (tap to toggle)"})}),e?t.jsx(i,{title:"Pending cashback",supporting:"Waiting for Flipkart to confirm your order.",position:"bottom",arrowAlign:"start"}):null]})}const n={},p={name:"On demand (toggle)",parameters:{docs:{description:{story:"Tap the label to show or hide the tooltip. The app hides it after 4 s on the Earnings masthead."}}},render:()=>t.jsx(u,{})},l={render:()=>t.jsxs(o,{style:{padding:r[24],gap:r[24]},children:[["dark","light"].map(e=>t.jsxs(o,{style:{gap:r[12]},children:[t.jsx(a,{children:`theme: ${e}`}),t.jsx(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:r[24]},children:["top","bottom","left","right"].map(s=>t.jsxs(o,{children:[t.jsx(a,{children:`position: ${s}`}),t.jsx(i,{theme:e,position:s,title:"Cashback X%",supporting:"On Amazon orders"})]},s))})]},e)),t.jsxs(o,{style:{flexDirection:"row",gap:r[24],flexWrap:"wrap"},children:[["sm","md"].map(e=>t.jsxs(o,{children:[t.jsx(a,{children:`size: ${e}`}),t.jsx(i,{size:e,title:"Cashback X%",supporting:"On Amazon orders"})]},e)),["start","center","end"].map(e=>t.jsxs(o,{style:{minWidth:200},children:[t.jsx(a,{children:`arrowAlign: ${e}`}),t.jsx(i,{position:"bottom",arrowAlign:e,title:"Cashback X%",supporting:"On Amazon orders"})]},e))]})]})},m={parameters:{docs:{description:{story:"Title only, title with icon, long text capped at maxWidth, and a large rupee amount."}}},render:()=>t.jsxs(o,{style:{padding:r[24],gap:r[16]},children:[t.jsx(i,{title:"Pending"}),t.jsx(i,{icon:"clock-outline",title:"Pending",supporting:"Store confirms in up to 90 days."}),t.jsx(i,{size:"md",theme:"light",title:"Total earned: ₹1,00,000",supporting:"Across SBI Cashback and HDFC Millennia, including rewards that are still locked until the store confirms every order, which can take up to ninety days after you shop at Myntra.",maxWidth:280})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
