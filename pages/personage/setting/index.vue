<template>
	<view class="tf-bg">
		<tf-list>
      <tf-list-item title="个人资料" @tap="goInformation"></tf-list-item>
    </tf-list>
    <tf-list class="tf-mt-lg">
      <tf-list-item title="检查更新" @tap="openDialog">
        <template v-slot:right>
          <text class="right-text tf-text-orange">发现更新版本</text>
        </template>
      </tf-list-item>
      <tf-list-item title="清除缓存">
        <template v-slot:right>
          <text class="right-text">100MB</text>
        </template>
      </tf-list-item>
    </tf-list>
    <button class="btn">切换账号</button>
    <button class="btn tf-text-orange">退出登录</button>
    <tf-dialog ref="dialog" title="版本更新" :showFotter="true" okText="更新" @confirm="">
      <template v-slot:content>
        <text class="dialog-content">更新能容： 1.修复了FaceID和链接收藏弹窗的兼容性问题； 2.修复了链接收藏微信文章没有标题问题。</text>
      </template>
    </tf-dialog>
	</view>
</template>

<script>
  import tfList from '@/pages/components/tf-list/index.nvue'
  import tfListItem from '@/pages/components/tf-list/item.nvue'
  import tfDialog from '@/pages/components/tf-dialog/index.vue'
	export default {
    components: {
      tfList,
      tfListItem,
      tfDialog
    },
		data() {
			return {
				
			};
		},
    methods: {
      goInformation() {
        uni.navigateTo({
          url: '/pages/personage/information/index'
        })
      },
      openDialog() {
        this.$refs.dialog.open()
      }
    }
	}
</script>

<style lang="scss" scoped>
  .tf-bg {
    padding: 30rpx 20rpx;
  }
  .right-text {
    font-size: 24rpx;
    text-align: right;
  }
  .dialog-content {
    font-size: 24rpx;
    line-height: 46rpx;
    color: #666;
  }
  .btn {
    width: 100%;
    // height: 120rpx;
    // line-height: 120rpx;
    font-size: 30rpx;
    margin-top: 30rpx;
    background-color: #fff;
    &::after {
      border: none;
    }
  }
</style>
