import{j as t,V as p}from"./iframe-DK2xttIN.js";import{C as c,d,c as r}from"./CardArt-B2_Yn6Bs.js";import{S as o}from"./cards-Bc9fBrua.js";import{S as n,B as m}from"./_chrome-iej18qaj.js";import{s as i}from"./motion-q_NUJArm.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-CErKe_YJ.js";import"./SearchBar-CE3pl0W6.js";import"./xml-VjBCu6Ra.js";import"./Text-Czhgaopg.js";import"./StepIndicator-ysgTNStF.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-D3i7Yl1l.js";import"./index-DCss3D-b.js";import"./Icon-Do0hMSFa.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-CqOyFvtd.js";import"./MaskedView.web-Dt2qNyJt.js";import"./GradientText-B3Jj38N9.js";import"./Button-CAf0Zm_X.js";import"./haptics-CV4QS1hG.js";import"./index-mJl4hEuB.js";import"./Input-Ilvy30LJ.js";import"./TextArea-DZzTx5uu.js";import"./OtpBox-aTn2cWxA.js";import"./OtpInput-ULhMVoH4.js";import"./Tag-xKc7zVYR.js";import"./tagVariants-BxEvvwJ1.js";import"./CashbackBadge-TtrT4u-G.js";import"./Badge-DMeyi0IZ.js";import"./StatusBadge-BkCHJVUF.js";import"./StatDelta-Csrnc226.js";import"./RankBadge-Gf3P_Uus.js";import"./Chip-BuxZxqKh.js";import"./Switch-DOYMAAVN.js";import"./Selector-K1IhomI7.js";import"./Checkbox-B3nHO5CU.js";import"./Radio-MUBifCiY.js";import"./Divider-Do8BLk1v.js";import"./DividerVertical-LngDeDDK.js";import"./Timer-DZGFQvSc.js";import"./CashbackTag-BLJmrLGx.js";import"./DateSelection-C_lOAu1S.js";import"./MonthSelector-BkypxRCX.js";import"./Rating-nleHKv-e.js";import"./CardTypeTag-PT_ScmsN.js";import"./WalletTag-CnXf5Rp2.js";import"./NumberBadge-D2b2o02Z.js";import"./TestimonialSavingsTag-DGdhoMWw.js";import"./useScreenFocused-CQUqApbV.js";import"./with-selector-CpCbjLFO.js";import"./CardTile-BTfStbVG.js";import"./PartnerCard-Ny9V1xMi.js";import"./GainBand-BMDMIDTL.js";import"./CompareCard-wUfR8vjN.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-CNAq6MQP.js";import"./AmountInput-vuFcXfX6.js";import"./amountInput-BIBzs3v3.js";import"./BarBreakdown-Ov1ar3LP.js";import"./StackedBar-B7RTqn76.js";import"./FilterRow-C9655B76.js";import"./CategoryCircle-Cc2y7IyX.js";import"./Choice-D0RjL1kD.js";import"./TermsAndConditions-CMMlVp8j.js";import"./TabPrimary-DTfPGRdz.js";import"./TabsSecondary-B5LhQfcn.js";import"./ListRow-BQc2dCdC.js";import"./Tooltip-DuDw3JkL.js";import"./Accordion-D2Xjx4kK.js";import"./Toast-D7ijkSGP.js";import"./InlineMessage-BdiJ76-B.js";import"./StripAlert-CKclIk9-.js";import"./CardFeeStrip-2hPpjNsb.js";import"./BrandLogo-C4MMBo3z.js";import"./AmountActionRow-_blb5WB4.js";import"./DiscBulletList-B7UugVnF.js";import"./HelpTicketCard-i6-ScK9N.js";import"./TrackMoreBanner-CQAIHlZY.js";import"./PaymentRecordCard-BSnxSZ7y.js";import"./ReviewCard-BctNynsZ.js";import"./HeroVideo-7QpzFDox.js";import"./OfflineBanner-EbZibXrO.js";import"./BreakdownTable-kiMM81G4.js";import"./SpendCard-Dymb1Hdj.js";import"./PodiumCompare-nloRnlEo.js";import"./BigAmountCard-Cp6wv979.js";import"./CompareTable-FFjCxkRv.js";import"./Stepper-CpESk6gy.js";import"./InlineFilterQuestion-D9B3Khl_.js";import"./LeagueCardRow-iBF4GEM-.js";import"./cardTools-Ct3zlgT2.js";const Xt={title:"Components/Media/CardArt",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/organisms/CardArt.tsx",docs:{description:{component:"The credit card picture on its own: rounded clip, specular glare and a gyro tilt with a tilt-tracking shadow."}}},argTypes:{card:{control:!1},width:{control:{type:"number",min:80,max:340},description:`Default ${d}.`},height:{control:{type:"number",min:50,max:213},description:`Default ${c}.`},tilt:{control:"boolean",description:"Listens to the accelerometer. Stories keep it false: a browser has no sensor and may prompt."},tiltSuppress:{control:!1}},args:{card:o[0],tilt:!1}},e={},a={parameters:{docs:{description:{story:"All five SAMPLE_CARDS at the default size, tilt off."}}},render:()=>t.jsx(n,{width:480,children:t.jsx(m,{label:"Sample cards, tilt={false}",children:t.jsx(p,{style:{flexDirection:"row",flexWrap:"wrap",gap:i[16],paddingHorizontal:i[16]},children:o.map(l=>t.jsx(r,{card:l,tilt:!1},l.id))})})})},s={parameters:{docs:{description:{story:"Local art paints at once (no skeleton). The slate skeleton and fade-in only show for remote card URLs. Tilt needs a phone sensor, so it is not shown."}}},render:()=>t.jsxs(n,{width:480,children:[t.jsx(m,{label:"Default 204 by 127.5",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[4],tilt:!1})})}),t.jsx(m,{label:"Thumbnail 88 by 56 (132:84 ratio, as in rows)",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[1],width:88,height:56,tilt:!1})})}),t.jsx(m,{label:"Large 320 by 200",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[2],width:320,height:200,tilt:!1})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Yt=["Playground","Variants","States"];export{e as Playground,s as States,a as Variants,Yt as __namedExportsOrder,Xt as default};
