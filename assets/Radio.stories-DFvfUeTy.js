import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as a}from"./Radio-CpyH_bhr.js";import{S as z}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";/* empty css                 */const v=["primary","secondary","success","error","warning"],C=["small","medium","large"],k={title:"Components/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"radio의 색상을 설정합니다.",control:{type:"select"}},size:{description:"radio의 크기를 설정합니다.",control:{type:"select"}}}},o={args:{value:"radio",label:"Radio",id:"radio"}},s={render:()=>{const i=v.map(e=>r.jsx(a,{id:e,value:e,label:e,color:e,name:"color"}));return r.jsx(z,{items:i})}},t={render:()=>{const i=C.map(e=>r.jsx(a,{id:e,value:e,label:e,size:e,defaultChecked:!0}));return r.jsx(z,{items:i})}},n={render:()=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px",alignItems:"center"},children:[r.jsx(a,{defaultChecked:!0,disabled:!0,label:"disabled"}),r.jsx(a,{disabled:!0,label:"disabled"})]})};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 'radio',
    label: 'Radio',
    id: 'radio'
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Radio id={color} value={color} label={color} color={color} name={'color'} />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,x,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Radio id={size} value={size} label={size} size={size} defaultChecked />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,f,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      margin: '40px',
      alignItems: 'center'
    }}>
        <Radio defaultChecked disabled label={'disabled'} />
        <Radio disabled label={'disabled'} />
      </div>;
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const D=["Default","Color","Size","Disabled"];export{s as Color,o as Default,n as Disabled,t as Size,D as __namedExportsOrder,k as default};
