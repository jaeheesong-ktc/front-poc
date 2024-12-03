import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{T as s,a as e}from"./Tabs-B9S4jwIs.js";import{r as c}from"./index-DJO9vBfz.js";const z={title:"Components/Tab",component:s,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{variant:{description:"Tab 유형을 설정합니다.",control:{type:"select"}},value:{description:"선택된 Tab의 값을 정의합니다.",control:{type:"text"}},color:{description:"Tab 색상을 정의합니다.",control:{type:"select"}},onChange:{description:"Tab의 onChange event를 설정합니다."}}},h=({children:n})=>a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingBlock:"20px"},children:a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"50px"},children:n})}),t=({children:n})=>a.jsx("div",{style:{paddingBlock:"20px",paddingInline:"10px"},children:n}),I=n=>{const[l,o]=c.useState(1),r=b=>{o(b)};return a.jsxs(a.Fragment,{children:[a.jsxs(s,{fullWidth:n.fullWidth,variant:n.variant,color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),l===1&&a.jsx(t,{children:"This is Tab1 content"}),l===2&&a.jsx(t,{children:"This is Tab2 content"}),l===3&&a.jsx(t,{children:"This is Tab3 content"})]})},k=n=>{const[l,o]=c.useState(1),r=b=>{o(b)};return a.jsxs(h,{children:[a.jsxs(s,{variant:"standard",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:"filled",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:"outlined",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]})]})},B=n=>{const[l,o]=c.useState(1),r=b=>{o(b)};return a.jsxs(a.Fragment,{children:[a.jsxs(h,{children:[a.jsxs(s,{variant:n.variant,color:"primary",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"secondary",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"success",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]})]}),a.jsxs(h,{children:[a.jsxs(s,{variant:n.variant,color:"info",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"warning",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"error",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]})]})]})},R=n=>{const[l,o]=c.useState(1),r=b=>{o(b)};return a.jsx(h,{children:a.jsxs(s,{variant:"standard",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2,disabled:!0}),a.jsx(e,{label:"Tab3",value:3})]})})},_=n=>{const[l,o]=c.useState(1),r=b=>{o(b)};return a.jsxs("div",{style:{width:700,height:150,border:"1px solid #e0e0e0",borderRadius:5},children:[a.jsxs(s,{value:l,onChange:r,fullWidth:!0,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),l===1&&a.jsx(t,{children:"This is Tab1 content"}),l===2&&a.jsx(t,{children:"This is Tab2 content"}),l===3&&a.jsx(t,{children:"This is Tab3 content"})]})},u={render:I,args:{variant:"standard",color:"primary"},parameters:{docs:{source:{code:`
<Tabs variant={variant} color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
{currTab === 1 && <div>This is Tab1 content</div>}
{currTab === 2 && <div>This is Tab2 content</div>}
{currTab === 3 && <div>This is Tab3 content</div>}
        `}}}},T={render:k,args:{color:"primary"},parameters:{docs:{source:{code:`
<Tabs variant={variant} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `}}}},i={render:B,args:{variant:"standard"},parameters:{docs:{source:{code:`
<Tabs color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `}}}},d={render:R,parameters:{docs:{source:{code:`
<Tabs value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} disabled/>
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `}}}},v={render:_,parameters:{docs:{source:{code:`
<div style={{width: 700}}>
  <Tabs fullWidth value={value} onChange={handleChange}>
    <Tab label={'Tab1'} value={1} />
    <Tab label={'Tab2'} value={2} />
    <Tab label={'Tab3'} value={3} />
  </Tabs>
</div>
        `}}}};var x,p,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    variant: 'standard',
    color: 'primary'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Tabs variant={variant} color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
{currTab === 1 && <div>This is Tab1 content</div>}
{currTab === 2 && <div>This is Tab2 content</div>}
{currTab === 3 && <div>This is Tab3 content</div>}
        \`
      }
    }
  }
}`,...(j=(p=u.parameters)==null?void 0:p.docs)==null?void 0:j.source}}};var m,g,C;T.parameters={...T.parameters,docs:{...(m=T.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: VariantTemplate,
  args: {
    color: 'primary'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Tabs variant={variant} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        \`
      }
    }
  }
}`,...(C=(g=T.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,f,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ColorTemplate,
  args: {
    variant: 'standard'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Tabs color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        \`
      }
    }
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,W,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DisableTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
<Tabs value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} disabled/>
  <Tab label={'Tab3'} value={3} />
</Tabs>
        \`
      }
    }
  }
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var w,V,E;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: FullWidthTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{width: 700}}>
  <Tabs fullWidth value={value} onChange={handleChange}>
    <Tab label={'Tab1'} value={1} />
    <Tab label={'Tab2'} value={2} />
    <Tab label={'Tab3'} value={3} />
  </Tabs>
</div>
        \`
      }
    }
  }
}`,...(E=(V=v.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const A=["Default","Variant","Color","Disabled","FullWidth"];export{i as Color,u as Default,d as Disabled,v as FullWidth,T as Variant,A as __namedExportsOrder,z as default};
