<template>
	<view class="timeline">
		<slot></slot>
	</view>
</template>

<script>
	export default {
    name: 'timeLine',
		components:{
		}
	}
</script>

<style scoped>
	.timeline {
		padding: 20rpx;
	}
</style>
