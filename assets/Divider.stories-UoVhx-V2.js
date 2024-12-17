import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const i=({variant:r="fullWidth",orientation:A="horizontal",textAlign:l="center",...s})=>e.jsxs("div",{className:`ktc-divider-root ktc-divider-${A} ktc-divider-${r}`,children:[l!=="left"&&e.jsx("span",{className:"ktc-divider-line"}),s.children&&e.jsx("span",{className:`ktc-divider-content ktc-divider-content-${l}`,children:s.children}),l!=="right"&&e.jsx("span",{className:"ktc-divider-line"})]});i.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{variant:{required:!1,tsType:{name:"union",raw:"'fullWidth' | 'middle'",elements:[{name:"literal",value:"'fullWidth'"},{name:"literal",value:"'middle'"}]},description:"",defaultValue:{value:"'fullWidth'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},textAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const y={title:"Components/Divider",component:i,tags:["autodocs","!dev"],argTypes:{orientation:{description:"Divider의 방향을 설정합니다."},textAlign:{description:"Divider 내 children 정렬을 설정합니다."},variant:{description:"Divider의 간격을 설정합니다."},children:{description:"Divider에 표시될 children 요소를 설정합니다."}}},n={args:{variant:"fullWidth",orientation:"horizontal"},render:r=>e.jsx(i,{variant:r.variant,orientation:r.orientation})},t={args:{variant:"fullWidth"},render:r=>e.jsxs("div",{children:[e.jsx(i,{variant:"fullWidth"}),e.jsx("div",{style:{height:"20px"}}),e.jsx(i,{variant:"middle"})]}),parameters:{docs:{source:{code:`
<Divider variant={'fullWidth'} />
<Divider variant={'middle'} />
        `}}}},a={args:{orientation:"vertical"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(i,{orientation:"horizontal"}),e.jsx(i,{orientation:"vertical"})]}),parameters:{docs:{source:{code:`
          <Divider orientation={'horizontal'} />
          <Divider orientation={'vertical'} />
        `}}}},d={args:{textAlign:"left",children:e.jsx(e.Fragment,{children:"TEXT"})},render:r=>e.jsxs("div",{children:[e.jsx(i,{textAlign:"left",children:r.children}),e.jsx(i,{textAlign:"center",children:r.children}),e.jsx(i,{textAlign:"right",children:r.children})]}),parameters:{docs:{source:{code:`
<Divider textAlign={'left'} children={'TEXT'} />
<Divider textAlign={'center'} children={'TEXT'} />
<Divider textAlign={'right'} children={'TEXT'} />
        `}}}};var o,c,v;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'fullWidth',
    orientation: 'horizontal'
  },
  render: (args: Args) => {
    return <Divider variant={args.variant} orientation={args.orientation} />;
  }
}`,...(v=(c=n.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var u,h,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'fullWidth'
  },
  render: (args: Args) => {
    return <div>
        <Divider variant={'fullWidth'} />
        <div style={{
        height: '20px'
      }} />
        <Divider variant={'middle'} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Divider variant={'fullWidth'} />
<Divider variant={'middle'} />
        \`
      }
    }
  }
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,p,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: (args: Args) => {
    return <>
        <Divider orientation={'horizontal'} />
        {/*<div style={{*/}
        {/*  display: 'flex',*/}
        {/*  flexDirection: 'column',*/}
        {/*  height: 100,*/}
        {/*}}>*/}
        {/*  <Divider orientation={'vertical'} />*/}
        {/*</div>*/}
        <Divider orientation={'vertical'} />
      </>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <Divider orientation={'horizontal'} />
          <Divider orientation={'vertical'} />
        \`
      }
    }
  }
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,D,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    textAlign: 'left',
    children: <>TEXT</>
  },
  render: (args: Args) => {
    return <div>
        <Divider textAlign={'left'} children={args.children} />
        <Divider textAlign={'center'} children={args.children} />
        <Divider textAlign={'right'} children={args.children} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Divider textAlign={'left'} children={'TEXT'} />
<Divider textAlign={'center'} children={'TEXT'} />
<Divider textAlign={'right'} children={'TEXT'} />
        \`
      }
    }
  }
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const z=["Default","Variant","Orientation","TextAlign"];export{n as Default,a as Orientation,d as TextAlign,t as Variant,z as __namedExportsOrder,y as default};
