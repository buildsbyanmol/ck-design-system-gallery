import{j as e,V as l,c}from"./iframe-DK2xttIN.js";import{S as a}from"./StatDelta-Csrnc226.js";import{T as u}from"./Text-Czhgaopg.js";import{s as i}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";const y={title:"Components/Text and numbers/StatDelta",component:a,tags:["autodocs","live"],parameters:{source:"src/atoms/StatDelta.tsx",docs:{description:{component:'A number with a stated direction ("₹590, down ₹2,360 less") and an optional reference line. Direction is always shown by icon and word, never by colour alone. Used by CompareCard.'}}},decorators:[r=>e.jsx(l,{style:{width:320},children:e.jsx(r,{})})],argTypes:{label:{control:"text"},value:{control:"text"},delta:{control:"text"},direction:{control:"select",options:["up","down","same"]},sentiment:{control:"select",options:["good","bad","neutral"]},layout:{control:"select",options:["row","stack"]},reference:{control:"object"}},args:{label:"Annual fee",value:"₹590",delta:"₹2,360 less",direction:"down",sentiment:"good",layout:"row",reference:{label:"Axis ACE",value:"₹2,950"}}},t=({label:r,children:d})=>e.jsxs(l,{style:{gap:i[4],alignItems:"flex-start"},children:[e.jsx(u,{variant:"caption10Medium",color:c.text.tertiary,children:r}),d]}),s={},n={render:()=>e.jsxs(l,{style:{gap:i[24],width:320},children:[e.jsx(t,{label:"down / good (lower fee)",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Annual fee",value:"₹590",delta:"₹2,360 less",direction:"down",sentiment:"good",reference:{label:"Axis ACE",value:"₹2,950"}})})}),e.jsx(t,{label:"up / good (more cashback)",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Yearly cashback",value:14500,delta:"₹3,000 more",direction:"up",sentiment:"good"})})}),e.jsx(t,{label:"up / bad (higher fee)",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Annual fee",value:2950,delta:"₹2,360 more",direction:"up",sentiment:"bad"})})}),e.jsx(t,{label:"same / neutral",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Joining fee",value:"₹500",delta:"Same",direction:"same",sentiment:"neutral"})})}),e.jsx(t,{label:"stack layout",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Annual fee",value:"₹590",delta:"₹2,360 less",direction:"down",sentiment:"good",layout:"stack",reference:{label:"Axis ACE",value:"₹2,950"}})})})]})},o={parameters:{docs:{description:{story:"No disabled or loading state. A numeric value is formatted as rupees with Indian grouping (formatINR). Values are never truncated: a long delta wraps. Value with no delta shows the number only."}}},render:()=>e.jsxs(l,{style:{gap:i[24],width:320},children:[e.jsx(t,{label:"no delta",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Welcome bonus",value:1e5})})}),e.jsx(t,{label:"large number, Indian grouping",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Lifetime savings",value:1234567,delta:"₹1,00,000 more",direction:"up",sentiment:"good"})})}),e.jsx(t,{label:"long delta wraps",children:e.jsx(l,{style:{width:320},children:e.jsx(a,{label:"Annual fee",value:"₹1,00,000",delta:"₹12,34,567 less than HDFC Millennia and SBI Cashback combined",direction:"down",sentiment:"good",reference:{label:"SBI Cashback",value:"₹12,35,567"}})})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[24],
    width: 320
  }}>
      <Cell label="down / good (lower fee)"><View style={{
        width: 320
      }}><StatDelta label="Annual fee" value="₹590" delta="₹2,360 less" direction="down" sentiment="good" reference={{
          label: 'Axis ACE',
          value: '₹2,950'
        }} /></View></Cell>
      <Cell label="up / good (more cashback)"><View style={{
        width: 320
      }}><StatDelta label="Yearly cashback" value={14500} delta="₹3,000 more" direction="up" sentiment="good" /></View></Cell>
      <Cell label="up / bad (higher fee)"><View style={{
        width: 320
      }}><StatDelta label="Annual fee" value={2950} delta="₹2,360 more" direction="up" sentiment="bad" /></View></Cell>
      <Cell label="same / neutral"><View style={{
        width: 320
      }}><StatDelta label="Joining fee" value="₹500" delta="Same" direction="same" sentiment="neutral" /></View></Cell>
      <Cell label="stack layout"><View style={{
        width: 320
      }}><StatDelta label="Annual fee" value="₹590" delta="₹2,360 less" direction="down" sentiment="good" layout="stack" reference={{
          label: 'Axis ACE',
          value: '₹2,950'
        }} /></View></Cell>
    </View>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. A numeric value is formatted as rupees with Indian grouping (formatINR). Values are never truncated: a long delta wraps. Value with no delta shows the number only.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[24],
    width: 320
  }}>
      <Cell label="no delta"><View style={{
        width: 320
      }}><StatDelta label="Welcome bonus" value={100000} /></View></Cell>
      <Cell label="large number, Indian grouping"><View style={{
        width: 320
      }}><StatDelta label="Lifetime savings" value={1234567} delta="₹1,00,000 more" direction="up" sentiment="good" /></View></Cell>
      <Cell label="long delta wraps"><View style={{
        width: 320
      }}><StatDelta label="Annual fee" value="₹1,00,000" delta="₹12,34,567 less than HDFC Millennia and SBI Cashback combined" direction="down" sentiment="good" reference={{
          label: 'SBI Cashback',
          value: '₹12,35,567'
        }} /></View></Cell>
    </View>
}`,...o.parameters?.docs?.source}}};const f=["Playground","Variants","States"];export{s as Playground,o as States,n as Variants,f as __namedExportsOrder,y as default};
