import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const i=({children:e,direction:p="row",alignItems:u="center",justifyContent:g="center",spacing:m=10})=>n.jsx("div",{className:`ktc-stack-root ktc-stack-${p}`,style:{gap:`${m}px`,alignItems:u,justifyContent:g},children:e});i.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{children:{required:!1,tsType:{name:"any"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:"",defaultValue:{value:"'row'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'space-between'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'space-between'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const C={title:"Components/Stack",component:i,tags:["autodocs","!dev"],argTypes:{children:{description:"children 요소를 설정합니다."},direction:{table:{subcategory:"align",control:{type:"radio"},options:["row","row-reverse","column","column-reverse"]},description:"방향을 설정합니다."},alignItems:{table:{subcategory:"align",control:{type:"radio"},options:["start","center","end","stretch"]},description:"위쪽, 가운데, 아래쪽 맞춤을 설정합니다."},justifyContent:{table:{subcategory:"align",control:{type:"radio"},options:["start","center","end","space-between"]},description:"왼쪽, 가운데, 오른쪽 맞춤을 설정합니다."},spacing:{control:{type:"range",min:1,max:1e3,step:1},description:"자식 요소 간격을 조정합니다."}}},t={args:{spacing:10,direction:"row",alignItems:"center",justifyContent:"center"},render:e=>n.jsxs(i,{direction:e.direction,spacing:e.spacing,alignItems:e.alignItems,justifyContent:e.justifyContent,children:[n.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 1"}),n.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 2"}),n.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 3"})]}),parameters:{docs:{source:{code:`
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
        `}}}},r={args:{spacing:100,direction:"row",alignItems:"center",justifyContent:"center"},render:e=>n.jsxs(i,{direction:e.direction,spacing:e.spacing,alignItems:e.alignItems,justifyContent:e.justifyContent,children:[n.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 1"}),n.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 2"}),n.jsx("div",{style:{border:"1px solid lightGrey",borderRadius:5,padding:5},children:"Container 3"})]}),parameters:{docs:{source:{code:`
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
        `}}}};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const f=["Default","Spacing"];export{t as Default,r as Spacing,f as __namedExportsOrder,C as default};
