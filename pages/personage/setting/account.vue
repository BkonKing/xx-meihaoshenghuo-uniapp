<template>
  <view class="tf-bg-white">
    <text class="tf-h3">切换账户登录</text>
    <view class="account">
      <image class="user-avatar" src="/static/app-icon.png" mode="aspectFill"></image>
      <view style="justify-content: center;">
        <text class="user-name">这是一个默认昵称</text>
        <text class="tf-text-grey">15022223333</text>
      </view>
    </view>
    <button type="warn" style="width: 100%;margin-top: 70rpx;">换个账户登录</button>
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
    padding: 30rpx 50rpx;
    height: 100%;
  }

  .tf-h3 {
    margin: 80rpx 0;
  }
  
  .account {
    flex-direction: row;
    width: 650rpx;
    height: 180rpx;
    padding: 30rpx;
    border-width: 1rpx;
    border-style: solid;
    border-color: #aaa;
    border-radius:10px;
  }
  
  .user-avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    margin-right: $uni-spacing-row-base;
  }
  
  .user-name {
    font-size: 34rpx;
    font-weight: 500;
    color: $uni-text-color;
    margin-bottom: 10rpx;
  }
  
  .tf-text-grey {
    font-size: 30rpx;
  }
</style>
