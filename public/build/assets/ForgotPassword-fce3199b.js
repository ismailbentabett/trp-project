import{T as u,o as r,c as d,a as m,b as s,e as c,t as p,j as _,x as f,d as a,u as t,h as x,n as v}from"./app-be752e86.js";import{_ as b}from"./InputError-e30f7fb8.js";import{_ as g,a as h}from"./TextInput-78f436d4.js";import{P as y}from"./PrimaryButton-0dff41d8.js";import{_ as V}from"./GuestLayout-71cf826c.js";import"./Toastr-4f97591a.js";import"./AnimatedHeader-e9d69251.js";import"./CommandPalette-97a0a532.js";const w={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 m-20"},P={class:"mx-auto max-w-3xl"},k=s("div",{class:"mb-4 text-sm text-gray-600"}," Vous avez oublié votre mot de passe ? Pas de problème. Indiquez-nous votre adresse électronique et nous vous enverrons par courriel un mot de passe réinitialisation qui vous permettra d'en choisir un nouveau. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],N={class:"flex items-center justify-end mt-4"},T={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=u({email:""}),l=()=>{e.post(route("password.email"))};return(S,i)=>(r(),d(V,{title:"Mot De Passe Oublié",description:"Mot De Passe Oublié"},{default:m(()=>[s("div",w,[s("div",P,[k,o.status?(r(),c("div",B,p(o.status),1)):_("",!0),s("form",{onSubmit:f(l,["prevent"])},[s("div",null,[a(g,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":i[0]||(i[0]=n=>t(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(b,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),s("div",N,[a(y,{class:v({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:m(()=>[x(" Lien de réinitialisation du mot de passe par courriel ")]),_:1},8,["class","disabled"])])],40,q)])])]),_:1}))}};export{T as default};
