import{j as e,V as c,c as n,R as p}from"./iframe-EJmZd_T6.js";import{M as a}from"./MissingCashbackMasthead-B4pHXA-a.js";import{s as d,t as m}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./index-DCss3D-b.js";import"./elevation-DG0ULmpQ.js";import"./haptics-BkmE1-bM.js";import"./index-DN9ObVR-.js";import"./index-AjmY8xRX.js";const C={title:"Components/Mastheads/MissingCashbackMasthead",component:a,tags:["autodocs","live"],parameters:{source:"src/organisms/MissingCashbackMasthead.tsx",layout:"fullscreen",docs:{description:{component:'Cobalt "Missing Cashback?" hero at the top of the help intake flow. One full-bleed image with the heading baked in, rounded bottom corners and a floating white back button.'}}},args:{}},r=({children:i,label:h,width:l=390})=>e.jsxs(c,{style:{width:l,alignSelf:"center",marginBottom:d[16],backgroundColor:n.surface.sunken},children:[e.jsx(p,{style:{...m.caption10Medium,color:n.text.secondary,padding:d[8]},children:h}),i]}),s={render:i=>e.jsx(r,{label:"Default",children:e.jsx(a,{...i})})},t={parameters:{docs:{description:{story:"One variant only. The hero keeps its 360 by 268 ratio at any width."}}},render:()=>e.jsxs(c,{children:[e.jsx(r,{label:"Width 390",children:e.jsx(a,{})}),e.jsx(r,{label:"Width 320",width:320,children:e.jsx(a,{})})]})},o={parameters:{docs:{description:{story:"No loading, error or disabled state. The heading is part of the image, so it cannot be localised or scaled with the OS font size. Open question for product: swap to live text before a second language ships? The safe-area top inset is 0 in Storybook, so the back button sits higher than on a notched phone."}}},render:()=>e.jsx(r,{label:"Default, back button tap does nothing",children:e.jsx(a,{onBack:()=>{}})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Frame label="Default"><MissingCashbackMasthead {...args} /></Frame>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One variant only. The hero keeps its 360 by 268 ratio at any width.'
      }
    }
  },
  render: () => <View>
      <Frame label="Width 390"><MissingCashbackMasthead /></Frame>
      <Frame label="Width 320" width={320}><MissingCashbackMasthead /></Frame>
    </View>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No loading, error or disabled state. The heading is part of the image, so it cannot be localised or scaled with the OS font size. Open question for product: swap to live text before a second language ships? The safe-area top inset is 0 in Storybook, so the back button sits higher than on a notched phone.'
      }
    }
  },
  render: () => <Frame label="Default, back button tap does nothing"><MissingCashbackMasthead onBack={() => {}} /></Frame>
}`,...o.parameters?.docs?.source}}};const S=["Playground","Variants","States"];export{s as Playground,o as States,t as Variants,S as __namedExportsOrder,C as default};
