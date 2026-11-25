import{j as e,V as r,c as s,r as d}from"./iframe-DK2xttIN.js";import{O as p}from"./OfflineBanner-EbZibXrO.js";import{C as c}from"./ScreenHarness-DmOWjo0p.js";import{T as a}from"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{s as o,b as l}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-VjBCu6Ra.js";import"./cardTools-Ct3zlgT2.js";import"./amountInput-BIBzs3v3.js";import"./analytics-I5h83qZl.js";import"./with-selector-CpCbjLFO.js";import"./BottomSheetHeader-CiFr6Grc.js";import"./phone-vSJF-a1K.js";import"./index-C6NuygFm.js";import"./index-mJl4hEuB.js";import"./index-B-3z50BQ.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./tagVariants-BxEvvwJ1.js";const ge={title:"Components/Messages and tooltips/OfflineBanner",component:p,tags:["autodocs","live"],parameters:{source:"src/molecules/OfflineBanner.tsx",layout:"fullscreen",docs:{description:{component:"App-wide strip pinned to the top of the app while the device has no internet. It takes no props: it reads connectivity from NetInfo and renders nothing while online."}}}};function f(){return e.jsx(r,{style:{paddingTop:o[4],paddingBottom:o[4],paddingHorizontal:o[16],backgroundColor:s.feedback.warning.subtle,borderBottomWidth:l.thin,borderBottomColor:s.feedback.warning.border,alignItems:"center"},children:e.jsx(a,{variant:"body12SemiBold",color:s.feedback.warning.text,align:"center",children:"You're offline. We'll refresh when you're back online."})})}function h({children:m}){return d.useEffect(()=>{try{window.dispatchEvent(new Event("offline"))}catch{}},[]),e.jsx(e.Fragment,{children:m})}const n={parameters:{docs:{description:{story:'The real component inside a phone-sized frame. It shows only when NetInfo reports offline. On web NetInfo reads the browser online state, so switch the browser to offline in devtools (Network, Offline) to see it. The story also dispatches a window "offline" event on mount; this is not verified to work in every browser. The next story shows the same look drawn from the same tokens.'}}},render:()=>e.jsx(c,{children:e.jsx(h,{children:e.jsxs(r,{style:{width:390,height:200,position:"relative",backgroundColor:s.surface.default},children:[e.jsx(p,{}),e.jsx(r,{style:{padding:o[16],paddingTop:o[48]},children:e.jsx(a,{variant:"body14Medium",children:"Earnings: ₹1,250 confirmed"})})]})})})},t={tags:["!live","proposed"],parameters:{docs:{description:{story:"Replica, not the real component: a static copy of the offline strip (same tokens, copy and layout, without the top safe-area inset). Online state: the component renders nothing."}}},render:()=>e.jsxs(r,{style:{width:390,gap:o[16]},children:[e.jsx(a,{variant:"body12Medium",children:"Offline (replica)"}),e.jsx(f,{}),e.jsx(a,{variant:"body12Medium",children:"Online: nothing renders"}),e.jsx(r,{style:{height:o[32]}})]})},i={...t,tags:["!live","proposed"],name:"Variants (one look)",parameters:{docs:{description:{story:"OfflineBanner has no variants: one strip, one message. Replica, not the real component."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The real component inside a phone-sized frame. It shows only when NetInfo reports offline. On web NetInfo reads the browser online state, so switch the browser to offline in devtools (Network, Offline) to see it. The story also dispatches a window "offline" event on mount; this is not verified to work in every browser. The next story shows the same look drawn from the same tokens.'
      }
    }
  },
  render: () => <ComponentHarness>
      <ForceOffline>
        <View style={{
        width: 390,
        height: 200,
        position: 'relative',
        backgroundColor: colors.surface.default
      }}>
          <OfflineBanner />
          <View style={{
          padding: spacing[16],
          paddingTop: spacing[48]
        }}><Text variant="body14Medium">Earnings: ₹1,250 confirmed</Text></View>
        </View>
      </ForceOffline>
    </ComponentHarness>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!live', 'proposed'],
  parameters: {
    docs: {
      description: {
        story: 'Replica, not the real component: a static copy of the offline strip (same tokens, copy and layout, without the top safe-area inset). Online state: the component renders nothing.'
      }
    }
  },
  render: () => <View style={{
    width: 390,
    gap: spacing[16]
  }}>
      <Text variant="body12Medium">Offline (replica)</Text>
      <Replica />
      <Text variant="body12Medium">Online: nothing renders</Text>
      <View style={{
      height: spacing[32]
    }} />
    </View>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...States,
  tags: ['!live', 'proposed'],
  name: 'Variants (one look)',
  parameters: {
    docs: {
      description: {
        story: 'OfflineBanner has no variants: one strip, one message. Replica, not the real component.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const ue=["Playground","States","Variants"];export{n as Playground,t as States,i as Variants,ue as __namedExportsOrder,ge as default};
