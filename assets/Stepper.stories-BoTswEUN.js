import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as p}from"./index-DJO9vBfz.js";import{B as m}from"./Button-CLpvGU5F.js";import"./Text-CwlthFVK.js";import"./Checkbox-JTS2Qgmi.js";import"./Container-BulatbKx.js";import"./TextField-CKtEpWgk.js";import"./Radio-CpyH_bhr.js";import"./Badge-Cd21iGhO.js";import"./IconButton-C1AG0cBD.js";import"./Divider-DR0FmXq-.js";import"./Chip-BtnfV9-L.js";import"./Select-BANHN7tX.js";import"./Skeleton-BhALZOrO.js";import"./Tabs-B9S4jwIs.js";import"./Typography-CqYQLWa2.js";import"./Paper-3Gn_Ivg_.js";import{h as f}from"./index-DFFA2HIJ.js";import"./Stack-OFNnL2IW.js";import"./index-BxPC4Dyl.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";/* empty css                 */const S=p.createContext(void 0),c=({activeStep:n,children:s})=>{const[t,i]=p.useState(n);return p.useEffect(()=>{i(n)},[n]),e.jsx("div",{className:"ktc-stepper",children:e.jsx(S.Provider,{value:{step:t,setStep:i},children:s})})};c.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const h=({label:n,value:s})=>{const{step:t,setStep:i}=p.useContext(S);p.useCallback(r=>()=>{i(r)},[t]);const a=p.useCallback(r=>r<t?"prev":r===t?"current":"next",[t]);return e.jsxs("div",{className:`${s===1?"ktc-stepper-step-first":"ktc-stepper-step"}`,children:[s!==1&&e.jsx("div",{className:`ktc-stepper-step-bar ktc-stepper-step-bar-${a(s)}`}),e.jsxs("div",{className:"ktc-stepper-step-wrapper",children:[e.jsx("div",{className:`ktc-stepper-step-number ktc-stepper-step-number-${a(s)}`,children:s<t?e.jsx(f,{size:22}):s}),e.jsx("div",{className:`ktc-stepper-step-label ktc-stepper-step-label-${a(s)}`,children:n})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},value:{required:!0,tsType:{name:"number"},description:""}}};const G={title:"Components/Stepper",component:c,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{activeStep:{description:"현재 활성화된 Step을 설정합니다.",control:{type:"text"}}}},j=n=>{const s=["Step1","Step2","Step3","Step4"],[t,i]=p.useState(1),a=r=>{i(r)};return e.jsxs("div",{style:{width:600,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(c,{activeStep:t,children:s.map((r,l)=>e.jsx(h,{label:r,value:l+1},l))}),e.jsxs("div",{style:{border:"1px solid #e0e0e0",padding:10,margin:20,width:"100%"},children:[t===1&&e.jsx("span",{children:"This is Step1 Content"}),t===2&&e.jsx("span",{children:"This is Step2 Content"}),t===3&&e.jsx("span",{children:"This is Step3 Content"}),t===4&&e.jsx("span",{children:"This is Step4 Content"})]}),e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center",gap:10},children:[e.jsx(m,{label:"이전",size:"small",variant:"outlined",disabled:t===1,onClick:()=>{a(Number(t)-1)}}),e.jsx(m,{label:"다음",size:"small",disabled:t===s.length,onClick:()=>{a(Number(t)+1)}})]})]})},o={render:j,parameters:{docs:{source:{code:`
<Stepper activeStep={activeStep}>
  {stepList.map((step: string, index) => (
    <Step key={index} label={step} value={index + 1} />
   ))}
</Stepper>
        `}}}};var d,u,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,G as default};
