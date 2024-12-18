import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{B as d}from"./Button-CLpvGU5F.js";import{h as f}from"./index-CXSbpWhf.js";const S=n.createContext(void 0),o=({activeStep:p,children:s})=>{const[t,a]=n.useState(p);return n.useEffect(()=>{a(p)},[p]),e.jsx("div",{className:"ktc-stepper",children:e.jsx(S.Provider,{value:{step:t,setStep:a},children:s})})};o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const h=({label:p,value:s})=>{const{step:t,setStep:a}=n.useContext(S);n.useCallback(r=>()=>{a(r)},[t]);const i=n.useCallback(r=>r<t?"prev":r===t?"current":"next",[t]);return e.jsxs("div",{className:`${s===1?"ktc-stepper-step-first":"ktc-stepper-step"}`,children:[s!==1&&e.jsx("div",{className:`ktc-stepper-step-bar ktc-stepper-step-bar-${i(s)}`}),e.jsxs("div",{className:"ktc-stepper-step-wrapper",children:[e.jsx("div",{className:`ktc-stepper-step-number ktc-stepper-step-number-${i(s)}`,children:s<t?e.jsx(f,{size:22}):s}),e.jsx("div",{className:`ktc-stepper-step-label ktc-stepper-step-label-${i(s)}`,children:p})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},value:{required:!0,tsType:{name:"number"},description:""}}};const k={title:"Components/Stepper",component:o,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{activeStep:{description:"현재 활성화된 Step을 설정합니다.",control:{type:"text"}}}},j=p=>{const s=["Step1","Step2","Step3","Step4"],[t,a]=n.useState(1),i=r=>{a(r)};return e.jsxs("div",{style:{width:600,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(o,{activeStep:t,children:s.map((r,l)=>e.jsx(h,{label:r,value:l+1},l))}),e.jsxs("div",{style:{border:"1px solid #e0e0e0",padding:10,margin:20,width:"100%"},children:[t===1&&e.jsx("span",{children:"This is Step1 Content"}),t===2&&e.jsx("span",{children:"This is Step2 Content"}),t===3&&e.jsx("span",{children:"This is Step3 Content"}),t===4&&e.jsx("span",{children:"This is Step4 Content"})]}),e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center",gap:10},children:[e.jsx(d,{label:"이전",size:"small",variant:"outlined",disabled:t===1,onClick:()=>{i(Number(t)-1)}}),e.jsx(d,{label:"다음",size:"small",disabled:t===s.length,onClick:()=>{i(Number(t)+1)}})]})]})},c={render:j,parameters:{docs:{source:{code:`
<Stepper activeStep={activeStep}>
  {stepList.map((step: string, index) => (
    <Step key={index} label={step} value={index + 1} />
   ))}
</Stepper>
        `}}}};var m,u,x;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
<Stepper activeStep={activeStep}>
  {stepList.map((step: string, index) => (
    <Step key={index} label={step} value={index + 1} />
   ))}
</Stepper>
        \`
      }
    }
  }
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const C=["Default"];export{c as Default,C as __namedExportsOrder,k as default};
