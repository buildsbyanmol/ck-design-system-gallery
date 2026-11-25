import{j as e,V as o,c as n}from"./iframe-DK2xttIN.js";import{I as a}from"./InlineMessage-BdiJ76-B.js";import{I as c}from"./Input-Ilvy30LJ.js";import{O as g}from"./OtpInput-ULhMVoH4.js";import{T as p}from"./Text-Czhgaopg.js";import{F as m}from"./FooterButtons-BG6MbxZE.js";import{s as t}from"./motion-q_NUJArm.js";import{P as d}from"./_proposed-DyOAz-Wf.js";import"./preload-helper-Zf8nSx-t.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./SearchBar-CE3pl0W6.js";import"./useScreenFocused-CQUqApbV.js";import"./with-selector-CpCbjLFO.js";import"./CardTile-BTfStbVG.js";import"./PartnerCard-Ny9V1xMi.js";import"./GainBand-BMDMIDTL.js";import"./CompareCard-wUfR8vjN.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-CNAq6MQP.js";import"./AmountInput-vuFcXfX6.js";import"./amountInput-BIBzs3v3.js";import"./BarBreakdown-Ov1ar3LP.js";import"./StackedBar-B7RTqn76.js";import"./FilterRow-C9655B76.js";import"./CategoryCircle-Cc2y7IyX.js";import"./Choice-D0RjL1kD.js";import"./TermsAndConditions-CMMlVp8j.js";import"./TabPrimary-DTfPGRdz.js";import"./TabsSecondary-B5LhQfcn.js";import"./ListRow-BQc2dCdC.js";import"./Tooltip-DuDw3JkL.js";import"./Accordion-D2Xjx4kK.js";import"./Toast-D7ijkSGP.js";import"./StripAlert-CKclIk9-.js";import"./CardFeeStrip-2hPpjNsb.js";import"./BrandLogo-C4MMBo3z.js";import"./AmountActionRow-_blb5WB4.js";import"./DiscBulletList-B7UugVnF.js";import"./HelpTicketCard-i6-ScK9N.js";import"./TrackMoreBanner-CQAIHlZY.js";import"./PaymentRecordCard-BSnxSZ7y.js";import"./ReviewCard-BctNynsZ.js";import"./HeroVideo-7QpzFDox.js";import"./OfflineBanner-EbZibXrO.js";import"./BreakdownTable-kiMM81G4.js";import"./SpendCard-Dymb1Hdj.js";import"./PodiumCompare-nloRnlEo.js";import"./BigAmountCard-Cp6wv979.js";import"./CompareTable-FFjCxkRv.js";import"./Stepper-CpESk6gy.js";import"./InlineFilterQuestion-D9B3Khl_.js";import"./LeagueCardRow-iBF4GEM-.js";import"./cardTools-Ct3zlgT2.js";import"./ScreenHarness-DmOWjo0p.js";import"./analytics-I5h83qZl.js";import"./BottomSheetHeader-CiFr6Grc.js";import"./phone-vSJF-a1K.js";import"./index-C6NuygFm.js";import"./index-B-3z50BQ.js";import"./Header-BbeKOoJl.js";import"./ScreenState-sH8dnbA1.js";const st={title:"Flows/10 Offline and session/Mid-flow return",parameters:{layout:"fullscreen",docs:{story:{inline:!1}}}},l="R17 (not built). Today the session ends, the login sheet opens, the cache clears, and the return to the step is not defined: the withdraw screens read only `accessToken`, and the login sheet has no `onSuccess` here. The result on screen is inferred, not seen. Open questions: (1) return to the same step with the entered values, or restart the step; (2) after login, does the money action repeat on its own (risk of a double payout or double claim) or does the user confirm again; (3) how long a withdraw OTP stays valid across the login.",i={tags:["proposed"],parameters:{docs:{description:{story:l+" This design keeps the typed code and asks for an explicit tap after login (no automatic repeat of the payout)."}}},render:()=>e.jsx(d,{title:"Verify OTP",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to finish this withdrawal. Your payout has not been sent."}),e.jsx(p,{variant:"body14Regular",color:n.text.secondary,children:"Enter the OTP sent to 98XXXXXX10"}),e.jsx(g,{length:6,value:"482915",onChangeText:()=>{}})]})})},r={tags:["proposed"],parameters:{docs:{description:{story:l+" This design keeps the amount and shows that the claim was not submitted, so the user does not submit twice."}}},render:()=>e.jsx(d,{title:"Did You Shop?",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(p,{variant:"body16Bold",color:n.text.primary,children:"Almost there! Tell us your order amount"}),e.jsx(c,{size:"sm",value:"1299",onChangeText:()=>{},placeholder:"Enter amount"}),e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to submit this claim. It has not been submitted yet."})]})})},s={tags:["proposed"],parameters:{docs:{description:{story:l+" The picked files live only in screen state and are lost on a restart: the biggest loss of the three. Open question: keep the files in memory across the login."}}},render:()=>e.jsx(d,{title:"Did You Shop?",footer:e.jsx(o,{style:{padding:t[16]},children:e.jsx(m,{buttons:"single",primaryLabel:"Log in to continue",onPrimary:()=>{}})}),children:e.jsxs(o,{style:{padding:t[16],gap:t[16]},children:[e.jsx(p,{variant:"body16Bold",color:n.text.primary,children:"Upload your invoice"}),e.jsx(a,{tone:"warning",title:"Your session ended",message:"Log in again to raise your ticket. Your screenshots are still here."})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"PROPOSED: the session ends while an invoice is uploading (C1-Other and C2 claims).",...s.parameters?.docs?.description}}};const nt=["WithdrawOtpSessionEnded","ClaimSubmitSessionEnded","InvoiceUploadSessionEnded"];export{r as ClaimSubmitSessionEnded,s as InvoiceUploadSessionEnded,i as WithdrawOtpSessionEnded,nt as __namedExportsOrder,st as default};
