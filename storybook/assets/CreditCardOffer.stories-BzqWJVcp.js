import{j as r}from"./iframe-BxRbKpJi.js";import{b as e}from"./Carousels-t01IfAzp.js";import{p as d,S as m,B as a,i}from"./_chrome-DBrYcJuA.js";import{o}from"./_fixtures-MfApzsO7.js";import{i as c}from"./index-DCss3D-b.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mTzrbk.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./CardTile-DfeVVAt9.js";import"./SearchBar-D5vu8HTi.js";import"./useScreenFocused-B8TJihc3.js";import"./with-selector-BmPKclR2.js";import"./CardTile-B5yCU4Zu.js";import"./PartnerCard-DIzckGY3.js";import"./GainBand-Dzg8_3xz.js";import"./CompareCard-B_lKF5nT.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-Ba3cWrBc.js";import"./AmountInput-Cng5t5kS.js";import"./amountInput-DaOLtk6i.js";import"./BarBreakdown-BQ5JLUA5.js";import"./StackedBar-DrIlUKGr.js";import"./FilterRow-DGfJ2_zv.js";import"./CategoryCircle-Tr6Y7Ea8.js";import"./Choice-COONpkwL.js";import"./TermsAndConditions-4C782wYm.js";import"./TabPrimary-DpFvRF4Q.js";import"./TabsSecondary-CnD1gU3U.js";import"./ListRow-BcUcxFnw.js";import"./Tooltip-LcYOE9Ky.js";import"./Accordion-C6RDgGwj.js";import"./Toast-cSX7M2TK.js";import"./InlineMessage-B-yUy7QX.js";import"./StripAlert-dlh5xzCN.js";import"./CardFeeStrip-DyfK0gUv.js";import"./BrandLogo-fhcJ2xNs.js";import"./AmountActionRow-C-7iP3Zj.js";import"./DiscBulletList-CE50HxqV.js";import"./HelpTicketCard-bgN_6ONZ.js";import"./TrackMoreBanner-BPpA1Jaq.js";import"./PaymentRecordCard-OzKu3YE_.js";import"./ReviewCard-BBxLsZtd.js";import"./OfflineBanner-CSlN1bHS.js";import"./BreakdownTable-CuqOn1js.js";import"./SpendCard-jj5nrr3A.js";import"./PodiumCompare-C3ASTjOl.js";import"./BigAmountCard-Dw5K3zhx.js";import"./CompareTable-vvkbphr3.js";import"./Stepper-ATItk0Xz.js";import"./InlineFilterQuestion-CeljCFeZ.js";import"./LeagueCardRow-Cw5WpYKg.js";import"./cardTools-a-yZH8gZ.js";import"./cards-Bc9fBrua.js";const Xr={title:"Components/Carousels/CreditCardOffer",component:e,tags:["autodocs","live"],decorators:[d],parameters:{layout:"centered",source:"src/organisms/Carousels.tsx",docs:{description:{component:"A sideways row of card art with the card name and a cashback badge: a content rail for card offers on Home."}}},argTypes:{cards:{control:"object",description:'Items: id, image, name, cashback text, optional prefix ("Upto").'},onCardPress:{control:!1,description:"Fires with the card id."},style:{control:!1}},args:{cards:o,onCardPress:()=>{}}},s={},n={parameters:{docs:{description:{story:"Component quirk: the prefix defaults to 'Upto' when omitted, so only an explicit prefix (such as 'Flat') changes the lead-in."}}},render:()=>r.jsxs(m,{children:[r.jsx(a,{label:"prefix 'Upto'",note:"the badge lead-in when CashKaro has lower secondary tiers",children:r.jsx(e,{cards:o.filter(t=>t.prefix),onCardPress:()=>{}})}),r.jsx(a,{label:"prefix omitted",note:"the component falls back to 'Upto', so an omitted prefix is not flat",children:r.jsx(e,{cards:o.filter(t=>!t.prefix),onCardPress:()=>{}})}),r.jsx(a,{label:"prefix 'Flat'",children:r.jsx(e,{cards:o.filter(t=>!t.prefix).map(t=>({...t,prefix:"Flat"})),onCardPress:()=>{}})})]})},p={parameters:{docs:{description:{story:"Open question: there is no empty state. With no cards the row renders nothing, so a screen must hide the section itself."}}},render:()=>r.jsxs(m,{children:[r.jsx(a,{label:"1 item",children:r.jsx(e,{cards:o.slice(0,1)})}),r.jsx(a,{label:`Many items (${o.length}), scrolls sideways`,children:r.jsx(e,{cards:o})}),r.jsx(a,{label:"Long card name and cashback text",children:r.jsx(e,{cards:[{id:"long",image:c.cards.tataNeuInfinitySbiCard,name:"Tata Neu Infinity SBI Credit Card Signature Edition",cashback:`${i(25e3)} Cashback worth in vouchers`,prefix:"Upto"}]})}),r.jsx(a,{label:`${i(0)} and ${i(1e6)} cashback`,children:r.jsx(e,{cards:[{id:"zero",image:c.cards.hsbcCashback,name:"HSBC Cashback",cashback:`${i(0)} Cashback`},{id:"big",image:c.cards.axisBurgundyPrivateTheOneCard,name:"Axis Burgundy Private",cashback:`${i(1e6)} Cashback`,prefix:"Upto"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Component quirk: the prefix defaults to \\'Upto\\' when omitted, so only an explicit prefix (such as \\'Flat\\') changes the lead-in.'
      }
    }
  },
  render: () => <Stack>
      <Block label="prefix 'Upto'" note="the badge lead-in when CashKaro has lower secondary tiers">
        <CreditCardOffer cards={offerCards.filter(c => c.prefix)} onCardPress={() => {}} />
      </Block>
      <Block label="prefix omitted" note="the component falls back to 'Upto', so an omitted prefix is not flat">
        <CreditCardOffer cards={offerCards.filter(c => !c.prefix)} onCardPress={() => {}} />
      </Block>
      <Block label="prefix 'Flat'">
        <CreditCardOffer cards={offerCards.filter(c => !c.prefix).map(c => ({
        ...c,
        prefix: 'Flat'
      }))} onCardPress={() => {}} />
      </Block>
    </Stack>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question: there is no empty state. With no cards the row renders nothing, so a screen must hide the section itself.'
      }
    }
  },
  render: () => <Stack>
      <Block label="1 item"><CreditCardOffer cards={offerCards.slice(0, 1)} /></Block>
      <Block label={\`Many items (\${offerCards.length}), scrolls sideways\`}><CreditCardOffer cards={offerCards} /></Block>
      <Block label="Long card name and cashback text">
        <CreditCardOffer cards={[{
        id: 'long',
        image: images.cards.tataNeuInfinitySbiCard,
        name: 'Tata Neu Infinity SBI Credit Card Signature Edition',
        cashback: \`\${inr(25000)} Cashback worth in vouchers\`,
        prefix: 'Upto'
      }]} />
      </Block>
      <Block label={\`\${inr(0)} and \${inr(1000000)} cashback\`}>
        <CreditCardOffer cards={[{
        id: 'zero',
        image: images.cards.hsbcCashback,
        name: 'HSBC Cashback',
        cashback: \`\${inr(0)} Cashback\`
      }, {
        id: 'big',
        image: images.cards.axisBurgundyPrivateTheOneCard,
        name: 'Axis Burgundy Private',
        cashback: \`\${inr(1000000)} Cashback\`,
        prefix: 'Upto'
      }]} />
      </Block>
    </Stack>
}`,...p.parameters?.docs?.source}}};const Yr=["Playground","Variants","States"];export{s as Playground,p as States,n as Variants,Yr as __namedExportsOrder,Xr as default};
