import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";const _=i.createContext(void 0),e=({label:n,value:l,disabled:t=!1})=>{const{selectedTab:r,setSelectedTab:o}=i.useContext(_),p=i.useCallback(u=>()=>{o(u)},[r]);return a.jsx("div",{className:`ktc-tab ${l===r?"ktc-tab-selected":""} ${t?"ktc-tab-disabled":""}`,onClick:p(l),children:n})};e.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const s=({value:n,onChange:l,children:t,variant:r="standard",color:o="primary",fullWidth:p=!1})=>{const[u,I]=i.useState(n);return i.useEffect(()=>{l&&l(u)},[u]),a.jsx("div",{className:`ktc-tabs ktc-tabs-${r}-${o} ${p?"ktc-tabs-fullWidth":""}`,children:a.jsx(_.Provider,{value:{selectedTab:u,setSelectedTab:I},children:t})})};s.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"Components/Tab",component:s,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{variant:{description:"Tab 유형을 설정합니다.",control:{type:"select"}},value:{description:"선택된 Tab의 값을 정의합니다.",control:{type:"text"}},color:{description:"Tab 색상을 정의합니다.",control:{type:"select"}},onChange:{description:"Tab의 onChange event를 설정합니다."}}},h=({children:n})=>a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingBlock:"20px"},children:a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"50px"},children:n})}),b=({children:n})=>a.jsx("div",{style:{paddingBlock:"20px",paddingInline:"10px"},children:n}),N=n=>{const[l,t]=i.useState(1),r=o=>{t(o)};return a.jsxs(a.Fragment,{children:[a.jsxs(s,{fullWidth:n.fullWidth,variant:n.variant,color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),l===1&&a.jsx(b,{children:"This is Tab1 content"}),l===2&&a.jsx(b,{children:"This is Tab2 content"}),l===3&&a.jsx(b,{children:"This is Tab3 content"})]})},R=n=>{const[l,t]=i.useState(1),r=o=>{t(o)};return a.jsxs(h,{children:[a.jsxs(s,{variant:"standard",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:"filled",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:"outlined",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]})]})},$=n=>{const[l,t]=i.useState(1),r=o=>{t(o)};return a.jsxs(a.Fragment,{children:[a.jsxs(h,{children:[a.jsxs(s,{variant:n.variant,color:"primary",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"secondary",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"success",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]})]}),a.jsxs(h,{children:[a.jsxs(s,{variant:n.variant,color:"info",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"warning",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),a.jsxs(s,{variant:n.variant,color:"error",value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]})]})]})},B=n=>{const[l,t]=i.useState(1),r=o=>{t(o)};return a.jsx(h,{children:a.jsxs(s,{variant:"standard",color:n.color,value:l,onChange:r,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2,disabled:!0}),a.jsx(e,{label:"Tab3",value:3})]})})},P=n=>{const[l,t]=i.useState(1),r=o=>{t(o)};return a.jsxs("div",{style:{width:700,height:150,border:"1px solid #e0e0e0",borderRadius:5},children:[a.jsxs(s,{value:l,onChange:r,fullWidth:!0,children:[a.jsx(e,{label:"Tab1",value:1}),a.jsx(e,{label:"Tab2",value:2}),a.jsx(e,{label:"Tab3",value:3})]}),l===1&&a.jsx(b,{children:"This is Tab1 content"}),l===2&&a.jsx(b,{children:"This is Tab2 content"}),l===3&&a.jsx(b,{children:"This is Tab3 content"})]})},c={render:N,args:{variant:"standard",color:"primary"},parameters:{docs:{source:{code:`
<Tabs variant={variant} color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
{currTab === 1 && <div>This is Tab1 content</div>}
{currTab === 2 && <div>This is Tab2 content</div>}
{currTab === 3 && <div>This is Tab3 content</div>}
        `}}}},d={render:R,args:{color:"primary"},parameters:{docs:{source:{code:`
<Tabs variant={variant} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `}}}},T={render:$,args:{variant:"standard"},parameters:{docs:{source:{code:`
<Tabs color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `}}}},v={render:B,parameters:{docs:{source:{code:`
<Tabs value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} disabled/>
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `}}}},m={render:P,parameters:{docs:{source:{code:`
<div style={{width: 700}}>
  <Tabs fullWidth value={value} onChange={handleChange}>
    <Tab label={'Tab1'} value={1} />
    <Tab label={'Tab2'} value={2} />
    <Tab label={'Tab3'} value={3} />
  </Tabs>
</div>
        `}}}};var x,g,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(g=c.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var C,f,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,S,k;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(S=T.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var W,q,D;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(q=v.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var V,E,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const G=["Default","Variant","Color","Disabled","FullWidth"];export{T as Color,c as Default,v as Disabled,m as FullWidth,d as Variant,G as __namedExportsOrder,A as default};
