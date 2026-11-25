import{j as t,V as r,c as m}from"./iframe-EJmZd_T6.js";import{A as l,C as n}from"./CreditCardAdvisorAvatar-DJwKgFRs.js";import{T as c}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{s as a}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DYE6U759.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./tagVariants-C3ziFvwj.js";const se={title:"Components/Avatar/CreditCardAdvisorAvatar",component:n,tags:["autodocs","live"],parameters:{source:"src/organisms/CreditCardAdvisorAvatar.tsx",docs:{description:{component:"Swipey, the card advisor mascot: a credit card with a face that shows what the advisor is doing. The screen passes the state; the avatar never decides it."}}},argTypes:{state:{control:"select",options:l},size:{control:{type:"range",min:48,max:300,step:4},description:"Square size in dp. Below 72 compact, below 140 standard, above full detail."},audioLevel:{control:{type:"range",min:0,max:1,step:.05},description:"Mouth opening while state is speaking. Absent = the mouth runs its own loop."},accessibilityLabel:{control:"text"},style:{control:!1}},args:{state:"idle",size:160}},o={},p=({label:e,children:d})=>t.jsxs(r,{style:{alignItems:"center",gap:a[8]},children:[d,t.jsx(c,{variant:"body12Medium",color:m.text.secondary,children:e})]}),i={parameters:{docs:{description:{story:"One avatar per state at size 96. Motion runs through reanimated on web. Under reduce motion each state shows one still pose."}}},render:()=>t.jsx(r,{style:{flexDirection:"row",flexWrap:"wrap",gap:a[24],maxWidth:520,justifyContent:"center"},children:l.map(e=>t.jsx(p,{label:e,children:t.jsx(n,{state:e,size:96})},e))})},s={parameters:{docs:{description:{story:"Sizes from 48 (chat header, compact detail) to 300 (onboarding mascot, full detail with legs), and the speaking state with the mouth driven by audioLevel 0, 0.5 and 1. Open question for product: the avatar has no loading or empty state of its own; thinking is the loading look."}}},render:()=>t.jsxs(r,{style:{gap:a[32],alignItems:"center"},children:[t.jsx(r,{style:{flexDirection:"row",flexWrap:"wrap",gap:a[24],alignItems:"flex-end",justifyContent:"center"},children:[48,64,96,160,300].map(e=>t.jsx(p,{label:`${e}`,children:t.jsx(n,{state:"listening",size:e})},e))}),t.jsx(r,{style:{flexDirection:"row",gap:a[24]},children:[0,.5,1].map(e=>t.jsx(p,{label:`speaking, audioLevel ${e}`,children:t.jsx(n,{state:"speaking",size:96,audioLevel:e})},e))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
