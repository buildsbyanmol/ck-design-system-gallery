import{j as t,V as o}from"./iframe-EJmZd_T6.js";import{Q as i}from"./QuizStep-CV8PttrV.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import{C as l}from"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as a}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./FooterButtons-BAxswFhP.js";import"./LinearGradient-D-mm0dto.js";import"./SearchBar-BJVDBR6A.js";import"./xml-DM9nBi9W.js";import"./haptics-BkmE1-bM.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./index-AjmY8xRX.js";import"./CardTile-Bob45dXu.js";import"./PartnerCard-Cp1HSolV.js";import"./GainBand-By1tcNfV.js";import"./CompareCard-CxZ6DwhZ.js";import"./elevation-DG0ULmpQ.js";import"./opacity-rEjPgtwf.js";import"./RankedCardRow-DV4oa5uQ.js";import"./AmountInput-CBdvfY7-.js";import"./amountInput-rjKWAIpS.js";import"./BarBreakdown-Dao32HDG.js";import"./StackedBar-C3jKCjDJ.js";import"./FilterRow-CStVzmhk.js";import"./CategoryCircle-Bh_wNAa8.js";import"./Choice-B9jU3ag4.js";import"./TermsAndConditions-D-HQXJF_.js";import"./TabPrimary-CuFqQLjT.js";import"./TabsSecondary-md4bQCvO.js";import"./ListRow-D2H9PhpP.js";import"./Tooltip-BMClZOXq.js";import"./Accordion-EmkSn1a8.js";import"./Toast-HuIOiDYF.js";import"./InlineMessage-Hdq8xuDM.js";import"./StripAlert-BLrZOWat.js";import"./CardFeeStrip-CtjeB6LS.js";import"./gradients-Yoe7k8Uk.js";import"./BrandLogo-Cr22hXoS.js";import"./index-DCss3D-b.js";import"./AmountActionRow-Cj6hdwYt.js";import"./DiscBulletList-Wfqt5xzY.js";import"./HelpTicketCard-3T8dLX7S.js";import"./TrackMoreBanner-Coq338cX.js";import"./PaymentRecordCard-Cf9JYD_t.js";import"./ReviewCard-HU6ntNT8.js";import"./OfflineBanner-WiNzkl1w.js";import"./BreakdownTable-MeGvsWWS.js";import"./SpendCard-B8G8IG8w.js";import"./PodiumCompare-CwSVDn2u.js";import"./BigAmountCard-DM9gMl4b.js";import"./CompareTable-Co5LlMMB.js";import"./Stepper-BRwdq6El.js";import"./InlineFilterQuestion-CbwMVMC4.js";import"./LeagueCardRow-BzeydE4N.js";import"./tagVariants-C3ziFvwj.js";import"./cardTools-a-yZH8gZ.js";import"./MaskedView.web-BBIMN0VS.js";const r=()=>{},d=({children:e})=>t.jsx(o,{style:{width:360,height:640},children:e}),Lt={title:"Components/Steppers/QuizStep",component:i,tags:["autodocs","live"],parameters:{source:"src/organisms/QuizStep.tsx",layout:"centered",docs:{description:{component:"Shell of one question per screen: back, StepProgress, skip, title, scrolling body slot and a sticky FooterButtons. No screen uses it today; it is in the design system gallery only."}}},decorators:[e=>t.jsx(d,{children:t.jsx(e,{})})],argTypes:{step:{control:{type:"number",min:1,max:10,step:1}},total:{control:{type:"number",min:1,max:10,step:1}},title:{control:"text"},subtitle:{control:"text"},onBack:{control:!1},onSkip:{control:!1},onClose:{control:!1},primary:{control:"object"},children:{control:!1}},args:{step:2,total:6,title:"How much do you spend on groceries?",subtitle:"A monthly figure is fine.",onBack:r,onSkip:r,primary:{label:"Continue",onPress:r},children:t.jsx(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:a[8]},children:["Under ₹5,000","₹5,000 to ₹10,000","₹10,000 to ₹25,000","Above ₹25,000"].map((e,m)=>t.jsx(l,{label:e,state:m===1?"selected":"default",onPress:r},e))})}},s={},p={parameters:{docs:{description:{story:"Header actions are optional: Skip (onSkip) and Close (onClose). Shown here: back only, back plus skip, back plus skip plus close."}}},render:e=>t.jsxs(o,{style:{gap:a[24],flexDirection:"row",flexWrap:"wrap"},children:[t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,onSkip:void 0,onClose:void 0})}),t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,onSkip:r})}),t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,onSkip:r,onClose:r})})]})},n={parameters:{docs:{description:{story:"First step, last step, disabled primary and an empty body."}}},render:e=>t.jsxs(o,{style:{gap:a[24],flexDirection:"row",flexWrap:"wrap"},children:[t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,step:1})}),t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,step:6,primary:{label:"See my cards",onPress:r}})}),t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,primary:{label:"Continue",onPress:r,disabled:!0}})}),t.jsx(o,{style:{width:360,height:520},children:t.jsx(i,{...e,title:"A very long question that asks how much you spend every month on groceries, fuel, dining, travel and online shopping",subtitle:void 0,children:null})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Header actions are optional: Skip (onSkip) and Close (onClose). Shown here: back only, back plus skip, back plus skip plus close.'
      }
    }
  },
  render: args => <View style={{
    gap: spacing[24],
    flexDirection: 'row',
    flexWrap: 'wrap'
  }}>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} onSkip={undefined} onClose={undefined} /></View>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} onSkip={noop} /></View>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} onSkip={noop} onClose={noop} /></View>
    </View>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'First step, last step, disabled primary and an empty body.'
      }
    }
  },
  render: args => <View style={{
    gap: spacing[24],
    flexDirection: 'row',
    flexWrap: 'wrap'
  }}>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} step={1} /></View>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} step={6} primary={{
        label: 'See my cards',
        onPress: noop
      }} /></View>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} primary={{
        label: 'Continue',
        onPress: noop,
        disabled: true
      }} /></View>
      <View style={{
      width: 360,
      height: 520
    }}><QuizStep {...args} title="A very long question that asks how much you spend every month on groceries, fuel, dining, travel and online shopping" subtitle={undefined}>{null}</QuizStep></View>
    </View>
}`,...n.parameters?.docs?.source}}};const Mt=["Playground","Variants","States"];export{s as Playground,n as States,p as Variants,Mt as __namedExportsOrder,Lt as default};
