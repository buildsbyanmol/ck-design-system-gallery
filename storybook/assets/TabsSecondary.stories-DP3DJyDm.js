import{j as e,V as d,r as h,R as g,c as u}from"./iframe-DK2xttIN.js";import{T as m}from"./TabsSecondary-B5LhQfcn.js";import{s as o,t as x}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const ce={title:"Components/Tab bar/TabsSecondary",component:m,tags:["autodocs","live"],parameters:{source:"src/molecules/TabsSecondary.tsx",layout:"fullscreen",docs:{description:{component:"Segment control: a pale-cobalt track with a white thumb that slides under the active segment. Equal-width segments, 2 to 4 recommended."}}},argTypes:{activeIndex:{control:{type:"number",min:0,max:3}}},args:{segments:[{label:"Cashback"},{label:"Rewards"}],activeIndex:0}};function a({children:t}){return e.jsx(g,{style:{...x.caption10Medium,color:u.text.secondary,marginTop:o[16],marginBottom:o[4]},children:t})}function n({segments:t,initial:c=0}){const[p,b]=h.useState(c);return e.jsx(m,{segments:t,activeIndex:p,onChange:b})}const l=({children:t})=>e.jsx(d,{style:{width:390,alignSelf:"center",padding:o[16]},children:t}),s={render:t=>e.jsx(l,{children:e.jsx(n,{segments:t.segments,initial:t.activeIndex},t.activeIndex)})},r={render:()=>e.jsxs(l,{children:[e.jsx(a,{children:"Two segments"}),e.jsx(n,{segments:[{label:"Cashback"},{label:"Rewards"}]}),e.jsx(a,{children:"Three segments"}),e.jsx(n,{segments:[{label:"Month"},{label:"Quarter"},{label:"Year"}],initial:1}),e.jsx(a,{children:"Four segments"}),e.jsx(n,{segments:[{label:"All"},{label:"Pending"},{label:"Paid"},{label:"Expired"}],initial:2}),e.jsx(a,{children:"With leading icon (shown on the active segment only)"}),e.jsx(n,{segments:[{label:"Filters",icon:"filter-outline"},{label:"History",icon:"clock-outline"}]})]})},i={parameters:{docs:{description:{story:"Active and inactive are the only states. There is no disabled state. Long labels are not truncated by the component: check on a 320 dp width before shipping a segment with more than about 12 characters. The thumb width comes from onLayout, so the first frame can show the thumb at 0 for one tick."}}},render:()=>e.jsxs(l,{children:[e.jsx(a,{children:"Long labels"}),e.jsx(n,{segments:[{label:"HDFC Millennia"},{label:"SBI Cashback"}]}),e.jsx(a,{children:"Rupee amounts in labels"}),e.jsx(n,{segments:[{label:"₹1,00,000"},{label:"₹25,000"},{label:"₹5,000"}]}),e.jsx(a,{children:"Last segment active"}),e.jsx(n,{segments:[{label:"Amazon"},{label:"Flipkart"},{label:"Myntra"}],initial:2})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Frame><Live key={args.activeIndex} segments={args.segments} initial={args.activeIndex} /></Frame>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Label>Two segments</Label>
      <Live segments={[{
      label: 'Cashback'
    }, {
      label: 'Rewards'
    }]} />
      <Label>Three segments</Label>
      <Live segments={[{
      label: 'Month'
    }, {
      label: 'Quarter'
    }, {
      label: 'Year'
    }]} initial={1} />
      <Label>Four segments</Label>
      <Live segments={[{
      label: 'All'
    }, {
      label: 'Pending'
    }, {
      label: 'Paid'
    }, {
      label: 'Expired'
    }]} initial={2} />
      <Label>With leading icon (shown on the active segment only)</Label>
      <Live segments={[{
      label: 'Filters',
      icon: 'filter-outline'
    }, {
      label: 'History',
      icon: 'clock-outline'
    }]} />
    </Frame>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Active and inactive are the only states. There is no disabled state. Long labels are not truncated by the component: check on a 320 dp width before shipping a segment with more than about 12 characters. The thumb width comes from onLayout, so the first frame can show the thumb at 0 for one tick.'
      }
    }
  },
  render: () => <Frame>
      <Label>Long labels</Label>
      <Live segments={[{
      label: 'HDFC Millennia'
    }, {
      label: 'SBI Cashback'
    }]} />
      <Label>Rupee amounts in labels</Label>
      <Live segments={[{
      label: '₹1,00,000'
    }, {
      label: '₹25,000'
    }, {
      label: '₹5,000'
    }]} />
      <Label>Last segment active</Label>
      <Live segments={[{
      label: 'Amazon'
    }, {
      label: 'Flipkart'
    }, {
      label: 'Myntra'
    }]} initial={2} />
    </Frame>
}`,...i.parameters?.docs?.source}}};const pe=["Playground","Variants","States"];export{s as Playground,i as States,r as Variants,pe as __namedExportsOrder,ce as default};
