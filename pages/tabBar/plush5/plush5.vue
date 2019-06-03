<template>
	<view>
		<web-view :src="url" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
		onShow() {
			this.url = '/hybrid/html/blue.html?id=1111'
		},
		methods: {
			getMessage(e) {
				uni.showModal({
					content: JSON.stringify(e.detail),
					showCancel: false
				})
			}
		}
	}
</script>

<style>

</style>
