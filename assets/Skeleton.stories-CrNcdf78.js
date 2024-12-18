import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const a=({animation:n="pulse",height:g=100,variant:f="rectangular",width:S=100,...k})=>{const y=["ktc-skeleton-root",n&&`animation-${n}`,`variant-${f}`].filter(Boolean).join(" ");return e.jsx("div",{className:y,style:{width:S||0,height:g||0},...k})};a.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | false",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"'pulse'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'rectangular'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"100",computed:!1}}}};const j={title:"Components/Skeleton",component:a,tags:["autodocs","!dev"],argTypes:{animation:{description:"Skeleton의 효과를 설정합니다."},height:{description:"Skeleton 높이를 설정합니다.",control:{type:"number"}},variant:{description:"Skeleton의 속성을 설정합니다."},width:{description:"Skeleton 너비를 설정합니다.",control:{type:"number"}}}},r={args:{variant:"rectangular",animation:"pulse"},render:n=>e.jsx(a,{variant:n.variant,animation:n.animation,width:n.width,height:n.height})},t={args:{variant:"rectangular"},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[e.jsx(a,{variant:"circular"}),e.jsx(a,{variant:"rectangular"}),e.jsx(a,{variant:"rounded"})]}),parameters:{docs:{source:{code:`
<Skeleton variant={'circular'} />
<Skeleton variant={'rectangular'} />
<Skeleton variant={'rounded'} />
        `}}}},i={args:{animation:"pulse"},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[e.jsx(a,{animation:"pulse"}),e.jsx(a,{animation:"wave"}),e.jsx(a,{animation:!1})]}),parameters:{docs:{source:{code:`
<Skeleton animation={'pulse'} />
<Skeleton animation={'wave'} />
<Skeleton animation={false} />
        `}}}};var s,o,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    animation: 'pulse'
  },
  render: (args: Args) => {
    return <Skeleton variant={args.variant} animation={args.animation} width={args.width} height={args.height} />;
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var u,c,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(p=i.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const w=["Default","Variant","Animation"];export{i as Animation,r as Default,t as Variant,w as __namedExportsOrder,j as default};
