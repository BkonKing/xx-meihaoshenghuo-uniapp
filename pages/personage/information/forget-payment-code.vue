<template>
  <view class="tf-bg-white">
    <text class="tf-text-lg tf-center">我们已经发送了验证码到你的手机</text>
    <text class="tf-h3 tf-center">15000112233</text>
    <view class="tf-phone-input-box tf-row-space-between">
      <view class="tf-vertical-center">
        <text class="tf-phone-input-label">验证码</text>
        <input class="tf-phone-input" type="number" style="width: 200rpx;" />
      </view>
      <button class="tf-phone-code-btn" size="mini" :plain="true">获取验证码</button>
    </view>
    <button type="warn" style="width: 100%;">下一步</button>
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
    padding: 80rpx 50rpx;
    height: 100%;
  }
  .tf-h3 {
    margin: 40rpx 0 74rpx;
  }
  .tf-phone-input-box {
    margin-bottom: 130rpx;
  }
</style>
