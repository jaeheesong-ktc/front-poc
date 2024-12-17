import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as V,R as $}from"./index-DJO9vBfz.js";import{S as L}from"./StoryTemplate-BKeY88rQ.js";const r=({color:a="primary",checked:t,defaultChecked:m=!1,disabled:s=!1,id:p,indeterminate:c=!1,label:n,size:h="medium",value:G,onChange:k,...P})=>{const[H,M]=V.useState(m??!1),N=g=>{const O=g.target.checked;M(O),k&&k(g)};return console.log(k),e.jsxs("label",{className:[`storybook-font-${h}-${s?"disabled":"enabled"}`].join(" "),children:[e.jsx("input",{type:"checkbox",className:[`storybook-check-color-${a}`,c?`storybook-check-size-determinate-${h}`:`storybook-check-size-${h}`].join(" "),checked:c||(t??H),disabled:!!s,id:p||"",value:G||"",onChange:N}),e.jsx("span",{children:n})]})};r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},checkedIcon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const D=["primary","secondary","success","error","warning"],_=["small","medium","large"],J={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs","!dev"],args:{},argTypes:{color:{description:"checkbox의 색상을 설정합니다.",control:{type:"select"}},size:{description:"checkbox의 크기를 설정합니다.",control:{type:"select"}}}},l={args:{label:"checkbox"}},d={render:()=>{const[a,t]=$.useState([!0,!1]),m=n=>{t([n.target.checked,n.target.checked])},s=n=>{t([n.target.checked,a[1]])},p=n=>{t([a[0],n.target.checked])},c=e.jsxs("div",{style:{marginLeft:"10px"},children:[e.jsx(r,{label:"Child 1",checked:a[0],onChange:s}),e.jsx(r,{label:"Child 2",checked:a[1],onChange:p})]});return e.jsxs("div",{children:[e.jsx(r,{label:"Parent",checked:a[0]&&a[1],indeterminate:a[0]!==a[1],onChange:m}),c]})}},o={render:()=>{const a=D.map(t=>e.jsx(r,{id:t,label:t,color:t,defaultChecked:!0}));return e.jsx(L,{items:a})}},i={render:()=>{const a=_.map(t=>e.jsx(r,{id:t,label:t,size:t,defaultChecked:!0}));return e.jsx(L,{items:a})}},u={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px",alignItems:"center"},children:[e.jsx(r,{id:"checked-disabled",checked:!0,disabled:!0,label:"disabled"}),e.jsx(r,{id:"disabled",disabled:!0,label:"disabled"})]})};var b,C,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'checkbox'
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,y,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState([true, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    const children = <div style={{
      marginLeft: '10px'
    }}>
        <Checkbox label="Child 1" checked={checked[0]} onChange={handleChange2} />
        <Checkbox label="Child 2" checked={checked[1]} onChange={handleChange3} />
      </div>;
    return <div>
        <Checkbox label="Parent" checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
        {children}
      </div>;
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,T,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Checkbox id={color} label={color} color={color} defaultChecked />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,I,q;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Checkbox id={size} label={size} size={size} defaultChecked />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var z,R,w;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      margin: '40px',
      alignItems: 'center'
    }}>
        <Checkbox id={'checked-disabled'} checked disabled label={'disabled'} />
        <Checkbox id={'disabled'} disabled label={'disabled'} />
      </div>;
  }
}`,...(w=(R=u.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const K=["Default","Indeterminate","Color","Size","Disabled"];export{o as Color,l as Default,u as Disabled,d as Indeterminate,i as Size,K as __namedExportsOrder,J as default};
