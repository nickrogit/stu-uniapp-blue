(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/h5blue/h5blue"],{"23a5":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(o("bef3"));function u(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{bluetoothState:{},pairedDevices:[],newDevices:[],receiveDataArr:[],sendData:"",msg:""}},computed:{receiveDataStr:function(){return String.fromCharCode.apply(String,this.receiveDataArr)},bluetoothStatusDesc:function(){return this.bluetoothStatus?"已开启":"已关闭"}},created:function(){var e=this;bluetoothTool=n.default.BluetoothTool(),this.bluetoothState=bluetoothTool.state,bluetoothTool.init({listenBTStatusCallback:function(t){e.msg="蓝牙状态: "+t},discoveryDeviceCallback:function(t){e.newDevices.push(t)},discoveryFinishedCallback:function(){e.msg="搜索完成"},readDataCallback:function(t){e.receiveDataArr.length>=200&&(e.receiveDataArr=[]),e.receiveDataArr.push.apply(e.receiveDataArr,t)},connExceptionCallback:function(t){console.log(t," at pages/tabBar/h5blue/h5blue.vue:95"),e.msg="设备连接失败"}})},methods:{turnOnBluetooth:function(){bluetoothTool.turnOnBluetooth()},turnOffBluetooth:function(){bluetoothTool.turnOffBluetooth()},getPairedDevices:function(){this.pairedDevices=bluetoothTool.getPairedDevices()},discoveryNewDevice:function(){this.newDevices=[],bluetoothTool.discoveryNewDevice()},cancelDiscovery:function(){bluetoothTool.cancelDiscovery()},connDevice:function(e){bluetoothTool.connDevice(e)},disConnDevice:function(){bluetoothTool.disConnDevice()},onSendData:function(){bluetoothTool.sendData(this.sendData)}}};t.default=a},2981:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.receiveDataArr=[]})},u=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return u})},"93c5":function(e,t,o){"use strict";o.r(t);var n=o("23a5"),u=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=u.a},d160:function(e,t,o){"use strict";o.r(t);var n=o("2981"),u=o("93c5");for(var a in u)"default"!==a&&function(e){o.d(t,e,function(){return u[e]})}(a);var c=o("2877"),i=Object(c["a"])(u["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports}},[["24c4","common/runtime","common/vendor"]]]);