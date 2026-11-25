import{j as r,V as h,c as t,I as w}from"./iframe-EJmZd_T6.js";import{T as I}from"./Text-CwaPBD6t.js";import{i as L}from"./index-DCss3D-b.js";import{l as G}from"./logos-BJWE-0L7.js";import{s as n,b as C,r as j}from"./motion-CMqo2j38.js";import{P as d,G as S,W as P,C as T}from"./_shared-DjQe7OVj.js";const B={title:"Foundations/Imagery",tags:["live"],parameters:{layout:"padded",source:"src/assets/images/index.ts",docs:{description:{component:"Card art, store and brand logos, illustrations, backgrounds and the app wordmark."}}}};function V({name:e,src:i,w:a,h:o,fit:b="contain",dark:y}){return r.jsxs(h,{style:{width:Math.max(a,96),gap:n[4]},children:[r.jsx(h,{style:{width:Math.max(a,96),height:o+n[16],alignItems:"center",justifyContent:"center",borderRadius:j.md,borderWidth:C.thin,borderColor:t.border.subtle3,backgroundColor:y?t.surface.dark:t.background.muted},children:r.jsx(w,{source:i,style:{width:a,height:o},resizeMode:b})}),r.jsx(T,{children:e})]})}const s=(e,i,a,o,b,y="contain",x=!1)=>r.jsx(r.Fragment,{children:i.map(k=>r.jsx(S,{title:`${e}: images.${k}`,note:b,children:r.jsx(P,{gap:n[16],children:Object.entries(L[k]).map(([f,W])=>r.jsx(V,{name:f,src:W,w:a,h:o,fit:y,dark:typeof x=="function"?x(f):x},f))})},k))}),c={parameters:{source:"src/assets/images/index.ts:16",docs:{description:{story:"Credit card art, `images.cards`. Rendered by CardArt and the card tiles."}}},render:()=>r.jsx(d,{children:s("Card art",["cards"],144,92)})},l={parameters:{source:"src/assets/images/index.ts:74",docs:{description:{story:"Partner marks: `brands` (store brand logos) and `stores` (store and bank tiles). Frame them with BrandLogoTile or LogoContainer."}}},render:()=>r.jsx(d,{children:s("Logos",["brands","stores"],88,56)})},g={parameters:{source:"src/assets/images/index.ts:46",docs:{description:{story:"Category art and the Home filter icons."}}},render:()=>r.jsx(d,{children:s("Categories",["categories","filters"],64,64)})},m={parameters:{source:"src/assets/images/index.ts:141",docs:{description:{story:"Illustrations: the three ScreenState images, onboarding slides, help mastheads and the promo banner."}}},render:()=>r.jsxs(d,{children:[s("Illustrations",["screenstate"],120,120),s("Illustrations",["onboarding","promos"],96,150),s("Illustrations",["help"],176,96)]})},p={parameters:{source:"src/assets/images/index.ts:100",docs:{description:{story:"Hero backgrounds and the store page headers."}}},render:()=>r.jsx(d,{children:s("Backgrounds",["backgrounds","storepage"],160,96,void 0,"cover")})},u={parameters:{source:"src/assets/logos.ts",docs:{description:{story:"The Cards.xtra wordmark. SVG components (`logos`) for crisp rendering, PNG twins in `images.logos`. light = white mark for dark surfaces. dark = dark mark for light surfaces."}}},render:()=>r.jsxs(d,{children:[r.jsx(S,{title:"logos (SVG)",children:r.jsx(P,{gap:n[16],children:Object.entries(G).map(([e,i])=>{const a=e.startsWith("light"),o=i;return r.jsxs(h,{style:{gap:n[4]},children:[r.jsx(h,{style:{padding:n[16],borderRadius:j.lg,backgroundColor:a?t.surface.dark:t.background.muted,borderWidth:C.thin,borderColor:t.border.subtle3},children:r.jsx(o,{width:e.endsWith("Small")?114:140,height:e.endsWith("Small")?56:70})}),r.jsxs(I,{variant:"body12SemiBold",children:["logos.",e]})]},e)})})}),s("Wordmark PNG",["logos"],114,56,void 0,"contain",e=>e.startsWith("light"))]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/assets/images/index.ts:16',
    docs: {
      description: {
        story: 'Credit card art, \`images.cards\`. Rendered by CardArt and the card tiles.'
      }
    }
  },
  render: () => <Page>{gallery('Card art', ['cards'], 144, 92)}</Page>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/assets/images/index.ts:74',
    docs: {
      description: {
        story: 'Partner marks: \`brands\` (store brand logos) and \`stores\` (store and bank tiles). Frame them with BrandLogoTile or LogoContainer.'
      }
    }
  },
  render: () => <Page>{gallery('Logos', ['brands', 'stores'], 88, 56)}</Page>
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/assets/images/index.ts:46',
    docs: {
      description: {
        story: 'Category art and the Home filter icons.'
      }
    }
  },
  render: () => <Page>{gallery('Categories', ['categories', 'filters'], 64, 64)}</Page>
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/assets/images/index.ts:141',
    docs: {
      description: {
        story: 'Illustrations: the three ScreenState images, onboarding slides, help mastheads and the promo banner.'
      }
    }
  },
  render: () => <Page>
      {gallery('Illustrations', ['screenstate'], 120, 120)}
      {gallery('Illustrations', ['onboarding', 'promos'], 96, 150)}
      {gallery('Illustrations', ['help'], 176, 96)}
    </Page>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/assets/images/index.ts:100',
    docs: {
      description: {
        story: 'Hero backgrounds and the store page headers.'
      }
    }
  },
  render: () => <Page>{gallery('Backgrounds', ['backgrounds', 'storepage'], 160, 96, undefined, 'cover')}</Page>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    source: 'src/assets/logos.ts',
    docs: {
      description: {
        story: 'The Cards.xtra wordmark. SVG components (\`logos\`) for crisp rendering, PNG twins in \`images.logos\`. light = white mark for dark surfaces. dark = dark mark for light surfaces.'
      }
    }
  },
  render: () => <Page>
      <Group title="logos (SVG)">
        <Wrap gap={spacing[16]}>
          {Object.entries(logos).map(([name, Logo]) => {
          const onDark = name.startsWith('light');
          const L = Logo as React.ComponentType<{
            width?: number;
            height?: number;
          }>;
          return <View key={name} style={{
            gap: spacing[4]
          }}>
                <View style={{
              padding: spacing[16],
              borderRadius: radius.lg,
              backgroundColor: onDark ? colors.surface.dark : colors.background.muted,
              borderWidth: borderWidth.thin,
              borderColor: colors.border.subtle3
            }}>
                  <L width={name.endsWith('Small') ? 114 : 140} height={name.endsWith('Small') ? 56 : 70} />
                </View>
                <Text variant="body12SemiBold">logos.{name}</Text>
              </View>;
        })}
        </Wrap>
      </Group>
      {gallery('Wordmark PNG', ['logos'], 114, 56, undefined, 'contain', n => n.startsWith('light'))}
    </Page>
}`,...u.parameters?.docs?.source}}};const A=["CardArt","StoreAndBrandLogos","Categories","Illustrations","Backgrounds","AppLogo"],M=Object.freeze(Object.defineProperty({__proto__:null,AppLogo:u,Backgrounds:p,CardArt:c,Categories:g,Illustrations:m,StoreAndBrandLogos:l,__namedExportsOrder:A,default:B},Symbol.toStringTag,{value:"Module"}));export{u as A,M as I};
