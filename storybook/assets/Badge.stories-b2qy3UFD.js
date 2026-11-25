import{j as e,V as i,c as p}from"./iframe-EJmZd_T6.js";import{T as b}from"./Text-CwaPBD6t.js";import{s as n}from"./motion-CMqo2j38.js";import{B as l}from"./Badge-BVe_Pgl3.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./index-AjmY8xRX.js";const w={title:"Components/Badge and Tag/Badge",component:l,tags:["autodocs","live"],parameters:{source:"src/atoms/Badge.tsx",docs:{description:{component:'A saffron category or highlight label ("New", "Popular"). Always cashback-orange text on a pale saffron fill; it does not take a tone. For other colours use Tag.'}}},argTypes:{label:{control:"text"},size:{control:"select",options:["xxs","xs","sm","md"]},appearance:{control:"select",options:["default","subtle"]},pill:{control:"boolean"},icon:{control:"select",options:["none","dot","left","right","only","close"]},iconName:{control:"select",options:["star-filled","feat-rewards-filled","check-circle-filled","chevron-right"]}},args:{label:"Popular",size:"md",appearance:"default",pill:!1,icon:"none",iconName:"star-filled"}},a=({label:s,children:d})=>e.jsxs(i,{style:{gap:n[4],alignItems:"flex-start"},children:[e.jsx(b,{variant:"caption10Medium",color:p.text.tertiary,children:s}),d]}),c=({children:s})=>e.jsx(i,{style:{flexDirection:"row",flexWrap:"wrap",gap:n[16],maxWidth:520,alignItems:"flex-start"},children:s}),o={},r={render:()=>e.jsxs(i,{style:{gap:n[24]},children:[e.jsx(c,{children:["xxs","xs","sm","md"].map(s=>e.jsx(a,{label:`size ${s}`,children:e.jsx(l,{label:"New",size:s})},s))}),e.jsxs(c,{children:[e.jsx(a,{label:"default",children:e.jsx(l,{label:"Lifetime free"})}),e.jsx(a,{label:"subtle (gradient)",children:e.jsx(l,{label:"Lifetime free",appearance:"subtle"})}),e.jsx(a,{label:"pill",children:e.jsx(l,{label:"Lifetime free",pill:!0})}),e.jsx(a,{label:"subtle + pill",children:e.jsx(l,{label:"Lifetime free",appearance:"subtle",pill:!0})})]}),e.jsxs(c,{children:[e.jsx(a,{label:"icon none",children:e.jsx(l,{label:"Top pick"})}),e.jsx(a,{label:"dot",children:e.jsx(l,{label:"Top pick",icon:"dot"})}),e.jsx(a,{label:"left",children:e.jsx(l,{label:"Top pick",icon:"left",iconName:"star-filled"})}),e.jsx(a,{label:"right",children:e.jsx(l,{label:"Top pick",icon:"right",iconName:"chevron-right"})}),e.jsx(a,{label:"only",children:e.jsx(l,{label:"Top pick",icon:"only",iconName:"star-filled"})}),e.jsx(a,{label:"close",children:e.jsx(l,{label:"Amazon",icon:"close",onClose:()=>{}})})]})]})},t={parameters:{docs:{description:{story:"Badge has no disabled, loading or error state. Long text is not truncated: the badge grows, and a very long label wraps inside its row. The close icon (desc-cross) has a baked red stroke and does not tint to the badge colour: a component issue, not fixed here."}}},render:()=>e.jsxs(i,{style:{gap:n[16],width:300},children:[e.jsx(a,{label:"long text",children:e.jsx(l,{label:"HDFC Millennia lifetime free card with X% cashback on Amazon and Flipkart",size:"sm"})}),e.jsx(a,{label:"rupee amount",children:e.jsx(l,{label:"Save ₹1,00,000",size:"md",pill:!0})}),e.jsx(a,{label:"close (baked red cross)",children:e.jsx(l,{label:"SBI Cashback",icon:"close",onClose:()=>{}})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Wrap>
        {(['xxs', 'xs', 'sm', 'md'] as const).map(s => <Cell key={s} label={\`size \${s}\`}><Badge label="New" size={s} /></Cell>)}
      </Wrap>
      <Wrap>
        <Cell label="default"><Badge label="Lifetime free" /></Cell>
        <Cell label="subtle (gradient)"><Badge label="Lifetime free" appearance="subtle" /></Cell>
        <Cell label="pill"><Badge label="Lifetime free" pill /></Cell>
        <Cell label="subtle + pill"><Badge label="Lifetime free" appearance="subtle" pill /></Cell>
      </Wrap>
      <Wrap>
        <Cell label="icon none"><Badge label="Top pick" /></Cell>
        <Cell label="dot"><Badge label="Top pick" icon="dot" /></Cell>
        <Cell label="left"><Badge label="Top pick" icon="left" iconName="star-filled" /></Cell>
        <Cell label="right"><Badge label="Top pick" icon="right" iconName="chevron-right" /></Cell>
        <Cell label="only"><Badge label="Top pick" icon="only" iconName="star-filled" /></Cell>
        <Cell label="close"><Badge label="Amazon" icon="close" onClose={() => {}} /></Cell>
      </Wrap>
    </View>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Badge has no disabled, loading or error state. Long text is not truncated: the badge grows, and a very long label wraps inside its row. The close icon (desc-cross) has a baked red stroke and does not tint to the badge colour: a component issue, not fixed here.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 300
  }}>
      <Cell label="long text"><Badge label="HDFC Millennia lifetime free card with X% cashback on Amazon and Flipkart" size="sm" /></Cell>
      <Cell label="rupee amount"><Badge label="Save ₹1,00,000" size="md" pill /></Cell>
      <Cell label="close (baked red cross)"><Badge label="SBI Cashback" icon="close" onClose={() => {}} /></Cell>
    </View>
}`,...t.parameters?.docs?.source}}};const y=["Playground","Variants","States"];export{o as Playground,t as States,r as Variants,y as __namedExportsOrder,w as default};
