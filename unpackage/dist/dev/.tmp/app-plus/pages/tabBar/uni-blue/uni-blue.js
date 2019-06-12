(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/uni-blue/uni-blue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/GitHub.com/stu-uniapp-blue/pages/tabBar/uni-blue/uni-blue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
var _default =
{
  data: function data() {
    return {
      bds: [], // 可连接设备列表
      bdsList: [], // 选择设备
      deviceId: null,
      deivceValue: '',
      bconnect: false,
      bss: [], // 连接设备服务列表
      bssList: [], // 选择服务
      serviceId: null,
      serviceValue: '',
      bscs: [], // 连接设备服务对应的特征值列表
      characteristicId: null,
      characteristicValue: '',
      bscws: [], // 可写特征值列表
      wcharacteristicId: null,
      wcharacteristicValue: '',
      writevalue: 'test',
      state: {
        available: false,
        discovering: false } };


  },
  methods: {
    // 初始化蓝牙模块
    openBluetoothAdapter: function openBluetoothAdapter() {
      uni.openBluetoothAdapter({
        success: function success(res) {
          console.log(res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:71");
          that.onBluetoothAdapterStateChange();
          that.startBluetoothDevicesDiscovery();
          that.onBluetoothDeviceFound();
          that.onBLEConnectionStateChange();
          that.onBLECharacteristicValueChange();
        } });

    },
    // 开始搜寻附近的蓝牙外围设备
    startBluetoothDevicesDiscovery: function startBluetoothDevicesDiscovery() {
      var that = this;
      that.resetDevices();
      uni.startBluetoothDevicesDiscovery({
        // services: ['FEE7'],
        success: function success(res) {

        } });

    },
    // 停止搜寻附近的蓝牙外围设备
    stopBluetoothDevicesDiscovery: function stopBluetoothDevicesDiscovery() {
      var that = this;
      uni.stopBluetoothDevicesDiscovery({
        success: function success(res) {
          console.log(res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:96");
        } });

    },
    // 监听寻找到新设备的事件
    onBluetoothDeviceFound: function onBluetoothDeviceFound() {
      var that = this;
      uni.onBluetoothDeviceFound(function (devices) {
        console.log('new device list has founded', " at pages\\tabBar\\uni-blue\\uni-blue.vue:104");
        console.dir(devices);
        console.log(that.ab2hex(devices[0].advertisData), " at pages\\tabBar\\uni-blue\\uni-blue.vue:106");

        var _devices = devices;
        var bds = [];
        _devices.map(function (item) {
          if (item.deviceId) {
            bds.push(item);
          }
        });
        that.bds = bds;
        if (!that.bconnect && bds.length > 0) {// 默认选择最后一个
          var n = bds[bds.length - 1].name;
          if (!n || n.length <= 0) {
            n = bds[bds.length - 1].deviceId;
          }
          that.deivceValue = n;
          that.deviceId = bds[bds.length - 1].deviceId;
        }

        that.getBluetoothDevices();
      });
    },
    // 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
    getBluetoothDevices: function getBluetoothDevices() {
      var that = this;
      uni.getBluetoothDevices({
        success: function success(res) {
          console.log(res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:133");
          if (res.devices[0]) {
            console.log(that.ab2hex(res.devices[0].advertisData), " at pages\\tabBar\\uni-blue\\uni-blue.vue:135");
          }
          that.getConnectedBluetoothDevices();
          that.stopBluetoothDevicesDiscovery();
        } });

    },
    // 根据 uuid 获取处于已连接状态的设备。
    getConnectedBluetoothDevices: function getConnectedBluetoothDevices() {
      var that = this;
      uni.getConnectedBluetoothDevices({
        success: function success(res) {
          console.log(res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:147");
        } });

    },
    //获取本机蓝牙适配器状态。
    getBluetoothAdapterState: function getBluetoothAdapterState() {
      uni.getBluetoothAdapterState({
        success: function success(res) {
          console.log(res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:155");
        } });

    },
    // 监听蓝牙适配器状态变化事件
    onBluetoothAdapterStateChange: function onBluetoothAdapterStateChange() {
      var that = this;
      uni.onBluetoothAdapterStateChange(function (res) {
        console.log('adapterState changed, now is', res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:163");
        that.state = res;
      });
    },
    // 监听 低功耗 蓝牙连接状态的改变事件
    onBLEConnectionStateChange: function onBLEConnectionStateChange() {
      var that = this;
      uni.onBLEConnectionStateChange(function (res) {
        // 该方法回调中可以用于处理连接意外断开等异常情况
        console.log("device ".concat(res.deviceId, " state has changed, connected: ").concat(res.connected), " at pages\\tabBar\\uni-blue\\uni-blue.vue:172");
        if (that.deviceId == res.deviceId) {// 更新连接状态
          that.bconnect = res.connected;
        }
      });
    },
    onBLECharacteristicValueChange: function onBLECharacteristicValueChange() {
      var that = this;
      uni.onBLECharacteristicValueChange(function (res) {
        console.log("characteristic ".concat(res.characteristicId, " has changed, now is ").concat(res.value), " at pages\\tabBar\\uni-blue\\uni-blue.vue:181");
        console.log(that.ab2hex(res.value), " at pages\\tabBar\\uni-blue\\uni-blue.vue:182");
        var value = that.ab2hex(res.value);
        if (that.characteristicId == res.characteristicId) {
          that.readvalueValue = value; // 更新到页面显示
        } else if (that.wcharacteristicId == res.characteristicId) {
          uni.showToast({ title: value, icon: "none" });
        }
      });
    },
    // 选择蓝牙设备 
    openDevice: function openDevice() {
      var that = this;
      var bds = that.bds;
      if (bds.length <= 0) {
        uni.showToast({ title: '未搜索到有效蓝牙设备', icon: "none" });
        return;
      }
      var bdsList = [];
      bds.map(function (item) {
        var t = item.name;
        if (!t || t.length <= 0) {
          t = item.deviceId;
        }
        bdsList.push({
          title: t });

      });
      that.bdsList = bdsList;
    },
    selectDevice: function selectDevice() {
      var that = this;
      var bds = that.bds;
      if (bds.length <= 0) {
        uni.showToast({ title: '未搜索到有效蓝牙设备', icon: "none" });
        return;
      }
      var bts = [];
      for (var i in bds) {
        var t = bds[i].name;
        if (!t || t.length <= 0) {
          t = bds[i].deviceId;
        }
        bts.push({
          title: t });

      }
      plus.nativeUI.actionSheet({
        title: "选择蓝牙设备",
        cancel: "取消",
        buttons: bts },
      function (e) {
        if (e.index > 0) {
          that.deivceValue = bds[e.index - 1].name;
          that.deviceId = bds[e.index - 1].deviceId;
        }
      });
    },
    // 连接蓝牙设备
    connectDevice: function connectDevice() {
      var that = this;
      var deviceId = that.deviceId;
      if (!deviceId) {
        uni.showToast({ title: '未选择设备', icon: "none" });
        return;
      }
      // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
      uni.createBLEConnection({
        deviceId: deviceId,
        success: function success(res) {
          uni.showToast({ title: '连接成功', icon: "none" });
          console.log('连接成功', " at pages\\tabBar\\uni-blue\\uni-blue.vue:252");
          console.log(res, " at pages\\tabBar\\uni-blue\\uni-blue.vue:253");
        } });

    },
    // 获取蓝牙设备所有服务(service)。
    getServices: function getServices() {
      var that = this;
      var deviceId = that.deviceId;
      var bconnect = that.bconnect;
      if (!deviceId) {
        uni.showToast({ title: '未选择设备', icon: "none" });
        return;
      }
      if (!bconnect) {
        uni.showToast({ title: '未连接蓝牙设备', icon: "none" });
        return;
      }
      that.resetDevices(true);
      console.log('获取蓝牙设备服务', " at pages\\tabBar\\uni-blue\\uni-blue.vue:271");

      uni.getBLEDeviceServices({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        success: function success(res) {
          console.log('device services:', res.services, " at pages\\tabBar\\uni-blue\\uni-blue.vue:277");
          console.log('获取服务成功! ' + services.length, " at pages\\tabBar\\uni-blue\\uni-blue.vue:278");
          var services = res.services;
          var bss = [];
          if (services.length > 0) {
            for (var i in services) {
              bss.push(services[i]);
            }
            that.bss = bss;
            if (bss.length > 0) {// 默认选择最后一个服务
              that.serviceValue = that.serviceId = bss[bss.length - 1].uuid;
            }
          } else {
            console.log('获取服务列表为空?', " at pages\\tabBar\\uni-blue\\uni-blue.vue:290");
          }
        },
        fail: function fail(e) {
          console.log('获取服务失败! ' + JSON.stringify(e), " at pages\\tabBar\\uni-blue\\uni-blue.vue:294");
        } });

    },
    // 选择服务 
    openService: function openService() {
      var that = this;
      var bss = that.bss;
      if (bss.length <= 0) {
        uni.showToast({ title: '未获取到有效蓝牙服务', icon: "none" });
        return;
      }
      var bssList = [];
      for (var i in bss) {
        bssList.push({
          title: bss[i].uuid });

      }
      that.bssList = bssList;
    },
    selectService: function selectService() {
      var that = this;
      var bss = that.bss;
      if (bss.length <= 0) {
        uni.showToast({ title: '未获取到有效蓝牙服务', icon: "none" });
        return;
      }
      var bts = [];
      for (var i in bss) {
        bts.push({
          title: bss[i].uuid });

      }
      plus.nativeUI.actionSheet({
        title: "选择服务",
        cancel: "取消",
        buttons: bts },
      function (e) {
        if (e.index > 0) {
          that.serviceValue = that.serviceId = bss[e.index - 1].uuid;
        }
      });
    },
    // 获取服务的特征值 
    getCharacteristics: function getCharacteristics() {
      var that = this;
      var deviceId = that.deviceId;
      var bconnect = that.bconnect;
      var serviceId = that.serviceId;
      if (!deviceId) {
        uni.showToast({ title: '未选择设备', icon: "none" });
        return;
      }
      if (!bconnect) {
        uni.showToast({ title: '未连接蓝牙设备', icon: "none" });
        return;
      }
      if (!serviceId) {
        uni.showToast({ title: '未选择服务', icon: "none" });
        return;
      }
      that.resetDevices(true, true);

      console.log('获取蓝牙设备某个服务中所有特征值(characteristic):', " at pages\\tabBar\\uni-blue\\uni-blue.vue:357");
      uni.getBLEDeviceCharacteristics({
        deviceId: deviceId,
        serviceId: serviceId,
        success: function success(res) {
          console.log('device getBLEDeviceCharacteristics:', res.characteristics, " at pages\\tabBar\\uni-blue\\uni-blue.vue:362");
          var characteristics = res.characteristics;
          if (characteristics.length > 0) {
            for (var i in characteristics) {
              var characteristic = characteristics[i];
              console.log(JSON.stringify(characteristic), " at pages\\tabBar\\uni-blue\\uni-blue.vue:367");
              if (characteristic.properties) {
                if (characteristic.properties.read) {
                  that.bscs.push(characteristics[i]);
                }
                if (characteristic.properties.write) {
                  that.bscws.push(characteristics[i]);
                  if (characteristic.properties.notify || characteristic.properties.indicate) {
                    var characteristicId = characteristic.uuid;
                    uni.notifyBLECharacteristicValueChange({
                      state: true, // 启用 notify 功能
                      deviceId: deviceId,
                      serviceId: serviceId,
                      characteristicId: characteristicId,
                      success: function success(res) {
                        console.log('notifyBLECharacteristicValueChange ' + characteristic.uuid + ' success.', " at pages\\tabBar\\uni-blue\\uni-blue.vue:382");
                      },
                      fail: function fail(e) {
                        console.log('notifyBLECharacteristicValueChange ' + characteristic.uuid + ' failed! ' + JSON.stringify(e), " at pages\\tabBar\\uni-blue\\uni-blue.vue:385");
                      } });

                  }
                }
              }
            }
            var bscs = that.bscs;
            if (bscs.length > 0) {// 默认选择最后特征值
              that.characteristicValue = that.characteristicId = bscs[bscs.length - 1].uuid;
            }
            var bscws = that.bscws;
            if (bscws.length > 0) {// 默认选择最后一个可写特征值
              that.wcharacteristicValue = that.wcharacteristicId = bscws[bscws.length - 1].uuid;
            }
          } else {
            console.log('获取特征值列表为空?', " at pages\\tabBar\\uni-blue\\uni-blue.vue:401");
          }
        } });

    },
    // 选择特征值(读取) 
    selectCharacteristic: function selectCharacteristic() {
      var that = this;
      var bscs = that.bscs;
      if (bscs.length <= 0) {
        uni.showToast({ title: '未获取到有效可读特征值', icon: "none" });
        return;
      }
      var bts = [];
      for (var i in bscs) {
        bts.push({
          title: bscs[i].uuid });

      }
      plus.nativeUI.actionSheet({
        title: '选择特征值',
        cancel: '取消',
        buttons: bts },
      function (e) {
        if (e.index > 0) {
          that.characteristicValue = that.characteristicId = bscs[e.index - 1].uuid;
        }
      });
    },
    // 读取特征值数据 
    readValue: function readValue() {
      var that = this;
      var deviceId = that.deviceId;
      var bconnect = that.bconnect;
      var serviceId = that.serviceId;
      var characteristicId = that.characteristicId;
      if (!deviceId) {
        uni.showToast({ title: '未选择设备', icon: "none" });
        return;
      }
      if (!bconnect) {
        uni.showToast({ title: '未连接蓝牙设备', icon: "none" });
        return;
      }
      if (!serviceId) {
        uni.showToast({ title: '未选择服务', icon: "none" });
        return;
      }
      if (!characteristicId) {
        uni.showToast({ title: '未选择读取的特征值', icon: "none" });
        return;
      }
      uni.readBLECharacteristicValue({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        success: function success(res) {
          console.log('readBLECharacteristicValue:', res.errCode, " at pages\\tabBar\\uni-blue\\uni-blue.vue:458");
        } });

    },
    // 选择特征值(写入) 
    selectwCharacteristic: function selectwCharacteristic() {
      var that = this;
      var bscws = that.bscws;
      if (bscws.length <= 0) {
        uni.showToast({ title: '未获取到有效可写特征值', icon: "none" });
        return;
      }
      var bts = [];
      for (var i in bscws) {
        bts.push({
          title: bscws[i].uuid });

      }
      plus.nativeUI.actionSheet({
        title: '选择特征值',
        cancel: '取消',
        buttons: bts },
      function (e) {
        if (e.index > 0) {
          that.wcharacteristicValue = that.wcharacteristicId = bscws[e.index - 1].uuid;
        }
      });
    },
    // 写入特征值数据 
    writeValue: function writeValue() {
      var that = this;
      var deviceId = that.deviceId;
      var bconnect = that.bconnect;
      var serviceId = that.serviceId;
      var wcharacteristicId = that.wcharacteristicId;
      var writevalue = that.writevalue;
      if (!deviceId) {
        uni.showToast({ title: '未选择设备', icon: "none" });
        return;
      }
      if (!bconnect) {
        uni.showToast({ title: '未连接蓝牙设备', icon: "none" });
        return;
      }
      if (!serviceId) {
        uni.showToast({ title: '未选择服务', icon: "none" });
        return;
      }
      if (!wcharacteristicId) {
        uni.showToast({ title: '未选择写入的特征值', icon: "none" });
        return;
      }
      var value = writevalue;
      if (!value || value == '') {
        uni.showToast({ title: '请输入需要写入的数据', icon: "none" });
        return;
      }
      // 转换为ArrayBuffer写入蓝牙
      that.str2ArrayBuffer(value, function (buffer) {
        console.log('写入蓝牙设备的特征值数据: ', " at pages\\tabBar\\uni-blue\\uni-blue.vue:517");
        var characteristicId = wcharacteristicId;
        uni.writeBLECharacteristicValue({
          deviceId: deviceId,
          serviceId: serviceId,
          characteristicId: characteristicId,
          value: buffer,
          success: function success(res) {
            console.log('写入数据成功!', " at pages\\tabBar\\uni-blue\\uni-blue.vue:525");
            console.log('writeBLECharacteristicValue success', res.errMsg, " at pages\\tabBar\\uni-blue\\uni-blue.vue:526");
          } });

      });
    },
    str2ArrayBuffer: function str2ArrayBuffer(s, f) {
      //     var b = new Blob([s],{type:'text/plain,charset=GBK'});
      //     var r = new FileReader();
      //     r.readAsArrayBuffer(b);
      //     r.onload = function(){if(f)f.call(null,r.result)}
      var buffer = new ArrayBuffer(2);
      var x2 = new Uint8Array(buffer);
      x2[0] = 0x62;
      x2[1] = 0x11;
      if (f) f.call(null, buffer);
    },
    resetDevices: function resetDevices(d, s) {
      var that = this;
      if (!d) {
        that.bds = [];
        that.bdsList = [];
        that.deviceId = null;
        that.deivceValue = '';
      }
      if (!s) {
        that.bss = [];
        that.bssList = [];
        that.serviceId = null;
        that.serviceValue = '';
      }
      that.bscs = [];
      that.bscws = [];
      that.characteristicId = null;
      that.wcharacteristicId = null;
      that.characteristicValue = '';
      that.wcharacteristicValue = '';
    },
    // ArrayBuffer转16进度字符串示例
    ab2hex: function ab2hex(buffer) {
      var hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      function (bit) {
        return ('00' + bit.toString(16)).slice(-2);
      });

      return hexArr.join('');
    },
    // 断开蓝牙设备
    closeBLEConnection: function closeBLEConnection() {
      var that = this;
      var deviceId = that.deviceId;
      if (!deviceId) {
        uni.showToast({ title: '未选择设备', icon: "none" });
        return;
      }
      that.resetDevices(true);
      console.log('断开蓝牙设备连接：', " at pages\\tabBar\\uni-blue\\uni-blue.vue:582");
      uni.closeBLEConnection({
        deviceId: deviceId,
        success: function success(res) {
          console.log('断开连接成功', " at pages\\tabBar\\uni-blue\\uni-blue.vue:586");
        } });

    },
    // 关闭蓝牙
    closeBluetoothAdapter: function closeBluetoothAdapter() {
      outSet('关闭蓝牙适配器：');
      that.resetDevices();
      uni.closeBluetoothAdapter({
        success: function success(res) {
          console.log('关闭成功', " at pages\\tabBar\\uni-blue\\uni-blue.vue:596");
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=template&id=2a6ffb07&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/GitHub.com/stu-uniapp-blue/pages/tabBar/uni-blue/uni-blue.vue?vue&type=template&id=2a6ffb07& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue":
/*!************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/uni-blue/uni-blue.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_blue_vue_vue_type_template_id_2a6ffb07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-blue.vue?vue&type=template&id=2a6ffb07& */ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=template&id=2a6ffb07&");
/* harmony import */ var _uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-blue.vue?vue&type=script&lang=js& */ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_blue_vue_vue_type_template_id_2a6ffb07___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_blue_vue_vue_type_template_id_2a6ffb07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/GitHub.com/stu-uniapp-blue/pages/tabBar/uni-blue/uni-blue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/uni-blue/uni-blue.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./uni-blue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=template&id=2a6ffb07&":
/*!*******************************************************************************************************!*\
  !*** F:/GitHub.com/stu-uniapp-blue/pages/tabBar/uni-blue/uni-blue.vue?vue&type=template&id=2a6ffb07& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_template_id_2a6ffb07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./uni-blue.vue?vue&type=template&id=2a6ffb07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\GitHub.com\\stu-uniapp-blue\\pages\\tabBar\\uni-blue\\uni-blue.vue?vue&type=template&id=2a6ffb07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_template_id_2a6ffb07___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_blue_vue_vue_type_template_id_2a6ffb07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\GitHub.com\\stu-uniapp-blue\\main.js?{\"page\":\"pages%2FtabBar%2Funi-blue%2Funi-blue\"}","common/runtime","common/vendor"]]]);