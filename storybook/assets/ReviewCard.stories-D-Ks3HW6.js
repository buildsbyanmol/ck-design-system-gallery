import{j as e,a as d}from"./iframe-BxRbKpJi.js";import{R as t}from"./ReviewCard-BBxLsZtd.js";import{L as i,F as p}from"./_shared-B6uq1mSV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const n={stars:5,title:"Cashback came in on time",body:"I booked a flight through the app and the cashback showed as pending in a day. It was confirmed in the next week.",author:"Test User, Mar 02, 2023"},ae={title:"Components/Cards/ReviewCard",component:t,tags:["autodocs","hidden"],decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/ReviewCard.tsx",docs:{description:{component:"HIDDEN (decision D14: Review Us is hidden because its reviews were made up and Write Review had no endpoint). One review: star rating, title, body and attribution. The text here is invented for the story."}}},argTypes:{review:{control:"object"},style:{control:!1}},args:{review:n}},o={},s={render:()=>e.jsx(e.Fragment,{children:[5,4,3,1,0].map(r=>e.jsxs(d.Fragment,{children:[e.jsx(i,{children:`stars=${r}`}),e.jsx(t,{review:{...n,stars:r}})]},r))})},a={parameters:{docs:{description:{story:"Open question for product (D14): reviews need a real source before this card can return. Long text wraps with no cut."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"long title and body"}),e.jsx(t,{review:{stars:4,title:"Good rewards, but the withdrawal took a few days longer than I expected for the first time I used it",body:"The rewards on my card were credited after the bank approved it. The first withdrawal of ₹10,00,000 across several months was slow, but support answered every question I raised and the second one was quick.",author:"Test User, Mar 02, 2023"}}),e.jsx(i,{children:"short body"}),e.jsx(t,{review:{stars:5,title:"Great",body:"Easy to use.",author:"Test User, Mar 02, 2023"}}),e.jsx(i,{children:"list of reviews"}),[1,2,3].map(r=>e.jsx(t,{review:{...n,stars:5-r}},r))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
