import{j as e,r as i,V as u}from"./iframe-DK2xttIN.js";import{R as n}from"./Radio-MUBifCiY.js";import{s as m}from"./motion-q_NUJArm.js";import{W as p,G as s}from"./_kit-B0SvWT-F.js";import"./preload-helper-Zf8nSx-t.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Text-Czhgaopg.js";function r(a){const[c,o]=i.useState(a.selected);return e.jsx(n,{...a,selected:c,onChange:()=>o(!0)})}function b(){const[a,c]=i.useState("hdfc");return e.jsx(u,{style:{flexDirection:"row",gap:m[16]},children:["hdfc","sbi","axis"].map(o=>e.jsx(n,{selected:a===o,onChange:()=>c(o),accessibilityLabel:o},o))})}const S={title:"Components/Selections/Radio",component:n,tags:["autodocs","live"],parameters:{source:"src/atoms/Radio.tsx",docs:{description:{component:"A round control for one-of-many choices. It has no group logic: the parent holds the selected value. Use inside a Choice row when it needs a label."}}},argTypes:{selected:{control:"boolean"},size:{control:"select",options:["md","sm"]},disabled:{control:"boolean"}},args:{selected:!1,size:"md",disabled:!1},render:a=>e.jsx(r,{...a})},t={},l={render:()=>e.jsxs(p,{children:[e.jsx(s,{label:"md unselected",children:e.jsx(r,{selected:!1})}),e.jsx(s,{label:"md selected",children:e.jsx(r,{selected:!0})}),e.jsx(s,{label:"sm unselected",children:e.jsx(r,{selected:!1,size:"sm"})}),e.jsx(s,{label:"sm selected",children:e.jsx(r,{selected:!0,size:"sm"})}),e.jsx(s,{label:"as a group (tap to move)",children:e.jsx(b,{})})]})},d={render:()=>e.jsxs(p,{children:[e.jsx(s,{label:"disabled unselected",children:e.jsx(r,{selected:!1,disabled:!0})}),e.jsx(s,{label:"disabled selected",children:e.jsx(r,{selected:!0,disabled:!0})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="md unselected"><Live selected={false} /></Group>
      <Group label="md selected"><Live selected /></Group>
      <Group label="sm unselected"><Live selected={false} size="sm" /></Group>
      <Group label="sm selected"><Live selected size="sm" /></Group>
      <Group label="as a group (tap to move)"><RadioGroup /></Group>
    </Wrap>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="disabled unselected"><Live selected={false} disabled /></Group>
      <Group label="disabled selected"><Live selected disabled /></Group>
    </Wrap>
}`,...d.parameters?.docs?.source}}};const R=["Playground","Variants","States"];export{t as Playground,d as States,l as Variants,R as __namedExportsOrder,S as default};
