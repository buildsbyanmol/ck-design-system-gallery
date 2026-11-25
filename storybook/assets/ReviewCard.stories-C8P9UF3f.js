import{j as e,a as d}from"./iframe-DK2xttIN.js";import{R as t}from"./ReviewCard-BctNynsZ.js";import{L as i,F as p}from"./_shared-DTtNh5Zn.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./elevation-DG0ULmpQ.js";import"./cards-Bc9fBrua.js";const n={stars:5,title:"Cashback came in on time",body:"I booked a flight through the app and the cashback showed as pending in a day. It was confirmed in the next week.",author:"Test User, Mar 02, 2023"},ae={title:"Components/Cards/ReviewCard",component:t,tags:["autodocs","hidden"],decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/ReviewCard.tsx",docs:{description:{component:"HIDDEN (decision D14: Review Us is hidden because its reviews were made up and Write Review had no endpoint). One review: star rating, title, body and attribution. The text here is invented for the story."}}},argTypes:{review:{control:"object"},style:{control:!1}},args:{review:n}},o={},s={render:()=>e.jsx(e.Fragment,{children:[5,4,3,1,0].map(r=>e.jsxs(d.Fragment,{children:[e.jsx(i,{children:`stars=${r}`}),e.jsx(t,{review:{...n,stars:r}})]},r))})},a={parameters:{docs:{description:{story:"Open question for product (D14): reviews need a real source before this card can return. Long text wraps with no cut."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"long title and body"}),e.jsx(t,{review:{stars:4,title:"Good rewards, but the withdrawal took a few days longer than I expected for the first time I used it",body:"The rewards on my card were credited after the bank approved it. The first withdrawal of ₹10,00,000 across several months was slow, but support answered every question I raised and the second one was quick.",author:"Test User, Mar 02, 2023"}}),e.jsx(i,{children:"short body"}),e.jsx(t,{review:{stars:5,title:"Great",body:"Easy to use.",author:"Test User, Mar 02, 2023"}}),e.jsx(i,{children:"list of reviews"}),[1,2,3].map(r=>e.jsx(t,{review:{...n,stars:5-r}},r))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
