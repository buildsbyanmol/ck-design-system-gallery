import{j as e,V as o,r as k,u as _,b as T,d as v,c as y,e as P}from"./iframe-BxRbKpJi.js";import{T as x}from"./Text-Ck5O8Bhy.js";import{B as V}from"./Button-DVRCyaXo.js";import{S as p}from"./Skeleton-CiGE1IyU.js";import{c as l,s as a,r as w}from"./motion-C4NNgPp6.js";import{P as h,G as E,C as f,L as O}from"./_shared-DPMwbqRR.js";const D={title:"Foundations/Animations",tags:["live"],parameters:{layout:"padded",source:"src/tokens/motion.ts",docs:{description:{component:"Motion tokens: four durations and one easing."}}}},j=280,u=24,C={code:"function animationsStoriesTsx1(){const{x}=this.__closure;return{transform:[{translateX:x.value}]};}"};function A({name:t,ms:n,on:s}){const i=_(0);k.useEffect(()=>{i.value=T(s?j-u:0,{duration:n,easing:l.easing.standard})},[s,n,i]);const b=v((function({_worklet_15659151032304_init_data:S,x:g}){const m=()=>({transform:[{translateX:g.value}]});return m.__closure={x:g},m.__workletHash=0xe3dee227ff0,m.__initData=S,m})({_worklet_15659151032304_init_data:C,x:i}));return e.jsxs(o,{style:{gap:a[4]},children:[e.jsxs(O,{children:["motion.duration.",t," · ",n," ms"]}),e.jsx(o,{style:{width:j,height:u,borderRadius:w.full,backgroundColor:y.background.lavender},children:e.jsx(P,{style:[{width:u,height:u,borderRadius:w.full,backgroundColor:y.action.primary.default},b]})})]})}function B(){const[t,n]=k.useState(!1);return e.jsxs(h,{children:[e.jsx(V,{label:t?"Play back":"Play",variant:"outline",tone:"second",size:36,onPress:()=>n(s=>!s)}),e.jsx(o,{style:{gap:a[16]},children:Object.entries(l.duration).filter(([s])=>s!=="pulse").map(([s,i])=>e.jsx(A,{name:s,ms:i,on:t},s))})]})}const r={parameters:{source:"src/tokens/motion.ts:23",docs:{description:{story:"Press Play. Each dot moves the same distance with `motion.easing.standard`, in the token duration. fast, base and slow are the three UI speeds."}}},render:()=>e.jsx(B,{})},c={parameters:{source:"src/tokens/motion.ts:20",docs:{description:{story:"`motion.duration.pulse` (650 ms) is one half-cycle of the loading pulse. The real Skeleton atom loops opacity between opacity[16] and opacity[40] with it."}}},render:()=>e.jsx(h,{children:e.jsx(E,{title:`Skeleton · pulse ${l.duration.pulse} ms per half-cycle`,children:e.jsxs(o,{style:{gap:a[8],width:280},children:[e.jsx(p,{height:16,width:"60%"}),e.jsx(p,{height:48,radius:"lg"}),e.jsx(p,{height:16,width:"80%"})]})})})},d={parameters:{source:"src/tokens/motion.ts",docs:{description:{story:"Every motion token."}}},render:()=>e.jsx(h,{children:e.jsxs(o,{style:{gap:a[8]},children:[Object.entries(l.duration).map(([t,n])=>e.jsxs(o,{style:{flexDirection:"row",gap:a[16]},children:[e.jsx(o,{style:{width:220},children:e.jsxs(x,{variant:"body14SemiBold",children:["motion.duration.",t]})}),e.jsxs(f,{children:[n," ms"]})]},t)),Object.keys(l.easing).map(t=>e.jsxs(o,{style:{flexDirection:"row",gap:a[16]},children:[e.jsx(o,{style:{width:220},children:e.jsxs(x,{variant:"body14SemiBold",children:["motion.easing.",t]})}),e.jsx(f,{children:"Easing.inOut(Easing.quad) (a reanimated function)"})]},t))]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/motion.ts:23',
    docs: {
      description: {
        story: 'Press Play. Each dot moves the same distance with \`motion.easing.standard\`, in the token duration. fast, base and slow are the three UI speeds.'
      }
    }
  },
  render: () => <Demo />
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/motion.ts:20',
    docs: {
      description: {
        story: '\`motion.duration.pulse\` (650 ms) is one half-cycle of the loading pulse. The real Skeleton atom loops opacity between opacity[16] and opacity[40] with it.'
      }
    }
  },
  render: () => <Page>
      <Group title={\`Skeleton · pulse \${motion.duration.pulse} ms per half-cycle\`}>
        <View style={{
        gap: spacing[8],
        width: 280
      }}>
          <Skeleton height={16} width="60%" />
          <Skeleton height={48} radius="lg" />
          <Skeleton height={16} width="80%" />
        </View>
      </Group>
    </Page>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/tokens/motion.ts',
    docs: {
      description: {
        story: 'Every motion token.'
      }
    }
  },
  render: () => <Page>
      <View style={{
      gap: spacing[8]
    }}>
        {Object.entries(motion.duration).map(([k, v]) => <View key={k} style={{
        flexDirection: 'row',
        gap: spacing[16]
      }}>
            <View style={{
          width: 220
        }}><Text variant="body14SemiBold">motion.duration.{k}</Text></View>
            <Caption>{v} ms</Caption>
          </View>)}
        {Object.keys(motion.easing).map(k => <View key={k} style={{
        flexDirection: 'row',
        gap: spacing[16]
      }}>
            <View style={{
          width: 220
        }}><Text variant="body14SemiBold">motion.easing.{k}</Text></View>
            <Caption>Easing.inOut(Easing.quad) (a reanimated function)</Caption>
          </View>)}
      </View>
    </Page>
}`,...d.parameters?.docs?.source}}};const G=["Durations","Pulse","Table"],U=Object.freeze(Object.defineProperty({__proto__:null,Durations:r,Pulse:c,Table:d,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{U as A,r as D,c as P,d as T};
