import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{D as e}from"./Divider-DR0FmXq-.js";import"./index-DJO9vBfz.js";const j={title:"Components/Divider",component:e,tags:["autodocs","!dev"],argTypes:{orientation:{description:"Divider의 방향을 설정합니다."},textAlign:{description:"Divider 내 children 정렬을 설정합니다."},variant:{description:"Divider의 간격을 설정합니다."},children:{description:"Divider에 표시될 children 요소를 설정합니다."}}},i={args:{variant:"fullWidth",orientation:"horizontal"},render:n=>r.jsx(e,{variant:n.variant,orientation:n.orientation})},t={args:{variant:"fullWidth"},render:n=>r.jsxs("div",{children:[r.jsx(e,{variant:"fullWidth"}),r.jsx("div",{style:{height:"20px"}}),r.jsx(e,{variant:"middle"})]}),parameters:{docs:{source:{code:`
<Divider variant={'fullWidth'} />
<Divider variant={'middle'} />
        `}}}},a={args:{orientation:"vertical"},render:n=>r.jsxs(r.Fragment,{children:[r.jsx(e,{orientation:"horizontal"}),r.jsx(e,{orientation:"vertical"})]}),parameters:{docs:{source:{code:`
          <Divider orientation={'horizontal'} />
          <Divider orientation={'vertical'} />
        `}}}},d={args:{textAlign:"left",children:r.jsx(r.Fragment,{children:"TEXT"})},render:n=>r.jsxs("div",{children:[r.jsx(e,{textAlign:"left",children:n.children}),r.jsx(e,{textAlign:"center",children:n.children}),r.jsx(e,{textAlign:"right",children:n.children})]}),parameters:{docs:{source:{code:`
<Divider textAlign={'left'} children={'TEXT'} />
<Divider textAlign={'center'} children={'TEXT'} />
<Divider textAlign={'right'} children={'TEXT'} />
        `}}}};var o,s,l;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'fullWidth',
    orientation: 'horizontal'
  },
  render: (args: Args) => {
    return <Divider variant={args.variant} orientation={args.orientation} />;
  }
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,v,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,u,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,x,D;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const E=["Default","Variant","Orientation","TextAlign"];export{i as Default,a as Orientation,d as TextAlign,t as Variant,E as __namedExportsOrder,j as default};
