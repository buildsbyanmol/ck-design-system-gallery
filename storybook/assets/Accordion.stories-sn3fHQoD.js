import{j as e,V as l,r as c,R as g,c as b}from"./iframe-EJmZd_T6.js";import{A as h}from"./Accordion-EmkSn1a8.js";import{s as r,t as x}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const y=390,u=({children:t})=>e.jsx(l,{style:{width:y,padding:r[16],gap:r[12]},children:t}),a=({children:t})=>e.jsx(g,{style:{...x.caption10Medium,color:b.text.tertiary},children:t}),i="Cashback is tracked within 72 hours of your purchase and confirmed once the store settles the order. Rewards on a card come after the bank approves it.";function o(t){const[m,p]=c.useState(t.expanded);return c.useEffect(()=>p(t.expanded),[t.expanded]),e.jsx(h,{...t,expanded:m,onToggle:p})}const ce={title:"Components/Accordions/Accordion",component:h,tags:["autodocs","live"],decorators:[t=>e.jsx(u,{children:e.jsx(t,{})})],parameters:{source:"src/molecules/Accordion.tsx",docs:{description:{component:"One expandable row: a title that opens a body, in three looks (default, highlight, bare)."}}},argTypes:{title:{control:"text"},body:{control:"text"},expanded:{control:"boolean"},state:{control:"select",options:["default","highlight","bare"]},leadingIcon:{control:"select",options:[void 0,"help-ticket-outline","help-cash-outline","help-rupee-outline","feat-lounge-outline","feat-rewards-outline"]},trailingIcon:{control:"boolean"},onToggle:{control:!1},style:{control:!1}},args:{title:"When do I get my cashback?",body:i,expanded:!0,state:"default",trailingIcon:!0}},s={render:t=>e.jsx(o,{...t})},n={render:()=>e.jsxs(e.Fragment,{children:[["default","highlight","bare"].map(t=>e.jsxs(l,{style:{gap:r[4]},children:[e.jsx(a,{children:`state="${t}"`}),e.jsx(o,{title:"When do I get my cashback?",body:i,expanded:!0,state:t})]},t)),e.jsxs(l,{style:{gap:r[4]},children:[e.jsx(a,{children:"leadingIcon"}),e.jsx(o,{title:"Missing cashback?",body:i,expanded:!0,leadingIcon:"help-cash-outline"})]}),e.jsxs(l,{style:{gap:r[4]},children:[e.jsx(a,{children:"trailingIcon=false"}),e.jsx(o,{title:"Always open section",body:i,expanded:!0,trailingIcon:!1})]})]})},d={parameters:{docs:{description:{story:"Collapsed shows the title only. Expanded shows the body under it. No body: expanding changes the chevron only. A long title wraps to more lines, it is not cut. Tap any row to toggle it."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"collapsed"}),e.jsx(o,{title:"How do I withdraw ₹10,00,000?",body:i,expanded:!1}),e.jsx(a,{children:"expanded"}),e.jsx(o,{title:"How do I withdraw ₹10,00,000?",body:i,expanded:!0}),e.jsx(a,{children:"no body"}),e.jsx(o,{title:"Title with no body",expanded:!0}),e.jsx(a,{children:"long title"}),e.jsx(o,{title:"I shopped on Amazon through the app but my cashback of ₹0 is not showing in the Pending tab after four days, what should I do?",body:i,expanded:!0}),e.jsx(a,{children:"1 item in a list, then many"}),e.jsx(o,{title:"Only one question",body:"One answer.",expanded:!1}),["Cashback status","Withdrawal limits","Card eligibility","Referral rewards","Account deletion"].map(t=>e.jsx(o,{title:t,body:i,expanded:!1,state:"bare"},t))]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
