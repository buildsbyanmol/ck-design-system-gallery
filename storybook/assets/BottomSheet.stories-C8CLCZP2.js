import{j as f}from"./iframe-EJmZd_T6.js";import{B as k}from"./BottomSheet-B6-Qwtdt.js";import{i as y}from"./index-DCss3D-b.js";import{O as S}from"./_present-CD6FquQr.js";import"./preload-helper-Zf8nSx-t.js";import"./motion-CMqo2j38.js";import"./BottomSheetHeader--tduzGuO.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./BottomSheetBody-5fuQHxlF.js";import"./SearchBar-BJVDBR6A.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./CardTile-Bob45dXu.js";import"./PartnerCard-Cp1HSolV.js";import"./GainBand-By1tcNfV.js";import"./CompareCard-CxZ6DwhZ.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-DV4oa5uQ.js";import"./AmountInput-CBdvfY7-.js";import"./amountInput-rjKWAIpS.js";import"./BarBreakdown-Dao32HDG.js";import"./StackedBar-C3jKCjDJ.js";import"./FilterRow-CStVzmhk.js";import"./CategoryCircle-Bh_wNAa8.js";import"./Choice-B9jU3ag4.js";import"./TermsAndConditions-D-HQXJF_.js";import"./TabPrimary-CuFqQLjT.js";import"./TabsSecondary-md4bQCvO.js";import"./ListRow-D2H9PhpP.js";import"./Tooltip-BMClZOXq.js";import"./Accordion-EmkSn1a8.js";import"./Toast-HuIOiDYF.js";import"./InlineMessage-Hdq8xuDM.js";import"./StripAlert-BLrZOWat.js";import"./CardFeeStrip-CtjeB6LS.js";import"./BrandLogo-Cr22hXoS.js";import"./AmountActionRow-Cj6hdwYt.js";import"./DiscBulletList-Wfqt5xzY.js";import"./HelpTicketCard-3T8dLX7S.js";import"./TrackMoreBanner-Coq338cX.js";import"./PaymentRecordCard-Cf9JYD_t.js";import"./ReviewCard-HU6ntNT8.js";import"./OfflineBanner-WiNzkl1w.js";import"./BreakdownTable-MeGvsWWS.js";import"./SpendCard-B8G8IG8w.js";import"./PodiumCompare-CwSVDn2u.js";import"./BigAmountCard-DM9gMl4b.js";import"./CompareTable-Co5LlMMB.js";import"./Stepper-BRwdq6El.js";import"./InlineFilterQuestion-CbwMVMC4.js";import"./LeagueCardRow-BzeydE4N.js";import"./cardTools-a-yZH8gZ.js";import"./FooterButtons-BAxswFhP.js";const pt={title:"Components/Sheets/BottomSheet",component:k,tags:["autodocs","live"],parameters:{layout:"fullscreen",source:"src/organisms/BottomSheet.tsx:65",docs:{description:{component:"The sheet shell: handle and title, a body picked by `template`, and an optional sticky footer. Snap points 58% and 96%. Scroll up to expand, pan down to close."}}},argTypes:{template:{control:"select",options:["image-only","eligibility-checker","cashback-status","month-picker","text-only","image-heading-body","icon-heading-body","money-status","reward-rates","rate-list","terms-list","numbered-list","selector","filters"]},title:{control:"text"},showStroke:{control:"boolean"},footer:{control:"boolean"}},args:{title:"About cashback",showStroke:!0,template:"text-only",footer:!1},render:P=>f.jsx(S,{children:w=>f.jsx(k,{ref:w,...P})})},b={buttons:"single",color:"second",primaryLabel:"Ok, Got It"},e={args:{bodyProps:{text:"Cashback is credited after the store confirms your order. This usually takes 60 to 90 days."}}},t={args:{title:void 0,template:"image-only",bodyProps:{image:y.storepage.amazon}}},r={args:{title:"Check your eligibility",template:"eligibility-checker",footer:!0,footerProps:{buttons:"single",color:"second",primaryLabel:"Check Eligibility"}},parameters:{docs:{description:{story:"Static form body. The real checker is EligibilityCheckerSheet; this template is not wired to the API."}}}},o={args:{title:"Cashback status",template:"cashback-status",footer:!0,footerProps:b,bodyProps:{sections:[{title:"Amazon",items:[{value:"₹1,500",biline:"Order CKORDER0001",status:"confirmed"},{value:"₹240",biline:"Order CKORDER0002",status:"pending"}]},{title:"Flipkart",items:[{value:"₹3,200",biline:"Order CKORDER0003",status:"paid"}]}]}}},s={args:{title:"Select month",template:"month-picker",bodyProps:{options:["November 2026","October 2026","September 2026","August 2026"]}}},a={args:{template:"text-only",bodyProps:{text:"Cashback stays pending until the return and cancellation window of the store ends."}}},n={args:{title:void 0,template:"image-heading-body",footer:!0,footerProps:b,bodyProps:{image:y.help.appLogo,heading:"Shop through Cards.xtra",body:"Open the store from the app so we can track your order.",note:"Orders usually show up within 24 hours."}}},i={args:{title:void 0,template:"icon-heading-body",bodyProps:{image:y.screenstate.tracking,heading:"Your order is tracked",body:"Cashback shows as pending once the store reports the order."}}},p={args:{title:"Earning status",template:"money-status",footer:!0,footerProps:b,bodyProps:{amount:"₹1,500",status:"pending",description:"Cashback stays pending until the return window ends"}}},m={args:{title:"Reward rates",template:"reward-rates"}},c={args:{title:"Cashback rates",template:"rate-list",bodyProps:{rewardRates:[{rate:"X%",description:"on Fashion"},{rate:"X%",description:"on Electronics"},{rate:"X%",description:"on all other categories"}]}}},d={args:{title:"Terms and conditions",template:"terms-list",bodyProps:{text:"Cashback is paid only when:",bullets:["You open the store from Cards.xtra","You finish the order in the same session","The order is not returned or cancelled"]}}},l={args:{title:"See offer details",template:"numbered-list",bodyProps:{text:"How to get this offer:",bullets:["Tap Shop Now","Add items worth ₹1,499 or more","Pay online and finish the order"]}}},u={args:{title:"Pick a category",template:"selector",bodyProps:{options:["Shopping","Travel","Dining","Fuel"]}}},h={args:{title:"Filters",template:"filters"},parameters:{docs:{description:{story:"Placeholder body. The code says the filter menu is not built into this template. Real filter sheets are FilterMenu and OrdersFilterMenu, hosted by the screens."}}}},g={args:{title:"Withdraw cashback",template:"text-only",footer:!0,footerProps:{buttons:"dual",color:"second",primaryLabel:"Withdraw ₹1,500",secondaryLabel:"Not now"},bodyProps:{text:"You can withdraw confirmed cashback to UPI or as a gift card. Minimum ₹250."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const mt=["Playground","ImageOnly","EligibilityChecker","CashbackStatus","MonthPicker","TextOnly","ImageHeadingBody","IconHeadingBody","MoneyStatus","RewardRates","RateList","TermsList","NumberedList","Selector","Filters","WithStickyFooter"];export{o as CashbackStatus,r as EligibilityChecker,h as Filters,i as IconHeadingBody,n as ImageHeadingBody,t as ImageOnly,p as MoneyStatus,s as MonthPicker,l as NumberedList,e as Playground,c as RateList,m as RewardRates,u as Selector,d as TermsList,a as TextOnly,g as WithStickyFooter,mt as __namedExportsOrder,pt as default};
