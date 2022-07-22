"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ProductDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _plugins_Axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/plugins/Axios */ "./resources/js/plugins/Axios.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute)();
    var axios = (0,_plugins_Axios__WEBPACK_IMPORTED_MODULE_1__.useAxios)();
    var product = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    if (route.params.id) {
      axios.get("/api/product/".concat(route.params.id)).then(function (_ref) {
        var data = _ref.data;
        product.value = data;
      });
    }

    return {
      product: product
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-00c560de"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0,
  "class": "product-detail"
};
var _hoisted_2 = {
  "class": "px-4"
};
var _hoisted_3 = ["src", "alt"];
var _hoisted_4 = {
  "class": "fw-bolder mt-4"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Precio:", -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "text-primary ms-2"
};
var _hoisted_7 = {
  key: 0,
  "class": "mt-5"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "me-2"
  }, "Identificación de producto:", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  "class": "fw-bolder"
};
var _hoisted_10 = {
  "class": "d-flex"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Eliminar ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Editar ");

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-translucent"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return $setup.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.product.image_url,
    alt: $setup.product.name,
    "class": "product-detail__image"
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.description), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.price), 1
  /* TEXT */
  )]), _ctx.$store.getters['auth/isAdmin'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'DeleteProduct',
      query: {
        id: $setup.product.id
      }
    },
    "class": "flex-grow-1 me-2 btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'UpdateProduct',
      query: {
        id: $setup.product.id
      }
    },
    "class": "flex-grow-1 mx-2 btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_13])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon-btn[data-v-00c560de] {\n  display: flex;\n  align-items: stretch;\n  background-image: none;\n  background-color: #f7f7f7;\n  border: none;\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  position: relative;\n  color: #323332;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n}\n.icon-btn__text[data-v-00c560de] {\n  align-self: center;\n  position: relative;\n  padding: 1rem;\n}\n@media (min-width: 768px) {\n.icon-btn__text[data-v-00c560de] {\n    margin-right: 1rem;\n    padding: 1rem 1.5em;\n}\n}\n.icon-btn__icon[data-v-00c560de] {\n  background-color: #0e85d0;\n  color: #f7f7f7;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n}\n.icon-btn[data-v-00c560de]:hover {\n  background-color: #1178b9;\n  color: #f7f7f7;\n}\n.decoration-two-boxes[data-v-00c560de] {\n  width: 4.5rem;\n  min-height: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n.decoration-two-boxes > *[data-v-00c560de]:nth-child(odd) {\n  background-color: #0e85d0;\n}\n.decoration-two-boxes > *[data-v-00c560de]:nth-child(even) {\n  background-color: #f7f7f7;\n}\nbody[data-v-00c560de] {\n  color: #323332 !important;\n}\na[data-v-00c560de] {\n  text-decoration: none !important;\n}\nimg[data-v-00c560de] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\ninput[data-v-00c560de]::-webkit-outer-spin-button,\ninput[data-v-00c560de]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number][data-v-00c560de] {\n  -moz-appearance: textfield;\n}\n.btn.btn-secondary[data-v-00c560de] {\n  color: #202020;\n}\n.btn.btn-primary[data-v-00c560de], .btn.btn-outline-primary[data-v-00c560de]:hover {\n  color: #f7f7f7 !important;\n}\n.text[data-v-00c560de] {\n  color: #323332 !important;\n}\n.text-dark-blue[data-v-00c560de] {\n  color: #0d68a1;\n}\n.w-fit[data-v-00c560de] {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n.content-box[data-v-00c560de] {\n  box-sizing: content-box;\n}\n.flip-x[data-v-00c560de] {\n  transform: scaleX(-1);\n}\n.flip-y[data-v-00c560de] {\n  transform: scaleY(-1);\n}\n.rounded-top-left[data-v-00c560de] {\n  border-top-left-radius: 0.25rem !important;\n}\n.rounded-top-right[data-v-00c560de] {\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-bottom-left[data-v-00c560de] {\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-bottom-right[data-v-00c560de] {\n  border-bottom-right-radius: 0.25rem !important;\n}\n.alpha-0[data-v-00c560de] {\n  opacity: 0;\n}\n.alpha-25[data-v-00c560de] {\n  opacity: 0.25;\n}\n.alpha-50[data-v-00c560de] {\n  opacity: 0.5;\n}\n.alpha-75[data-v-00c560de] {\n  opacity: 0.75;\n}\n.alpha-100[data-v-00c560de] {\n  opacity: 1;\n}\n.rotation-enter-active[data-v-00c560de],\n.rotation-leave-active[data-v-00c560de] {\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out;\n}\n.rotation-enter-from[data-v-00c560de],\n.rotation-leave-to[data-v-00c560de] {\n  transform: rotate(180deg) scale(0.5);\n  opacity: 0;\n}\n.slide-x-enter-active[data-v-00c560de],\n.slide-x-leave-active[data-v-00c560de] {\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out;\n}\n.slide-x-enter-from[data-v-00c560de],\n.slide-x-leave-to[data-v-00c560de] {\n  transform: translateX(-100px);\n  opacity: 0;\n}\n.scale-y-enter-active[data-v-00c560de],\n.scale-y-leave-active[data-v-00c560de] {\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n}\n.scale-y-enter-from[data-v-00c560de],\n.scale-y-leave-to[data-v-00c560de] {\n  transform: translateY(-100%);\n  opacity: 0;\n}\n.product-detail[data-v-00c560de] {\n  padding: 4rem 10vw;\n  min-height: 100vh;\n  display: grid;\n  background-image: linear-gradient(to right, transparent 50%, rgba(14, 133, 208, 0.05) 50%);\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.product-detail__image[data-v-00c560de] {\n  width: 100%;\n  height: 400px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_00c560de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_00c560de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_00c560de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ProductDetail.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_00c560de_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=00c560de&scoped=true */ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&scoped=true");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js */ "./resources/js/views/ProductDetail.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductDetail_vue_vue_type_style_index_0_id_00c560de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true */ "./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_ARDA_backend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_ARDA_backend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductDetail_vue_vue_type_template_id_00c560de_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-00c560de"],['__file',"resources/js/views/ProductDetail.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_template_id_00c560de_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_template_id_00c560de_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=template&id=00c560de&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&scoped=true");


/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_00c560de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=style&index=0&id=00c560de&lang=scss&scoped=true");


/***/ })

}]);