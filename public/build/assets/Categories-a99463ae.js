import{E as i,_ as r}from"./AuthenticatedLayout-16295b11.js";import{_ as c}from"./Pagination-f57db763.js";import{o as e,c as n,a as d,b as a,e as s,d as l,F as m,f as p,t as x}from"./app-be752e86.js";import"./Toastr-4f97591a.js";import"./CommandPalette-97a0a532.js";import"./CartStore-76e4ad5a.js";import"./Avatar-996ef94d.js";const _={class:"bg-white"},h={class:"py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"},u={key:0},g={key:1},f=["href"],b=["href"],k={"aria-hidden":"true",class:"absolute inset-0"},v=["src"],y={key:1,src:"https://placehold.co/600x400?text=No Image",alt:"",class:"h-full w-full object-cover object-center"},w=a("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"},null,-1),j={class:"relative mt-auto text-center text-xl font-bold text-white"},q={__name:"Categories",props:{categories:{type:Array,required:!0}},setup(o){return(B,C)=>(e(),n(r,{title:"Catégories",description:"Catégories"},{default:d(()=>[a("div",_,[a("div",h,[o.categories.data.length==0?(e(),s("div",u,[l(i)])):(e(),s("div",g,[(e(!0),s(m,null,p(o.categories.data,t=>(e(),s("div",{key:t.name,href:t.href,class:"cursor-pointer min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"},[a("a",{href:`/products?paramId=${t.id}&type=category`,class:"relative flex h-80 w-56 flex-col p-6"},[a("span",k,[t.image?(e(),s("img",{key:0,src:t.image.url,alt:"",class:"h-full w-full object-cover object-center"},null,8,v)):(e(),s("img",y))]),w,a("span",j,x(t.name),1)],8,b)],8,f))),128))]))])]),l(c,{links:o.categories.links},null,8,["links"])]),_:1}))}};export{q as default};
