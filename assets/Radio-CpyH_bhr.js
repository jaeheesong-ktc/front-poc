import{j as e}from"./jsx-runtime-CkxqCPlQ.js";/* empty css                 */const p=({color:l="primary",defaultChecked:i,disabled:a=!1,id:s,label:t,name:o,size:n="medium",value:d,onChange:r,...c})=>{const m=u=>{r&&r(u)};return e.jsxs("label",{className:[`storybook-font-${n}-${a?"disabled":"enabled"}`].join(" "),children:[e.jsx("input",{type:"radio",className:[`storybook-radio-color-${l}`,`storybook-radio-size-${n}`].join(" "),name:o||"",defaultChecked:!!i,disabled:!!a,id:s||"",value:d||"",onChange:m}),e.jsx("span",{children:t})]})};p.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"any"},description:""},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{p as R};
