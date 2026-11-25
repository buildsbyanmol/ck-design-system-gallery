import{j as r,V as i,c as p}from"./iframe-DK2xttIN.js";import{T as m}from"./Text-Czhgaopg.js";import{s as d}from"./motion-q_NUJArm.js";import{R as o}from"./RankBadge-Gf3P_Uus.js";import"./preload-helper-Zf8nSx-t.js";const h={title:"Components/Badge and Tag/RankBadge",component:o,tags:["autodocs","live"],parameters:{source:"src/atoms/RankBadge.tsx",docs:{description:{component:'A 24 px round number for a ranked list ("1", "2"). Cobalt-soft fill, link-coloured digit. Used by RankedCardRow.'}}},argTypes:{rank:{control:{type:"number",min:1,max:999}}},args:{rank:1}},n=({label:a,children:c})=>r.jsxs(i,{style:{gap:d[4],alignItems:"flex-start"},children:[r.jsx(m,{variant:"caption10Medium",color:p.text.tertiary,children:a}),c]}),l=({children:a})=>r.jsx(i,{style:{flexDirection:"row",flexWrap:"wrap",gap:d[16],maxWidth:520,alignItems:"flex-start"},children:a}),e={},s={parameters:{docs:{description:{story:"RankBadge has one style. Variants shows the first five ranks."}}},render:()=>r.jsx(l,{children:[1,2,3,4,5].map(a=>r.jsx(n,{label:`rank ${a}`,children:r.jsx(o,{rank:a})},a))})},t={parameters:{docs:{description:{story:"minWidth 24 grows for 2 and 3 digit ranks. No disabled or loading state."}}},render:()=>r.jsxs(l,{children:[r.jsx(n,{label:"two digits",children:r.jsx(o,{rank:10})}),r.jsx(n,{label:"three digits",children:r.jsx(o,{rank:128})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'RankBadge has one style. Variants shows the first five ranks.'
      }
    }
  },
  render: () => <Wrap>{[1, 2, 3, 4, 5].map(n => <Cell key={n} label={\`rank \${n}\`}><RankBadge rank={n} /></Cell>)}</Wrap>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'minWidth 24 grows for 2 and 3 digit ranks. No disabled or loading state.'
      }
    }
  },
  render: () => <Wrap>
      <Cell label="two digits"><RankBadge rank={10} /></Cell>
      <Cell label="three digits"><RankBadge rank={128} /></Cell>
    </Wrap>
}`,...t.parameters?.docs?.source}}};const y=["Playground","Variants","States"];export{e as Playground,t as States,s as Variants,y as __namedExportsOrder,h as default};
