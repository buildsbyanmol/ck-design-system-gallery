import{c as t,j as e,V as s,r as m}from"./iframe-DK2xttIN.js";import{R as r}from"./RollingAmount-CqOyFvtd.js";import{B as u}from"./Button-CAf0Zm_X.js";import{T as g}from"./Text-Czhgaopg.js";import{s as l,r as h}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./MaskedView.web-Dt2qNyJt.js";import"./LinearGradient-CErKe_YJ.js";import"./opacity-rEjPgtwf.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";const S={title:"Components/Text and numbers/RollingAmount",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/RollingAmount.tsx",docs:{description:{component:"An odometer reveal for a money value: each digit rolls through reels and settles left to right. Used for the Earnings headline. Default colour is white, so it sits on a dark surface.",story:"WEB RENDERING PROBLEM (known black box): it uses reanimated worklets and a masked view, so on react-native-web it may render blank or static. If the number is blank, the app behaviour has to be checked on a device. The component is not changed here."}}},decorators:[a=>e.jsx(s,{style:{backgroundColor:t.surface.inverse,padding:l[24],borderRadius:h.lg},children:e.jsx(a,{})})],argTypes:{value:{control:"text"},variant:{control:"select",options:["display40ExtraBold","display36ExtraBold","heading28Bold","heading20Bold"]},duration:{control:{type:"number",min:200,max:3e3,step:100}},playToken:{control:"text"},color:{control:"select",options:[t.text.inverse,t.cashback.default]}},args:{value:"₹1,00,000",variant:"display36ExtraBold",color:t.text.inverse,duration:900,playToken:1}},o=({label:a,children:p})=>e.jsxs(s,{style:{gap:l[4],alignItems:"flex-start"},children:[e.jsx(g,{variant:"caption10Medium",color:t.text.tertiary,children:a}),p]}),n={};function y(){const[a,p]=m.useState(1);return e.jsxs(s,{style:{gap:l[16],alignItems:"flex-start"},children:[e.jsx(r,{value:"₹12,34,567",playToken:a}),e.jsx(u,{label:"Replay",variant:"outline",tone:"main",size:36,onPress:()=>p(c=>c+1)})]})}const i={parameters:{docs:{description:{story:"Typography variants, and replay through playToken (change the token to roll again; the app bumps it on every screen focus)."}}},render:()=>e.jsxs(s,{style:{gap:l[24]},children:[["display40ExtraBold","display36ExtraBold","heading28Bold","heading20Bold"].map(a=>e.jsx(o,{label:a,children:e.jsx(r,{value:"₹1,500",variant:a})},a)),e.jsx(o,{label:"replay",children:e.jsx(y,{})})]})},d={parameters:{docs:{description:{story:"No disabled, loading or error state. Only 0 to 9 spin; the rupee sign, commas and the decimal point are static. Shown: paise, a very large amount with Indian grouping, zero, and a slow roll."}}},render:()=>e.jsxs(s,{style:{gap:l[24]},children:[e.jsx(o,{label:"paise",children:e.jsx(r,{value:"₹775.60"})}),e.jsx(o,{label:"zero",children:e.jsx(r,{value:"₹0"})}),e.jsx(o,{label:"very large",children:e.jsx(r,{value:"₹12,34,56,789"})}),e.jsx(o,{label:"slow (3000 ms)",children:e.jsx(r,{value:"₹1,00,000",duration:3e3})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Typography variants, and replay through playToken (change the token to roll again; the app bumps it on every screen focus).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[24]
  }}>
      {(['display40ExtraBold', 'display36ExtraBold', 'heading28Bold', 'heading20Bold'] as const).map(v => <Cell key={v} label={v}><RollingAmount value="₹1,500" variant={v} /></Cell>)}
      <Cell label="replay"><Replay /></Cell>
    </View>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled, loading or error state. Only 0 to 9 spin; the rupee sign, commas and the decimal point are static. Shown: paise, a very large amount with Indian grouping, zero, and a slow roll.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Cell label="paise"><RollingAmount value="₹775.60" /></Cell>
      <Cell label="zero"><RollingAmount value="₹0" /></Cell>
      <Cell label="very large"><RollingAmount value="₹12,34,56,789" /></Cell>
      <Cell label="slow (3000 ms)"><RollingAmount value="₹1,00,000" duration={3000} /></Cell>
    </View>
}`,...d.parameters?.docs?.source}}};const V=["Playground","Variants","States"];export{n as Playground,d as States,i as Variants,V as __namedExportsOrder,S as default};
