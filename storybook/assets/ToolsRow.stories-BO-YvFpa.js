import{j as o}from"./iframe-EJmZd_T6.js";import{T as s}from"./ToolsRow-CkCFYQgb.js";import{p,S as a,B as i}from"./_chrome-B1UVqLGg.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./cardTools-a-yZH8gZ.js";import"./index-DqKrqPv5.js";import"./index-DYE6U759.js";const io={title:"Components/Carousels/ToolsRow",component:s,tags:["autodocs","live"],decorators:[p],parameters:{layout:"centered",source:"src/organisms/ToolsRow.tsx",docs:{description:{component:"One row of four card-tool tiles under the Home masthead; two tiles rotate a word every few seconds."}}},argTypes:{onPress:{control:!1,description:"Fires with the tool id and the word on screen (undefined for fixed tiles)."},style:{control:!1}},args:{onPress:()=>{}}},r={},t={parameters:{docs:{description:{story:"The row has one layout in the app. Tiles share the row width at normal text size and scroll sideways at a larger OS font size. A browser story cannot change the OS font scale, so only the shared-width layout shows."}}},render:()=>o.jsx(a,{children:o.jsx(i,{label:"Default: four tiles, two rotate (Best card for ...)",children:o.jsx(s,{onPress:()=>{}})})})},e={parameters:{docs:{description:{story:"Rotation runs while the story is open and is skipped when the browser asks for reduced motion. No loading, empty or error state exists: the tiles are fixed. HomeSkeleton reserves the row height with TOOLS_ROW_FIT_H."}}},render:()=>o.jsx(a,{children:o.jsx(i,{label:"Rotating (wait about 4 seconds for the words to change)",children:o.jsx(s,{onPress:()=>{}})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
