<template>
	<view>
		<button type="primary" @click="openBluetoothAdapter">初始化蓝牙模块</button>
		<button type="primary" @click="startBluetoothDevicesDiscovery">开始搜寻附近的蓝牙外围设备</button>
		<button type="primary" @click="stopBluetoothDevicesDiscovery">停止搜寻附近的蓝牙外围设备</button>
		<view>设备：{{deivceValue}}</view>
		<view>设备Id：{{deviceId}}</view>
		<button type="primary" @click="selectDevice">展开设备列表</button>
		<button type="primary" @click="connectDevice">连接蓝牙设备</button>
		<!-- 设备列表 -->
		<!-- <view>设备列表:</view>
		<view v-if="bdsList.length > 0">
			<view v-for="(item,index) in bdsList" :key="index">
				<view @click="selectDevice(index)">{{item.title}}</view>
			</view>
		</view> -->
		<view>********服务********</view>
		<button type="primary" @click="getServices">获取设备服务</button>
		<view>服务：{{serviceValue}}</view>
		<view>服务Id：{{serviceId}}</view>
		<button type="primary" @click="selectService">展开服务列表</button>
		<!-- 服务列表 -->
		<!-- <view>服务列表:</view>
		<view v-if="bssList.length > 0">
			<view v-for="(item,index) in bssList" :key="index">
				<view @click="selectService(index)">{{item.title}}</view>
			</view>
		</view> -->
		<button type="primary" @click="getCharacteristics">获取服务的特征值</button>
		<view>读取特征值：{{characteristicValue}}</view>
		<button type="primary" @click="selectCharacteristic">展开服务的特征值列表</button>
		<button type="primary" @click="readValue">读取特征值数据</button>
		<view>读取数据：{{readvalueValue}}</view>
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
			onBLECharacteristicValueChange() {
				let that = this
				uni.onBLECharacteristicValueChange(function (res) {
					console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
					console.log(that.ab2hex(res.value))
					var value = that.ab2hex(res.value);
					if (that.characteristicId == res.characteristicId) {
						that.readvalueValue = value // 更新到页面显示
					} else if (that.wcharacteristicId == res.characteristicId) {
						uni.showToast({title: value,icon: "none"});
					}
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
				let bdsList = [];
				bds.map(item => {
					let t = item.name;
					if (!t || t.length <= 0) {
						t = item.deviceId;
					}
					bdsList.push({
						title: t
					});
				})
				that.bdsList = bdsList
			},
			selectDevice() {
				let that = this
				let bds = that.bds
				if (bds.length <= 0) {
					uni.showToast({title: '未搜索到有效蓝牙设备',icon: "none"});
					return;
				}
				var bts = [];
				for (var i in bds) {
					var t = bds[i].name;
					if (!t || t.length <= 0) {
						t = bds[i].deviceId;
					}
					bts.push({
						title: t
					});
				}
				plus.nativeUI.actionSheet({
					title: "选择蓝牙设备",
					cancel: "取消",
					buttons: bts
				}, function(e) {
					if (e.index > 0) {
						that.deivceValue = bds[e.index - 1].name
						that.deviceId = bds[e.index - 1].deviceId;
					}
				});
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
						uni.showToast({title: '连接成功',icon: "none"});
						console.log('连接成功')
						console.log(res)
					}
				})
			},
			// 获取蓝牙设备所有服务(service)。
			getServices() {
				let that = this
				let deviceId = that.deviceId
				let bconnect = that.bconnect
				if (!deviceId) {
					uni.showToast({title: '未选择设备',icon: "none"});
					return;
				}
				if (!bconnect) {
					uni.showToast({title: '未连接蓝牙设备',icon: "none"});
					return;
				}
				that.resetDevices(true)
				console.log('获取蓝牙设备服务')
				
				uni.getBLEDeviceServices({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId,
					success(res) {
						console.log('device services:', res.services)
						console.log('获取服务成功! ' + services.length);
						let services = res.services
						let bss = []
						if (services.length > 0) {
							for (var i in services) {
								bss.push(services[i]);
							}
							that.bss = bss
							if (bss.length > 0) { // 默认选择最后一个服务
								that.serviceValue = that.serviceId = bss[bss.length - 1].uuid;
							}
						} else {
							console.log('获取服务列表为空?');
						}
					},
					fail(e) {
						console.log('获取服务失败! ' + JSON.stringify(e));
					}
				})
			},
			// 选择服务 
			openService() {
				let that = this
				let bss = that.bss
				if (bss.length <= 0) {
					uni.showToast({title: '未获取到有效蓝牙服务',icon: "none"});
					return;
				}
				var bssList = [];
				for (var i in bss) {
					bssList.push({
						title: bss[i].uuid
					});
				}
				that.bssList = bssList
			},
			selectService() {
				let that = this
				let bss = that.bss
				if (bss.length <= 0) {
					uni.showToast({title: '未获取到有效蓝牙服务',icon: "none"});
					return;
				}
				var bts = [];
				for (var i in bss) {
					bts.push({
						title: bss[i].uuid
					});
				}
				plus.nativeUI.actionSheet({
					title: "选择服务",
					cancel: "取消",
					buttons: bts
				}, function(e) {
					if (e.index > 0) {
						that.serviceValue = that.serviceId = bss[e.index - 1].uuid
					}
				});
			},
			// 获取服务的特征值 
			getCharacteristics() {
				let that = this
				let deviceId = that.deviceId
				let bconnect = that.bconnect
				let serviceId = that.serviceId
				if (!deviceId) {
					uni.showToast({title: '未选择设备',icon: "none"});
					return;
				}
				if (!bconnect) {
					uni.showToast({title: '未连接蓝牙设备',icon: "none"});
					return;
				}
				if (!serviceId) {
					uni.showToast({title: '未选择服务',icon: "none"});
					return;
				}
				that.resetDevices(true, true);
				
				console.log('获取蓝牙设备某个服务中所有特征值(characteristic):');
				uni.getBLEDeviceCharacteristics({
					deviceId,
					serviceId,
					success(res) {
						console.log('device getBLEDeviceCharacteristics:', res.characteristics)
						var characteristics = res.characteristics;
						if (characteristics.length > 0) {
							for (var i in characteristics) {
								var characteristic = characteristics[i];
								console.log(JSON.stringify(characteristic));
								if (characteristic.properties) {
									if (characteristic.properties.read) {
										that.bscs.push(characteristics[i]);
									}
									if (characteristic.properties.write) {
										that.bscws.push(characteristics[i]);
										if (characteristic.properties.notify || characteristic.properties.indicate) {
											let characteristicId = characteristic.uuid
											uni.notifyBLECharacteristicValueChange({
												state: true, // 启用 notify 功能
												deviceId,
												serviceId,
												characteristicId,
												success(res) {
													console.log('notifyBLECharacteristicValueChange ' + characteristic.uuid + ' success.');
												},
												fail(e) {
													console.log('notifyBLECharacteristicValueChange ' + characteristic.uuid + ' failed! ' + JSON.stringify(e));
												}
											})
										}
									}
								}
							}
							let bscs = that.bscs
							if (bscs.length > 0) { // 默认选择最后特征值
								that.characteristicValue = that.characteristicId = bscs[bscs.length - 1].uuid;
							}
							let bscws = that.bscws
							if (bscws.length > 0) { // 默认选择最后一个可写特征值
								that.wcharacteristicValue = that.wcharacteristicId = bscws[bscws.length - 1].uuid;
							}
						} else {
							console.log('获取特征值列表为空?');
						}
					}
				})
			},
			// 选择特征值(读取) 
			selectCharacteristic() {
				let that = this
				let bscs = that.bscs
				if (bscs.length <= 0) {
					uni.showToast({title: '未获取到有效可读特征值',icon: "none"});
					return;
				}
				var bts = [];
				for (var i in bscs) {
					bts.push({
						title: bscs[i].uuid
					});
				}
				plus.nativeUI.actionSheet({
					title: '选择特征值',
					cancel: '取消',
					buttons: bts
				}, function(e) {
					if (e.index > 0) {
						that.characteristicValue = that.characteristicId = bscs[e.index - 1].uuid
					}
				});
			},
			resetDevices(d, s) {
				var that = this
				if(!d) {
					that.bds = [] 
					that.bdsList = []
					that.deviceId = null
					that.deivceValue = ''
				}
				if(!s) {
					that.bss = []
					that.bssList = []
					that.serviceId = null
					that.serviceValue = ''
				}
				that.bscs = []
				that.bscws = []
				that.characteristicId = null
				that.wcharacteristicId = null
				that.characteristicValue = ''
				that.wcharacteristicValue = ''
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
