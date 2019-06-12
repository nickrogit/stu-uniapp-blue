(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/bluetooth/bluetooth"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/GitHub.com/stu-uniapp-blue/pages/tabBar/bluetooth/bluetooth.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























































var _BluetoothTool = _interopRequireDefault(__webpack_require__(/*! @/static/js/BluetoothTool.js */ "F:\\GitHub.com\\stu-uniapp-blue\\static\\js\\BluetoothTool.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { name: "bluetooth", components: {}, data: function data() {return { bluetoothState: {}, pairedDevices: [], newDevices: [], receiveDataArr: [], sendData: "", msg: "", bluetoothPop: false };}, created: function created() {var that = this;var onPlusReady = function onPlusReady() {that.bluetoothTool = _BluetoothTool.default.BluetoothTool();that.bluetoothState = that.bluetoothTool.state;that.bluetoothTool.init({ listenBTStatusCallback: function listenBTStatusCallback(state) {that.msg = "蓝牙状态: " + state;}, discoveryDeviceCallback: function discoveryDeviceCallback(newDevice) {that.newDevices.push(newDevice);}, discoveryFinishedCallback: function discoveryFinishedCallback() {that.msg = "搜索完成";}, readDataCallback: function readDataCallback(dataByteArr) {if (that.receiveDataArr.length >= 200) {that.receiveDataArr = [];}that.receiveDataArr.push.apply(that.receiveDataArr, dataByteArr);}, connExceptionCallback: function connExceptionCallback(e) {console.log(e, " at pages\\tabBar\\bluetooth\\bluetooth.vue:110");that.msg = "设备连接失败";} });};document.addEventListener("plusready", onPlusReady, false);if (typeof plus != "undefined") onPlusReady();}, computed: { receiveDataStr: function receiveDataStr() {//console.log(this.receiveDataArr);
      return String.fromCharCode.apply(String, this.receiveDataArr);}, bluetoothStatusDesc: function bluetoothStatusDesc() {return this.bluetoothStatus ? "已开启" : "已关闭";} },


  methods: {

    turnOnBluetooth: function turnOnBluetooth() {
      this.bluetoothTool.turnOnBluetooth();
    },
    turnOffBluetooth: function turnOffBluetooth() {
      this.bluetoothTool.turnOffBluetooth();
    },
    getPairedDevices: function getPairedDevices() {
      this.pairedDevices = this.bluetoothTool.getPairedDevices();
    },
    discoveryNewDevice: function discoveryNewDevice() {
      this.newDevices = [];
      this.bluetoothTool.discoveryNewDevice();
    },
    cancelDiscovery: function cancelDiscovery() {
      this.bluetoothTool.cancelDiscovery();
    },
    connDevice: function connDevice(address) {
      this.bluetoothTool.connDevice(address);
    },
    disConnDevice: function disConnDevice() {
      this.bluetoothTool.disConnDevice();
    },
    onSendData: function onSendData(str) {
      _BluetoothTool.default.BluetoothTool().sendData(str);
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=template&id=8d969cf6&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/GitHub.com/stu-uniapp-blue/pages/tabBar/bluetooth/bluetooth.vue?vue&type=template&id=8d969cf6& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.bluetoothPop = false
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue":
/*!**************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/bluetooth/bluetooth.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bluetooth_vue_vue_type_template_id_8d969cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bluetooth.vue?vue&type=template&id=8d969cf6& */ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=template&id=8d969cf6&");
/* harmony import */ var _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bluetooth.vue?vue&type=script&lang=js& */ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bluetooth_vue_vue_type_template_id_8d969cf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bluetooth_vue_vue_type_template_id_8d969cf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/GitHub.com/stu-uniapp-blue/pages/tabBar/bluetooth/bluetooth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/bluetooth/bluetooth.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./bluetooth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=template&id=8d969cf6&":
/*!*********************************************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/bluetooth/bluetooth.vue?vue&type=template&id=8d969cf6& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_template_id_8d969cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./bluetooth.vue?vue&type=template&id=8d969cf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\bluetooth\\bluetooth.vue?vue&type=template&id=8d969cf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_template_id_8d969cf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bluetooth_vue_vue_type_template_id_8d969cf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\GitHub.com\\stu-uniapp-blue\\main.js?{\"page\":\"pages%2FtabBar%2Fbluetooth%2Fbluetooth\"}","common/runtime","common/vendor"]]]);