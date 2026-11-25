import{j as e,r as m}from"./iframe-DK2xttIN.js";import{C as d}from"./Chip-BuxZxqKh.js";import{i as o}from"./index-DCss3D-b.js";import{S as c,G as a,W as s}from"./_kit-B0SvWT-F.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./motion-q_NUJArm.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./Switch-DOYMAAVN.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";function l(t){const[p,b]=m.useState(t.state==="selected"),u=t.state==="disabled"?"disabled":p?"selected":"default";return e.jsx(d,{...t,state:u,onPress:()=>b(g=>!g)})}const C={title:"Components/Selections/Chip",component:d,tags:["autodocs","live"],parameters:{source:"src/atoms/Chip.tsx",docs:{description:{component:"A pill for filters, tabs and toggles. One component, three types: default (filter), tab (segment), toggle (switch plus an edit button)."}}},argTypes:{type:{control:"select",options:["default","tab","toggle"]},state:{control:"select",options:["default","selected","disabled"]},size:{control:"select",options:[20,24,28,32]},label:{control:"text"},count:{control:"number"},dot:{control:"boolean"},leadingIcon:{control:"text"},trailingIcon:{control:"text"}},args:{label:"Lifetime free",type:"default",state:"default",size:32},render:t=>e.jsx(l,{...t})},i={},n={parameters:{docs:{description:{story:"`size` applies to default and toggle chips. The tab chip has fixed geometry and ignores it."}}},render:()=>e.jsxs(c,{children:[e.jsx(a,{label:"default, sizes 20 / 24 / 28 / 32",children:e.jsx(s,{children:[20,24,28,32].map(t=>e.jsx(l,{label:`Size ${t}`,size:t},t))})}),e.jsx(a,{label:"default, selected",children:e.jsx(s,{children:[20,24,28,32].map(t=>e.jsx(l,{label:`Size ${t}`,size:t,state:"selected"},t))})}),e.jsx(a,{label:"leading icon / trailing icon / dot",children:e.jsxs(s,{children:[e.jsx(l,{label:"Filters",leadingIcon:"filter-outline"}),e.jsx(l,{label:"Category",trailingIcon:"chevron-down"}),e.jsx(l,{label:"Filters",dot:!0})]})}),e.jsx(a,{label:"leading image (bank or store logo)",children:e.jsxs(s,{children:[e.jsx(l,{label:"Amazon",leadingImage:o.brands.amazon}),e.jsx(l,{label:"Flipkart",leadingImage:o.brands.flipkart,state:"selected"})]})}),e.jsx(a,{label:"count on a filter chip",children:e.jsxs(s,{children:[e.jsx(l,{label:"Fuel",count:12,state:"selected"}),e.jsx(l,{label:"Travel",count:36})]})}),e.jsx(a,{label:"tab, default and selected, with count",children:e.jsxs(s,{children:[e.jsx(l,{label:"All",type:"tab",count:36,state:"selected"}),e.jsx(l,{label:"Shopping",type:"tab",count:12}),e.jsx(l,{label:"Travel",type:"tab"})]})}),e.jsx(a,{label:"toggle (switch + edit button)",children:e.jsxs(s,{children:[e.jsx(l,{label:"Eligibility",type:"toggle",onEditPress:()=>{}}),e.jsx(l,{label:"Eligibility",type:"toggle",state:"selected",onEditPress:()=>{}})]})})]})},r={render:()=>e.jsxs(c,{children:[e.jsx(a,{label:"default / selected / disabled (default type)",children:e.jsxs(s,{children:[e.jsx(l,{label:"Default"}),e.jsx(l,{label:"Selected",state:"selected"}),e.jsx(l,{label:"Disabled",state:"disabled"})]})}),e.jsx(a,{label:"disabled tab and toggle",children:e.jsxs(s,{children:[e.jsx(l,{label:"Disabled",type:"tab",state:"disabled"}),e.jsx(l,{label:"Disabled",type:"toggle",state:"disabled"})]})}),e.jsx(a,{label:"long label",children:e.jsx(l,{label:"HDFC Bank Millennia Credit Card lifetime free",size:32})}),e.jsx(a,{label:"amount label, Indian grouping",children:e.jsxs(s,{children:[e.jsx(l,{label:"₹10,000"}),e.jsx(l,{label:"₹1,00,000",state:"selected"}),e.jsx(l,{label:"₹10,00,000+"})]})}),e.jsx(a,{label:"large count",children:e.jsx(l,{label:"All cards",count:1250,type:"tab",state:"selected"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`size\` applies to default and toggle chips. The tab chip has fixed geometry and ignores it.'
      }
    }
  },
  render: () => <Stack>
      <Group label="default, sizes 20 / 24 / 28 / 32">
        <Wrap>{([20, 24, 28, 32] as const).map(s => <Live key={s} label={\`Size \${s}\`} size={s} />)}</Wrap>
      </Group>
      <Group label="default, selected">
        <Wrap>{([20, 24, 28, 32] as const).map(s => <Live key={s} label={\`Size \${s}\`} size={s} state="selected" />)}</Wrap>
      </Group>
      <Group label="leading icon / trailing icon / dot">
        <Wrap>
          <Live label="Filters" leadingIcon="filter-outline" />
          <Live label="Category" trailingIcon="chevron-down" />
          <Live label="Filters" dot />
        </Wrap>
      </Group>
      <Group label="leading image (bank or store logo)">
        <Wrap>
          <Live label="Amazon" leadingImage={images.brands.amazon} />
          <Live label="Flipkart" leadingImage={images.brands.flipkart} state="selected" />
        </Wrap>
      </Group>
      <Group label="count on a filter chip">
        <Wrap><Live label="Fuel" count={12} state="selected" /><Live label="Travel" count={36} /></Wrap>
      </Group>
      <Group label="tab, default and selected, with count">
        <Wrap><Live label="All" type="tab" count={36} state="selected" /><Live label="Shopping" type="tab" count={12} /><Live label="Travel" type="tab" /></Wrap>
      </Group>
      <Group label="toggle (switch + edit button)">
        <Wrap><Live label="Eligibility" type="toggle" onEditPress={() => {}} /><Live label="Eligibility" type="toggle" state="selected" onEditPress={() => {}} /></Wrap>
      </Group>
    </Stack>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Group label="default / selected / disabled (default type)">
        <Wrap><Live label="Default" /><Live label="Selected" state="selected" /><Live label="Disabled" state="disabled" /></Wrap>
      </Group>
      <Group label="disabled tab and toggle">
        <Wrap><Live label="Disabled" type="tab" state="disabled" /><Live label="Disabled" type="toggle" state="disabled" /></Wrap>
      </Group>
      <Group label="long label"><Live label="HDFC Bank Millennia Credit Card lifetime free" size={32} /></Group>
      <Group label="amount label, Indian grouping">
        <Wrap><Live label="₹10,000" /><Live label="₹1,00,000" state="selected" /><Live label="₹10,00,000+" /></Wrap>
      </Group>
      <Group label="large count"><Live label="All cards" count={1250} type="tab" state="selected" /></Group>
    </Stack>
}`,...r.parameters?.docs?.source}}};const I=["Playground","Variants","States"];export{i as Playground,r as States,n as Variants,I as __namedExportsOrder,C as default};
