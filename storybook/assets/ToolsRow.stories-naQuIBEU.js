import{j as o}from"./iframe-DK2xttIN.js";import{T as s}from"./ToolsRow-_JOpzbYL.js";import{p,S as a,B as i}from"./_chrome-iej18qaj.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./useScreenFocused-CQUqApbV.js";import"./with-selector-CpCbjLFO.js";import"./cardTools-Ct3zlgT2.js";import"./index-B-3z50BQ.js";import"./index-0euZ7etH.js";const io={title:"Components/Carousels/ToolsRow",component:s,tags:["autodocs","live"],decorators:[p],parameters:{layout:"centered",source:"src/organisms/ToolsRow.tsx",docs:{description:{component:"One row of four card-tool tiles under the Home masthead; two tiles rotate a word every few seconds."}}},argTypes:{onPress:{control:!1,description:"Fires with the tool id and the word on screen (undefined for fixed tiles)."},style:{control:!1}},args:{onPress:()=>{}}},r={},t={parameters:{docs:{description:{story:"The row has one layout in the app. Tiles share the row width at normal text size and scroll sideways at a larger OS font size. A browser story cannot change the OS font scale, so only the shared-width layout shows."}}},render:()=>o.jsx(a,{children:o.jsx(i,{label:"Default: four tiles, two rotate (Best card for ...)",children:o.jsx(s,{onPress:()=>{}})})})},e={parameters:{docs:{description:{story:"Rotation runs while the story is open and is skipped when the browser asks for reduced motion. No loading, empty or error state exists: the tiles are fixed. HomeSkeleton reserves the row height with TOOLS_ROW_FIT_H."}}},render:()=>o.jsx(a,{children:o.jsx(i,{label:"Rotating (wait about 4 seconds for the words to change)",children:o.jsx(s,{onPress:()=>{}})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
