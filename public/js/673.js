/*! For license information please see 673.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[673],{6846:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(821),o=r(7810),i={key:0,class:"bg-gradient-to-b from-transparent to-sky-100 grid w-full justify-center z-10 absolute min-h-full pointer-events-auto"},a={key:0,class:"z-20 bg-white my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"},u={class:"flex justify-end"};const l={name:"BaseModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["close"],setup:function(t,e){var r=e.emit,l=(0,n.iH)(!1);return function(e,c){return(0,n.wg)(),(0,n.j4)(n.lR,{to:"#app-modals"},[(0,n.Wm)(n.uT,{name:"fade",onAfterEnter:c[2]||(c[2]=function(t){return l.value=!0})},{default:(0,n.w5)((function(){return[t.shouldShow?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(n.uT,{name:"modal",onAfterLeave:c[1]||(c[1]=function(t){return r("close")})},{default:(0,n.w5)((function(){return[l.value?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",u,[(0,n._)("button",{class:"text-xl p-4",onClick:c[0]||(c[0]=function(t){return l.value=!1})},[(0,n.Wm)((0,n.SU)(o.GN),{icon:"fa fa-times"})])]),(0,n.WI)(e.$slots,"default")])):(0,n.kq)("",!0)]})),_:3})])):(0,n.kq)("",!0)]})),_:3})])}}}},7793:(t,e,r)=>{r.d(e,{Z:()=>m});var n=r(821),o=r(3907),i=r(7810),a={key:0,class:"flex flex-col items-center"},u=(0,n.Uk)(" Mostrando "),l=(0,n.Uk)(" de "),c=(0,n.Uk)(" elementos. "),s={class:"flex space-x-4 items-center"},d=["disabled"],f=["disabled","onClick"],p=["disabled"];const h={name:"BasePagination",props:{paginationData:{type:Object,default:null}},emits:["refetch-requested"],setup:function(t,e){var r=e.emit,o=t,h=function(t){r("refetch-requested",t)};return function(e,r){return t.paginationData&&1!==t.paginationData.last_page?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("p",null,[u,(0,n._)("strong",null,(0,n.zw)(t.paginationData.per_page),1),l,(0,n._)("strong",null,(0,n.zw)(t.paginationData.total),1),c]),(0,n._)("div",s,[(0,n._)("button",{class:"rotate-180 px-4 py-2 hover:bg-gray-100 rounded-md disabled:opacity-50",onClick:r[0]||(r[0]=function(t){return e=o.paginationData.links[0].url,void h(e);var e}),disabled:1===t.paginationData.current_page},[(0,n.Wm)((0,n.SU)(i.GN),{icon:"fa-chevron-right"})],8,d),(0,n._)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.paginationData.links.slice(1,-1),(function(t){return(0,n.wg)(),(0,n.iD)("button",{key:t.url,class:(0,n.C_)(["px-4 py-2 hover:bg-gray-100 rounded-md",{"bg-sky-600 text-white":t.active}]),disabled:!t.url,onClick:function(e){return h(t.url)}},(0,n.zw)(t.label),11,f)})),128))]),(0,n._)("button",{disabled:t.paginationData.current_page===t.paginationData.last_page,class:"px-4 py-2 hover:bg-gray-100 rounded-md disabled:opacity-50",onClick:r[1]||(r[1]=function(t){return e=o.paginationData.links.slice(-1)[0].url,void h(e);var e})},[(0,n.Wm)((0,n.SU)(i.GN),{icon:"fa-chevron-right"})],8,p)])])):(0,n.kq)("",!0)}}},m={name:"ProductPagination",setup:function(t){var e=(0,o.oR)(),r=(0,n.Fl)((function(){return e.state.products.pagination})),i=function(t){e.dispatch("products/refetch",t)};return function(t,e){return(0,n.wg)(),(0,n.j4)(h,{"pagination-data":(0,n.SU)(r),onRefetchRequested:i},null,8,["pagination-data"])}}}},5673:(t,e,r)=>{r.r(e),r.d(e,{default:()=>nt});var n=r(821);function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a={class:"px-2 space-y-2"},u=["checked","onChange"];const l={name:"ProductosFiltersMultiselect",props:{options:{type:Array,required:!0},modelValue:{type:Array,default:function(){return[]}}},emits:["update:modelValue"],setup:function(t,e){var r=e.emit,i=t;return function(e,l){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("ul",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.options,(function(e,a){return(0,n.wg)(),(0,n.iD)("li",{class:"flex items-center space-x-2",key:a},[(0,n._)("span",null,[(0,n._)("input",{type:"checkbox",class:"accent-sky-600 form-check-input",checked:t.modelValue.includes(e),onChange:function(t){return function(t){var e=i.modelValue.includes(t)?i.modelValue.filter((function(e){return e!==t})):[].concat(o(i.modelValue),[t]);r("update:modelValue",e)}(e)}},null,40,u)]),(0,n._)("span",null,(0,n.zw)(e),1)])})),128))])])}}};var c=r(7810),s=r(3907),d=r(4138),f={class:"px-4 sm:px-8 md:px-0"},p=(0,n._)("span",null,"Filtros",-1),h={class:"p-8 md:w-64"},m=(0,n._)("h4",{class:"text-2xl font-semibold pb-2 mb-4 border-b border-gray-600"}," Filtros: ",-1),v={key:0,class:"my-8"};const y={name:"ProductosFilters",setup:function(t){var e=(0,n.qj)({brand:[]}),r=(0,s.oR)();function o(){r.commit("products/SET_FILTERS",e),r.dispatch("products/refetch")}function i(){e.brand=[],o()}var a=(0,n.qj)({category:{label:"Categoría",options:d.O}}),u=(0,n.iH)(window.innerWidth>768);window.addEventListener("resize",(function(){return u.value=window.innerWidth>768}));var y=(0,n.iH)(!1),g=(0,n.iH)(null);return function(t,r){return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("button",{class:"flex md:hidden space-x-2 border rounded-md border-sky-600 text-sky-600 justify-between py-2 px-4 w-full items-center",onClick:r[0]||(r[0]=function(t){return function(){if(g.value)if(y.value=!y.value,y.value){g.value.style.height="auto";var t=getComputedStyle(g.value).getPropertyValue("height");g.value.style.height="0",requestAnimationFrame((function(){return g.value.style.height=t}))}else g.value.style.height="0"}()})},[p,(0,n.Wm)((0,n.SU)(c.GN),{icon:"fa-chevron-down",class:(0,n.C_)(["text-sm duration-500",{"rotate-180":y.value}])},null,8,["class"])]),(0,n._)("div",{class:"duration-500 overflow-hidden h-0 md:h-max rounded-md bg-white shadow-lg",ref_key:"filterContainerEl",ref:g},[(0,n._)("div",h,[m,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a,(function(t,r){return(0,n.wg)(),(0,n.j4)(l,{key:r,options:t.options,modelValue:e[r],"onUpdate:modelValue":function(t){return e[r]=t}},null,8,["options","modelValue","onUpdate:modelValue"])})),128)),Object.keys(a).length?((0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("button",{class:"bg-sky-600 py-2 px-4 text-white rounded-md w-full mb-2",onClick:o}," Aplicar "),(0,n._)("button",{class:"btn btn-secondary ms-1 py-2 px-4 border text-sky-600 border-sky-600 rounded-md w-full",onClick:i}," Borrar ")])):(0,n.kq)("",!0)])],512)])}}};var g=r(2674),w={class:"shadow-lg px-4 py-4 rounded-md"},b={class:"flex justify-between space-x-2 mb-4 items-center"},x={class:"text-sm truncate"},_={class:"font-semibold"};const k={name:"ProductosListItem",props:{id:{type:Number,required:!0},imgSrc:{type:String},title:{type:String,required:!0},price:{type:Number,required:!0},isLimited:{type:Boolean,required:!0},isPromoted:{type:Boolean,required:!0},isLowStock:{type:Boolean,required:!0}},emits:["more-click"],setup:function(t,e){var r=e.emit;return function(e,o){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(g.Z,{isExternal:"",src:t.imgSrc,class:"w-40 h-40 object-cover mb-4 rounded mx-auto"},null,8,["src"]),(0,n._)("div",b,[(0,n._)("p",x,(0,n.zw)(t.title),1),(0,n._)("p",_,"$"+(0,n.zw)(t.price),1)]),(0,n._)("button",{class:"bg-gray-100 text-gray-600 py-2 px-4 font-semibold rounded ml-auto block",onClick:o[0]||(o[0]=function(t){return r("more-click")})}," Ver más ")])}}};var S=r(6846),L=r(4318);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=b(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function d(){}function f(){}function p(){}var h={};u(h,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==e&&r.call(v,o)&&(h=v);var y=p.prototype=d.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,i,a,u){var l=c(t[o],t,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==E(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(d).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,u(y,"constructor",p),u(p,"constructor",f),f.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),u(y,a,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function D(t,e,r,n,o,i,a){try{var u=t[i](a),l=u.value}catch(t){return void r(t)}u.done?e(l):Promise.resolve(l).then(n,o)}var C={key:0,class:"py-8 flex justify-center w-80"},P=[(0,n._)("div",{class:"w-8 h-8 border-4 border-sky-600 border-b-transparent rounded-full animate-spin"},null,-1)],V={key:1,class:"w-96"},q={class:"flex gap-2 justify-center px-2 flex-wrap"},U=["onClick"],O={class:"p-8"},W={class:"font-semibold text-2xl"},N={class:"leading-loose mb-2"},A={class:"font-semibold text-sky-600 mb-2"},z={class:"flex space-x-4"},F=(0,n._)("p",{class:"text-sm text-gray-600"},"Marca",-1),T={class:"text-xl"},G=(0,n._)("p",{class:"text-sm text-gray-600"},"Categoría",-1),H={class:"text-xl"};const R={name:"ProductDetailModal",props:{modelValue:{type:Number}},emits:["update:modelValue"],setup:function(t,e){var r=e.emit,o=t,i=(0,n.iH)(!1),a=(0,n.iH)(null),u=(0,n.iH)(null),l=(0,L.ZP)();return(0,n.YP)((function(){return o.modelValue}),function(){var t,e=(t=j().mark((function t(e){var r,n,o;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e!==(null===(r=a.value)||void 0===r?void 0:r.id)){t.next=2;break}return t.abrupt("return");case 2:return i.value=!0,t.next=5,l.get("/api/product/".concat(e));case 5:n=t.sent,o=n.data,a.value=o,u.value=o.images[0],i.value=!1;case 10:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){D(i,n,o,a,u,"next",t)}function u(t){D(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),function(e,o){return(0,n.wg)(),(0,n.j4)(S.Z,{"should-show":!!t.modelValue,onClose:o[0]||(o[0]=function(t){return r("update:modelValue",null)})},{default:(0,n.w5)((function(){var t;return[i.value?((0,n.wg)(),(0,n.iD)("div",C,P)):((0,n.wg)(),(0,n.iD)("div",V,[(0,n.Wm)(g.Z,{"is-external":"",src:null===(t=u.value)||void 0===t?void 0:t.src,class:"h-48 w-full object-cover mb-2"},null,8,["src"]),(0,n._)("div",q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value.images,(function(t){return(0,n.wg)(),(0,n.iD)("button",{key:t.id,onClick:function(e){return u.value=t},class:(0,n.C_)(["basis-24 h-12 duration-150",{"scale-75 opacity-50":u.value!==t}])},[(0,n.Wm)(g.Z,{class:"w-full h-full object-cover rounded","is-external":"",src:t.src},null,8,["src"])],10,U)})),128))]),(0,n._)("div",O,[(0,n._)("h2",W,(0,n.zw)(a.value.title),1),(0,n._)("p",N,(0,n.zw)(a.value.description),1),(0,n._)("p",A," $"+(0,n.zw)(a.value.price),1),(0,n._)("div",z,[(0,n._)("div",null,[F,(0,n._)("p",T,(0,n.zw)(a.value.brand),1)]),(0,n._)("div",null,[G,(0,n._)("p",H,(0,n.zw)(a.value.category),1)])])])]))]})),_:1},8,["should-show"])}}};var I={key:0,class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 px-4 sm:px-8"},Y={key:0,class:"col-span-4 p-4 bg-sky-100 rounded-lg"},M={class:"flex space-x-4 text-xl items-center justify-center mb-4"},Z=(0,n._)("p",null,"Lo sentimos, no se pudo encontrar ningún producto.",-1),B={key:1,class:"h-96 flex items-center justify-center"},K=[(0,n._)("div",{class:"w-12 h-12 rounded-full border-4 border-sky-600 animate-spin border-b-transparent"},null,-1)];const $={name:"ProductosList",setup:function(t){var e=(0,s.oR)(),r=(0,n.Fl)((function(){return e.state.products.data})),o=(0,n.iH)(null);function i(){e.commit("products/SET_QUERY",""),e.dispatch("products/refetch")}return function(t,e){return(0,n.SU)(r)?((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Wm)(R,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.value=t})},null,8,["modelValue"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,n.SU)(r),(function(t){return(0,n.wg)(),(0,n.j4)(k,{onMoreClick:function(e){return o.value=t.id},key:t.id,id:t.id,imgSrc:t.image_url,price:t.price,title:t.title,isLimited:!!t.is_limited_edition,isLowStock:!!t.is_low_stock,isPromoted:!!t.is_promoted},null,8,["onMoreClick","id","imgSrc","price","title","isLimited","isLowStock","isPromoted"])})),128)),(0,n.SU)(r).length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("div",M,[(0,n.Wm)((0,n.SU)(c.GN),{icon:"fa-exclamation-triangle"}),Z]),(0,n._)("button",{class:"text-sky-600 hover:underline w-full text-center",onClick:i}," Mostrar todos los productos ")]))])):((0,n.wg)(),(0,n.iD)("div",B,K))}}},Q=$;var J=r(7793),X=r(2201),tt={class:"py-12"},et={class:"md:flex md:space-x-4"},rt={class:"flex-grow"};const nt={name:"Products",setup:function(t){var e=(0,s.oR)();return(0,X.iS)((function(){e.commit("products/SET_FILTERS",{}),e.commit("products/SET_QUERY",""),e.dispatch("products/refetch")})),function(t,e){return(0,n.wg)(),(0,n.iD)("div",tt,[(0,n._)("div",et,[(0,n.Wm)(y),(0,n._)("div",rt,[(0,n.Wm)(Q),(0,n.Wm)(J.Z)])])])}}}}}]);