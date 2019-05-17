<template>
	<view>
		<button type="primary" size="mini" @tap="turnOnBluetooth">打开蓝牙</button>
		<button type="primary" size="mini" @tap="turnOffBluetooth">关闭蓝牙</button>
		<button type="primary" size="mini" @tap="getPairedDevices">已配对的设备</button>
		<button type="primary" size="mini" @tap="discoveryNewDevice">搜索蓝牙设备</button>
		<div>
			蓝牙状态：
			<pre>{{bluetoothState}}</pre>
		</div>
		<div>
			消息：{{msg}}
		</div>
		<div>
			<input type="button" value="断开连接" @click="disConnDevice" />
		</div>
		已配对的设备：
		<br>
		<ul>
			<li v-for="device in pairedDevices">
				名称：{{device.name}}<br> 地址：{{device.address}}
				<br>
				<button type="primary" size="mini" @tap="connDevice(device.address)">连接</button>
			</li>
		</ul>
		发现的设备：<br>
		<ul>
			<li v-for="device in newDevices">
				名称：{{device.name}}<br> 地址：{{device.address}}<br>
				<button type="primary" size="mini" @tap="connDevice(device.address)">连接</button>
			</li>
		</ul>
		<div>
			发送数据：
			<textarea cols="20" rows="4" v-model="sendData"></textarea>
			<button type="primary" size="mini" @tap="onSendData">发送</button>
		</div>
		<br>
		<div style="margin-bottom: 100px;">接收的数据：
			<input type="button" value="清空" @click="receiveDataArr = [];" />
			<div style="width: 100%;min-height: 50px;">byte数组:
				<span v-for="data in receiveDataArr">
					{{data}}&nbsp;
				</span>
			</div>
			<div style="width: 100%;min-height: 50px;word-wrap:break-word;">
				对应的string字符串:<br> {{receiveDataStr}}
			</div>
		</div>
	</view>
</template>

<script>
	import blueTool from './BluetoothTool.js'
	export default {
		data() {
			return {
				bluetoothState: {},
				pairedDevices: [],
				newDevices: [],
				receiveDataArr: [],
				sendData: "",
				msg: ""
			}
		},
		computed: {
			receiveDataStr: function() {
				return String.fromCharCode.apply(String, this.receiveDataArr);
			},
			bluetoothStatusDesc: function() {
				return this.bluetoothStatus ? "已开启" : "已关闭";
			}
		},
		created: function() {
			let that = this;
			bluetoothTool = blueTool.BluetoothTool();
			this.bluetoothState = bluetoothTool.state;
			bluetoothTool.init({
				listenBTStatusCallback: function(state) {
					that.msg = "蓝牙状态: " + state;
				},
				discoveryDeviceCallback: function(newDevice) {
					that.newDevices.push(newDevice);
				},
				discoveryFinishedCallback: function() {
					that.msg = "搜索完成";
				},
				readDataCallback: function(dataByteArr) {
					if(that.receiveDataArr.length >= 200) {
						that.receiveDataArr = [];
					}
					that.receiveDataArr.push.apply(that.receiveDataArr, dataByteArr);
				},
				connExceptionCallback: function(e) {
					console.log(e);
					that.msg = "设备连接失败";
				}
			});
		},
		methods: {
			turnOnBluetooth: function() {
				bluetoothTool.turnOnBluetooth();
			},
			turnOffBluetooth: function() {
				bluetoothTool.turnOffBluetooth();
			},
			getPairedDevices: function() {
				this.pairedDevices = bluetoothTool.getPairedDevices();
			},
			discoveryNewDevice: function() {
				this.newDevices = [];
				bluetoothTool.discoveryNewDevice();
			},
			cancelDiscovery: function() {
				bluetoothTool.cancelDiscovery();
			},
			connDevice: function(address) {
				bluetoothTool.connDevice(address);
			},
			disConnDevice: function() {
				bluetoothTool.disConnDevice();
			},
			onSendData: function() {
				bluetoothTool.sendData(this.sendData);
			}
		}
	}
</script>

<style>

</style>
