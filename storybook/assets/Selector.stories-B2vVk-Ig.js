import{j as e,V as u,r as m}from"./iframe-EJmZd_T6.js";import{S as n}from"./Selector-BlyoHc9F.js";import{i as s}from"./index-DCss3D-b.js";import{s as x}from"./motion-CMqo2j38.js";import{W as f,G as t,S as b}from"./_kit-CoErQAi_.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mm0dto.js";import"./Text-CwaPBD6t.js";import"./haptics-BkmE1-bM.js";import"./gradients-Yoe7k8Uk.js";import"./index-AjmY8xRX.js";function r(a){const[c,d]=m.useState(!!a.selected);return e.jsx(n,{...a,selected:c,onPress:()=>d(p=>!p)})}const V={title:"Components/Selections/Selector",component:n,tags:["autodocs","live"],parameters:{source:"src/atoms/Selector.tsx",docs:{description:{component:"A 160 by 48 tile with an icon and a short title, for picking an answer in a grid (spend category, employment type)."}}},argTypes:{title:{control:"text"},selected:{control:"boolean"}},args:{title:"Salaried",selected:!1,source:s.brands.amazon},render:a=>e.jsx(r,{...a})},o={},l={render:()=>e.jsxs(b,{width:358,children:[e.jsx(t,{label:"default",children:e.jsx(r,{title:"Salaried",source:s.brands.amazon})}),e.jsx(t,{label:"selected",children:e.jsx(r,{title:"Self-employed",source:s.brands.flipkart,selected:!0})}),e.jsx(t,{label:"no icon source (flat neutral square)",children:e.jsx(r,{title:"Student"})}),e.jsx(t,{label:"two per row (flex 1)",children:e.jsxs(u,{style:{flexDirection:"row",gap:x[8]},children:[e.jsx(r,{title:"Shopping",source:s.brands.myntra,style:{flex:1}}),e.jsx(r,{title:"Travel",source:s.brands.ajio,style:{flex:1},selected:!0})]})})]})},i={render:()=>e.jsxs(f,{children:[e.jsx(t,{label:"default",children:e.jsx(r,{title:"Fuel",source:s.brands.amazon})}),e.jsx(t,{label:"selected",children:e.jsx(r,{title:"Fuel",source:s.brands.amazon,selected:!0})}),e.jsx(t,{label:"long title (wraps to 2 lines)",children:e.jsx(r,{title:"Self-employed professional",source:s.brands.flipkart})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={358}>
      <Group label="default"><Live title="Salaried" source={images.brands.amazon} /></Group>
      <Group label="selected"><Live title="Self-employed" source={images.brands.flipkart} selected /></Group>
      <Group label="no icon source (flat neutral square)"><Live title="Student" /></Group>
      <Group label="two per row (flex 1)">
        <View style={{
        flexDirection: 'row',
        gap: spacing[8]
      }}>
          <Live title="Shopping" source={images.brands.myntra} style={{
          flex: 1
        }} />
          <Live title="Travel" source={images.brands.ajio} style={{
          flex: 1
        }} selected />
        </View>
      </Group>
    </Stack>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Group label="default"><Live title="Fuel" source={images.brands.amazon} /></Group>
      <Group label="selected"><Live title="Fuel" source={images.brands.amazon} selected /></Group>
      <Group label="long title (wraps to 2 lines)"><Live title="Self-employed professional" source={images.brands.flipkart} /></Group>
    </Wrap>
}`,...i.parameters?.docs?.source}}};const F=["Playground","Variants","States"];export{o as Playground,i as States,l as Variants,F as __namedExportsOrder,V as default};
