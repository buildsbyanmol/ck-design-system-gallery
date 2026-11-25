import{j as e}from"./iframe-DK2xttIN.js";import{S as t}from"./StoreCashbackTimelines-Q4kc_Bfr.js";import{S as l,L as i}from"./_chrome-COksRak-.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./Grid-CzeeP92Z.js";import"./elevation-DG0ULmpQ.js";const r=[{label:"Cashback tracks in",metric:"30",unit:"Minutes"},{label:"Cashback Confirms in",metric:"65",unit:"Days"},{label:"Cashback on Mcaffeine app orders",metric:"NO",unit:"Minutes",unitHidden:!0}],ie={title:"Components/Page sections/StoreCashbackTimelines",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/StoreCashbackTimelines.tsx",docs:{description:{component:"The Important Details block on a store page: a grid of cashback timeline tiles (tracks in, confirms in, app orders)."}}},argTypes:{appOrderTile:{control:"boolean",description:"On shows the third tile on a new row. Off shows two tiles."},tiles:{control:"object"},onTilePress:{control:!1},style:{control:!1}},args:{appOrderTile:!0,tiles:r}},a={},s={render:()=>e.jsxs(l,{children:[e.jsx(i,{label:"appOrderTile = true (3 tiles)",children:e.jsx(t,{tiles:r})}),e.jsx(i,{label:"appOrderTile = false (2 tiles)",children:e.jsx(t,{tiles:r,appOrderTile:!1})})]})},o={parameters:{docs:{description:{story:"The component does not handle an empty tiles list. Open question for product: what a store with no timeline data should show."}}},render:()=>e.jsxs(l,{children:[e.jsx(i,{label:"One tile",children:e.jsx(t,{tiles:r.slice(0,1)})}),e.jsx(i,{label:"Many tiles (5)",children:e.jsx(t,{tiles:[...r,{label:"Payment in",metric:"90",unit:"Days"},{label:"Minimum payout",metric:"₹250"}]})}),e.jsx(i,{label:"Long label and large metric",children:e.jsx(t,{tiles:[{label:"Cashback on orders paid with gift cards and store credit",metric:"₹10,00,000",unit:"Max"},r[1]],appOrderTile:!1})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
