import{r as p,Q as X,T as Y,w as H,o,c as u,a as i,b as e,d as l,u as a,e as n,f as y,t as x,F as _,g as B,v as D,h as I,i as J,n as O,j as F,k as A}from"./app-be752e86.js";import{_ as K}from"./AccessoryCard-305ef18a.js";import{V as P,X as U,Y as z,E as W,_ as ee}from"./AuthenticatedLayout-16295b11.js";import{_ as te}from"./Pagination-f57db763.js";import{U as se,h as G,G as ae,r as re,S as le}from"./Toastr-4f97591a.js";import{r as N,a as M,b as oe,c as ie,d as ne,e as ce}from"./Squares2X2Icon-1eddb0d0.js";import{R as de,h as ue,y as fe,M as me}from"./Avatar-996ef94d.js";import"./CommandPalette-97a0a532.js";import"./CartStore-76e4ad5a.js";const he={class:"bg-white"},pe=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ye={class:"fixed inset-0 z-40 flex"},_e={class:"flex items-center justify-between px-4"},ge=e("h2",{class:"text-lg font-medium text-gray-900"},"Filtres",-1),be=e("span",{class:"sr-only"},"Close menu",-1),xe={class:"mt-4 border-t border-gray-200"},ve=e("h3",{class:"sr-only"},"Catégories",-1),ke={class:"-mx-2 -my-3 flow-root"},we={class:"font-medium text-gray-900"},$e={class:"ml-6 flex items-center"},Ce={class:"space-y-6"},Ae=["id","name","value","checked"],je=["for"],Se={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Ee={class:"flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6"},Te=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900"},"accessoires",-1),Ve={class:"flex items-center"},Be={class:"py-1"},De=["onClick"],Oe=e("span",{class:"sr-only"},"View grid",-1),Fe=e("span",{class:"sr-only"},"Filters",-1),Pe={"aria-labelledby":"accessories-heading",class:"pt-6 pb-24"},Ue=e("h2",{id:"accessories-heading",class:"sr-only"},"accessories",-1),ze={class:"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"},Ge={class:"hidden lg:block"},Ne=e("h3",{class:"sr-only"},"Categories",-1),Me={class:"-my-3 flow-root"},Re={class:"font-medium text-gray-900"},Ze={class:"ml-6 flex items-center"},qe={class:"space-y-4"},Le=["id","name","value","checked"],Qe=["for"],Xe={class:"lg:col-span-3"},Ye={class:"h-96 rounded-lg lg:h-full"},He={key:0,role:"list",class:"col-span-3"},nt={__name:"Accessories",props:{accessories:{type:Object},categories:{type:Object},brands:{type:Object}},setup(R){const j=R,k=[{id:"category",name:"Category",filter:"by_category_id",param:"category_id",options:j.categories.map(t=>({value:t.id,label:t.name,checked:!1,filter:"by_category_id",param:"category_id"}))},{id:"brand",name:"Brand",filter:"by_brand_id",param:"brand_id",options:j.brands.map(t=>({value:t.id,label:t.name,checked:!1,filter:"by_brand_id",param:"brand_id"}))}],v=p(!1),m=p([]),Z=t=>{let r=Object.keys(t).map(s=>t[s].map(f=>`${s}[]=${f}`).join("&")).join("&");A.post(`accessories/filter?${r}`).then(s=>{m.value=s.data})},w=X().url,$=p(""),S=p("");w.includes("?")&&($.value=w.split("paramId=")[1].split("&")[0],S.value=w.split("type=")[1].split("&")[0]);const g=Y({checkbox:$.value?[k.find(t=>t.id===S.value).options.find(t=>t.value==$.value)]:[]}),E=p("");H(()=>{E.value=g.checkbox.reduce((t,r)=>(t[r.param]=t[r.param]||[],t[r.param].push(r.value),t),{}),Z(E.value)});const T=t=>{A.post(`accessories/filter?price=${t}`).then(r=>{m.value=r.data})},q=()=>{c.forEach(t=>{t.current=!1}),c[0].current=!0,T("asc")},L=()=>{c.forEach(t=>{t.current=!1}),c[1].current=!0,T("desc")},V=t=>{A.post(`accessories/filter?name=${t}`).then(r=>{m.value=r.data})},c=[{name:"Prix : Du plus bas au plus haut",href:"#",current:!1,function:q},{name:"Prix : du plus haut au plus bas",href:"#",current:!1,function:L},{name:"A à Z",href:"#",current:!1,function:()=>{c.forEach(t=>{t.current=!1}),c[2].current=!0,V("asc")}},{name:"Z à A",href:"#",current:!1,function:()=>{c.forEach(t=>{t.current=!1}),c[3].current=!0,V("desc")}}],h=p("grid"),Q=()=>{h.value==="grid"?h.value="list":h.value="grid"};return(t,r)=>(o(),u(ee,{title:"Accessoires",description:"Accessoires"},{default:i(()=>[e("div",he,[e("div",null,[l(a(le),{as:"template",show:v.value},{default:i(()=>[l(a(se),{as:"div",class:"relative z-40 lg:hidden",onClose:r[2]||(r[2]=s=>v.value=!1)},{default:i(()=>[l(a(G),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[pe]),_:1}),e("div",ye,[l(a(G),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:i(()=>[l(a(ae),{class:"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"},{default:i(()=>[e("div",_e,[ge,e("button",{type:"button",class:"-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",onClick:r[0]||(r[0]=s=>v.value=!1)},[be,l(a(re),{class:"h-6 w-6","aria-hidden":"true"})])]),e("form",xe,[ve,(o(),n(_,null,y(k,s=>l(a(P),{as:"div",key:s.id,class:"border-t border-gray-200 px-4 py-6"},{default:i(({open:f})=>[e("h3",ke,[l(a(U),{class:"flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"},{default:i(()=>[e("span",we,x(s.name),1),e("span",$e,[f?(o(),u(a(M),{key:1,class:"h-5 w-5","aria-hidden":"true"})):(o(),u(a(N),{key:0,class:"h-5 w-5","aria-hidden":"true"}))])]),_:2},1024)]),l(a(z),{class:"pt-6"},{default:i(()=>[e("div",Ce,[(o(!0),n(_,null,y(s.options,(d,b)=>(o(),n("div",{key:d.value,class:"flex items-center"},[B(e("input",{"onUpdate:modelValue":r[1]||(r[1]=C=>a(g).checkbox=C),id:`filter-mobile-${s.id}-${b}`,name:`${s.id}[]`,value:d,type:"checkbox",checked:d.checked,class:"h-4 w-4 rounded border-gray-300 text-cerulean-600 focus:ring-cerulean-500"},null,8,Ae),[[D,a(g).checkbox]]),e("label",{for:`filter-mobile-${s.id}-${b}`,class:"ml-3 min-w-0 flex-1 text-gray-500"},x(d.label),9,je)]))),128))])]),_:2},1024)]),_:2},1024)),64))])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]),e("main",Se,[e("div",Ee,[Te,e("div",Ve,[l(a(me),{as:"div",class:"relative inline-block text-left"},{default:i(()=>[e("div",null,[l(a(de),{class:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"},{default:i(()=>[I(" Trier "),l(a(oe),{class:"-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]),_:1})]),l(J,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[l(a(ue),{class:"absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:i(()=>[e("div",Be,[(o(),n(_,null,y(c,s=>l(a(fe),{key:s.name},{default:i(({active:f})=>[e("a",{onClick:s.function,class:O(["cursor-pointer",[s.current?"font-medium text-gray-900":"text-gray-500",f?"bg-gray-100":"","block px-4 py-2 text-sm"]])},x(s.name),11,De)]),_:2},1024)),64))])]),_:1})]),_:1})]),_:1}),e("button",{onClick:Q,type:"button",class:"-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"},[Oe,h.value==="grid"?(o(),u(a(ie),{key:0,class:"h-5 w-5","aria-hidden":"true"})):F("",!0),h.value==="list"?(o(),u(a(ne),{key:1,class:"h-5 w-5","aria-hidden":"true"})):F("",!0)]),e("button",{type:"button",class:"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",onClick:r[3]||(r[3]=s=>v.value=!0)},[Fe,l(a(ce),{class:"h-5 w-5","aria-hidden":"true"})])])]),e("section",Pe,[Ue,e("div",ze,[e("form",Ge,[Ne,(o(),n(_,null,y(k,s=>l(a(P),{as:"div",key:s.id,class:"border-b border-gray-200 py-6"},{default:i(({open:f})=>[e("h3",Me,[l(a(U),{class:"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"},{default:i(()=>[e("span",Re,x(s.name),1),e("span",Ze,[f?(o(),u(a(M),{key:1,class:"h-5 w-5","aria-hidden":"true"})):(o(),u(a(N),{key:0,class:"h-5 w-5","aria-hidden":"true"}))])]),_:2},1024)]),l(a(z),{class:"pt-6"},{default:i(()=>[e("div",qe,[(o(!0),n(_,null,y(s.options,(d,b)=>(o(),n("div",{key:d.value,class:"flex items-center"},[B(e("input",{"onUpdate:modelValue":r[4]||(r[4]=C=>a(g).checkbox=C),id:`filter-${s.id}-${b}`,name:`${s.id}[]`,value:d,type:"checkbox",checked:d.checked,class:"h-4 w-4 rounded border-gray-300 text-cerulean-600 focus:ring-cerulean-500"},null,8,Le),[[D,a(g).checkbox]]),e("label",{for:`filter-${s.id}-${b}`,class:"ml-3 text-sm text-gray-600"},x(d.label),9,Qe)]))),128))])]),_:2},1024)]),_:2},1024)),64))]),e("div",Xe,[e("div",Ye,[m.value.data.length==0?(o(),n("div",He,[l(W)])):(o(),n("div",{key:1,class:O(h.value==="grid"?"grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8":"grid grid-cols-1 gap-y-6")},[(o(!0),n(_,null,y(m.value.data,s=>(o(),u(K,{key:s.id,accessory:s,addToCartBool:!1,class:"col-span-1 divide-y divide-gray-200 rounded-lg bg-white"},null,8,["accessory"]))),128))],2))]),l(te,{links:m.value.links},null,8,["links"])])])])])])])]),_:1}))}};export{nt as default};
