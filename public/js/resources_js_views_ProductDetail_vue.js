"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ProductDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _plugins_Axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/plugins/Axios */ "./resources/js/plugins/Axios.js");
/* harmony import */ var _components_global_BaseImage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/BaseImage.vue */ "./resources/js/components/global/BaseImage.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductDetail',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
    var axios = (0,_plugins_Axios__WEBPACK_IMPORTED_MODULE_1__.useAxios)();
    var product = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var isNotFound = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    if (route.params.id) {
      axios.get("/api/product/".concat(route.params.id)).then(function (_ref2) {
        var data = _ref2.data;
        return product.value = data;
      })["catch"](function (err) {
        if (err.response.status === 404) isNotFound.value = true;
      });
    }

    var __returned__ = {
      route: route,
      axios: axios,
      product: product,
      isNotFound: isNotFound,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useRoute: vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute,
      useAxios: _plugins_Axios__WEBPACK_IMPORTED_MODULE_1__.useAxios,
      BaseImage: _components_global_BaseImage_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "w-11/12 md:w-3/4 mx-auto py-8 sm:py-20 sm:grid grid-cols-2 gap-x-2 lg:gap-x-8"
};
var _hoisted_3 = {
  "class": "w-full mb-8 sm:mb-0"
};
var _hoisted_4 = {
  "class": "text-4xl font-semibold leading-none mb-4"
};
var _hoisted_5 = {
  "class": "font-semibold text-2xl text-slate-600 mb-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center space-x-2 mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-xl"
}, "Quantity:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "px-4 py-2 bg-slate-200 rounded-md"
}, "1")], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mb-8"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-xl mb-2"
}, "Description:", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "space-y-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "w-full py-2 border border-amber-500 text-amber-500 rounded-md"
}, " Buy Now "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "w-full py-2 bg-amber-500 text-white rounded-md"
}, " Add to Cart ")], -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 0,
  "class": "mt-8"
};
var _hoisted_11 = {
  "class": "flex space-x-2"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Identificación de producto:", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "fw-bolder"
};
var _hoisted_14 = {
  "class": "d-flex"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Eliminar ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Editar ");

var _hoisted_17 = {
  key: 1,
  "class": "flex flex-col items-center pt-8 justify-center"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-slate-500 text-6xl font-bold mb-2"
}, "404", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-slate-900"
}, "The product could not be found", -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_18, _hoisted_19];
var _hoisted_21 = {
  key: 2,
  "class": "pt-12 flex justify-center"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-12 h-12 rounded-full border-4 border-amber-500 animate-spin border-b-transparent"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = [_hoisted_22];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return $setup.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseImage"], {
    "is-external": "",
    src: $setup.product.image_url,
    alt: $setup.product.title,
    "class": "w-full h-80 object-cover"
  }, null, 8
  /* PROPS */
  , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.price), 1
  /* TEXT */
  ), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.description), 1
  /* TEXT */
  )]), _hoisted_9, _ctx.$store.getters['auth/isAdmin'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'DeleteProduct',
      query: {
        id: $setup.product.id
      }
    },
    "class": "flex-grow-1 me-2 btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
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
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : $setup.isNotFound ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, _hoisted_20)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, _hoisted_23));
}

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
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_00c560de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=00c560de */ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de");
/* harmony import */ var _ProductDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/ProductDetail.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_AnonymousToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_AnonymousToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductDetail_vue_vue_type_template_id_00c560de__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/ProductDetail.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_template_id_00c560de__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_template_id_00c560de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=template&id=00c560de */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de");


/***/ })

}]);