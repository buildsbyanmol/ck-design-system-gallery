import{j as e,V as l,c as s,r as g,R as h}from"./iframe-BxRbKpJi.js";import{T as b}from"./TabPrimary-DpFvRF4Q.js";import{s as d,t as x}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const de={title:"Components/Tab bar/TabPrimary",component:b,tags:["autodocs","live"],parameters:{source:"src/molecules/TabPrimary.tsx",layout:"fullscreen",docs:{description:{component:"Page tabs: a horizontal scrolling row of pill tabs with optional count badges. Wraps the Chip atom in tab mode."}}},argTypes:{activeIndex:{control:{type:"number",min:0,max:5}}},args:{tabs:[{label:"All"},{label:"Cashback",count:12},{label:"Pending",count:3},{label:"Paid"}],activeIndex:0}},c=390;function t({children:a}){return e.jsx(h,{style:{...x.caption10Medium,color:s.text.secondary,paddingHorizontal:d[16],paddingTop:d[8]},children:a})}function n({tabs:a,initial:p=0}){const[m,u]=g.useState(p);return e.jsx(b,{tabs:a,activeIndex:m,onChange:u})}const r={render:a=>e.jsx(l,{style:{width:c,alignSelf:"center"},children:e.jsx(n,{tabs:a.tabs,initial:a.activeIndex},a.activeIndex)})},o={render:()=>e.jsxs(l,{style:{width:c,alignSelf:"center",backgroundColor:s.surface.sunken},children:[e.jsx(t,{children:"Without counts"}),e.jsx(n,{tabs:[{label:"Credit cards"},{label:"Shopping"},{label:"Travel"}]}),e.jsx(t,{children:"With counts"}),e.jsx(n,{tabs:[{label:"All",count:24},{label:"Confirmed",count:18},{label:"Pending",count:6}],initial:1}),e.jsx(t,{children:"Two tabs"}),e.jsx(n,{tabs:[{label:"Active"},{label:"Expired"}]})]})},i={parameters:{docs:{description:{story:"Selected and default are the only states. Ten tabs scroll sideways. A count of 0 and a count above 99 are not specified: open question for product (hide the badge at 0? cap at 99+?)."}}},render:()=>e.jsxs(l,{style:{width:c,alignSelf:"center",backgroundColor:s.surface.sunken},children:[e.jsx(t,{children:"Overflow: ten tabs scroll"}),e.jsx(n,{tabs:["Fashion","Electronics","Beauty","Travel","Food","Pharmacy","Mobile","Banking","Loans","Education"].map(a=>({label:a}))}),e.jsx(t,{children:"Long labels"}),e.jsx(n,{tabs:[{label:"HDFC Millennia Credit Card",count:2},{label:"SBI Cashback Credit Card"}]}),e.jsx(t,{children:"Large count"}),e.jsx(n,{tabs:[{label:"Earnings",count:1e5},{label:"Withdrawn"}]}),e.jsx(t,{children:"Selected on last tab"}),e.jsx(n,{tabs:[{label:"Amazon"},{label:"Flipkart"},{label:"Myntra"}],initial:2})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
