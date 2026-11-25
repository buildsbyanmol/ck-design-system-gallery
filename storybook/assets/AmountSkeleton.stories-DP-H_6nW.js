import{j as e,V as t,c as l}from"./iframe-DK2xttIN.js";import{A as r}from"./StepIndicator-ysgTNStF.js";import{T as m}from"./Text-Czhgaopg.js";import"./RollingAmount-CqOyFvtd.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Skeleton-D3i7Yl1l.js";import"./Chip-BuxZxqKh.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Switch-DOYMAAVN.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./Icon-Do0hMSFa.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import{S as c,B as s,i as h}from"./_chrome-iej18qaj.js";import{s as o,r as g}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-CErKe_YJ.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-Dt2qNyJt.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./xml-VjBCu6Ra.js";import"./tagVariants-BxEvvwJ1.js";const se={title:"Components/Loading/AmountSkeleton",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/AmountSkeleton.tsx",docs:{description:{component:"A pulsing bar that stands in for a money amount while it loads, so a screen never shows a fake default value."}}},argTypes:{width:{control:"text",description:"Match the rough width of the amount. Default 88."},height:{control:{type:"number",min:8,max:64},description:"Match the text line height. Default 16."},tone:{control:"inline-radio",options:["default","onDark"],description:"onDark for a dark hero such as the Earnings masthead."},style:{control:!1}},args:{width:88,height:16,tone:"default"}},a={},i={render:()=>e.jsxs(c,{width:360,children:[e.jsx(s,{label:"Body amount (88 by 16, default)",children:e.jsx(t,{style:{paddingHorizontal:o[16]},children:e.jsx(r,{})})}),e.jsx(s,{label:"Display headline (160 by 40)",children:e.jsx(t,{style:{paddingHorizontal:o[16]},children:e.jsx(r,{width:160,height:40})})}),e.jsx(s,{label:"onDark, on a dark hero",children:e.jsx(t,{style:{marginHorizontal:o[16],padding:o[16],borderRadius:g.lg,backgroundColor:l.surface.dark},children:e.jsx(r,{tone:"onDark",width:160,height:40})})})]})},n={parameters:{docs:{description:{story:"Loading versus loaded: the loaded row shows the real figures. Pattern rule: no spinner on money values, and never a default ₹0 while loading."}}},render:()=>e.jsx(c,{width:360,children:e.jsx(s,{label:"Loading, then loaded",children:e.jsx(t,{style:{gap:o[12],paddingHorizontal:o[16]},children:[["Confirmed",8450],["Pending",0],["Lifetime",1e6]].map(([d,p])=>e.jsxs(t,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(m,{variant:"body14Regular",color:l.text.secondary,children:d}),e.jsxs(t,{style:{flexDirection:"row",alignItems:"center",gap:o[16]},children:[e.jsx(r,{width:72}),e.jsx(m,{variant:"body14SemiBold",color:l.text.primary,children:h(p)})]})]},d))})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={360}>
      <Block label="Body amount (88 by 16, default)"><View style={{
        paddingHorizontal: spacing[16]
      }}><AmountSkeleton /></View></Block>
      <Block label="Display headline (160 by 40)"><View style={{
        paddingHorizontal: spacing[16]
      }}><AmountSkeleton width={160} height={40} /></View></Block>
      <Block label="onDark, on a dark hero">
        <View style={{
        marginHorizontal: spacing[16],
        padding: spacing[16],
        borderRadius: radius.lg,
        backgroundColor: colors.surface.dark
      }}>
          <AmountSkeleton tone="onDark" width={160} height={40} />
        </View>
      </Block>
    </Stack>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Loading versus loaded: the loaded row shows the real figures. Pattern rule: no spinner on money values, and never a default ₹0 while loading.'
      }
    }
  },
  render: () => <Stack width={360}>
      <Block label="Loading, then loaded">
        <View style={{
        gap: spacing[12],
        paddingHorizontal: spacing[16]
      }}>
          {[['Confirmed', 8450], ['Pending', 0], ['Lifetime', 1000000]].map(([label, v]) => <View key={label as string} style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
              <Text variant="body14Regular" color={colors.text.secondary}>{label}</Text>
              <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: spacing[16]
          }}>
                <AmountSkeleton width={72} />
                <Text variant="body14SemiBold" color={colors.text.primary}>{inr(v as number)}</Text>
              </View>
            </View>)}
        </View>
      </Block>
    </Stack>
}`,...n.parameters?.docs?.source}}};const le=["Playground","Variants","States"];export{a as Playground,n as States,i as Variants,le as __namedExportsOrder,se as default};
