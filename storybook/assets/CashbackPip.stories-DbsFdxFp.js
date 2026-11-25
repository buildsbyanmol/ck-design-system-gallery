import{j as e,V as m}from"./iframe-EJmZd_T6.js";import{C as o}from"./CashbackPip-Djeiz7Gl.js";import{C as c}from"./ScreenHarness-Dd1A2iH9.js";import{S as l,L as d}from"./_chrome-B3JZQHGx.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./LinearGradient-D-mm0dto.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./Icon-DYjHrDGy.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./index-w7N_oekq.js";import"./elevation-DG0ULmpQ.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./index-DqKrqPv5.js";import"./cardTools-a-yZH8gZ.js";import"./amountInput-rjKWAIpS.js";import"./analytics-DGnEPG-P.js";import"./BottomSheetHeader--tduzGuO.js";import"./phone-vSJF-a1K.js";import"./index-VRixmpvR.js";const i='The pip is Android only. It returns null when Platform.OS is not "android". Storybook runs on web, so the area below is empty. A blank frame is the web output, not a crash. It also needs the CashbackGuard native module. To see the drag, snap and genie collapse, run the app on an Android device.',s=()=>{},n=({children:p})=>e.jsx(c,{children:e.jsx(m,{style:{width:390,height:844,alignSelf:"center"},children:p})}),be={title:"Components/Page sections/CashbackPip",component:o,tags:["autodocs","live"],parameters:{source:"src/organisms/CashbackPip.tsx",layout:"fullscreen",docs:{description:{component:"A draggable floating pip on the Orders screen that links to Never Miss Cashback setup. It collapses to a side notch. Android only."}}},argTypes:{autoExpand:{control:"boolean",description:"False keeps the pip docked as the side notch. Used on the Orders empty state."},onPress:{control:!1}},args:{onPress:s,autoExpand:!0},render:p=>e.jsx(n,{children:e.jsx(o,{...p})})},r={parameters:{docs:{description:{story:i}}}},t={parameters:{docs:{description:{story:`Expanded (autoExpand true) and docked notch (autoExpand false). ${i}`}}},render:()=>e.jsxs(l,{children:[e.jsx(d,{label:"autoExpand = true",children:e.jsx(n,{children:e.jsx(o,{onPress:s,autoExpand:!0})})}),e.jsx(d,{label:"autoExpand = false (docked notch)",children:e.jsx(n,{children:e.jsx(o,{onPress:s,autoExpand:!1})})})]})},a={parameters:{docs:{description:{story:`States in the app: expanded pip with two rolling lines, dragging, snapped to an edge, collapsed notch. The pip is hidden when the feature is already on. ${i}`}}},render:()=>e.jsx(n,{children:e.jsx(o,{onPress:s})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
