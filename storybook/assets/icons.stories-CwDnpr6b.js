import{j as e,V as S,c as r,r as g,T as C}from"./iframe-EJmZd_T6.js";import{I as p,a as x}from"./Icon-DYjHrDGy.js";import{T as v}from"./Text-CwaPBD6t.js";import{s as a,i as m,t as G,b as I,r as w}from"./motion-CMqo2j38.js";import{P as y,W as u,C as T,G as h,F as b,L as j}from"./_shared-DjQe7OVj.js";const F={title:"Foundations/Icons",tags:["live"],parameters:{layout:"padded",source:"src/atoms/Icon.tsx",docs:{description:{component:"Every icon name in the registry, rendered with the Icon atom."}}}},k=o=>o.includes("-")?o.split("-")[0]:"other",z=new Set(["amazon","flipkart","pay-amazon","pay-combined","pay-flipkart"]);function O({name:o,size:t,color:c}){return e.jsxs(S,{style:{width:112,alignItems:"center",gap:a[8],padding:a[8],borderRadius:w.lg,borderWidth:I.thin,borderColor:r.border.subtle3,backgroundColor:r.surface.default},children:[e.jsx(p,{name:o,size:t,color:c}),e.jsx(v,{variant:"caption10Medium",color:r.text.secondary,align:"center",children:o})]})}function P(){const[o,t]=g.useState(""),c=g.useMemo(()=>x.filter(s=>s.includes(o.trim().toLowerCase())),[o]),W=g.useMemo(()=>{const s=new Map;for(const n of c)s.set(k(n),[...s.get(k(n))??[],n]);return Array.from(s.entries())},[c]);return e.jsxs(y,{children:[e.jsx(C,{value:o,onChangeText:t,placeholder:`Search ${x.length} icons`,placeholderTextColor:r.text.placeholder,style:[G.body14Regular,{height:44,paddingHorizontal:a[16],borderRadius:w.lg,borderWidth:I.thin,borderColor:r.border.default,color:r.text.primary,backgroundColor:r.surface.default,maxWidth:360}]}),e.jsxs(T,{children:[c.length," of ",x.length," shown"]}),W.map(([s,n])=>e.jsx(h,{title:`${s} (${n.length})`,children:e.jsx(u,{gap:a[12],children:n.map(f=>e.jsx(O,{name:f,size:m[24],color:r.icon.actions},f))})},s))]})}const i={parameters:{source:"src/atoms/Icon.tsx:127",docs:{description:{story:"Type in the box to filter by name. Groups follow the name prefix: nav, feat, desc, pay, social, help and the rest."}}},render:()=>e.jsx(P,{})},l={parameters:{source:"src/atoms/Icon.tsx:11",docs:{description:{story:"Outline and general icons take `color` (their stroke is currentColor). nav-* and desc-* icons keep their baked colours on purpose. Raster brand logos ignore `color`."}}},render:()=>e.jsxs(y,{children:[e.jsx(h,{title:"color prop",children:e.jsx(u,{children:[["icon.actions",r.icon.actions],["icon.brand",r.icon.brand],["icon.danger",r.icon.danger],["icon.success",r.icon.success],["icon.disabled",r.icon.disabled]].map(([o,t])=>e.jsxs(b,{width:120,children:[e.jsx(p,{name:"star-outline",size:m[32],color:t}),e.jsxs(j,{children:["colors.",o]})]},o))})}),e.jsx(h,{title:"baked colours",note:"These ignore the color prop.",children:e.jsx(u,{children:["nav-home-filled","desc-confirmed","desc-cross","desc-cashback"].map(o=>e.jsxs(b,{width:120,style:o.startsWith("nav")?{backgroundColor:r.surface.dark}:void 0,children:[e.jsx(p,{name:o,size:m[32],color:r.icon.danger}),e.jsx(v,{variant:"body12SemiBold",color:o.startsWith("nav")?r.text.inverse:r.text.primary,children:o})]},o))})}),e.jsx(h,{title:"raster logos",note:`${[...z].join(", ")}: PNG, colours baked in.`,children:e.jsx(u,{children:[...z].map(o=>e.jsxs(b,{width:120,children:[e.jsx(p,{name:o,size:m[32]}),e.jsx(j,{children:o})]},o))})})]})},d={parameters:{source:"src/atoms/Icon.tsx:140",docs:{description:{story:"The `size` prop takes an iconSize step. Default is iconSize[20]."}}},render:()=>e.jsx(y,{children:e.jsx(u,{gap:a[24],children:Object.values(m).map(o=>e.jsxs(S,{style:{alignItems:"center",gap:a[4]},children:[e.jsx(p,{name:"wallet-outline",size:o}),e.jsx(T,{children:o})]},o))})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/atoms/Icon.tsx:127',
    docs: {
      description: {
        story: 'Type in the box to filter by name. Groups follow the name prefix: nav, feat, desc, pay, social, help and the rest.'
      }
    }
  },
  render: () => <Grid />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/atoms/Icon.tsx:11',
    docs: {
      description: {
        story: 'Outline and general icons take \`color\` (their stroke is currentColor). nav-* and desc-* icons keep their baked colours on purpose. Raster brand logos ignore \`color\`.'
      }
    }
  },
  render: () => <Page>
      <Group title="color prop">
        <Wrap>
          {([['icon.actions', colors.icon.actions], ['icon.brand', colors.icon.brand], ['icon.danger', colors.icon.danger], ['icon.success', colors.icon.success], ['icon.disabled', colors.icon.disabled]] as const).map(([n, c]) => <Frame key={n} width={120}><Icon name="star-outline" size={iconSize[32]} color={c} /><Label>colors.{n}</Label></Frame>)}
        </Wrap>
      </Group>
      <Group title="baked colours" note="These ignore the color prop.">
        <Wrap>
          {(['nav-home-filled', 'desc-confirmed', 'desc-cross', 'desc-cashback'] as const).map(n => <Frame key={n} width={120} style={n.startsWith('nav') ? {
          backgroundColor: colors.surface.dark
        } : undefined}>
              <Icon name={n} size={iconSize[32]} color={colors.icon.danger} />
              <Text variant="body12SemiBold" color={n.startsWith('nav') ? colors.text.inverse : colors.text.primary}>{n}</Text>
            </Frame>)}
        </Wrap>
      </Group>
      <Group title="raster logos" note={\`\${[...raster].join(', ')}: PNG, colours baked in.\`}>
        <Wrap>{[...raster].map(n => <Frame key={n} width={120}><Icon name={n as any} size={iconSize[32]} /><Label>{n}</Label></Frame>)}</Wrap>
      </Group>
    </Page>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/atoms/Icon.tsx:140',
    docs: {
      description: {
        story: 'The \`size\` prop takes an iconSize step. Default is iconSize[20].'
      }
    }
  },
  render: () => <Page>
      <Wrap gap={spacing[24]}>
        {Object.values(iconSize).map(s => <View key={s} style={{
        alignItems: 'center',
        gap: spacing[4]
      }}><Icon name="wallet-outline" size={s} /><Caption>{s}</Caption></View>)}
      </Wrap>
    </Page>
}`,...d.parameters?.docs?.source}}};const R=["Registry","Tinting","Sizes"],N=Object.freeze(Object.defineProperty({__proto__:null,Registry:i,Sizes:d,Tinting:l,__namedExportsOrder:R,default:F},Symbol.toStringTag,{value:"Module"}));export{N as I,i as R,d as S,l as T};
