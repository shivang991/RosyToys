"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BasePagination.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BasePagination.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BasePagination',
  props: {
    paginationData: {
      type: Object,
      "default": null
    }
  },
  emits: ["refetch-requested"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;

    var loadPageByURL = function loadPageByURL(url) {
      emit("refetch-requested", url);
    };

    function loadPrevPage() {
      var url = props.paginationData.links[0].url;
      loadPageByURL(url);
    }

    function loadNextPage() {
      var url = props.paginationData.links.slice(-1)[0].url;
      loadPageByURL(url);
    }

    var __returned__ = {
      props: props,
      emit: emit,
      loadPageByURL: loadPageByURL,
      loadPrevPage: loadPrevPage,
      loadNextPage: loadNextPage,
      FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductPagination.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductPagination.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _global_BasePagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/BasePagination.vue */ "./resources/js/components/global/BasePagination.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductPagination',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var paginationData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.products.pagination;
    });

    var loadPageByURL = function loadPageByURL(url) {
      store.dispatch("products/refetch", url);
    };

    var __returned__ = {
      store: store,
      paginationData: paginationData,
      loadPageByURL: loadPageByURL,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore,
      BasePagination: _global_BasePagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFilters.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFilters.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/plugins/Axios */ "./resources/js/plugins/Axios.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ProductosFiltersMultiselect_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductosFiltersMultiselect.vue */ "./resources/js/components/productos/ProductosFiltersMultiselect.vue");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


 // import ProductosFiltersPrice from './ProductosFiltersPrice.vue';



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductosFilters',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var input = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      brand: []
    });
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();

    function applyFilters() {
      store.commit("products/SET_FILTERS", input);
      store.dispatch("products/refetch");
    }

    function clearFilters() {
      input.brand = [];
      applyFilters();
    } // Fetch choices for filters from server


    var axios = (0,_plugins_Axios__WEBPACK_IMPORTED_MODULE_0__.useAxios)();
    var filters = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({});
    axios.get("/api/choices/brands").then(function (res) {
      filters.brand = {
        label: "Marcas",
        options: res.data
      };
    });
    var isScreenWide = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(window.innerWidth > 768);
    window.addEventListener("resize", function () {
      return isScreenWide.value = window.innerWidth > 768;
    });
    var shouldShowFiltersDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var filterContainerEl = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    function toggleFilters() {
      if (!filterContainerEl.value) return;
      shouldShowFiltersDropdown.value = !shouldShowFiltersDropdown.value;

      if (shouldShowFiltersDropdown.value) {
        filterContainerEl.value.style.height = "auto";
        var newHeight = getComputedStyle(filterContainerEl.value).getPropertyValue("height");
        filterContainerEl.value.style.height = "0";
        requestAnimationFrame(function () {
          return filterContainerEl.value.style.height = newHeight;
        });
      } else {
        filterContainerEl.value.style.height = "0";
      }
    }

    var __returned__ = {
      input: input,
      store: store,
      applyFilters: applyFilters,
      clearFilters: clearFilters,
      axios: axios,
      filters: filters,
      isScreenWide: isScreenWide,
      shouldShowFiltersDropdown: shouldShowFiltersDropdown,
      filterContainerEl: filterContainerEl,
      toggleFilters: toggleFilters,
      useAxios: _plugins_Axios__WEBPACK_IMPORTED_MODULE_0__.useAxios,
      reactive: vue__WEBPACK_IMPORTED_MODULE_1__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      ProductosFiltersMultiselect: _ProductosFiltersMultiselect_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_4__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductosFiltersMultiselect',
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;

    function handleCheck(option) {
      var newVal = props.modelValue.includes(option) ? props.modelValue.filter(function (v) {
        return v !== option;
      }) : [].concat(_toConsumableArray(props.modelValue), [option]);
      emit("update:modelValue", newVal);
    }

    var __returned__ = {
      props: props,
      emit: emit,
      handleCheck: handleCheck
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosList.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosList.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductosListItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosListItem.vue */ "./resources/js/components/productos/ProductosListItem.vue");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductosList',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var products = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return store.state.products.data;
    });
    var __returned__ = {
      store: store,
      products: products,
      ProductosListItem: _ProductosListItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_3__.useStore,
      computed: vue__WEBPACK_IMPORTED_MODULE_2__.computed
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosListItem.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosListItem.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_BaseImage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/BaseImage.vue */ "./resources/js/components/global/BaseImage.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductosListItem',
  props: {
    id: {
      type: Number,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    isLimited: {
      type: Boolean,
      required: true
    },
    isPromoted: {
      type: Boolean,
      required: true
    },
    isLowStock: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      props: props,
      BaseImage: _global_BaseImage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Products.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Products.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_productos_ProductosFilters_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/productos/ProductosFilters.vue */ "./resources/js/components/productos/ProductosFilters.vue");
/* harmony import */ var _components_productos_ProductosList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/productos/ProductosList.vue */ "./resources/js/components/productos/ProductosList.vue");
/* harmony import */ var _components_productos_ProductPagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/productos/ProductPagination.vue */ "./resources/js/components/productos/ProductPagination.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Products',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      ProductosFilters: _components_productos_ProductosFilters_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ProductosList: _components_productos_ProductosList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      ProductPagination: _components_productos_ProductPagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BasePagination.vue?vue&type=template&id=62e1949c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BasePagination.vue?vue&type=template&id=62e1949c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "flex flex-col items-center"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Mostrando ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" de ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" elementos. ");

var _hoisted_5 = {
  "class": "flex space-x-4 items-center"
};
var _hoisted_6 = ["disabled"];
var _hoisted_7 = ["disabled", "onClick"];
var _hoisted_8 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.paginationData && $props.paginationData.last_page !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paginationData.per_page), 1
  /* TEXT */
  ), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paginationData.total), 1
  /* TEXT */
  ), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "rotate-180 px-4 py-2 hover:bg-gray-100 rounded-md disabled:opacity-50",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.loadPrevPage();
    }),
    disabled: $props.paginationData.current_page === 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontAwesomeIcon"], {
    icon: "fa-chevron-right"
  })], 8
  /* PROPS */
  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.paginationData.links.slice(1, -1), function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: link.url,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-4 py-2 hover:bg-gray-100 rounded-md", {
        'bg-sky-600 text-white': link.active
      }]),
      disabled: !link.url,
      onClick: function onClick($event) {
        return $setup.loadPageByURL(link.url);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_7);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $props.paginationData.current_page === $props.paginationData.last_page,
    "class": "px-4 py-2 hover:bg-gray-100 rounded-md disabled:opacity-50",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.loadNextPage();
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontAwesomeIcon"], {
    icon: "fa-chevron-right"
  })], 8
  /* PROPS */
  , _hoisted_8)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductPagination.vue?vue&type=template&id=2a7f075c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductPagination.vue?vue&type=template&id=2a7f075c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BasePagination"], {
    "pagination-data": $setup.paginationData,
    onRefetchRequested: $setup.loadPageByURL
  }, null, 8
  /* PROPS */
  , ["pagination-data"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFilters.vue?vue&type=template&id=6282218f":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFilters.vue?vue&type=template&id=6282218f ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-4 sm:px-8 md:px-0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Filtros", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "duration-500 overflow-hidden h-0 md:h-max rounded-md bg-white shadow-lg",
  ref: "filterContainerEl"
};
var _hoisted_4 = {
  "class": "px-12 py-8 md:w-80"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-2xl font-semibold pb-2 mb-4 border-b border-gray-600"
}, " Filtros: ", -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "my-8"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex md:hidden space-x-2 border rounded-md border-sky-600 text-sky-600 justify-between py-2 px-4 w-full items-center",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleFilters();
    })
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontAwesomeIcon"], {
    icon: "fa-chevron-down",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-sm duration-500", {
      'rotate-180': $setup.shouldShowFiltersDropdown
    }])
  }, null, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filters, function (filter, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProductosFiltersMultiselect"], {
      key: key,
      options: filter.options,
      label: filter.label,
      modelValue: $setup.input[key],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.input[key] = $event;
      }
    }, null, 8
    /* PROPS */
    , ["options", "label", "modelValue", "onUpdate:modelValue"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), Object.keys($setup.filters).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-sky-600 py-2 px-4 text-white rounded-md w-full mb-2",
    onClick: $setup.applyFilters
  }, " Aplicar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-secondary ms-1 py-2 px-4 border text-sky-600 border-sky-600 rounded-md w-full",
    onClick: $setup.clearFilters
  }, " Borrar ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 512
  /* NEED_PATCH */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "font-semibold text-xl mb-2"
};
var _hoisted_2 = {
  "class": "px-2 space-y-2"
};
var _hoisted_3 = ["checked", "onChange"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, function (option, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "flex items-center space-x-2",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      "class": "accent-sky-600 form-check-input",
      checked: $props.modelValue.includes(option),
      onChange: function onChange($event) {
        return $setup.handleCheck(option);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosList.vue?vue&type=template&id=65a0d53a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosList.vue?vue&type=template&id=65a0d53a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-20 mb-12 px-4 sm:px-8"
};
var _hoisted_2 = {
  key: 0,
  "class": "flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Lo sentimos, no se pudo encontrar ningún producto.", -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 1,
  "class": "h-96 flex items-center justify-center"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-12 h-12 rounded-full border-4 border-sky-600 animate-spin border-b-transparent"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.products ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProductosListItem"], {
      key: product.id,
      id: product.id,
      imgSrc: product.image_url,
      price: product.price,
      title: product.title,
      isLimited: !!product.is_limited_edition,
      isLowStock: !!product.is_low_stock,
      isPromoted: !!product.is_promoted
    }, null, 8
    /* PROPS */
    , ["id", "imgSrc", "price", "title", "isLimited", "isLowStock", "isPromoted"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), !$setup.products.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontAwesomeIcon"], {
    icon: "fa-exclamation-triangle"
  }), _hoisted_3])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, _hoisted_6));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosListItem.vue?vue&type=template&id=7ae65c26":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosListItem.vue?vue&type=template&id=7ae65c26 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "shadow-lg hover:shadow-xl cursor-pointer px-4 py-12 rounded-md"
};
var _hoisted_2 = {
  "class": "flex flex-col items-start mb-4 space-y-2"
};
var _hoisted_3 = {
  key: 0,
  "class": "px-2 text-sm bg-red-50 border border-red-600 text-red-600 rounded-full"
};
var _hoisted_4 = {
  key: 1,
  "class": "px-2 text-sm bg-white text-slate-500 rounded-full border border-slate-500"
};
var _hoisted_5 = {
  key: 2,
  "class": "px-2 text-sm bg-white text-sky-600 rounded-full border border-sky-600"
};
var _hoisted_6 = {
  "class": "flex justify-between space-x-8"
};
var _hoisted_7 = {
  "class": "leading-none"
};
var _hoisted_8 = {
  "class": "font-semibold text-xl"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseImage"], {
    isExternal: "",
    src: $props.imgSrc,
    "class": "w-40 h-40 object-cover mb-4 rounded mx-auto"
  }, null, 8
  /* PROPS */
  , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.isLowStock ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, " Existencias bajas ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isLimited ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_4, " Edición limitada ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isPromoted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, " Promocionado ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_8, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.price), 1
  /* TEXT */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-12"
};
var _hoisted_2 = {
  "class": "md:flex md:space-x-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductosFilters"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductosList"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductPagination"])])])]);
}

/***/ }),

/***/ "./resources/js/components/global/BasePagination.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/global/BasePagination.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasePagination_vue_vue_type_template_id_62e1949c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=template&id=62e1949c */ "./resources/js/components/global/BasePagination.vue?vue&type=template&id=62e1949c");
/* harmony import */ var _BasePagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/global/BasePagination.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BasePagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BasePagination_vue_vue_type_template_id_62e1949c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/global/BasePagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/productos/ProductPagination.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/productos/ProductPagination.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductPagination_vue_vue_type_template_id_2a7f075c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPagination.vue?vue&type=template&id=2a7f075c */ "./resources/js/components/productos/ProductPagination.vue?vue&type=template&id=2a7f075c");
/* harmony import */ var _ProductPagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPagination.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/productos/ProductPagination.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductPagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductPagination_vue_vue_type_template_id_2a7f075c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductPagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/productos/ProductosFilters.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/productos/ProductosFilters.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductosFilters_vue_vue_type_template_id_6282218f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosFilters.vue?vue&type=template&id=6282218f */ "./resources/js/components/productos/ProductosFilters.vue?vue&type=template&id=6282218f");
/* harmony import */ var _ProductosFilters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosFilters.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/productos/ProductosFilters.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosFilters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosFilters_vue_vue_type_template_id_6282218f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosFilters.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/productos/ProductosFiltersMultiselect.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosFiltersMultiselect.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductosFiltersMultiselect_vue_vue_type_template_id_4a548416__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416 */ "./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416");
/* harmony import */ var _ProductosFiltersMultiselect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosFiltersMultiselect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosFiltersMultiselect_vue_vue_type_template_id_4a548416__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosFiltersMultiselect.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/productos/ProductosList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/productos/ProductosList.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductosList_vue_vue_type_template_id_65a0d53a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosList.vue?vue&type=template&id=65a0d53a */ "./resources/js/components/productos/ProductosList.vue?vue&type=template&id=65a0d53a");
/* harmony import */ var _ProductosList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosList.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/productos/ProductosList.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosList_vue_vue_type_template_id_65a0d53a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/productos/ProductosListItem.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/productos/ProductosListItem.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductosListItem_vue_vue_type_template_id_7ae65c26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosListItem.vue?vue&type=template&id=7ae65c26 */ "./resources/js/components/productos/ProductosListItem.vue?vue&type=template&id=7ae65c26");
/* harmony import */ var _ProductosListItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosListItem.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/productos/ProductosListItem.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosListItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosListItem_vue_vue_type_template_id_7ae65c26__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosListItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Products.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_eec6f8fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=eec6f8fa */ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa");
/* harmony import */ var _Products_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/Products.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_National_Desktop_programs_WebDevelopment_Projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Products_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Products_vue_vue_type_template_id_eec6f8fa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Products.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/global/BasePagination.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/global/BasePagination.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasePagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasePagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BasePagination.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BasePagination.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/productos/ProductPagination.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductPagination.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductPagination.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductPagination.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/productos/ProductosFilters.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosFilters.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFilters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFilters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosFilters.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFilters.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFiltersMultiselect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFiltersMultiselect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/productos/ProductosList.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosList.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosList.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosList.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/productos/ProductosListItem.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosListItem.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosListItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosListItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosListItem.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosListItem.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Products.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Products.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/global/BasePagination.vue?vue&type=template&id=62e1949c":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/BasePagination.vue?vue&type=template&id=62e1949c ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasePagination_vue_vue_type_template_id_62e1949c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasePagination_vue_vue_type_template_id_62e1949c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BasePagination.vue?vue&type=template&id=62e1949c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BasePagination.vue?vue&type=template&id=62e1949c");


/***/ }),

/***/ "./resources/js/components/productos/ProductPagination.vue?vue&type=template&id=2a7f075c":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductPagination.vue?vue&type=template&id=2a7f075c ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPagination_vue_vue_type_template_id_2a7f075c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPagination_vue_vue_type_template_id_2a7f075c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductPagination.vue?vue&type=template&id=2a7f075c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductPagination.vue?vue&type=template&id=2a7f075c");


/***/ }),

/***/ "./resources/js/components/productos/ProductosFilters.vue?vue&type=template&id=6282218f":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosFilters.vue?vue&type=template&id=6282218f ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFilters_vue_vue_type_template_id_6282218f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFilters_vue_vue_type_template_id_6282218f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosFilters.vue?vue&type=template&id=6282218f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFilters.vue?vue&type=template&id=6282218f");


/***/ }),

/***/ "./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFiltersMultiselect_vue_vue_type_template_id_4a548416__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosFiltersMultiselect_vue_vue_type_template_id_4a548416__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosFiltersMultiselect.vue?vue&type=template&id=4a548416");


/***/ }),

/***/ "./resources/js/components/productos/ProductosList.vue?vue&type=template&id=65a0d53a":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosList.vue?vue&type=template&id=65a0d53a ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosList_vue_vue_type_template_id_65a0d53a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosList_vue_vue_type_template_id_65a0d53a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosList.vue?vue&type=template&id=65a0d53a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosList.vue?vue&type=template&id=65a0d53a");


/***/ }),

/***/ "./resources/js/components/productos/ProductosListItem.vue?vue&type=template&id=7ae65c26":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductosListItem.vue?vue&type=template&id=7ae65c26 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosListItem_vue_vue_type_template_id_7ae65c26__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductosListItem_vue_vue_type_template_id_7ae65c26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductosListItem.vue?vue&type=template&id=7ae65c26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductosListItem.vue?vue&type=template&id=7ae65c26");


/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_template_id_eec6f8fa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_template_id_eec6f8fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Products.vue?vue&type=template&id=eec6f8fa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa");


/***/ })

}]);