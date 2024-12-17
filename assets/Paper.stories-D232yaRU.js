import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{P as s}from"./Paper-3Gn_Ivg_.js";import{S as c}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const p=["outlined","elevation"],v={title:"Components/Paper",component:s,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{variant:{control:{type:"select",options:p},description:"Paper 의 유형을 설정합니다."}}},e={render:()=>{const i=p.map(r=>t.jsx(s,{variant:r,elevation:1,children:`this is a ${r} paper`}));return t.jsx(c,{items:i})},parameters:{docs:{source:{code:`
          <Paper {...args} />
        `}}}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,v as default};
