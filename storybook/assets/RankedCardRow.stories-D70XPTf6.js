import{j as e,a as u,r as b}from"./iframe-EJmZd_T6.js";import{R as a}from"./RankedCardRow-DV4oa5uQ.js";import{L as o,s as p,F as h}from"./_shared-DUO1fe1c.js";import{S as m}from"./cards-Bc9fBrua.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./elevation-DG0ULmpQ.js";const d=m[0],r={rank:1,cardImage:d.cardImage,name:p(d),headline:{label:"Net value",amount:10800,period:"year"},reason:"Highest return on your Amazon and food delivery spends.",eligibility:"eligible",onPress:()=>{},onApply:()=>{}};function g(n){const[t,c]=b.useState(!1);return e.jsx(a,{...n,compare:{selected:t,onToggle:c}})}const ce={title:"Components/Cards/RankedCardRow",component:a,tags:["autodocs","live"],decorators:[n=>e.jsx(h,{children:e.jsx(n,{})})],parameters:{source:"src/molecules/RankedCardRow.tsx",docs:{description:{component:"One row of a ranked card result: rank, art, name, one headline rupee value, a reason, an eligibility line and actions. The compact sibling of the Home tile."}}},argTypes:{rank:{control:{type:"number",min:1,max:99}},name:{control:"text"},headline:{control:"object"},reason:{control:"text"},eligibility:{control:"select",options:["eligible","maybe","unknown"]},compare:{control:!1},cardImage:{control:!1},onPress:{control:!1},onApply:{control:!1}},args:r},i={},l={render:()=>e.jsxs(e.Fragment,{children:[["eligible","maybe","unknown"].map((n,t)=>e.jsxs(u.Fragment,{children:[e.jsx(o,{children:`eligibility="${n}"`}),e.jsx(a,{...r,rank:t+1,cardImage:m[t].cardImage,name:p(m[t]),eligibility:n})]},n)),e.jsx(o,{children:"with Compare checkbox (tap it)"}),e.jsx(g,{...r,rank:4}),e.jsx(o,{children:'headline period "month"'}),e.jsx(a,{...r,rank:5,headline:{label:"Net value",amount:900,period:"month"}}),e.jsx(o,{children:"no Apply button"}),e.jsx(a,{...r,rank:6,onApply:void 0})]})},s={parameters:{docs:{description:{story:'The headline amount is a number the screen computed. This part does not decide the net-value rule. Bug seen: eligibility "maybe" uses the same check-circle icon as "eligible", only the colour and the words differ.'}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"amount ₹0, no reason, no actions"}),e.jsx(a,{...r,rank:7,headline:{label:"Net value",amount:0},reason:void 0,eligibility:"unknown",onApply:void 0}),e.jsx(o,{children:"amount ₹10,00,000, rank 12"}),e.jsx(a,{...r,rank:12,headline:{label:"Net value",amount:1e6,period:"year"}}),e.jsx(o,{children:"negative amount"}),e.jsx(a,{...r,rank:8,headline:{label:"Net value",amount:-3800,period:"year"},eligibility:"maybe"}),e.jsx(o,{children:"long name and long reason"}),e.jsx(a,{...r,rank:3,name:"Axis Bank Magnus for Burgundy Private The One Metal Edition Credit Card",reason:"Highest return on your Amazon, Flipkart, food delivery, fuel, flights and hotel spends, with the annual fee waived above the yearly spend you entered earlier."})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {(['eligible', 'maybe', 'unknown'] as const).map((e, i) => <React.Fragment key={e}>
          <Label>{\`eligibility="\${e}"\`}</Label>
          <RankedCardRow {...base} rank={i + 1} cardImage={SAMPLE_CARDS[i].cardImage} name={short(SAMPLE_CARDS[i])} eligibility={e} />
        </React.Fragment>)}
      <Label>with Compare checkbox (tap it)</Label>
      <WithCompare {...base} rank={4} />
      <Label>headline period "month"</Label>
      <RankedCardRow {...base} rank={5} headline={{
      label: 'Net value',
      amount: 900,
      period: 'month'
    }} />
      <Label>no Apply button</Label>
      <RankedCardRow {...base} rank={6} onApply={undefined} />
    </>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The headline amount is a number the screen computed. This part does not decide the net-value rule. Bug seen: eligibility "maybe" uses the same check-circle icon as "eligible", only the colour and the words differ.'
      }
    }
  },
  render: () => <>
      <Label>amount ₹0, no reason, no actions</Label>
      <RankedCardRow {...base} rank={7} headline={{
      label: 'Net value',
      amount: 0
    }} reason={undefined} eligibility="unknown" onApply={undefined} />
      <Label>amount ₹10,00,000, rank 12</Label>
      <RankedCardRow {...base} rank={12} headline={{
      label: 'Net value',
      amount: 1000000,
      period: 'year'
    }} />
      <Label>negative amount</Label>
      <RankedCardRow {...base} rank={8} headline={{
      label: 'Net value',
      amount: -3800,
      period: 'year'
    }} eligibility="maybe" />
      <Label>long name and long reason</Label>
      <RankedCardRow {...base} rank={3} name="Axis Bank Magnus for Burgundy Private The One Metal Edition Credit Card" reason="Highest return on your Amazon, Flipkart, food delivery, fuel, flights and hotel spends, with the annual fee waived above the yearly spend you entered earlier." />
    </>
}`,...s.parameters?.docs?.source}}};const ue=["Playground","Variants","States"];export{i as Playground,s as States,l as Variants,ue as __namedExportsOrder,ce as default};
