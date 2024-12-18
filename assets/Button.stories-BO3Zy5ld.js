import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{B as t}from"./Button-CLpvGU5F.js";import{T as F}from"./index-CXSbpWhf.js";import{S as n}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const U=["primary","secondary","success","error","warning"],A=["small","medium","large"],a=["filled","outlined","standard"],P={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs","!dev"],args:{label:"Button"},argTypes:{label:{description:"button의 label을 설정합니다.",control:{required:!0}},color:{description:"button의 색상을 설정합니다.",control:{type:"select"}},disabled:{description:"값이 true일 경우, button이 비활성화 됩니다."},href:{description:"button이 눌렸을 때, 해당 URL로 이동합니다."},loading:{description:"값이 true일 경우, button이 로딩 상태로 변경 됩니다."},variant:{description:"button의 유형을 설정합니다.",control:{type:"select"}},size:{description:"button의 크기를 설정합니다.",control:{type:"select"}},startIcon:{description:"button의 label 앞에 Icon을 위치시킵니다."},endIcon:{description:"button의 label 뒤에 Icon을 위치시킵니다."},onClick:{description:"button이 눌렸을 때, onClick 이벤트를 설정합니다."}}},s={args:{label:"Button",onClick:()=>alert("IconButton clicked")}},c={render:()=>{const o=U.map(e=>r.jsx(t,{label:e,color:e,href:"https://www.naver.com"}));return r.jsx(n,{items:o})}},i={render:()=>{const o=a.map(e=>r.jsx(t,{label:"disabled",variant:e,disabled:!0}));return r.jsx(n,{items:o})}},l={render:()=>{const o=a.map(e=>r.jsx(t,{variant:e,loading:!0}));return r.jsx(n,{items:o})}},p={render:()=>{const o=U.map(e=>r.jsx(n,{items:a.map(b=>r.jsx(t,{label:b,variant:b,color:e}))},e));return r.jsx(r.Fragment,{children:o})}},u={render:()=>{const o=A.map(e=>r.jsx(t,{label:e,color:"primary",variant:"filled",size:e}));return r.jsx(n,{items:o})}},d={render:()=>{const o=a.map(e=>r.jsx(t,{label:"Delete",color:"primary",variant:e,disabled:!0,startIcon:r.jsx(F,{size:16})}));return r.jsx(n,{items:o})}},m={render:()=>{const o=a.map(e=>r.jsx(t,{label:"Delete",color:"secondary",variant:e,endIcon:r.jsx(F,{size:16})}));return r.jsx(n,{items:o})}};var v,g,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    onClick: () => alert('IconButton clicked')
  }
}`,...(I=(g=s.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var y,x,G;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Button label={color} color={color} href='https://www.naver.com' />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(G=(x=c.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var S,j,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <Button label="disabled" variant={variant} disabled />);
    return <StoryTemplate items={variantGroup} />;
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,f,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const loadingGroup = variantOptions.map(variant => <Button variant={variant} loading />);
    return <StoryTemplate items={loadingGroup} />;
  }
}`,...(O=(f=l.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var T,h,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <StoryTemplate key={color} items={variantOptions.map(variant => <Button label={variant} variant={variant} color={color} />)} />);
    return <>{colorGroup}</>;
  }
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var D,k,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Button label={size} color="primary" variant="filled" size={size} />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,L,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const IconGroup = variantOptions.map(variant => <Button label="Delete" color="primary" variant={variant} disabled startIcon={<TrashIcon size={16} />} />);
    return <StoryTemplate items={IconGroup} />;
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var V,_,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const IconGroup = variantOptions.map(variant => <Button label="Delete" color="secondary" variant={variant} endIcon={<TrashIcon size={16} />} />);
    return <StoryTemplate items={IconGroup} />;
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const Q=["Default","Color","Disable","Loading","Variant","Size","StartIcon","EndIcon"];export{c as Color,s as Default,i as Disable,m as EndIcon,l as Loading,u as Size,d as StartIcon,p as Variant,Q as __namedExportsOrder,P as default};
