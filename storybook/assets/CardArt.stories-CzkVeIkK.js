import{j as t,V as p}from"./iframe-EJmZd_T6.js";import{C as c,d,c as r}from"./CardArt--XYYiUYn.js";import{S as o}from"./cards-Bc9fBrua.js";import{S as n,B as m}from"./_chrome-B1UVqLGg.js";import{s as i}from"./motion-CMqo2j38.js";import"./preload-helper-Zf8nSx-t.js";import"./LinearGradient-D-mm0dto.js";import"./SearchBar-BJVDBR6A.js";import"./xml-DM9nBi9W.js";import"./Text-CwaPBD6t.js";import"./StepIndicator-Cre4iz30.js";import"./opacity-rEjPgtwf.js";import"./Skeleton-FGxaOzMx.js";import"./index-DCss3D-b.js";import"./Icon-DYjHrDGy.js";import"./gradients-Yoe7k8Uk.js";import"./RollingAmount-DrOCtiOz.js";import"./MaskedView.web-BBIMN0VS.js";import"./GradientText-AAKTHPSy.js";import"./Button-DYQYKJ2f.js";import"./haptics-BkmE1-bM.js";import"./index-AjmY8xRX.js";import"./Input-DiY7GBOZ.js";import"./TextArea-Dyi4TGxF.js";import"./OtpBox-BoL7EBu7.js";import"./OtpInput-DLN2T6Wg.js";import"./Tag-eTd14hOz.js";import"./tagVariants-C3ziFvwj.js";import"./CashbackBadge-DgGOnUyv.js";import"./Badge-BVe_Pgl3.js";import"./StatusBadge-BQj0XQr3.js";import"./StatDelta-bHEPwtpG.js";import"./RankBadge-B-OkX9gr.js";import"./Chip-D4s-O_rw.js";import"./Switch-C1TNQ11F.js";import"./Selector-BlyoHc9F.js";import"./Checkbox-D50iCNYc.js";import"./Radio-Unpl077r.js";import"./Divider-u-AyCyj_.js";import"./DividerVertical-DXNsbtmg.js";import"./Timer-C9mmxMq4.js";import"./CashbackTag-fbeXyv4Z.js";import"./DateSelection-CZOE52iK.js";import"./MonthSelector-BHhEw5zw.js";import"./Rating-BAdRl2Vi.js";import"./CardTypeTag-q0BcU3Ga.js";import"./WalletTag-C6qBWWsm.js";import"./NumberBadge-DMcCLn1V.js";import"./TestimonialSavingsTag-BjfBNkDY.js";import"./useScreenFocused-DePVTc1C.js";import"./with-selector-HFsk6Txg.js";import"./CardTile-Bob45dXu.js";import"./PartnerCard-Cp1HSolV.js";import"./GainBand-By1tcNfV.js";import"./CompareCard-CxZ6DwhZ.js";import"./elevation-DG0ULmpQ.js";import"./RankedCardRow-DV4oa5uQ.js";import"./AmountInput-CBdvfY7-.js";import"./amountInput-rjKWAIpS.js";import"./BarBreakdown-Dao32HDG.js";import"./StackedBar-C3jKCjDJ.js";import"./FilterRow-CStVzmhk.js";import"./CategoryCircle-Bh_wNAa8.js";import"./Choice-B9jU3ag4.js";import"./TermsAndConditions-D-HQXJF_.js";import"./TabPrimary-CuFqQLjT.js";import"./TabsSecondary-md4bQCvO.js";import"./ListRow-D2H9PhpP.js";import"./Tooltip-BMClZOXq.js";import"./Accordion-EmkSn1a8.js";import"./Toast-HuIOiDYF.js";import"./InlineMessage-Hdq8xuDM.js";import"./StripAlert-BLrZOWat.js";import"./CardFeeStrip-CtjeB6LS.js";import"./BrandLogo-Cr22hXoS.js";import"./AmountActionRow-Cj6hdwYt.js";import"./DiscBulletList-Wfqt5xzY.js";import"./HelpTicketCard-3T8dLX7S.js";import"./TrackMoreBanner-Coq338cX.js";import"./PaymentRecordCard-Cf9JYD_t.js";import"./ReviewCard-HU6ntNT8.js";import"./OfflineBanner-WiNzkl1w.js";import"./BreakdownTable-MeGvsWWS.js";import"./SpendCard-B8G8IG8w.js";import"./PodiumCompare-CwSVDn2u.js";import"./BigAmountCard-DM9gMl4b.js";import"./CompareTable-Co5LlMMB.js";import"./Stepper-BRwdq6El.js";import"./InlineFilterQuestion-CbwMVMC4.js";import"./LeagueCardRow-BzeydE4N.js";import"./cardTools-a-yZH8gZ.js";const Qt={title:"Components/Media/CardArt",component:r,tags:["autodocs","live"],parameters:{layout:"centered",source:"src/organisms/CardArt.tsx",docs:{description:{component:"The credit card picture on its own: rounded clip, specular glare and a gyro tilt with a tilt-tracking shadow."}}},argTypes:{card:{control:!1},width:{control:{type:"number",min:80,max:340},description:`Default ${d}.`},height:{control:{type:"number",min:50,max:213},description:`Default ${c}.`},tilt:{control:"boolean",description:"Listens to the accelerometer. Stories keep it false: a browser has no sensor and may prompt."},tiltSuppress:{control:!1}},args:{card:o[0],tilt:!1}},e={},a={parameters:{docs:{description:{story:"All five SAMPLE_CARDS at the default size, tilt off."}}},render:()=>t.jsx(n,{width:480,children:t.jsx(m,{label:"Sample cards, tilt={false}",children:t.jsx(p,{style:{flexDirection:"row",flexWrap:"wrap",gap:i[16],paddingHorizontal:i[16]},children:o.map(l=>t.jsx(r,{card:l,tilt:!1},l.id))})})})},s={parameters:{docs:{description:{story:"Local art paints at once (no skeleton). The slate skeleton and fade-in only show for remote card URLs. Tilt needs a phone sensor, so it is not shown."}}},render:()=>t.jsxs(n,{width:480,children:[t.jsx(m,{label:"Default 204 by 127.5",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[4],tilt:!1})})}),t.jsx(m,{label:"Thumbnail 88 by 56 (132:84 ratio, as in rows)",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[1],width:88,height:56,tilt:!1})})}),t.jsx(m,{label:"Large 320 by 200",children:t.jsx(p,{style:{paddingHorizontal:i[16]},children:t.jsx(r,{card:o[2],width:320,height:200,tilt:!1})})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
