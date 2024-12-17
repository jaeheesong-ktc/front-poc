import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{S as v}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const n=({id:t,children:e,variant:u="elevation",elevation:l=1,style:d,...c})=>{const m=["ktc-paper-root",u==="outlined"?`ktc-paper-outlined ktc-paper-outlined-elevation-${l}`:`ktc-paper-elevation-${l}`].filter(Boolean).join(" ");return r.jsx("div",{id:t,className:m,style:d,...c,children:e})};n.__docgenInfo={description:"",methods:[],displayName:"Paper",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'elevation'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevation'"}]},description:"",defaultValue:{value:"'elevation'",computed:!1}},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"}]},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const p=["outlined","elevation"],S={title:"Components/Paper",component:n,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{variant:{control:{type:"select",options:p},description:"Paper 의 유형을 설정합니다."}}},a={render:()=>{const t=p.map(e=>r.jsx(n,{variant:e,elevation:1,children:`this is a ${e} paper`}));return r.jsx(v,{items:t})},parameters:{docs:{source:{code:`
          <Paper {...args} />
        `}}}};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const defaultGroup = variantOptions.map(variant => <Paper variant={variant} elevation={1} children={\`this is a \${variant} paper\`} />);
    return <StoryTemplate items={defaultGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <Paper {...args} />
        \`
      }
    }
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Default"];export{a as Default,g as __namedExportsOrder,S as default};
