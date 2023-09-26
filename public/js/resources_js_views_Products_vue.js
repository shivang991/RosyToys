"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BaseModal.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BaseModal.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BaseModal',
  props: {
    shouldShow: {
      type: Boolean,
      "default": false
    }
  },
  emits: ["close"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var shouldShowContent = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var __returned__ = {
      props: props,
      emit: emit,
      shouldShowContent: shouldShowContent,
      FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductDetailModal.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductDetailModal.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_global_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/global/BaseModal.vue */ "./resources/js/components/global/BaseModal.vue");
/* harmony import */ var _plugins_Axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/plugins/Axios */ "./resources/js/plugins/Axios.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _global_BaseImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/BaseImage.vue */ "./resources/js/components/global/BaseImage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductDetailModal',
  props: {
    modelValue: {
      type: Number
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
    /**
     * @typedef ProductData
     * @property {number} id
     * @property {string} title
     * @property {string} description
     * @property {string} brand
     * @property {string} category
     * @property {number} price
     * @property {{id : number, src : string}[]} images
     * @property {string} created_at
     * @property {string} updated_at
     */

    /**
     * @type {import('vue').Ref<ProductData|null>}
     */

    var product = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    /**
     * @type {import('vue').Ref<ProductData["images"][number]|null>}
     */

    var currentViewingImg = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    var axios = (0,_plugins_Axios__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.watch)(function () {
      return props.modelValue;
    }, /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newProductId) {
        var _product$value;

        var _yield$axios$get, data;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!newProductId || newProductId === ((_product$value = product.value) === null || _product$value === void 0 ? void 0 : _product$value.id))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                isLoading.value = true;
                /**
                 * @type {{ data: ProductData }}
                 */

                _context.next = 5;
                return axios.get("/api/product/".concat(newProductId));

              case 5:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                product.value = data;
                currentViewingImg.value = data.images[0];
                isLoading.value = false;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    var __returned__ = {
      props: props,
      emit: emit,
      isLoading: isLoading,
      product: product,
      currentViewingImg: currentViewingImg,
      axios: axios,
      BaseModal: _components_global_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      useAxios: _plugins_Axios__WEBPACK_IMPORTED_MODULE_1__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_2__.watch,
      BaseImage: _global_BaseImage_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ProductosFiltersMultiselect_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosFiltersMultiselect.vue */ "./resources/js/components/productos/ProductosFiltersMultiselect.vue");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _store_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/products */ "./resources/js/store/products.js");

 // import ProductosFiltersPrice from './ProductosFiltersPrice.vue';




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductosFilters',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose(); // import { useAxios } from "@/plugins/Axios";

    var input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
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
    // const axios = useAxios();


    var filters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      category: {
        label: "Categoría",
        options: _store_products__WEBPACK_IMPORTED_MODULE_3__.categoryOptions
      }
    }); // axios.get("/api/choices/brands").then((res) => {
    //     filters.brand = {
    //         label: "Marcas",
    //         options: res.data,
    //     };
    // });

    var isScreenWide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(window.innerWidth > 768);
    window.addEventListener("resize", function () {
      return isScreenWide.value = window.innerWidth > 768;
    });
    var shouldShowFiltersDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var filterContainerEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

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
      filters: filters,
      isScreenWide: isScreenWide,
      shouldShowFiltersDropdown: shouldShowFiltersDropdown,
      filterContainerEl: filterContainerEl,
      toggleFilters: toggleFilters,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      ProductosFiltersMultiselect: _ProductosFiltersMultiselect_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_4__.useStore,
      categoryOptions: _store_products__WEBPACK_IMPORTED_MODULE_3__.categoryOptions
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
    // label: { type: String, required: true },
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ProductDetailModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductDetailModal.vue */ "./resources/js/components/productos/ProductDetailModal.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductosList',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var products = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return store.state.products.data;
    });
    var currentShowingProductId = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);

    function removeSearchQuery() {
      store.commit("products/SET_QUERY", "");
      store.dispatch("products/refetch");
    }

    var __returned__ = {
      store: store,
      products: products,
      currentShowingProductId: currentShowingProductId,
      removeSearchQuery: removeSearchQuery,
      ProductosListItem: _ProductosListItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_4__.useStore,
      computed: vue__WEBPACK_IMPORTED_MODULE_2__.computed,
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      ProductDetailModal: _ProductDetailModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
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
      type: String
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
  emits: ["more-click"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var __returned__ = {
      emit: emit,
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
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Products',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.onBeforeRouteLeave)(function () {
      store.commit("products/SET_FILTERS", {});
      store.commit("products/SET_QUERY", "");
      store.dispatch("products/refetch");
    });
    var __returned__ = {
      store: store,
      ProductosFilters: _components_productos_ProductosFilters_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ProductosList: _components_productos_ProductosList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      ProductPagination: _components_productos_ProductPagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      onBeforeRouteLeave: vue_router__WEBPACK_IMPORTED_MODULE_4__.onBeforeRouteLeave,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_3__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BaseModal.vue?vue&type=template&id=768fe5ca":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BaseModal.vue?vue&type=template&id=768fe5ca ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "bg-gradient-to-b from-transparent to-sky-100 grid w-full justify-center z-10 absolute min-h-full pointer-events-auto"
};
var _hoisted_2 = {
  key: 0,
  "class": "z-20 bg-white my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"
};
var _hoisted_3 = {
  "class": "flex justify-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#app-modals"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    onAfterEnter: _cache[2] || (_cache[2] = function ($event) {
      return $setup.shouldShowContent = true;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.shouldShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: "modal",
        onAfterLeave: _cache[1] || (_cache[1] = function ($event) {
          return $setup.emit('close');
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$setup.shouldShowContent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            "class": "text-xl p-4",
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return $setup.shouldShowContent = false;
            })
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontAwesomeIcon"], {
            icon: "fa fa-times"
          })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 3
        /* FORWARDED */

      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  })]);
}

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductDetailModal.vue?vue&type=template&id=97515358":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductDetailModal.vue?vue&type=template&id=97515358 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "py-8 flex justify-center w-80"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-8 h-8 border-4 border-sky-600 border-b-transparent rounded-full animate-spin"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  key: 1,
  "class": "w-72 sm:w-96"
};
var _hoisted_5 = {
  "class": "flex gap-2 justify-center px-2 flex-wrap"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  "class": "p-8"
};
var _hoisted_8 = {
  "class": "font-semibold text-2xl"
};
var _hoisted_9 = {
  "class": "leading-loose mb-2"
};
var _hoisted_10 = {
  "class": "font-semibold text-sky-600 mb-2"
};
var _hoisted_11 = {
  "class": "flex space-x-4"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-gray-600"
}, "Marca", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "text-xl"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-gray-600"
}, "Categoría", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "text-xl"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BaseModal"], {
    "should-show": !!$props.modelValue,
    onClose: _cache[0] || (_cache[0] = function ($event) {
      return $setup.emit('update:modelValue', null);
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$currentViewin;

      return [$setup.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseImage"], {
        "is-external": "",
        src: (_$setup$currentViewin = $setup.currentViewingImg) === null || _$setup$currentViewin === void 0 ? void 0 : _$setup$currentViewin.src,
        "class": "h-48 w-full object-cover mb-2"
      }, null, 8
      /* PROPS */
      , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.product.images, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: img.id,
          onClick: function onClick($event) {
            return $setup.currentViewingImg = img;
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["basis-24 h-12 duration-150", {
            'scale-75 opacity-50': $setup.currentViewingImg !== img
          }])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseImage"], {
          "class": "w-full h-full object-cover rounded",
          "is-external": "",
          src: img.src
        }, null, 8
        /* PROPS */
        , ["src"])], 10
        /* CLASS, PROPS */
        , _hoisted_6);
      }), 128
      /* KEYED_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.description), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.price), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.brand), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.category), 1
      /* TEXT */
      )])])])]))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["should-show"]);
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
  "class": "p-8 md:w-64"
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
      modelValue: $setup.input[key],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.input[key] = $event;
      }
    }, null, 8
    /* PROPS */
    , ["options", "modelValue", "onUpdate:modelValue"]);
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
  "class": "px-2 space-y-2"
};
var _hoisted_2 = ["checked", "onChange"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h5 class=\"font-semibold text-xl mb-2\">{{ label }}</h5> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, function (option, index) {
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
    , _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 1
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
  "class": "sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 px-4 sm:px-8"
};
var _hoisted_2 = {
  key: 0,
  "class": "col-span-4 p-4 bg-sky-100 rounded-lg"
};
var _hoisted_3 = {
  "class": "flex space-x-4 text-xl items-center justify-center mb-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Lo sentimos, no se pudo encontrar ningún producto.", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 1,
  "class": "h-96 flex items-center justify-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-12 h-12 rounded-full border-4 border-sky-600 animate-spin border-b-transparent"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.products ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductDetailModal"], {
    modelValue: $setup.currentShowingProductId,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.currentShowingProductId = $event;
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProductosListItem"], {
      onMoreClick: function onMoreClick($event) {
        return $setup.currentShowingProductId = product.id;
      },
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
    , ["onMoreClick", "id", "imgSrc", "price", "title", "isLimited", "isLowStock", "isPromoted"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), !$setup.products.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontAwesomeIcon"], {
    icon: "fa-exclamation-triangle"
  }), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "text-sky-600 hover:underline w-full text-center",
    onClick: $setup.removeSearchQuery
  }, " Mostrar todos los productos ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_7));
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
  "class": "shadow-lg px-4 py-4 rounded-md"
};
var _hoisted_2 = {
  "class": "flex justify-between space-x-2 mb-4 items-center"
};
var _hoisted_3 = {
  "class": "text-sm truncate"
};
var _hoisted_4 = {
  "class": "font-semibold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseImage"], {
    isExternal: "",
    src: $props.imgSrc,
    "class": "w-40 h-40 object-cover mb-4 rounded mx-auto"
  }, null, 8
  /* PROPS */
  , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.price), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-gray-100 text-gray-600 py-2 px-4 font-semibold rounded ml-auto block",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.emit('more-click');
    })
  }, " Ver más ")]);
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
var _hoisted_3 = {
  "class": "flex-grow"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductosFilters"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductosList"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductPagination"])])])]);
}

/***/ }),

/***/ "./resources/js/components/global/BaseModal.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/global/BaseModal.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseModal_vue_vue_type_template_id_768fe5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModal.vue?vue&type=template&id=768fe5ca */ "./resources/js/components/global/BaseModal.vue?vue&type=template&id=768fe5ca");
/* harmony import */ var _BaseModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/global/BaseModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BaseModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseModal_vue_vue_type_template_id_768fe5ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/global/BaseModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BasePagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BasePagination_vue_vue_type_template_id_62e1949c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/global/BasePagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/productos/ProductDetailModal.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/productos/ProductDetailModal.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetailModal_vue_vue_type_template_id_97515358__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetailModal.vue?vue&type=template&id=97515358 */ "./resources/js/components/productos/ProductDetailModal.vue?vue&type=template&id=97515358");
/* harmony import */ var _ProductDetailModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetailModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/productos/ProductDetailModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductDetailModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductDetailModal_vue_vue_type_template_id_97515358__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductDetailModal.vue"]])
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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductPagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductPagination_vue_vue_type_template_id_2a7f075c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductPagination.vue"]])
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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosFilters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosFilters_vue_vue_type_template_id_6282218f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosFilters.vue"]])
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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosFiltersMultiselect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosFiltersMultiselect_vue_vue_type_template_id_4a548416__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosFiltersMultiselect.vue"]])
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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosList_vue_vue_type_template_id_65a0d53a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosList.vue"]])
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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductosListItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductosListItem_vue_vue_type_template_id_7ae65c26__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/productos/ProductosListItem.vue"]])
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
/* harmony import */ var C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Desktop_programs_web_projects_RosyToys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Products_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Products_vue_vue_type_template_id_eec6f8fa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Products.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/global/BaseModal.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/BaseModal.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BaseModal.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/components/productos/ProductDetailModal.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductDetailModal.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetailModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetailModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetailModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductDetailModal.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/components/global/BaseModal.vue?vue&type=template&id=768fe5ca":
/*!************************************************************************************!*\
  !*** ./resources/js/components/global/BaseModal.vue?vue&type=template&id=768fe5ca ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModal_vue_vue_type_template_id_768fe5ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModal_vue_vue_type_template_id_768fe5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseModal.vue?vue&type=template&id=768fe5ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/global/BaseModal.vue?vue&type=template&id=768fe5ca");


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

/***/ "./resources/js/components/productos/ProductDetailModal.vue?vue&type=template&id=97515358":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/productos/ProductDetailModal.vue?vue&type=template&id=97515358 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetailModal_vue_vue_type_template_id_97515358__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetailModal_vue_vue_type_template_id_97515358__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetailModal.vue?vue&type=template&id=97515358 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/productos/ProductDetailModal.vue?vue&type=template&id=97515358");


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