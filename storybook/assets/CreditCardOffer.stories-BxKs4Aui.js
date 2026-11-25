import{j as r}from"./iframe-DK2xttIN.js";import{b as e}from"./Carousels-BWea1qog.js";import{p as d,S as m,B as a,i}from"./_chrome-iej18qaj.js";import{o}from"./_fixtures-MfApzsO7.js";import{i as c}from"./index-DCss3D-b.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-CErKe_YJ.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./CardTile-B5G_pVgF.js";import"./SearchBar-CE3pl0W6.js";import"./useScreenFocused-CQUqApbV.js";import"./with-selector-CpCbjLFO.js";import"./CardTile-BTfStbVG.js";import"./PartnerCard-Ny9V1xMi.js";import"./GainBand-BMDMIDTL.js";import"./CompareCard-wUfR8vjN.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-CNAq6MQP.js";import"./AmountInput-vuFcXfX6.js";import"./amountInput-BIBzs3v3.js";import"./BarBreakdown-Ov1ar3LP.js";import"./StackedBar-B7RTqn76.js";import"./FilterRow-C9655B76.js";import"./CategoryCircle-Cc2y7IyX.js";import"./Choice-D0RjL1kD.js";import"./TermsAndConditions-CMMlVp8j.js";import"./TabPrimary-DTfPGRdz.js";import"./TabsSecondary-B5LhQfcn.js";import"./ListRow-BQc2dCdC.js";import"./Tooltip-DuDw3JkL.js";import"./Accordion-D2Xjx4kK.js";import"./Toast-D7ijkSGP.js";import"./InlineMessage-BdiJ76-B.js";import"./StripAlert-CKclIk9-.js";import"./CardFeeStrip-2hPpjNsb.js";import"./BrandLogo-C4MMBo3z.js";import"./AmountActionRow-_blb5WB4.js";import"./DiscBulletList-B7UugVnF.js";import"./HelpTicketCard-i6-ScK9N.js";import"./TrackMoreBanner-CQAIHlZY.js";import"./PaymentRecordCard-BSnxSZ7y.js";import"./ReviewCard-BctNynsZ.js";import"./HeroVideo-7QpzFDox.js";import"./OfflineBanner-EbZibXrO.js";import"./BreakdownTable-kiMM81G4.js";import"./SpendCard-Dymb1Hdj.js";import"./PodiumCompare-nloRnlEo.js";import"./BigAmountCard-Cp6wv979.js";import"./CompareTable-FFjCxkRv.js";import"./Stepper-CpESk6gy.js";import"./InlineFilterQuestion-D9B3Khl_.js";import"./LeagueCardRow-iBF4GEM-.js";import"./cardTools-Ct3zlgT2.js";import"./cards-Bc9fBrua.js";const Yr={title:"Components/Carousels/CreditCardOffer",component:e,tags:["autodocs","live"],decorators:[d],parameters:{layout:"centered",source:"src/organisms/Carousels.tsx",docs:{description:{component:"A sideways row of card art with the card name and a cashback badge: a content rail for card offers on Home."}}},argTypes:{cards:{control:"object",description:'Items: id, image, name, cashback text, optional prefix ("Upto").'},onCardPress:{control:!1,description:"Fires with the card id."},style:{control:!1}},args:{cards:o,onCardPress:()=>{}}},s={},n={parameters:{docs:{description:{story:"Component quirk: the prefix defaults to 'Upto' when omitted, so only an explicit prefix (such as 'Flat') changes the lead-in."}}},render:()=>r.jsxs(m,{children:[r.jsx(a,{label:"prefix 'Upto'",note:"the badge lead-in when CashKaro has lower secondary tiers",children:r.jsx(e,{cards:o.filter(t=>t.prefix),onCardPress:()=>{}})}),r.jsx(a,{label:"prefix omitted",note:"the component falls back to 'Upto', so an omitted prefix is not flat",children:r.jsx(e,{cards:o.filter(t=>!t.prefix),onCardPress:()=>{}})}),r.jsx(a,{label:"prefix 'Flat'",children:r.jsx(e,{cards:o.filter(t=>!t.prefix).map(t=>({...t,prefix:"Flat"})),onCardPress:()=>{}})})]})},p={parameters:{docs:{description:{story:"Open question: there is no empty state. With no cards the row renders nothing, so a screen must hide the section itself."}}},render:()=>r.jsxs(m,{children:[r.jsx(a,{label:"1 item",children:r.jsx(e,{cards:o.slice(0,1)})}),r.jsx(a,{label:`Many items (${o.length}), scrolls sideways`,children:r.jsx(e,{cards:o})}),r.jsx(a,{label:"Long card name and cashback text",children:r.jsx(e,{cards:[{id:"long",image:c.cards.tataNeuInfinitySbiCard,name:"Tata Neu Infinity SBI Credit Card Signature Edition",cashback:`${i(25e3)} Cashback worth in vouchers`,prefix:"Upto"}]})}),r.jsx(a,{label:`${i(0)} and ${i(1e6)} cashback`,children:r.jsx(e,{cards:[{id:"zero",image:c.cards.hsbcCashback,name:"HSBC Cashback",cashback:`${i(0)} Cashback`},{id:"big",image:c.cards.axisBurgundyPrivateTheOneCard,name:"Axis Burgundy Private",cashback:`${i(1e6)} Cashback`,prefix:"Upto"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Zr=["Playground","Variants","States"];export{s as Playground,p as States,n as Variants,Zr as __namedExportsOrder,Yr as default};
