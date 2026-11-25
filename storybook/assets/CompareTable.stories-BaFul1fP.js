import{j as e,r as w,R as b,c as u,V as h,I as x}from"./iframe-EJmZd_T6.js";import{C as g}from"./CompareTable-Co5LlMMB.js";import{T as C}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import{B as j}from"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import{T as L}from"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./Icon-DYjHrDGy.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{S as f}from"./cards-Bc9fBrua.js";import{t as y,s as l,r as v}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./elevation-DG0ULmpQ.js";import"./index-AjmY8xRX.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./xml-DM9nBi9W.js";import"./tagVariants-C3ziFvwj.js";const I=390,S=({children:r})=>e.jsx(h,{style:{width:I,padding:l[16],gap:l[12]},children:r}),a=({children:r})=>e.jsx(b,{style:{...y.caption10Medium,color:u.text.tertiary},children:r});function n({i:r,tag:c}){const i=f[r];return e.jsxs(h,{style:{flex:1,padding:l[8],gap:l[6],alignItems:"center",justifyContent:"center"},children:[c?e.jsx(L,{label:c,tone:"success",size:"xxs"}):null,e.jsx(x,{source:i.cardImage,style:{width:l[80],aspectRatio:132/84,borderRadius:v.sm,backgroundColor:u.surface.sunken}}),e.jsx(C,{variant:"body12SemiBold",color:u.text.primary,numberOfLines:2,align:"center",children:i.name.replace(" Credit Card","")}),e.jsx(j,{label:"Apply",size:36,onPress:()=>{}})]})}const o=[{id:"joining",header:"Joining fee"},{id:"annual",header:"Annual fee"},{id:"reward",header:"Reward rate"},{id:"lounge",header:"Lounge visits"},{id:"cashback",header:"CashKaro reward"}],t=[{id:"regalia",hero:e.jsx(n,{i:0,tag:"Best match"}),values:["₹2,500","₹2,500","4 points per ₹150","12 a year","Upto ₹2,500"]},{id:"swiggy",hero:e.jsx(n,{i:1}),values:["Free","Free","X% on Swiggy","4 a year","Upto ₹1,200"]},{id:"sbi",hero:e.jsx(n,{i:2}),values:["₹999","₹999","5% online","–","Flat ₹2,000"]}];function s(r){const[c,i]=w.useState(r.selectedColumnId);return e.jsx(g,{...r,selectedColumnId:c,onSelectColumn:i})}const Le={title:"Components/Tables/CompareTable",component:g,tags:["autodocs","live"],decorators:[r=>e.jsx(S,{children:e.jsx(r,{})})],parameters:{source:"src/molecules/CompareTable.tsx",docs:{description:{component:"Cards as rows: a pinned hero column on the left and attribute columns that scroll sideways. Tap a header to select a column."}}},argTypes:{columns:{control:"object"},rows:{control:!1},cornerLabel:{control:"text"},selectedColumnId:{control:"select",options:[null,...o.map(r=>r.id)]},onSelectColumn:{control:!1}},args:{columns:o,rows:t,cornerLabel:"Compare cards",selectedColumnId:"annual",onSelectColumn:()=>{}}},m={render:r=>e.jsx(s,{...r})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"no selected column"}),e.jsx(s,{columns:o,rows:t,cornerLabel:"Compare cards",selectedColumnId:null}),e.jsx(a,{children:"selected column (tap a header to move it, tap again to clear)"}),e.jsx(s,{columns:o,rows:t,cornerLabel:"Compare cards",selectedColumnId:"reward"}),e.jsx(a,{children:"no corner label"}),e.jsx(s,{columns:o.slice(0,3),rows:t})]})},p={parameters:{docs:{description:{story:"Open question for product: the inner layout was inferred from the Figma cells, and the value cells are taller than the Figma 88 square because the row height follows the hero. A missing value shows a dash. A selected id that is not a column selects nothing. On web the sideways scroll uses the mouse wheel with shift, or a trackpad."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"1 card"}),e.jsx(s,{columns:o,rows:t.slice(0,1),cornerLabel:"Compare cards"}),e.jsx(a,{children:"missing values show a dash"}),e.jsx(s,{columns:o,rows:[{id:"short",hero:e.jsx(n,{i:3}),values:["₹500"]}],cornerLabel:"Compare cards"}),e.jsx(a,{children:"long values and ₹10,00,000"}),e.jsx(s,{columns:o.slice(0,2),rows:[{id:"big",hero:e.jsx(n,{i:4,tag:"Invite only"}),values:["₹0",`₹${1e6.toLocaleString("en-IN")} annual spend waives the fee`]}],cornerLabel:"Compare cards"}),e.jsx(a,{children:"no rows"}),e.jsx(s,{columns:o,rows:[],cornerLabel:"Compare cards"}),e.jsx(a,{children:"selected id not in columns"}),e.jsx(s,{columns:o,rows:t.slice(0,2),selectedColumnId:"nope"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
