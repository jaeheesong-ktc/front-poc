import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{C as l}from"./Chip-C8mKXDtN.js";import{r as F}from"./index-DJO9vBfz.js";import"./index-CXSbpWhf.js";const K={title:"Components/Chip",component:l,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{label:{description:"Chip에 표시할 라벨을 정의합니다."},variant:{description:"Chip 유형을 설정합니다."},size:{description:"Chip 크기를 설정합니다."},color:{description:"Chip 색상을 설정합니다.",control:"select"},clickable:{description:"Chip 클릭 가능 여부를 설정합니다.",control:"boolean"},onClick:{description:"Chip 클릭 이벤트를 정의합니다."},deletable:{description:"Chip 삭제 기능 여부를 설정합니다.",control:"boolean"},onDelete:{description:"Chip 삭제 이벤트를 정의합니다."}}},o=({children:r})=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingBlock:"10px"},children:e.jsx("div",{style:{display:"flex",alignItems:"center",columnGap:"30px"},children:r})}),G=r=>{const a=()=>{alert("Chip Click!")},m=()=>{alert("Chip Delete!")};return e.jsx(o,{children:e.jsx(l,{...r,onClick:a,onDelete:m})})},I=r=>e.jsxs(o,{children:[e.jsx(l,{...r,variant:"outlined",label:"outlined"}),e.jsx(l,{...r,variant:"filled",label:"filled"})]}),L=r=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(l,{...r,label:"default",color:"default"}),e.jsx(l,{...r,label:"primary",color:"primary"}),e.jsx(l,{...r,label:"secondary",color:"secondary"}),e.jsx(l,{...r,label:"error",color:"error"}),e.jsx(l,{...r,label:"info",color:"info"}),e.jsx(l,{...r,label:"success",color:"success"}),e.jsx(l,{...r,label:"warning",color:"warning"})]}),e.jsxs(o,{children:[e.jsx(l,{...r,label:"default",color:"default",variant:"filled"}),e.jsx(l,{...r,label:"primary",color:"primary",variant:"filled"}),e.jsx(l,{...r,label:"secondary",color:"secondary",variant:"filled"}),e.jsx(l,{...r,label:"error",color:"error",variant:"filled"}),e.jsx(l,{...r,label:"info",color:"info",variant:"filled"}),e.jsx(l,{...r,label:"success",color:"success",variant:"filled"}),e.jsx(l,{...r,label:"warning",color:"warning",variant:"filled"})]})]}),_=r=>e.jsxs(o,{children:[e.jsx(l,{...r,label:"small",size:"small"}),e.jsx(l,{...r,label:"medium",size:"medium"})]}),O=r=>{const a=()=>{alert("Chip Click!")};return e.jsx(o,{children:e.jsx(l,{...r,clickable:!0,onClick:a})})},R=r=>{const[a,m]=F.useState(["Dog","Cat","Monkey","Frog","Turtle"]),M=t=>()=>{m(a.filter(B=>B!==t))};return e.jsx("div",{style:{display:"flex",paddingBlock:"10px",columnGap:"10px"},children:a.map(t=>e.jsx(l,{...r,label:t,deletable:!0,onDelete:M(t)}))})},n={render:G,args:{label:"Label1",variant:"outlined",size:"small",color:"default"}},s={render:I},c={render:L},i={render:_},d={render:O,args:{clickable:!0,label:"Click Me!"}},p={render:R,args:{deletable:!0}};var u,x,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    label: 'Label1',
    variant: 'outlined',
    size: 'small',
    color: 'default'
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var C,j,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: VariantTemplate
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var h,k,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ColorTemplate
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var D,v,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: SizeTemplate
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,g,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ClickTemplate,
  args: {
    clickable: true,
    label: 'Click Me!'
  }
}`,...(z=(g=d.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var w,V,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DeleteTemplate,
  args: {
    deletable: true
  }
}`,...(E=(V=p.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const N=["Default","Variant","Color","Size","Clickable","Deletable"];export{d as Clickable,c as Color,n as Default,p as Deletable,i as Size,s as Variant,N as __namedExportsOrder,K as default};
