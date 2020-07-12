<template>
  <view class="tf-bg-white">
    <text class="tf-h3">验证手机号</text>
    <view style="margin-bottom: 140rpx;">
      <view class="tf-phone-input-box">
        <text class="tf-phone-input-label">手机号</text>
        <input class="tf-phone-input" type="number" style="width: 400rpx;" />
      </view>
      <view class="tf-phone-input-box tf-row-space-between">
        <view class="tf-vertical-center">
          <text class="tf-phone-input-label">验证码</text>
          <input class="tf-phone-input" type="number" style="width: 200rpx;"/>
        </view>
        <button class="tf-phone-code-btn" size="mini" :plain="true" :disabled="true">获取验证码</button>
      </view>
    </view>
    <button type="warn" style="width: 100%;">确定</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss" scoped>
  .tf-bg-white {
    padding: 50rpx;
    height: 100%;
  }

  .tf-h3 {
    margin: 60rpx 0;
  }
</style>
