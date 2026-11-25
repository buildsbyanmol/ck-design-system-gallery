import{j as t,V as r,c as m}from"./iframe-BxRbKpJi.js";import{A as l,C as n}from"./CreditCardAdvisorAvatar-BdBWnfbx.js";import{T as c}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{s as a}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B65UtqpU.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./tagVariants-CS75JYCB.js";const se={title:"Components/Avatar/CreditCardAdvisorAvatar",component:n,tags:["autodocs","live"],parameters:{source:"src/organisms/CreditCardAdvisorAvatar.tsx",docs:{description:{component:"Swipey, the card advisor mascot: a credit card with a face that shows what the advisor is doing. The screen passes the state; the avatar never decides it."}}},argTypes:{state:{control:"select",options:l},size:{control:{type:"range",min:48,max:300,step:4},description:"Square size in dp. Below 72 compact, below 140 standard, above full detail."},audioLevel:{control:{type:"range",min:0,max:1,step:.05},description:"Mouth opening while state is speaking. Absent = the mouth runs its own loop."},accessibilityLabel:{control:"text"},style:{control:!1}},args:{state:"idle",size:160}},o={},p=({label:e,children:d})=>t.jsxs(r,{style:{alignItems:"center",gap:a[8]},children:[d,t.jsx(c,{variant:"body12Medium",color:m.text.secondary,children:e})]}),i={parameters:{docs:{description:{story:"One avatar per state at size 96. Motion runs through reanimated on web. Under reduce motion each state shows one still pose."}}},render:()=>t.jsx(r,{style:{flexDirection:"row",flexWrap:"wrap",gap:a[24],maxWidth:520,justifyContent:"center"},children:l.map(e=>t.jsx(p,{label:e,children:t.jsx(n,{state:e,size:96})},e))})},s={parameters:{docs:{description:{story:"Sizes from 48 (chat header, compact detail) to 300 (onboarding mascot, full detail with legs), and the speaking state with the mouth driven by audioLevel 0, 0.5 and 1. Open question for product: the avatar has no loading or empty state of its own; thinking is the loading look."}}},render:()=>t.jsxs(r,{style:{gap:a[32],alignItems:"center"},children:[t.jsx(r,{style:{flexDirection:"row",flexWrap:"wrap",gap:a[24],alignItems:"flex-end",justifyContent:"center"},children:[48,64,96,160,300].map(e=>t.jsx(p,{label:`${e}`,children:t.jsx(n,{state:"listening",size:e})},e))}),t.jsx(r,{style:{flexDirection:"row",gap:a[24]},children:[0,.5,1].map(e=>t.jsx(p,{label:`speaking, audioLevel ${e}`,children:t.jsx(n,{state:"speaking",size:96,audioLevel:e})},e))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One avatar per state at size 96. Motion runs through reanimated on web. Under reduce motion each state shows one still pose.'
      }
    }
  },
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[24],
    maxWidth: 520,
    justifyContent: 'center'
  }}>
      {ADVISOR_AVATAR_STATES.map(s => <Cell key={s} label={s}><CreditCardAdvisorAvatar state={s} size={96} /></Cell>)}
    </View>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Sizes from 48 (chat header, compact detail) to 300 (onboarding mascot, full detail with legs), and the speaking state with the mouth driven by audioLevel 0, 0.5 and 1. Open question for product: the avatar has no loading or empty state of its own; thinking is the loading look.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[32],
    alignItems: 'center'
  }}>
      <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing[24],
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
        {[48, 64, 96, 160, 300].map(size => <Cell key={size} label={\`\${size}\`}><CreditCardAdvisorAvatar state="listening" size={size} /></Cell>)}
      </View>
      <View style={{
      flexDirection: 'row',
      gap: spacing[24]
    }}>
        {[0, 0.5, 1].map(level => <Cell key={level} label={\`speaking, audioLevel \${level}\`}><CreditCardAdvisorAvatar state="speaking" size={96} audioLevel={level} /></Cell>)}
      </View>
    </View>
}`,...s.parameters?.docs?.source}}};const ne=["Playground","Variants","States"];export{o as Playground,s as States,i as Variants,ne as __namedExportsOrder,se as default};
