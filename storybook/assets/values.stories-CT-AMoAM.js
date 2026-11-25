import{j as e,V as a,c as n}from"./iframe-EJmZd_T6.js";import{T as y}from"./Text-CwaPBD6t.js";import{b,s as t,r as o}from"./motion-CMqo2j38.js";import{o as w,a as j}from"./opacity-rEjPgtwf.js";import{P as u,W as m,L as g,C as h,F as k,G as f}from"./_shared-DjQe7OVj.js";const C={title:"Foundations/Values",tags:["live"],parameters:{layout:"padded",source:"src/tokens/spacing.ts",docs:{description:{component:"Spacing, radius, border width and opacity, as measured boxes."}}}},i={parameters:{source:"src/tokens/spacing.ts:6",docs:{description:{story:"The spacing scale in px. Use it for padding, margin and gap: `spacing[16]`. Each bar is as wide as the value."}}},render:()=>e.jsx(u,{children:e.jsx(a,{style:{gap:t[8]},children:Object.entries(t).map(([r,s])=>e.jsxs(a,{style:{flexDirection:"row",alignItems:"center",gap:t[12]},children:[e.jsx(a,{style:{width:96},children:e.jsxs(g,{children:["spacing[",r,"]"]})}),e.jsx(a,{style:{width:40},children:e.jsxs(h,{children:[s,"px"]})}),e.jsx(a,{style:{width:s,height:t[16],backgroundColor:n.action.accent.default,borderRadius:o.xs}})]},r))})})},d={parameters:{source:"src/tokens/spacing.ts:13",docs:{description:{story:"Corner radius. `full` is 10000, a pill or a circle."}}},render:()=>e.jsx(u,{children:e.jsx(m,{children:Object.entries(o).map(([r,s])=>e.jsxs(a,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsx(a,{style:{width:72,height:72,borderRadius:s,backgroundColor:n.background.lavender,borderWidth:b.thick,borderColor:n.action.accent.default}}),e.jsxs(g,{children:["radius[",r,"]"]}),e.jsxs(h,{children:[s,"px"]})]},r))})})},c={parameters:{source:"src/tokens/spacing.ts:19",docs:{description:{story:"Stroke widths. `iconDefault` is the 1.25 stroke of the icon set."}}},render:()=>e.jsx(u,{children:e.jsx(m,{children:Object.entries(b).map(([r,s])=>e.jsxs(a,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsx(a,{style:{width:96,height:56,borderRadius:o.md,borderWidth:s,borderColor:n.text.primary,backgroundColor:n.surface.default}}),e.jsxs(g,{children:["borderWidth[",r,"]"]}),e.jsxs(h,{children:[s,"px"]})]},r))})})},l={parameters:{source:"src/tokens/opacity.ts",docs:{description:{story:"Node opacity (0 to 1) for the `opacity` style, and rgba overlays for scrims and borders. Both are named by the percentage."}}},render:()=>e.jsxs(u,{children:[e.jsx(f,{title:"opacity",note:"The `opacity` style prop. Shown on text.primary.",children:e.jsx(m,{children:Object.entries(w).map(([r,s])=>e.jsxs(a,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsx(a,{style:{width:72,height:56,borderRadius:o.md,backgroundColor:n.text.primary,opacity:s}}),e.jsxs(g,{children:["opacity[",r,"]"]}),e.jsx(h,{children:s})]},r))})}),["black","white"].map(r=>e.jsx(f,{title:`alpha.${r}`,note:"Overlays. Shown over a half-and-half ground so the tint reads on both.",children:e.jsx(m,{children:Object.entries(j[r]).map(([s,x])=>e.jsxs(a,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsxs(a,{style:{width:72,height:56,borderRadius:o.md,overflow:"hidden",flexDirection:"row",borderWidth:b.thin,borderColor:n.border.default},children:[e.jsx(a,{style:{flex:1,backgroundColor:n.surface.inverse}}),e.jsx(a,{style:{flex:1,backgroundColor:n.surface.default}}),e.jsx(a,{style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:x}})]}),e.jsxs(g,{children:["alpha.",r,"[",s,"]"]}),e.jsx(h,{children:x})]},s))})},r))]})},p={parameters:{source:"src/tokens/spacing.ts",docs:{description:{story:"Spacing and radius together on a card: padding spacing[16], gap spacing[8], radius.xl."}}},render:()=>e.jsx(u,{children:e.jsxs(k,{width:280,style:{padding:t[16],gap:t[8],borderRadius:o.xl},children:[e.jsx(y,{variant:"heading18SemiBold",children:"Axis Bank Magnus"}),e.jsx(y,{variant:"body14Regular",color:n.text.secondary,children:"padding spacing[16] · gap spacing[8] · radius.xl"})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:6',
    docs: {
      description: {
        story: 'The spacing scale in px. Use it for padding, margin and gap: \`spacing[16]\`. Each bar is as wide as the value.'
      }
    }
  },
  render: () => <Page>
      <View style={{
      gap: spacing[8]
    }}>
        {Object.entries(spacing).map(([k, v]) => <View key={k} style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing[12]
      }}>
            <View style={{
          width: 96
        }}><Label>spacing[{k}]</Label></View>
            <View style={{
          width: 40
        }}><Caption>{v}px</Caption></View>
            <View style={{
          width: v,
          height: spacing[16],
          backgroundColor: colors.action.accent.default,
          borderRadius: radius.xs
        }} />
          </View>)}
      </View>
    </Page>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:13',
    docs: {
      description: {
        story: 'Corner radius. \`full\` is 10000, a pill or a circle.'
      }
    }
  },
  render: () => <Page>
      <Wrap>
        {Object.entries(radius).map(([k, v]) => <View key={k} style={{
        gap: spacing[4],
        alignItems: 'flex-start'
      }}>
            <View style={{
          width: 72,
          height: 72,
          borderRadius: v,
          backgroundColor: colors.background.lavender,
          borderWidth: borderWidth.thick,
          borderColor: colors.action.accent.default
        }} />
            <Label>radius[{k}]</Label>
            <Caption>{v}px</Caption>
          </View>)}
      </Wrap>
    </Page>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:19',
    docs: {
      description: {
        story: 'Stroke widths. \`iconDefault\` is the 1.25 stroke of the icon set.'
      }
    }
  },
  render: () => <Page>
      <Wrap>
        {Object.entries(borderWidth).map(([k, v]) => <View key={k} style={{
        gap: spacing[4],
        alignItems: 'flex-start'
      }}>
            <View style={{
          width: 96,
          height: 56,
          borderRadius: radius.md,
          borderWidth: v,
          borderColor: colors.text.primary,
          backgroundColor: colors.surface.default
        }} />
            <Label>borderWidth[{k}]</Label>
            <Caption>{v}px</Caption>
          </View>)}
      </Wrap>
    </Page>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/opacity.ts',
    docs: {
      description: {
        story: 'Node opacity (0 to 1) for the \`opacity\` style, and rgba overlays for scrims and borders. Both are named by the percentage.'
      }
    }
  },
  render: () => <Page>
      <Group title="opacity" note="The \`opacity\` style prop. Shown on text.primary.">
        <Wrap>
          {Object.entries(opacity).map(([k, v]) => <View key={k} style={{
          gap: spacing[4],
          alignItems: 'flex-start'
        }}>
              <View style={{
            width: 72,
            height: 56,
            borderRadius: radius.md,
            backgroundColor: colors.text.primary,
            opacity: v
          }} />
              <Label>opacity[{k}]</Label>
              <Caption>{v}</Caption>
            </View>)}
        </Wrap>
      </Group>
      {(['black', 'white'] as const).map(tone => <Group key={tone} title={\`alpha.\${tone}\`} note="Overlays. Shown over a half-and-half ground so the tint reads on both.">
          <Wrap>
            {Object.entries(alpha[tone]).map(([k, v]) => <View key={k} style={{
          gap: spacing[4],
          alignItems: 'flex-start'
        }}>
                <View style={{
            width: 72,
            height: 56,
            borderRadius: radius.md,
            overflow: 'hidden',
            flexDirection: 'row',
            borderWidth: borderWidth.thin,
            borderColor: colors.border.default
          }}>
                  <View style={{
              flex: 1,
              backgroundColor: colors.surface.inverse
            }} />
                  <View style={{
              flex: 1,
              backgroundColor: colors.surface.default
            }} />
                  <View style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: v
            }} />
                </View>
                <Label>alpha.{tone}[{k}]</Label>
                <Caption>{v}</Caption>
              </View>)}
          </Wrap>
        </Group>)}
    </Page>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts',
    docs: {
      description: {
        story: 'Spacing and radius together on a card: padding spacing[16], gap spacing[8], radius.xl.'
      }
    }
  },
  render: () => <Page>
      <Frame width={280} style={{
      padding: spacing[16],
      gap: spacing[8],
      borderRadius: radius.xl
    }}>
        <Text variant="heading18SemiBold">Axis Bank Magnus</Text>
        <Text variant="body14Regular" color={colors.text.secondary}>padding spacing[16] · gap spacing[8] · radius.xl</Text>
      </Frame>
    </Page>
}`,...p.parameters?.docs?.source}}};const v=["Spacing","Radius","BorderWidth","Opacity","InUse"],I=Object.freeze(Object.defineProperty({__proto__:null,BorderWidth:c,InUse:p,Opacity:l,Radius:d,Spacing:i,__namedExportsOrder:v,default:C},Symbol.toStringTag,{value:"Module"}));export{c as B,p as I,l as O,d as R,i as S,I as V};
