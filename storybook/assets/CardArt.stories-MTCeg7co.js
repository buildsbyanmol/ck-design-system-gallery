import{j as t,V as p}from"./iframe-BxRbKpJi.js";import{C as c,d,c as r}from"./CardArt-5-Oob9sL.js";import{S as o}from"./cards-Bc9fBrua.js";import{S as n,B as m}from"./_chrome-DBrYcJuA.js";import{s as i}from"./motion-C4NNgPp6.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mTzrbk.js";import"./SearchBar-D5vu8HTi.js";import"./xml-Bn01aVoN.js";import"./Text-Ck5O8Bhy.js";import"./StepIndicator-QGdoZiTE.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-CiGE1IyU.js";import"./index-DCss3D-b.js";import"./Icon-D2-s9TUf.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-BRiwRPSP.js";import"./MaskedView.web-DXs-dcNS.js";import"./GradientText-DggIsGMv.js";import"./Button-DVRCyaXo.js";import"./haptics-CPhAe_fn.js";import"./index-DEPmHYsu.js";import"./Input-BFP__vmY.js";import"./TextArea-DDj-No3r.js";import"./OtpBox-C-y7Po7f.js";import"./OtpInput-CmjSyeXa.js";import"./Tag-DgIRey8C.js";import"./tagVariants-CS75JYCB.js";import"./CashbackBadge-MBJ6k9Zu.js";import"./Badge-BJ3sF1gK.js";import"./StatusBadge-m4NZRdxB.js";import"./StatDelta-CA75HUTp.js";import"./RankBadge-dLW9AnxB.js";import"./Chip-CIMK_bj9.js";import"./Switch-Cm9zr9Tl.js";import"./Selector-DG4-S17T.js";import"./Checkbox-CnlKQ7TS.js";import"./Radio-DXjJUXd2.js";import"./Divider-Cssvbwpj.js";import"./DividerVertical-CkB6P4XI.js";import"./Timer-DHWrzDra.js";import"./CashbackTag-DeTcLCLT.js";import"./DateSelection-DNs7GY5A.js";import"./MonthSelector-CU5sud-v.js";import"./Rating-CymuZ3ks.js";import"./CardTypeTag-DPAGmYpU.js";import"./WalletTag-Bb9F1J0X.js";import"./NumberBadge-DFB4ZAhG.js";import"./TestimonialSavingsTag-BU0M2Wcl.js";import"./useScreenFocused-B8TJihc3.js";import"./with-selector-BmPKclR2.js";import"./CardTile-B5yCU4Zu.js";import"./PartnerCard-DIzckGY3.js";import"./GainBand-Dzg8_3xz.js";import"./CompareCard-B_lKF5nT.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-Ba3cWrBc.js";import"./AmountInput-Cng5t5kS.js";import"./amountInput-DaOLtk6i.js";import"./BarBreakdown-BQ5JLUA5.js";import"./StackedBar-DrIlUKGr.js";import"./FilterRow-DGfJ2_zv.js";import"./CategoryCircle-Tr6Y7Ea8.js";import"./Choice-COONpkwL.js";import"./TermsAndConditions-4C782wYm.js";import"./TabPrimary-DpFvRF4Q.js";import"./TabsSecondary-CnD1gU3U.js";import"./ListRow-BcUcxFnw.js";import"./Tooltip-LcYOE9Ky.js";import"./Accordion-C6RDgGwj.js";import"./Toast-cSX7M2TK.js";import"./InlineMessage-B-yUy7QX.js";import"./StripAlert-dlh5xzCN.js";import"./CardFeeStrip-DyfK0gUv.js";import"./BrandLogo-fhcJ2xNs.js";import"./AmountActionRow-C-7iP3Zj.js";import"./DiscBulletList-CE50HxqV.js";import"./HelpTicketCard-bgN_6ONZ.js";import"./TrackMoreBanner-BPpA1Jaq.js";import"./PaymentRecordCard-OzKu3YE_.js";import"./ReviewCard-BBxLsZtd.js";import"./OfflineBanner-CSlN1bHS.js";import"./BreakdownTable-CuqOn1js.js";import"./SpendCard-jj5nrr3A.js";import"./PodiumCompare-C3ASTjOl.js";import"./BigAmountCard-Dw5K3zhx.js";import"./CompareTable-vvkbphr3.js";import"./Stepper-ATItk0Xz.js";import"./InlineFilterQuestion-CeljCFeZ.js";import"./LeagueCardRow-Cw5WpYKg.js";import"./cardTools-a-yZH8gZ.js";const Qt={title:"Components/Media/CardArt",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/organisms/CardArt.tsx",docs:{description:{component:"The credit card picture on its own: rounded clip, specular glare and a gyro tilt with a tilt-tracking shadow."}}},argTypes:{card:{control:!1},width:{control:{type:"number",min:80,max:340},description:`Default ${d}.`},height:{control:{type:"number",min:50,max:213},description:`Default ${c}.`},tilt:{control:"boolean",description:"Listens to the accelerometer. Stories keep it false: a browser has no sensor and may prompt."},tiltSuppress:{control:!1}},args:{card:o[0],tilt:!1}},e={},a={parameters:{docs:{description:{story:"All five SAMPLE_CARDS at the default size, tilt off."}}},render:()=>t.jsx(n,{width:480,children:t.jsx(m,{label:"Sample cards, tilt={false}",children:t.jsx(p,{style:{flexDirection:"row",flexWrap:"wrap",gap:i[16],paddingHorizontal:i[16]},children:o.map(l=>t.jsx(r,{card:l,tilt:!1},l.id))})})})},s={parameters:{docs:{description:{story:"Local art paints at once (no skeleton). The slate skeleton and fade-in only show for remote card URLs. Tilt needs a phone sensor, so it is not shown."}}},render:()=>t.jsxs(n,{width:480,children:[t.jsx(m,{label:"Default 204 by 127.5",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[4],tilt:!1})})}),t.jsx(m,{label:"Thumbnail 88 by 56 (132:84 ratio, as in rows)",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[1],width:88,height:56,tilt:!1})})}),t.jsx(m,{label:"Large 320 by 200",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[2],width:320,height:200,tilt:!1})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All five SAMPLE_CARDS at the default size, tilt off.'
      }
    }
  },
  render: () => <Stack width={480}>
      <Block label="Sample cards, tilt={false}">
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing[16],
        paddingHorizontal: spacing[16]
      }}>
          {SAMPLE_CARDS.map(c => <CardArt key={c.id} card={c} tilt={false} />)}
        </View>
      </Block>
    </Stack>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Local art paints at once (no skeleton). The slate skeleton and fade-in only show for remote card URLs. Tilt needs a phone sensor, so it is not shown.'
      }
    }
  },
  render: () => <Stack width={480}>
      <Block label="Default 204 by 127.5"><View style={{
        paddingHorizontal: spacing[16]
      }}><CardArt card={SAMPLE_CARDS[4]} tilt={false} /></View></Block>
      <Block label="Thumbnail 88 by 56 (132:84 ratio, as in rows)"><View style={{
        paddingHorizontal: spacing[16]
      }}><CardArt card={SAMPLE_CARDS[1]} width={88} height={56} tilt={false} /></View></Block>
      <Block label="Large 320 by 200"><View style={{
        paddingHorizontal: spacing[16]
      }}><CardArt card={SAMPLE_CARDS[2]} width={320} height={200} tilt={false} /></View></Block>
    </Stack>
}`,...s.parameters?.docs?.source}}};const Xt=["Playground","Variants","States"];export{e as Playground,s as States,a as Variants,Xt as __namedExportsOrder,Qt as default};
