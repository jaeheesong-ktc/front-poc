import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{T as n}from"./Typography-CqYQLWa2.js";import{S as p}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const j=["h1","h2","h3","h4","h5","subtitle1","subtitle2","body1","body2","caption","overline"],b=["left","center","right","justify"],S=["primary","secondary","error","success","warning","textPrimary","textSecondary","textDisabled"],D={title:"Components/Typography",component:n,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{variant:{control:{type:"select",options:j},description:"Typography 의 유형을 설정합니다."},align:{control:{type:"select",options:b},description:"Typography 내 Text 의 정렬 방식을 설정합니다."},color:{control:{type:"select",options:S},description:"Text 의 색상을 설정합니다."}}},a={args:{variant:"body1",align:"left",color:"textPrimary",children:"Default Typography"},render:e=>r.jsx("div",{style:{width:"300px",border:"1px solid #ccc",padding:"16px"},children:r.jsx(n,{...e})}),parameters:{docs:{source:{code:`
          <Typography {...args} />
        `}}}},t={render:()=>{const e=j.map(o=>r.jsx(n,{variant:o,color:"textPrimary",children:o}));return r.jsx(p,{items:e})},parameters:{docs:{source:{code:`
          <Typography variant={variant} children={children} />
        `}}}},s={render:()=>{const e=S.map(o=>r.jsx(n,{color:o,children:"Text Color"}));return r.jsx(p,{items:e})},parameters:{docs:{source:{code:`
          <Typography color={color} children={children} />
        `}}}},c={render:()=>{const e=b.map(o=>r.jsx("div",{style:{width:"160px",border:"1px solid #ccc",padding:"16px"},children:r.jsx(n,{align:o,children:`Typography ${o}`})}));return r.jsx(p,{items:e})},parameters:{docs:{source:{code:`
          <Typography align={align} children={children} />
        `}}}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var y,m,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,v,f;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const P=["Default","Variant","Color","Align"];export{c as Align,s as Color,a as Default,t as Variant,P as __namedExportsOrder,D as default};
