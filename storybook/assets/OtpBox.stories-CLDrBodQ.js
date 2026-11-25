import{j as e,V as c}from"./iframe-BxRbKpJi.js";import{O as r}from"./OtpBox-C-y7Po7f.js";import{s as l}from"./motion-C4NNgPp6.js";import{W as u,G as o}from"./_kit-D3gHRJQk.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";const j={title:"Components/Input fields/OtpBox",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/OtpBox.tsx",docs:{description:{component:"One visual digit cell. Not used by any screen: OtpInput draws its own slots. Kept for reference."}}},argTypes:{value:{control:"text"},focused:{control:"boolean"},error:{control:"boolean"},size:{control:"number"}},args:{value:"4",focused:!1,error:!1}},s={},a={render:()=>e.jsx(c,{style:{flexDirection:"row",gap:l[8]},children:["4","8","2","9","1","3"].map((n,p)=>e.jsx(r,{value:n},p))})},t={render:()=>e.jsxs(u,{children:[e.jsx(o,{label:"empty",children:e.jsx(r,{value:""})}),e.jsx(o,{label:"focused",children:e.jsx(r,{value:"",focused:!0})}),e.jsx(o,{label:"filled",children:e.jsx(r,{value:"7"})}),e.jsx(o,{label:"error",children:e.jsx(r,{value:"7",error:!0})}),e.jsx(o,{label:"size 56",children:e.jsx(r,{value:"7",size:l[56]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    flexDirection: 'row',
    gap: spacing[8]
  }}>
      {['4', '8', '2', '9', '1', '3'].map((d, i) => <OtpBox key={i} value={d} />)}
    </View>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="empty"><OtpBox value="" /></Group>
      <Group label="focused"><OtpBox value="" focused /></Group>
      <Group label="filled"><OtpBox value="7" /></Group>
      <Group label="error"><OtpBox value="7" error /></Group>
      <Group label="size 56"><OtpBox value="7" size={spacing[56]} /></Group>
    </Wrap>
}`,...t.parameters?.docs?.source}}};const b=["Playground","Variants","States"];export{s as Playground,t as States,a as Variants,b as __namedExportsOrder,j as default};
