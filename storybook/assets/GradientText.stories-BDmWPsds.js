import{j as e,V as d,c as p}from"./iframe-DK2xttIN.js";import{G as s}from"./GradientText-B3Jj38N9.js";import{T as m}from"./Text-Czhgaopg.js";import{s as l}from"./motion-q_NUJArm.js";import{g as a}from"./gradients-Yoe7k8Uk.js";import"./preload-helper-Zf8nSx-t.js";import"./MaskedView.web-Dt2qNyJt.js";import"./LinearGradient-CErKe_YJ.js";const g=["primary","premium","reward","urgent","success"],S={title:"Components/Text and numbers/GradientText",component:s,tags:["autodocs","live"],parameters:{source:"src/atoms/GradientText.tsx",docs:{description:{component:"One run of text filled with a named gradient (masked view plus a linear gradient). Pass a gradient from `gradients`, never raw hex.",story:"WEB RENDERING PROBLEM: it uses @react-native-masked-view/masked-view, which on react-native-web may render blank, or solid text without the gradient. Treat the story as a screenshot-only check on a device. The component is not changed here."}}},argTypes:{children:{control:"text"},variant:{control:"select",options:["display40ExtraBold","heading24Bold","heading20SemiBold","body16SemiBold","body14SemiBold","caption10SemiBold"]},italic:{control:"boolean"},colors:{control:!1},start:{control:!1},end:{control:!1}},args:{children:"Earn up to ₹1,00,000",variant:"heading24Bold",colors:a.reward.colors,italic:!1}},i=({label:r,children:c})=>e.jsxs(d,{style:{gap:l[4],alignItems:"flex-start"},children:[e.jsx(m,{variant:"caption10Medium",color:p.text.tertiary,children:r}),c]}),t={},o={parameters:{docs:{description:{story:"One row for each named gradient. See the web rendering note on the page header."}}},render:()=>e.jsx(d,{style:{gap:l[16]},children:g.map(r=>e.jsx(i,{label:`gradients.${r}`,children:e.jsx(s,{variant:"heading24Bold",colors:a[r].colors,start:a[r].start,end:a[r].end,children:"Earn up to ₹1,00,000"})},r))})},n={parameters:{docs:{description:{story:"No disabled or loading state. Italic is a synthesised oblique on iOS and upright on Android (only upright Outfit faces are loaded). A long string does not wrap well in the mask: open question for the build owner."}}},render:()=>e.jsxs(d,{style:{gap:l[16],width:320},children:[e.jsx(i,{label:"italic",children:e.jsx(s,{variant:"heading24Bold",colors:a.primary.colors,italic:!0,children:"HDFC Millennia"})}),e.jsx(i,{label:"long text",children:e.jsx(s,{variant:"body16SemiBold",colors:a.premium.colors,children:"Flipkart, Amazon and Myntra rewards on every order"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One row for each named gradient. See the web rendering note on the page header.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16]
  }}>
      {NAMES.map(n => <Cell key={n} label={\`gradients.\${n}\`}>
          <GradientText variant="heading24Bold" colors={gradients[n].colors} start={gradients[n].start} end={gradients[n].end}>Earn up to ₹1,00,000</GradientText>
        </Cell>)}
    </View>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Italic is a synthesised oblique on iOS and upright on Android (only upright Outfit faces are loaded). A long string does not wrap well in the mask: open question for the build owner.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 320
  }}>
      <Cell label="italic"><GradientText variant="heading24Bold" colors={gradients.primary.colors} italic>HDFC Millennia</GradientText></Cell>
      <Cell label="long text"><GradientText variant="body16SemiBold" colors={gradients.premium.colors}>Flipkart, Amazon and Myntra rewards on every order</GradientText></Cell>
    </View>
}`,...n.parameters?.docs?.source}}};const B=["Playground","Variants","States"];export{t as Playground,n as States,o as Variants,B as __namedExportsOrder,S as default};
