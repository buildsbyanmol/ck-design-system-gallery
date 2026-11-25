import{j as e,V as c,c as t}from"./iframe-DK2xttIN.js";import{T as g}from"./Text-Czhgaopg.js";import{s as d}from"./motion-q_NUJArm.js";import{T as o}from"./Tag-xKc7zVYR.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-CErKe_YJ.js";import"./xml-VjBCu6Ra.js";import"./Icon-Do0hMSFa.js";import"./gradients-Yoe7k8Uk.js";import"./tagVariants-BxEvvwJ1.js";import"./index-mJl4hEuB.js";const p=["brand","gray","success","warning","error","info","purple","sky","rose"],P={title:"Components/Badge and Tag/Tag",component:o,tags:["autodocs","live"],parameters:{source:"src/atoms/Tag.tsx",docs:{description:{component:"The general tone-coloured pill: 9 tones, 4 sizes, 3 appearances, 6 icon options. Pass status to get the Figma status tag (tone, dot and shape from one word)."}}},argTypes:{label:{control:"text"},size:{control:"select",options:["xxs","xs","sm","md"]},tone:{control:"select",options:[...p]},appearance:{control:"select",options:["default","subtle","gradient"]},pill:{control:"boolean"},icon:{control:"select",options:["none","dot","icon-left","icon-right","icon-only","x-close"]},iconName:{control:"select",options:["star-filled","feat-dining-outline","check-circle-filled","chevron-right"]},status:{control:"select",options:[void 0,"success","warning","error","info","neutral"]}},args:{label:"Dining",size:"sm",tone:"brand",appearance:"default",pill:!1,icon:"none",iconName:"feat-dining-outline"}},l=({label:a,children:b})=>e.jsxs(c,{style:{gap:d[4],alignItems:"flex-start"},children:[e.jsx(g,{variant:"caption10Medium",color:t.text.tertiary,children:a}),b]}),s=({children:a})=>e.jsx(c,{style:{flexDirection:"row",flexWrap:"wrap",gap:d[16],maxWidth:520,alignItems:"flex-start"},children:a}),n={},r={render:()=>e.jsxs(c,{style:{gap:d[24]},children:[e.jsx(l,{label:"tones (default appearance, size sm)",children:e.jsx(s,{children:p.map(a=>e.jsx(l,{label:a,children:e.jsx(o,{label:"Shopping",tone:a})},a))})}),e.jsx(l,{label:"appearance",children:e.jsxs(s,{children:[e.jsx(l,{label:"default",children:e.jsx(o,{label:"Travel",tone:"info"})}),e.jsx(l,{label:"subtle",children:e.jsx(o,{label:"Travel",tone:"info",appearance:"subtle"})}),e.jsx(l,{label:"gradient (pair with info)",children:e.jsx(o,{label:"Travel",tone:"info",appearance:"gradient"})})]})}),e.jsx(l,{label:"sizes",children:e.jsx(s,{children:["xxs","xs","sm","md"].map(a=>e.jsx(l,{label:a,children:e.jsx(o,{label:"Fuel",size:a,tone:"success"})},a))})}),e.jsx(l,{label:"shape",children:e.jsxs(s,{children:[e.jsx(l,{label:"square (radius xs)",children:e.jsx(o,{label:"Fuel",tone:"success"})}),e.jsx(l,{label:"pill",children:e.jsx(o,{label:"Fuel",tone:"success",pill:!0})})]})}),e.jsx(l,{label:"icon options",children:e.jsxs(s,{children:[e.jsx(l,{label:"none",children:e.jsx(o,{label:"Dining"})}),e.jsx(l,{label:"dot",children:e.jsx(o,{label:"Dining",icon:"dot"})}),e.jsx(l,{label:"icon-left",children:e.jsx(o,{label:"Dining",icon:"icon-left",iconName:"feat-dining-outline",iconPx:12})}),e.jsx(l,{label:"icon-right",children:e.jsx(o,{label:"Dining",icon:"icon-right",iconName:"chevron-right",iconPx:12})}),e.jsx(l,{label:"icon-only",children:e.jsx(o,{icon:"icon-only",iconName:"star-filled",iconPx:12})}),e.jsx(l,{label:"x-close",children:e.jsx(o,{label:"Myntra",icon:"x-close",onClose:()=>{}})})]})}),e.jsx(l,{label:"status prop (forces xxs, dot, not pill)",children:e.jsx(s,{children:["success","warning","error","info","neutral"].map(a=>e.jsx(l,{label:a,children:e.jsx(o,{label:a==="success"?"Active":a==="warning"?"Pending":a==="error"?"Failed":a==="info"?"Processing":"Expired",status:a})},a))})})]})},i={parameters:{docs:{description:{story:'Tag has no disabled, loading or error prop (use tone="error" for an error look). Pressable when onPress is set; hover or click to see it. Height is a minHeight, so large OS fonts and long text grow the tag instead of clipping.'}}},render:()=>e.jsxs(c,{style:{gap:d[16],width:300},children:[e.jsx(l,{label:"pressable",children:e.jsx(o,{label:"Flipkart",tone:"info",onPress:()=>{}})}),e.jsx(l,{label:"long text",children:e.jsx(o,{label:"Lifetime free HDFC Millennia credit card on Amazon",size:"md",tone:"success"})}),e.jsx(l,{label:"rupee amount",children:e.jsx(o,{label:"Annual fee ₹1,00,000",tone:"warning",size:"md"})}),e.jsx(l,{label:"override colours (bgColor, labelColor, borderColor)",children:e.jsx(o,{label:"Custom",bgColor:t.background.lavender,labelColor:t.text.link,borderColor:t.action.secondary.border})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Cell label="tones (default appearance, size sm)">
        <Wrap>{TONES.map(t => <Cell key={t} label={t}><Tag label="Shopping" tone={t} /></Cell>)}</Wrap>
      </Cell>
      <Cell label="appearance">
        <Wrap>
          <Cell label="default"><Tag label="Travel" tone="info" /></Cell>
          <Cell label="subtle"><Tag label="Travel" tone="info" appearance="subtle" /></Cell>
          <Cell label="gradient (pair with info)"><Tag label="Travel" tone="info" appearance="gradient" /></Cell>
        </Wrap>
      </Cell>
      <Cell label="sizes">
        <Wrap>{(['xxs', 'xs', 'sm', 'md'] as const).map(s => <Cell key={s} label={s}><Tag label="Fuel" size={s} tone="success" /></Cell>)}</Wrap>
      </Cell>
      <Cell label="shape">
        <Wrap>
          <Cell label="square (radius xs)"><Tag label="Fuel" tone="success" /></Cell>
          <Cell label="pill"><Tag label="Fuel" tone="success" pill /></Cell>
        </Wrap>
      </Cell>
      <Cell label="icon options">
        <Wrap>
          <Cell label="none"><Tag label="Dining" /></Cell>
          <Cell label="dot"><Tag label="Dining" icon="dot" /></Cell>
          <Cell label="icon-left"><Tag label="Dining" icon="icon-left" iconName="feat-dining-outline" iconPx={12} /></Cell>
          <Cell label="icon-right"><Tag label="Dining" icon="icon-right" iconName="chevron-right" iconPx={12} /></Cell>
          <Cell label="icon-only"><Tag icon="icon-only" iconName="star-filled" iconPx={12} /></Cell>
          <Cell label="x-close"><Tag label="Myntra" icon="x-close" onClose={() => {}} /></Cell>
        </Wrap>
      </Cell>
      <Cell label="status prop (forces xxs, dot, not pill)">
        <Wrap>{(['success', 'warning', 'error', 'info', 'neutral'] as const).map(s => <Cell key={s} label={s}><Tag label={s === 'success' ? 'Active' : s === 'warning' ? 'Pending' : s === 'error' ? 'Failed' : s === 'info' ? 'Processing' : 'Expired'} status={s} /></Cell>)}</Wrap>
      </Cell>
    </View>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tag has no disabled, loading or error prop (use tone="error" for an error look). Pressable when onPress is set; hover or click to see it. Height is a minHeight, so large OS fonts and long text grow the tag instead of clipping.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 300
  }}>
      <Cell label="pressable"><Tag label="Flipkart" tone="info" onPress={() => {}} /></Cell>
      <Cell label="long text"><Tag label="Lifetime free HDFC Millennia credit card on Amazon" size="md" tone="success" /></Cell>
      <Cell label="rupee amount"><Tag label="Annual fee ₹1,00,000" tone="warning" size="md" /></Cell>
      <Cell label="override colours (bgColor, labelColor, borderColor)"><Tag label="Custom" bgColor={colors.background.lavender} labelColor={colors.text.link} borderColor={colors.action.secondary.border} /></Cell>
    </View>
}`,...i.parameters?.docs?.source}}};const k=["Playground","Variants","States"];export{n as Playground,i as States,r as Variants,k as __namedExportsOrder,P as default};
