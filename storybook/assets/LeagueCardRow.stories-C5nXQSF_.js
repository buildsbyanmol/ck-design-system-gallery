import{j as e}from"./iframe-EJmZd_T6.js";import{L as a,t as m}from"./LeagueCardRow-BzeydE4N.js";import{C as p,R as n,L as o,r as t,F as d,S as u,a as w,b as h,d as g}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./elevation-DG0ULmpQ.js";import"./cardTools-a-yZH8gZ.js";import"./cards-Bc9fBrua.js";const b=p.map(s=>s.key),v=m(n.map(s=>s.savings),b),r={row:n[0],rank:1,view:"quick",columns:p,tops:v,searchHit:!1,mine:!1,onPress:()=>{},onApply:()=>{}},he={title:"Components/Cards/LeagueCardRow",component:a,tags:["autodocs","live"],decorators:[s=>e.jsx(d,{children:e.jsx(s,{})})],parameters:{source:"src/molecules/LeagueCardRow.tsx",docs:{description:{component:'One row of the league table (tools results): rank, art, name, bank, labels, the headline "Annual savings", and the sum that adds up to it. Two views: quick (the sum in one line) and category (one cell per spend).'}}},argTypes:{view:{control:"select",options:["quick","category"]},rank:{control:{type:"number",min:1,max:99}},searchHit:{control:"boolean"},mine:{control:"boolean"},row:{control:!1},columns:{control:!1},tops:{control:!1},onPress:{control:!1},onApply:{control:!1}},args:r},i={},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:'view="quick": Savings + Milestones - Annual fee = Annual savings'}),e.jsx(a,{...r,row:n[0],rank:1}),e.jsx(o,{children:`view="quick", fee waived at the user's spend (₹0 plus the tag), with CashKaro reward`}),e.jsx(a,{...r,row:n[1],rank:2}),e.jsx(o,{children:'view="quick", with a Lounge cell'}),e.jsx(a,{...r,row:n[3],rank:4}),e.jsx(o,{children:'view="category": one cell per column, "Top" on the best value of each'}),e.jsx(a,{...r,view:"category",row:n[0],rank:1}),e.jsx(o,{children:'view="category", lifetime free card'}),e.jsx(a,{...r,view:"category",row:n[2],rank:3})]})},c={parameters:{docs:{description:{story:'Mine: tinted and labelled "Your card". Search hit: heavy focus border. A row with no app card (not in the app) has no Apply and an empty art box, because the remote image is not loaded here. Savings, fees and ranks in this file are made up for the story. Open question for product: a card that loses money (negative annual savings) is shown in the normal text colour, not red.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"mine"}),e.jsx(a,{...r,row:n[1],rank:2,mine:!0}),e.jsx(o,{children:"search hit"}),e.jsx(a,{...r,row:n[2],rank:3,searchHit:!0}),e.jsx(o,{children:"not in the app (no Apply, negative annual savings)"}),e.jsx(a,{...r,row:t(5,u),rank:5}),e.jsx(o,{children:"discontinued and invite only, big fee"}),e.jsx(a,{...r,row:t(4,w,"axis-magnus"),rank:4,view:"category"}),e.jsx(o,{children:"annual savings ₹0"}),e.jsx(a,{...r,row:t(9,h,"icici-coral"),rank:9}),e.jsx(o,{children:"annual savings ₹10,00,000, long name"}),e.jsx(a,{...r,row:t(1,g),rank:1}),e.jsx(o,{children:"rank 100"}),e.jsx(a,{...r,row:n[0],rank:100})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>view="quick": Savings + Milestones - Annual fee = Annual savings</Label>
      <LeagueCardRow {...base} row={ROWS[0]} rank={1} />
      <Label>view="quick", fee waived at the user's spend (₹0 plus the tag), with CashKaro reward</Label>
      <LeagueCardRow {...base} row={ROWS[1]} rank={2} />
      <Label>view="quick", with a Lounge cell</Label>
      <LeagueCardRow {...base} row={ROWS[3]} rank={4} />
      <Label>view="category": one cell per column, "Top" on the best value of each</Label>
      <LeagueCardRow {...base} view="category" row={ROWS[0]} rank={1} />
      <Label>view="category", lifetime free card</Label>
      <LeagueCardRow {...base} view="category" row={ROWS[2]} rank={3} />
    </>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Mine: tinted and labelled "Your card". Search hit: heavy focus border. A row with no app card (not in the app) has no Apply and an empty art box, because the remote image is not loaded here. Savings, fees and ranks in this file are made up for the story. Open question for product: a card that loses money (negative annual savings) is shown in the normal text colour, not red.'
      }
    }
  },
  render: () => <>
      <Label>mine</Label>
      <LeagueCardRow {...base} row={ROWS[1]} rank={2} mine />
      <Label>search hit</Label>
      <LeagueCardRow {...base} row={ROWS[2]} rank={3} searchHit />
      <Label>not in the app (no Apply, negative annual savings)</Label>
      <LeagueCardRow {...base} row={row(5, S_NOT_IN_APP)} rank={5} />
      <Label>discontinued and invite only, big fee</Label>
      <LeagueCardRow {...base} row={row(4, S_MAGNUS, 'axis-magnus')} rank={4} view="category" />
      <Label>annual savings ₹0</Label>
      <LeagueCardRow {...base} row={row(9, S_ZERO, 'icici-coral')} rank={9} />
      <Label>annual savings ₹10,00,000, long name</Label>
      <LeagueCardRow {...base} row={row(1, S_BIG)} rank={1} />
      <Label>rank 100</Label>
      <LeagueCardRow {...base} row={ROWS[0]} rank={100} />
    </>
}`,...c.parameters?.docs?.source}}};const ge=["Playground","Variants","States"];export{i as Playground,c as States,l as Variants,ge as __namedExportsOrder,he as default};
