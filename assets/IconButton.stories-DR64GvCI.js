import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{T as a}from"./index-CXSbpWhf.js";import{S as I}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const c=({color:s="primary",disabled:r=!1,href:i,onClick:l,...h})=>{const w=x=>{l&&l(x)},u=e.jsx("button",{type:"button",className:`storybook-icon-button-${s}`,disabled:!!r,onClick:w,children:h.icon});return i&&!r?e.jsx("a",{href:i,children:u}):u};c.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const B=["primary","secondary","success","error","warning"],z={title:"Components/IconButton",component:c,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"button의 색상을 설정합니다.",control:{type:"select"}},disabled:{description:"값이 true일 경우, button이 비활성화 됩니다."},href:{description:"button이 눌렸을 때, 해당 URL로 이동합니다."},onClick:{description:"button이 눌렸을 때, onClick 이벤트를 설정합니다."}}},o={args:{icon:e.jsx(a,{size:20}),onClick:()=>alert("IconButton clikced")}},t={render:()=>{const s=B.map(r=>e.jsx(c,{color:r,icon:e.jsx(a,{size:20}),href:"https://www.naver.com"}));return e.jsx(I,{items:s})}},n={args:{icon:e.jsx(a,{size:20}),disabled:!0}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: <TrashIcon size={20} />,
    onClick: () => alert('IconButton clikced')
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,f,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <IconButton color={color} icon={<TrashIcon size={20} />} href='https://www.naver.com' />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,v,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: <TrashIcon size={20} />,
    disabled: true
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const M=["Default","Color","Disabled"];export{t as Color,o as Default,n as Disabled,M as __namedExportsOrder,z as default};
