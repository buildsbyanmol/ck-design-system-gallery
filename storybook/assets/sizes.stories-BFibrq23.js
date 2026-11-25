import{j as e,V as n,c as u}from"./iframe-EJmZd_T6.js";import{I as b}from"./Icon-DYjHrDGy.js";import{s as t,d as j,b as y,r as g,i as z,m as w,a as S}from"./motion-CMqo2j38.js";import{P as d,W as h,L as p,C as m,G as k}from"./_shared-DjQe7OVj.js";const f={title:"Foundations/Sizes",tags:["live"],parameters:{layout:"padded",source:"src/tokens/spacing.ts",docs:{description:{component:"Icon, avatar, media sizes and the touch and layout sizes."}}}},l={backgroundColor:u.background.lavender,borderWidth:y.thin,borderColor:u.action.accent.default},r={parameters:{source:"src/tokens/spacing.ts:24",docs:{description:{story:"iconSize steps. Each is the real Icon atom at that edge length inside a measured box."}}},render:()=>e.jsx(d,{children:e.jsx(h,{gap:t[24],children:Object.entries(z).map(([a,s])=>e.jsxs(n,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsx(n,{style:{width:s,height:s,...l},children:e.jsx(b,{name:"check-circle-outline",size:s})}),e.jsxs(p,{children:["iconSize[",a,"]"]}),e.jsxs(m,{children:[s,"px"]})]},a))})})},i={parameters:{source:"src/tokens/spacing.ts:30",docs:{description:{story:"avatarSize steps. Circles of that diameter."}}},render:()=>e.jsx(d,{children:e.jsx(h,{gap:t[24],children:Object.entries(j).map(([a,s])=>e.jsxs(n,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsx(n,{style:{width:s,height:s,borderRadius:g.full,...l}}),e.jsxs(p,{children:["avatarSize[",a,"]"]}),e.jsxs(m,{children:[s,"px"]})]},a))})})},o={parameters:{source:"src/tokens/spacing.ts:36",docs:{description:{story:"mediaSize steps: heights for brand and partner logos and contained illustrations. Separate from iconSize on purpose."}}},render:()=>e.jsx(d,{children:e.jsx(h,{gap:t[24],children:Object.entries(w).map(([a,s])=>e.jsxs(n,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsx(n,{style:{height:s,width:s*2,borderRadius:g.sm,...l}}),e.jsxs(p,{children:["mediaSize[",a,"]"]}),e.jsxs(m,{children:["height ",s,"px"]})]},a))})})},c={parameters:{source:"src/tokens/spacing.ts:44",docs:{description:{story:"The `sizing` object: touch targets, container widths and fixed component heights. Each box is drawn at its value."}}},render:()=>e.jsx(d,{children:e.jsx(k,{title:"sizing",children:e.jsx(n,{style:{gap:t[16]},children:Object.entries(S).map(([a,s])=>{const x=/container|ticketLogoW/.test(a);return e.jsxs(n,{style:{gap:t[4],alignItems:"flex-start"},children:[e.jsxs(p,{children:["sizing.",a," · ",s,"px"]}),e.jsx(n,{style:{width:s,height:x?t[24]:s,...l,borderRadius:g.sm}})]},a)})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:24',
    docs: {
      description: {
        story: 'iconSize steps. Each is the real Icon atom at that edge length inside a measured box.'
      }
    }
  },
  render: () => <Page>
      <Wrap gap={spacing[24]}>
        {Object.entries(iconSize).map(([k, v]) => <View key={k} style={{
        gap: spacing[4],
        alignItems: 'flex-start'
      }}>
            <View style={{
          width: v,
          height: v,
          ...box
        }}><Icon name="check-circle-outline" size={v} /></View>
            <Label>iconSize[{k}]</Label>
            <Caption>{v}px</Caption>
          </View>)}
      </Wrap>
    </Page>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:30',
    docs: {
      description: {
        story: 'avatarSize steps. Circles of that diameter.'
      }
    }
  },
  render: () => <Page>
      <Wrap gap={spacing[24]}>
        {Object.entries(avatarSize).map(([k, v]) => <View key={k} style={{
        gap: spacing[4],
        alignItems: 'flex-start'
      }}>
            <View style={{
          width: v,
          height: v,
          borderRadius: radius.full,
          ...box
        }} />
            <Label>avatarSize[{k}]</Label>
            <Caption>{v}px</Caption>
          </View>)}
      </Wrap>
    </Page>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:36',
    docs: {
      description: {
        story: 'mediaSize steps: heights for brand and partner logos and contained illustrations. Separate from iconSize on purpose.'
      }
    }
  },
  render: () => <Page>
      <Wrap gap={spacing[24]}>
        {Object.entries(mediaSize).map(([k, v]) => <View key={k} style={{
        gap: spacing[4],
        alignItems: 'flex-start'
      }}>
            <View style={{
          height: v,
          width: v * 2,
          borderRadius: radius.sm,
          ...box
        }} />
            <Label>mediaSize[{k}]</Label>
            <Caption>height {v}px</Caption>
          </View>)}
      </Wrap>
    </Page>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/spacing.ts:44',
    docs: {
      description: {
        story: 'The \`sizing\` object: touch targets, container widths and fixed component heights. Each box is drawn at its value.'
      }
    }
  },
  render: () => <Page>
      <Group title="sizing">
        <View style={{
        gap: spacing[16]
      }}>
          {Object.entries(sizing).map(([k, v]) => {
          const wide = /container|ticketLogoW/.test(k);
          return <View key={k} style={{
            gap: spacing[4],
            alignItems: 'flex-start'
          }}>
                <Label>sizing.{k} · {v}px</Label>
                <View style={{
              width: v,
              height: wide ? spacing[24] : v,
              ...box,
              borderRadius: radius.sm
            }} />
              </View>;
        })}
        </View>
      </Group>
    </Page>
}`,...c.parameters?.docs?.source}}};const v=["Icons","Avatars","Media","TouchAndLayout"],W=Object.freeze(Object.defineProperty({__proto__:null,Avatars:i,Icons:r,Media:o,TouchAndLayout:c,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{i as A,r as I,o as M,W as S,c as T};
