import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{o as V}from"./index-C2DXfpQM.js";import{S as T}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";const s=({id:a,label:t,value:r="",variant:U="outlined",placeholder:b,color:j="primary",required:W=!1,size:X="medium",type:h="text",style:Y,error:g=!1,disabled:Z,multiline:d=!1,rows:o,helperText:q,readOnly:ee,onChange:S,...te})=>{const[k,E]=l.useState(!1),[i,z]=l.useState(r||""),[F,ae]=l.useState(!1),n=l.useRef(null),re=()=>E(!0),ne=()=>E(!1),w=!i&&b,le=u=>{z(u.target.value),S&&S(u)},c=(...u)=>u.filter(Boolean).join(" "),C={id:a,value:i,className:c("ktc-textfield-input",`ktc-textfield-input--${j}`),placeholder:w?b:"",required:W,onFocus:re,onBlur:ne,disabled:Z,onChange:le,style:Y,readOnly:ee,...te};return l.useEffect(()=>{n.current&&(d&&!o?(n.current.style.height="auto",n.current.style.height=`${n.current.scrollHeight}px`):o&&d&&(n.current.style.height=`${o*1}em`,n.current.style.overflow=""),n.current.style.overflow="hidden")},[i,d,o]),l.useEffect(()=>{z(r||"")},[r]),e.jsx("div",{className:"ktc-textfield-root",children:e.jsxs("div",{className:c(`ktc-textfield-${X}`,`ktc-textfield-${U}`,g&&"ktc-textfield-error"),children:[e.jsxs("div",{className:c("ktc-textfield-wrapper",(k||i||w)&&"ktc-textfield-wrapper--focused"),children:[t&&e.jsx("label",{id:a,className:c("ktc-textfield-label",(k||i||w)&&`ktc-textfield-label-active ktc-textfield-label--${g?"error":j}`),children:t}),e.jsx("div",{className:"ktc-textfield-input-container",children:d?e.jsx("textarea",{ref:n,rows:o??1,...C}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:h==="password"&&F?"text":h,...C}),h==="password"&&e.jsx("button",{type:"button",onClick:()=>ae(!F),className:"ktc-textfield-show-password",children:F?e.jsx(V,{icon:"eyeclose"}):e.jsx(V,{icon:"eye"})})]})})]}),g?e.jsx("span",{className:"ktc-textfield-error",children:q}):e.jsx("span",{className:"ktc-textfield-helperText",children:q})]})})};s.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{id:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},placeholder:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},required:{required:!1,tsType:{name:"union",raw:"boolean | any",elements:[{name:"boolean"},{name:"any"}]},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'date' | 'datetime-local' | 'file' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'date'"},{name:"literal",value:"'datetime-local'"},{name:"literal",value:"'file'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | any",elements:[{name:"boolean"},{name:"any"}]},description:""},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:""}}};const K=["primary","secondary","error","success","warning"],Q=["small","medium","large"],y=["filled","outlined","standard"],se=["text","date","datetime-local","password"],me={title:"Components/TextField",component:s,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"TextField 색상을 설정합니다.",control:{type:"select",options:K}},size:{description:"TextField 크기를 설정합니다.",control:{type:"select",options:Q}},variant:{description:"TextField 유형을 설정합니다.",control:{type:"select",options:y}},label:{description:"TextField 의 label 을 설정합니다.",control:"text"},value:{description:"TextField 의 값을 설정합니다.",control:"text"},style:{description:"TextField 의 style 을 설정합니다."},placeholder:{description:"TextField 의 placeholder 를 설정합니다.",control:"text"},error:{description:"TextField 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.",control:"boolean"},helperText:{description:"TextField 의 helperText 를 설정합니다.",control:"text"},id:{description:"TextField 의 id 를 설정합니다.",control:"text"},required:{description:"TextField 의 필수 여부를 설정합니다.",control:"boolean"},disabled:{description:"TextField 의 disabled 속성을 설정합니다.",control:"boolean"},onChange:{description:"TextField 의 onChange event 를 설정합니다.",action:"changed"},rows:{description:"TextField 의 row 를 설정합니다. 최대 설정 값은 20 입니다.",control:{type:"number",min:1,step:1},defaultValue:null},type:{description:"TextField 의 형식을 설정합니다.",control:{type:"select",options:se}}}},p={args:{label:"label",placeholder:"Enter placeholder",variant:"outlined",size:"medium",color:"primary",required:!0,value:"",style:{}}},m={render:()=>{const a=y.map(t=>e.jsx(s,{label:t,variant:t,placeholder:t}));return e.jsx(T,{items:a})},parameters:{docs:{source:{code:`
          <TextField variant={variant} />
        `}}}},x={render:()=>{const a=y.map(t=>e.jsx(T,{items:K.map(r=>e.jsx(s,{label:r,color:r,variant:t,placeholder:r},`${r}-${t}`))},t));return e.jsx(e.Fragment,{children:a})},parameters:{docs:{source:{code:`
          <TextField color={color} variant={variant} />
        `}}}},f={render:()=>{const a=Q.map(t=>e.jsx(s,{label:t,size:t,placeholder:t}));return e.jsx(T,{items:a})},parameters:{docs:{source:{code:`
          <TextField size={size} />
        `}}}},v={render:()=>{const a=y.map(t=>e.jsx(s,{multiline:!0,rows:3,variant:t,label:t,placeholder:"multiline TextField"}));return e.jsx(T,{items:a})},parameters:{docs:{source:{code:`
          <TextField multiline rows={rows} />
        `}}}};var G,N,O;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'label',
    placeholder: 'Enter placeholder',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    required: true,
    value: '',
    style: {}
  }
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,$,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <TextField label={variant} variant={variant} placeholder={variant} />);
    return <StoryTemplate items={variantGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField variant={variant} />
        \`
      }
    }
  }
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var L,R,I;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = variantOptions.map(variant => <StoryTemplate key={variant} items={colorOptions.map(color => <TextField key={\`\${color}-\${variant}\`} label={color} color={color} variant={variant} placeholder={color} />)} />);
    return <>{colorGroup}</>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField color={color} variant={variant} />
        \`
      }
    }
  }
}`,...(I=(R=x.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var P,_,A;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <TextField label={size} size={size} placeholder={size} />);
    return <StoryTemplate items={sizeGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField size={size} />
        \`
      }
    }
  }
}`,...(A=(_=f.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var B,D,J;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <TextField multiline rows={3} variant={variant} label={variant} placeholder={'multiline TextField'} />);
    return <StoryTemplate items={variantGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField multiline rows={rows} />
        \`
      }
    }
  }
}`,...(J=(D=v.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};const xe=["Default","Variant","Color","Size","Multiline"];export{x as Color,p as Default,v as Multiline,f as Size,m as Variant,xe as __namedExportsOrder,me as default};
