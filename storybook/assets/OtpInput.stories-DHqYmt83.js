import{j as e,r as u}from"./iframe-DK2xttIN.js";import{O as c}from"./OtpInput-ULhMVoH4.js";import{S as d,G as r}from"./_kit-CWe3tWi6.js";import"./preload-helper-Zf8nSx-t.js";import"./motion-q_NUJArm.js";import"./Text-Czhgaopg.js";import"./haptics-CV4QS1hG.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./index-mJl4hEuB.js";function t(o){const[i,l]=u.useState(o.value??"");return e.jsx(c,{...o,value:i,onChangeText:l})}const G={title:"Components/Input fields/OtpInput",component:c,tags:["autodocs","live"],parameters:{source:"src/atoms/OtpInput.tsx",docs:{description:{component:"A row of 6 (or 4) digit slots over one hidden text field, with a hint line and a resend timer. Login and withdraw use 6 digits (D19)."}}},argTypes:{length:{control:"select",options:[4,6]},state:{control:"select",options:[void 0,"default","focused","error"]},resend:{control:"select",options:["hidden","timer","ready"]},seconds:{control:"number"},hint:{control:"text"},hintIcon:{control:"text"},autoFocus:{control:"boolean"},value:{control:"text"}},args:{length:6,value:"",onChangeText:()=>{},resend:"timer",seconds:24,hint:"Sent to 98XXXXXX10"},render:({value:o,onChangeText:i,...l})=>e.jsx(d,{children:e.jsx(t,{...l,value:o})})},s={},n={render:()=>e.jsxs(d,{children:[e.jsx(r,{label:"length 6 (login, withdraw)",children:e.jsx(t,{length:6,value:"482"})}),e.jsx(r,{label:"length 4 (Figma, not shipped)",children:e.jsx(t,{length:4,value:"48"})})]})},a={parameters:{docs:{description:{story:"Resend row: hidden, timer (fixed at 24 s here, it does not count down in this story) and ready. Type to fill the slots; the box with the blue border is the next slot to fill."}}},render:()=>e.jsxs(d,{children:[e.jsx(r,{label:"default, empty",children:e.jsx(t,{state:"default"})}),e.jsx(r,{label:"focused, half filled",children:e.jsx(t,{state:"focused",value:"482"})}),e.jsx(r,{label:"full",children:e.jsx(t,{value:"482913",hint:"Code entered"})}),e.jsx(r,{label:"error",children:e.jsx(t,{state:"error",value:"000000",hint:"Wrong code. Try again.",hintIcon:"check-circle-outline"})}),e.jsx(r,{label:"resend: timer",children:e.jsx(t,{resend:"timer",seconds:24,value:"48"})}),e.jsx(r,{label:"resend: ready",children:e.jsx(t,{resend:"ready",onResend:()=>{},value:""})}),e.jsx(r,{label:"resend: hidden",children:e.jsx(t,{resend:"hidden",value:""})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Group label="length 6 (login, withdraw)"><Live length={6} value="482" /></Group>
      <Group label="length 4 (Figma, not shipped)"><Live length={4} value="48" /></Group>
    </Stack>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Resend row: hidden, timer (fixed at 24 s here, it does not count down in this story) and ready. Type to fill the slots; the box with the blue border is the next slot to fill.'
      }
    }
  },
  render: () => <Stack>
      <Group label="default, empty"><Live state="default" /></Group>
      <Group label="focused, half filled"><Live state="focused" value="482" /></Group>
      <Group label="full"><Live value="482913" hint="Code entered" /></Group>
      <Group label="error"><Live state="error" value="000000" hint="Wrong code. Try again." hintIcon="check-circle-outline" /></Group>
      <Group label="resend: timer"><Live resend="timer" seconds={24} value="48" /></Group>
      <Group label="resend: ready"><Live resend="ready" onResend={() => {}} value="" /></Group>
      <Group label="resend: hidden"><Live resend="hidden" value="" /></Group>
    </Stack>
}`,...a.parameters?.docs?.source}}};const w=["Playground","Variants","States"];export{s as Playground,a as States,n as Variants,w as __namedExportsOrder,G as default};
