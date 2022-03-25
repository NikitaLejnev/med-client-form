import{r as D,c as p,a as q,m as R,b as E,n as Y,u as L,o as i,d as u,F as h,e as w,f as t,t as g,g as v,h as b,i as c,j as A,k as m,l as j,p as s,w as T,q as $,s as f,v as K,x as P,y as x,z as Z,A as F,B as H}from"./vendor.97e76843.js";const J=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function l(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=l(o);fetch(o.href,e)}};J();const d=D({firstName:"",lastName:"",patronym:"",birthDate:"",phoneNumber:"7",gender:void 0,clientGroup:[],doctor:void 0,noSms:!1}),Q=[{label:"\u0418\u043C\u044F",property:"firstName",id:"first-name",required:!0},{label:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",property:"lastName",id:"last-name",required:!0},{label:"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",property:"patronym",id:"patronym",required:!1}],W=[{label:"\u0418\u043D\u0434\u0435\u043A\u0441",property:"zipCode",id:"zip-code",required:!1},{label:"\u0421\u0442\u0440\u0430\u043D\u0430",property:"country",id:"country",required:!1},{label:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C",property:"region",id:"region",required:!1},{label:"\u0413\u043E\u0440\u043E\u0434",property:"city",id:"city",required:!0},{label:"\u0423\u043B\u0438\u0446\u0430",property:"street",id:"street",required:!1},{label:"\u0414\u043E\u043C",property:"house",id:"house",required:!1}],X=[{label:"\u0421\u0435\u0440\u0438\u044F",property:"serialNumber",id:"serial-number",required:!1},{label:"\u041D\u043E\u043C\u0435\u0440",property:"documentNumber",id:"document-number",required:!1},{label:"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",property:"issuer",id:"issuer",required:!1}],B=r=>{const n=new Date,l=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),e=`${l}-${a}-${o}`;return r.length===10&&r>"1900-01-01"&&r<=e},ee=r=>!p.req(r)||r.indexOf(7)===0,C=r=>{if(r!=="")return/[a-zA-Zа-яА-Я]+/.test(r)},te={firstName:{required:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F",q),isValidName:p.withMessage("\u0412 \u0438\u043C\u0435\u043D\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B",C)},lastName:{required:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E",q),isValidName:p.withMessage("\u0412 \u0444\u0430\u043C\u0438\u043B\u0438\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B",C)},birthDate:{isValidDate:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",B)},phoneNumber:{required:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",q),minLength:p.withMessage("\u0412 \u043D\u043E\u043C\u0435\u0440\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043C\u0435\u043D\u044C\u0448\u0435 11 \u0446\u0438\u0444\u0440",R(11)),maxLength:p.withMessage("\u0412 \u043D\u043E\u043C\u0435\u0440\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 11 \u0446\u0438\u0444\u0440",E(11)),isValidPhoneNumber:p.withMessage("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 \u0446\u0438\u0444\u0440\u044B 7",ee),numeric:p.withMessage("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B",Y)},clientGroup:{required:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",q)}},V=L(te,d,{$autoDirty:!0}),oe={key:0},S={props:["v$","property"],setup(r){const n=r;return(l,a)=>{var o;return(o=n.v$[r.property])!=null&&o.$errors?(i(),u("div",oe,[(i(!0),u(h,null,w(r.v$[r.property].$errors,e=>(i(),u("div",{class:"alert alert-danger",key:e.$uid},[t("strong",null,g(e.$message),1)]))),128))])):v("",!0)}}};var G=(r,n)=>{const l=r.__vccOpts||r;for(const[a,o]of n)l[a]=o;return l};const se={},re={class:"required"};function ne(r,n){return i(),u("span",re,"*")}var N=G(se,[["render",ne]]);const le={class:"input-group"},ie=["for"],ae=["value","id"],z={props:["v$","id","modelValue","property","label","required"],emits:["update:modelValue"],setup(r){return(n,l)=>(i(),u(h,null,[t("div",le,[r.required?(i(),b(N,{key:0})):v("",!0),t("label",{for:r.id},g(r.label),9,ie),t("input",{class:"text-field",value:r.modelValue,onInput:l[0]||(l[0]=a=>n.$emit("update:modelValue",a.target.value)),id:r.id},null,40,ae)]),c(S,{v$:r.v$,property:r.property},null,8,["v$","property"])],64))}},ue={class:"input-group"},de=["for"],ce=["value","id"],I={props:["v$","id","modelValue","property","required"],emits:["update:modelValue"],setup(r){return(n,l)=>(i(),u(h,null,[t("div",ue,[r.required?(i(),b(N,{key:0})):v("",!0),t("label",{for:r.id},[A(n.$slots,"default",{},()=>[m(g(n.labelName),1)])],8,de),t("input",{type:"date",value:r.modelValue,onInput:l[0]||(l[0]=a=>n.$emit("update:modelValue",a.target.value)),id:r.id},null,40,ce)]),c(S,{v$:r.v$,property:r.property},null,8,["v$","property"])],64))}},pe=["disabled"],O={props:["v$"],emits:["submit"],setup(r,{emit:n}){const l=r,a=j(()=>l.v$.$errors.length>0);return(o,e)=>(i(),u("button",{onClick:e[0]||(e[0]=_=>n("submit")),class:"btn-success",disabled:s(a)},[A(o.$slots,"default",{},()=>[m(g(o.buttonText),1)])],8,pe))}},me=t("header",null,[t("h2",null,"\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")],-1),_e=["onSubmit"],he=m("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),ve={class:"input-group"},$e=t("label",{for:"phone-number"},"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",-1),fe={class:"form-check"},ye=t("label",{class:"form-check-label",for:"male"},"\u041C\u0443\u0436\u0447\u0438\u043D\u0430",-1),be={class:"form-check"},ge=t("label",{class:"form-check-label",for:"female"},"\u0416\u0435\u043D\u0449\u0438\u043D\u0430",-1),Ve={class:"input-group"},qe=t("label",{class:"select-label",for:"client-group"},"\u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",-1),Ne=t("option",{value:"vip"},"VIP",-1),ke=t("option",{value:"problem"},"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u044B\u0435",-1),Se=t("option",{value:"oms"},"\u041E\u041C\u0421",-1),De=[Ne,ke,Se],we={class:"input-group"},Me=t("label",{class:"select-label",for:"doctor"},"\u041B\u0435\u0447\u0430\u0449\u0438\u0439 \u0432\u0440\u0430\u0447",-1),xe=t("option",{value:"ivanov"},"\u0418\u0432\u0430\u043D\u043E\u0432",-1),Ce=t("option",{value:"zaharov"},"\u0417\u0430\u0445\u0430\u0440\u043E\u0432",-1),Ue=t("option",{value:"chernysheva"},"\u0427\u0435\u0440\u043D\u044B\u0448\u0435\u0432\u0430",-1),Le=[xe,Ce,Ue],Te={class:"form-check"},Fe=t("label",{class:"form-check-label",for:"no-sms"},"\u041D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0421\u041C\u0421",-1),ze=m("\u0414\u0430\u043B\u0435\u0435"),Oe={emits:["stepCompleted"],setup(r,{emit:n}){const l=async()=>{!await V.value.$validate()||n("stepCompleted")};return(a,o)=>(i(),u(h,null,[me,t("main",null,[t("form",{onSubmit:T(l,["prevent"])},[(i(!0),u(h,null,w(s(Q),e=>(i(),u("div",{key:e.id},[c(z,F({v$:s(V)},e,{modelValue:s(d)[e.property],"onUpdate:modelValue":_=>s(d)[e.property]=_}),{default:$(()=>[m(g(e.label),1)]),_:2},1040,["v$","modelValue","onUpdate:modelValue"])]))),128)),c(I,{v$:s(V),id:"birth-date",modelValue:s(d).birthDate,"onUpdate:modelValue":o[0]||(o[0]=e=>s(d).birthDate=e),property:"birthDate",required:"true"},{default:$(()=>[he]),_:1},8,["v$","modelValue"]),t("div",ve,[c(N),$e,f(t("input",{class:"text-field",type:"tel","onUpdate:modelValue":o[1]||(o[1]=e=>s(d).phoneNumber=e),id:"phone-number"},null,512),[[K,s(d).phoneNumber]])]),c(S,{v$:s(V),property:"phoneNumber"},null,8,["v$"]),t("div",fe,[f(t("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":o[2]||(o[2]=e=>s(d).gender=e),id:"male",value:"male"},null,512),[[P,s(d).gender]]),ye]),t("div",be,[f(t("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":o[3]||(o[3]=e=>s(d).gender=e),id:"female",value:"female"},null,512),[[P,s(d).gender]]),ge]),t("div",Ve,[c(N),qe,f(t("select",{class:"input-select-multiple","onUpdate:modelValue":o[4]||(o[4]=e=>s(d).clientGroup=e),id:"client-group",multiple:""},De,512),[[x,s(d).clientGroup]])]),c(S,{v$:s(V),property:"clientGroup"},null,8,["v$"]),t("div",we,[Me,f(t("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>s(d).doctor=e),id:"doctor",name:"doctor"},Le,512),[[x,s(d).doctor]])]),t("div",Te,[Fe,f(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[6]||(o[6]=e=>s(d).noSms=e),id:"no-sms",value:"true"},null,512),[[Z,s(d).noSms]])]),c(O,{v$:s(V)},{default:$(()=>[ze]),_:1},8,["v$"])],40,_e)])],64))}},U=D({zipCode:"",country:"",region:"",city:"",street:"",house:void 0}),Pe={city:{required:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",q),isValidName:p.withMessage("\u0412 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0438 \u0433\u043E\u0440\u043E\u0434\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B",C)}},M=L(Pe,U,{$autoDirty:!0}),Ae=t("header",null,[t("h2",null,"\u0410\u0434\u0440\u0435\u0441")],-1),Be=["onSubmit"],Ge=m("\u0414\u0430\u043B\u0435\u0435"),Ie={emits:["stepCompleted"],setup(r,{emit:n}){async function l(){!await M.value.$validate()||n("stepCompleted")}return(a,o)=>(i(),u(h,null,[Ae,t("main",null,[t("form",{onSubmit:T(l,["prevent"])},[(i(!0),u(h,null,w(s(W),e=>(i(),u("div",{key:e.id},[c(z,F({v$:s(M)},e,{modelValue:s(U)[e.property],"onUpdate:modelValue":_=>s(U)[e.property]=_}),{default:$(()=>[m(g(e.label),1)]),_:2},1040,["v$","modelValue","onUpdate:modelValue"])]))),128)),c(O,{v$:s(M)},{default:$(()=>[Ge]),_:1},8,["v$"])],40,Be)])],64))}},y=D({documentType:void 0,serialNumber:void 0,documentNumber:void 0,issuer:"",issueDate:""}),Re={documentType:{required:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",q)},issueDate:{isValidDate:p.withMessage("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u0430\u0442\u0443 \u0432\u044B\u0434\u0430\u0447\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",B)}},k=L(Re,y,{$autoDirty:!0}),Ee=t("header",null,[t("h2",null,"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442")],-1),Ye=["onSubmit"],je={class:"input-group"},Ke=t("label",{class:"select-label",for:"document-type"},"\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",-1),Ze=t("option",{value:"passport"},"\u041F\u0430\u0441\u043F\u043E\u0440\u0442",-1),He=t("option",{value:"birth-certificate"},"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",-1),Je=t("option",{value:"driver-license"},"\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",-1),Qe=[Ze,He,Je],We=m("\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438"),Xe=m("\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),et={emits:["stepCompleted"],setup(r,{emit:n}){const l=async()=>{!await k.value.$validate()||n("stepCompleted")};return(a,o)=>(i(),u(h,null,[Ee,t("main",null,[t("form",{onSubmit:T(l,["prevent"])},[t("div",je,[c(N),Ke,f(t("select",{id:"document-type","onUpdate:modelValue":o[0]||(o[0]=e=>s(y).documentType=e)},Qe,512),[[x,s(y).documentType]])]),c(S,{v$:s(k),property:"documentType"},null,8,["v$"]),(i(!0),u(h,null,w(s(X),e=>(i(),u("div",{key:e.id},[c(z,F({v$:s(k)},e,{modelValue:s(y)[e.property],"onUpdate:modelValue":_=>s(y)[e.property]=_}),{default:$(()=>[m(g(e.label),1)]),_:2},1040,["v$","modelValue","onUpdate:modelValue"])]))),128)),c(I,{v$:s(k),id:"issue-date",modelValue:s(y).issueDate,"onUpdate:modelValue":o[1]||(o[1]=e=>s(y).issueDate=e),property:"issueDate",required:"true"},{default:$(()=>[We]),_:1},8,["v$","modelValue"]),c(O,{v$:s(k)},{default:$(()=>[Xe]),_:1},8,["v$"])],40,Ye)])],64))}},tt={},ot={class:"alert alert-success"},st=t("strong",null,"\u041A\u043B\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D!",-1),rt=[st];function nt(r,n){return i(),u("div",ot,rt)}var lt=G(tt,[["render",nt]]);const it={class:"col-8-m col-12-s card"},at=t("header",{class:"card-title"},[t("h1",null,"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430")],-1),ut={class:"card-body"},dt={key:0},ct=m("- \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043A \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E"),pt={setup(r){const n=D({currentStep:1}),l=()=>{n.currentStep+=1};return(a,o)=>(i(),u("div",it,[at,t("main",ut,[s(n).currentStep!==4?(i(),u("small",dt,[c(N),ct])):v("",!0),s(n).currentStep===1?(i(),b(Oe,{key:1,onStepCompleted:l})):v("",!0),s(n).currentStep===2?(i(),b(Ie,{key:2,onStepCompleted:l})):v("",!0),s(n).currentStep===3?(i(),b(et,{key:3,onStepCompleted:l})):v("",!0),s(n).currentStep===4?(i(),b(lt,{key:4})):v("",!0)])]))}};const mt={setup(r){return(n,l)=>(i(),b(pt))}};H(mt).mount("#app");
