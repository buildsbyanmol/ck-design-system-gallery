import{j as e,V as l,c as p}from"./iframe-DK2xttIN.js";import{T as u}from"./Text-Czhgaopg.js";import{s as c}from"./motion-q_NUJArm.js";import{N as r}from"./NumberBadge-D2b2o02Z.js";import"./preload-helper-Zf8nSx-t.js";const j={title:"Components/Badge and Tag/NumberBadge",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/NumberBadge.tsx",docs:{description:{component:"Unused today. A 16 px round count marker for tabs, carts and chips, dark or light. RankBadge is the 24 px ranked-list number."}}},argTypes:{count:{control:{type:"number",min:0,max:9999}},tone:{control:"select",options:["dark","light"]},accessibilityLabel:{control:"text"}},args:{count:3,tone:"dark"}},a=({label:n,children:i})=>e.jsxs(l,{style:{gap:c[4],alignItems:"flex-start"},children:[e.jsx(u,{variant:"caption10Medium",color:p.text.tertiary,children:n}),i]}),d=({children:n})=>e.jsx(l,{style:{flexDirection:"row",flexWrap:"wrap",gap:c[16],maxWidth:520,alignItems:"flex-start"},children:n}),t={},o={render:()=>e.jsxs(d,{children:[e.jsx(a,{label:"dark",children:e.jsx(r,{count:3,tone:"dark"})}),e.jsx(a,{label:"light (on a white card it needs the border)",children:e.jsx(r,{count:3,tone:"light"})})]})},s={parameters:{docs:{description:{story:'Zero, double and large counts. The component does not cap a count ("99+"): open question for product, cap in the caller or add a rule. No disabled or loading state.'}}},render:()=>e.jsxs(d,{children:[e.jsx(a,{label:"0",children:e.jsx(r,{count:0})}),e.jsx(a,{label:"12",children:e.jsx(r,{count:12})}),e.jsx(a,{label:"1,250",children:e.jsx(r,{count:1250,tone:"light"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Cell label="dark"><NumberBadge count={3} tone="dark" /></Cell>
      <Cell label="light (on a white card it needs the border)"><NumberBadge count={3} tone="light" /></Cell>
    </Wrap>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Zero, double and large counts. The component does not cap a count ("99+"): open question for product, cap in the caller or add a rule. No disabled or loading state.'
      }
    }
  },
  render: () => <Wrap>
      <Cell label="0"><NumberBadge count={0} /></Cell>
      <Cell label="12"><NumberBadge count={12} /></Cell>
      <Cell label="1,250"><NumberBadge count={1250} tone="light" /></Cell>
    </Wrap>
}`,...s.parameters?.docs?.source}}};const f=["Playground","Variants","States"];export{t as Playground,s as States,o as Variants,f as __namedExportsOrder,j as default};
