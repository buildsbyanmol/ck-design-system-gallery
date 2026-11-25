import{j as e,V as o,c as n}from"./iframe-EJmZd_T6.js";import{I as a}from"./InlineMessage-Hdq8xuDM.js";import{I as c}from"./Input-DiY7GBOZ.js";import{O as g}from"./OtpInput-DLN2T6Wg.js";import{T as p}from"./Text-CwaPBD6t.js";import{F as m}from"./FooterButtons-BAxswFhP.js";import{s as t}from"./motion-CMqo2j38.js";import{P as d}from"./_proposed-DfoEERJO.js";import"./preload-helper-Zf8nSx-t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./SearchBar-BJVDBR6A.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./CardTile-Bob45dXu.js";import"./PartnerCard-Cp1HSolV.js";import"./GainBand-By1tcNfV.js";import"./CompareCard-CxZ6DwhZ.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-DV4oa5uQ.js";import"./AmountInput-CBdvfY7-.js";import"./amountInput-rjKWAIpS.js";import"./BarBreakdown-Dao32HDG.js";import"./StackedBar-C3jKCjDJ.js";import"./FilterRow-CStVzmhk.js";import"./CategoryCircle-Bh_wNAa8.js";import"./Choice-B9jU3ag4.js";import"./TermsAndConditions-D-HQXJF_.js";import"./TabPrimary-CuFqQLjT.js";import"./TabsSecondary-md4bQCvO.js";import"./ListRow-D2H9PhpP.js";import"./Tooltip-BMClZOXq.js";import"./Accordion-EmkSn1a8.js";import"./Toast-HuIOiDYF.js";import"./StripAlert-BLrZOWat.js";import"./CardFeeStrip-CtjeB6LS.js";import"./BrandLogo-Cr22hXoS.js";import"./AmountActionRow-Cj6hdwYt.js";import"./DiscBulletList-Wfqt5xzY.js";import"./HelpTicketCard-3T8dLX7S.js";import"./TrackMoreBanner-Coq338cX.js";import"./PaymentRecordCard-Cf9JYD_t.js";import"./ReviewCard-HU6ntNT8.js";import"./OfflineBanner-WiNzkl1w.js";import"./BreakdownTable-MeGvsWWS.js";import"./SpendCard-B8G8IG8w.js";import"./PodiumCompare-CwSVDn2u.js";import"./BigAmountCard-DM9gMl4b.js";import"./CompareTable-Co5LlMMB.js";import"./Stepper-BRwdq6El.js";import"./InlineFilterQuestion-CbwMVMC4.js";import"./LeagueCardRow-BzeydE4N.js";import"./cardTools-a-yZH8gZ.js";import"./ScreenHarness-Dd1A2iH9.js";import"./analytics-DGnEPG-P.js";import"./BottomSheetHeader--tduzGuO.js";import"./phone-vSJF-a1K.js";import"./index-VRixmpvR.js";import"./index-DqKrqPv5.js";import"./Header-BoWSsEb5.js";import"./ScreenState-DxqUWntH.js";const rt={title:"Flows/10 Offline and session/Mid-flow return",parameters:{layout:"fullscreen",docs:{story:{inline:!1}}}},l="R17 (not built). Today the session ends, the login sheet opens, the cache clears, and the return to the step is not defined: the withdraw screens read only `accessToken`, and the login sheet has no `onSuccess` here. The result on screen is inferred, not seen. Open questions: (1) return to the same step with the entered values, or restart the step; (2) after login, does the money action repeat on its own (risk of a double payout or double claim) or does the user confirm again; (3) how long a withdraw OTP stays valid across the login.",i={tags:["proposed"],parameters:{docs:{description:{story:l+" This design keeps the typed code and asks for an explicit tap after login (no automatic repeat of the payout)."}}},render:()=>e.jsx(d,{title:"Verify OTP",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to finish this withdrawal. Your payout has not been sent."}),e.jsx(p,{variant:"body14Regular",color:n.text.secondary,children:"Enter the OTP sent to 98XXXXXX10"}),e.jsx(g,{length:6,value:"482915",onChangeText:()=>{}})]})})},r={tags:["proposed"],parameters:{docs:{description:{story:l+" This design keeps the amount and shows that the claim was not submitted, so the user does not submit twice."}}},render:()=>e.jsx(d,{title:"Did You Shop?",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(p,{variant:"body16Bold",color:n.text.primary,children:"Almost there! Tell us your order amount"}),e.jsx(c,{size:"sm",value:"1299",onChangeText:()=>{},placeholder:"Enter amount"}),e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to submit this claim. It has not been submitted yet."})]})})},s={tags:["proposed"],parameters:{docs:{description:{story:l+" The picked files live only in screen state and are lost on a restart: the biggest loss of the three. Open question: keep the files in memory across the login."}}},render:()=>e.jsx(d,{title:"Did You Shop?",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(p,{variant:"body16Bold",color:n.text.primary,children:"Upload your invoice"}),e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to raise your ticket. Your screenshots are still here."})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    docs: {
      description: {
        story: R17 + ' This design keeps the typed code and asks for an explicit tap after login (no automatic repeat of the payout).'
      }
    }
  },
  render: () => <ProposedPage title="Verify OTP" footer={<View style={{
    padding: spacing[16]
  }}><FooterButtons buttons="single" primaryLabel="Log in to continue" onPrimary={() => {}} /></View>}>
      <View style={{
      padding: spacing[16],
      gap: spacing[16]
    }}>
        <InlineMessage tone="warning" title="Your session ended" message="Log in again to finish this withdrawal. Your payout has not been sent." />
        <Text variant="body14Regular" color={colors.text.secondary}>Enter the OTP sent to 98XXXXXX10</Text>
        <OtpInput length={6} value="482915" onChangeText={() => {}} />
      </View>
    </ProposedPage>
}`,...i.parameters?.docs?.source},description:{story:"PROPOSED: the session ends on the withdraw OTP step. Details kept, the user logs in, then confirms again.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    docs: {
      description: {
        story: R17 + ' This design keeps the amount and shows that the claim was not submitted, so the user does not submit twice.'
      }
    }
  },
  render: () => <ProposedPage title="Did You Shop?" footer={<View style={{
    padding: spacing[16]
  }}><FooterButtons buttons="single" primaryLabel="Log in to continue" onPrimary={() => {}} /></View>}>
      <View style={{
      padding: spacing[16],
      gap: spacing[16]
    }}>
        <Text variant="body16Bold" color={colors.text.primary}>Almost there! Tell us your order amount</Text>
        <Input size="sm" value="1299" onChangeText={() => {}} placeholder="Enter amount" />
        <InlineMessage tone="warning" title="Your session ended" message="Log in again to submit this claim. It has not been submitted yet." />
      </View>
    </ProposedPage>
}`,...r.parameters?.docs?.source},description:{story:"PROPOSED: the session ends while a claim is being submitted (amount step).",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    docs: {
      description: {
        story: R17 + ' The picked files live only in screen state and are lost on a restart: the biggest loss of the three. Open question: keep the files in memory across the login.'
      }
    }
  },
  render: () => <ProposedPage title="Did You Shop?" footer={<View style={{
    padding: spacing[16]
  }}><FooterButtons buttons="single" primaryLabel="Log in to continue" onPrimary={() => {}} /></View>}>
      <View style={{
      padding: spacing[16],
      gap: spacing[16]
    }}>
        <Text variant="body16Bold" color={colors.text.primary}>Upload your invoice</Text>
        <InlineMessage tone="warning" title="Your session ended" message="Log in again to raise your ticket. Your screenshots are still here." />
      </View>
    </ProposedPage>
}`,...s.parameters?.docs?.source},description:{story:"PROPOSED: the session ends while an invoice is uploading (C1-Other and C2 claims).",...s.parameters?.docs?.description}}};const st=["WithdrawOtpSessionEnded","ClaimSubmitSessionEnded","InvoiceUploadSessionEnded"];export{r as ClaimSubmitSessionEnded,s as InvoiceUploadSessionEnded,i as WithdrawOtpSessionEnded,st as __namedExportsOrder,rt as default};
