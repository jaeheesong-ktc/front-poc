import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as t}from"./index-DJO9vBfz.js";import{C as D}from"./index-DFFA2HIJ.js";import{C as R}from"./Chip-BtnfV9-L.js";const A=({value:b,menuList:v,menuKey:c,menuLabel:p,variant:j="outlined",size:f="small",labelAlign:q="vertical",error:I=!1,required:T=!1,disabled:y=!1,readOnly:N=!1,multiple:u=!1,placeholder:g,helperText:h,onChange:i,id:L,label:w,...O})=>{const k=t.useRef(null),[d,m]=t.useState(!1),[l,o]=t.useState(b),$=t.useCallback(()=>{var e;(e=k.current)==null||e.focus()},[]),S=t.useCallback(()=>{m(!d),$()},[d]),V=t.useCallback(()=>{m(!1)},[]),C=t.useCallback(e=>()=>{o(e),i(e),m(!1)},[l]),x=t.useCallback(e=>()=>{const r=[l].flat(1/0);typeof e=="object"?r.map(s=>s.value).includes(e.value)?(o(l.filter(s=>s.value!==e.value)),i([l.filter(s=>s.value!==e.value)])):(o([...l,e]),i([...l,e])):l.includes(e)?(o(l.filter(s=>s!==e)),i([l.filter(s=>s!==e)])):(o([...l,e]),i([...l,e]))},[l]),B=e=>{e.preventDefault()},n=(e,r)=>typeof e=="object"?e[r]:e,M=e=>{const r=[l].flat(1/0);if(u){if(typeof e=="object"&&r.map(s=>s.value).includes(e[c]))return!0;if(r.includes(e))return!0}else if(n(e,c)===n(l,c))return!0};return a.jsxs("div",{className:`ktc-select-wrapper-${q} ${I?"ktc-select-error":""}`,children:[a.jsxs("div",{className:"ktc-select-label",children:[w,T&&a.jsx("span",{className:"ktc-select-label-required",children:"*"})]}),a.jsxs("div",{className:`ktc-select-control ${y?"ktc-select-disabled":""} ${N?"ktc-select-readonly":""}`,children:[a.jsxs("div",{ref:k,onBlur:V,tabIndex:y?-1:0,className:`ktc-select-controlBox ktc-select-controlBox-${j} ktc-select-controlBox-${f}`,onClick:S,children:[l.length===0&&a.jsx("div",{className:"ktc-select-placeholder",children:g}),l.length!==0&&!u&&a.jsx("div",{children:n(l,p)}),l.length!==0&&u&&a.jsx("div",{className:"ktc-select-controlBox-multiple-chip",children:l.map(e=>a.jsx(R,{label:n(e,p),deletable:!0,onDelete:x(e),variant:"filled"},n(e,c)))}),a.jsx(D,{className:`ktc-select-controlBox-chevronIcon ${d?"ktc-select-controlBox-chevronIcon-open":""}`})]}),a.jsx("div",{className:`ktc-select-menuList ${d?"ktc-select-menuList-open":""}`,children:v.length===0?a.jsx("div",{className:`ktc-select-menuItem-${f}`,children:"데이터가 존재하지 않습니다."}):v.map(e=>a.jsx("div",{className:`ktc-select-menuItem-${f} ${M(e)?"ktc-select-menuItem-selected ":""}`,onClick:u?x(e):C(e),onMouseDown:B,children:n(e,p)},n(e,c)))})]}),h&&a.jsx("div",{className:"ktc-select-helperText",children:h})]})};A.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!0,tsType:{name:"any"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: any | any[]) => void",signature:{arguments:[{type:{name:"union",raw:"any | any[]",elements:[{name:"any"},{name:"Array",elements:[{name:"any"}],raw:"any[]"}]},name:"e"}],return:{name:"void"}}},description:""},menuList:{required:!0,tsType:{name:"Array",elements:[{name:"IMenuList"}],raw:"IMenuList[]"},description:""},menuKey:{required:!1,tsType:{name:"string"},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelAlign:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};export{A as S};
