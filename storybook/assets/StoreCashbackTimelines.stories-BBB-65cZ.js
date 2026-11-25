import{j as e}from"./iframe-BxRbKpJi.js";import{S as t}from"./StoreCashbackTimelines-BMqn_X_T.js";import{S as l,L as i}from"./_chrome-Bs-eEjQF.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./Grid-hCM4pFQx.js";import"./elevation-DG0ULmpQ.js";const r=[{label:"Cashback tracks in",metric:"30",unit:"Minutes"},{label:"Cashback Confirms in",metric:"65",unit:"Days"},{label:"Cashback on Mcaffeine app orders",metric:"NO",unit:"Minutes",unitHidden:!0}],ie={title:"Components/Page sections/StoreCashbackTimelines",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/StoreCashbackTimelines.tsx",docs:{description:{component:"The Important Details block on a store page: a grid of cashback timeline tiles (tracks in, confirms in, app orders)."}}},argTypes:{appOrderTile:{control:"boolean",description:"On shows the third tile on a new row. Off shows two tiles."},tiles:{control:"object"},onTilePress:{control:!1},style:{control:!1}},args:{appOrderTile:!0,tiles:r}},a={},s={render:()=>e.jsxs(l,{children:[e.jsx(i,{label:"appOrderTile = true (3 tiles)",children:e.jsx(t,{tiles:r})}),e.jsx(i,{label:"appOrderTile = false (2 tiles)",children:e.jsx(t,{tiles:r,appOrderTile:!1})})]})},o={parameters:{docs:{description:{story:"The component does not handle an empty tiles list. Open question for product: what a store with no timeline data should show."}}},render:()=>e.jsxs(l,{children:[e.jsx(i,{label:"One tile",children:e.jsx(t,{tiles:r.slice(0,1)})}),e.jsx(i,{label:"Many tiles (5)",children:e.jsx(t,{tiles:[...r,{label:"Payment in",metric:"90",unit:"Days"},{label:"Minimum payout",metric:"₹250"}]})}),e.jsx(i,{label:"Long label and large metric",children:e.jsx(t,{tiles:[{label:"Cashback on orders paid with gift cards and store credit",metric:"₹10,00,000",unit:"Max"},r[1]],appOrderTile:!1})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Labeled label="appOrderTile = true (3 tiles)"><StoreCashbackTimelines tiles={TILES} /></Labeled>
      <Labeled label="appOrderTile = false (2 tiles)"><StoreCashbackTimelines tiles={TILES} appOrderTile={false} /></Labeled>
    </Stack>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The component does not handle an empty tiles list. Open question for product: what a store with no timeline data should show.'
      }
    }
  },
  render: () => <Stack>
      <Labeled label="One tile"><StoreCashbackTimelines tiles={TILES.slice(0, 1)} /></Labeled>
      <Labeled label="Many tiles (5)"><StoreCashbackTimelines tiles={[...TILES, {
        label: 'Payment in',
        metric: '90',
        unit: 'Days'
      }, {
        label: 'Minimum payout',
        metric: '₹250'
      }]} /></Labeled>
      <Labeled label="Long label and large metric"><StoreCashbackTimelines tiles={[{
        label: 'Cashback on orders paid with gift cards and store credit',
        metric: '₹10,00,000',
        unit: 'Max'
      }, TILES[1]]} appOrderTile={false} /></Labeled>
    </Stack>
}`,...o.parameters?.docs?.source}}};const ae=["Playground","Variants","States"];export{a as Playground,o as States,s as Variants,ae as __namedExportsOrder,ie as default};
