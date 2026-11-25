import{j as e,r as w,R as b,c as u,V as h,I as x}from"./iframe-BxRbKpJi.js";import{C as g}from"./CompareTable-vvkbphr3.js";import{T as C}from"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./RollingAmount-BRiwRPSP.js";import"./GradientText-DggIsGMv.js";import{B as j}from"./Button-DVRCyaXo.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import{T as L}from"./Tag-DgIRey8C.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Skeleton-CiGE1IyU.js";import"./Chip-CIMK_bj9.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Switch-Cm9zr9Tl.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./Icon-D2-s9TUf.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import{S as f}from"./cards-Bc9fBrua.js";import{t as y,s as l,r as v}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./elevation-DG0ULmpQ.js";import"./index-DEPmHYsu.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-DXs-dcNS.js";import"./haptics-CPhAe_fn.js";import"./xml-Bn01aVoN.js";import"./tagVariants-CS75JYCB.js";const I=390,S=({children:r})=>e.jsx(h,{style:{width:I,padding:l[16],gap:l[12]},children:r}),a=({children:r})=>e.jsx(b,{style:{...y.caption10Medium,color:u.text.tertiary},children:r});function n({i:r,tag:c}){const i=f[r];return e.jsxs(h,{style:{flex:1,padding:l[8],gap:l[6],alignItems:"center",justifyContent:"center"},children:[c?e.jsx(L,{label:c,tone:"success",size:"xxs"}):null,e.jsx(x,{source:i.cardImage,style:{width:l[80],aspectRatio:132/84,borderRadius:v.sm,backgroundColor:u.surface.sunken}}),e.jsx(C,{variant:"body12SemiBold",color:u.text.primary,numberOfLines:2,align:"center",children:i.name.replace(" Credit Card","")}),e.jsx(j,{label:"Apply",size:36,onPress:()=>{}})]})}const o=[{id:"joining",header:"Joining fee"},{id:"annual",header:"Annual fee"},{id:"reward",header:"Reward rate"},{id:"lounge",header:"Lounge visits"},{id:"cashback",header:"CashKaro reward"}],t=[{id:"regalia",hero:e.jsx(n,{i:0,tag:"Best match"}),values:["₹2,500","₹2,500","4 points per ₹150","12 a year","Upto ₹2,500"]},{id:"swiggy",hero:e.jsx(n,{i:1}),values:["Free","Free","X% on Swiggy","4 a year","Upto ₹1,200"]},{id:"sbi",hero:e.jsx(n,{i:2}),values:["₹999","₹999","5% online","–","Flat ₹2,000"]}];function s(r){const[c,i]=w.useState(r.selectedColumnId);return e.jsx(g,{...r,selectedColumnId:c,onSelectColumn:i})}const Le={title:"Components/Tables/CompareTable",component:g,tags:["autodocs","live"],decorators:[r=>e.jsx(S,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/CompareTable.tsx",docs:{description:{component:"Cards as rows: a pinned hero column on the left and attribute columns that scroll sideways. Tap a header to select a column."}}},argTypes:{columns:{control:"object"},rows:{control:!1},cornerLabel:{control:"text"},selectedColumnId:{control:"select",options:[null,...o.map(r=>r.id)]},onSelectColumn:{control:!1}},args:{columns:o,rows:t,cornerLabel:"Compare cards",selectedColumnId:"annual",onSelectColumn:()=>{}}},m={render:r=>e.jsx(s,{...r})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"no selected column"}),e.jsx(s,{columns:o,rows:t,cornerLabel:"Compare cards",selectedColumnId:null}),e.jsx(a,{children:"selected column (tap a header to move it, tap again to clear)"}),e.jsx(s,{columns:o,rows:t,cornerLabel:"Compare cards",selectedColumnId:"reward"}),e.jsx(a,{children:"no corner label"}),e.jsx(s,{columns:o.slice(0,3),rows:t})]})},p={parameters:{docs:{description:{story:"Open question for product: the inner layout was inferred from the Figma cells, and the value cells are taller than the Figma 88 square because the row height follows the hero. A missing value shows a dash. A selected id that is not a column selects nothing. On web the sideways scroll uses the mouse wheel with shift, or a trackpad."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"1 card"}),e.jsx(s,{columns:o,rows:t.slice(0,1),cornerLabel:"Compare cards"}),e.jsx(a,{children:"missing values show a dash"}),e.jsx(s,{columns:o,rows:[{id:"short",hero:e.jsx(n,{i:3}),values:["₹500"]}],cornerLabel:"Compare cards"}),e.jsx(a,{children:"long values and ₹10,00,000"}),e.jsx(s,{columns:o.slice(0,2),rows:[{id:"big",hero:e.jsx(n,{i:4,tag:"Invite only"}),values:["₹0",`₹${1e6.toLocaleString("en-IN")} annual spend waives the fee`]}],cornerLabel:"Compare cards"}),e.jsx(a,{children:"no rows"}),e.jsx(s,{columns:o,rows:[],cornerLabel:"Compare cards"}),e.jsx(a,{children:"selected id not in columns"}),e.jsx(s,{columns:o,rows:t.slice(0,2),selectedColumnId:"nope"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Label>no selected column</Label>
      <Controlled columns={columns} rows={rows} cornerLabel="Compare cards" selectedColumnId={null} />
      <Label>selected column (tap a header to move it, tap again to clear)</Label>
      <Controlled columns={columns} rows={rows} cornerLabel="Compare cards" selectedColumnId="reward" />
      <Label>no corner label</Label>
      <Controlled columns={columns.slice(0, 3)} rows={rows} />
    </>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open question for product: the inner layout was inferred from the Figma cells, and the value cells are taller than the Figma 88 square because the row height follows the hero. A missing value shows a dash. A selected id that is not a column selects nothing. On web the sideways scroll uses the mouse wheel with shift, or a trackpad.'
      }
    }
  },
  render: () => <>
      <Label>1 card</Label>
      <Controlled columns={columns} rows={rows.slice(0, 1)} cornerLabel="Compare cards" />
      <Label>missing values show a dash</Label>
      <Controlled columns={columns} rows={[{
      id: 'short',
      hero: <Hero i={3} />,
      values: ['₹500']
    }]} cornerLabel="Compare cards" />
      <Label>long values and ₹10,00,000</Label>
      <Controlled columns={columns.slice(0, 2)} rows={[{
      id: 'big',
      hero: <Hero i={4} tag="Invite only" />,
      values: ['₹0', \`₹\${1000000 .toLocaleString('en-IN')} annual spend waives the fee\`]
    }]} cornerLabel="Compare cards" />
      <Label>no rows</Label>
      <Controlled columns={columns} rows={[]} cornerLabel="Compare cards" />
      <Label>selected id not in columns</Label>
      <Controlled columns={columns} rows={rows.slice(0, 2)} selectedColumnId="nope" />
    </>
}`,...p.parameters?.docs?.source}}};const fe=["Playground","Variants","States"];export{m as Playground,p as States,d as Variants,fe as __namedExportsOrder,Le as default};
