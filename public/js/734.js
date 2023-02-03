"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[734],{5734:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(821),n=r(3907),o=r(2674),s={class:"grid grid-cols-2 gap-4 lg:gap-8"},u=(0,a._)("h5",{class:"text-xl text-center"},"Administrador de Productos",-1),i=(0,a._)("h5",{class:"text-xl text-center"},"Administrador de Usuarios",-1);const c={name:"AdminDashboard",setup:function(e){return function(e,t){var r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(r,{to:{name:"ProductManager"},class:"py-8 px-4 bg-white rounded-md flex flex-col items-center space-y-8 cursor-pointer hover:bg-gray-100"},{default:(0,a.w5)((function(){return[u,(0,a.Wm)(o.Z,{src:"admin_product_manager.png",class:"w-40 h-40 object-contain"})]})),_:1}),(0,a.Wm)(r,{to:{name:"UserManager"},class:"py-8 px-4 bg-white rounded-md flex flex-col items-center space-y-8 cursor-pointer hover:bg-gray-100"},{default:(0,a.w5)((function(){return[i,(0,a.Wm)(o.Z,{src:"admin_user_manager.png",class:"w-40 h-40 object-contain"})]})),_:1})])}}};var l={class:"grid grid-cols-2 gap-4 lg:gap-8"},d={class:"text-xl text-sky-600 text-center mb-4"};const g={name:"StaffDashboard",setup:function(e){var t=(0,n.oR)(),r=(0,a.Fl)((function(){return t.state.auth.accessibleModules})),s=[{title:"Post Creator",image:"admin_post_creator.png",route:"PostCreator"},{title:"Image Carousel Manager",image:null,route:"CarouselManager"},{title:"Customer Service Manager",image:"admin_customer_service_manager.png",route:"CustomerServiceManager"},{title:"Administrador de Productos",image:"admin_product_manager.png",route:"ProductManager"}].filter((function(e){return t=e.route,a=t[0].toLowerCase()+t.slice(1),r.value&&r.value.has(a);var t,a}));return function(e,t){var r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,a.SU)(s),(function(e,t){return(0,a.wg)(),(0,a.j4)(r,{key:t,to:{name:e.route},class:"px-4 py-8 bg-white rounded-md shadow cursor-pointer transition hover:shadow-xl hover:scale-110"},{default:(0,a.w5)((function(){return[(0,a._)("h5",d,(0,a.zw)(e.title),1),e.image?((0,a.wg)(),(0,a.j4)(o.Z,{key:0,src:e.image,class:"w-32 mx-auto"},null,8,["src"])):(0,a.kq)("",!0)]})),_:2},1032,["to"])})),128))])}}};var m={class:"py-8 w-11/12 lg:w-3/4 mx-auto"},p={class:"font-semibold mb-8 text-2xl text-center"};const f={name:"Dashboard",setup:function(e){var t=(0,n.oR)(),r=(0,a.Fl)((function(){return t.state.auth.profile}));return function(e,t){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("h4",p,"Bienvenido, "+(0,a.zw)((0,a.SU)(r).name),1),(0,a.SU)(r)&&"admin"===(0,a.SU)(r).role?((0,a.wg)(),(0,a.j4)(c,{key:0})):(0,a.kq)("",!0),(0,a.SU)(r)&&"staff"===(0,a.SU)(r).role?((0,a.wg)(),(0,a.j4)(g,{key:1})):(0,a.kq)("",!0)])}}}}}]);