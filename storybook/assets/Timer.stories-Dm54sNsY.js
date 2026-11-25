import{j as e,V as n,c as m,a as c}from"./iframe-EJmZd_T6.js";import{T as s}from"./Timer-C9mmxMq4.js";import{T as p}from"./Text-CwaPBD6t.js";import{s as d}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";const T={title:"Components/Text and numbers/Timer",component:s,tags:["autodocs","live"],parameters:{source:"src/atoms/Timer.tsx",docs:{description:{component:'A red countdown chip: clock icon and zero-padded time ("23:59", "01 : 23 : 59", "02d : 48m : 53s"). It can tick live from targetTime, or show a fixed label such as an update date.'}}},argTypes:{surface:{control:"select",options:["default","transparent"]},format:{control:"select",options:["hh:mm","dd:hh:mm","dd:mm:ss"]},days:{control:{type:"number",min:0,max:99}},hours:{control:{type:"number",min:0,max:99}},minutes:{control:{type:"number",min:0,max:99}},seconds:{control:{type:"number",min:0,max:99}},targetTime:{control:!1},label:{control:"text"}},args:{surface:"default",format:"hh:mm",days:1,hours:23,minutes:59,seconds:30}},t=({label:l,children:i})=>e.jsxs(n,{style:{gap:d[4],alignItems:"flex-start"},children:[e.jsx(p,{variant:"caption10Medium",color:m.text.tertiary,children:l}),i]}),r={},a={render:()=>e.jsxs(n,{style:{gap:d[16]},children:[e.jsx(t,{label:"hh:mm",children:e.jsx(s,{format:"hh:mm",hours:23,minutes:59})}),e.jsx(t,{label:"dd:hh:mm",children:e.jsx(s,{format:"dd:hh:mm",days:1,hours:23,minutes:59})}),e.jsx(t,{label:"dd:mm:ss",children:e.jsx(s,{format:"dd:mm:ss",days:2,minutes:48,seconds:53})}),e.jsx(t,{label:"surface transparent",children:e.jsx(s,{surface:"transparent",hours:4,minutes:5})}),e.jsx(t,{label:"label (fixed date, no icon)",children:e.jsx(s,{label:"Expect update by 9th Jun '26"})})]})};function u(){const[l]=c.useState(()=>Date.now()+1728e5+288e4+53e3);return e.jsx(s,{format:"dd:mm:ss",targetTime:l})}const o={parameters:{docs:{description:{story:'The live chip ticks every second from targetTime and stops at 00. Zero and out-of-range values: values are floored and clamped at 0, a single digit pads to two, 3 digits are not capped. No disabled or error state (the chip is always the Error tone). Open question for product: what the chip shows when the countdown ends ("00:00" stays visible).'}}},render:()=>e.jsxs(n,{style:{gap:d[16]},children:[e.jsx(t,{label:"live countdown to a target time",children:e.jsx(u,{})}),e.jsx(t,{label:"ended (all zero)",children:e.jsx(s,{format:"dd:mm:ss"})}),e.jsx(t,{label:"single digits are padded",children:e.jsx(s,{hours:3,minutes:7})}),e.jsx(t,{label:"out of range (3 digits)",children:e.jsx(s,{format:"dd:hh:mm",days:120,hours:100,minutes:5})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[16]
  }}>
      <Cell label="hh:mm"><Timer format="hh:mm" hours={23} minutes={59} /></Cell>
      <Cell label="dd:hh:mm"><Timer format="dd:hh:mm" days={1} hours={23} minutes={59} /></Cell>
      <Cell label="dd:mm:ss"><Timer format="dd:mm:ss" days={2} minutes={48} seconds={53} /></Cell>
      <Cell label="surface transparent"><Timer surface="transparent" hours={4} minutes={5} /></Cell>
      <Cell label="label (fixed date, no icon)"><Timer label="Expect update by 9th Jun '26" /></Cell>
    </View>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The live chip ticks every second from targetTime and stops at 00. Zero and out-of-range values: values are floored and clamped at 0, a single digit pads to two, 3 digits are not capped. No disabled or error state (the chip is always the Error tone). Open question for product: what the chip shows when the countdown ends ("00:00" stays visible).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16]
  }}>
      <Cell label="live countdown to a target time"><Live /></Cell>
      <Cell label="ended (all zero)"><Timer format="dd:mm:ss" /></Cell>
      <Cell label="single digits are padded"><Timer hours={3} minutes={7} /></Cell>
      <Cell label="out of range (3 digits)"><Timer format="dd:hh:mm" days={120} hours={100} minutes={5} /></Cell>
    </View>
}`,...o.parameters?.docs?.source}}};const w=["Playground","Variants","States"];export{r as Playground,o as States,a as Variants,w as __namedExportsOrder,T as default};
