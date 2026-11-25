import{j as e,V as r,c as s,r as d}from"./iframe-EJmZd_T6.js";import{O as p}from"./OfflineBanner-WiNzkl1w.js";import{C as c}from"./ScreenHarness-Dd1A2iH9.js";import{T as a}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as o,b as l}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./cardTools-a-yZH8gZ.js";import"./amountInput-rjKWAIpS.js";import"./analytics-DGnEPG-P.js";import"./with-selector-HFsk6Txg.js";import"./BottomSheetHeader--tduzGuO.js";import"./phone-vSJF-a1K.js";import"./index-VRixmpvR.js";import"./index-AjmY8xRX.js";import"./index-DqKrqPv5.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./tagVariants-C3ziFvwj.js";const ge={title:"Components/Messages and tooltips/OfflineBanner",component:p,tags:["autodocs","live"],parameters:{source:"src/molecules/OfflineBanner.tsx",layout:"fullscreen",docs:{description:{component:"App-wide strip pinned to the top of the app while the device has no internet. It takes no props: it reads connectivity from NetInfo and renders nothing while online."}}}};function f(){return e.jsx(r,{style:{paddingTop:o[4],paddingBottom:o[4],paddingHorizontal:o[16],backgroundColor:s.feedback.warning.subtle,borderBottomWidth:l.thin,borderBottomColor:s.feedback.warning.border,alignItems:"center"},children:e.jsx(a,{variant:"body12SemiBold",color:s.feedback.warning.text,align:"center",children:"You're offline. We'll refresh when you're back online."})})}function h({children:m}){return d.useEffect(()=>{try{window.dispatchEvent(new Event("offline"))}catch{}},[]),e.jsx(e.Fragment,{children:m})}const n={parameters:{docs:{description:{story:'The real component inside a phone-sized frame. It shows only when NetInfo reports offline. On web NetInfo reads the browser online state, so switch the browser to offline in devtools (Network, Offline) to see it. The story also dispatches a window "offline" event on mount; this is not verified to work in every browser. The next story shows the same look drawn from the same tokens.'}}},render:()=>e.jsx(c,{children:e.jsx(h,{children:e.jsxs(r,{style:{width:390,height:200,position:"relative",backgroundColor:s.surface.default},children:[e.jsx(p,{}),e.jsx(r,{style:{padding:o[16],paddingTop:o[48]},children:e.jsx(a,{variant:"body14Medium",children:"Earnings: ₹1,250 confirmed"})})]})})})},t={tags:["!live","proposed"],parameters:{docs:{description:{story:"Replica, not the real component: a static copy of the offline strip (same tokens, copy and layout, without the top safe-area inset). Online state: the component renders nothing."}}},render:()=>e.jsxs(r,{style:{width:390,gap:o[16]},children:[e.jsx(a,{variant:"body12Medium",children:"Offline (replica)"}),e.jsx(f,{}),e.jsx(a,{variant:"body12Medium",children:"Online: nothing renders"}),e.jsx(r,{style:{height:o[32]}})]})},i={...t,tags:["!live","proposed"],name:"Variants (one look)",parameters:{docs:{description:{story:"OfflineBanner has no variants: one strip, one message. Replica, not the real component."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
