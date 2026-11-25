import{c as i,j as e,V as s}from"./iframe-EJmZd_T6.js";import{a as p,I as t}from"./Icon-DYjHrDGy.js";import{T as g}from"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./RollingAmount-DrOCtiOz.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Skeleton-FGxaOzMx.js";import"./Chip-D4s-O_rw.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Switch-C1TNQ11F.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import{S as u,B as n}from"./_chrome-B1UVqLGg.js";import{i as a,s as r,b as h,r as f}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DM9nBi9W.js";import"./opacity-rEjPgtwf.js";import"./index-DCss3D-b.js";import"./LinearGradient-D-mm0dto.js";import"./gradients-Yoe7k8Uk.js";import"./MaskedView.web-BBIMN0VS.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./tagVariants-C3ziFvwj.js";const m=Object.values(a),le={title:"Components/Media/Icon",component:t,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/atoms/Icon.tsx",docs:{description:{component:"The one icon component: pick a name from the registry, a size from iconSize, and tint it with a colour token."}}},argTypes:{name:{control:"select",options:p},size:{control:"select",options:m,description:"Edge length. Default iconSize[20]."},color:{control:"color",description:"Tints outline and general icons only. nav-*, desc-* and raster icons keep their own colours."},style:{control:!1}},args:{name:"feat-rewards-outline",size:a[24],color:i.text.primary}},c={},l={parameters:{layout:"padded",docs:{description:{story:`All ${p.length} registered names. nav-* icons bake a white stroke for the dark tab bar, so they vanish on this light ground. desc-* and raster icons keep their own colours.`}}},render:()=>e.jsx(s,{style:{width:720,flexDirection:"row",flexWrap:"wrap",gap:r[8],padding:r[16]},children:p.map(o=>e.jsxs(s,{style:{width:104,alignItems:"center",gap:r[6],padding:r[8],borderRadius:f.md,borderWidth:h.thin,borderColor:i.border.default,backgroundColor:o.startsWith("nav-")?i.surface.dark:i.surface.default},children:[e.jsx(t,{name:o,size:a[24]}),e.jsx(g,{variant:"body12Regular",color:o.startsWith("nav-")?i.text.inverse:i.text.secondary,align:"center",numberOfLines:2,children:o})]},o))})},d={render:()=>e.jsxs(u,{width:420,children:[e.jsx(n,{label:"Sizes: iconSize 8 to 56",children:e.jsx(s,{style:{flexDirection:"row",alignItems:"flex-end",gap:r[16],paddingHorizontal:r[16]},children:m.map(o=>e.jsx(t,{name:"feat-rewards-outline",size:o},o))})}),e.jsx(n,{label:"Tint: text.primary, text.link, action.primary, feedback success",note:"the same outline icon, four colour tokens",children:e.jsx(s,{style:{flexDirection:"row",gap:r[16],paddingHorizontal:r[16]},children:[i.text.primary,i.text.link,i.action.primary.default,i.feedback.success.text].map(o=>e.jsx(t,{name:"check-circle-outline",size:a[32],color:o},o))})}),e.jsx(n,{label:"Baked colour: desc-* ignores the colour prop",note:"desc-paid, desc-pending, desc-cross tinted with action.primary, still their own colour",children:e.jsx(s,{style:{flexDirection:"row",gap:r[16],paddingHorizontal:r[16]},children:["desc-paid","desc-pending","desc-cross"].map(o=>e.jsx(t,{name:o,size:a[32],color:i.action.primary.default},o))})}),e.jsx(n,{label:"Raster: amazon, flipkart",note:"small PNG files, colour is baked",children:e.jsxs(s,{style:{flexDirection:"row",gap:r[16],paddingHorizontal:r[16]},children:[e.jsx(t,{name:"amazon",size:a[40]}),e.jsx(t,{name:"flipkart",size:a[40]})]})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: \`All \${ICON_NAMES.length} registered names. nav-* icons bake a white stroke for the dark tab bar, so they vanish on this light ground. desc-* and raster icons keep their own colours.\`
      }
    }
  },
  render: () => <View style={{
    width: 720,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[8],
    padding: spacing[16]
  }}>
      {ICON_NAMES.map(n => <View key={n} style={{
      width: 104,
      alignItems: 'center',
      gap: spacing[6],
      padding: spacing[8],
      borderRadius: radius.md,
      borderWidth: borderWidth.thin,
      borderColor: colors.border.default,
      backgroundColor: n.startsWith('nav-') ? colors.surface.dark : colors.surface.default
    }}>
          <Icon name={n} size={iconSize[24]} />
          <Text variant="body12Regular" color={n.startsWith('nav-') ? colors.text.inverse : colors.text.secondary} align="center" numberOfLines={2}>{n}</Text>
        </View>)}
    </View>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack width={420}>
      <Block label="Sizes: iconSize 8 to 56">
        <View style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: spacing[16],
        paddingHorizontal: spacing[16]
      }}>
          {SIZES.map(s => <Icon key={s} name="feat-rewards-outline" size={s} />)}
        </View>
      </Block>
      <Block label="Tint: text.primary, text.link, action.primary, feedback success" note="the same outline icon, four colour tokens">
        <View style={{
        flexDirection: 'row',
        gap: spacing[16],
        paddingHorizontal: spacing[16]
      }}>
          {[colors.text.primary, colors.text.link, colors.action.primary.default, colors.feedback.success.text].map(c => <Icon key={c} name="check-circle-outline" size={iconSize[32]} color={c} />)}
        </View>
      </Block>
      <Block label="Baked colour: desc-* ignores the colour prop" note="desc-paid, desc-pending, desc-cross tinted with action.primary, still their own colour">
        <View style={{
        flexDirection: 'row',
        gap: spacing[16],
        paddingHorizontal: spacing[16]
      }}>
          {(['desc-paid', 'desc-pending', 'desc-cross'] as const).map(n => <Icon key={n} name={n} size={iconSize[32]} color={colors.action.primary.default} />)}
        </View>
      </Block>
      <Block label="Raster: amazon, flipkart" note="small PNG files, colour is baked">
        <View style={{
        flexDirection: 'row',
        gap: spacing[16],
        paddingHorizontal: spacing[16]
      }}>
          <Icon name="amazon" size={iconSize[40]} /><Icon name="flipkart" size={iconSize[40]} />
        </View>
      </Block>
    </Stack>
}`,...d.parameters?.docs?.source}}};const de=["Playground","Variants","States"];export{c as Playground,d as States,l as Variants,de as __namedExportsOrder,le as default};
