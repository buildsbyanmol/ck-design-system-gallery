import{j as e,V as o,c}from"./iframe-DK2xttIN.js";import{S as t}from"./Skeleton-D3i7Yl1l.js";import{S as l,B as r}from"./_chrome-iej18qaj.js";import{s as i,r as d}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./Icon-Do0hMSFa.js";import"./xml-VjBCu6Ra.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";const p=Object.keys(d),re={title:"Components/Loading/Skeleton",component:t,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/Skeleton.tsx",docs:{description:{component:"A generic pulsing block of any width, height and corner radius; the building piece for a loading layout."}}},argTypes:{width:{control:"text",description:'A number of px or a percentage string such as "60%".'},height:{control:{type:"number",min:4,max:200}},radius:{control:"select",options:p,description:"A key of the radius tokens."},tone:{control:"inline-radio",options:["default","onDark"],description:"onDark is a white block for dark surfaces."},style:{control:!1}},args:{width:240,height:16,radius:"sm",tone:"default"}},a={},s={render:()=>e.jsxs(l,{width:360,children:[e.jsx(r,{label:"radius: sm (default), lg, full",children:e.jsxs(o,{style:{flexDirection:"row",gap:i[12],paddingHorizontal:i[16]},children:[e.jsx(t,{width:96,height:32}),e.jsx(t,{width:96,height:32,radius:"lg"}),e.jsx(t,{width:96,height:32,radius:"full"})]})}),e.jsx(r,{label:"tone: onDark (white block on a dark surface)",children:e.jsxs(o,{style:{marginHorizontal:i[16],padding:i[16],gap:i[8],borderRadius:d.lg,backgroundColor:c.surface.dark},children:[e.jsx(t,{tone:"onDark",width:160,height:24}),e.jsx(t,{tone:"onDark",width:"60%",height:12})]})}),e.jsx(r,{label:"A text block: one title line, two body lines",children:e.jsxs(o,{style:{gap:i[8],paddingHorizontal:i[16]},children:[e.jsx(t,{width:"55%",height:20}),e.jsx(t,{height:12}),e.jsx(t,{width:"80%",height:12})]})})]})},n={parameters:{docs:{description:{story:'The block has one state: pulsing. It carries accessibilityLabel "Loading". The pulse runs forever, so a screen must swap it out when data arrives.'}}},render:()=>e.jsxs(l,{width:360,children:[e.jsx(r,{label:"Percentage width (50%) in a 360 column",children:e.jsx(o,{style:{paddingHorizontal:i[16]},children:e.jsx(t,{width:"50%"})})}),e.jsx(r,{label:"Card-shaped block (full width, 96 high, radius lg)",children:e.jsx(o,{style:{paddingHorizontal:i[16]},children:e.jsx(t,{height:96,radius:"lg"})})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
