import{j as e}from"./iframe-BxRbKpJi.js";import{O as p}from"./OnboardingScreen-DdXJNOup.js";import{S as m}from"./ScreenHarness-Iz1hq-Wj.js";import{a as c}from"./index-484A5F-I.js";import{S as i,c as a}from"./_flow-DsbdDqpV.js";import"./preload-helper-Zf8nSx-t.js";import"./lottie-DxTLvUcM.js";import"./FocusAwareStatusBar-1n2H7MjA.js";import"./NativeStatusBarWrapper-BUIYhief.js";import"./with-selector-BmPKclR2.js";import"./Text-Ck5O8Bhy.js";import"./motion-C4NNgPp6.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./analytics-CHXP_Sdz.js";import"./index-BBGdcghp.js";import"./SafeAreaView.web-CEIti7UD.js";import"./cardTools-a-yZH8gZ.js";import"./amountInput-DaOLtk6i.js";import"./BottomSheetHeader-BNjtQgSt.js";import"./phone-vSJF-a1K.js";import"./index-kdCBfTvH.js";import"./index-W0e2q_Mc.js";import"./bk-CeDoxzkO.js";import"./uat.calculate_waiver_lounge_trimmed-TfRyZmfl.js";const ve={title:"Flows/1 Launch and login/Onboarding",parameters:{layout:"fullscreen",docs:{story:{inline:!1},description:{component:'Three full-bleed slides on first launch. "Get Started" enters the app as a guest. "Already on CashKaro? Log in" opens the app-wide login sheet. Storybook stubs the Lottie slides, so the slide art is blank; the copy, progress bars and buttons are real.'}}}},o=({extra:n})=>e.jsxs(e.Fragment,{children:[e.jsx(m,{name:"Onboarding",component:p,auth:"guest",api:c.ok()}),n]}),r={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:393"},render:()=>e.jsx(o,{})},t={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:398",docs:{description:{story:'The story taps "Get Started" after the page loads. The navigation resets to MainTabs and the harness shows its stub page "→ MainTabs". The app saves "onboarded" so a returning guest skips this screen (event onboarding_guest_start).'}}},render:()=>e.jsx(o,{extra:e.jsx(i,{steps:[[1200,()=>a("Get Started")]]})})},s={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:401",docs:{description:{story:"The story taps the log-in link. The real login sheet opens over the slides (see the Login sheet step for its states)."}}},render:()=>e.jsx(o,{extra:e.jsx(i,{steps:[[1200,()=>a("Log in with your CashKaro account")]]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
