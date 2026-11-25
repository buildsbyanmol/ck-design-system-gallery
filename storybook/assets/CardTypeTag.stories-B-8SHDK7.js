import{j as e,V as l,c as g}from"./iframe-EJmZd_T6.js";import{T as x}from"./Text-CwaPBD6t.js";import{s as c}from"./motion-CMqo2j38.js";import{C as o}from"./CardTypeTag-q0BcU3Ga.js";import"./preload-helper-Zf8nSx-t.js";import"./tagVariants-C3ziFvwj.js";const d=["lifetimeFree","inviteOnly","discontinued"],p=["table","general","onCard"],k={title:"Components/Badge and Tag/CardTypeTag",component:o,tags:["autodocs","live"],parameters:{source:"src/atoms/CardTypeTag.tsx",docs:{description:{component:'An upper-case tag for a credit card type: Lifetime free, Invite only or Discontinued, in 3 placements (table, general, on a card). On a card the word "card" is added.'}}},argTypes:{kind:{control:"select",options:[...d]},placement:{control:"select",options:[...p]}},args:{kind:"lifetimeFree",placement:"general"}},i=({label:a,children:r})=>e.jsxs(l,{style:{gap:c[4],alignItems:"flex-start"},children:[e.jsx(x,{variant:"caption10Medium",color:g.text.tertiary,children:a}),r]}),m=({children:a})=>e.jsx(l,{style:{flexDirection:"row",flexWrap:"wrap",gap:c[16],maxWidth:520,alignItems:"flex-start"},children:a}),t={},n={parameters:{docs:{description:{story:"Rows are kinds, columns are placements. Not built: the folded corner under the on-card chip, and the Figma gradient fills (flat tone colours here)."}}},render:()=>e.jsx(l,{style:{gap:c[16]},children:d.map(a=>e.jsx(m,{children:p.map(r=>e.jsx(i,{label:`${a} / ${r}`,children:e.jsx(o,{kind:a,placement:r})},r))},a))})},s={parameters:{docs:{description:{story:"No disabled, loading or error state; the three kinds are the states. Label text is fixed by kind (no text prop), so there is no long-text case."}}},render:()=>e.jsxs(m,{children:[e.jsx(i,{label:"in a card row (HDFC Millennia)",children:e.jsx(o,{kind:"lifetimeFree",placement:"table"})}),e.jsx(i,{label:"in a card row (SBI Cashback)",children:e.jsx(o,{kind:"inviteOnly",placement:"general"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Rows are kinds, columns are placements. Not built: the folded corner under the on-card chip, and the Figma gradient fills (flat tone colours here).'
      }
    }
  },
  render: () => <View style={{
    gap: spacing[16]
  }}>
      {KINDS.map(k => <Wrap key={k}>
          {PLACEMENTS.map(p => <Cell key={p} label={\`\${k} / \${p}\`}><CardTypeTag kind={k} placement={p} /></Cell>)}
        </Wrap>)}
    </View>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No disabled, loading or error state; the three kinds are the states. Label text is fixed by kind (no text prop), so there is no long-text case.'
      }
    }
  },
  render: () => <Wrap>
      <Cell label="in a card row (HDFC Millennia)"><CardTypeTag kind="lifetimeFree" placement="table" /></Cell>
      <Cell label="in a card row (SBI Cashback)"><CardTypeTag kind="inviteOnly" placement="general" /></Cell>
    </Wrap>
}`,...s.parameters?.docs?.source}}};const T=["Playground","Variants","States"];export{t as Playground,s as States,n as Variants,T as __namedExportsOrder,k as default};
