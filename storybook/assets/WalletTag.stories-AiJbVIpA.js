import{j as a,V as n,c as d}from"./iframe-EJmZd_T6.js";import{T as c}from"./Text-CwaPBD6t.js";import{s as i}from"./motion-CMqo2j38.js";import{W as e}from"./WalletTag-C6qBWWsm.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";const W={title:"Components/Badge and Tag/WalletTag",component:e,tags:["autodocs","live"],parameters:{source:"src/atoms/WalletTag.tsx",docs:{description:{component:'Unused today. A small tag with a wallet icon and an already formatted amount ("₹1,200"). Pass the amount through formatINR.'}}},argTypes:{amount:{control:"text"}},args:{amount:"₹1,200"}},t=({label:l,children:m})=>a.jsxs(n,{style:{gap:i[4],alignItems:"flex-start"},children:[a.jsx(c,{variant:"caption10Medium",color:d.text.tertiary,children:l}),m]}),p=({children:l})=>a.jsx(n,{style:{flexDirection:"row",flexWrap:"wrap",gap:i[16],maxWidth:520,alignItems:"flex-start"},children:l}),s={},r={parameters:{docs:{description:{story:"WalletTag has one visual style, so Variants shows the amount range."}}},render:()=>a.jsxs(p,{children:[a.jsx(t,{label:"small",children:a.jsx(e,{amount:"₹50"})}),a.jsx(t,{label:"typical",children:a.jsx(e,{amount:"₹1,200"})}),a.jsx(t,{label:"paise",children:a.jsx(e,{amount:"₹775.60"})})]})},o={parameters:{docs:{description:{story:"No disabled or loading state. Not applied from Figma: inner padding of 1 (not on the spacing scale); the amount gradient is flat here."}}},render:()=>a.jsxs(n,{style:{gap:i[16],width:200},children:[a.jsx(t,{label:"large amount (Indian grouping)",children:a.jsx(e,{amount:"₹1,00,000"})}),a.jsx(t,{label:"very large",children:a.jsx(e,{amount:"₹12,34,56,789"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'WalletTag has one visual style, so Variants shows the amount range.'
      }
    }
  },
  render: () => <Wrap>
      <Cell label="small"><WalletTag amount="₹50" /></Cell>
      <Cell label="typical"><WalletTag amount="₹1,200" /></Cell>
      <Cell label="paise"><WalletTag amount="₹775.60" /></Cell>
    </Wrap>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Not applied from Figma: inner padding of 1 (not on the spacing scale); the amount gradient is flat here.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 200
  }}>
      <Cell label="large amount (Indian grouping)"><WalletTag amount="₹1,00,000" /></Cell>
      <Cell label="very large"><WalletTag amount="₹12,34,56,789" /></Cell>
    </View>
}`,...o.parameters?.docs?.source}}};const T=["Playground","Variants","States"];export{s as Playground,o as States,r as Variants,T as __namedExportsOrder,W as default};
