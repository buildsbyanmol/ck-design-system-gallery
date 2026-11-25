import{r as a,q as B,j as t,y as S,F as v,z as k,c as x,H as w,V as C}from"./iframe-DK2xttIN.js";import{r as d,s as E}from"./motion-q_NUJArm.js";import{B as T}from"./BottomSheetHeader-CiFr6Grc.js";import{B as R}from"./BottomSheetBody-CGsFws5T.js";import{p as u}from"./haptics-CV4QS1hG.js";import{F as j}from"./FooterButtons-BG6MbxZE.js";const F=E[96],I=360,O=a.forwardRef(function({title:n,showStroke:l,template:c,bodyProps:p,footer:o=!1,footerProps:s},h){const r=B(),f=a.useMemo(()=>["58%","96%"],[]),i=a.useRef(0),b=a.useCallback(e=>{const m=i.current;e>m&&e>0?u("sheetExpand"):e>=0&&e<m&&u("sheetCollapse"),i.current=e},[]),y=a.useCallback(e=>t.jsx(S,{...e,disappearsOnIndex:-1,appearsOnIndex:0,opacity:.5}),[]),g=a.useCallback(e=>!o||!s?null:t.jsx(v,{...e,bottomInset:0,children:t.jsx(j,{...s,style:{paddingBottom:r.bottom}})}),[o,s,r.bottom]);return t.jsx(k,{ref:h,snapPoints:f,onChange:b,enablePanDownToClose:!0,backdropComponent:y,footerComponent:o?g:void 0,handleComponent:()=>null,backgroundStyle:{backgroundColor:x.surface.default,borderTopLeftRadius:d["2xl"],borderTopRightRadius:d["2xl"]},children:t.jsxs(w,{contentContainerStyle:{paddingBottom:o?F:0,minHeight:I},showsVerticalScrollIndicator:!1,children:[n||l?t.jsx(T,{title:n,showStroke:l}):null,t.jsx(R,{template:c,...p}),o?null:t.jsx(C,{style:{height:r.bottom}})]})})});O.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{title:{required:!1,tsType:{name:"string"},description:""},showStroke:{required:!1,tsType:{name:"boolean"},description:""},template:{required:!0,tsType:{name:"union",raw:`| 'image-only'
| 'eligibility-checker'
| 'cashback-status'
| 'month-picker'
| 'text-only'
| 'image-heading-body'
// 156×156 illustration (Figma "Image/ScreenState") + optional heading +
// body, centered. Used by the store-page info sheets (app-orders /
// tracking / confirmation). Pass the illustration via \`image\`.
| 'icon-heading-body'
| 'money-status'
| 'reward-rates'
// List body (Figma offers/brand/bottomsheet): saffron rate rows with
// dashed separators, and an intro line + disc bullets.
| 'rate-list'
| 'terms-list'
// Intro line + NUMBERED-pill rows (same number-bullet ListRow the store
// page's Benefits block uses on-page) — so "See Offer Details" reads
// identically inside the sheet and outside it.
| 'numbered-list'
| 'selector'
| 'filters'`,elements:[{name:"literal",value:"'image-only'"},{name:"literal",value:"'eligibility-checker'"},{name:"literal",value:"'cashback-status'"},{name:"literal",value:"'month-picker'"},{name:"literal",value:"'text-only'"},{name:"literal",value:"'image-heading-body'"},{name:"literal",value:"'icon-heading-body'"},{name:"literal",value:"'money-status'"},{name:"literal",value:"'reward-rates'"},{name:"literal",value:"'rate-list'"},{name:"literal",value:"'terms-list'"},{name:"literal",value:"'numbered-list'"},{name:"literal",value:"'selector'"},{name:"literal",value:"'filters'"}]},description:""},bodyProps:{required:!1,tsType:{name:"Omit",elements:[{name:"BottomSheetBodyProps"},{name:"literal",value:"'template'"}],raw:"Omit<BottomSheetBodyProps, 'template'>"},description:"Pass-through data for the body template (image, sections, etc.)."},footer:{required:!1,tsType:{name:"boolean"},description:"When true, renders a sticky FooterButtons at the bottom of the sheet.",defaultValue:{value:"false",computed:!1}},footerProps:{required:!1,tsType:{name:"FooterButtonsProps"},description:""}}};export{O as B};
