import{j as e,V as m}from"./iframe-BxRbKpJi.js";import{C as o}from"./CashbackPip-cXr-7uZt.js";import{C as c}from"./ScreenHarness-Iz1hq-Wj.js";import{S as l,L as d}from"./_chrome-Bs-eEjQF.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-Bn01aVoN.js";import"./LinearGradient-D-mTzrbk.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./Icon-D2-s9TUf.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./index-BYGLv9tE.js";import"./elevation-DG0ULmpQ.js";import"./useScreenFocused-B8TJihc3.js";import"./with-selector-BmPKclR2.js";import"./index-W0e2q_Mc.js";import"./cardTools-a-yZH8gZ.js";import"./amountInput-DaOLtk6i.js";import"./analytics-CHXP_Sdz.js";import"./BottomSheetHeader-BNjtQgSt.js";import"./phone-vSJF-a1K.js";import"./index-kdCBfTvH.js";const i='The pip is Android only. It returns null when Platform.OS is not "android". Storybook runs on web, so the area below is empty. A blank frame is the web output, not a crash. It also needs the CashbackGuard native module. To see the drag, snap and genie collapse, run the app on an Android device.',s=()=>{},n=({children:p})=>e.jsx(c,{children:e.jsx(m,{style:{width:390,height:844,alignSelf:"center"},children:p})}),be={title:"Components/Page sections/CashbackPip",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/CashbackPip.tsx",layout:"fullscreen",docs:{description:{component:"A draggable floating pip on the Orders screen that links to Never Miss Cashback setup. It collapses to a side notch. Android only."}}},argTypes:{autoExpand:{control:"boolean",description:"False keeps the pip docked as the side notch. Used on the Orders empty state."},onPress:{control:!1}},args:{onPress:s,autoExpand:!0},render:p=>e.jsx(n,{children:e.jsx(o,{...p})})},r={parameters:{docs:{description:{story:i}}}},t={parameters:{docs:{description:{story:`Expanded (autoExpand true) and docked notch (autoExpand false). ${i}`}}},render:()=>e.jsxs(l,{children:[e.jsx(d,{label:"autoExpand = true",children:e.jsx(n,{children:e.jsx(o,{onPress:s,autoExpand:!0})})}),e.jsx(d,{label:"autoExpand = false (docked notch)",children:e.jsx(n,{children:e.jsx(o,{onPress:s,autoExpand:!1})})})]})},a={parameters:{docs:{description:{story:`States in the app: expanded pip with two rolling lines, dragging, snapped to an edge, collapsed notch. The pip is hidden when the feature is already on. ${i}`}}},render:()=>e.jsx(n,{children:e.jsx(o,{onPress:s})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: WEB_NOTE
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`Expanded (autoExpand true) and docked notch (autoExpand false). \${WEB_NOTE}\`
      }
    }
  },
  render: () => <Stack>
      <Labeled label="autoExpand = true"><Frame><CashbackPip onPress={noop} autoExpand /></Frame></Labeled>
      <Labeled label="autoExpand = false (docked notch)"><Frame><CashbackPip onPress={noop} autoExpand={false} /></Frame></Labeled>
    </Stack>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`States in the app: expanded pip with two rolling lines, dragging, snapped to an edge, collapsed notch. The pip is hidden when the feature is already on. \${WEB_NOTE}\`
      }
    }
  },
  render: () => <Frame><CashbackPip onPress={noop} /></Frame>
}`,...a.parameters?.docs?.source}}};const ke=["Playground","Variants","States"];export{r as Playground,a as States,t as Variants,ke as __namedExportsOrder,be as default};
