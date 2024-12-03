import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{T as o}from"./TextField-CKtEpWgk.js";import{S as d}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";import"./index-BxPC4Dyl.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";const O=["primary","secondary","error","success","warning"],f=["small","medium","large"],p=["filled","outlined","standard"],C=["text","date","datetime-local","password"],_={title:"Components/TextField",component:o,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"TextField 색상을 설정합니다.",control:{type:"select",options:O}},size:{description:"TextField 크기를 설정합니다.",control:{type:"select",options:f}},variant:{description:"TextField 유형을 설정합니다.",control:{type:"select",options:p}},label:{description:"TextField 의 label 을 설정합니다.",control:"text"},value:{description:"TextField 의 값을 설정합니다.",control:"text"},style:{description:"TextField 의 style 을 설정합니다."},placeholder:{description:"TextField 의 placeholder 를 설정합니다.",control:"text"},error:{description:"TextField 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.",control:"boolean"},helperText:{description:"TextField 의 helperText 를 설정합니다.",control:"text"},id:{description:"TextField 의 id 를 설정합니다.",control:"text"},required:{description:"TextField 의 필수 여부를 설정합니다.",control:"boolean"},disabled:{description:"TextField 의 disabled 속성을 설정합니다.",control:"boolean"},onChange:{description:"TextField 의 onChange event 를 설정합니다.",action:"changed"},rows:{description:"TextField 의 row 를 설정합니다. 최대 설정 값은 20 입니다.",control:{type:"number",min:1,step:1},defaultValue:null},type:{description:"TextField 의 형식을 설정합니다.",control:{type:"select",options:C}}}},a={args:{label:"label",placeholder:"Enter placeholder",variant:"outlined",size:"medium",color:"primary",required:!0,value:"",style:{}}},i={render:()=>{const t=p.map(e=>r.jsx(o,{label:e,variant:e,placeholder:e}));return r.jsx(d,{items:t})},parameters:{docs:{source:{code:`
          <TextField variant={variant} />
        `}}}},s={render:()=>{const t=p.map(e=>r.jsx(d,{items:O.map(n=>r.jsx(o,{label:n,color:n,variant:e,placeholder:n},`${n}-${e}`))},e));return r.jsx(r.Fragment,{children:t})},parameters:{docs:{source:{code:`
          <TextField color={color} variant={variant} />
        `}}}},l={render:()=>{const t=f.map(e=>r.jsx(o,{label:e,size:e,placeholder:e}));return r.jsx(d,{items:t})},parameters:{docs:{source:{code:`
          <TextField size={size} />
        `}}}},c={render:()=>{const t=p.map(e=>r.jsx(o,{multiline:!0,rows:3,variant:e,label:e,placeholder:"multiline TextField"}));return r.jsx(d,{items:t})},parameters:{docs:{source:{code:`
          <TextField multiline rows={rows} />
        `}}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,v,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var y,b,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var z,g,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var G,j,w;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const R=["Default","Variant","Color","Size","Multiline"];export{s as Color,a as Default,c as Multiline,l as Size,i as Variant,R as __namedExportsOrder,_ as default};
