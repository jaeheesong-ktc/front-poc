import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";const d=({color:n="primary",variant:t="standard",max:a=99,showZero:s=!1,...e})=>{const l=i.useMemo(()=>e.content>a?`${a}+`:e.content,[a,e.content]);return r.jsxs("div",{className:"ktc-badge-root",children:[e.children&&e.children,(e.content>0||e.content===0&&s)&&r.jsx("div",{className:`ktc-badge-color-${n} ktc-badge-variant-${t}`,children:t!=="dot"&&r.jsx("div",{children:l})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'dot' | 'standard'",elements:[{name:"literal",value:"'dot'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},content:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};export{d as B};
