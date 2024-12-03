import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as O}from"./index-DJO9vBfz.js";import{S as T}from"./StoryTemplate-BKeY88rQ.js";const r=({color:s="primary",checked:e,defaultChecked:t=!1,disabled:c=!1,label:k,name:z,size:d="medium",onChange:m,...V})=>{const[E,q]=O.useState(t??!1),I=p=>{const G=p.target.checked;q(G),m&&m(p)};return a.jsxs("label",{className:[`storybook-font-${d}-${c?"disabled":"enabled"}`].join(" "),children:[a.jsx("input",{type:"checkbox",role:"switch",className:[`switch-color-${s}`,`storybook-switch-size-${d}`].join(" "),checked:e!==void 0?e:E,...e===void 0?{defaultChecked:!!t}:{},disabled:!!c,name:z,onChange:I}),a.jsx("span",{children:k})]})};r.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const D=["primary","secondary","success","error","warning"],R=["small","medium","large"],L={title:"Components/Switch",component:r,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"switch의 색상을 설정합니다.",control:{type:"select"}},size:{description:"switch의 크기를 설정합니다.",control:{type:"select"}}}},n={args:{label:"Switch",name:"Switch"}},o={render:()=>{const s=D.map(e=>a.jsx(r,{label:e,color:e,name:e,onChange:t=>{console.log(t.target)},defaultChecked:!0}));return a.jsx(T,{items:s})}},l={render:()=>{const s=R.map(e=>a.jsx(r,{label:e,name:e,size:e}));return a.jsx(T,{items:s})}},i={render:()=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px",alignItems:"center"},children:[a.jsx(r,{disabled:!0,label:"disabled",checked:!0}),a.jsx(r,{disabled:!0,label:"disabled"})]})};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    name: 'Switch'
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Switch label={color} color={color} name={color} onChange={e => {
      console.log(e.target);
    }} defaultChecked />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,v,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Switch label={size} name={size} size={size} />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,C,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      margin: '40px',
      alignItems: 'center'
    }}>
        <Switch disabled label={'disabled'} checked />
        <Switch disabled label={'disabled'} />
      </div>;
  }
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const M=["Default","Color","Size","Disabled"];export{o as Color,n as Default,i as Disabled,l as Size,M as __namedExportsOrder,L as default};
