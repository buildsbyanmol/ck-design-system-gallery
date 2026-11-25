import{j as e,V as r,c as s,r as d}from"./iframe-BxRbKpJi.js";import{O as p}from"./OfflineBanner-CSlN1bHS.js";import{C as c}from"./ScreenHarness-Iz1hq-Wj.js";import{T as a}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as o,b as l}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-Bn01aVoN.js";import"./cardTools-a-yZH8gZ.js";import"./amountInput-DaOLtk6i.js";import"./analytics-CHXP_Sdz.js";import"./with-selector-BmPKclR2.js";import"./BottomSheetHeader-BNjtQgSt.js";import"./phone-vSJF-a1K.js";import"./index-kdCBfTvH.js";import"./index-DEPmHYsu.js";import"./index-W0e2q_Mc.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./tagVariants-CS75JYCB.js";const ge={title:"Components/Messages and tooltips/OfflineBanner",component:p,tags:["autodocs","live"],parameters:{source:"src/molecules/OfflineBanner.tsx",layout:"fullscreen",docs:{description:{component:"App-wide strip pinned to the top of the app while the device has no internet. It takes no props: it reads connectivity from NetInfo and renders nothing while online."}}}};function f(){return e.jsx(r,{style:{paddingTop:o[4],paddingBottom:o[4],paddingHorizontal:o[16],backgroundColor:s.feedback.warning.subtle,borderBottomWidth:l.thin,borderBottomColor:s.feedback.warning.border,alignItems:"center"},children:e.jsx(a,{variant:"body12SemiBold",color:s.feedback.warning.text,align:"center",children:"You're offline. We'll refresh when you're back online."})})}function h({children:m}){return d.useEffect(()=>{try{window.dispatchEvent(new Event("offline"))}catch{}},[]),e.jsx(e.Fragment,{children:m})}const n={parameters:{docs:{description:{story:'The real component inside a phone-sized frame. It shows only when NetInfo reports offline. On web NetInfo reads the browser online state, so switch the browser to offline in devtools (Network, Offline) to see it. The story also dispatches a window "offline" event on mount; this is not verified to work in every browser. The next story shows the same look drawn from the same tokens.'}}},render:()=>e.jsx(c,{children:e.jsx(h,{children:e.jsxs(r,{style:{width:390,height:200,position:"relative",backgroundColor:s.surface.default},children:[e.jsx(p,{}),e.jsx(r,{style:{padding:o[16],paddingTop:o[48]},children:e.jsx(a,{variant:"body14Medium",children:"Earnings: ₹1,250 confirmed"})})]})})})},t={tags:["!live","proposed"],parameters:{docs:{description:{story:"Replica, not the real component: a static copy of the offline strip (same tokens, copy and layout, without the top safe-area inset). Online state: the component renders nothing."}}},render:()=>e.jsxs(r,{style:{width:390,gap:o[16]},children:[e.jsx(a,{variant:"body12Medium",children:"Offline (replica)"}),e.jsx(f,{}),e.jsx(a,{variant:"body12Medium",children:"Online: nothing renders"}),e.jsx(r,{style:{height:o[32]}})]})},i={...t,tags:["!live","proposed"],name:"Variants (one look)",parameters:{docs:{description:{story:"OfflineBanner has no variants: one strip, one message. Replica, not the real component."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
