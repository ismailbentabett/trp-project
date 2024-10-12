import{r as H,_ as S}from"./AuthenticatedLayout-16295b11.js";import{o as r,e as a,b as e,Q as b,l as i,r as O,d as s,a as o,u as n,F as p,f as k,n as v,c as z,O as A,h as _,t as C,j as M,M as j,N as L}from"./app-be752e86.js";import"./moment-fbc5633a.js";import{r as V}from"./LockClosedIcon-5c2619d4.js";import{U as T,h as x,G as N,S as U}from"./Toastr-4f97591a.js";function q(u,l){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M14.5 1A4.5 4.5 0 0010 5.5V9H3a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1.5V5.5a3 3 0 116 0v2.75a.75.75 0 001.5 0V5.5A4.5 4.5 0 0014.5 1z","clip-rule":"evenodd"})])}function D(u,l){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})])}function F(u,l){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})])}function G(u,l){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z","clip-rule":"evenodd"})])}function P(u,l){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}const E={class:"flex min-h-full"},Q=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),I={class:"fixed inset-0 z-40 flex"},J={class:"absolute top-0 right-0 -mr-12 pt-2"},K=e("span",{class:"sr-only"},"Close sidebar",-1),R={class:"mt-5 h-0 flex-1 overflow-y-auto"},W={class:"px-2"},X={class:"space-y-1"},Y=["href","aria-current"],Z=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),ee={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64"},te={class:"flex min-h-0 flex-1 flex-col"},re={class:"flex flex-1 flex-col overflow-y-auto bg-cerulean-800"},ae={class:"flex-1 px-2 py-4"},se={class:"space-y-1"},ne=["href","aria-current"],oe={class:"flex w-0 flex-1 flex-col lg:pl-64"},le={class:"sticky top-0 z-5 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white"},ie=e("span",{class:"sr-only"},"Open sidebar",-1),ce={class:"flex flex-1 justify-between px-4"},ue=e("div",null,null,-1),de={class:"ml-4 flex items-center lg:ml-6"},fe={class:"flex-1"},he={__name:"TicketsLayout",props:{ticket:{type:Array,required:!0},openUser:{type:Object,required:!0},tracking:{type:Object,required:!0}},setup(u){const l=b();i(()=>l.props.auth.user);const d=l.url,$=b().props,f=i(()=>$.auth);i(()=>f.value.is_user);const g=i(()=>f.value.is_admin),m=i(()=>f.value.is_editor),y=i(()=>f.value.is_super_admin);i(()=>f.value.is_customer);const w=[{name:"All tickets",href:"/tickets",icon:H,current:d=="/tickets",role:g.value||y.value||m.value},{name:"My tickets",href:"/tickets/my",icon:F,current:d=="/tickets/my",role:!0},{name:"Assigned To Me",href:"/tickets/assigned-to-me",icon:G,current:d=="/tickets/assigned-to-me",role:g.value||y.value||m.value},{name:"Closed",href:"/tickets/closed",icon:V,current:d=="/tickets/closed",role:!0},{name:"Opened",href:"/tickets/opened",icon:q,current:d=="/tickets/opened",role:!0}],h=O(!1);return(B,c)=>(r(),a("div",E,[s(n(U),{as:"template",show:h.value},{default:o(()=>[s(n(T),{as:"div",class:"relative z-40 lg:hidden",onClose:c[1]||(c[1]=t=>h.value=!1)},{default:o(()=>[s(n(x),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[Q]),_:1}),e("div",I,[s(n(x),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:o(()=>[s(n(N),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-cerulean-800 pt-5 pb-4"},{default:o(()=>[s(n(x),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[e("div",J,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:c[0]||(c[0]=t=>h.value=!1)},[K,s(n(P),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),e("div",R,[e("nav",W,[e("div",X,[(r(),a(p,null,k(w,t=>(r(),a(p,{key:t.name},[t.role==!0?(r(),a("a",{key:0,href:t.href,class:v([t.current?"bg-cerulean-900 text-white":"text-gray-300 hover:bg-cerulean-700 hover:text-white","group flex items-center px-2 py-2 text-base font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),z(A(t.icon),{class:v([t.current?"text-gray-300":"text-gray-400 group-hover:text-gray-300","mr-4 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),_(" "+C(t.name),1)],10,Y)):M("",!0)],64))),64))])])])]),_:1})]),_:1}),Z])]),_:1})]),_:1},8,["show"]),e("div",ee,[e("div",te,[e("div",re,[e("nav",ae,[e("div",se,[(r(),a(p,null,k(w,t=>(r(),a(p,{key:t.name},[t.role==!0?(r(),a("a",{key:0,href:t.href,class:v([t.current?"bg-cerulean-900 text-white":"text-gray-300 hover:bg-cerulean-700 hover:text-white","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),z(A(t.icon),{class:v([t.current?"text-gray-300":"text-gray-400 group-hover:text-gray-300","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),_(" "+C(t.name),1)],10,ne)):M("",!0)],64))),64))])])])])]),e("div",oe,[s(S,{title:"Soutien",description:"Soutien"},{default:o(()=>[e("div",le,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden",onClick:c[2]||(c[2]=t=>h.value=!0)},[ie,s(n(D),{class:"h-6 w-6","aria-hidden":"true"})]),e("div",ce,[ue,e("div",de,[s(n(j),{type:"button",href:"/tickets/create",class:"inline-flex items-center rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"},{default:o(()=>[_(" Créer un nouveau ticket ")]),_:1})])])]),e("main",fe,[L(B.$slots,"default")])]),_:3})])]))}},me=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{me as T,he as _,q as r};
