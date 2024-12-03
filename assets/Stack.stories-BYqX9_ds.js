import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{S as t}from"./Stack-OFNnL2IW.js";import"./index-DJO9vBfz.js";const y={title:"Components/Stack",component:t,tags:["autodocs","!dev"],argTypes:{children:{description:"children 요소를 설정합니다."},direction:{table:{subcategory:"align",control:{type:"radio"},options:["row","row-reverse","column","column-reverse"]},description:"방향을 설정합니다."},alignItems:{table:{subcategory:"align",control:{type:"radio"},options:["start","center","end","stretch"]},description:"위쪽, 가운데, 아래쪽 맞춤을 설정합니다."},justifyContent:{table:{subcategory:"align",control:{type:"radio"},options:["start","center","end","space-between"]},description:"왼쪽, 가운데, 오른쪽 맞춤을 설정합니다."},spacing:{control:{type:"range",min:1,max:1e3,step:1},description:"자식 요소 간격을 조정합니다."}}},i={args:{spacing:10,direction:"row",alignItems:"center",justifyContent:"center"},render:n=>e.jsxs(t,{direction:n.direction,spacing:n.spacing,alignItems:n.alignItems,justifyContent:n.justifyContent,children:[e.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 1"}),e.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 2"}),e.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 3"})]}),parameters:{docs:{source:{code:`
<Stack
  spacing={10}
  direction='row'
  alignItems='center'
  justifyContent='center'
>
  <div>Container 1</div>
  <div>Container 2</div>
  <div>Container 3</div>
</Stack>
        `}}}},r={args:{spacing:100,direction:"row",alignItems:"center",justifyContent:"center"},render:n=>e.jsxs(t,{direction:n.direction,spacing:n.spacing,alignItems:n.alignItems,justifyContent:n.justifyContent,children:[e.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 1"}),e.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 2"}),e.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 3"})]}),parameters:{docs:{source:{code:`
<Stack
  spacing={100}
  direction='row'
  alignItems='center'
  justifyContent='center'
>
  <div>Container 1</div>
  <div>Container 2</div>
  <div>Container 3</div>
</Stack>
        `}}}};var o,d,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    spacing: 10,
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  render: (args: Args) => {
    return <Stack direction={args.direction} spacing={args.spacing} alignItems={args.alignItems} justifyContent={args.justifyContent}>
        <div style={{
        border: '1px solid lightGrey',
        borderRadius: 5,
        padding: 5
      }}>Container 1</div>
        <div style={{
        border: '1px solid lightGrey',
        borderRadius: 5,
        padding: 5
      }}>Container 2</div>
        <div style={{
        border: '1px solid lightGrey',
        borderRadius: 5,
        padding: 5
      }}>Container 3</div>
      </Stack>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Stack
  spacing={10}
  direction='row'
  alignItems='center'
  justifyContent='center'
>
  <div>Container 1</div>
  <div>Container 2</div>
  <div>Container 3</div>
</Stack>
        \`
      }
    }
  }
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var a,c,g;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    spacing: 100,
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  render: (args: Args) => {
    return <Stack direction={args.direction} spacing={args.spacing} alignItems={args.alignItems} justifyContent={args.justifyContent}>
        <div style={{
        border: '1px solid lightGrey',
        borderRadius: 5,
        padding: 5
      }}>Container 1</div>
        <div style={{
        border: '1px solid lightGrey',
        borderRadius: 5,
        padding: 5
      }}>Container 2</div>
        <div style={{
        border: '1px solid lightGrey',
        borderRadius: 5,
        padding: 5
      }}>Container 3</div>
      </Stack>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Stack
  spacing={100}
  direction='row'
  alignItems='center'
  justifyContent='center'
>
  <div>Container 1</div>
  <div>Container 2</div>
  <div>Container 3</div>
</Stack>
        \`
      }
    }
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const v=["Default","Spacing"];export{i as Default,r as Spacing,v as __namedExportsOrder,y as default};
