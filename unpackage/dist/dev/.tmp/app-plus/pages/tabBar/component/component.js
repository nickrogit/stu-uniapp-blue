(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/component/component"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/GitHub.com/stu-uniapp-blue/pages/tabBar/component/component.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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

var Contacts;
var dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');var _default =
{
  data: function data() {
    return {
      deviceId: '',
      devicesList: [],
      devicesList2: [] };

  },
  onShow: function onShow() {
    uni.setNavigationBarTitle({
      title: '蓝牙测试' });

  },
  methods: {
    testApp: function testApp() {
      dcRichAlert.show({
        position: 'bottom',
        title: "提示信息",
        titleColor: '#FF0000',
        content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
        contentAlign: 'left',
        checkBox: {
          title: '不再提示',
          isSelected: true },

        buttons: [{
          title: '取消' },

        {
          title: '否' },

        {
          title: '确认',
          titleColor: '#3F51B5' }] },


      function (result) {
        switch (result.type) {
          case 'button':
            console.log("callback---button--" + result.index, " at pages\\tabBar\\component\\component.vue:78");
            break;
          case 'checkBox':
            console.log("callback---checkBox--" + result.isSelected, " at pages\\tabBar\\component\\component.vue:81");
            break;
          case 'a':
            console.log("callback---a--" + JSON.stringify(result), " at pages\\tabBar\\component\\component.vue:84");
            break;
          case 'backCancel':
            console.log("callback---backCancel--", " at pages\\tabBar\\component\\component.vue:87");
            break;}

      });
    },
    gotoWebView: function gotoWebView() {
      uni.navigateTo({
        url: '/pages/tabBar/plush5/plush5' });

    },
    // 打开蓝牙模块
    openBluetoothAdapter: function openBluetoothAdapter() {
      var that = this;
      plus.bluetooth.openBluetoothAdapter({
        success: function success(e) {
          console.log('open success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:102");
        },
        fail: function fail(e) {
          console.log('open failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:105");
        } });

    },
    // 获取蓝牙状态
    getBluetoothState: function getBluetoothState() {
      var that = this;
      plus.bluetooth.getBluetoothAdapterState({
        success: function success(e) {
          console.log('state success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:114");
        },
        fail: function fail(e) {
          console.log('state failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:117");
        } });

    },
    // 关闭蓝牙模块
    closeBluetoothAdapter: function closeBluetoothAdapter() {
      var that = this;
      plus.bluetooth.closeBluetoothAdapter({
        success: function success(e) {
          console.log('close success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:126");
        },
        fail: function fail(e) {
          console.log('close failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:129");
        } });

    },
    // 监听状态变化
    listenerStateChange: function listenerStateChange() {
      var that = this;
      plus.bluetooth.onBluetoothAdapterStateChange(function (e) {
        console.log('state changed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:137");
      });
    },
    // 开始搜索蓝牙
    startBluetoothDiscovery: function startBluetoothDiscovery() {
      var that = this;
      plus.bluetooth.openBluetoothAdapter({
        success: function success(e) {
          console.log('open success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:145");
          plus.bluetooth.startBluetoothDevicesDiscovery({
            success: function success(e) {
              console.log('start discovery success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:148");
            },
            fail: function fail(e) {
              console.log('start discovery failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:151");
            } });

        },
        fail: function fail(e) {
          console.log('open failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:156");
        } });

    },
    // 监听发现新设备
    listenerDeviceFound: function listenerDeviceFound() {
      var that = this;
      plus.bluetooth.onBluetoothDeviceFound(function (e) {
        var devices = e.devices;
        // console.log('device found: '+e.length);
        for (var i in devices) {
          console.log(i + ': ' + JSON.stringify(devices[i]), " at pages\\tabBar\\component\\component.vue:167");
        }
      });
    },
    // 获取已搜索到的蓝牙设备
    getBluetoothDevices: function getBluetoothDevices() {
      var that = this;
      plus.bluetooth.getBluetoothDevices({
        success: function success(e) {
          var devices = e.devices;
          that.devicesList = devices;
          console.log('get devices success: ' + e.length, " at pages\\tabBar\\component\\component.vue:178");
          for (var i in devices) {
            console.log(i + ': ' + JSON.stringify(devices[i]), " at pages\\tabBar\\component\\component.vue:180");
          }
          that.stopBluetoothDiscovery(); //搜索后关闭
        },
        fail: function fail(e) {
          console.log('get devices failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:185");
        } });

    },
    // 结束搜索蓝牙
    stopBluetoothDiscovery: function stopBluetoothDiscovery() {
      var that = this;
      plus.bluetooth.stopBluetoothDevicesDiscovery({
        success: function success(e) {
          console.log('stop discovery success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:194");
        },
        fail: function fail(e) {
          console.log('stop discovery failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:197");
        } });

    },
    // 连接蓝牙设备
    createConnection: function createConnection(deviceId) {
      console.log('开始连接：' + deviceId, " at pages\\tabBar\\component\\component.vue:203");
      var that = this;
      that.deviceId = deviceId;
      plus.bluetooth.createBLEConnection({
        deviceId: that.deviceId,
        success: function success(e) {
          console.log('create connection success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:209");
        },
        fail: function fail(e) {
          console.log('create connection failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:212");
        } });

    },
    // 获取已连接的蓝牙设备
    getConnectedDevices: function getConnectedDevices() {
      var that = this;
      plus.bluetooth.getConnectedBluetoothDevices({
        success: function success(e) {
          var devices = e.devices;
          that.devicesList2 = devices;
          console.log('connected devices success: ' + e.length, " at pages\\tabBar\\component\\component.vue:223");
          for (var i in devices) {
            console.log(i + ': ' + JSON.stringify(devices[i]), " at pages\\tabBar\\component\\component.vue:225");
          }
        },
        fail: function fail(e) {
          console.log('connected devices failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:229");
        } });

    },
    // 断开蓝牙设备
    closeConnection: function closeConnection() {
      var that = this;
      plus.bluetooth.closeBLEConnection({
        deviceId: that.deviceId,
        success: function success(e) {
          console.log('close success: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:239");
        },
        fail: function fail(e) {
          console.log('close failed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:242");
        } });

    },
    // 监听蓝牙设备连接状态
    listenerConnection: function listenerConnection() {
      var that = this;
      plus.bluetooth.onBLEConnectionStateChange(function (e) {
        console.log('connection state changed: ' + JSON.stringify(e), " at pages\\tabBar\\component\\component.vue:250");
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=template&id=cd6c1f3a&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/GitHub.com/stu-uniapp-blue/pages/tabBar/component/component.vue?vue&type=template&id=cd6c1f3a& ***!
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue":
/*!**************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/component/component.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_vue_vue_type_template_id_cd6c1f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.vue?vue&type=template&id=cd6c1f3a& */ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=template&id=cd6c1f3a&");
/* harmony import */ var _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.vue?vue&type=script&lang=js& */ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _component_vue_vue_type_template_id_cd6c1f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _component_vue_vue_type_template_id_cd6c1f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/GitHub.com/stu-uniapp-blue/pages/tabBar/component/component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/component/component.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=template&id=cd6c1f3a&":
/*!*********************************************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/component/component.vue?vue&type=template&id=cd6c1f3a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_cd6c1f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./component.vue?vue&type=template&id=cd6c1f3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\component\\component.vue?vue&type=template&id=cd6c1f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_cd6c1f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_cd6c1f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\GitHub.com\\stu-uniapp-blue\\main.js?{\"page\":\"pages%2FtabBar%2Fcomponent%2Fcomponent\"}","common/runtime","common/vendor"]]]);