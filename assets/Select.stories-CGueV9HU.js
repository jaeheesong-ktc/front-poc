import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{b as se}from"./index-CXSbpWhf.js";import{C as ie}from"./Chip-BWIeRR5X.js";const r=({value:a,menuList:c,menuKey:i,menuLabel:d,variant:j="outlined",size:L="small",labelAlign:Q="vertical",error:U=!1,required:W=!1,disabled:k=!1,readOnly:X=!1,multiple:v=!1,placeholder:Y,helperText:w,onChange:p,id:be,label:Z,...ve})=>{const I=s.useRef(null),[f,q]=s.useState(!1),[n,m]=s.useState(a),ee=s.useCallback(()=>{var e;(e=I.current)==null||e.focus()},[]),le=s.useCallback(()=>{q(!f),ee()},[f]),ae=s.useCallback(()=>{q(!1)},[]),ne=s.useCallback(e=>()=>{m(e),p(e),q(!1)},[n]),z=s.useCallback(e=>()=>{const o=[n].flat(1/0);typeof e=="object"?o.map(t=>t.value).includes(e.value)?(m(n.filter(t=>t.value!==e.value)),p([n.filter(t=>t.value!==e.value)])):(m([...n,e]),p([...n,e])):n.includes(e)?(m(n.filter(t=>t!==e)),p([n.filter(t=>t!==e)])):(m([...n,e]),p([...n,e]))},[n]),re=e=>{e.preventDefault()},u=(e,o)=>typeof e=="object"?e[o]:e,te=e=>{const o=[n].flat(1/0);if(v){if(typeof e=="object"&&o.map(t=>t.value).includes(e[i]))return!0;if(o.includes(e))return!0}else if(u(e,i)===u(n,i))return!0};return l.jsxs("div",{className:`ktc-select-wrapper-${Q} ${U?"ktc-select-error":""}`,children:[l.jsxs("div",{className:"ktc-select-label",children:[Z,W&&l.jsx("span",{className:"ktc-select-label-required",children:"*"})]}),l.jsxs("div",{className:`ktc-select-control ${k?"ktc-select-disabled":""} ${X?"ktc-select-readonly":""}`,children:[l.jsxs("div",{ref:I,onBlur:ae,tabIndex:k?-1:0,className:`ktc-select-controlBox ktc-select-controlBox-${j} ktc-select-controlBox-${L}`,onClick:le,children:[n.length===0&&l.jsx("div",{className:"ktc-select-placeholder",children:Y}),n.length!==0&&!v&&l.jsx("div",{children:u(n,d)}),n.length!==0&&v&&l.jsx("div",{className:"ktc-select-controlBox-multiple-chip",children:n.map(e=>l.jsx(ie,{label:u(e,d),deletable:!0,onDelete:z(e),variant:"filled"},u(e,i)))}),l.jsx(se,{className:`ktc-select-controlBox-chevronIcon ${f?"ktc-select-controlBox-chevronIcon-open":""}`})]}),l.jsx("div",{className:`ktc-select-menuList ${f?"ktc-select-menuList-open":""}`,children:c.length===0?l.jsx("div",{className:`ktc-select-menuItem-${L}`,children:"데이터가 존재하지 않습니다."}):c.map(e=>l.jsx("div",{className:`ktc-select-menuItem-${L} ${te(e)?"ktc-select-menuItem-selected ":""}`,onClick:v?z(e):ne(e),onMouseDown:re,children:u(e,d)},u(e,i)))})]}),w&&l.jsx("div",{className:"ktc-select-helperText",children:w})]})};r.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!0,tsType:{name:"any"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: any | any[]) => void",signature:{arguments:[{type:{name:"union",raw:"any | any[]",elements:[{name:"any"},{name:"Array",elements:[{name:"any"}],raw:"any[]"}]},name:"e"}],return:{name:"void"}}},description:""},menuList:{required:!0,tsType:{name:"Array",elements:[{name:"IMenuList"}],raw:"IMenuList[]"},description:""},menuKey:{required:!1,tsType:{name:"string"},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelAlign:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const ge={title:"Components/Select",component:r,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{label:{description:"Select의 라벨을 설정합니다."},labelAlign:{description:"Select의 라벨 위치를 설정합니다."},value:{description:"선택된 값을 정의합니다."},menuList:{description:"선택 가능한 메뉴 목록을 설정합니다."},variant:{description:"Select 유형을 설정합니다."},size:{description:"Select 사이즈를 설정합니다."},error:{description:"Select의 Error 여부를 설정합니다..",control:"boolean"},required:{description:"필수 선택 여부를 설정합니다.",control:"boolean"},disabled:{description:"Select의 비활성화 여부를 설정합니다. ",control:"boolean"},readOnly:{description:"Select의 읽기 전용 여부를 설정합니다.",control:"boolean"},multiple:{description:"Select의 다중 선택 여부를 설정합니다.",control:"boolean"},placeholder:{description:"Select의 placeholder를 설정합니다.",action:"string"},helperText:{description:"Select의 HelperText를 설정합니다.",action:"string"}}},b=({children:a})=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingBlock:"50px"},children:l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"50px"},children:a})}),ue=a=>{const[c,i]=s.useState(""),d=j=>{i(j)};return l.jsxs("div",{children:[l.jsx(r,{...a,value:c,onChange:d}),l.jsxs("div",{style:{fontSize:"13px",color:"#1975d2",marginTop:"20px"},children:["선택된 값: ",JSON.stringify(c)]})]})},oe=a=>l.jsxs(b,{children:[l.jsx(r,{...a,label:"vertical",labelAlign:"vertical"}),l.jsx(r,{...a,label:"horizontal",labelAlign:"horizontal"})]}),ce=a=>l.jsxs(b,{children:[l.jsx(r,{...a,label:"outlined",variant:"outlined"}),l.jsx(r,{...a,label:"standard",variant:"standard"})]}),de=a=>l.jsxs(b,{children:[l.jsx(r,{...a,label:"small",size:"small"}),l.jsx(r,{...a,label:"medium",size:"medium"})]}),pe=a=>l.jsxs(b,{children:[l.jsx(r,{...a,label:"disabled",disabled:!0}),l.jsx(r,{...a,label:"readOnly",readOnly:!0}),l.jsx(r,{...a,label:"error",error:!0})]}),me=a=>l.jsx(b,{children:l.jsx(r,{...a,label:"Multi Select",multiple:!0})}),h={render:ue,args:{label:"Label Name",placeholder:"선택해주세요",variant:"outlined",size:"small",required:!0,menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText.",labelAlign:"vertical"}},x={render:oe,args:{placeholder:"선택해주세요",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},T={render:ce,args:{label:"Label",placeholder:"선택해주세요",size:"small",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},g={render:de,args:{label:"Label",placeholder:"선택해주세요",variant:"outlined",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},y={render:pe,args:{label:"Label",placeholder:"선택해주세요",variant:"outlined",value:{label:"망고",value:"mango"},menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"}],menuKey:"value",menuLabel:"label",helperText:"This is HelperText"}},S={render:me,args:{label:"Label",placeholder:"선택해주세요",variant:"outlined",required:!0,value:"",menuList:[{label:"사과",value:"apple"},{label:"망고",value:"mango"},{label:"수박",value:"watermelon"},{label:"포도",value:"grape"},{label:"배",value:"pear"}],menuKey:"value",menuLabel:"label",size:"small",helperText:"This is HelperText",multiple:!0}};var N,V,C;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(V=h.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var H,A,M;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(A=x.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var $,D,B;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(D=T.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var K,O,E;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(E=(O=g.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var R,_,F;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(_=y.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var J,G,P;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(P=(G=S.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const ye=["Default","LabelAlign","Variant","Size","Status","MultiSelect"];export{h as Default,x as LabelAlign,S as MultiSelect,g as Size,y as Status,T as Variant,ye as __namedExportsOrder,ge as default};
