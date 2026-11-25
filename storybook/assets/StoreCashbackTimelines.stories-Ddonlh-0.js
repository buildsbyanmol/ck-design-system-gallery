import{j as e}from"./iframe-EJmZd_T6.js";import{S as t}from"./StoreCashbackTimelines-Cl6g2ElJ.js";import{S as l,L as i}from"./_chrome-B3JZQHGx.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./Grid-B78zqmRF.js";import"./elevation-DG0ULmpQ.js";const r=[{label:"Cashback tracks in",metric:"30",unit:"Minutes"},{label:"Cashback Confirms in",metric:"65",unit:"Days"},{label:"Cashback on Mcaffeine app orders",metric:"NO",unit:"Minutes",unitHidden:!0}],ie={title:"Components/Page sections/StoreCashbackTimelines",component:t,tags:["autodocs","live"],parameters:{source:"src/organisms/StoreCashbackTimelines.tsx",docs:{description:{component:"The Important Details block on a store page: a grid of cashback timeline tiles (tracks in, confirms in, app orders)."}}},argTypes:{appOrderTile:{control:"boolean",description:"On shows the third tile on a new row. Off shows two tiles."},tiles:{control:"object"},onTilePress:{control:!1},style:{control:!1}},args:{appOrderTile:!0,tiles:r}},a={},s={render:()=>e.jsxs(l,{children:[e.jsx(i,{label:"appOrderTile = true (3 tiles)",children:e.jsx(t,{tiles:r})}),e.jsx(i,{label:"appOrderTile = false (2 tiles)",children:e.jsx(t,{tiles:r,appOrderTile:!1})})]})},o={parameters:{docs:{description:{story:"The component does not handle an empty tiles list. Open question for product: what a store with no timeline data should show."}}},render:()=>e.jsxs(l,{children:[e.jsx(i,{label:"One tile",children:e.jsx(t,{tiles:r.slice(0,1)})}),e.jsx(i,{label:"Many tiles (5)",children:e.jsx(t,{tiles:[...r,{label:"Payment in",metric:"90",unit:"Days"},{label:"Minimum payout",metric:"₹250"}]})}),e.jsx(i,{label:"Long label and large metric",children:e.jsx(t,{tiles:[{label:"Cashback on orders paid with gift cards and store credit",metric:"₹10,00,000",unit:"Max"},r[1]],appOrderTile:!1})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
