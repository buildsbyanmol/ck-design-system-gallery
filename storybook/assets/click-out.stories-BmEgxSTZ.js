import{j as e,V as p}from"./iframe-EJmZd_T6.js";import{S as c}from"./ScreenState-DxqUWntH.js";import{F as d}from"./FooterButtons-BAxswFhP.js";import{I as l}from"./InlineMessage-Hdq8xuDM.js";import{B as u}from"./Button-DYQYKJ2f.js";import{i as h}from"./index-DCss3D-b.js";import{s as m}from"./motion-CMqo2j38.js";import{B as a,P as i,n}from"./_shared-BtkDuKJ0.js";const y={title:"Patterns/Click-out",parameters:{layout:"padded",docs:{description:{component:"Apply Now and Shop & Earn are the revenue paths (D13). Every tap goes through one attributed path."}}}},o={tags:["live"],parameters:{source:"src/atoms/Button.tsx",docs:{description:{story:"The CTA is a solid Saffron button (D17). Signed in: the app resolves the user id, then opens the link."}}},render:()=>e.jsx(a,{children:e.jsx(i,{children:e.jsx(u,{label:"Apply Now",variant:"solid",tone:"main",size:52,fullWidth:!0,onPress:n})})})},s={tags:["proposed"],parameters:{source:"ux-states.md section 3 (Apply click-out, resolving the user id)",docs:{description:{story:"Proposed: the tap awaits a profile refetch with no feedback (`src/lib/useClickOut.tsx:96`), so the CTA looks dead. Show the loading state on the button until the link opens. No copy."}}},render:()=>e.jsx(a,{children:e.jsx(i,{padded:!1,children:e.jsx(d,{buttons:"single",primaryLabel:"Apply Now",primaryLoading:!0,onPrimary:n})})})},r={tags:["proposed"],parameters:{source:"ux-states.md section 3 (Apply click-out, redirect to bank or store)",docs:{description:{story:"Proposed: a hand-off step of 1 to 2 seconds before the bank or store opens (R8). DS gap: a redirect interstitial organism. The cat animation `cat-redirecting.riv` lives only in FilterTransitionOverlay. Open questions: show terms to accept before the hand-off? how long does it stay? what does the user see on return (R1)?"}}},render:()=>e.jsx(a,{children:e.jsx(i,{padded:!1,children:e.jsx(c,{image:h.screenstate.tracking,title:"Taking you to HDFC Bank",body:"Your cashback is being tracked. Finish there to earn it."})})})},t={tags:["proposed"],parameters:{source:"ux-states.md section 3 (Apply click-out, no URL)",docs:{description:{story:'Proposed: a card or store with no URL returns silently today (`src/lib/useClickOut.tsx:87`), a dead CTA. Disable the button and say why. Open question: where do the "similar cards below" come from?'}}},render:()=>e.jsx(a,{children:e.jsxs(i,{padded:!1,children:[e.jsx(p,{style:{padding:m[16]},children:e.jsx(l,{tone:"info",message:"Applications for this card are paused. See similar cards below."})}),e.jsx(d,{buttons:"single",primaryLabel:"Apply Now",primaryDisabled:!0,onPrimary:n})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['live'],
  parameters: {
    source: 'src/atoms/Button.tsx',
    docs: {
      description: {
        story: 'The CTA is a solid Saffron button (D17). Signed in: the app resolves the user id, then opens the link.'
      }
    }
  },
  render: () => <Board><Phone><Button label="Apply Now" variant="solid" tone="main" size={52} fullWidth onPress={noop} /></Phone></Board>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 3 (Apply click-out, resolving the user id)',
    docs: {
      description: {
        story: 'Proposed: the tap awaits a profile refetch with no feedback (\`src/lib/useClickOut.tsx:96\`), so the CTA looks dead. Show the loading state on the button until the link opens. No copy.'
      }
    }
  },
  render: () => <Board><Phone padded={false}><FooterButtons buttons="single" primaryLabel="Apply Now" primaryLoading onPrimary={noop} /></Phone></Board>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 3 (Apply click-out, redirect to bank or store)',
    docs: {
      description: {
        story: 'Proposed: a hand-off step of 1 to 2 seconds before the bank or store opens (R8). DS gap: a redirect interstitial organism. The cat animation \`cat-redirecting.riv\` lives only in FilterTransitionOverlay. Open questions: show terms to accept before the hand-off? how long does it stay? what does the user see on return (R1)?'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <ScreenState image={images.screenstate.tracking} title="Taking you to HDFC Bank" body="Your cashback is being tracked. Finish there to earn it." />
    </Phone></Board>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['proposed'],
  parameters: {
    source: 'ux-states.md section 3 (Apply click-out, no URL)',
    docs: {
      description: {
        story: 'Proposed: a card or store with no URL returns silently today (\`src/lib/useClickOut.tsx:87\`), a dead CTA. Disable the button and say why. Open question: where do the "similar cards below" come from?'
      }
    }
  },
  render: () => <Board><Phone padded={false}>
      <View style={{
        padding: spacing[16]
      }}><InlineMessage tone="info" message="Applications for this card are paused. See similar cards below." /></View>
      <FooterButtons buttons="single" primaryLabel="Apply Now" primaryDisabled onPrimary={noop} />
    </Phone></Board>
}`,...t.parameters?.docs?.source}}};const g=["Cta","ResolvingProposed","RedirectProposed","NoLinkProposed"],B=Object.freeze(Object.defineProperty({__proto__:null,Cta:o,NoLinkProposed:t,RedirectProposed:r,ResolvingProposed:s,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{o as C,t as N,s as R,B as S,r as a};
