import{j as e,V as o,c as n}from"./iframe-BxRbKpJi.js";import{I as a}from"./InlineMessage-B-yUy7QX.js";import{I as c}from"./Input-BFP__vmY.js";import{O as g}from"./OtpInput-CmjSyeXa.js";import{T as p}from"./Text-Ck5O8Bhy.js";import{F as m}from"./FooterButtons-CEg9ohjl.js";import{s as t}from"./motion-C4NNgPp6.js";import{P as d}from"./_proposed-DgQpc55y.js";import"./preload-helper-Zf8nSx-t.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./SearchBar-D5vu8HTi.js";import"./useScreenFocused-B8TJihc3.js";import"./with-selector-BmPKclR2.js";import"./CardTile-B5yCU4Zu.js";import"./PartnerCard-DIzckGY3.js";import"./GainBand-Dzg8_3xz.js";import"./CompareCard-B_lKF5nT.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-Ba3cWrBc.js";import"./AmountInput-Cng5t5kS.js";import"./amountInput-DaOLtk6i.js";import"./BarBreakdown-BQ5JLUA5.js";import"./StackedBar-DrIlUKGr.js";import"./FilterRow-DGfJ2_zv.js";import"./CategoryCircle-Tr6Y7Ea8.js";import"./Choice-COONpkwL.js";import"./TermsAndConditions-4C782wYm.js";import"./TabPrimary-DpFvRF4Q.js";import"./TabsSecondary-CnD1gU3U.js";import"./ListRow-BcUcxFnw.js";import"./Tooltip-LcYOE9Ky.js";import"./Accordion-C6RDgGwj.js";import"./Toast-cSX7M2TK.js";import"./StripAlert-dlh5xzCN.js";import"./CardFeeStrip-DyfK0gUv.js";import"./BrandLogo-fhcJ2xNs.js";import"./AmountActionRow-C-7iP3Zj.js";import"./DiscBulletList-CE50HxqV.js";import"./HelpTicketCard-bgN_6ONZ.js";import"./TrackMoreBanner-BPpA1Jaq.js";import"./PaymentRecordCard-OzKu3YE_.js";import"./ReviewCard-BBxLsZtd.js";import"./OfflineBanner-CSlN1bHS.js";import"./BreakdownTable-CuqOn1js.js";import"./SpendCard-jj5nrr3A.js";import"./PodiumCompare-C3ASTjOl.js";import"./BigAmountCard-Dw5K3zhx.js";import"./CompareTable-vvkbphr3.js";import"./Stepper-ATItk0Xz.js";import"./InlineFilterQuestion-CeljCFeZ.js";import"./LeagueCardRow-Cw5WpYKg.js";import"./cardTools-a-yZH8gZ.js";import"./ScreenHarness-Iz1hq-Wj.js";import"./analytics-CHXP_Sdz.js";import"./BottomSheetHeader-BNjtQgSt.js";import"./phone-vSJF-a1K.js";import"./index-kdCBfTvH.js";import"./index-W0e2q_Mc.js";import"./Header-DWriXNmk.js";import"./ScreenState-DU2alm3W.js";const rt={title:"Flows/10 Offline and session/Mid-flow return",parameters:{layout:"fullscreen",docs:{story:{inline:!1}}}},l="R17 (not built). Today the session ends, the login sheet opens, the cache clears, and the return to the step is not defined: the withdraw screens read only `accessToken`, and the login sheet has no `onSuccess` here. The result on screen is inferred, not seen. Open questions: (1) return to the same step with the entered values, or restart the step; (2) after login, does the money action repeat on its own (risk of a double payout or double claim) or does the user confirm again; (3) how long a withdraw OTP stays valid across the login.",i={tags:["proposed"],parameters:{docs:{description:{story:l+" This design keeps the typed code and asks for an explicit tap after login (no automatic repeat of the payout)."}}},render:()=>e.jsx(d,{title:"Verify OTP",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to finish this withdrawal. Your payout has not been sent."}),e.jsx(p,{variant:"body14Regular",color:n.text.secondary,children:"Enter the OTP sent to 98XXXXXX10"}),e.jsx(g,{length:6,value:"482915",onChangeText:()=>{}})]})})},r={tags:["proposed"],parameters:{docs:{description:{story:l+" This design keeps the amount and shows that the claim was not submitted, so the user does not submit twice."}}},render:()=>e.jsx(d,{title:"Did You Shop?",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(p,{variant:"body16Bold",color:n.text.primary,children:"Almost there! Tell us your order amount"}),e.jsx(c,{size:"sm",value:"1299",onChangeText:()=>{},placeholder:"Enter amount"}),e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to submit this claim. It has not been submitted yet."})]})})},s={tags:["proposed"],parameters:{docs:{description:{story:l+" The picked files live only in screen state and are lost on a restart: the biggest loss of the three. Open question: keep the files in memory across the login."}}},render:()=>e.jsx(d,{title:"Did You Shop?",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(p,{variant:"body16Bold",color:n.text.primary,children:"Upload your invoice"}),e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to raise your ticket. Your screenshots are still here."})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
