import{j as r}from"./iframe-EJmZd_T6.js";import{b as e}from"./Carousels-CxlwWejT.js";import{p as d,S as m,B as a,i}from"./_chrome-B1UVqLGg.js";import{o}from"./_fixtures-MfApzsO7.js";import{i as c}from"./index-DCss3D-b.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mm0dto.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./CardTile-BVgCa9A8.js";import"./SearchBar-BJVDBR6A.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./CardTile-Bob45dXu.js";import"./PartnerCard-Cp1HSolV.js";import"./GainBand-By1tcNfV.js";import"./CompareCard-CxZ6DwhZ.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-DV4oa5uQ.js";import"./AmountInput-CBdvfY7-.js";import"./amountInput-rjKWAIpS.js";import"./BarBreakdown-Dao32HDG.js";import"./StackedBar-C3jKCjDJ.js";import"./FilterRow-CStVzmhk.js";import"./CategoryCircle-Bh_wNAa8.js";import"./Choice-B9jU3ag4.js";import"./TermsAndConditions-D-HQXJF_.js";import"./TabPrimary-CuFqQLjT.js";import"./TabsSecondary-md4bQCvO.js";import"./ListRow-D2H9PhpP.js";import"./Tooltip-BMClZOXq.js";import"./Accordion-EmkSn1a8.js";import"./Toast-HuIOiDYF.js";import"./InlineMessage-Hdq8xuDM.js";import"./StripAlert-BLrZOWat.js";import"./CardFeeStrip-CtjeB6LS.js";import"./BrandLogo-Cr22hXoS.js";import"./AmountActionRow-Cj6hdwYt.js";import"./DiscBulletList-Wfqt5xzY.js";import"./HelpTicketCard-3T8dLX7S.js";import"./TrackMoreBanner-Coq338cX.js";import"./PaymentRecordCard-Cf9JYD_t.js";import"./ReviewCard-HU6ntNT8.js";import"./OfflineBanner-WiNzkl1w.js";import"./BreakdownTable-MeGvsWWS.js";import"./SpendCard-B8G8IG8w.js";import"./PodiumCompare-CwSVDn2u.js";import"./BigAmountCard-DM9gMl4b.js";import"./CompareTable-Co5LlMMB.js";import"./Stepper-BRwdq6El.js";import"./InlineFilterQuestion-CbwMVMC4.js";import"./LeagueCardRow-BzeydE4N.js";import"./cardTools-a-yZH8gZ.js";import"./cards-Bc9fBrua.js";const Xr={title:"Components/Carousels/CreditCardOffer",component:e,tags:["autodocs","live"],decorators:[d],parameters:{layout:"centered",source:"src/organisms/Carousels.tsx",docs:{description:{component:"A sideways row of card art with the card name and a cashback badge: a content rail for card offers on Home."}}},argTypes:{cards:{control:"object",description:'Items: id, image, name, cashback text, optional prefix ("Upto").'},onCardPress:{control:!1,description:"Fires with the card id."},style:{control:!1}},args:{cards:o,onCardPress:()=>{}}},s={},n={parameters:{docs:{description:{story:"Component quirk: the prefix defaults to 'Upto' when omitted, so only an explicit prefix (such as 'Flat') changes the lead-in."}}},render:()=>r.jsxs(m,{children:[r.jsx(a,{label:"prefix 'Upto'",note:"the badge lead-in when CashKaro has lower secondary tiers",children:r.jsx(e,{cards:o.filter(t=>t.prefix),onCardPress:()=>{}})}),r.jsx(a,{label:"prefix omitted",note:"the component falls back to 'Upto', so an omitted prefix is not flat",children:r.jsx(e,{cards:o.filter(t=>!t.prefix),onCardPress:()=>{}})}),r.jsx(a,{label:"prefix 'Flat'",children:r.jsx(e,{cards:o.filter(t=>!t.prefix).map(t=>({...t,prefix:"Flat"})),onCardPress:()=>{}})})]})},p={parameters:{docs:{description:{story:"Open question: there is no empty state. With no cards the row renders nothing, so a screen must hide the section itself."}}},render:()=>r.jsxs(m,{children:[r.jsx(a,{label:"1 item",children:r.jsx(e,{cards:o.slice(0,1)})}),r.jsx(a,{label:`Many items (${o.length}), scrolls sideways`,children:r.jsx(e,{cards:o})}),r.jsx(a,{label:"Long card name and cashback text",children:r.jsx(e,{cards:[{id:"long",image:c.cards.tataNeuInfinitySbiCard,name:"Tata Neu Infinity SBI Credit Card Signature Edition",cashback:`${i(25e3)} Cashback worth in vouchers`,prefix:"Upto"}]})}),r.jsx(a,{label:`${i(0)} and ${i(1e6)} cashback`,children:r.jsx(e,{cards:[{id:"zero",image:c.cards.hsbcCashback,name:"HSBC Cashback",cashback:`${i(0)} Cashback`},{id:"big",image:c.cards.axisBurgundyPrivateTheOneCard,name:"Axis Burgundy Private",cashback:`${i(1e6)} Cashback`,prefix:"Upto"}]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
