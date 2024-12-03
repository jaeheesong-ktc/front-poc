import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{I as f}from"./IconButton-C1AG0cBD.js";import{T as t}from"./index-DFFA2HIJ.js";import{S as b}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const h=["primary","secondary","success","error","warning"],T={title:"Components/IconButton",component:f,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"button의 색상을 설정합니다.",control:{type:"select"}},disabled:{description:"값이 true일 경우, button이 비활성화 됩니다."},href:{description:"button이 눌렸을 때, 해당 URL로 이동합니다."},onClick:{description:"button이 눌렸을 때, onClick 이벤트를 설정합니다."}}},r={args:{icon:o.jsx(t,{size:20}),onClick:()=>alert("IconButton clikced")}},e={render:()=>{const g=h.map(I=>o.jsx(f,{color:I,icon:o.jsx(t,{size:20}),href:"https://www.naver.com"}));return o.jsx(b,{items:g})}},s={args:{icon:o.jsx(t,{size:20}),disabled:!0}};var n,c,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: <TrashIcon size={20} />,
    onClick: () => alert('IconButton clikced')
  }
}`,...(a=(c=r.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <IconButton color={color} icon={<TrashIcon size={20} />} href='https://www.naver.com' />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: <TrashIcon size={20} />,
    disabled: true
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const k=["Default","Color","Disabled"];export{e as Color,r as Default,s as Disabled,k as __namedExportsOrder,T as default};
