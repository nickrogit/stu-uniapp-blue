<template>
	<view>
		<button type="primary" @click="openBluetoothAdapter">初始化蓝牙模块</button>
		<button type="primary" @click="startBluetoothDevicesDiscovery">开始搜寻附近的蓝牙外围设备</button>
		<button type="primary" @click="stopBluetoothDevicesDiscovery">停止搜寻附近的蓝牙外围设备</button>
		<view>设备：{{deivceValue}}</view>
		<button type="primary" @click="openDevice">展开设备列表</button>
		<button type="primary" @click="connectDevice">连接蓝牙设备</button>
		<!-- 设备列表 -->
		<view v-if="bts.length > 0">
			<view v-for="(item,index) in bts" :key="index">
				<view @click="selectDevice(index)">{{item}}</view>
			</view>
		</view>
		
		<view>
			监听蓝牙适配器状态变化事件：<br/>
			蓝牙适配器是否可用：{{state.available}}
			蓝牙适配器是否处于搜索状态：{{state.discovering}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bds: [], // 可连接设备列表
				bts: [], // 选持设备
				deviceId: null,
				deivceValue: '',
				bconnect: false,
				bss: [], // 连接设备服务列表
				serviceId: null,
				serviceValue: '',
				bscs: [], // 连接设备服务对应的特征值列表
				characteristicId: null,
				bscws: [], // 可写特征值列表
				wcharacteristicId: null,
				state: {
					available: false,
					discovering: false
				}
			}
		},
		methods: {
			// 初始化蓝牙模块
			openBluetoothAdapter() {
				uni.openBluetoothAdapter({
					success(res) {
						console.log(res)
						that.onBluetoothAdapterStateChange()
						that.startBluetoothDevicesDiscovery()
						that.onBluetoothDeviceFound()
					}
				})
			},
			// 关闭蓝牙模块
			closeBluetoothAdapter() {
				uni.closeBluetoothAdapter({
					success(res) {
						console.log(res)
					}
				})
			},
			// 开始搜寻附近的蓝牙外围设备
			startBluetoothDevicesDiscovery() {
				var that = this
				that.resetDevices()
				uni.startBluetoothDevicesDiscovery({
					// services: ['FEE7'],
					success(res) {
						
					}
				})
			},
			// 停止搜寻附近的蓝牙外围设备
			stopBluetoothDevicesDiscovery() {
				var that = this
				uni.stopBluetoothDevicesDiscovery({
					success(res) {
						console.log(res)
					}
				})
			},
			// 监听寻找到新设备的事件
			onBluetoothDeviceFound() {
				let that = this
				uni.onBluetoothDeviceFound(function (devices) {
					console.log('new device list has founded')
					console.dir(devices)
					console.log(that.ab2hex(devices[0].advertisData))
					
					let _devices = devices
					let bds = []
					_devices.map((item) => {
						if (item.deviceId) {
							bds.push(item);
						}
					})
					that.bds = bds
					if (!that.bconnect && bds.length > 0) { // 默认选择最后一个
						var n = bds[bds.length - 1].name;
						if (!n || n.length <= 0) {
							n = bds[bds.length - 1].deviceId;
						}
						that.deivceValue = n
						that.deviceId = bds[bds.length - 1].deviceId;
					}
					
					that.getBluetoothDevices()
				})
			},
			// 选择蓝牙设备 
			openDevice() {
				let that = this
				let bds = that.bds
				if (bds.length <= 0) {
					uni.showToast({title: '未搜索到有效蓝牙设备',icon: "none"});
					return;
				}
				let bts = [];
				bds.map(item => {
					let t = item.name;
					if (!t || t.length <= 0) {
						t = item.deviceId;
					}
					bts.push({
						title: t
					});
				})
				that.bts = bts
			},
			selectDevice(index) {
				let that = this
				let bds = that.bds
				that.deivceValue = bds[index].name;
				that.deviceId = bds[index].deviceId;
				outLine('选择了"' + bds[index].name + '"');
			},
			// 连接蓝牙设备
			connectDevice() {
				let that = this
				let deviceId = that.deviceId
				if (!deviceId) {
					uni.showToast({title: '未选择设备',icon: "none"});
					return;
				}
				// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
				uni.createBLEConnection({
					deviceId,
					success(res) {
						console.log('连接成功')
						console.log(res)
					}
				})
			},
			// 监听 低功耗 蓝牙连接状态的改变事件
			onBLEConnectionStateChange() {
				let that = this
				uni.onBLEConnectionStateChange(function (res) {
					// 该方法回调中可以用于处理连接意外断开等异常情况
					console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
					if (that.deviceId == res.deviceId) { // 更新连接状态
						that.bconnect = res.connected
					}
				})
			},
			// 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
			getBluetoothDevices() {
				var that = this
				uni.getBluetoothDevices({
					success(res) {
						console.log(res)
						if (res.devices[0]) {
							console.log(that.ab2hex(res.devices[0].advertisData))
						}
						that.getConnectedBluetoothDevices()
						that.stopBluetoothDevicesDiscovery()
					}
				})
			},
			// 根据 uuid 获取处于已连接状态的设备。
			getConnectedBluetoothDevices() {
				var that = this
				uni.getConnectedBluetoothDevices({
					success(res) {
						console.log(res)
					}
				})
			},
			//获取本机蓝牙适配器状态。
			getBluetoothAdapterState() {
				uni.getBluetoothAdapterState({
					success(res) {
						console.log(res)
					}
				})
			},
			// 监听蓝牙适配器状态变化事件
			onBluetoothAdapterStateChange() {
				var that = this
				uni.onBluetoothAdapterStateChange(function (res) {
					console.log('adapterState changed, now is', res)
					that.state = res
				})
			},
			resetDevices(d, s) {
				var that = this
				if(d) {
					that.bds = [] 
					that.bts = []
					that.deviceId = null
					that.deivceValue = ''
				}
				if(s) {
					that.bss = [] 
					that.serviceId = null
					that.serviceValue = ''
				}
				that.bscs = []
				that.bscws = []
				that.characteristicId = null
				that.wcharacteristicId = null
				// document.getElementById('characteristic').value = '',
				// document.getElementById('wcharacteristic').value = '';
			},
			// ArrayBuffer转16进度字符串示例
			ab2hex(buffer) {
				const hexArr = Array.prototype.map.call(
					new Uint8Array(buffer),
					function (bit) {
						return ('00' + bit.toString(16)).slice(-2)
					}
				)
				return hexArr.join('')
			},
		}
	}
</script>

<style>

</style>
