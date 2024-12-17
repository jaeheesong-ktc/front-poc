import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{S as c}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const n=({id:r,children:a,variant:s="body1",align:G="left",color:D,...O})=>{const P=s.startsWith("h")?s:"p",C=["ktc-typography-root",`ktc-typography-${s}`,`ktc-typography-${G}`,`ktc-typography-${D}`].join(" ");return e.jsx(P,{id:r,className:C,...O,children:a})};n.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body2'
| 'caption'
| 'overline'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'error'
| 'success'
| 'warning'
| 'textPrimary'
| 'textSecondary'
| 'textDisabled'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'textPrimary'"},{name:"literal",value:"'textSecondary'"},{name:"literal",value:"'textDisabled'"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const j=["h1","h2","h3","h4","h5","subtitle1","subtitle2","body1","body2","caption","overline"],S=["left","center","right","justify"],w=["primary","secondary","error","success","warning","textPrimary","textSecondary","textDisabled"],V={title:"Components/Typography",component:n,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{variant:{control:{type:"select",options:j},description:"Typography 의 유형을 설정합니다."},align:{control:{type:"select",options:S},description:"Typography 내 Text 의 정렬 방식을 설정합니다."},color:{control:{type:"select",options:w},description:"Text 의 색상을 설정합니다."}}},t={args:{variant:"body1",align:"left",color:"textPrimary",children:"Default Typography"},render:r=>e.jsx("div",{style:{width:"300px",border:"1px solid #ccc",padding:"16px"},children:e.jsx(n,{...r})}),parameters:{docs:{source:{code:`
          <Typography {...args} />
        `}}}},o={render:()=>{const r=j.map(a=>e.jsx(n,{variant:a,color:"textPrimary",children:a}));return e.jsx(c,{items:r})},parameters:{docs:{source:{code:`
          <Typography variant={variant} children={children} />
        `}}}},l={render:()=>{const r=w.map(a=>e.jsx(n,{color:a,children:"Text Color"}));return e.jsx(c,{items:r})},parameters:{docs:{source:{code:`
          <Typography color={color} children={children} />
        `}}}},i={render:()=>{const r=S.map(a=>e.jsx("div",{style:{width:"160px",border:"1px solid #ccc",padding:"16px"},children:e.jsx(n,{align:a,children:`Typography ${a}`})}));return e.jsx(c,{items:r})},parameters:{docs:{source:{code:`
          <Typography align={align} children={children} />
        `}}}};var p,d,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    align: 'left',
    color: 'textPrimary',
    children: 'Default Typography'
  },
  render: args => <div style={{
    width: '300px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <Typography {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
          <Typography {...args} />
        \`
      }
    }
  }
}`,...(y=(d=t.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <Typography variant={variant} color={'textPrimary'} children={variant} />);
    return <StoryTemplate items={variantGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <Typography variant={variant} children={children} />
        \`
      }
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Typography color={color} children={\`Text Color\`} />);
    return <StoryTemplate items={colorGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <Typography color={color} children={children} />
        \`
      }
    }
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,f,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const alignGroup = alignOptions.map(align => <div style={{
      width: '160px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <Typography align={align} children={\`Typography \${align}\`} />
      </div>);
    return <StoryTemplate items={alignGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <Typography align={align} children={children} />
        \`
      }
    }
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const _=["Default","Variant","Color","Align"];export{i as Align,l as Color,t as Default,o as Variant,_ as __namedExportsOrder,V as default};
