import{j as e,V as l,c as s,r as g,R as h}from"./iframe-DK2xttIN.js";import{T as b}from"./TabPrimary-DTfPGRdz.js";import{s as d,t as x}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const de={title:"Components/Tab bar/TabPrimary",component:b,tags:["autodocs","live"],parameters:{source:"src/molecules/TabPrimary.tsx",layout:"fullscreen",docs:{description:{component:"Page tabs: a horizontal scrolling row of pill tabs with optional count badges. Wraps the Chip atom in tab mode."}}},argTypes:{activeIndex:{control:{type:"number",min:0,max:5}}},args:{tabs:[{label:"All"},{label:"Cashback",count:12},{label:"Pending",count:3},{label:"Paid"}],activeIndex:0}},c=390;function t({children:a}){return e.jsx(h,{style:{...x.caption10Medium,color:s.text.secondary,paddingHorizontal:d[16],paddingTop:d[8]},children:a})}function n({tabs:a,initial:p=0}){const[m,u]=g.useState(p);return e.jsx(b,{tabs:a,activeIndex:m,onChange:u})}const r={render:a=>e.jsx(l,{style:{width:c,alignSelf:"center"},children:e.jsx(n,{tabs:a.tabs,initial:a.activeIndex},a.activeIndex)})},o={render:()=>e.jsxs(l,{style:{width:c,alignSelf:"center",backgroundColor:s.surface.sunken},children:[e.jsx(t,{children:"Without counts"}),e.jsx(n,{tabs:[{label:"Credit cards"},{label:"Shopping"},{label:"Travel"}]}),e.jsx(t,{children:"With counts"}),e.jsx(n,{tabs:[{label:"All",count:24},{label:"Confirmed",count:18},{label:"Pending",count:6}],initial:1}),e.jsx(t,{children:"Two tabs"}),e.jsx(n,{tabs:[{label:"Active"},{label:"Expired"}]})]})},i={parameters:{docs:{description:{story:"Selected and default are the only states. Ten tabs scroll sideways. A count of 0 and a count above 99 are not specified: open question for product (hide the badge at 0? cap at 99+?)."}}},render:()=>e.jsxs(l,{style:{width:c,alignSelf:"center",backgroundColor:s.surface.sunken},children:[e.jsx(t,{children:"Overflow: ten tabs scroll"}),e.jsx(n,{tabs:["Fashion","Electronics","Beauty","Travel","Food","Pharmacy","Mobile","Banking","Loans","Education"].map(a=>({label:a}))}),e.jsx(t,{children:"Long labels"}),e.jsx(n,{tabs:[{label:"HDFC Millennia Credit Card",count:2},{label:"SBI Cashback Credit Card"}]}),e.jsx(t,{children:"Large count"}),e.jsx(n,{tabs:[{label:"Earnings",count:1e5},{label:"Withdrawn"}]}),e.jsx(t,{children:"Selected on last tab"}),e.jsx(n,{tabs:[{label:"Amazon"},{label:"Flipkart"},{label:"Myntra"}],initial:2})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    width: W,
    alignSelf: 'center'
  }}><Live key={args.activeIndex} tabs={args.tabs} initial={args.activeIndex} /></View>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    width: W,
    alignSelf: 'center',
    backgroundColor: colors.surface.sunken
  }}>
      <Label>Without counts</Label>
      <Live tabs={[{
      label: 'Credit cards'
    }, {
      label: 'Shopping'
    }, {
      label: 'Travel'
    }]} />
      <Label>With counts</Label>
      <Live tabs={[{
      label: 'All',
      count: 24
    }, {
      label: 'Confirmed',
      count: 18
    }, {
      label: 'Pending',
      count: 6
    }]} initial={1} />
      <Label>Two tabs</Label>
      <Live tabs={[{
      label: 'Active'
    }, {
      label: 'Expired'
    }]} />
    </View>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Selected and default are the only states. Ten tabs scroll sideways. A count of 0 and a count above 99 are not specified: open question for product (hide the badge at 0? cap at 99+?).'
      }
    }
  },
  render: () => <View style={{
    width: W,
    alignSelf: 'center',
    backgroundColor: colors.surface.sunken
  }}>
      <Label>Overflow: ten tabs scroll</Label>
      <Live tabs={['Fashion', 'Electronics', 'Beauty', 'Travel', 'Food', 'Pharmacy', 'Mobile', 'Banking', 'Loans', 'Education'].map(label => ({
      label
    }))} />
      <Label>Long labels</Label>
      <Live tabs={[{
      label: 'HDFC Millennia Credit Card',
      count: 2
    }, {
      label: 'SBI Cashback Credit Card'
    }]} />
      <Label>Large count</Label>
      <Live tabs={[{
      label: 'Earnings',
      count: 100000
    }, {
      label: 'Withdrawn'
    }]} />
      <Label>Selected on last tab</Label>
      <Live tabs={[{
      label: 'Amazon'
    }, {
      label: 'Flipkart'
    }, {
      label: 'Myntra'
    }]} initial={2} />
    </View>
}`,...i.parameters?.docs?.source}}};const be=["Playground","Variants","States"];export{r as Playground,i as States,o as Variants,be as __namedExportsOrder,de as default};
