import{j as e,V as o,c}from"./iframe-BxRbKpJi.js";import{S as t}from"./Skeleton-CiGE1IyU.js";import{S as l,B as r}from"./_chrome-DBrYcJuA.js";import{s as i,r as d}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mTzrbk.js";import"./Icon-D2-s9TUf.js";import"./xml-Bn01aVoN.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";const p=Object.keys(d),re={title:"Components/Loading/Skeleton",component:t,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/Skeleton.tsx",docs:{description:{component:"A generic pulsing block of any width, height and corner radius; the building piece for a loading layout."}}},argTypes:{width:{control:"text",description:'A number of px or a percentage string such as "60%".'},height:{control:{type:"number",min:4,max:200}},radius:{control:"select",options:p,description:"A key of the radius tokens."},tone:{control:"inline-radio",options:["default","onDark"],description:"onDark is a white block for dark surfaces."},style:{control:!1}},args:{width:240,height:16,radius:"sm",tone:"default"}},a={},s={render:()=>e.jsxs(l,{width:360,children:[e.jsx(r,{label:"radius: sm (default), lg, full",children:e.jsxs(o,{style:{flexDirection:"row",gap:i[12],paddingHorizontal:i[16]},children:[e.jsx(t,{width:96,height:32}),e.jsx(t,{width:96,height:32,radius:"lg"}),e.jsx(t,{width:96,height:32,radius:"full"})]})}),e.jsx(r,{label:"tone: onDark (white block on a dark surface)",children:e.jsxs(o,{style:{marginHorizontal:i[16],padding:i[16],gap:i[8],borderRadius:d.lg,backgroundColor:c.surface.dark},children:[e.jsx(t,{tone:"onDark",width:160,height:24}),e.jsx(t,{tone:"onDark",width:"60%",height:12})]})}),e.jsx(r,{label:"A text block: one title line, two body lines",children:e.jsxs(o,{style:{gap:i[8],paddingHorizontal:i[16]},children:[e.jsx(t,{width:"55%",height:20}),e.jsx(t,{height:12}),e.jsx(t,{width:"80%",height:12})]})})]})},n={parameters:{docs:{description:{story:'The block has one state: pulsing. It carries accessibilityLabel "Loading". The pulse runs forever, so a screen must swap it out when data arrives.'}}},render:()=>e.jsxs(l,{width:360,children:[e.jsx(r,{label:"Percentage width (50%) in a 360 column",children:e.jsx(o,{style:{paddingHorizontal:i[16]},children:e.jsx(t,{width:"50%"})})}),e.jsx(r,{label:"Card-shaped block (full width, 96 high, radius lg)",children:e.jsx(o,{style:{paddingHorizontal:i[16]},children:e.jsx(t,{height:96,radius:"lg"})})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={360}>
      <Block label="radius: sm (default), lg, full">
        <View style={{
        flexDirection: 'row',
        gap: spacing[12],
        paddingHorizontal: spacing[16]
      }}>
          <Skeleton width={96} height={32} />
          <Skeleton width={96} height={32} radius="lg" />
          <Skeleton width={96} height={32} radius="full" />
        </View>
      </Block>
      <Block label="tone: onDark (white block on a dark surface)">
        <View style={{
        marginHorizontal: spacing[16],
        padding: spacing[16],
        gap: spacing[8],
        borderRadius: radius.lg,
        backgroundColor: colors.surface.dark
      }}>
          <Skeleton tone="onDark" width={160} height={24} />
          <Skeleton tone="onDark" width="60%" height={12} />
        </View>
      </Block>
      <Block label="A text block: one title line, two body lines">
        <View style={{
        gap: spacing[8],
        paddingHorizontal: spacing[16]
      }}>
          <Skeleton width="55%" height={20} />
          <Skeleton height={12} />
          <Skeleton width="80%" height={12} />
        </View>
      </Block>
    </Stack>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The block has one state: pulsing. It carries accessibilityLabel "Loading". The pulse runs forever, so a screen must swap it out when data arrives.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label="Percentage width (50%) in a 360 column"><View style={{
        paddingHorizontal: spacing[16]
      }}><Skeleton width="50%" /></View></Block>
      <Block label="Card-shaped block (full width, 96 high, radius lg)"><View style={{
        paddingHorizontal: spacing[16]
      }}><Skeleton height={96} radius="lg" /></View></Block>
    </Stack>
}`,...n.parameters?.docs?.source}}};const ae=["Playground","Variants","States"];export{a as Playground,n as States,s as Variants,ae as __namedExportsOrder,re as default};
