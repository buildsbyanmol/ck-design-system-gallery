import{j as o}from"./iframe-BxRbKpJi.js";import{T as s}from"./ToolsRow-Y9TBdzIe.js";import{p,S as a,B as i}from"./_chrome-DBrYcJuA.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./useScreenFocused-B8TJihc3.js";import"./with-selector-BmPKclR2.js";import"./cardTools-a-yZH8gZ.js";import"./index-W0e2q_Mc.js";import"./index-B65UtqpU.js";const io={title:"Components/Carousels/ToolsRow",component:s,tags:["autodocs","live"],decorators:[p],parameters:{layout:"centered",source:"src/organisms/ToolsRow.tsx",docs:{description:{component:"One row of four card-tool tiles under the Home masthead; two tiles rotate a word every few seconds."}}},argTypes:{onPress:{control:!1,description:"Fires with the tool id and the word on screen (undefined for fixed tiles)."},style:{control:!1}},args:{onPress:()=>{}}},r={},t={parameters:{docs:{description:{story:"The row has one layout in the app. Tiles share the row width at normal text size and scroll sideways at a larger OS font size. A browser story cannot change the OS font scale, so only the shared-width layout shows."}}},render:()=>o.jsx(a,{children:o.jsx(i,{label:"Default: four tiles, two rotate (Best card for ...)",children:o.jsx(s,{onPress:()=>{}})})})},e={parameters:{docs:{description:{story:"Rotation runs while the story is open and is skipped when the browser asks for reduced motion. No loading, empty or error state exists: the tiles are fixed. HomeSkeleton reserves the row height with TOOLS_ROW_FIT_H."}}},render:()=>o.jsx(a,{children:o.jsx(i,{label:"Rotating (wait about 4 seconds for the words to change)",children:o.jsx(s,{onPress:()=>{}})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The row has one layout in the app. Tiles share the row width at normal text size and scroll sideways at a larger OS font size. A browser story cannot change the OS font scale, so only the shared-width layout shows.'
      }
    }
  },
  render: () => <Stack>
      <Block label="Default: four tiles, two rotate (Best card for ...)"><ToolsRow onPress={() => {}} /></Block>
    </Stack>
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Rotation runs while the story is open and is skipped when the browser asks for reduced motion. No loading, empty or error state exists: the tiles are fixed. HomeSkeleton reserves the row height with TOOLS_ROW_FIT_H.'
      }
    }
  },
  render: () => <Stack>
      <Block label="Rotating (wait about 4 seconds for the words to change)"><ToolsRow onPress={() => {}} /></Block>
    </Stack>
}`,...e.parameters?.docs?.source}}};const po=["Playground","Variants","States"];export{r as Playground,e as States,t as Variants,po as __namedExportsOrder,io as default};
