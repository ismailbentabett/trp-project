import{l as x,r as h,L as ee,E as te,w as se,o as u,c as d,a as l,b as a,x as ae,g as M,y as $,u as e,d as o,h as v,e as m,f as y,n as i,t as p,F as w,j as g,i as k,Q as A}from"./app-be752e86.js";import{_ as re}from"./TicketsLayout-768272b1.js";import{u as le,r as V}from"./index-c4968f68.js";import{B as S,K as C,N as P,H as U,U as j}from"./listbox-82e5f2d6.js";import{r as T,a as L}from"./ChevronUpDownIcon-6b7a2e87.js";import{w as D,E as oe,k as ne}from"./radio-group-4cd65119.js";import"./AuthenticatedLayout-16295b11.js";import"./Toastr-4f97591a.js";import"./CommandPalette-97a0a532.js";import"./CartStore-76e4ad5a.js";import"./Avatar-996ef94d.js";import"./moment-fbc5633a.js";import"./LockClosedIcon-5c2619d4.js";const ie={class:"mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16"},ue=["onSubmit"],ce={class:"space-y-6"},de=a("div",null,[a("h1",{class:"text-lg font-medium leading-6 text-gray-900"},"Créer un ticket d'assistance"),a("p",{class:"mt-1 text-sm text-gray-500"},"Créer un ticket d'assistance ci-dessous .")],-1),me=a("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"Titre",-1),pe={class:"mt-1"},fe=a("label",{for:"message",class:"block text-sm font-medium text-gray-700"},"Message",-1),ge={class:"mt-1"},be={class:"isolate mt-1 -space-y-px rounded-md bg-white shadow-sm"},xe=a("span",{class:"rounded-full bg-white w-1.5 h-1.5"},null,-1),he=[xe],ve={class:"ml-3 flex flex-col"},ye={class:"relative mt-1"},we={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},_e={class:"relative mt-1"},ke={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Ve={class:"relative mt-1"},Se={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Ce={class:"relative mt-1"},Pe={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Ue={class:"relative mt-1"},je={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Te=a("div",{class:"flex justify-end"},[a("button",{type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-cerulean-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cerulean-600 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"}," Create Ticket ")],-1),Ke={__name:"CreateTicket",props:{ticketCategories:{type:String,required:!0},ticketLabels:{type:String,required:!0},products:{type:String,required:!0},accessories:{type:String,required:!0},orders:{type:String,required:!0}},setup(F){const _=F,N=x(()=>_.ticketCategories.map(r=>({id:r.id,name:r.name}))),E=x(()=>_.ticketLabels.map(r=>({id:r.id,name:r.name}))),O=x(()=>_.products.map(r=>({id:r.id,name:r.name}))),z=x(()=>_.accessories.map(r=>({id:r.id,name:r.name}))),q=x(()=>_.orders.map(r=>({id:r.id,name:"Commande #00"+r.id}))),H=r=>s.categories.indexOf(r)!==-1,K=r=>s.labels.indexOf(r)!==-1,Q=r=>s.products.indexOf(r)!==-1,R=r=>s.accessories.indexOf(r)!==-1,G=r=>s.orders.indexOf(r)!==-1,B=[{name:"low"},{name:"normal"},{name:"high"}];h(B[0]);let s=ee({title:"",message:"",priority:B[0],categories:[],labels:[],products:[],accessories:[],orders:[]});h(s.categories),h(s.labels),h(s.products),h(s.accessories),h(s.orders);const J=x(()=>({title:{required:V},message:{required:V},priority:{required:V},categories:{required:V},labels:{required:V},products:{},accessories:{},orders:{}})),W=le(J,s);te(()=>{W.value.$touch()});const X=()=>{axios.post("/tickets/store",{title:s.title,message:s.message,priority:s.priority.name,categories:s.categories?s.categories.map(r=>r.id):[],labels:s.labels?s.labels.map(r=>r.name):[],products:s.products?s.products.map(r=>r.id):[],accessories:s.accessories?s.accessories.map(r=>r.id):[],orders:s.orders?s.orders.map(r=>r.id):[]}).then(r=>{window.location.href="/tickets/discussion/"+r.data.id}).catch(r=>{})};x(()=>A().props.value.flash.alert);const Y=x(()=>A().url),b=h([]),Z=()=>{const r=new URLSearchParams(Y.value.split("?")[1]);for(const[t,n]of r.entries())b.value.push({key:t,value:n});const c=b.value.reduce((t,{key:n,value:f})=>(t[n]||(t[n]=[]),t[n].push(f),t),{});for(const[t,n]of Object.entries(c))c[t]=[...new Set(n)];b.value=c,b.value.products&&(s.products=O.value.filter(t=>b.value.products.includes(t.id.toString()))),b.value.accessories&&(s.accessories=z.value.filter(t=>b.value.accessories.includes(t.id.toString()))),b.value.orders&&(s.orders=q.value.filter(t=>b.value.orders.includes(t.id.toString())))};return se(()=>{Z()}),(r,c)=>(u(),d(re,{title:"Create Ticket",description:"Create Ticket"},{default:l(()=>[a("main",ie,[a("form",{onSubmit:ae(X,["prevent"]),class:"space-y-6"},[a("div",ce,[de,a("div",null,[me,a("div",pe,[M(a("input",{"onUpdate:modelValue":c[0]||(c[0]=t=>e(s).title=t),type:"text",name:"title",id:"title",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"},null,512),[[$,e(s).title]])])]),a("div",null,[fe,a("div",ge,[M(a("textarea",{"onUpdate:modelValue":c[1]||(c[1]=t=>e(s).message=t),id:"message",name:"message",rows:"3",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"},null,512),[[$,e(s).message]])])]),o(e(ne),{modelValue:e(s).priority,"onUpdate:modelValue":c[2]||(c[2]=t=>e(s).priority=t)},{default:l(()=>[o(e(D),{class:"text-sm font-medium text-gray-900"},{default:l(()=>[v("Priorité")]),_:1}),a("div",be,[(u(),m(w,null,y(B,(t,n)=>o(e(oe),{as:"template",key:t.name,value:t},{default:l(({checked:f,active:I})=>[a("div",{class:i([n===0?"rounded-tl-md rounded-tr-md":"",n===t.length-1?"rounded-bl-md rounded-br-md":"",f?"bg-cerulean-50 border-cerulean-200 z-10":"border-gray-200","relative border p-4 flex cursor-pointer focus:outline-none"])},[a("span",{class:i([f?"bg-cerulean-600 border-transparent":"bg-white border-gray-300",I?"ring-2 ring-offset-2 ring-cerulean-500":"","mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"]),"aria-hidden":"true"},he,2),a("span",ve,[o(e(D),{as:"span",class:i([f?"text-cerulean-900":"text-gray-900","block text-sm font-medium"])},{default:l(()=>[v(p(t.name),1)]),_:2},1032,["class"])])],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"]),N.value&&e(s).categories?(u(),d(e(S),{key:0,as:"div",modelValue:e(s).categories,"onUpdate:modelValue":c[3]||(c[3]=t=>e(s).categories=t),multiple:""},{default:l(()=>[o(e(C),{class:"block text-sm font-medium text-gray-700"},{default:l(()=>[v("Catégorie")]),_:1}),a("div",ye,[o(e(P),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"},{default:l(()=>[a("span",{class:i(["block truncate",e(s).categories.length===0?"text-gray-400":""])},p(e(s).categories.length===0?"Please select a option":e(s).categories.map(t=>t.name).join(",")),3),a("span",we,[o(e(T),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(k,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[o(e(U),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(u(!0),m(w,null,y(N.value,t=>(u(),d(e(j),{as:"template",key:t.id,value:t},{default:l(({active:n,selectedCategories:f})=>[a("li",{class:i([n?"text-white bg-cerulean-600":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:i([e(s).categories?"font-semibold":"font-normal","block truncate"])},p(t.name),3),H(t)?(u(),m("span",{key:0,class:i([n?"text-white":"text-cerulean-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[o(e(L),{class:"h-5 w-5","aria-hidden":"true"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])):g("",!0),E.value&&e(s).labels?(u(),d(e(S),{key:1,as:"div",modelValue:e(s).labels,"onUpdate:modelValue":c[4]||(c[4]=t=>e(s).labels=t),multiple:""},{default:l(()=>[o(e(C),{class:"block text-sm font-medium text-gray-700"},{default:l(()=>[v("Label")]),_:1}),a("div",_e,[o(e(P),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"},{default:l(()=>[a("span",{class:i(["block truncate",e(s).labels.length===0?"text-gray-400":""])},p(e(s).labels.length===0?"Please select a option":e(s).labels.map(t=>t.name).join(",")),3),a("span",ke,[o(e(T),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(k,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[o(e(U),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(u(!0),m(w,null,y(E.value,t=>(u(),d(e(j),{as:"template",key:t.id,value:t},{default:l(({active:n,selectedLabels:f})=>[a("li",{class:i([n?"text-white bg-cerulean-600":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:i([e(s).labels?"font-semibold":"font-normal","block truncate"])},p(t.name),3),K(t)?(u(),m("span",{key:0,class:i([n?"text-white":"text-cerulean-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[o(e(L),{class:"h-5 w-5","aria-hidden":"true"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])):g("",!0),O.value&&e(s).products?(u(),d(e(S),{key:2,as:"div",modelValue:e(s).products,"onUpdate:modelValue":c[5]||(c[5]=t=>e(s).products=t),multiple:""},{default:l(()=>[o(e(C),{class:"block text-sm font-medium text-gray-700"},{default:l(()=>[v("Produits")]),_:1}),a("div",Ve,[o(e(P),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"},{default:l(()=>[a("span",{class:i(["block truncate",e(s).products.length===0?"text-gray-400":""])},p(e(s).products.length===0?"Please select a option":e(s).products.map(t=>t.name).join(",")),3),a("span",Se,[o(e(T),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(k,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[o(e(U),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(u(!0),m(w,null,y(O.value,t=>(u(),d(e(j),{as:"template",key:t.id,value:t},{default:l(({active:n,selectedProducts:f})=>[a("li",{class:i([n?"text-white bg-cerulean-600":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:i([e(s).products?"font-semibold":"font-normal","block truncate"])},p(t.name),3),Q(t)?(u(),m("span",{key:0,class:i([n?"text-white":"text-cerulean-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[o(e(L),{class:"h-5 w-5","aria-hidden":"true"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])):g("",!0),z.value&&e(s).accessories?(u(),d(e(S),{key:3,as:"div",modelValue:e(s).accessories,"onUpdate:modelValue":c[6]||(c[6]=t=>e(s).accessories=t),multiple:""},{default:l(()=>[o(e(C),{class:"block text-sm font-medium text-gray-700"},{default:l(()=>[v("Accessoires")]),_:1}),a("div",Ce,[o(e(P),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"},{default:l(()=>[a("span",{class:i(["block truncate",e(s).accessories.length===0?"text-gray-400":""])},p(e(s).accessories.length===0?"Please select a option":e(s).accessories.map(t=>t.name).join(",")),3),a("span",Pe,[o(e(T),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(k,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[o(e(U),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(u(!0),m(w,null,y(z.value,t=>(u(),d(e(j),{as:"template",key:t.id,value:t},{default:l(({active:n,selectedAccessories:f})=>[a("li",{class:i([n?"text-white bg-cerulean-600":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:i([e(s).accessory?"font-semibold":"font-normal","block truncate"])},p(t.name),3),R(t)?(u(),m("span",{key:0,class:i([n?"text-white":"text-cerulean-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[o(e(L),{class:"h-5 w-5","aria-hidden":"true"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])):g("",!0),q.value&&e(s).orders?(u(),d(e(S),{key:4,as:"div",modelValue:e(s).orders,"onUpdate:modelValue":c[7]||(c[7]=t=>e(s).orders=t),multiple:""},{default:l(()=>[o(e(C),{class:"block text-sm font-medium text-gray-700"},{default:l(()=>[v("Commandes")]),_:1}),a("div",Ue,[o(e(P),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"},{default:l(()=>[a("span",{class:i(["block truncate",e(s).orders.length===0?"text-gray-400":""])},p(e(s).orders.length===0?"Please select a option":e(s).orders.map(t=>t.name).join(",")),3),a("span",je,[o(e(T),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(k,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[o(e(U),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(u(!0),m(w,null,y(q.value,t=>(u(),d(e(j),{as:"template",key:t.id,value:t},{default:l(({active:n,selectedOrders:f})=>[a("li",{class:i([n?"text-white bg-cerulean-600":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:i([e(s).order?"font-semibold":"font-normal","block truncate"])},p(t.name),3),G(t)?(u(),m("span",{key:0,class:i([n?"text-white":"text-cerulean-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[o(e(L),{class:"h-5 w-5","aria-hidden":"true"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])):g("",!0),Te])],40,ue)])]),_:1}))}};export{Ke as default};
