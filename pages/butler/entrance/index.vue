<template>
	<view>
		<view class="header-bg">
      <tf-select></tf-select>
    </view>
	</view>
</template>

<script>
  import tfSelect from '../../components/select/index.vue'
	export default {
    components: {
      tfSelect
    },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.header-bg {
  position: relative;
  width: 100%;
  height: 670rpx;
  background-image: linear-gradient(to right, $uni-bg-color-error, $uni-color-error);
  z-index: -1;
}
</style>
