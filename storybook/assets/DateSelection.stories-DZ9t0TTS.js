import{j as e,r as d,V as y}from"./iframe-BxRbKpJi.js";import{D as p}from"./DateSelection-DNs7GY5A.js";import{s as m}from"./motion-C4NNgPp6.js";import{W as i,G as s}from"./_kit-CssoIcXV.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./index-DEPmHYsu.js";function a(r){const[c,t]=d.useState(r.property1==="Selected");return e.jsx(p,{...r,property1:c?"Selected":"Default",onPress:()=>t(u=>!u)})}function x(){const[r,c]=d.useState("05");return e.jsx(y,{style:{flexDirection:"row",gap:m[8]},children:["03","04","05","06","07"].map(t=>e.jsx(p,{day:t,property1:r===t?"Selected":"Default",onPress:()=>c(t)},t))})}const D={title:"Components/Selections/DateSelection",component:p,tags:["autodocs","live"],parameters:{source:"src/atoms/DateSelection.tsx",docs:{description:{component:"A 64 dp round day chip. The blue border stays in both states; selection fills it blue. Not used by any screen today."}}},argTypes:{day:{control:"text"},property1:{control:"select",options:["Default","Selected"]}},args:{day:"05",property1:"Default"},render:r=>e.jsx(a,{...r})},o={},l={render:()=>e.jsxs(i,{children:[e.jsx(s,{label:"Default",children:e.jsx(a,{day:"05"})}),e.jsx(s,{label:"Selected",children:e.jsx(a,{day:"05",property1:"Selected"})}),e.jsx(s,{label:"as a row (one selected)",children:e.jsx(x,{})})]})},n={render:()=>e.jsxs(i,{children:[e.jsx(s,{label:"single digit",children:e.jsx(a,{day:"1"})}),e.jsx(s,{label:"two digits",children:e.jsx(a,{day:"31",property1:"Selected"})}),e.jsx(s,{label:"long text (3 characters)",children:e.jsx(a,{day:"Sun"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="Default"><Live day="05" /></Group>
      <Group label="Selected"><Live day="05" property1="Selected" /></Group>
      <Group label="as a row (one selected)"><DayRow /></Group>
    </Wrap>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="single digit"><Live day="1" /></Group>
      <Group label="two digits"><Live day="31" property1="Selected" /></Group>
      <Group label="long text (3 characters)"><Live day="Sun" /></Group>
    </Wrap>
}`,...n.parameters?.docs?.source}}};const w=["Playground","Variants","States"];export{o as Playground,n as States,l as Variants,w as __namedExportsOrder,D as default};
