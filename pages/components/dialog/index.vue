<template>
  <uni-popup ref="popup" type="dialog">
    <view class="tf-dialog__wrapper-box">
      <text class="tf-icon" @tap="close">&#xe781;</text>
      <view class="tf-dialog">
        <view class="tf-dialog-header">
          <text class="tf-dialog-header__title">{{title}}</text>
        </view>
        <scroll-view class="tf-dialog-content">
          <slot name="content"></slot>
        </scroll-view>
      </view>
    </view>
  </uni-popup>
</template>

<script>
  import uniPopup from '@/components/uni-popup/uni-popup.vue'
  import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
  export default {
    components: {
      uniPopup,
      uniPopupDialog
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      };
    },
    methods: {
      open() {
        this.$refs.popup.open()
      },
      close() {
        this.$refs.popup.close()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tf-dialog__wrapper-box {
    width: 560rpx;
  }

  .tf-icon {
    text-align: right;
    font-size: 50rpx;
    color: #fff;
    margin: 0 30rpx 30rpx 0;
  }

  .tf-dialog {
    width: 560rpx;
    padding: 0 50rpx;
    background-color: #fff;
  }

  .tf-dialog-header {
    height: 115rpx;
    border-bottom-width: 2rpx;
    border-bottom-style: solid;
    border-bottom-color: $uni-color-divider;
  }

  .tf-dialog-header__title {
    line-height: 115rpx;
    font-size: 30rpx;
    font-weight: bold;
    text-align: center;
    color: #000;
  }
  
  .tf-dialog-content {
    width: 560rpx;
    padding: 20rpx 0;
  }
</style>
