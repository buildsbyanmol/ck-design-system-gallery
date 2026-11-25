import{j as e}from"./iframe-EJmZd_T6.js";import{H as t}from"./HelpTicketCard-3T8dLX7S.js";import{i as d}from"./index-DCss3D-b.js";import{L as a,F as c}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./cards-Bc9fBrua.js";const r={status:"in-review",brandLogo:d.stores.myntra31,title:"Myntra order, cashback not tracked",orderId:"CKORDER0001",orderAmount:"2,499",timer:"23:59",ctaLabel:"Add Details",onCtaPress:()=>{}},oe={title:"Components/Cards/HelpTicketCard",component:t,tags:["autodocs","live"],decorators:[n=>e.jsx(c,{children:e.jsx(n,{})})],parameters:{source:"src/molecules/HelpTicketCard.tsx",docs:{description:{component:"The state of one missing cashback request: logo, title, order info, and a countdown, a date, a reason or a link, by status. Five statuses."}}},argTypes:{status:{control:"select",options:["in-review","need-details","tracked","under-review","not-tracked"]},title:{control:"text"},orderId:{control:"text"},orderAmount:{control:"text"},ticketId:{control:"text"},timer:{control:"text"},timerLabel:{control:"text"},expectByDate:{control:"text"},ctaLabel:{control:"select",options:["Add Details","Upload Screenshot","View Details"]},reason:{control:"text"},brandLogo:{control:!1},timerTarget:{control:!1},onCtaPress:{control:!1},style:{control:!1}},args:r},o={},s={parameters:{docs:{description:{story:"All five statuses. in-review uses the fixed `timer` string here, not a live `timerTarget`, so the story does not tick. Bug seen: the source header names three statuses, the type has five."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:'in-review: countdown "hh:mm"'}),e.jsx(t,{...r}),e.jsx(a,{children:"need-details: alert fill, NEED DETAILS tag, link CTA"}),e.jsx(t,{...r,status:"need-details"}),e.jsx(a,{children:'tracked: link CTA "View Details"'}),e.jsx(t,{...r,status:"tracked",ctaLabel:"View Details"}),e.jsx(a,{children:"under-review: ticket id, fixed date, no CTA"}),e.jsx(t,{...r,status:"under-review",ticketId:"HT-00001",expectByDate:"9th Jun '26"}),e.jsx(a,{children:"not-tracked: reason, no CTA"}),e.jsx(t,{...r,status:"not-tracked",reason:"The store did not confirm this order."})]})},i={parameters:{docs:{description:{story:"The title is cut to 2 lines. The amount gets the ₹ symbol from the part, so pass digits only. Without `timer` the countdown reads 00:00."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"long title"}),e.jsx(t,{...r,title:"Myntra order for a pair of shoes and a jacket in the end of season sale, cashback was not tracked in the app"}),e.jsx(a,{children:"amount ₹0"}),e.jsx(t,{...r,orderAmount:"0",status:"tracked",ctaLabel:"View Details"}),e.jsx(a,{children:"amount ₹10,00,000"}),e.jsx(t,{...r,orderAmount:1e6.toLocaleString("en-IN"),status:"need-details"}),e.jsx(a,{children:"in-review without a timer (00:00)"}),e.jsx(t,{...r,timer:void 0}),e.jsx(a,{children:"not-tracked, long reason"}),e.jsx(t,{...r,status:"not-tracked",reason:"The store reported this order as cancelled and returned on the same day, so no commission was paid to CashKaro and no cashback can be added."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All five statuses. in-review uses the fixed \`timer\` string here, not a live \`timerTarget\`, so the story does not tick. Bug seen: the source header names three statuses, the type has five.'
      }
    }
  },
  render: () => <>
      <Label>in-review: countdown "hh:mm"</Label>
      <HelpTicketCard {...base} />
      <Label>need-details: alert fill, NEED DETAILS tag, link CTA</Label>
      <HelpTicketCard {...base} status="need-details" />
      <Label>tracked: link CTA "View Details"</Label>
      <HelpTicketCard {...base} status="tracked" ctaLabel="View Details" />
      <Label>under-review: ticket id, fixed date, no CTA</Label>
      <HelpTicketCard {...base} status="under-review" ticketId="HT-00001" expectByDate="9th Jun '26" />
      <Label>not-tracked: reason, no CTA</Label>
      <HelpTicketCard {...base} status="not-tracked" reason="The store did not confirm this order." />
    </>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The title is cut to 2 lines. The amount gets the ₹ symbol from the part, so pass digits only. Without \`timer\` the countdown reads 00:00.'
      }
    }
  },
  render: () => <>
      <Label>long title</Label>
      <HelpTicketCard {...base} title="Myntra order for a pair of shoes and a jacket in the end of season sale, cashback was not tracked in the app" />
      <Label>amount ₹0</Label>
      <HelpTicketCard {...base} orderAmount="0" status="tracked" ctaLabel="View Details" />
      <Label>amount ₹10,00,000</Label>
      <HelpTicketCard {...base} orderAmount={1000000 .toLocaleString('en-IN')} status="need-details" />
      <Label>in-review without a timer (00:00)</Label>
      <HelpTicketCard {...base} timer={undefined} />
      <Label>not-tracked, long reason</Label>
      <HelpTicketCard {...base} status="not-tracked" reason="The store reported this order as cancelled and returned on the same day, so no commission was paid to CashKaro and no cashback can be added." />
    </>
}`,...i.parameters?.docs?.source}}};const se=["Playground","Variants","States"];export{o as Playground,i as States,s as Variants,se as __namedExportsOrder,oe as default};
