import{j as e,V as i,c as u}from"./iframe-DK2xttIN.js";import{T as m}from"./Text-Czhgaopg.js";import{s as d}from"./motion-q_NUJArm.js";import{S as s}from"./StatusBadge-BkCHJVUF.js";import"./preload-helper-Zf8nSx-t.js";const n=["requested","pending","delayed","cancelled","confirmed","paid","expired"],y={title:"Components/Badge and Tag/StatusBadge",component:s,tags:["autodocs","live"],parameters:{source:"src/atoms/StatusBadge.tsx",docs:{description:{component:'Dot plus label for the cashback lifecycle: requested, pending, delayed, cancelled, confirmed, paid, expired. Default is "Cashback Pending" at h36; pill is "Pending" at h24.'}}},argTypes:{status:{control:"select",options:[...n]},size:{control:"select",options:["default","pill"]},rounded:{control:"boolean"},label:{control:"text"}},args:{status:"pending",size:"default",rounded:!0}},t=({label:a,children:p})=>e.jsxs(i,{style:{gap:d[4],alignItems:"flex-start"},children:[e.jsx(m,{variant:"caption10Medium",color:u.text.tertiary,children:a}),p]}),c=({children:a})=>e.jsx(i,{style:{flexDirection:"row",flexWrap:"wrap",gap:d[16],maxWidth:520,alignItems:"flex-start"},children:a}),r={},l={render:()=>e.jsxs(i,{style:{gap:d[24]},children:[e.jsx(t,{label:"size default (h36)",children:e.jsx(c,{children:n.map(a=>e.jsx(s,{status:a},a))})}),e.jsx(t,{label:"size pill (h24)",children:e.jsx(c,{children:n.map(a=>e.jsx(s,{status:a,size:"pill"},a))})}),e.jsx(t,{label:"rounded false (radius xs)",children:e.jsx(c,{children:n.map(a=>e.jsx(s,{status:a,size:"pill",rounded:!1},a))})})]})},o={parameters:{docs:{description:{story:"Every status is a state. The border is always drawn, there is no opt-out. Label override is for copy such as an order with a rupee amount. The label has no truncation: long text grows the badge."}}},render:()=>e.jsxs(i,{style:{gap:d[16],width:320},children:[e.jsx(t,{label:"label override with amount",children:e.jsx(s,{status:"confirmed",label:"Confirmed ₹1,00,000"})}),e.jsx(t,{label:"long label",children:e.jsx(s,{status:"delayed",label:"Delayed: Myntra order awaiting merchant confirmation"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Cell label="size default (h36)"><Wrap>{STATUSES.map(s => <StatusBadge key={s} status={s} />)}</Wrap></Cell>
      <Cell label="size pill (h24)"><Wrap>{STATUSES.map(s => <StatusBadge key={s} status={s} size="pill" />)}</Wrap></Cell>
      <Cell label="rounded false (radius xs)"><Wrap>{STATUSES.map(s => <StatusBadge key={s} status={s} size="pill" rounded={false} />)}</Wrap></Cell>
    </View>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Every status is a state. The border is always drawn, there is no opt-out. Label override is for copy such as an order with a rupee amount. The label has no truncation: long text grows the badge.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 320
  }}>
      <Cell label="label override with amount"><StatusBadge status="confirmed" label="Confirmed ₹1,00,000" /></Cell>
      <Cell label="long label"><StatusBadge status="delayed" label="Delayed: Myntra order awaiting merchant confirmation" /></Cell>
    </View>
}`,...o.parameters?.docs?.source}}};const S=["Playground","Variants","States"];export{r as Playground,o as States,l as Variants,S as __namedExportsOrder,y as default};
