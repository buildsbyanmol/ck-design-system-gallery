import{j as e,V as l,r as c,R as g,c as b}from"./iframe-DK2xttIN.js";import{A as h}from"./Accordion-D2Xjx4kK.js";import{s as r,t as x}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const y=390,u=({children:t})=>e.jsx(l,{style:{width:y,padding:r[16],gap:r[12]},children:t}),a=({children:t})=>e.jsx(g,{style:{...x.caption10Medium,color:b.text.tertiary},children:t}),i="Cashback is tracked within 72 hours of your purchase and confirmed once the store settles the order. Rewards on a card come after the bank approves it.";function o(t){const[m,p]=c.useState(t.expanded);return c.useEffect(()=>p(t.expanded),[t.expanded]),e.jsx(h,{...t,expanded:m,onToggle:p})}const ce={title:"Components/Accordions/Accordion",component:h,tags:["autodocs","live"],decorators:[t=>e.jsx(u,{children:e.jsx(t,{})})],parameters:{source:"src/molecules/Accordion.tsx",docs:{description:{component:"One expandable row: a title that opens a body, in three looks (default, highlight, bare)."}}},argTypes:{title:{control:"text"},body:{control:"text"},expanded:{control:"boolean"},state:{control:"select",options:["default","highlight","bare"]},leadingIcon:{control:"select",options:[void 0,"help-ticket-outline","help-cash-outline","help-rupee-outline","feat-lounge-outline","feat-rewards-outline"]},trailingIcon:{control:"boolean"},onToggle:{control:!1},style:{control:!1}},args:{title:"When do I get my cashback?",body:i,expanded:!0,state:"default",trailingIcon:!0}},s={render:t=>e.jsx(o,{...t})},n={render:()=>e.jsxs(e.Fragment,{children:[["default","highlight","bare"].map(t=>e.jsxs(l,{style:{gap:r[4]},children:[e.jsx(a,{children:`state="${t}"`}),e.jsx(o,{title:"When do I get my cashback?",body:i,expanded:!0,state:t})]},t)),e.jsxs(l,{style:{gap:r[4]},children:[e.jsx(a,{children:"leadingIcon"}),e.jsx(o,{title:"Missing cashback?",body:i,expanded:!0,leadingIcon:"help-cash-outline"})]}),e.jsxs(l,{style:{gap:r[4]},children:[e.jsx(a,{children:"trailingIcon=false"}),e.jsx(o,{title:"Always open section",body:i,expanded:!0,trailingIcon:!1})]})]})},d={parameters:{docs:{description:{story:"Collapsed shows the title only. Expanded shows the body under it. No body: expanding changes the chevron only. A long title wraps to more lines, it is not cut. Tap any row to toggle it."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"collapsed"}),e.jsx(o,{title:"How do I withdraw ₹10,00,000?",body:i,expanded:!1}),e.jsx(a,{children:"expanded"}),e.jsx(o,{title:"How do I withdraw ₹10,00,000?",body:i,expanded:!0}),e.jsx(a,{children:"no body"}),e.jsx(o,{title:"Title with no body",expanded:!0}),e.jsx(a,{children:"long title"}),e.jsx(o,{title:"I shopped on Amazon through the app but my cashback of ₹0 is not showing in the Pending tab after four days, what should I do?",body:i,expanded:!0}),e.jsx(a,{children:"1 item in a list, then many"}),e.jsx(o,{title:"Only one question",body:"One answer.",expanded:!1}),["Cashback status","Withdrawal limits","Card eligibility","Referral rewards","Account deletion"].map(t=>e.jsx(o,{title:t,body:i,expanded:!1,state:"bare"},t))]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Live {...args} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {(['default', 'highlight', 'bare'] as const).map(s => <View key={s} style={{
      gap: spacing[4]
    }}>
          <Label>{\`state="\${s}"\`}</Label>
          <Live title="When do I get my cashback?" body={BODY} expanded state={s} />
        </View>)}
      <View style={{
      gap: spacing[4]
    }}>
        <Label>leadingIcon</Label>
        <Live title="Missing cashback?" body={BODY} expanded leadingIcon="help-cash-outline" />
      </View>
      <View style={{
      gap: spacing[4]
    }}>
        <Label>trailingIcon=false</Label>
        <Live title="Always open section" body={BODY} expanded trailingIcon={false} />
      </View>
    </>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Collapsed shows the title only. Expanded shows the body under it. No body: expanding changes the chevron only. A long title wraps to more lines, it is not cut. Tap any row to toggle it.'
      }
    }
  },
  render: () => <>
      <Label>collapsed</Label>
      <Live title="How do I withdraw ₹10,00,000?" body={BODY} expanded={false} />
      <Label>expanded</Label>
      <Live title="How do I withdraw ₹10,00,000?" body={BODY} expanded />
      <Label>no body</Label>
      <Live title="Title with no body" expanded />
      <Label>long title</Label>
      <Live title="I shopped on Amazon through the app but my cashback of ₹0 is not showing in the Pending tab after four days, what should I do?" body={BODY} expanded />
      <Label>1 item in a list, then many</Label>
      <Live title="Only one question" body="One answer." expanded={false} />
      {['Cashback status', 'Withdrawal limits', 'Card eligibility', 'Referral rewards', 'Account deletion'].map(t => <Live key={t} title={t} body={BODY} expanded={false} state="bare" />)}
    </>
}`,...d.parameters?.docs?.source}}};const he=["Playground","Variants","States"];export{s as Playground,d as States,n as Variants,he as __namedExportsOrder,ce as default};
