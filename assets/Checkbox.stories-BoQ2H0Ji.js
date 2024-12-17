import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{R as T}from"./index-DJO9vBfz.js";import{C as a}from"./Checkbox-JTS2Qgmi.js";import{S as z}from"./StoryTemplate-BKeY88rQ.js";const L=["primary","secondary","success","error","warning"],O=["small","medium","large"],P={title:"Components/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs","!dev"],args:{},argTypes:{color:{description:"checkbox의 색상을 설정합니다.",control:{type:"select"}},size:{description:"checkbox의 크기를 설정합니다.",control:{type:"select"}}}},n={args:{label:"checkbox"}},s={render:()=>{const[e,r]=T.useState([!0,!1]),E=c=>{r([c.target.checked,c.target.checked])},I=c=>{r([c.target.checked,e[1]])},R=c=>{r([e[0],c.target.checked])},G=t.jsxs("div",{style:{marginLeft:"10px"},children:[t.jsx(a,{label:"Child 1",checked:e[0],onChange:I}),t.jsx(a,{label:"Child 2",checked:e[1],onChange:R})]});return t.jsxs("div",{children:[t.jsx(a,{label:"Parent",checked:e[0]&&e[1],indeterminate:e[0]!==e[1],onChange:E}),G]})}},d={render:()=>{const e=L.map(r=>t.jsx(a,{id:r,label:r,color:r,defaultChecked:!0}));return t.jsx(z,{items:e})}},o={render:()=>{const e=O.map(r=>t.jsx(a,{id:r,label:r,size:r,defaultChecked:!0}));return t.jsx(z,{items:e})}},l={render:()=>t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px",alignItems:"center"},children:[t.jsx(a,{id:"checked-disabled",checked:!0,disabled:!0,label:"disabled"}),t.jsx(a,{id:"disabled",disabled:!0,label:"disabled"})]})};var i,h,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'checkbox'
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,u,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(u=s.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var C,g,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Checkbox id={color} label={color} color={color} defaultChecked />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,f,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Checkbox id={size} label={size} size={size} defaultChecked />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,j,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const _=["Default","Indeterminate","Color","Size","Disabled"];export{d as Color,n as Default,l as Disabled,s as Indeterminate,o as Size,_ as __namedExportsOrder,P as default};
