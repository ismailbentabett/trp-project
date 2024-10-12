import{_ as m}from"./ProductCard-8ab1e814.js";import{_ as u}from"./AuthenticatedLayout-16295b11.js";import{C as g}from"./CarouselComp-42488bb1.js";import{l as x,r as f,o as t,c as l,a as h,b as e,d as p,u as _,t as n,e as r,j as c,F as y,f as b}from"./app-be752e86.js";import"./CartStore-76e4ad5a.js";import"./Toastr-4f97591a.js";import"./CommandPalette-97a0a532.js";import"./Avatar-996ef94d.js";const v={class:"bg-white"},w={class:"mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8"},k={class:"mx-auto max-w-2xl lg:max-w-none"},A={class:"lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8"},C={class:"mt-6 aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden lg:mt-0 lg:col-span-8 space-y-6"},N={class:"mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:px-8 lg:col-span-4"},j={class:"text-3xl font-bold tracking-tight text-gray-900"},B={class:"mt-3"},I=e("h2",{class:"sr-only"},"Informations sur le produit",-1),L={key:0,class:"text-3xl tracking-tight text-gray-900"},V={class:"mt-6"},$=e("h3",{class:"sr-only"},"Description",-1),z=["innerHTML"],D={class:"mt-6"},F={class:"mt-10 flex"},H=["href"],M={key:0,class:"mt-10 flex"},T=["href"],E={key:0,"aria-labelledby":"related-heading",class:"mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"},O=e("h2",{id:"related-heading",class:"text-xl font-bold text-gray-900"},"Produits apparentés",-1),P={class:"mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},X={__name:"Accessory",props:{accessory:{type:Object},products:{type:Array}},setup(s){const o=s;var d=x(()=>o.accessory.medias.length>0?o.accessory.medias.filter(a=>a.type&&a.type.startsWith("image/")):[{url:"https://via.placeholder.com/1000x1000?text=No+Image+Available",id:1},{url:"https://via.placeholder.com/1000x1000?text=No+Image+Available",id:2},{url:"https://via.placeholder.com/1000x1000?text=No+Image+Available",id:3}]);return f(0),(a,S)=>(t(),l(u,{title:"Accessoire",description:"Accessoire"},{default:h(()=>[e("div",v,[e("main",w,[e("div",k,[e("div",A,[e("div",C,[p(g,{images:_(d)},null,8,["images"])]),e("div",N,[e("h1",j,n(s.accessory.name),1),e("div",B,[I,s.accessory.show_price?(t(),r("p",L,n(s.accessory.price)+" € ",1)):c("",!0)]),e("div",V,[$,e("div",{class:"space-y-6 text-base text-gray-700",innerHTML:s.accessory.description},null,8,z)]),e("form",D,[e("div",F,[e("a",{href:`/special/checkout?accessory_id=${s.accessory.id}`,class:"flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-cerulean-600 py-3 px-8 text-base font-medium text-white hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"}," Commande ",8,H)]),s.accessory.url?(t(),r("div",M,[e("a",{href:s.accessory.url,class:"flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-cerulean-600 py-3 px-8 text-base font-medium text-white hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"}," Allez sur Amazon ",8,T)])):c("",!0)])])]),o.products.length>0?(t(),r("section",E,[O,e("div",P,[(t(!0),r(y,null,b(o.products,i=>(t(),l(m,{key:i.id,product:i},null,8,["product"]))),128))])])):c("",!0)])])])]),_:1}))}};export{X as default};
