import{j as e,V as o,c}from"./iframe-EJmZd_T6.js";import{S as t}from"./Skeleton-FGxaOzMx.js";import{S as l,B as r}from"./_chrome-B1UVqLGg.js";import{s as i,r as d}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./opacity-rEjPgtwf.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./Icon-DYjHrDGy.js";import"./xml-DM9nBi9W.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";const p=Object.keys(d),re={title:"Components/Loading/Skeleton",component:t,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/Skeleton.tsx",docs:{description:{component:"A generic pulsing block of any width, height and corner radius; the building piece for a loading layout."}}},argTypes:{width:{control:"text",description:'A number of px or a percentage string such as "60%".'},height:{control:{type:"number",min:4,max:200}},radius:{control:"select",options:p,description:"A key of the radius tokens."},tone:{control:"inline-radio",options:["default","onDark"],description:"onDark is a white block for dark surfaces."},style:{control:!1}},args:{width:240,height:16,radius:"sm",tone:"default"}},a={},s={render:()=>e.jsxs(l,{width:360,children:[e.jsx(r,{label:"radius: sm (default), lg, full",children:e.jsxs(o,{style:{flexDirection:"row",gap:i[12],paddingHorizontal:i[16]},children:[e.jsx(t,{width:96,height:32}),e.jsx(t,{width:96,height:32,radius:"lg"}),e.jsx(t,{width:96,height:32,radius:"full"})]})}),e.jsx(r,{label:"tone: onDark (white block on a dark surface)",children:e.jsxs(o,{style:{marginHorizontal:i[16],padding:i[16],gap:i[8],borderRadius:d.lg,backgroundColor:c.surface.dark},children:[e.jsx(t,{tone:"onDark",width:160,height:24}),e.jsx(t,{tone:"onDark",width:"60%",height:12})]})}),e.jsx(r,{label:"A text block: one title line, two body lines",children:e.jsxs(o,{style:{gap:i[8],paddingHorizontal:i[16]},children:[e.jsx(t,{width:"55%",height:20}),e.jsx(t,{height:12}),e.jsx(t,{width:"80%",height:12})]})})]})},n={parameters:{docs:{description:{story:'The block has one state: pulsing. It carries accessibilityLabel "Loading". The pulse runs forever, so a screen must swap it out when data arrives.'}}},render:()=>e.jsxs(l,{width:360,children:[e.jsx(r,{label:"Percentage width (50%) in a 360 column",children:e.jsx(o,{style:{paddingHorizontal:i[16]},children:e.jsx(t,{width:"50%"})})}),e.jsx(r,{label:"Card-shaped block (full width, 96 high, radius lg)",children:e.jsx(o,{style:{paddingHorizontal:i[16]},children:e.jsx(t,{height:96,radius:"lg"})})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
