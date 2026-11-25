import{j as e}from"./iframe-EJmZd_T6.js";import{O as p}from"./OnboardingScreen-cWsIDIeb.js";import{S as m}from"./ScreenHarness-Dd1A2iH9.js";import{a as c}from"./index-zf2ORj5h.js";import{S as i,c as a}from"./_flow-DBd-nTqi.js";import"./preload-helper-Zf8nSx-t.js";import"./lottie-CYgCwKq4.js";import"./FocusAwareStatusBar-BTP-j2LF.js";import"./NativeStatusBarWrapper-BM1Q6jQ2.js";import"./with-selector-HFsk6Txg.js";import"./Text-CwaPBD6t.js";import"./motion-CMqo2j38.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./analytics-DGnEPG-P.js";import"./index-DN9ObVR-.js";import"./SafeAreaView.web-BlRbxagA.js";import"./cardTools-a-yZH8gZ.js";import"./amountInput-rjKWAIpS.js";import"./BottomSheetHeader--tduzGuO.js";import"./phone-vSJF-a1K.js";import"./index-VRixmpvR.js";import"./index-DqKrqPv5.js";import"./bk-cQC-QFyn.js";import"./uat.calculate_waiver_lounge_trimmed-TfRyZmfl.js";const ve={title:"Flows/1 Launch and login/Onboarding",parameters:{layout:"fullscreen",docs:{story:{inline:!1},description:{component:'Three full-bleed slides on first launch. "Get Started" enters the app as a guest. "Already on CashKaro? Log in" opens the app-wide login sheet. Storybook stubs the Lottie slides, so the slide art is blank; the copy, progress bars and buttons are real.'}}}},o=({extra:n})=>e.jsxs(e.Fragment,{children:[e.jsx(m,{name:"Onboarding",component:p,auth:"guest",api:c.ok()}),n]}),r={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:393"},render:()=>e.jsx(o,{})},t={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:398",docs:{description:{story:'The story taps "Get Started" after the page loads. The navigation resets to MainTabs and the harness shows its stub page "→ MainTabs". The app saves "onboarded" so a returning guest skips this screen (event onboarding_guest_start).'}}},render:()=>e.jsx(o,{extra:e.jsx(i,{steps:[[1200,()=>a("Get Started")]]})})},s={tags:["live"],parameters:{source:"src/screens/OnboardingScreen.tsx:401",docs:{description:{story:"The story taps the log-in link. The real login sheet opens over the slides (see the Login sheet step for its states)."}}},render:()=>e.jsx(o,{extra:e.jsx(i,{steps:[[1200,()=>a("Log in with your CashKaro account")]]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
