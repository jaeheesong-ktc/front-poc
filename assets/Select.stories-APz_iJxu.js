import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{S as a}from"./Select-BANHN7tX.js";import{r as D}from"./index-DJO9vBfz.js";import"./index-DFFA2HIJ.js";import"./Chip-BtnfV9-L.js";const F={title:"Components/Select",component:a,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{label:{description:"Select의 라벨을 설정합니다."},labelAlign:{description:"Select의 라벨 위치를 설정합니다."},value:{description:"선택된 값을 정의합니다."},menuList:{description:"선택 가능한 메뉴 목록을 설정합니다."},variant:{description:"Select 유형을 설정합니다."},size:{description:"Select 사이즈를 설정합니다."},error:{description:"Select의 Error 여부를 설정합니다..",control:"boolean"},required:{description:"필수 선택 여부를 설정합니다.",control:"boolean"},disabled:{description:"Select의 비활성화 여부를 설정합니다. ",control:"boolean"},readOnly:{description:"Select의 읽기 전용 여부를 설정합니다.",control:"boolean"},multiple:{description:"Select의 다중 선택 여부를 설정합니다.",control:"boolean"},placeholder:{description:"Select의 placeholder를 설정합니다.",action:"string"},helperText:{description:"Select의 HelperText를 설정합니다.",action:"string"}}},n=({children:l})=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingBlock:"50px"},children:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"50px"},children:l})}),M=l=>{const[p,q]=D.useState(""),A=C=>{q(C)};return e.jsxs("div",{children:[e.jsx(a,{...l,value:p,onChange:A}),e.jsxs("div",{style:{fontSize:"13px",color:"#1975d2",marginTop:"20px"},children:["선택된 값: ",JSON.stringify(p)]})]})},O=l=>e.jsxs(n,{children:[e.jsx(a,{...l,label:"vertical",labelAlign:"vertical"}),e.jsx(a,{...l,label:"horizontal",labelAlign:"horizontal"})]}),E=l=>e.jsxs(n,{children:[e.jsx(a,{...l,label:"outlined",variant:"outlined"}),e.jsx(a,{...l,label:"standard",variant:"standard"})]}),V=l=>e.jsxs(n,{children:[e.jsx(a,{...l,label:"small",size:"small"}),e.jsx(a,{...l,label:"medium",size:"medium"})]}),N=l=>e.jsxs(n,{children:[e.jsx(a,{...l,label:"disabled",disabled:!0}),e.jsx(a,{...l,label:"readOnly",readOnly:!0}),e.jsx(a,{...l,label:"error",error:!0})]}),I=l=>e.jsx(n,{children:e.jsx(a,{...l,label:"Multi Select",multiple:!0})}),r={render:M,args:{label:"Label Name",placeholder:"선택해주세요",variant:"outlined",size:"small",required:!0,menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText.",labelAlign:"vertical"}},t={render:O,args:{placeholder:"선택해주세요",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},s={render:E,args:{label:"Label",placeholder:"선택해주세요",size:"small",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},i={render:V,args:{label:"Label",placeholder:"선택해주세요",variant:"outlined",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},u={render:N,args:{label:"Label",placeholder:"선택해주세요",variant:"outlined",value:{label:"망고",value:"mango"},menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},o={render:I,args:{label:"Label",placeholder:"선택해주세요",variant:"outlined",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"},{label:"포도",value:"grape"},{label:"배",value:"pear"}],menuKey:"value",menuLabel:"label",size:"small",helperText:"This is HelperText",multiple:!0}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    label: 'Label Name',
    placeholder: '선택해주세요',
    variant: 'outlined',
    size: 'small',
    required: true,
    menuList: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '망고',
      value: 'mango'
    }, {
      label: '수박',
      value: 'watermelon'
    }],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText.',
    labelAlign: 'vertical'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,v,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: AlignTemplate,
  args: {
    placeholder: '선택해주세요',
    required: true,
    value: '',
    menuList: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '망고',
      value: 'mango'
    }, {
      label: '수박',
      value: 'watermelon'
    }],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,T,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: VariantTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    size: 'small',
    required: true,
    value: '',
    menuList: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '망고',
      value: 'mango'
    }, {
      label: '수박',
      value: 'watermelon'
    }],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText'
  }
}`,...(g=(T=s.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var L,S,y;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: SizeTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    required: true,
    value: '',
    menuList: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '망고',
      value: 'mango'
    }, {
      label: '수박',
      value: 'watermelon'
    }],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText'
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,z,f;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: StatusTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    value: {
      label: '망고',
      value: 'mango'
    },
    menuList: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '망고',
      value: 'mango'
    }, {
      label: '수박',
      value: 'watermelon'
    }],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText'
  }
}`,...(f=(z=u.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var H,w,K;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: MultipleTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    required: true,
    value: '',
    menuList: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '망고',
      value: 'mango'
    }, {
      label: '수박',
      value: 'watermelon'
    }, {
      label: '포도',
      value: 'grape'
    }, {
      label: '배',
      value: 'pear'
    }],
    menuKey: 'value',
    menuLabel: 'label',
    size: 'small',
    helperText: 'This is HelperText',
    multiple: true
  }
}`,...(K=(w=o.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};const G=["Default","LabelAlign","Variant","Size","Status","MultiSelect"];export{r as Default,t as LabelAlign,o as MultiSelect,i as Size,u as Status,s as Variant,G as __namedExportsOrder,F as default};
