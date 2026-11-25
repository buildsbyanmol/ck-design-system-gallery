import{j as e,V as t,c as u}from"./iframe-DK2xttIN.js";import{B as l}from"./Button-CAf0Zm_X.js";import{T as h}from"./Text-Czhgaopg.js";import{s as n,r as m}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";const k={title:"Components/Buttons/Button",component:l,tags:["autodocs","live"],parameters:{source:"src/atoms/Button.tsx",docs:{description:{component:'The one tappable action: 6 variants, 3 tones, 3 sizes. Solid is Saffron only (D17); Cobalt solid is tone="accent" for the partner Shop & Earn CTA.'}}},argTypes:{label:{control:"text"},variant:{control:"select",options:["solid","outline","subtle","destructive","ghost","link"]},tone:{control:"select",options:["main","second","accent"]},size:{control:"select",options:[36,44,52]},icon:{control:"select",options:["none","leading","trailing","only"]},iconName:{control:"select",options:["chevron-right","cart-outline","search-outline","wallet-outline","copy-outline"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},haptic:{control:"select",options:[void 0,"none","light","medium","success"]}},args:{label:"Apply now",variant:"solid",tone:"main",size:44,icon:"none",iconName:"chevron-right",disabled:!1,loading:!1,fullWidth:!1}},a=({label:o,children:b})=>e.jsxs(t,{style:{gap:n[4],alignItems:"flex-start"},children:[e.jsx(h,{variant:"caption10Medium",color:u.text.tertiary,children:o}),b]}),p=({children:o})=>e.jsx(t,{style:{flexDirection:"row",flexWrap:"wrap",gap:n[16],maxWidth:520},children:o}),i={},s={parameters:{docs:{description:{story:"Every variant at size 44. Solid main and second are both Saffron (D17). Ghost has a white label and only reads on a dark surface."}}},render:()=>e.jsxs(t,{style:{gap:n[24]},children:[e.jsxs(p,{children:[e.jsx(a,{label:"solid / main",children:e.jsx(l,{label:"Apply now",variant:"solid",tone:"main"})}),e.jsx(a,{label:"solid / second (same Saffron)",children:e.jsx(l,{label:"Apply now",variant:"solid",tone:"second"})}),e.jsx(a,{label:"solid / accent (Cobalt)",children:e.jsx(l,{label:"Shop & Earn upto X%",variant:"solid",tone:"accent"})}),e.jsx(a,{label:"outline / main",children:e.jsx(l,{label:"Compare",variant:"outline",tone:"main"})}),e.jsx(a,{label:"outline / second",children:e.jsx(l,{label:"View details",variant:"outline",tone:"second"})}),e.jsx(a,{label:"subtle",children:e.jsx(l,{label:"Share",variant:"subtle"})}),e.jsx(a,{label:"destructive",children:e.jsx(l,{label:"Log out",variant:"destructive"})}),e.jsx(a,{label:"link",children:e.jsx(l,{label:"Read terms",variant:"link"})})]}),e.jsx(a,{label:"ghost (on dark surface)",children:e.jsx(t,{style:{backgroundColor:u.surface.inverse,padding:n[16],borderRadius:m.lg},children:e.jsx(l,{label:"Skip for now",variant:"ghost"})})})]})},r={render:()=>e.jsx(p,{children:[36,44,52].map(o=>e.jsx(a,{label:`size ${o}`,children:e.jsx(l,{label:"Check eligibility",size:o})},o))})},c={render:()=>e.jsxs(p,{children:[e.jsx(a,{label:"leading",children:e.jsx(l,{label:"Search cards",icon:"leading",iconName:"search-outline"})}),e.jsx(a,{label:"trailing",children:e.jsx(l,{label:"Continue",icon:"trailing",iconName:"chevron-right"})}),e.jsx(a,{label:"only (label = a11y name)",children:e.jsx(l,{label:"Open cart",icon:"only",iconName:"cart-outline"})}),e.jsx(a,{label:"outline + leading",children:e.jsx(l,{label:"Copy code",variant:"outline",tone:"second",icon:"leading",iconName:"copy-outline"})})]})},d={parameters:{docs:{description:{story:"Disabled drops opacity to 0.4. Loading swaps the label for a spinner and blocks taps. Pressed has no static prop (Pressable state); hover or click a button to see it. Full width keeps a 16 px inset. Long text stays on one line (numberOfLines 1), so a long label clips: open question for product, shorten the copy or allow two lines."}}},render:()=>e.jsxs(t,{style:{gap:n[16],width:340},children:[e.jsx(a,{label:"disabled",children:e.jsx(l,{label:"Apply now",disabled:!0})}),e.jsx(a,{label:"disabled outline",children:e.jsx(l,{label:"Compare",variant:"outline",tone:"second",disabled:!0})}),e.jsx(a,{label:"loading",children:e.jsx(l,{label:"Apply now",loading:!0})}),e.jsx(a,{label:"loading destructive",children:e.jsx(l,{label:"Log out",variant:"destructive",loading:!0})}),e.jsx(a,{label:"fullWidth",children:e.jsx(t,{style:{alignSelf:"stretch",width:340},children:e.jsx(l,{label:"Withdraw ₹1,00,000",fullWidth:!0,size:52})})}),e.jsx(a,{label:"long text in 200 px",children:e.jsx(t,{style:{width:200},children:e.jsx(l,{label:"Apply for HDFC Millennia credit card",fullWidth:!0})})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Every variant at size 44. Solid main and second are both Saffron (D17). Ghost has a white label and only reads on a dark surface.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[24]
  }}>
      <Wrap>
        <Cell label="solid / main"><Button label="Apply now" variant="solid" tone="main" /></Cell>
        <Cell label="solid / second (same Saffron)"><Button label="Apply now" variant="solid" tone="second" /></Cell>
        <Cell label="solid / accent (Cobalt)"><Button label="Shop & Earn upto X%" variant="solid" tone="accent" /></Cell>
        <Cell label="outline / main"><Button label="Compare" variant="outline" tone="main" /></Cell>
        <Cell label="outline / second"><Button label="View details" variant="outline" tone="second" /></Cell>
        <Cell label="subtle"><Button label="Share" variant="subtle" /></Cell>
        <Cell label="destructive"><Button label="Log out" variant="destructive" /></Cell>
        <Cell label="link"><Button label="Read terms" variant="link" /></Cell>
      </Wrap>
      <Cell label="ghost (on dark surface)">
        <View style={{
        backgroundColor: colors.surface.inverse,
        padding: spacing[16],
        borderRadius: radius.lg
      }}>
          <Button label="Skip for now" variant="ghost" />
        </View>
      </Cell>
    </View>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      {([36, 44, 52] as const).map(s => <Cell key={s} label={\`size \${s}\`}><Button label="Check eligibility" size={s} /></Cell>)}
    </Wrap>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Wrap>
      <Cell label="leading"><Button label="Search cards" icon="leading" iconName="search-outline" /></Cell>
      <Cell label="trailing"><Button label="Continue" icon="trailing" iconName="chevron-right" /></Cell>
      <Cell label="only (label = a11y name)"><Button label="Open cart" icon="only" iconName="cart-outline" /></Cell>
      <Cell label="outline + leading"><Button label="Copy code" variant="outline" tone="second" icon="leading" iconName="copy-outline" /></Cell>
    </Wrap>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled drops opacity to 0.4. Loading swaps the label for a spinner and blocks taps. Pressed has no static prop (Pressable state); hover or click a button to see it. Full width keeps a 16 px inset. Long text stays on one line (numberOfLines 1), so a long label clips: open question for product, shorten the copy or allow two lines.'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16],
    width: 340
  }}>
      <Cell label="disabled"><Button label="Apply now" disabled /></Cell>
      <Cell label="disabled outline"><Button label="Compare" variant="outline" tone="second" disabled /></Cell>
      <Cell label="loading"><Button label="Apply now" loading /></Cell>
      <Cell label="loading destructive"><Button label="Log out" variant="destructive" loading /></Cell>
      <Cell label="fullWidth"><View style={{
        alignSelf: 'stretch',
        width: 340
      }}><Button label="Withdraw ₹1,00,000" fullWidth size={52} /></View></Cell>
      <Cell label="long text in 200 px"><View style={{
        width: 200
      }}><Button label="Apply for HDFC Millennia credit card" fullWidth /></View></Cell>
    </View>
}`,...d.parameters?.docs?.source}}};const W=["Playground","Variants","Sizes","WithIcons","States"];export{i as Playground,r as Sizes,d as States,s as Variants,c as WithIcons,W as __namedExportsOrder,k as default};
