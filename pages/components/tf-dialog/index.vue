<template>
  <uni-popup ref="popup" :type="type">
    <view class="tf-dialog__wrapper-box">
      <text class="tf-icon" @tap="close">&#xe781;</text>
      <view class="tf-dialog">
        <view v-if="title" class="tf-dialog-header">
          <text class="tf-dialog-header__title">{{ title }}</text>
        </view>
        <scroll-view class="tf-dialog-content"><slot name="content"></slot></scroll-view>
        <view v-if="showFotter" class="tf-dialog-footer">
          <text class="tf-dialog-footer__btn tf-dialog-footer__btn--grey" style="margin-right: 30rpx;" @tap="close">取消</text>
          <text class="tf-dialog-footer__btn tf-dialog-footer__btn--orange" @tap="confirm">{{okText}}</text>
        </view>
      </view>
    </view>
  </uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
export default {
  components: {
    uniPopup,
    uniPopupMessage,
    uniPopupDialog
  },
  props: {
    type: {
      type: String,
      default: 'dialog'
    },
    title: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    showFotter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    confirm() {
      this.$emit('confirm')
    }
  }
};
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
  padding: 20rpx 0;
}

.tf-dialog-footer {
  flex-direction: row;
  padding-top: 20rpx;
  padding-bottom: 40rpx;
}
.tf-dialog-footer__btn {
  flex: 1;
  height: 66rpx;
  line-height: 66rpx;
  border-radius: 4rpx;
  font-size: 30rpx;
  text-align: center;
}
.tf-dialog-footer__btn--grey {
  border-width: 2rpx;
  border-style: solid;
  border-color: #aaa;
  color: $uni-text-color-grey;
}
.tf-dialog-footer__btn--orange {
  border-width: 2rpx;
  border-style: solid;
  border-color: $uni-color-error;
  color: #fff;
  background-color: $uni-color-error;
}
</style>
