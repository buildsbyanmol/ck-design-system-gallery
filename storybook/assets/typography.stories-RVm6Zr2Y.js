import{j as e,c as f,V as c}from"./iframe-EJmZd_T6.js";import{T as a}from"./Text-CwaPBD6t.js";import{s as l,f as m,e as p,l as j,t as S,b}from"./motion-CMqo2j38.js";import{P as h,F as x,G as g,W as y,C as d,L as u}from"./_shared-DjQe7OVj.js";const T={title:"Foundations/Typography",tags:["live"],parameters:{layout:"padded",source:"src/tokens/typography.ts",docs:{description:{component:"The type scale, rendered with the real Text atom."}}}},k=t=>Object.entries(p).find(([,s])=>s===t)?.[0]??t,F=Object.entries(S),v=["display","heading","body","caption"];function z({name:t,s}){return e.jsxs(c,{style:{flexDirection:"row",alignItems:"center",gap:l[16],paddingVertical:l[8],borderBottomWidth:b.thin,borderBottomColor:f.border.subtle3,flexWrap:"wrap"},children:[e.jsxs(c,{style:{width:200,gap:l[2]},children:[e.jsx(u,{children:t}),e.jsxs(d,{children:[s.fontSize," / ",s.lineHeight," · ",k(s.fontFamily)," · ls ",s.letterSpacing]})]}),e.jsx(c,{style:{flex:1,minWidth:240},children:e.jsx(a,{variant:t,children:"Cashback on every card"})})]})}const r={parameters:{source:"src/tokens/typography.ts:61",docs:{description:{story:"Every text style. Each line is the real Text atom with `variant` set to the token name. Under the name: size / line height, weight, letter spacing."}}},render:()=>e.jsx(h,{children:v.map(t=>e.jsx(g,{title:t,children:e.jsx(c,{children:F.filter(([s])=>s.startsWith(t)).map(([s,w])=>e.jsx(z,{name:s,s:w},s))})},t))})},n={parameters:{source:"src/tokens/typography.ts:21",docs:{description:{story:"Outfit, five weights. React Native loads each weight as its own font, so the app sets `fontFamily` and never `fontWeight`."}}},render:()=>e.jsx(h,{children:e.jsx(y,{children:Object.entries(p).map(([t,s])=>e.jsxs(x,{width:200,children:[e.jsx(a,{style:{fontFamily:s,fontSize:m[32],lineHeight:40},children:"Aa ₹1,234"}),e.jsx(u,{children:t}),e.jsx(d,{children:s})]},t))})})},o={parameters:{source:"src/tokens/typography.ts:30",docs:{description:{story:"Raw size and letter-spacing steps, for composing a custom style. Prefer a named style."}}},render:()=>e.jsxs(h,{children:[e.jsx(g,{title:"fontSize",children:e.jsx(y,{gap:l[16],children:Object.values(m).map(t=>e.jsxs(c,{style:{alignItems:"center",gap:l[2]},children:[e.jsx(a,{style:{fontFamily:p.semiBold,fontSize:t,lineHeight:t+8},children:"Ag"}),e.jsx(d,{children:t})]},t))})}),e.jsx(g,{title:"letterSpacing",children:e.jsx(y,{children:Object.entries(j).map(([t,s])=>e.jsxs(x,{width:160,children:[e.jsx(a,{style:{fontFamily:p.semiBold,fontSize:m[20],letterSpacing:s},children:"Cashback"}),e.jsxs(d,{children:[t,": ",s]})]},t))})})]})},i={parameters:{source:"src/atoms/Text.tsx",docs:{description:{story:"D7: the app follows the OS font size with no cap and no auto-shrink. Layouts grow: minHeight, two-line labels, rows that scroll. Read this block as the rule for any new component."}}},render:()=>e.jsx(h,{children:e.jsxs(x,{width:240,children:[e.jsx(a,{variant:"heading20SemiBold",children:"HDFC Bank Regalia Gold Credit Card"}),e.jsx(a,{variant:"body14Regular",color:f.text.secondary,children:"Long names wrap to the next line. The box grows with the text."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/typography.ts:61',
    docs: {
      description: {
        story: 'Every text style. Each line is the real Text atom with \`variant\` set to the token name. Under the name: size / line height, weight, letter spacing.'
      }
    }
  },
  render: () => <Page>
      {categories.map(c => <Group key={c} title={c}>
          <View>{styles.filter(([n]) => n.startsWith(c)).map(([n, s]) => <Row key={n} name={n} s={s} />)}</View>
        </Group>)}
    </Page>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/typography.ts:21',
    docs: {
      description: {
        story: 'Outfit, five weights. React Native loads each weight as its own font, so the app sets \`fontFamily\` and never \`fontWeight\`.'
      }
    }
  },
  render: () => <Page>
      <Wrap>
        {Object.entries(fontFamily).map(([w, ff]) => <Frame key={w} width={200}>
            <Text style={{
          fontFamily: ff,
          fontSize: fontSize[32],
          lineHeight: 40
        }}>Aa ₹1,234</Text>
            <Label>{w}</Label>
            <Caption>{ff}</Caption>
          </Frame>)}
      </Wrap>
    </Page>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/typography.ts:30',
    docs: {
      description: {
        story: 'Raw size and letter-spacing steps, for composing a custom style. Prefer a named style.'
      }
    }
  },
  render: () => <Page>
      <Group title="fontSize">
        <Wrap gap={spacing[16]}>{Object.values(fontSize).map(n => <View key={n} style={{
          alignItems: 'center',
          gap: spacing[2]
        }}><Text style={{
            fontFamily: fontFamily.semiBold,
            fontSize: n,
            lineHeight: n + 8
          }}>Ag</Text><Caption>{n}</Caption></View>)}</Wrap>
      </Group>
      <Group title="letterSpacing">
        <Wrap>{Object.entries(letterSpacing).map(([k, v]) => <Frame key={k} width={160}><Text style={{
            fontFamily: fontFamily.semiBold,
            fontSize: fontSize[20],
            letterSpacing: v
          }}>Cashback</Text><Caption>{k}: {v}</Caption></Frame>)}</Wrap>
      </Group>
    </Page>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/atoms/Text.tsx',
    docs: {
      description: {
        story: 'D7: the app follows the OS font size with no cap and no auto-shrink. Layouts grow: minHeight, two-line labels, rows that scroll. Read this block as the rule for any new component.'
      }
    }
  },
  render: () => <Page>
      <Frame width={240}>
        <Text variant="heading20SemiBold">HDFC Bank Regalia Gold Credit Card</Text>
        <Text variant="body14Regular" color={colors.text.secondary}>Long names wrap to the next line. The box grows with the text.</Text>
      </Frame>
    </Page>
}`,...i.parameters?.docs?.source}}};const W=["Scale","Weights","RawScales","LongText"],L=Object.freeze(Object.defineProperty({__proto__:null,LongText:i,RawScales:o,Scale:r,Weights:n,__namedExportsOrder:W,default:T},Symbol.toStringTag,{value:"Module"}));export{i as L,o as R,r as S,L as T,n as W};
