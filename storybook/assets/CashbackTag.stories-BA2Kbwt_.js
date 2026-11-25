import{j as e,V as i,c as g}from"./iframe-DK2xttIN.js";import{T as b}from"./Text-Czhgaopg.js";import{s as d}from"./motion-q_NUJArm.js";import{C as l}from"./CashbackTag-BLJmrLGx.js";import{i as m}from"./index-DCss3D-b.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-CErKe_YJ.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./tagVariants-BxEvvwJ1.js";import"./index-mJl4hEuB.js";const W={title:"Components/Badge and Tag/CashbackTag",component:l,tags:["autodocs","live"],parameters:{source:"src/atoms/CashbackTag.tsx",docs:{description:{component:'A squared, upper-case reward tag ("₹1,400 REWARDS") that can lead with up to two brand logos and end with an info glyph (md and lg). CashbackBadge is the pill version.'}}},argTypes:{label:{control:"text"},size:{control:"select",options:["sm","md","lg"]},logos:{control:!1},onInfoPress:{control:!1}},args:{label:"₹1,400 Rewards",size:"sm"}},s=({label:a,children:p})=>e.jsxs(i,{style:{gap:d[4],alignItems:"flex-start"},children:[e.jsx(b,{variant:"caption10Medium",color:g.text.tertiary,children:a}),p]}),o=({children:a})=>e.jsx(i,{style:{flexDirection:"row",flexWrap:"wrap",gap:d[16],maxWidth:520,alignItems:"flex-start"},children:a}),c=[m.brands.amazon,m.brands.myntra],r={},t={render:()=>e.jsxs(i,{style:{gap:d[24]},children:[e.jsx(s,{label:"without image",children:e.jsx(o,{children:["sm","md","lg"].map(a=>e.jsx(s,{label:a,children:e.jsx(l,{label:"₹1,400 Rewards",size:a})},a))})}),e.jsx(s,{label:"with one logo",children:e.jsx(o,{children:["sm","md","lg"].map(a=>e.jsx(s,{label:a,children:e.jsx(l,{label:"₹1,400 Rewards",size:a,logos:[m.brands.amazon]})},a))})}),e.jsx(s,{label:"with two logos",children:e.jsx(o,{children:["sm","md","lg"].map(a=>e.jsx(s,{label:a,children:e.jsx(l,{label:"₹1,400 Rewards",size:a,logos:c})},a))})}),e.jsx(s,{label:"with info glyph (md, lg only)",children:e.jsx(o,{children:["md","lg"].map(a=>e.jsx(s,{label:a,children:e.jsx(l,{label:"₹1,400 Rewards",size:a,logos:c,onInfoPress:()=>{}})},a))})})]})},n={parameters:{docs:{description:{story:"No disabled or loading state. Label is upper-cased by the component. Long text is cut to one line (numberOfLines 1) inside maxWidth 100 percent. A third logo is ignored (max two)."}}},render:()=>e.jsxs(i,{style:{gap:d[16],width:220},children:[e.jsx(s,{label:"large amount",children:e.jsx(l,{label:"₹1,00,000 Rewards",size:"md"})}),e.jsx(s,{label:"long text in 220 px",children:e.jsx(l,{label:"Flat ₹1,200 Rewards on Amazon and Flipkart",size:"md",logos:c,onInfoPress:()=>{}})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Cell label="without image"><Wrap>{(['sm', 'md', 'lg'] as const).map(s => <Cell key={s} label={s}><CashbackTag label="₹1,400 Rewards" size={s} /></Cell>)}</Wrap></Cell>
      <Cell label="with one logo"><Wrap>{(['sm', 'md', 'lg'] as const).map(s => <Cell key={s} label={s}><CashbackTag label="₹1,400 Rewards" size={s} logos={[images.brands.amazon]} /></Cell>)}</Wrap></Cell>
      <Cell label="with two logos"><Wrap>{(['sm', 'md', 'lg'] as const).map(s => <Cell key={s} label={s}><CashbackTag label="₹1,400 Rewards" size={s} logos={logos} /></Cell>)}</Wrap></Cell>
      <Cell label="with info glyph (md, lg only)"><Wrap>{(['md', 'lg'] as const).map(s => <Cell key={s} label={s}><CashbackTag label="₹1,400 Rewards" size={s} logos={logos} onInfoPress={() => {}} /></Cell>)}</Wrap></Cell>
    </View>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled or loading state. Label is upper-cased by the component. Long text is cut to one line (numberOfLines 1) inside maxWidth 100 percent. A third logo is ignored (max two).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 220
  }}>
      <Cell label="large amount"><CashbackTag label="₹1,00,000 Rewards" size="md" /></Cell>
      <Cell label="long text in 220 px"><CashbackTag label="Flat ₹1,200 Rewards on Amazon and Flipkart" size="md" logos={logos} onInfoPress={() => {}} /></Cell>
    </View>
}`,...n.parameters?.docs?.source}}};const T=["Playground","Variants","States"];export{r as Playground,n as States,t as Variants,T as __namedExportsOrder,W as default};
