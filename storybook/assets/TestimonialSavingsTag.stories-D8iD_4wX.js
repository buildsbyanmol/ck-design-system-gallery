import{j as e,V as o,c}from"./iframe-EJmZd_T6.js";import{T as m}from"./Text-CwaPBD6t.js";import{s as n}from"./motion-CMqo2j38.js";import{T as a}from"./TestimonialSavingsTag-BjfBNkDY.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mm0dto.js";import"./GradientText-AAKTHPSy.js";import"./MaskedView.web-BBIMN0VS.js";import"./gradients-Yoe7k8Uk.js";const T={title:"Components/Badge and Tag/TestimonialSavingsTag",component:a,tags:["autodocs","live"],parameters:{source:"src/atoms/TestimonialSavingsTag.tsx",docs:{description:{component:'Unused today. A spaced-capitals line between two short gradient rules ("SAVED ₹30,000 ANNUALLY"), for a testimonial.',story:"Web rendering: the label uses GradientText (masked view), which may render blank or solid on react-native-web. The two side lines render."}}},argTypes:{label:{control:"text"}},args:{label:"Saved ₹30,000 annually"}},l=({label:i,children:d})=>e.jsxs(o,{style:{gap:n[4],alignItems:"flex-start"},children:[e.jsx(m,{variant:"caption10Medium",color:c.text.tertiary,children:i}),d]}),r={},s={parameters:{docs:{description:{story:"One style. Variants shows 3 label lengths. The right line is the left line mirrored (inferred in code, only the left was read from Figma)."}}},render:()=>e.jsxs(o,{style:{gap:n[16]},children:[e.jsx(l,{label:"short",children:e.jsx(a,{label:"Saved ₹5,000"})}),e.jsx(l,{label:"typical",children:e.jsx(a,{label:"Saved ₹30,000 annually"})}),e.jsx(l,{label:"large amount",children:e.jsx(a,{label:"Saved ₹1,00,000 annually"})})]})},t={parameters:{docs:{description:{story:"No disabled or loading state. Long text does not wrap or truncate; the row grows. Needs a device check for the gradient label."}}},render:()=>e.jsx(o,{style:{width:360},children:e.jsx(a,{label:"Saved ₹12,34,567 on HDFC Millennia and SBI Cashback"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One style. Variants shows 3 label lengths. The right line is the left line mirrored (inferred in code, only the left was read from Figma).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16]
  }}>
      <Cell label="short"><TestimonialSavingsTag label="Saved ₹5,000" /></Cell>
      <Cell label="typical"><TestimonialSavingsTag label="Saved ₹30,000 annually" /></Cell>
      <Cell label="large amount"><TestimonialSavingsTag label="Saved ₹1,00,000 annually" /></Cell>
    </View>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Long text does not wrap or truncate; the row grows. Needs a device check for the gradient label.'
      }
    }
  },
  render: () => <View style={{
    width: 360
  }}>
      <TestimonialSavingsTag label="Saved ₹12,34,567 on HDFC Millennia and SBI Cashback" />
    </View>
}`,...t.parameters?.docs?.source}}};const v=["Playground","Variants","States"];export{r as Playground,t as States,s as Variants,v as __namedExportsOrder,T as default};
