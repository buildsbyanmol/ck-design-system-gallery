import{j as e,r as p}from"./iframe-EJmZd_T6.js";import{C as t}from"./Checkbox-D50iCNYc.js";import{W as o,G as s}from"./_kit-CoErQAi_.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./motion-CMqo2j38.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Text-CwaPBD6t.js";function r(a){const[n,l]=p.useState(a.checked);return e.jsx(t,{...a,checked:n,onChange:m=>l(m)})}const L={title:"Components/Selections/Checkbox",component:t,tags:["autodocs","live"],parameters:{source:"src/atoms/Checkbox.tsx",docs:{description:{component:"A square box for many-of-many choices. Three values: unchecked, checked, indeterminate. Use inside a Choice row when it needs a label."}}},argTypes:{checked:{control:"select",options:[!1,!0,"indeterminate"]},size:{control:"select",options:["md","sm"]},disabled:{control:"boolean"}},args:{checked:!1,size:"md",disabled:!1},render:a=>e.jsx(r,{...a})},c={},d={render:()=>e.jsxs(o,{children:[e.jsx(s,{label:"md unchecked",children:e.jsx(r,{checked:!1})}),e.jsx(s,{label:"md checked",children:e.jsx(r,{checked:!0})}),e.jsx(s,{label:"md indeterminate",children:e.jsx(r,{checked:"indeterminate"})}),e.jsx(s,{label:"sm unchecked",children:e.jsx(r,{checked:!1,size:"sm"})}),e.jsx(s,{label:"sm checked",children:e.jsx(r,{checked:!0,size:"sm"})}),e.jsx(s,{label:"sm indeterminate",children:e.jsx(r,{checked:"indeterminate",size:"sm"})})]})},i={parameters:{docs:{description:{story:"Tapping an indeterminate box makes it checked. The hit area is 44 dp (hitSlop 12 around the 20 dp box)."}}},render:()=>e.jsxs(o,{children:[e.jsx(s,{label:"disabled unchecked",children:e.jsx(r,{checked:!1,disabled:!0})}),e.jsx(s,{label:"disabled checked",children:e.jsx(r,{checked:!0,disabled:!0})}),e.jsx(s,{label:"disabled indeterminate",children:e.jsx(r,{checked:"indeterminate",disabled:!0})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="md unchecked"><Live checked={false} /></Group>
      <Group label="md checked"><Live checked /></Group>
      <Group label="md indeterminate"><Live checked="indeterminate" /></Group>
      <Group label="sm unchecked"><Live checked={false} size="sm" /></Group>
      <Group label="sm checked"><Live checked size="sm" /></Group>
      <Group label="sm indeterminate"><Live checked="indeterminate" size="sm" /></Group>
    </Wrap>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tapping an indeterminate box makes it checked. The hit area is 44 dp (hitSlop 12 around the 20 dp box).'
      }
    }
  },
  render: () => <Wrap>
      <Group label="disabled unchecked"><Live checked={false} disabled /></Group>
      <Group label="disabled checked"><Live checked disabled /></Group>
      <Group label="disabled indeterminate"><Live checked="indeterminate" disabled /></Group>
    </Wrap>
}`,...i.parameters?.docs?.source}}};const S=["Playground","Variants","States"];export{c as Playground,i as States,d as Variants,S as __namedExportsOrder,L as default};
