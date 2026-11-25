import{p as B,c as v,j as t,V as d}from"./iframe-DK2xttIN.js";import{L as G}from"./LinearGradient-CErKe_YJ.js";import{T as f}from"./Text-Czhgaopg.js";import{B as l}from"./Button-CAf0Zm_X.js";import{s as T,b as W,r as b}from"./motion-q_NUJArm.js";import{g as O}from"./gradients-Yoe7k8Uk.js";import{g as A}from"./gradients-BraEhqgi.js";import{P as c,G as n,W as o,C as w,S as j,F as $}from"./_shared-CYDU9U12.js";function k(r,e=[]){return typeof r=="string"?[{path:e,value:r}]:r&&typeof r=="object"?Object.entries(r).flatMap(([s,a])=>k(a,[...e,s])):[]}function i(r){return r.map((e,s)=>/^\d+$/.test(e)?`[${e}]`:s===0?e:`.${e}`).join("")}const P=r=>r.toLowerCase().replace(/\s/g,""),V=k(B),x=k(v);function L(r,e){const s=new Map;for(const a of r){const C=P(a.value);s.set(C,[...s.get(C)??[],e+i(a.path)])}return s}const R=L(V,"primitives."),D=L(x,"colors."),S=(r,e)=>r.get(P(e))??[];function z(r,e=3){return r.length<=e?r:[...r.slice(0,e),`+${r.length-e} more`]}const E={title:"Foundations/Colors",tags:["live"],parameters:{layout:"padded",source:"src/tokens/colors.ts",docs:{description:{component:"Primitive palette, semantic roles and gradients, rendered from the token objects."}}}},_=Object.keys(B),p={parameters:{source:"src/tokens/colors.ts:19",docs:{description:{story:'Every primitive step. The lines under a swatch are the semantic tokens that point at the same value. A step that nothing points at shows "no semantic". Two steps with one hex (saffron 50 and 100) show the same names.'}}},render:()=>t.jsx(c,{children:_.map(r=>t.jsx(n,{title:r,children:t.jsx(o,{children:V.filter(e=>e.path[0]===r).map(e=>{const s=S(D,e.value);return t.jsx(j,{name:i(e.path),value:e.value,lines:s.length?z(s.map(a=>a.replace("colors.",""))):["no semantic"]},i(e.path))})})},r))})},F=Array.from(new Set(x.map(r=>r.path[0]))),m={parameters:{source:"src/tokens/colors.ts:94",docs:{description:{story:"Every semantic token, grouped by its first key. The second line is the primitive it points at. Components use only these names."}}},render:()=>t.jsx(c,{children:F.map(r=>t.jsx(n,{title:`colors.${r}`,children:t.jsx(o,{children:x.filter(e=>e.path[0]===r).map(e=>{const s=S(R,e.value);return t.jsx(j,{name:i(e.path.slice(1)),value:e.value,warn:!s.length,lines:s.length?z(s.map(a=>a.replace("primitives.",""))):["no primitive"]},i(e.path))})})},r))})},h={parameters:{source:"src/tokens/colors.ts",docs:{description:{story:"Semantic tokens whose value matches no primitive. They hold a raw hex or rgba. A design system gap: add a primitive or document the one-off."}}},render:()=>{const r=x.filter(e=>!S(R,e.value).length);return t.jsx(c,{children:t.jsx(n,{title:`${r.length} semantic tokens with no primitive`,children:t.jsx(o,{children:r.map(e=>t.jsx(j,{name:i(e.path),value:e.value,warn:!0,lines:["no primitive"]},i(e.path)))})})})}},u={parameters:{source:"src/atoms/Button.tsx",docs:{description:{story:"D17: Saffron is the only solid button colour. Cobalt is for links, outline and secondary buttons, selected chips and the opt-in accent fill."}}},render:()=>t.jsxs(c,{children:[t.jsx(n,{title:"Saffron is the action",note:"colors.action.primary.default",children:t.jsxs(o,{children:[t.jsx(l,{label:"Apply now",variant:"solid",tone:"main",size:44}),t.jsx(l,{label:"Apply now",variant:"solid",tone:"second",size:44}),t.jsx(l,{label:"Disabled",variant:"solid",tone:"main",size:44,disabled:!0})]})}),t.jsx(n,{title:"Cobalt is the accent",note:"colors.action.secondary.*, colors.action.accent.*, colors.text.link",children:t.jsxs(o,{children:[t.jsx(l,{label:"Learn more",variant:"outline",tone:"second",size:44}),t.jsx(l,{label:"Opt-in accent fill",variant:"solid",tone:"accent",size:44}),t.jsx(l,{label:"Read the terms",variant:"link",tone:"second",size:44})]})})]})},M=r=>r.colors,g={parameters:{source:"src/tokens/gradients.ts",docs:{description:{story:'Linear gradients render with expo-linear-gradient. Radial gradients (type "radial") are drawn as flat stops because expo-linear-gradient cannot draw them. The raw hex values in gradients.ts have no primitive: a design system gap.'}}},render:()=>t.jsxs(c,{children:[t.jsx(n,{title:"gradients (src/tokens/gradients.ts)",children:t.jsx(o,{children:Object.entries(O).map(([r,e])=>{const s=e;return t.jsxs(d,{style:{width:164,gap:T[4]},children:[s.type==="radial"?t.jsx(d,{style:{height:72,borderRadius:b.lg,overflow:"hidden",flexDirection:"row",borderWidth:W.thin,borderColor:v.border.default},children:M(s).map(a=>t.jsx(d,{style:{flex:1,backgroundColor:a}},a))}):t.jsx(G,{colors:s.colors,locations:s.locations,start:s.start,end:s.end,style:{height:72,borderRadius:b.lg,borderWidth:W.thin,borderColor:v.border.default}}),t.jsx(f,{variant:"body12SemiBold",children:r}),t.jsxs(w,{children:[s.type==="radial"?"radial, stops only: ":"",s.colors.join(" → ")]})]},r)})})}),t.jsx(n,{title:"theme gradients (src/theme/gradients.ts)",note:"Built from primitives, so they stay on the palette.",children:t.jsx(o,{children:Object.entries(A).map(([r,e])=>t.jsxs(d,{style:{width:164,gap:T[4]},children:[t.jsx(G,{colors:[...e],start:{x:0,y:0},end:{x:1,y:1},style:{height:72,borderRadius:b.lg}}),t.jsx(f,{variant:"body12SemiBold",children:r}),t.jsx(w,{children:e.join(" → ")})]},r))})})]})},y={parameters:{source:"src/tokens/colors.ts",docs:{description:{story:"The nine semantic tones. Toast and InlineMessage read bg, bgSubtle, text and border from here."}}},render:()=>t.jsx(c,{children:t.jsx(o,{children:Object.entries(v.tones).map(([r,e])=>t.jsxs($,{width:164,style:{backgroundColor:e.bgSubtle,borderColor:e.border},children:[t.jsx(d,{style:{height:24,borderRadius:b.sm,backgroundColor:e.bg}}),t.jsx(f,{variant:"body14SemiBold",color:e.text,children:r}),t.jsx(w,{color:e.text,children:"text on bgSubtle"})]},r))})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/colors.ts:19',
    docs: {
      description: {
        story: 'Every primitive step. The lines under a swatch are the semantic tokens that point at the same value. A step that nothing points at shows "no semantic". Two steps with one hex (saffron 50 and 100) show the same names.'
      }
    }
  },
  render: () => <Page>
      {rampNames.map(ramp => <Group key={ramp} title={ramp}>
          <Wrap>
            {primitiveLeaves.filter(l => l.path[0] === ramp).map(l => {
          const sem = byValue(semanticByValue, l.value);
          return <Swatch key={fmt(l.path)} name={fmt(l.path)} value={l.value} lines={sem.length ? short(sem.map(s => s.replace('colors.', ''))) : ['no semantic']} />;
        })}
          </Wrap>
        </Group>)}
    </Page>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/colors.ts:94',
    docs: {
      description: {
        story: 'Every semantic token, grouped by its first key. The second line is the primitive it points at. Components use only these names.'
      }
    }
  },
  render: () => <Page>
      {semanticGroups.map(g => <Group key={g} title={\`colors.\${g}\`}>
          <Wrap>
            {semanticLeaves.filter(l => l.path[0] === g).map(l => {
          const prim = byValue(primitivesByValue, l.value);
          return <Swatch key={fmt(l.path)} name={fmt(l.path.slice(1))} value={l.value} warn={!prim.length} lines={prim.length ? short(prim.map(p => p.replace('primitives.', ''))) : ['no primitive']} />;
        })}
          </Wrap>
        </Group>)}
    </Page>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/colors.ts',
    docs: {
      description: {
        story: 'Semantic tokens whose value matches no primitive. They hold a raw hex or rgba. A design system gap: add a primitive or document the one-off.'
      }
    }
  },
  render: () => {
    const rows = semanticLeaves.filter(l => !byValue(primitivesByValue, l.value).length);
    return <Page>
        <Group title={\`\${rows.length} semantic tokens with no primitive\`}>
          <Wrap>{rows.map(l => <Swatch key={fmt(l.path)} name={fmt(l.path)} value={l.value} warn lines={['no primitive']} />)}</Wrap>
        </Group>
      </Page>;
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/atoms/Button.tsx',
    docs: {
      description: {
        story: 'D17: Saffron is the only solid button colour. Cobalt is for links, outline and secondary buttons, selected chips and the opt-in accent fill.'
      }
    }
  },
  render: () => <Page>
      <Group title="Saffron is the action" note="colors.action.primary.default">
        <Wrap>
          <Button label="Apply now" variant="solid" tone="main" size={44} />
          <Button label="Apply now" variant="solid" tone="second" size={44} />
          <Button label="Disabled" variant="solid" tone="main" size={44} disabled />
        </Wrap>
      </Group>
      <Group title="Cobalt is the accent" note="colors.action.secondary.*, colors.action.accent.*, colors.text.link">
        <Wrap>
          <Button label="Learn more" variant="outline" tone="second" size={44} />
          <Button label="Opt-in accent fill" variant="solid" tone="accent" size={44} />
          <Button label="Read the terms" variant="link" tone="second" size={44} />
        </Wrap>
      </Group>
    </Page>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/gradients.ts',
    docs: {
      description: {
        story: 'Linear gradients render with expo-linear-gradient. Radial gradients (type "radial") are drawn as flat stops because expo-linear-gradient cannot draw them. The raw hex values in gradients.ts have no primitive: a design system gap.'
      }
    }
  },
  render: () => <Page>
      <Group title="gradients (src/tokens/gradients.ts)">
        <Wrap>
          {Object.entries(tokenGradients).map(([name, g]) => {
          const gg = g as any;
          return <View key={name} style={{
            width: 164,
            gap: spacing[4]
          }}>
                {gg.type === 'radial' ? <View style={{
              height: 72,
              borderRadius: radius.lg,
              overflow: 'hidden',
              flexDirection: 'row',
              borderWidth: borderWidth.thin,
              borderColor: colors.border.default
            }}>
                    {radialLike(gg).map(c => <View key={c} style={{
                flex: 1,
                backgroundColor: c
              }} />)}
                  </View> : <LinearGradient colors={gg.colors} locations={gg.locations} start={gg.start} end={gg.end} style={{
              height: 72,
              borderRadius: radius.lg,
              borderWidth: borderWidth.thin,
              borderColor: colors.border.default
            }} />}
                <Text variant="body12SemiBold">{name}</Text>
                <Caption>{gg.type === 'radial' ? 'radial, stops only: ' : ''}{gg.colors.join(' → ')}</Caption>
              </View>;
        })}
        </Wrap>
      </Group>
      <Group title="theme gradients (src/theme/gradients.ts)" note="Built from primitives, so they stay on the palette.">
        <Wrap>
          {Object.entries(themeGradients).map(([name, stops]) => <View key={name} style={{
          width: 164,
          gap: spacing[4]
        }}>
              <LinearGradient colors={[...stops] as unknown as [string, string, ...string[]]} start={{
            x: 0,
            y: 0
          }} end={{
            x: 1,
            y: 1
          }} style={{
            height: 72,
            borderRadius: radius.lg
          }} />
              <Text variant="body12SemiBold">{name}</Text>
              <Caption>{stops.join(' → ')}</Caption>
            </View>)}
        </Wrap>
      </Group>
    </Page>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/colors.ts',
    docs: {
      description: {
        story: 'The nine semantic tones. Toast and InlineMessage read bg, bgSubtle, text and border from here.'
      }
    }
  },
  render: () => <Page>
      <Wrap>
        {Object.entries(colors.tones).map(([name, t]) => <Frame key={name} width={164} style={{
        backgroundColor: t.bgSubtle,
        borderColor: t.border
      }}>
            <View style={{
          height: 24,
          borderRadius: radius.sm,
          backgroundColor: t.bg
        }} />
            <Text variant="body14SemiBold" color={t.text}>{name}</Text>
            <Caption color={t.text}>text on bgSubtle</Caption>
          </Frame>)}
      </Wrap>
    </Page>
}`,...y.parameters?.docs?.source}}};const N=["Primitives","Semantic","NoPrimitive","ActionRoles","Gradients","Tones"],Y=Object.freeze(Object.defineProperty({__proto__:null,ActionRoles:u,Gradients:g,NoPrimitive:h,Primitives:p,Semantic:m,Tones:y,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{u as A,Y as C,g as G,h as N,p as P,m as S,y as T};
