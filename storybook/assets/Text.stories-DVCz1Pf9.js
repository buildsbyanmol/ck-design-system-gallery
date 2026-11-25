import{c as t,j as e,V as o}from"./iframe-EJmZd_T6.js";import{T as r}from"./Text-CwaPBD6t.js";import{s,b as h,t as d}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";const p=Object.keys(d),b={title:"Components/Text and numbers/Text",component:r,tags:["autodocs","live"],parameters:{source:"src/atoms/Text.tsx",docs:{description:{component:"The only way to put text on screen: one `variant` from the typography scale, a colour token and an alignment. Never set font size or family by hand."}}},argTypes:{variant:{control:"select",options:p},color:{control:"select",options:[t.text.primary,t.text.secondary,t.text.tertiary,t.text.link,t.text.inverse,t.feedback.error.text,t.feedback.success.text]},align:{control:"select",options:["left","center","right"]},numberOfLines:{control:{type:"number",min:0,max:5}},children:{control:"text"}},args:{variant:"body16Regular",color:t.text.primary,align:"left",children:"HDFC Millennia earns X% cashback on Amazon and Flipkart."}},n=({label:a,children:x})=>e.jsxs(o,{style:{gap:s[4],alignItems:"flex-start"},children:[e.jsx(r,{variant:"caption10Medium",color:t.text.tertiary,children:a}),x]}),l={decorators:[a=>e.jsx(o,{style:{width:340},children:e.jsx(a,{})})]},i={parameters:{layout:"padded",docs:{description:{story:"Every variant in the typography scale, large to small. Names read family, size and weight: display, heading, body, caption."}}},render:()=>e.jsx(o,{style:{gap:s[12],width:520},children:p.map(a=>e.jsx(n,{label:`${a} · ${d[a].fontSize}/${d[a].lineHeight}`,children:e.jsx(r,{variant:a,children:"Amazon ₹1,00,000"})},a))})},c={parameters:{docs:{description:{story:"No disabled or loading state. Shown: colour tokens, alignment, long text wrapped and truncated with numberOfLines, and rupee amounts with Indian grouping. Text follows the OS font size uncapped (a cap was tried and reverted, see the file comment), so check long text at large font sizes."}}},render:()=>e.jsxs(o,{style:{gap:s[16],width:320},children:[e.jsx(n,{label:"colours",children:e.jsxs(o,{style:{gap:s[4]},children:[e.jsx(r,{color:t.text.primary,children:"text.primary"}),e.jsx(r,{color:t.text.secondary,children:"text.secondary"}),e.jsx(r,{color:t.text.tertiary,children:"text.tertiary"}),e.jsx(r,{color:t.text.link,children:"text.link"}),e.jsx(r,{color:t.feedback.error.text,children:"feedback.error.text"}),e.jsx(r,{color:t.feedback.success.text,children:"feedback.success.text"})]})}),e.jsx(n,{label:"align center / right",children:e.jsxs(o,{style:{width:320,gap:s[4]},children:[e.jsx(r,{align:"center",children:"Centred"}),e.jsx(r,{align:"right",children:"Right aligned"})]})}),e.jsx(n,{label:"long text, wrapped",children:e.jsx(r,{variant:"body14Regular",children:"Get up to X% cashback on Amazon, Flipkart and Myntra with the SBI Cashback card. Offer valid on select categories, terms apply."})}),e.jsx(n,{label:"long text, numberOfLines 1",children:e.jsx(r,{variant:"body14Regular",numberOfLines:1,children:"Get up to X% cashback on Amazon, Flipkart and Myntra with the SBI Cashback card."})}),e.jsx(n,{label:"rupee amounts",children:e.jsx(r,{variant:"heading24Bold",children:"₹1,00,000 · ₹12,34,567 · ₹775.60"})}),e.jsx(n,{label:"empty string",children:e.jsx(o,{style:{borderWidth:h.thin,borderColor:t.border.default,minWidth:80,minHeight:20},children:e.jsx(r,{children:""})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <View style={{
    width: 340
  }}><Story /></View>]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Every variant in the typography scale, large to small. Names read family, size and weight: display, heading, body, caption.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[12],
    width: 520
  }}>
      {VARIANTS.map(v => <Cell key={v} label={\`\${v} · \${typography[v].fontSize}/\${typography[v].lineHeight}\`}>
          <Text variant={v}>Amazon ₹1,00,000</Text>
        </Cell>)}
    </View>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Shown: colour tokens, alignment, long text wrapped and truncated with numberOfLines, and rupee amounts with Indian grouping. Text follows the OS font size uncapped (a cap was tried and reverted, see the file comment), so check long text at large font sizes.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 320
  }}>
      <Cell label="colours">
        <View style={{
        gap: spacing[4]
      }}>
          <Text color={colors.text.primary}>text.primary</Text>
          <Text color={colors.text.secondary}>text.secondary</Text>
          <Text color={colors.text.tertiary}>text.tertiary</Text>
          <Text color={colors.text.link}>text.link</Text>
          <Text color={colors.feedback.error.text}>feedback.error.text</Text>
          <Text color={colors.feedback.success.text}>feedback.success.text</Text>
        </View>
      </Cell>
      <Cell label="align center / right">
        <View style={{
        width: 320,
        gap: spacing[4]
      }}>
          <Text align="center">Centred</Text>
          <Text align="right">Right aligned</Text>
        </View>
      </Cell>
      <Cell label="long text, wrapped"><Text variant="body14Regular">Get up to X% cashback on Amazon, Flipkart and Myntra with the SBI Cashback card. Offer valid on select categories, terms apply.</Text></Cell>
      <Cell label="long text, numberOfLines 1"><Text variant="body14Regular" numberOfLines={1}>Get up to X% cashback on Amazon, Flipkart and Myntra with the SBI Cashback card.</Text></Cell>
      <Cell label="rupee amounts"><Text variant="heading24Bold">₹1,00,000 · ₹12,34,567 · ₹775.60</Text></Cell>
      <Cell label="empty string"><View style={{
        borderWidth: borderWidth.thin,
        borderColor: colors.border.default,
        minWidth: 80,
        minHeight: 20
      }}><Text>{''}</Text></View></Cell>
    </View>
}`,...c.parameters?.docs?.source}}};const f=["Playground","Variants","States"];export{l as Playground,c as States,i as Variants,f as __namedExportsOrder,b as default};
