import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{S as e}from"./Skeleton-BhALZOrO.js";import"./index-DJO9vBfz.js";const x={title:"Components/Skeleton",component:e,tags:["autodocs","!dev"],argTypes:{animation:{description:"Skeleton의 효과를 설정합니다."},height:{description:"Skeleton 높이를 설정합니다.",control:{type:"number"}},variant:{description:"Skeleton의 속성을 설정합니다."},width:{description:"Skeleton 너비를 설정합니다.",control:{type:"number"}}}},r={args:{variant:"rectangular",animation:"pulse"},render:a=>n.jsx(e,{variant:a.variant,animation:a.animation,width:a.width,height:a.height})},t={args:{variant:"rectangular"},render:a=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[n.jsx(e,{variant:"circular"}),n.jsx(e,{variant:"rectangular"}),n.jsx(e,{variant:"rounded"})]}),parameters:{docs:{source:{code:`
<Skeleton variant={'circular'} />
<Skeleton variant={'rectangular'} />
<Skeleton variant={'rounded'} />
        `}}}},i={args:{animation:"pulse"},render:a=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[n.jsx(e,{animation:"pulse"}),n.jsx(e,{animation:"wave"}),n.jsx(e,{animation:!1})]}),parameters:{docs:{source:{code:`
<Skeleton animation={'pulse'} />
<Skeleton animation={'wave'} />
<Skeleton animation={false} />
        `}}}};var o,s,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    animation: 'pulse'
  },
  render: (args: Args) => {
    return <Skeleton variant={args.variant} animation={args.animation} width={args.width} height={args.height} />;
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular'
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '50px'
    }}>
        <Skeleton variant={'circular'} />
        <Skeleton variant={'rectangular'} />
        <Skeleton variant={'rounded'} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Skeleton variant={'circular'} />
<Skeleton variant={'rectangular'} />
<Skeleton variant={'rounded'} />
        \`
      }
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    animation: 'pulse'
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '50px'
    }}>
        <Skeleton animation={'pulse'} />
        <Skeleton animation={'wave'} />
        <Skeleton animation={false} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Skeleton animation={'pulse'} />
<Skeleton animation={'wave'} />
<Skeleton animation={false} />
        \`
      }
    }
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const y=["Default","Variant","Animation"];export{i as Animation,r as Default,t as Variant,y as __namedExportsOrder,x as default};
