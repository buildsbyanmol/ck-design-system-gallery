import{j as e,a as d}from"./iframe-EJmZd_T6.js";import{R as t}from"./ReviewCard-HU6ntNT8.js";import{L as i,F as p}from"./_shared-DUO1fe1c.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const n={stars:5,title:"Cashback came in on time",body:"I booked a flight through the app and the cashback showed as pending in a day. It was confirmed in the next week.",author:"Test User, Mar 02, 2023"},ae={title:"Components/Cards/ReviewCard",component:t,tags:["autodocs","hidden"],decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/ReviewCard.tsx",docs:{description:{component:"HIDDEN (decision D14: Review Us is hidden because its reviews were made up and Write Review had no endpoint). One review: star rating, title, body and attribution. The text here is invented for the story."}}},argTypes:{review:{control:"object"},style:{control:!1}},args:{review:n}},o={},s={render:()=>e.jsx(e.Fragment,{children:[5,4,3,1,0].map(r=>e.jsxs(d.Fragment,{children:[e.jsx(i,{children:`stars=${r}`}),e.jsx(t,{review:{...n,stars:r}})]},r))})},a={parameters:{docs:{description:{story:"Open question for product (D14): reviews need a real source before this card can return. Long text wraps with no cut."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"long title and body"}),e.jsx(t,{review:{stars:4,title:"Good rewards, but the withdrawal took a few days longer than I expected for the first time I used it",body:"The rewards on my card were credited after the bank approved it. The first withdrawal of ₹10,00,000 across several months was slow, but support answered every question I raised and the second one was quick.",author:"Test User, Mar 02, 2023"}}),e.jsx(i,{children:"short body"}),e.jsx(t,{review:{stars:5,title:"Great",body:"Easy to use.",author:"Test User, Mar 02, 2023"}}),e.jsx(i,{children:"list of reviews"}),[1,2,3].map(r=>e.jsx(t,{review:{...n,stars:5-r}},r))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {[5, 4, 3, 1, 0].map(n => <React.Fragment key={n}>
          <Label>{\`stars=\${n}\`}</Label>
          <ReviewCard review={{
        ...review,
        stars: n
      }} />
        </React.Fragment>)}
    </>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question for product (D14): reviews need a real source before this card can return. Long text wraps with no cut.'
      }
    }
  },
  render: () => <>
      <Label>long title and body</Label>
      <ReviewCard review={{
      stars: 4,
      title: 'Good rewards, but the withdrawal took a few days longer than I expected for the first time I used it',
      body: 'The rewards on my card were credited after the bank approved it. The first withdrawal of ₹10,00,000 across several months was slow, but support answered every question I raised and the second one was quick.',
      author: 'Test User, Mar 02, 2023'
    }} />
      <Label>short body</Label>
      <ReviewCard review={{
      stars: 5,
      title: 'Great',
      body: 'Easy to use.',
      author: 'Test User, Mar 02, 2023'
    }} />
      <Label>list of reviews</Label>
      {[1, 2, 3].map(i => <ReviewCard key={i} review={{
      ...review,
      stars: 5 - i
    }} />)}
    </>
}`,...a.parameters?.docs?.source}}};const ie=["Playground","Variants","States"];export{o as Playground,a as States,s as Variants,ie as __namedExportsOrder,ae as default};
