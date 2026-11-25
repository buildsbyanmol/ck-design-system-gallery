import{j as e,r as m,V as h}from"./iframe-BxRbKpJi.js";import{M as i}from"./MonthSelector-CU5sud-v.js";import{s as u}from"./motion-C4NNgPp6.js";import{W as d,G as o}from"./_kit-CssoIcXV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./index-DEPmHYsu.js";function s(r){const[c,p]=m.useState(r.property1==="Selected");return e.jsx(i,{...r,property1:c?"Selected":"Default",onPress:()=>p(t=>!t)})}function S(){const r=["September","October","November","December"],[c,p]=m.useState("November");return e.jsx(h,{style:{flexDirection:"row",gap:u[8]},children:r.map(t=>e.jsx(i,{month:t,property1:c===t?"Selected":"Default",onPress:()=>p(t)},t))})}const v={title:"Components/Selections/MonthSelector",component:i,tags:["autodocs","live"],parameters:{source:"src/atoms/MonthSelector.tsx",docs:{description:{component:"A month item for a wheel-style picker: a label between two short rules. The selected item has blue rules and a heavier label. Not used by any screen today."}}},argTypes:{month:{control:"text"},property1:{control:"select",options:["Default","Selected"]}},args:{month:"November",property1:"Default"},render:r=>e.jsx(s,{...r})},a={},n={render:()=>e.jsxs(d,{children:[e.jsx(o,{label:"Default",children:e.jsx(s,{month:"April"})}),e.jsx(o,{label:"Selected",children:e.jsx(s,{month:"April",property1:"Selected"})}),e.jsx(o,{label:"four months, one selected",children:e.jsx(S,{})})]})},l={parameters:{docs:{description:{story:'The column is a fixed 66.5 dp wide (no token). A long month name can clip in that width; check "September".'}}},render:()=>e.jsxs(d,{children:[e.jsx(o,{label:"short name",children:e.jsx(s,{month:"May"})}),e.jsx(o,{label:"longest name",children:e.jsx(s,{month:"September",property1:"Selected"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="Default"><Live month="April" /></Group>
      <Group label="Selected"><Live month="April" property1="Selected" /></Group>
      <Group label="four months, one selected"><MonthWheel /></Group>
    </Wrap>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The column is a fixed 66.5 dp wide (no token). A long month name can clip in that width; check "September".'
      }
    }
  },
  render: () => <Wrap>
      <Group label="short name"><Live month="May" /></Group>
      <Group label="longest name"><Live month="September" property1="Selected" /></Group>
    </Wrap>
}`,...l.parameters?.docs?.source}}};const w=["Playground","Variants","States"];export{a as Playground,l as States,n as Variants,w as __namedExportsOrder,v as default};
