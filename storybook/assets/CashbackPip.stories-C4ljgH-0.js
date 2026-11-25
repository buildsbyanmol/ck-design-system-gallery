import{j as e,V as m}from"./iframe-DK2xttIN.js";import{C as o}from"./CashbackPip-BybXcPPd.js";import{C as c}from"./ScreenHarness-DmOWjo0p.js";import{S as l,L as d}from"./_chrome-COksRak-.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-VjBCu6Ra.js";import"./LinearGradient-CErKe_YJ.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./Icon-Do0hMSFa.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./elevation-DG0ULmpQ.js";import"./useScreenFocused-CQUqApbV.js";import"./with-selector-CpCbjLFO.js";import"./index-B-3z50BQ.js";import"./cardTools-Ct3zlgT2.js";import"./amountInput-BIBzs3v3.js";import"./analytics-I5h83qZl.js";import"./BottomSheetHeader-CiFr6Grc.js";import"./phone-vSJF-a1K.js";import"./index-C6NuygFm.js";const i='The pip is Android only. It returns null when Platform.OS is not "android". Storybook runs on web, so the area below is empty. A blank frame is the web output, not a crash. It also needs the CashbackGuard native module. To see the drag, snap and genie collapse, run the app on an Android device.',s=()=>{},n=({children:p})=>e.jsx(c,{children:e.jsx(m,{style:{width:390,height:844,alignSelf:"center"},children:p})}),Ee={title:"Components/Page sections/CashbackPip",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/CashbackPip.tsx",layout:"fullscreen",docs:{description:{component:"A draggable floating pip on the Orders screen that links to Never Miss Cashback setup. It collapses to a side notch. Android only."}}},argTypes:{autoExpand:{control:"boolean",description:"False keeps the pip docked as the side notch. Used on the Orders empty state."},onPress:{control:!1}},args:{onPress:s,autoExpand:!0},render:p=>e.jsx(n,{children:e.jsx(o,{...p})})},r={parameters:{docs:{description:{story:i}}}},t={parameters:{docs:{description:{story:`Expanded (autoExpand true) and docked notch (autoExpand false). ${i}`}}},render:()=>e.jsxs(l,{children:[e.jsx(d,{label:"autoExpand = true",children:e.jsx(n,{children:e.jsx(o,{onPress:s,autoExpand:!0})})}),e.jsx(d,{label:"autoExpand = false (docked notch)",children:e.jsx(n,{children:e.jsx(o,{onPress:s,autoExpand:!1})})})]})},a={parameters:{docs:{description:{story:`States in the app: expanded pip with two rolling lines, dragging, snapped to an edge, collapsed notch. The pip is hidden when the feature is already on. ${i}`}}},render:()=>e.jsx(n,{children:e.jsx(o,{onPress:s})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const be=["Playground","Variants","States"];export{r as Playground,a as States,t as Variants,be as __namedExportsOrder,Ee as default};
