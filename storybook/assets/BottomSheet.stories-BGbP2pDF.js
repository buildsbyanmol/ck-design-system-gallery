import{j as f}from"./iframe-DK2xttIN.js";import{B as k}from"./BottomSheet-DQVfsdpZ.js";import{i as y}from"./index-DCss3D-b.js";import{O as S}from"./_present-DfSULVOK.js";import"./preload-helper-Zf8nSx-t.js";import"./motion-q_NUJArm.js";import"./BottomSheetHeader-CiFr6Grc.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./BottomSheetBody-CGsFws5T.js";import"./SearchBar-CE3pl0W6.js";import"./useScreenFocused-CQUqApbV.js";import"./with-selector-CpCbjLFO.js";import"./CardTile-BTfStbVG.js";import"./PartnerCard-Ny9V1xMi.js";import"./GainBand-BMDMIDTL.js";import"./CompareCard-wUfR8vjN.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-CNAq6MQP.js";import"./AmountInput-vuFcXfX6.js";import"./amountInput-BIBzs3v3.js";import"./BarBreakdown-Ov1ar3LP.js";import"./StackedBar-B7RTqn76.js";import"./FilterRow-C9655B76.js";import"./CategoryCircle-Cc2y7IyX.js";import"./Choice-D0RjL1kD.js";import"./TermsAndConditions-CMMlVp8j.js";import"./TabPrimary-DTfPGRdz.js";import"./TabsSecondary-B5LhQfcn.js";import"./ListRow-BQc2dCdC.js";import"./Tooltip-DuDw3JkL.js";import"./Accordion-D2Xjx4kK.js";import"./Toast-D7ijkSGP.js";import"./InlineMessage-BdiJ76-B.js";import"./StripAlert-CKclIk9-.js";import"./CardFeeStrip-2hPpjNsb.js";import"./BrandLogo-C4MMBo3z.js";import"./AmountActionRow-_blb5WB4.js";import"./DiscBulletList-B7UugVnF.js";import"./HelpTicketCard-i6-ScK9N.js";import"./TrackMoreBanner-CQAIHlZY.js";import"./PaymentRecordCard-BSnxSZ7y.js";import"./ReviewCard-BctNynsZ.js";import"./HeroVideo-7QpzFDox.js";import"./OfflineBanner-EbZibXrO.js";import"./BreakdownTable-kiMM81G4.js";import"./SpendCard-Dymb1Hdj.js";import"./PodiumCompare-nloRnlEo.js";import"./BigAmountCard-Cp6wv979.js";import"./CompareTable-FFjCxkRv.js";import"./Stepper-CpESk6gy.js";import"./InlineFilterQuestion-D9B3Khl_.js";import"./LeagueCardRow-iBF4GEM-.js";import"./cardTools-Ct3zlgT2.js";import"./FooterButtons-BG6MbxZE.js";const mt={title:"Components/Sheets/BottomSheet",component:k,tags:["autodocs","live"],parameters:{layout:"fullscreen",source:"src/organisms/BottomSheet.tsx:65",docs:{description:{component:"The sheet shell: handle and title, a body picked by `template`, and an optional sticky footer. Snap points 58% and 96%. Scroll up to expand, pan down to close."}}},argTypes:{template:{control:"select",options:["image-only","eligibility-checker","cashback-status","month-picker","text-only","image-heading-body","icon-heading-body","money-status","reward-rates","rate-list","terms-list","numbered-list","selector","filters"]},title:{control:"text"},showStroke:{control:"boolean"},footer:{control:"boolean"}},args:{title:"About cashback",showStroke:!0,template:"text-only",footer:!1},render:P=>f.jsx(S,{children:w=>f.jsx(k,{ref:w,...P})})},b={buttons:"single",color:"second",primaryLabel:"Ok, Got It"},e={args:{bodyProps:{text:"Cashback is credited after the store confirms your order. This usually takes 60 to 90 days."}}},t={args:{title:void 0,template:"image-only",bodyProps:{image:y.storepage.amazon}}},r={args:{title:"Check your eligibility",template:"eligibility-checker",footer:!0,footerProps:{buttons:"single",color:"second",primaryLabel:"Check Eligibility"}},parameters:{docs:{description:{story:"Static form body. The real checker is EligibilityCheckerSheet; this template is not wired to the API."}}}},o={args:{title:"Cashback status",template:"cashback-status",footer:!0,footerProps:b,bodyProps:{sections:[{title:"Amazon",items:[{value:"₹1,500",biline:"Order CKORDER0001",status:"confirmed"},{value:"₹240",biline:"Order CKORDER0002",status:"pending"}]},{title:"Flipkart",items:[{value:"₹3,200",biline:"Order CKORDER0003",status:"paid"}]}]}}},s={args:{title:"Select month",template:"month-picker",bodyProps:{options:["November 2026","October 2026","September 2026","August 2026"]}}},a={args:{template:"text-only",bodyProps:{text:"Cashback stays pending until the return and cancellation window of the store ends."}}},n={args:{title:void 0,template:"image-heading-body",footer:!0,footerProps:b,bodyProps:{image:y.help.appLogo,heading:"Shop through Cards.xtra",body:"Open the store from the app so we can track your order.",note:"Orders usually show up within 24 hours."}}},i={args:{title:void 0,template:"icon-heading-body",bodyProps:{image:y.screenstate.tracking,heading:"Your order is tracked",body:"Cashback shows as pending once the store reports the order."}}},p={args:{title:"Earning status",template:"money-status",footer:!0,footerProps:b,bodyProps:{amount:"₹1,500",status:"pending",description:"Cashback stays pending until the return window ends"}}},m={args:{title:"Reward rates",template:"reward-rates"}},c={args:{title:"Cashback rates",template:"rate-list",bodyProps:{rewardRates:[{rate:"X%",description:"on Fashion"},{rate:"X%",description:"on Electronics"},{rate:"X%",description:"on all other categories"}]}}},d={args:{title:"Terms and conditions",template:"terms-list",bodyProps:{text:"Cashback is paid only when:",bullets:["You open the store from Cards.xtra","You finish the order in the same session","The order is not returned or cancelled"]}}},l={args:{title:"See offer details",template:"numbered-list",bodyProps:{text:"How to get this offer:",bullets:["Tap Shop Now","Add items worth ₹1,499 or more","Pay online and finish the order"]}}},u={args:{title:"Pick a category",template:"selector",bodyProps:{options:["Shopping","Travel","Dining","Fuel"]}}},h={args:{title:"Filters",template:"filters"},parameters:{docs:{description:{story:"Placeholder body. The code says the filter menu is not built into this template. Real filter sheets are FilterMenu and OrdersFilterMenu, hosted by the screens."}}}},g={args:{title:"Withdraw cashback",template:"text-only",footer:!0,footerProps:{buttons:"dual",color:"second",primaryLabel:"Withdraw ₹1,500",secondaryLabel:"Not now"},bodyProps:{text:"You can withdraw confirmed cashback to UPI or as a gift card. Minimum ₹250."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    bodyProps: {
      text: 'Cashback is credited after the store confirms your order. This usually takes 60 to 90 days.'
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    template: 'image-only',
    bodyProps: {
      image: images.storepage.amazon
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Check your eligibility',
    template: 'eligibility-checker',
    footer: true,
    footerProps: {
      buttons: 'single',
      color: 'second',
      primaryLabel: 'Check Eligibility'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Static form body. The real checker is EligibilityCheckerSheet; this template is not wired to the API.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cashback status',
    template: 'cashback-status',
    footer: true,
    footerProps: okFooter,
    bodyProps: {
      sections: [{
        title: 'Amazon',
        items: [{
          value: '₹1,500',
          biline: 'Order CKORDER0001',
          status: 'confirmed'
        }, {
          value: '₹240',
          biline: 'Order CKORDER0002',
          status: 'pending'
        }]
      }, {
        title: 'Flipkart',
        items: [{
          value: '₹3,200',
          biline: 'Order CKORDER0003',
          status: 'paid'
        }]
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Select month',
    template: 'month-picker',
    bodyProps: {
      options: ['November 2026', 'October 2026', 'September 2026', 'August 2026']
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    template: 'text-only',
    bodyProps: {
      text: 'Cashback stays pending until the return and cancellation window of the store ends.'
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    template: 'image-heading-body',
    footer: true,
    footerProps: okFooter,
    bodyProps: {
      image: images.help.appLogo,
      heading: 'Shop through Cards.xtra',
      body: 'Open the store from the app so we can track your order.',
      note: 'Orders usually show up within 24 hours.'
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    template: 'icon-heading-body',
    bodyProps: {
      image: images.screenstate.tracking,
      heading: 'Your order is tracked',
      body: 'Cashback shows as pending once the store reports the order.'
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Earning status',
    template: 'money-status',
    footer: true,
    footerProps: okFooter,
    bodyProps: {
      amount: '₹1,500',
      status: 'pending',
      description: 'Cashback stays pending until the return window ends'
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Reward rates',
    template: 'reward-rates'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cashback rates',
    template: 'rate-list',
    bodyProps: {
      rewardRates: [{
        rate: 'X%',
        description: 'on Fashion'
      }, {
        rate: 'X%',
        description: 'on Electronics'
      }, {
        rate: 'X%',
        description: 'on all other categories'
      }]
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terms and conditions',
    template: 'terms-list',
    bodyProps: {
      text: 'Cashback is paid only when:',
      bullets: ['You open the store from Cards.xtra', 'You finish the order in the same session', 'The order is not returned or cancelled']
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'See offer details',
    template: 'numbered-list',
    bodyProps: {
      text: 'How to get this offer:',
      bullets: ['Tap Shop Now', 'Add items worth ₹1,499 or more', 'Pay online and finish the order']
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Pick a category',
    template: 'selector',
    bodyProps: {
      options: ['Shopping', 'Travel', 'Dining', 'Fuel']
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Filters',
    template: 'filters'
  },
  parameters: {
    docs: {
      description: {
        story: 'Placeholder body. The code says the filter menu is not built into this template. Real filter sheets are FilterMenu and OrdersFilterMenu, hosted by the screens.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Withdraw cashback',
    template: 'text-only',
    footer: true,
    footerProps: {
      buttons: 'dual',
      color: 'second',
      primaryLabel: 'Withdraw ₹1,500',
      secondaryLabel: 'Not now'
    },
    bodyProps: {
      text: 'You can withdraw confirmed cashback to UPI or as a gift card. Minimum ₹250.'
    }
  }
}`,...g.parameters?.docs?.source}}};const ct=["Playground","ImageOnly","EligibilityChecker","CashbackStatus","MonthPicker","TextOnly","ImageHeadingBody","IconHeadingBody","MoneyStatus","RewardRates","RateList","TermsList","NumberedList","Selector","Filters","WithStickyFooter"];export{o as CashbackStatus,r as EligibilityChecker,h as Filters,i as IconHeadingBody,n as ImageHeadingBody,t as ImageOnly,p as MoneyStatus,s as MonthPicker,l as NumberedList,e as Playground,c as RateList,m as RewardRates,u as Selector,d as TermsList,a as TextOnly,g as WithStickyFooter,ct as __namedExportsOrder,mt as default};
