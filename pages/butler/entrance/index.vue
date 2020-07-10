<template>
  <view>
    <view class="header-bg">
      <tf-select class="tf-select" :options="options"></tf-select>
      <view class="entrance-box">
        <view class="entrance-box__type" :class="{'active': active === 1}" @tap="active = 1">
          <text class="tf-icon">&#xe82f;</text>
          <text class="entrance-box__type--name">二维码开门</text>
        </view>
        <view class="entrance-box__divider"></view>
        <view class="entrance-box__type" :class="{'active': active === 2}" @tap="active = 2">
          <text class="tf-icon">&#xe912;</text>
          <text class="entrance-box__type--name">一键开门</text>
        </view>
        <view class="entrance-operation">
          <template v-if="active === 1">
            <view class="entrance-operation__box">
              <image class="qrcode-image" src="/static/app-icon.png" mode="aspectFit"></image>
            </view>
            <view class="entrance-operation__alert tf-row-center">
              <text class="tf-icon">&#xe79a;</text>
              <text>自动刷新（119s）</text>
            </view>
          </template>
          <template v-else>
            <view class="entrance-operation__box">
              <view class="instantly-btn">立即开门</view>
            </view>
            <view class="entrance-operation__alert">点击即可开门</view>
          </template>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import tfSelect from '../../components/tf-select/index.vue'
  export default {
    components: {
      tfSelect
    },
    data() {
      return {
        active: 1,
        options: [{
            text: 'item1',
            value: 0
          },
          {
            text: 'item2',
            value: 1
          },
          {
            text: 'item3',
            value: 2
          }
        ]
      }
    },
    //点击导航栏 buttons 时触发
    onNavigationBarButtonTap({
      index
    }) {
      if (index === 1) {
        uni.showModal({
          title: '使用说明',
          content: '说明书，是以应用文体的方式对某事或物来进行相对的详细描述，方便人们认识和了解某事或物。说明书要实事求是，有一说一、有二说二，不可为达到某种目的而夸大产品作用和性能。说明书要全面的说明事物，不仅介绍其优点，同时还要清楚地说明应注意的事项和可能产生的问题。产品说明书、使用说明书、安装说明书一般采用说明性文字，而戏剧演出类说明书则可以以记叙、抒情为主。说明书可根据情况需要，使用图片、图表等多样的形式，以期达到最好的说明效果。',
          showCancel: false,
          confirmColor: '#EB5841',
          confirmText: '确定',
          success: res => {},
          fail: () => {},
          complete: () => {}
        });
      } else if (index === 0) {
        uni.navigateTo({
          url: '/pages/butler/entrance/list'
        })
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  
  .header-bg {
    width: 100%;
    height: 670rpx;
    background-image: linear-gradient(to right, $uni-bg-color-error, $uni-color-error);
  }

  .tf-select {
    width: 100%;
    padding: 0 50rpx;
    margin: 50rpx 0;
  }

  .entrance-box {
    flex-direction: row !important;
    justify-content: space-around;
    padding: 0 105rpx;

    &__divider {
      width: 1px;
      height: 70rpx;
      background: #fff;
      border-radius: 1px;
      margin-top: 35rpx;
    }
  }

  .entrance-box__type {
    align-items: center;

    .tf-icon {
      width: 88rpx;
      height: 88rpx;
      border-radius: 50%;
      border: 1px solid #fff;
      text-align: center;
      line-height: 88rpx;
      font-size: 66rpx;
      color: #fff;
    }

    &--name {
      font-size: 30rpx;
      color: #fff;
      margin-top: 20rpx;
    }

    &.active {

      .tf-icon {
        background: #fff;
        color: $uni-color-error;
      }
    }
  }

  .entrance-operation {
    position: absolute;
    z-index: 1;
    left: 105rpx;
    top: 180rpx;

    &__box {
      display: flex;
      width: 540rpx;
      height: 540rpx;
      padding: 60rpx;
      background: #fff;
      border-radius: 10rpx;
      box-shadow: 0 0 30rpx rgba(235, 88, 65, 0.3);
      justify-content: center;
      align-items: center;

      .qrcode-image {
        width: 100%;
      }

      .instantly-btn {
        width: 300rpx;
        height: 300rpx;
        line-height: 280rpx;
        text-align: center;
        color: #fff;
        font-weight: bold;
        background-image: linear-gradient(to bottom right, $uni-bg-color-warning, $uni-color-warning);
        border: 10rpx solid #ffe6a2;
        border-radius: 50%;
      }
    }
    .entrance-operation__alert {
      font-size: $uni-font-size-base;
      color: $uni-text-color-grey;
      text-align: center;
      margin-top: 88rpx;
      .tf-icon {
        font-size: 36rpx;
        margin-right: $uni-spacing-col-base;
      }
    }
  }
</style>
