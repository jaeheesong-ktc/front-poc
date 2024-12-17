import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{B as t}from"./index-DFFA2HIJ.js";import{B as r}from"./Badge-Cd21iGhO.js";import"./index-DJO9vBfz.js";const b={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"Badge 색상을 설정합니다.",control:{type:"select"}},variant:{description:"Badge 유형을 설정합니다."},content:{description:"Badge에 표시하는 값입니다.",control:{type:"number",required:!0}},max:{description:"Badge에 표시할 수 있는 최대 숫자를 설정합니다.",control:{type:"number"}},showZero:{description:"값이 0인 경우 Badge 표시 여부를 설정합니다."}}},o={args:{content:3,children:n.jsx(t,{size:17})}},a={args:{content:3,color:"primary",children:n.jsx(t,{size:17})},render:e=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px"},children:[n.jsx(r,{content:5,color:"primary",children:e.children}),n.jsx(r,{content:5,color:"secondary",children:e.children}),n.jsx(r,{content:5,color:"success",children:e.children}),n.jsx(r,{content:5,color:"warning",children:e.children}),n.jsx(r,{content:5,color:"error",children:e.children})]})},c={args:{content:3,variant:"dot",children:n.jsx(t,{size:17})},render:e=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[n.jsx(r,{content:e.content,variant:"standard",children:e.children}),n.jsx(r,{content:e.content,variant:"dot",children:e.children})]})},s={args:{content:0,showZero:!0,children:n.jsx(t,{size:17})},render:e=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[n.jsx(r,{content:e.content,showZero:!0,children:e.children}),n.jsx(r,{content:e.content,variant:"dot",showZero:!0,children:e.children}),n.jsx(r,{content:e.content,showZero:!1,children:e.children})]})},d={args:{content:55,max:50,children:n.jsx(t,{size:17})},render:e=>n.jsx(n.Fragment,{children:n.jsx(r,{content:e.content,max:e.max,children:e.children})})};var i,l,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: 3,
    children: <BellIcon size={17} />
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,h,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 3,
    color: 'primary',
    children: <BellIcon size={17} />
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px'
    }}>
        <Badge content={5} color={'primary'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'secondary'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'success'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'warning'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'error'}>
          {args.children}
        </Badge>
      </div>;
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,x,B;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: 3,
    variant: 'dot',
    children: <BellIcon size={17} />
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '50px'
    }}>
        <Badge content={args.content} variant={'standard'}>
          {args.children}
        </Badge>
        <Badge content={args.content} variant={'dot'}>
          {args.children}
        </Badge>
      </div>;
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var y,j,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 0,
    showZero: true,
    children: <BellIcon size={17} />
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '50px'
    }}>
        <Badge content={args.content} showZero={true}>
          {args.children}
        </Badge>
        <Badge content={args.content} variant={'dot'} showZero={true}>
          {args.children}
        </Badge>
        <Badge content={args.content} showZero={false}>
          {args.children}
        </Badge>
      </div>;
  }
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var f,w,Z;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    content: 55,
    max: 50,
    children: <BellIcon size={17} />
  },
  render: (args: Args) => <>
      <Badge content={args.content} max={args.max}>
        {args.children}
      </Badge>
    </>
}`,...(Z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:Z.source}}};const A=["Default","Color","Variant","ShowZero","MaxValue"];export{a as Color,o as Default,d as MaxValue,s as ShowZero,c as Variant,A as __namedExportsOrder,b as default};
