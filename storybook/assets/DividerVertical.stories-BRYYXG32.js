import{j as e,V as t,c as d}from"./iframe-DK2xttIN.js";import{D as l}from"./DividerVertical-LngDeDDK.js";import{T as r}from"./Text-Czhgaopg.js";import{s as n}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-VjBCu6Ra.js";import"./LinearGradient-CErKe_YJ.js";const b={title:"Components/Divider/DividerVertical",component:l,tags:["autodocs","live"],parameters:{source:"src/atoms/DividerVertical.tsx",docs:{description:{component:'The vertical 1 px line between side-by-side blocks (for example between two stats): solid, fade, dashed or "or". Height defaults to 80.'}}},argTypes:{style:{control:"select",options:["solid","fade","dashed","or"]},height:{control:{type:"number",min:24,max:200}}},args:{style:"solid",height:80}},c=({label:s,children:h})=>e.jsxs(t,{style:{gap:n[4],alignItems:"flex-start"},children:[e.jsx(r,{variant:"caption10Medium",color:d.text.tertiary,children:s}),h]}),a={},o={render:()=>e.jsx(t,{style:{flexDirection:"row",gap:n[32]},children:["solid","fade","dashed","or"].map(s=>e.jsx(c,{label:s,children:e.jsx(l,{style:s})},s))})},i={parameters:{docs:{description:{story:'No disabled or loading state. Shown: a custom height, and the divider used between two stats with rupee amounts. The "or" style needs at least about 56 px of height (two 24 px segments plus the word).'}}},render:()=>e.jsxs(t,{style:{gap:n[24]},children:[e.jsx(c,{label:"height 40",children:e.jsx(l,{height:40})}),e.jsx(c,{label:"between two stats",children:e.jsxs(t,{style:{flexDirection:"row",alignItems:"center",gap:n[16]},children:[e.jsxs(t,{children:[e.jsx(r,{variant:"body12Regular",color:d.text.secondary,children:"Earned"}),e.jsx(r,{variant:"heading20SemiBold",children:"₹1,00,000"})]}),e.jsx(l,{style:"fade",height:40}),e.jsxs(t,{children:[e.jsx(r,{variant:"body12Regular",color:d.text.secondary,children:"Pending"}),e.jsx(r,{variant:"heading20SemiBold",children:"₹2,350"})]})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    flexDirection: 'row',
    gap: spacing[32]
  }}>
      {(['solid', 'fade', 'dashed', 'or'] as const).map(s => <Cell key={s} label={s}><DividerVertical style={s} /></Cell>)}
    </View>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Shown: a custom height, and the divider used between two stats with rupee amounts. The "or" style needs at least about 56 px of height (two 24 px segments plus the word).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Cell label="height 40"><DividerVertical height={40} /></Cell>
      <Cell label="between two stats">
        <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing[16]
      }}>
          <View><Text variant="body12Regular" color={colors.text.secondary}>Earned</Text><Text variant="heading20SemiBold">₹1,00,000</Text></View>
          <DividerVertical style="fade" height={40} />
          <View><Text variant="body12Regular" color={colors.text.secondary}>Pending</Text><Text variant="heading20SemiBold">₹2,350</Text></View>
        </View>
      </Cell>
    </View>
}`,...i.parameters?.docs?.source}}};const f=["Playground","Variants","States"];export{a as Playground,i as States,o as Variants,f as __namedExportsOrder,b as default};
