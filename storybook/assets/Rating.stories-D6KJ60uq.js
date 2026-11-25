import{j as e}from"./iframe-DK2xttIN.js";import{R as r}from"./Rating-nleHKv-e.js";import{W as s,G as o}from"./_kit-B0SvWT-F.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./motion-q_NUJArm.js";import"./Text-Czhgaopg.js";const x={title:"Components/Selections/Rating",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/Rating.tsx",docs:{description:{component:"A read-only row of stars for a 0 to 5 score. It shows a rating; it does not collect one. Product question: no tap-to-rate version exists."}}},argTypes:{filled:{control:{type:"number",min:0,max:10,step:1}},total:{control:{type:"number",min:1,max:10,step:1}},size:{control:"number"},gap:{control:"number"},filledColor:{control:"color"},emptyColor:{control:"color"}},args:{filled:4,total:5}},l={},t={render:()=>e.jsxs(s,{children:[e.jsx(o,{label:"4 of 5",children:e.jsx(r,{filled:4})}),e.jsx(o,{label:"5 of 5",children:e.jsx(r,{filled:5})}),e.jsx(o,{label:"size 24",children:e.jsx(r,{filled:3,size:24})}),e.jsx(o,{label:"total 10",children:e.jsx(r,{filled:7,total:10})})]})},a={render:()=>e.jsxs(s,{children:[e.jsx(o,{label:"zero",children:e.jsx(r,{filled:0})}),e.jsx(o,{label:"over total (clamped to 5)",children:e.jsx(r,{filled:9})}),e.jsx(o,{label:"negative (clamped to 0)",children:e.jsx(r,{filled:-2})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="4 of 5"><Rating filled={4} /></Group>
      <Group label="5 of 5"><Rating filled={5} /></Group>
      <Group label="size 24"><Rating filled={3} size={24} /></Group>
      <Group label="total 10"><Rating filled={7} total={10} /></Group>
    </Wrap>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="zero"><Rating filled={0} /></Group>
      <Group label="over total (clamped to 5)"><Rating filled={9} /></Group>
      <Group label="negative (clamped to 0)"><Rating filled={-2} /></Group>
    </Wrap>
}`,...a.parameters?.docs?.source}}};const g=["Playground","Variants","States"];export{l as Playground,a as States,t as Variants,g as __namedExportsOrder,x as default};
