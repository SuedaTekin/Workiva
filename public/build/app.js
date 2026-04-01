(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./counter_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/counter_controller.js",
	"./ogrenim_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ogrenim_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-chartjs/dist/controller.js */ "./vendor/symfony/ux-chartjs/assets/dist/controller.js");
/* harmony import */ var _symfony_ux_typed_dist_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-typed/dist/controller.js */ "./vendor/symfony/ux-typed/assets/dist/controller.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'symfony--ux-typed': _symfony_ux_typed_dist_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/counter_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/counter_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "count", 0);
    return _this;
  }
  _createClass(_default, [{
    key: "increment",
    value:
    // connect() {
    //     this.element.innerHTML = ' 0 times';
    //     this.count = 0;
    //
    //     this.element.addEventListener('click', () => {
    //         this.count++;
    //         this.element.innerHTML = this.count;
    //     })
    // }
    function increment() {
      this.count++;
      this.countTarget.innerHTML = this.count;
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ['count']);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ogrenim_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ogrenim_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * ogrenim_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/ogrenim_controller.js';
      this.element.addEventListener('chartjs:pre-connect', this._onPreConnect);
      this.element.addEventListener('chartjs:connect', this._onConnect);
    }

    // onChartConnect(event) {
    //     console.log(event);
    //     this.chart = event.detail.chart;
    //
    //     setTimeout(() => {
    //         this.setNewData();
    //     }, 5000)
    // }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // You should always remove listeners when the controller is disconnected to avoid side effects
      this.element.removeEventListener('chartjs:pre-connect', this._onPreConnect);
      this.element.removeEventListener('chartjs:connect', this._onConnect);
    }
  }, {
    key: "_onPreConnect",
    value: function _onPreConnect(event) {
      // The chart is not yet created
      // You can access the config that will be passed to "new Chart()"
      console.log(event.detail.config);

      // For instance you can format Y axis
      event.detail.config.options.scales = {
        y: {
          ticks: {
            callback: function callback(value, index, values) {
              /* ... */
            }
          }
        }
      };
    }
  }, {
    key: "_onConnect",
    value: function _onConnect(event) {
      // The chart was just created
      console.log(event.detail.chart); // You can access the chart instance using the event details

      // For instance you can listen to additional events
      event.detail.chart.options.onHover = function (mouseEvent) {
        /* ... */
      };
      event.detail.chart.options.onClick = function (mouseEvent, elements) {
        console.log(event.detail.chart.data.datasets[0].data[elements[0].index]);
        console.log(clickHandler(mouseEvent));
      };
      function clickHandler(evt) {
        var myChart = event.detail.chart;
        var points = myChart.getElementsAtEventForMode(evt, 'nearest', {
          intersect: true
        }, true);
        var label = '';
        if (points.length) {
          var firstPoint = points[0];
          label = myChart.data.labels[firstPoint.index];
          var value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        }
        return label;
      }
    }
  }, {
    key: "setNewData",
    value: function setNewData() {
      this.chart.data.datasets[0].data[1] = 30;
      this.chart.update();
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-zoom */ "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.esm.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)



document.addEventListener('chartjs:init', function (event) {
  var Chart = event.detail.Chart;
  //Chart.register(zoomPlugin);
  //Chart.register(autocolors);
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-chartjs/assets/dist/controller.js":
/*!*************************************************************!*\
  !*** ./vendor/symfony/ux-chartjs/assets/dist/controller.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


if (chart_js__WEBPACK_IMPORTED_MODULE_29__.registerables) {
  chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart.register.apply(chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_29__.registerables));
}
var isChartInitialized = false;
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _super.apply(this, arguments);
    _this.chart = null;
    return _this;
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      if (!isChartInitialized) {
        isChartInitialized = true;
        this.dispatchEvent('init', {
          Chart: chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart
        });
      }
      if (!(this.element instanceof HTMLCanvasElement)) {
        throw new Error('Invalid element');
      }
      var payload = this.viewValue;
      if (Array.isArray(payload.options) && 0 === payload.options.length) {
        payload.options = {};
      }
      this.dispatchEvent('pre-connect', {
        options: payload.options,
        config: payload
      });
      var canvasContext = this.element.getContext('2d');
      if (!canvasContext) {
        throw new Error('Could not getContext() from Element');
      }
      this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart(canvasContext, payload);
      this.dispatchEvent('connect', {
        chart: this.chart
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.dispatchEvent('disconnect', {
        chart: this.chart
      });
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    }
  }, {
    key: "viewValueChanged",
    value: function viewValueChanged() {
      if (this.chart) {
        var viewValue = {
          data: this.viewValue.data,
          options: this.viewValue.options
        };
        if (Array.isArray(viewValue.options) && 0 === viewValue.options.length) {
          viewValue.options = {};
        }
        this.dispatchEvent('view-value-change', viewValue);
        this.chart.data = viewValue.data;
        this.chart.options = viewValue.options;
        this.chart.update();
        var parentElement = this.element.parentElement;
        if (parentElement && this.chart.options.responsive) {
          var originalWidth = parentElement.style.width;
          parentElement.style.width = "".concat(parentElement.offsetWidth + 1, "px");
          setTimeout(function () {
            parentElement.style.width = originalWidth;
          }, 0);
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'chartjs'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_28__.Controller);
default_1.values = {
  view: Object
};


/***/ }),

/***/ "./vendor/symfony/ux-typed/assets/dist/controller.js":
/*!***********************************************************!*\
  !*** ./vendor/symfony/ux-typed/assets/dist/controller.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var options = {
        strings: this.stringsValue,
        typeSpeed: this.typeSpeedValue,
        smartBackspace: this.smartBackspaceValue,
        startDelay: this.startDelayValue,
        backSpeed: this.backSpeedValue,
        shuffle: this.shuffleValue,
        backDelay: this.backDelayValue,
        fadeOut: this.fadeOutValue,
        fadeOutClass: this.fadeOutClassValue,
        fadeOutDelay: this.fadeOutDelayValue,
        loop: this.loopValue,
        loopCount: this.loopCountValue,
        showCursor: this.showCursorValue,
        cursorChar: this.cursorCharValue,
        autoInsertCss: this.autoInsertCssValue,
        attr: this.attrValue,
        bindInputFocusEvents: this.bindInputFocusEventsValue,
        contentType: this.contentTypeValue
      };
      this.dispatchEvent('pre-connect', {
        options: options
      });
      var typed = new typed_js__WEBPACK_IMPORTED_MODULE_20__["default"](this.element, options);
      this.dispatchEvent('connect', {
        typed: typed,
        options: options
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'typed'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);
default_1.values = {
  strings: Array,
  typeSpeed: {
    type: Number,
    "default": 30
  },
  smartBackspace: {
    type: Boolean,
    "default": true
  },
  startDelay: Number,
  backSpeed: Number,
  shuffle: Boolean,
  backDelay: {
    type: Number,
    "default": 700
  },
  fadeOut: Boolean,
  fadeOutClass: {
    type: String,
    "default": 'typed-fade-out'
  },
  fadeOutDelay: {
    type: Number,
    "default": 500
  },
  loop: Boolean,
  loopCount: {
    type: Number,
    "default": Number.POSITIVE_INFINITY
  },
  showCursor: {
    type: Boolean,
    "default": true
  },
  cursorChar: {
    type: String,
    "default": '.'
  },
  autoInsertCss: {
    type: Boolean,
    "default": true
  },
  attr: String,
  bindInputFocusEvents: Boolean,
  contentType: {
    type: String,
    "default": 'html'
  }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_chart_js_dist_chart_e-36c9d2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jb3VudGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL29ncmVuaW1fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtY2hhcnRqcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR5cGVkL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2NvdW50ZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2NvdW50ZXJfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vb2dyZW5pbV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvb2dyZW5pbV9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1jaGFydGpzL2Rpc3QvY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXR5cGVkL2Rpc3QvY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1jaGFydGpzLS1jaGFydCc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXR5cGVkJzogY29udHJvbGxlcl8xLFxufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcblxuICAgIGNvdW50ID0gMDtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnY291bnQnXTtcblxuICAgIC8vIGNvbm5lY3QoKSB7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnIDAgdGltZXMnO1xuICAgIC8vICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAvL1xuICAgIC8vICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgLy8gICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jb3VudDtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgdGhpcy5jb3VudFRhcmdldC5pbm5lckhUTUwgPSB0aGlzLmNvdW50O1xuICAgIH1cblxuXG5cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIG9ncmVuaW1fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL29ncmVuaW1fY29udHJvbGxlci5qcyc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFydGpzOnByZS1jb25uZWN0JywgdGhpcy5fb25QcmVDb25uZWN0KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYXJ0anM6Y29ubmVjdCcsIHRoaXMuX29uQ29ubmVjdCk7XG4gICAgfVxuXG4gICAgLy8gb25DaGFydENvbm5lY3QoZXZlbnQpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIC8vICAgICB0aGlzLmNoYXJ0ID0gZXZlbnQuZGV0YWlsLmNoYXJ0O1xuICAgIC8vXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXROZXdEYXRhKCk7XG4gICAgLy8gICAgIH0sIDUwMDApXG4gICAgLy8gfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgLy8gWW91IHNob3VsZCBhbHdheXMgcmVtb3ZlIGxpc3RlbmVycyB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGRpc2Nvbm5lY3RlZCB0byBhdm9pZCBzaWRlIGVmZmVjdHNcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYXJ0anM6cHJlLWNvbm5lY3QnLCB0aGlzLl9vblByZUNvbm5lY3QpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhcnRqczpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcbiAgICB9XG5cbiAgICBfb25QcmVDb25uZWN0KGV2ZW50KSB7XG4gICAgICAgIC8vIFRoZSBjaGFydCBpcyBub3QgeWV0IGNyZWF0ZWRcbiAgICAgICAgLy8gWW91IGNhbiBhY2Nlc3MgdGhlIGNvbmZpZyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIFwibmV3IENoYXJ0KClcIlxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuY29uZmlnKTtcblxuICAgICAgICAvLyBGb3IgaW5zdGFuY2UgeW91IGNhbiBmb3JtYXQgWSBheGlzXG4gICAgICAgIGV2ZW50LmRldGFpbC5jb25maWcub3B0aW9ucy5zY2FsZXMgPSB7XG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogLi4uICovXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX29uQ29ubmVjdChldmVudCkge1xuICAgICAgICAvLyBUaGUgY2hhcnQgd2FzIGp1c3QgY3JlYXRlZFxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuY2hhcnQpOyAvLyBZb3UgY2FuIGFjY2VzcyB0aGUgY2hhcnQgaW5zdGFuY2UgdXNpbmcgdGhlIGV2ZW50IGRldGFpbHNcblxuICAgICAgICAvLyBGb3IgaW5zdGFuY2UgeW91IGNhbiBsaXN0ZW4gdG8gYWRkaXRpb25hbCBldmVudHNcbiAgICAgICAgZXZlbnQuZGV0YWlsLmNoYXJ0Lm9wdGlvbnMub25Ib3ZlciA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvKiAuLi4gKi9cbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnQuZGV0YWlsLmNoYXJ0Lm9wdGlvbnMub25DbGljayA9IChtb3VzZUV2ZW50LCBlbGVtZW50cykgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhW2VsZW1lbnRzWzBdLmluZGV4XSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrSGFuZGxlcihtb3VzZUV2ZW50KSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZXZ0KSB7XG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IGV2ZW50LmRldGFpbC5jaGFydDtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IG15Q2hhcnQuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZShldnQsICduZWFyZXN0JywgeyBpbnRlcnNlY3Q6IHRydWUgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSAnJztcbiAgICAgICAgICAgIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQb2ludCA9IHBvaW50c1swXTtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IG15Q2hhcnQuZGF0YS5sYWJlbHNbZmlyc3RQb2ludC5pbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBteUNoYXJ0LmRhdGEuZGF0YXNldHNbZmlyc3RQb2ludC5kYXRhc2V0SW5kZXhdLmRhdGFbZmlyc3RQb2ludC5pbmRleF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuICAgIHNldE5ld0RhdGEoKSB7XG4gICAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhWzFdID0gMzA7XG4gICAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5pbXBvcnQgYXV0b2NvbG9ycyBmcm9tICdjaGFydGpzLXBsdWdpbi1hdXRvY29sb3JzJztcblxuaW1wb3J0IHpvb21QbHVnaW4gZnJvbSAnY2hhcnRqcy1wbHVnaW4tem9vbSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYXJ0anM6aW5pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgY29uc3QgQ2hhcnQgPSBldmVudC5kZXRhaWwuQ2hhcnQ7XG4gICAvL0NoYXJ0LnJlZ2lzdGVyKHpvb21QbHVnaW4pO1xuICAgLy9DaGFydC5yZWdpc3RlcihhdXRvY29sb3JzKTtcbn0pOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJhYmxlcywgQ2hhcnQgfSBmcm9tICdjaGFydC5qcyc7XG5cbmlmIChyZWdpc3RlcmFibGVzKSB7XG4gICAgQ2hhcnQucmVnaXN0ZXIoLi4ucmVnaXN0ZXJhYmxlcyk7XG59XG5sZXQgaXNDaGFydEluaXRpYWxpemVkID0gZmFsc2U7XG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICghaXNDaGFydEluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpc0NoYXJ0SW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdpbml0Jywge1xuICAgICAgICAgICAgICAgIENoYXJ0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnZpZXdWYWx1ZTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5vcHRpb25zKSAmJiAwID09PSBwYXlsb2FkLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXlsb2FkLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3ByZS1jb25uZWN0Jywge1xuICAgICAgICAgICAgb3B0aW9uczogcGF5bG9hZC5vcHRpb25zLFxuICAgICAgICAgICAgY29uZmlnOiBwYXlsb2FkLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoIWNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldENvbnRleHQoKSBmcm9tIEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGNhbnZhc0NvbnRleHQsIHBheWxvYWQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNoYXJ0OiB0aGlzLmNoYXJ0IH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnLCB7IGNoYXJ0OiB0aGlzLmNoYXJ0IH0pO1xuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3VmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgY29uc3Qgdmlld1ZhbHVlID0geyBkYXRhOiB0aGlzLnZpZXdWYWx1ZS5kYXRhLCBvcHRpb25zOiB0aGlzLnZpZXdWYWx1ZS5vcHRpb25zIH07XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2aWV3VmFsdWUub3B0aW9ucykgJiYgMCA9PT0gdmlld1ZhbHVlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmlld1ZhbHVlLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndmlldy12YWx1ZS1jaGFuZ2UnLCB2aWV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jaGFydC5kYXRhID0gdmlld1ZhbHVlLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0Lm9wdGlvbnMgPSB2aWV3VmFsdWUub3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAocGFyZW50RWxlbWVudCAmJiB0aGlzLmNoYXJ0Lm9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsV2lkdGggPSBwYXJlbnRFbGVtZW50LnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtwYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgMX1weGA7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBvcmlnaW5hbFdpZHRoO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdjaGFydGpzJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHZpZXc6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHJpbmdzOiB0aGlzLnN0cmluZ3NWYWx1ZSxcbiAgICAgICAgICAgIHR5cGVTcGVlZDogdGhpcy50eXBlU3BlZWRWYWx1ZSxcbiAgICAgICAgICAgIHNtYXJ0QmFja3NwYWNlOiB0aGlzLnNtYXJ0QmFja3NwYWNlVmFsdWUsXG4gICAgICAgICAgICBzdGFydERlbGF5OiB0aGlzLnN0YXJ0RGVsYXlWYWx1ZSxcbiAgICAgICAgICAgIGJhY2tTcGVlZDogdGhpcy5iYWNrU3BlZWRWYWx1ZSxcbiAgICAgICAgICAgIHNodWZmbGU6IHRoaXMuc2h1ZmZsZVZhbHVlLFxuICAgICAgICAgICAgYmFja0RlbGF5OiB0aGlzLmJhY2tEZWxheVZhbHVlLFxuICAgICAgICAgICAgZmFkZU91dDogdGhpcy5mYWRlT3V0VmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0Q2xhc3M6IHRoaXMuZmFkZU91dENsYXNzVmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0RGVsYXk6IHRoaXMuZmFkZU91dERlbGF5VmFsdWUsXG4gICAgICAgICAgICBsb29wOiB0aGlzLmxvb3BWYWx1ZSxcbiAgICAgICAgICAgIGxvb3BDb3VudDogdGhpcy5sb29wQ291bnRWYWx1ZSxcbiAgICAgICAgICAgIHNob3dDdXJzb3I6IHRoaXMuc2hvd0N1cnNvclZhbHVlLFxuICAgICAgICAgICAgY3Vyc29yQ2hhcjogdGhpcy5jdXJzb3JDaGFyVmFsdWUsXG4gICAgICAgICAgICBhdXRvSW5zZXJ0Q3NzOiB0aGlzLmF1dG9JbnNlcnRDc3NWYWx1ZSxcbiAgICAgICAgICAgIGF0dHI6IHRoaXMuYXR0clZhbHVlLFxuICAgICAgICAgICAgYmluZElucHV0Rm9jdXNFdmVudHM6IHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHNWYWx1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiB0aGlzLmNvbnRlbnRUeXBlVmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncHJlLWNvbm5lY3QnLCB7IG9wdGlvbnMgfSk7XG4gICAgICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgdHlwZWQsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICd0eXBlZCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBzdHJpbmdzOiBBcnJheSxcbiAgICB0eXBlU3BlZWQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAzMCB9LFxuICAgIHNtYXJ0QmFja3NwYWNlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBzdGFydERlbGF5OiBOdW1iZXIsXG4gICAgYmFja1NwZWVkOiBOdW1iZXIsXG4gICAgc2h1ZmZsZTogQm9vbGVhbixcbiAgICBiYWNrRGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA3MDAgfSxcbiAgICBmYWRlT3V0OiBCb29sZWFuLFxuICAgIGZhZGVPdXRDbGFzczogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd0eXBlZC1mYWRlLW91dCcgfSxcbiAgICBmYWRlT3V0RGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA1MDAgfSxcbiAgICBsb29wOiBCb29sZWFuLFxuICAgIGxvb3BDb3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSB9LFxuICAgIHNob3dDdXJzb3I6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGN1cnNvckNoYXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnLicgfSxcbiAgICBhdXRvSW5zZXJ0Q3NzOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBhdHRyOiBTdHJpbmcsXG4gICAgYmluZElucHV0Rm9jdXNFdmVudHM6IEJvb2xlYW4sXG4gICAgY29udGVudFR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnaHRtbCcgfSxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwiX2RlZmluZVByb3BlcnR5IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5jcmVtZW50IiwiY291bnQiLCJjb3VudFRhcmdldCIsImlubmVySFRNTCIsImRlZmF1bHQiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblByZUNvbm5lY3QiLCJfb25Db25uZWN0IiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjb25maWciLCJvcHRpb25zIiwic2NhbGVzIiwieSIsInRpY2tzIiwiY2FsbGJhY2siLCJpbmRleCIsInZhbHVlcyIsImNoYXJ0Iiwib25Ib3ZlciIsIm1vdXNlRXZlbnQiLCJvbkNsaWNrIiwiZWxlbWVudHMiLCJkYXRhIiwiZGF0YXNldHMiLCJjbGlja0hhbmRsZXIiLCJldnQiLCJteUNoYXJ0IiwicG9pbnRzIiwiZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSIsImludGVyc2VjdCIsImxhYmVsIiwiZmlyc3RQb2ludCIsImxhYmVscyIsImRhdGFzZXRJbmRleCIsInNldE5ld0RhdGEiLCJ1cGRhdGUiLCJhdXRvY29sb3JzIiwiem9vbVBsdWdpbiIsImRvY3VtZW50IiwiQ2hhcnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJyZWdpc3RlcmFibGVzIiwicmVnaXN0ZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpc0NoYXJ0SW5pdGlhbGl6ZWQiLCJkZWZhdWx0XzEiLCJkaXNwYXRjaEV2ZW50IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJFcnJvciIsInBheWxvYWQiLCJ2aWV3VmFsdWUiLCJpc0FycmF5IiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJkZXN0cm95Iiwidmlld1ZhbHVlQ2hhbmdlZCIsInBhcmVudEVsZW1lbnQiLCJyZXNwb25zaXZlIiwib3JpZ2luYWxXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNldFRpbWVvdXQiLCJuYW1lIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJ2aWV3IiwiT2JqZWN0IiwiVHlwZWQiLCJzdHJpbmdzIiwic3RyaW5nc1ZhbHVlIiwidHlwZVNwZWVkIiwidHlwZVNwZWVkVmFsdWUiLCJzbWFydEJhY2tzcGFjZSIsInNtYXJ0QmFja3NwYWNlVmFsdWUiLCJzdGFydERlbGF5Iiwic3RhcnREZWxheVZhbHVlIiwiYmFja1NwZWVkIiwiYmFja1NwZWVkVmFsdWUiLCJzaHVmZmxlIiwic2h1ZmZsZVZhbHVlIiwiYmFja0RlbGF5IiwiYmFja0RlbGF5VmFsdWUiLCJmYWRlT3V0IiwiZmFkZU91dFZhbHVlIiwiZmFkZU91dENsYXNzIiwiZmFkZU91dENsYXNzVmFsdWUiLCJmYWRlT3V0RGVsYXkiLCJmYWRlT3V0RGVsYXlWYWx1ZSIsImxvb3AiLCJsb29wVmFsdWUiLCJsb29wQ291bnQiLCJsb29wQ291bnRWYWx1ZSIsInNob3dDdXJzb3IiLCJzaG93Q3Vyc29yVmFsdWUiLCJjdXJzb3JDaGFyIiwiY3Vyc29yQ2hhclZhbHVlIiwiYXV0b0luc2VydENzcyIsImF1dG9JbnNlcnRDc3NWYWx1ZSIsImF0dHIiLCJhdHRyVmFsdWUiLCJiaW5kSW5wdXRGb2N1c0V2ZW50cyIsImJpbmRJbnB1dEZvY3VzRXZlbnRzVmFsdWUiLCJjb250ZW50VHlwZSIsImNvbnRlbnRUeXBlVmFsdWUiLCJ0eXBlZCIsInR5cGUiLCJOdW1iZXIiLCJCb29sZWFuIiwiU3RyaW5nIiwiUE9TSVRJVkVfSU5GSU5JVFkiXSwic291cmNlUm9vdCI6IiJ9