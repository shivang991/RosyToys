"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[149],{4174:(e,t,a)=>{a.d(t,{c7:()=>o,j_:()=>n,lm:()=>r});var n={PRODUCT_CREATED:{type:"success",message:"Producto creado con éxito"},PRODUCT_UPDATED:{type:"success",message:"¡Actualizó con éxito los datos del producto!"},PRODUCT_DELETED:{type:"success",message:"¡Eliminado el producto con éxito!"},CAROUSEL_IMAGE_CREATED:{type:"success",message:"¡Artículo agregado!"},CAROUSEL_IMAGE_DELETED:{type:"success",message:"¡Artículo eliminado con éxito!"},CAROUSEL_IMAGE_UPDATED:{type:"success",message:"¡Artículo actualizado con éxito!"},MANUAL_CREATED:{type:"success",message:"¡Manual creado con éxito!"},MANUAL_DELETED:{type:"success",message:"¡Manual eliminado correctamente!"},MANUAL_UPDATED:{type:"success",message:"¡Manual actualizado con éxito!"},LOGIN_SUCCESS:{type:"success",message:"¡Ingresó exitosamente!"},GENERAL_ERROR:{type:"error",message:"¡Ocurrió un error inesperado!"},INVALID_CREDENTIALS:{type:"error",message:"Verifique sus credenciales y vuelva a intentarlo."},USER_EXISTS:{type:"error",message:"Este correo electrónico ha sido tomado."}};function l(e){window.dispatchEvent(new CustomEvent("notificationreq",{detail:e}))}function r(){return{fire:l}}var o=l},5345:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(8222),l=a(7810),r={key:0},o=(0,n._)("p",{class:"my-2 text-slate-500"},"Haga clic para cambiar la imagen",-1),u=["src"],s=["onClick","disabled"],i=["onDrop"],c={class:"text-xl mb-1 text-slate-500"},d=(0,n._)("p",{class:"text-slate-500 mb-2"},"Suelta un archivo o",-1),m={inheritAttrs:!1};const p=Object.assign(m,{name:"BaseImageInput",props:{label:{type:String,required:!0},modelValue:{type:Blob,default:null},defaultSrc:{type:String,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e,t){var a=t.emit,m=e,p=(0,n.l1)(),f=Object.fromEntries(["drag","dragstart","dragend","dragover","dragenter","dragleave"].map((function(e){return[e,function(e){e.preventDefault(),e.stopPropagation()}]}))),g=(0,n.iH)(null),b=(0,n.iH)(!1);function v(e){if(e&&e.type.startsWith("image")){a("update:modelValue",e);var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",(function(e){g.value=e.target.result}))}}function y(e){var t;b.value=!1,v(null===(t=e.dataTransfer.files)||void 0===t?void 0:t[0])}function w(e){v(e.target.files[0])}function h(){a("update:modelValue",null),g.value=m.defaultSrc}return(0,n.YP)((function(){return m.modelValue}),(function(e){return e&&v(e)})),function(t,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("input",{type:"file",ref:"inputEl",onChange:w},null,544),[[n.F8,!1]]),(0,n._)("label",{class:(0,n.C_)(["py-1 px-2 rounded-t-md text-white",e.isInvalid?"bg-red-600":"bg-amber-500"])},(0,n.zw)(e.label),3),g.value||e.defaultSrc?((0,n.wg)(),(0,n.iD)("div",r,[o,(0,n._)("img",(0,n.dG)({src:g.value||e.defaultSrc},(0,n.SU)(p),{onClick:a[0]||(a[0]=function(e){return t.$refs.inputEl.click()})}),null,16,u),(0,n._)("button",{onClick:(0,n.iM)(h,["prevent","stop"]),class:"py-1 text-amber-500 px-2 border border-amber-500 rounded-md disabled:opacity-50 mt-2",disabled:!e.modelValue}," Quita la imagen ",8,s)])):((0,n.wg)(),(0,n.iD)("div",(0,n.dG)({key:1,class:["py-8 flex flex-col items-center rounded-b-md shadow bg-slate-100 ring-slate-200",[e.isInvalid?"bg-red-50":"bg-slate-100",{"ring-2":b.value}]],onDrop:(0,n.iM)(y,["prevent","stop"]),onDragover:a[2]||(a[2]=function(e){return b.value=!0}),onDragleave:a[3]||(a[3]=function(e){return b.value=!1})},(0,n.mx)((0,n.SU)(f))),[(0,n._)("p",c,[(0,n.Wm)((0,n.SU)(l.GN),{icon:"fa fa-upload"})]),d,(0,n._)("button",{class:"text-amber-500 hover:underline",onClick:a[1]||(a[1]=(0,n.iM)((function(e){return t.$refs.inputEl.click()}),["prevent"]))}," Haga clic para navegar ")],16,i))])}}})},6846:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(8222),l=a(7810),r={key:0,class:"z-20 bg-white mx-auto my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"},o={class:"flex justify-end"};const u={name:"BaseModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["close"],setup:function(e,t){var a=t.emit,u=e,s=(0,n.iH)(!1),i=(0,n.iH)(0);return(0,n.YP)((function(){return u.shouldShow}),(function(e){e&&(i.value=document.body.scrollHeight)})),function(t,u){return(0,n.wg)(),(0,n.j4)(n.lR,{to:"#app-modals"},[(0,n.Wm)(n.uT,{name:"modal",onAfterEnter:u[2]||(u[2]=function(e){return s.value=!0})},{default:(0,n.w5)((function(){return[e.shouldShow?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"bg-gradient-to-b from-transparent to-slate-100 grid",style:(0,n.j5)({height:"".concat(i.value,"px")})},[(0,n.Wm)(n.uT,{name:"modal",onAfterLeave:u[1]||(u[1]=function(e){return a("close")})},{default:(0,n.w5)((function(){return[s.value?((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",o,[(0,n._)("button",{class:"text-xl text-slate-900 p-4",onClick:u[0]||(u[0]=function(e){return s.value=!1})},[(0,n.Wm)((0,n.SU)(l.GN),{icon:"fa fa-times"})])]),(0,n.WI)(t.$slots,"default")])):(0,n.kq)("",!0)]})),_:3})],4)):(0,n.kq)("",!0)]})),_:3})])}}}},752:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(8222);const l={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",a=(0,n.iH)(!1);return function(l,r){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,n.SU)(t)),{rows:"5",value:e.modelValue,onInput:r[0]||(r[0]=function(e){return l.$emit("update:modelValue",e.target.value)}),type:e.type,class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",onFocus:r[1]||(r[1]=function(e){return a.value=!0}),onBlur:r[2]||(r[2]=function(e){return a.value=!1})},null,40,["value","type"])),(0,n._)("p",{class:(0,n.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":a.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,n.zw)(e.label),3)],2)}}}},7149:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(8222),l=a(4318),r=a(752),o=a(5345),u=a(6846),s=a(4174);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,l,r=[],o=!0,u=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(u)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d=["onSubmit"],m={class:"space-y-8 w-80"},p=["disabled"],f={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},g={key:1};const b={name:"AddCarouselImageModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["update:shouldShow","item-added"],setup:function(e,t){var a=t.emit,c=(0,n.qj)({image:null,description:""}),b=(0,n.qj)(new Set),v=(0,n.iH)(!1),y=(0,l.ZP)();function w(){b.clear(),Object.entries(c).forEach((function(e){var t=i(e,2),a=t[0];return t[1]||b.add(a)})),b.size||(v.value=!0,y.postMultipart("/api/carousel/create",c).then((function(e){"success"===e.data.message&&(c.image=null,c.description="",a("update:shouldShow",!1),a("item-added"),(0,s.c7)(s.j_.CAROUSEL_IMAGE_CREATED))})).catch((function(e){console.log(e.response),(0,s.c7)(s.j_.GENERAL_ERROR)})).finally((function(){return v.value=!1})))}return function(t,l){return(0,n.wg)(),(0,n.j4)(u.Z,{"should-show":e.shouldShow,onClose:l[2]||(l[2]=function(e){return a("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[(0,n._)("form",{class:"px-4 pb-8",onSubmit:(0,n.iM)(w,["prevent"])},[(0,n._)("div",m,[(0,n.Wm)(o.Z,{"is-invalid":b.has("image"),modelValue:c.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return c.image=e}),class:"w-full h-40 object-cover",label:"Image"},null,8,["is-invalid","modelValue"]),(0,n.Wm)(r.Z,{"is-invalid":b.has("description"),modelValue:c.description,"onUpdate:modelValue":l[1]||(l[1]=function(e){return c.description=e}),label:"Description","is-text-area":""},null,8,["is-invalid","modelValue"])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:v.value,type:"submit"},[v.value?((0,n.wg)(),(0,n.iD)("span",f)):((0,n.wg)(),(0,n.iD)("span",g," Create "))],8,p)],40,d)]})),_:1},8,["should-show"])}}};var v=a(2674),y={class:"px-4 pb-8 max-w-xs"},w=(0,n._)("p",{class:"text-slate-900 mb-8 text-center"}," Are you sure you want to delete that item? ",-1),h=["disabled"],x={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},_={key:1};const E={name:"RemoveCarouselImageModal",props:{carouselImageId:{type:Number,default:null}},emits:["cancel","success"],setup:function(e,t){var a=t.emit,r=e,o=(0,n.iH)(!1),i=(0,l.ZP)();function c(){r.carouselImageId&&(o.value=!0,i.authDelete("/api/carousel/".concat(r.carouselImageId)).then((function(e){"success"===e.data.message&&(a("success"),(0,s.c7)(s.j_.CAROUSEL_IMAGE_DELETED))})).catch((function(e){console.log(e.response),(0,s.c7)(s.j_.GENERAL_ERROR)})).finally((function(){return o.value=!1})))}return function(t,l){return(0,n.wg)(),(0,n.j4)(u.Z,{shouldShow:!!e.carouselImageId,onClose:l[0]||(l[0]=function(e){return a("cancel")})},{default:(0,n.w5)((function(){return[(0,n._)("div",y,[w,(0,n._)("button",{onClick:c,class:"bg-amber-500 py-2 text-white rounded-md w-full",disabled:o.value,type:"submit"},[o.value?((0,n.wg)(),(0,n.iD)("span",x)):((0,n.wg)(),(0,n.iD)("span",_," Yes "))],8,h)])]})),_:1},8,["shouldShow"])}}};var D=["onSubmit"],A={class:"space-y-8"},S=["disabled"],C={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},I={key:1};const j={name:"EditCarouselImageModal",props:{carouselImageObj:{type:Object,default:null}},emits:["cancel","success"],setup:function(e,t){var a=t.emit,i=e,c=(0,n.qj)({image:null,description:""}),d=(0,n.iH)(!1),m=(0,n.iH)(null),p=(0,n.qj)(new Set),f=(0,l.ZP)();function g(){if(i.carouselImageObj){if(p.clear(),c.description||p.add("description"),p.size)return;d.value=!0,f.postMultipart("/api/carousel/update/".concat(i.carouselImageObj.id),c).then((function(e){"success"===e.data.message&&(a("success"),(0,s.c7)(s.j_.CAROUSEL_IMAGE_UPDATED))})).catch((function(e){console.log(e.response),(0,s.c7)(s.j_.GENERAL_ERROR)})).finally((function(){return d.value=!1}))}}return(0,n.YP)((function(){return i.carouselImageObj}),(function(e){e&&(m.value=e.image_url,c.description=e.description,c.image=null)})),function(t,l){return(0,n.wg)(),(0,n.j4)(u.Z,{"should-show":!!e.carouselImageObj,onClose:l[2]||(l[2]=function(e){return a("cancel")})},{default:(0,n.w5)((function(){return[(0,n._)("form",{class:"px-4 pb-8",onSubmit:(0,n.iM)(g,["prevent"])},[(0,n._)("div",A,[(0,n.Wm)(o.Z,{"default-src":m.value,class:"w-full h-40 object-cover",label:"Image",modelValue:c.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return c.image=e})},null,8,["default-src","modelValue"]),(0,n.Wm)(r.Z,{modelValue:c.description,"onUpdate:modelValue":l[1]||(l[1]=function(e){return c.description=e}),label:"Description","is-text-area":""},null,8,["modelValue"])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:d.value,type:"submit"},[d.value?((0,n.wg)(),(0,n.iD)("span",C)):((0,n.wg)(),(0,n.iD)("span",I," Update "))],8,S)],40,D)]})),_:1},8,["should-show"])}}};var k={class:"mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow"},R={class:"px-12"},U=(0,n._)("h4",{class:"font-semibold mb-8 text-2xl"},"Image Carousel Manager",-1),M={key:0,class:"py-8 flex justify-center"},O=[(0,n._)("div",{class:"w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"},null,-1)],L={key:1},V={key:0,class:"grid grid-cols-2 gap-4 mb-4"},T={class:"text-slate-900 text-center mb-4"},H={class:"col-start-2 flex justify-center space-x-2"},P=["onClick"],G=["onClick"],Z={key:1,class:"p-4 text-center bg-slate-100 rounded-md shadow text-slate-900"};const N={name:"CarouselManager",setup:function(e){var t=(0,l.ZP)(),a=(0,n.iH)(!0),r=(0,n.iH)([]),o=function(){t.get("/api/carousel").then((function(e){a.value=!1,r.value=e.data}))};o();var u=(0,n.iH)(!1),s=(0,n.iH)(null),i=(0,n.iH)(null);function c(){r.value=r.value.filter((function(e){return e.id!==s.value})),s.value=null}function d(){i.value=null,o()}return function(e,t){return(0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",R,[U,a.value?((0,n.wg)(),(0,n.iD)("div",M,O)):((0,n.wg)(),(0,n.iD)("div",L,[r.value.length?((0,n.wg)(),(0,n.iD)("ul",V,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.value,(function(e,t){return(0,n.wg)(),(0,n.iD)("li",{key:t,class:"px-4 rounded-md shadow py-8"},[(0,n.Wm)(v.Z,{src:e.image_url,class:"w-full h-40 object-cover rounded-md","is-external":""},null,8,["src"]),(0,n._)("div",T,(0,n.zw)(e.description),1),(0,n._)("div",H,[(0,n._)("button",{class:"px-2 py-1 border border-amber-500 rounded-md text-amber-500",onClick:function(t){return s.value=e.id}}," Remove ",8,P),(0,n._)("button",{class:"px-2 py-1 border border-amber-500 rounded-md text-amber-500",onClick:function(t){return i.value=e}}," Edit ",8,G)])])})),128))])):((0,n.wg)(),(0,n.iD)("p",Z," Ningún elemento para mostrar aquí ")),(0,n._)("button",{class:"py-2 px-8 bg-amber-500 text-white mt-8 rounded-md",onClick:t[0]||(t[0]=function(e){return u.value=!0})}," Add an item ")]))]),(0,n.Wm)(b,{"should-show":u.value,"onUpdate:should-show":t[1]||(t[1]=function(e){return u.value=e}),onItemAdded:o},null,8,["should-show"]),(0,n.Wm)(E,{"carousel-image-id":s.value,onCancel:t[2]||(t[2]=function(e){return s.value=null}),onSuccess:c},null,8,["carousel-image-id"]),(0,n.Wm)(j,{"carousel-image-obj":i.value,onCancel:t[3]||(t[3]=function(e){return i.value=null}),onSuccess:d},null,8,["carousel-image-obj"])])}}}}}]);