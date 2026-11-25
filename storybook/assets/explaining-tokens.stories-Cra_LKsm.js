import{c as r,p as m,j as e,V as t}from"./iframe-DK2xttIN.js";import{T as l}from"./Text-Czhgaopg.js";import{B as j}from"./Button-CAf0Zm_X.js";import{d as T,b as k,e as C,f as S,i as O,l as V,m as R,c as W,r as d,a as P,s as i,t as z}from"./motion-q_NUJArm.js";import{g as _}from"./gradients-Yoe7k8Uk.js";import{e as B}from"./elevation-DG0ULmpQ.js";import{a as F,o as A}from"./opacity-rEjPgtwf.js";import{P as g,G as D,L as w,C as y,W as L,F as h,T as u}from"./_shared-CYDU9U12.js";const b=Object.freeze(Object.defineProperty({__proto__:null,alpha:F,avatarSize:T,borderWidth:k,colors:r,elevation:B,fontFamily:C,fontSize:S,gradients:_,iconSize:O,letterSpacing:V,mediaSize:R,motion:W,opacity:A,primitives:m,radius:d,sizing:P,spacing:i,typography:z},Symbol.toStringTag,{value:"Module"})),E={title:"Foundations/Explaining tokens",tags:["live"],parameters:{layout:"padded",source:"src/tokens/index.ts",docs:{description:{component:"What a token is, the primitive to semantic to component chain, and what the barrel exports."}}}},f=()=>e.jsx(l,{variant:"heading24Medium",color:r.text.tertiary,children:"→"});function p({kind:c,name:o,value:x,children:v}){return e.jsxs(h,{width:240,children:[e.jsx(u,{children:c}),v,e.jsx(w,{children:o}),x?e.jsx(y,{children:x}):null]})}const s={parameters:{source:"src/tokens/colors.ts:19",docs:{description:{story:"One value, three layers. The primitive holds the raw colour. The semantic token gives it a role. The component uses only the role. Values below are read from the token objects."}}},render:()=>e.jsxs(g,{children:[e.jsxs(t,{style:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",gap:i[16]},children:[e.jsx(p,{kind:"Primitive",name:"primitives.saffron[500]",value:m.saffron[500],children:e.jsx(t,{style:{height:48,borderRadius:d.md,backgroundColor:m.saffron[500]}})}),e.jsx(f,{}),e.jsx(p,{kind:"Semantic",name:"colors.action.primary.default",value:r.action.primary.default,children:e.jsx(t,{style:{height:48,borderRadius:d.md,backgroundColor:r.action.primary.default}})}),e.jsx(f,{}),e.jsx(p,{kind:"Component",name:"Button solid, tone main",children:e.jsx(j,{label:"Apply now",variant:"solid",tone:"main",size:44})})]}),e.jsx(y,{children:"Change the semantic mapping and every component that uses it follows. Changing a primitive moves every role that points at it."})]})},a={parameters:{source:"src/tokens/colors.ts",docs:{description:{story:"Saffron marks the action. Cobalt marks the accent. They are not interchangeable (D17)."}}},render:()=>e.jsx(g,{children:e.jsxs(L,{children:[e.jsxs(h,{width:280,children:[e.jsx(u,{children:"Saffron · action"}),e.jsx(l,{variant:"body14Regular",color:r.text.secondary,children:"The one solid button on a screen. Cashback amounts."}),e.jsx(j,{label:"Apply now",variant:"solid",tone:"main",size:44})]}),e.jsxs(h,{width:280,children:[e.jsx(u,{children:"Cobalt · accent"}),e.jsx(l,{variant:"body14Regular",color:r.text.secondary,children:"Links, outline buttons, selected chips, focus."}),e.jsx(t,{style:{borderWidth:k.thin,borderColor:r.border.focussed,borderRadius:d.md,padding:i[8]},children:e.jsx(l,{variant:"body14Medium",color:r.text.link,children:"See how it works"})})]})]})})},n={parameters:{source:"src/tokens/index.ts",docs:{description:{story:'Everything `src/tokens/index.ts` exports, read at runtime. Import from the barrel: `import { colors, spacing } from "../tokens"`.'}}},render:()=>e.jsx(g,{children:e.jsx(D,{title:`${Object.keys(b).length} exports`,children:e.jsx(t,{style:{gap:i[8]},children:Object.entries(b).map(([c,o])=>e.jsxs(t,{style:{flexDirection:"row",gap:i[16],flexWrap:"wrap"},children:[e.jsx(t,{style:{width:160},children:e.jsx(w,{children:c})}),e.jsxs(y,{children:[Object.keys(o).length," keys: ",Object.keys(o).slice(0,8).join(", "),Object.keys(o).length>8?", …":""]})]},c))})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/colors.ts:19',
    docs: {
      description: {
        story: 'One value, three layers. The primitive holds the raw colour. The semantic token gives it a role. The component uses only the role. Values below are read from the token objects.'
      }
    }
  },
  render: () => <Page>
      <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: spacing[16]
    }}>
        <Step kind="Primitive" name="primitives.saffron[500]" value={primitives.saffron[500]}>
          <View style={{
          height: 48,
          borderRadius: radius.md,
          backgroundColor: primitives.saffron[500]
        }} />
        </Step>
        <Arrow />
        <Step kind="Semantic" name="colors.action.primary.default" value={colors.action.primary.default}>
          <View style={{
          height: 48,
          borderRadius: radius.md,
          backgroundColor: colors.action.primary.default
        }} />
        </Step>
        <Arrow />
        <Step kind="Component" name="Button solid, tone main">
          <Button label="Apply now" variant="solid" tone="main" size={44} />
        </Step>
      </View>
      <Caption>Change the semantic mapping and every component that uses it follows. Changing a primitive moves every role that points at it.</Caption>
    </Page>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/colors.ts',
    docs: {
      description: {
        story: 'Saffron marks the action. Cobalt marks the accent. They are not interchangeable (D17).'
      }
    }
  },
  render: () => <Page>
      <Wrap>
        <Frame width={280}>
          <Tag>Saffron · action</Tag>
          <Text variant="body14Regular" color={colors.text.secondary}>The one solid button on a screen. Cashback amounts.</Text>
          <Button label="Apply now" variant="solid" tone="main" size={44} />
        </Frame>
        <Frame width={280}>
          <Tag>Cobalt · accent</Tag>
          <Text variant="body14Regular" color={colors.text.secondary}>Links, outline buttons, selected chips, focus.</Text>
          <View style={{
          borderWidth: borderWidth.thin,
          borderColor: colors.border.focussed,
          borderRadius: radius.md,
          padding: spacing[8]
        }}>
            <Text variant="body14Medium" color={colors.text.link}>See how it works</Text>
          </View>
        </Frame>
      </Wrap>
    </Page>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/index.ts',
    docs: {
      description: {
        story: 'Everything \`src/tokens/index.ts\` exports, read at runtime. Import from the barrel: \`import { colors, spacing } from "../tokens"\`.'
      }
    }
  },
  render: () => <Page>
      <Group title={\`\${Object.keys(tokens).length} exports\`}>
        <View style={{
        gap: spacing[8]
      }}>
          {Object.entries(tokens).map(([k, v]) => <View key={k} style={{
          flexDirection: 'row',
          gap: spacing[16],
          flexWrap: 'wrap'
        }}>
              <View style={{
            width: 160
          }}><Label>{k}</Label></View>
              <Caption>{Object.keys(v as object).length} keys: {Object.keys(v as object).slice(0, 8).join(', ')}{Object.keys(v as object).length > 8 ? ', …' : ''}</Caption>
            </View>)}
        </View>
      </Group>
    </Page>
}`,...n.parameters?.docs?.source}}};const M=["Chain","Rules","Barrel"],Q=Object.freeze(Object.defineProperty({__proto__:null,Barrel:n,Chain:s,Rules:a,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{n as B,s as C,a as R,Q as T};
