import{j as t}from"./iframe-EJmZd_T6.js";import{S as a}from"./NativeStatusBarWrapper-BM1Q6jQ2.js";import{u as i}from"./with-selector-HFsk6Txg.js";function n(e){return i()?t.jsx(a,{...e}):null}n.__docgenInfo={description:"",methods:[],displayName:"FocusAwareStatusBar",props:{style:{required:!1,tsType:{name:"union",raw:"'auto' | 'inverted' | 'light' | 'dark'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'inverted'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`Sets the color of the status bar text. Default value is \`"auto"\` which
picks the appropriate value according to the active color scheme, eg:
if your app is dark mode, the style will be \`"light"\`.
@default 'auto'`},animated:{required:!1,tsType:{name:"boolean"},description:"If the transition between status bar property changes should be\nanimated. Supported for `backgroundColor`, `barStyle` and `hidden`."},hidden:{required:!1,tsType:{name:"boolean"},description:"If the status bar is hidden."},hideTransitionAnimation:{required:!1,tsType:{name:"union",raw:"'none' | 'fade' | 'slide'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'fade'"},{name:"literal",value:"'slide'"}]},description:`The transition effect when showing and hiding the status bar using
the hidden prop.
@default 'fade'
@platform ios`},networkActivityIndicatorVisible:{required:!1,tsType:{name:"boolean"},description:`If the network activity indicator should be visible.
@platform ios`},backgroundColor:{required:!1,tsType:{name:"string"},description:`The background color of the status bar.
@platform android`},translucent:{required:!1,tsType:{name:"boolean"},description:`If the status bar is translucent. When translucent is set to \`true\`,
the app will draw under the status bar. This is the default behaviour in
projects created with Expo tools because it is consistent with iOS.
@platform android`}}};export{n as F};
