import{j as e,V as t,c as f,r as h}from"./iframe-DK2xttIN.js";import{S as n}from"./Switch-DOYMAAVN.js";import{T as b}from"./Text-Czhgaopg.js";import{s as c}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";const j={title:"Components/Switches/Switch",component:n,tags:["autodocs","live"],parameters:{source:"src/atoms/Switch.tsx",docs:{description:{component:"The on and off toggle: a Cobalt track with a sliding white thumb, in md (44 by 24) and sm (24 by 16). It is controlled: the parent holds the value."}}},argTypes:{value:{control:"boolean"},size:{control:"select",options:["md","sm"]},disabled:{control:"boolean"},accessibilityLabel:{control:"text"},onValueChange:{control:!1}},args:{value:!1,size:"md",disabled:!1,accessibilityLabel:"Cashback alerts"}},a=({label:s,children:d})=>e.jsxs(t,{style:{gap:c[4],alignItems:"flex-start"},children:[e.jsx(b,{variant:"caption10Medium",color:f.text.tertiary,children:s}),d]});function l({value:s,...d}){const[p,m]=h.useState(s);return h.useEffect(()=>m(s),[s]),e.jsx(n,{...d,value:p,onValueChange:m})}const i={render:s=>e.jsx(l,{...s})},r={render:()=>e.jsxs(t,{style:{gap:c[16]},children:[e.jsx(a,{label:"md off",children:e.jsx(l,{value:!1,size:"md",accessibilityLabel:"Off"})}),e.jsx(a,{label:"md on",children:e.jsx(l,{value:!0,size:"md",accessibilityLabel:"On"})}),e.jsx(a,{label:"sm off",children:e.jsx(l,{value:!1,size:"sm",accessibilityLabel:"Off"})}),e.jsx(a,{label:"sm on",children:e.jsx(l,{value:!0,size:"sm",accessibilityLabel:"On"})})]})},o={parameters:{docs:{description:{story:"Disabled uses the grey-lavender track and ignores taps. The off state has a hairline border so the pale track is visible on white. Pressed fades to 0.85 opacity (hover or hold a click). Switch has no loading or error state. Shown in a settings row with a label, since a lone switch needs an accessibilityLabel."}}},render:()=>e.jsxs(t,{style:{gap:c[16],width:320},children:[e.jsx(a,{label:"disabled off",children:e.jsx(n,{value:!1,disabled:!0,accessibilityLabel:"Disabled off"})}),e.jsx(a,{label:"disabled on",children:e.jsx(n,{value:!0,disabled:!0,accessibilityLabel:"Disabled on"})}),e.jsx(a,{label:"in a settings row",children:e.jsxs(t,{style:{width:320,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(t,{style:{flex:1,paddingRight:c[16]},children:[e.jsx(b,{variant:"body14Medium",children:"Cashback alerts"}),e.jsx(b,{variant:"body12Regular",color:f.text.secondary,children:"Tell me when ₹1,00,000 or more is confirmed from Amazon, Flipkart or Myntra"})]}),e.jsx(l,{value:!0,accessibilityLabel:"Cashback alerts"})]})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[16]
  }}>
      <Cell label="md off"><Controlled value={false} size="md" accessibilityLabel="Off" /></Cell>
      <Cell label="md on"><Controlled value size="md" accessibilityLabel="On" /></Cell>
      <Cell label="sm off"><Controlled value={false} size="sm" accessibilityLabel="Off" /></Cell>
      <Cell label="sm on"><Controlled value size="sm" accessibilityLabel="On" /></Cell>
    </View>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled uses the grey-lavender track and ignores taps. The off state has a hairline border so the pale track is visible on white. Pressed fades to 0.85 opacity (hover or hold a click). Switch has no loading or error state. Shown in a settings row with a label, since a lone switch needs an accessibilityLabel.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 320
  }}>
      <Cell label="disabled off"><Switch value={false} disabled accessibilityLabel="Disabled off" /></Cell>
      <Cell label="disabled on"><Switch value disabled accessibilityLabel="Disabled on" /></Cell>
      <Cell label="in a settings row">
        <View style={{
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <View style={{
          flex: 1,
          paddingRight: spacing[16]
        }}>
            <Text variant="body14Medium">Cashback alerts</Text>
            <Text variant="body12Regular" color={colors.text.secondary}>Tell me when ₹1,00,000 or more is confirmed from Amazon, Flipkart or Myntra</Text>
          </View>
          <Controlled value accessibilityLabel="Cashback alerts" />
        </View>
      </Cell>
    </View>
}`,...o.parameters?.docs?.source}}};const L=["Playground","Variants","States"];export{i as Playground,o as States,r as Variants,L as __namedExportsOrder,j as default};
