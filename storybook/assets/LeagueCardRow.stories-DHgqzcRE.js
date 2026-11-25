import{j as e}from"./iframe-BxRbKpJi.js";import{L as a,t as m}from"./LeagueCardRow-Cw5WpYKg.js";import{C as p,R as n,L as o,r as t,F as d,S as u,a as w,b as h,d as g}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./elevation-DG0ULmpQ.js";import"./cardTools-a-yZH8gZ.js";import"./cards-Bc9fBrua.js";const b=p.map(s=>s.key),v=m(n.map(s=>s.savings),b),r={row:n[0],rank:1,view:"quick",columns:p,tops:v,searchHit:!1,mine:!1,onPress:()=>{},onApply:()=>{}},he={title:"Components/Cards/LeagueCardRow",component:a,tags:["autodocs","live"],decorators:[s=>e.jsx(d,{children:e.jsx(s,{})})],parameters:{source:"src/molecules/LeagueCardRow.tsx",docs:{description:{component:'One row of the league table (tools results): rank, art, name, bank, labels, the headline "Annual savings", and the sum that adds up to it. Two views: quick (the sum in one line) and category (one cell per spend).'}}},argTypes:{view:{control:"select",options:["quick","category"]},rank:{control:{type:"number",min:1,max:99}},searchHit:{control:"boolean"},mine:{control:"boolean"},row:{control:!1},columns:{control:!1},tops:{control:!1},onPress:{control:!1},onApply:{control:!1}},args:r},i={},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:'view="quick": Savings + Milestones - Annual fee = Annual savings'}),e.jsx(a,{...r,row:n[0],rank:1}),e.jsx(o,{children:`view="quick", fee waived at the user's spend (₹0 plus the tag), with CashKaro reward`}),e.jsx(a,{...r,row:n[1],rank:2}),e.jsx(o,{children:'view="quick", with a Lounge cell'}),e.jsx(a,{...r,row:n[3],rank:4}),e.jsx(o,{children:'view="category": one cell per column, "Top" on the best value of each'}),e.jsx(a,{...r,view:"category",row:n[0],rank:1}),e.jsx(o,{children:'view="category", lifetime free card'}),e.jsx(a,{...r,view:"category",row:n[2],rank:3})]})},c={parameters:{docs:{description:{story:'Mine: tinted and labelled "Your card". Search hit: heavy focus border. A row with no app card (not in the app) has no Apply and an empty art box, because the remote image is not loaded here. Savings, fees and ranks in this file are made up for the story. Open question for product: a card that loses money (negative annual savings) is shown in the normal text colour, not red.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"mine"}),e.jsx(a,{...r,row:n[1],rank:2,mine:!0}),e.jsx(o,{children:"search hit"}),e.jsx(a,{...r,row:n[2],rank:3,searchHit:!0}),e.jsx(o,{children:"not in the app (no Apply, negative annual savings)"}),e.jsx(a,{...r,row:t(5,u),rank:5}),e.jsx(o,{children:"discontinued and invite only, big fee"}),e.jsx(a,{...r,row:t(4,w,"axis-magnus"),rank:4,view:"category"}),e.jsx(o,{children:"annual savings ₹0"}),e.jsx(a,{...r,row:t(9,h,"icici-coral"),rank:9}),e.jsx(o,{children:"annual savings ₹10,00,000, long name"}),e.jsx(a,{...r,row:t(1,g),rank:1}),e.jsx(o,{children:"rank 100"}),e.jsx(a,{...r,row:n[0],rank:100})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
