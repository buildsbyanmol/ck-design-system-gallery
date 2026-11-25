import{j as e,V as t,c as a}from"./iframe-EJmZd_T6.js";import{D as l}from"./Divider-u-AyCyj_.js";import{T as h}from"./Text-CwaPBD6t.js";import{s as d}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./LinearGradient-D-mm0dto.js";const u=["solid","dashed","fade","or","text-count","section"],C={title:"Components/Divider/Divider",component:l,tags:["autodocs","live"],parameters:{source:"src/atoms/Divider.tsx",docs:{description:{component:"The horizontal line between content: 6 styles from a hairline to a thick full-bleed section band. It fills the width of its parent."}}},decorators:[n=>e.jsx(t,{style:{width:320},children:e.jsx(n,{})})],argTypes:{style:{control:"select",options:[...u]},label:{control:"text"},counter:{control:"text"},showCounter:{control:"boolean"},color:{control:"color"}},args:{style:"solid",label:"Your cards",counter:3,showCounter:!0}},o=({label:n,children:c})=>e.jsxs(t,{style:{gap:d[4],alignItems:"flex-start"},children:[e.jsx(h,{variant:"caption10Medium",color:a.text.tertiary,children:n}),c]}),s={},r={render:()=>e.jsxs(t,{style:{gap:d[24],width:320},children:[e.jsx(o,{label:"solid",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"solid"})})}),e.jsx(o,{label:"dashed",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"dashed"})})}),e.jsx(o,{label:"fade",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"fade"})})}),e.jsx(o,{label:"or",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"or"})})}),e.jsx(o,{label:"text-count",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"text-count",label:"Your cards",counter:3,showCounter:!0})})}),e.jsx(o,{label:"section (8 px band)",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"section"})})})]})},i={parameters:{docs:{description:{story:"Dividers have no disabled, loading or error state. Shown here: text-count without a counter, a long label, a counter that is a rupee total, and a custom stroke colour (solid and dashed only honour color)."}}},render:()=>e.jsxs(t,{style:{gap:d[24],width:320},children:[e.jsx(o,{label:"text-count, no counter",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"text-count",label:"Recommended for you"})})}),e.jsx(o,{label:"text-count, long label",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"text-count",label:"HDFC Millennia, SBI Cashback and 14 more cards",counter:16,showCounter:!0})})}),e.jsx(o,{label:"text-count, amount as counter",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"text-count",label:"Total earned",counter:"₹1,00,000",showCounter:!0})})}),e.jsx(o,{label:"solid with color override",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"solid",color:a.border.strong})})}),e.jsx(o,{label:"dashed with color override",children:e.jsx(t,{style:{width:320},children:e.jsx(l,{style:"dashed",color:a.border.strong})})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[24],
    width: 320
  }}>
      <Cell label="solid"><View style={{
        width: 320
      }}><Divider style="solid" /></View></Cell>
      <Cell label="dashed"><View style={{
        width: 320
      }}><Divider style="dashed" /></View></Cell>
      <Cell label="fade"><View style={{
        width: 320
      }}><Divider style="fade" /></View></Cell>
      <Cell label="or"><View style={{
        width: 320
      }}><Divider style="or" /></View></Cell>
      <Cell label="text-count"><View style={{
        width: 320
      }}><Divider style="text-count" label="Your cards" counter={3} showCounter /></View></Cell>
      <Cell label="section (8 px band)"><View style={{
        width: 320
      }}><Divider style="section" /></View></Cell>
    </View>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Dividers have no disabled, loading or error state. Shown here: text-count without a counter, a long label, a counter that is a rupee total, and a custom stroke colour (solid and dashed only honour color).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[24],
    width: 320
  }}>
      <Cell label="text-count, no counter"><View style={{
        width: 320
      }}><Divider style="text-count" label="Recommended for you" /></View></Cell>
      <Cell label="text-count, long label"><View style={{
        width: 320
      }}><Divider style="text-count" label="HDFC Millennia, SBI Cashback and 14 more cards" counter={16} showCounter /></View></Cell>
      <Cell label="text-count, amount as counter"><View style={{
        width: 320
      }}><Divider style="text-count" label="Total earned" counter="₹1,00,000" showCounter /></View></Cell>
      <Cell label="solid with color override"><View style={{
        width: 320
      }}><Divider style="solid" color={colors.border.strong} /></View></Cell>
      <Cell label="dashed with color override"><View style={{
        width: 320
      }}><Divider style="dashed" color={colors.border.strong} /></View></Cell>
    </View>
}`,...i.parameters?.docs?.source}}};const V=["Playground","Variants","States"];export{s as Playground,i as States,r as Variants,V as __namedExportsOrder,C as default};
