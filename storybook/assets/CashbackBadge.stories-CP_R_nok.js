import{j as e,V as i,c}from"./iframe-BxRbKpJi.js";import{T as d}from"./Text-Ck5O8Bhy.js";import{s as n}from"./motion-C4NNgPp6.js";import{C as s}from"./CashbackBadge-MBJ6k9Zu.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";const k={title:"Components/Badge and Tag/CashbackBadge",component:s,tags:["autodocs","live"],parameters:{source:"src/atoms/CashbackBadge.tsx",docs:{description:{component:'A pale saffron pill with an optional prefix ("Upto") and a bold money value. Use it for the cashback or reward amount on a card or store.'}}},argTypes:{prefix:{control:"text"},value:{control:"text"},showPrefix:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]}},args:{prefix:"Upto",value:"₹1,200 Cashback",showPrefix:!0,size:"md"}},r=({label:a,children:p})=>e.jsxs(i,{style:{gap:n[4],alignItems:"flex-start"},children:[e.jsx(d,{variant:"caption10Medium",color:c.text.tertiary,children:a}),p]}),m=({children:a})=>e.jsx(i,{style:{flexDirection:"row",flexWrap:"wrap",gap:n[16],maxWidth:520,alignItems:"flex-start"},children:a}),o={},t={render:()=>e.jsxs(m,{children:[["sm","md","lg"].map(a=>e.jsx(r,{label:`size ${a}`,children:e.jsx(s,{prefix:"Upto",value:"₹1,200 Cashback",size:a})},a)),e.jsx(r,{label:"no prefix",children:e.jsx(s,{value:"₹1,200 Cashback"})}),e.jsx(r,{label:"prefix hidden (showPrefix false)",children:e.jsx(s,{prefix:"Upto",value:"X% Cashback",showPrefix:!1})})]})},l={parameters:{docs:{description:{story:"No disabled or loading state. Large amounts keep Indian grouping. In a narrow column the text shrinks to 75 percent (adjustsFontSizeToFit); on web this prop may not shrink, so check the 200 px example on a device."}}},render:()=>e.jsxs(i,{style:{gap:n[16],width:200},children:[e.jsx(r,{label:"large amount",children:e.jsx(s,{prefix:"Upto",value:"₹1,00,000 Cashback"})}),e.jsx(r,{label:"long text in 200 px",children:e.jsx(s,{prefix:"Flat",value:"₹1,200 Rewards on Amazon and Flipkart"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      {(['sm', 'md', 'lg'] as const).map(s => <Cell key={s} label={\`size \${s}\`}><CashbackBadge prefix="Upto" value="₹1,200 Cashback" size={s} /></Cell>)}
      <Cell label="no prefix"><CashbackBadge value="₹1,200 Cashback" /></Cell>
      <Cell label="prefix hidden (showPrefix false)"><CashbackBadge prefix="Upto" value="X% Cashback" showPrefix={false} /></Cell>
    </Wrap>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Large amounts keep Indian grouping. In a narrow column the text shrinks to 75 percent (adjustsFontSizeToFit); on web this prop may not shrink, so check the 200 px example on a device.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 200
  }}>
      <Cell label="large amount"><CashbackBadge prefix="Upto" value="₹1,00,000 Cashback" /></Cell>
      <Cell label="long text in 200 px"><CashbackBadge prefix="Flat" value="₹1,200 Rewards on Amazon and Flipkart" /></Cell>
    </View>
}`,...l.parameters?.docs?.source}}};const w=["Playground","Variants","States"];export{o as Playground,l as States,t as Variants,w as __namedExportsOrder,k as default};
