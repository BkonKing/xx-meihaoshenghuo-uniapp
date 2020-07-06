<template>
  <view class="timeItem">
    <view class="timeItem__line"></view>
    <view class="timeItem__line--out">
      <!-- <view class="timeItem__line--inner"></view> -->
    </view>
    <view class="timeItem__rightContent">
      <slot></slot>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .timeItem {
    flex-direction: row;
    padding-left: 12rpx;
  }

  .timeItem__line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    /* height: 100rpx; */
    background-color: #cccccc;
  }

  .timeItem__line--out {
    position: absolute;
    z-index: 1;
    top: 0; 
    left: 0;
    transform: translateX(1rpx);
    justify-content: center;
    align-items: center;
    width: 24rpx;
    height: 24rpx;
    background-color: #ec6817;
    border-radius: 50%;
  }

  /* .timeItem__line--inner {
    width: 18rpx;
    height: 18rpx;
    background-color: #ec6817;
    border-radius: 50%;
  } */

  .timeItem__rightContent {
    flex: 1;
    padding-right: 10rpx;
    padding-bottom: 10rpx;
    margin-left: 20rpx;
    /* height: 100rpx; */
  }
</style>
