import{j as e}from"./iframe-DK2xttIN.js";import{O as p}from"./OnboardingScreen-B3Yqct6h.js";import{S as m}from"./ScreenHarness-DmOWjo0p.js";import{a as c}from"./index-DJDzVWgi.js";import{S as i,c as a}from"./_flow-tlJaOHRR.js";import"./preload-helper-Zf8nSx-t.js";import"./lottie-DpKVTrjn.js";import"./FocusAwareStatusBar-UZZLfMAg.js";import"./NativeStatusBarWrapper-DyWhgLfX.js";import"./with-selector-CpCbjLFO.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./analytics-I5h83qZl.js";import"./index-d_fF_Q_-.js";import"./SafeAreaView.web-DRtlsLU1.js";import"./cardTools-Ct3zlgT2.js";import"./amountInput-BIBzs3v3.js";import"./BottomSheetHeader-CiFr6Grc.js";import"./phone-vSJF-a1K.js";import"./index-C6NuygFm.js";import"./index-B-3z50BQ.js";import"./bk-DM0Gts6B.js";import"./uat.calculate_waiver_lounge_trimmed-TfRyZmfl.js";const ve={title:"Flows/1 Launch and login/Onboarding",parameters:{layout:"fullscreen",docs:{story:{inline:!1},description:{component:'Three full-bleed slides on first launch. "Get Started" enters the app as a guest. "Already on CashKaro? Log in" opens the app-wide login sheet. Storybook stubs the Lottie slides, so the slide art is blank; the copy, progress bars and buttons are real.'}}}},o=({extra:n})=>e.jsxs(e.Fragment,{children:[e.jsx(m,{name:"Onboarding",component:p,auth:"guest",api:c.ok()}),n]}),r={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:393"},render:()=>e.jsx(o,{})},t={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:398",docs:{description:{story:'The story taps "Get Started" after the page loads. The navigation resets to MainTabs and the harness shows its stub page "→ MainTabs". The app saves "onboarded" so a returning guest skips this screen (event onboarding_guest_start).'}}},render:()=>e.jsx(o,{extra:e.jsx(i,{steps:[[1200,()=>a("Get Started")]]})})},s={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:401",docs:{description:{story:"The story taps the log-in link. The real login sheet opens over the slides (see the Login sheet step for its states)."}}},render:()=>e.jsx(o,{extra:e.jsx(i,{steps:[[1200,()=>a("Log in with your CashKaro account")]]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OnboardingScreen.tsx:393'
  },
  render: () => <Onboarding />
}`,...r.parameters?.docs?.source},description:{story:"Slides with the two buttons.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OnboardingScreen.tsx:398',
    docs: {
      description: {
        story: 'The story taps "Get Started" after the page loads. The navigation resets to MainTabs and the harness shows its stub page "→ MainTabs". The app saves "onboarded" so a returning guest skips this screen (event onboarding_guest_start).'
      }
    }
  },
  render: () => <Onboarding extra={<Script steps={[[1200, () => clickByText('Get Started')]]} />} />
}`,...t.parameters?.docs?.source},description:{story:'"Get Started": enters the app as a guest, lands on the tabs.',...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/screens/OnboardingScreen.tsx:401',
    docs: {
      description: {
        story: 'The story taps the log-in link. The real login sheet opens over the slides (see the Login sheet step for its states).'
      }
    }
  },
  render: () => <Onboarding extra={<Script steps={[[1200, () => clickByText('Log in with your CashKaro account')]]} />} />
}`,...s.parameters?.docs?.source},description:{story:'"Already on CashKaro? Log in": the login sheet opens over the slides.',...s.parameters?.docs?.description}}};const Oe=["Slides","GuestStart","LoginTapped"];export{t as GuestStart,s as LoginTapped,r as Slides,Oe as __namedExportsOrder,ve as default};
