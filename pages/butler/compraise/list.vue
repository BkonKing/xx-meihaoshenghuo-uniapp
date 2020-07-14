<template>
  <view class="tf-bg tf-padding-base">
<!--       <recycle-list for="(item, i) in data">
      <cell-slot :key="i"> -->
      <view v-for="(item, i) in data" :key="i" class="tf-card" @tap="jump(item)">
        <view class="tf-card-header">
          <userInfo avatar="/static/app-icon.png" :name="item.name" :time="item.day">
            <template v-slot:right>
              <text class="tf-icon">1</text>
            </template>
          </userInfo>
        </view>
        <text class="tf-card-content">{{item.content}}</text>
        <view class="tf-image-box">
          <image class="details-image" mode="aspectFill" v-for="(item, i) in item.imageList" :key="i" :src="item.src"
            v-if="i < 3"></image>
          <text class="details-image--shade" v-if="item.imageList.length  > 3">+{{item.imageList.length - 3}}</text>
        </view>
        <view v-if="item.replyContent" class="reply-box">
          <text class="reply-title">社区回复</text>
          <text class="reply-content">{{item.replyContent}}</text>
        </view>
      </view>
<!--         </cell-slot>
    </recycle-list> -->
  </view>
</template>

<script>
  import userInfo from '../../components/user-info/index.nvue'
  export default {
    components: {
      userInfo
    },
    data() {
      return {
        data: [{
          id: 1,
          type: 1,
          status: 1,
          name: '关于暴雨天气',
          day: '06-06',
          content: '内容男男女女女女女女女那你是打发打发打发点阿的说法的阿斯蒂芬',
          money: 111,
          imageList: [{
              src: '/static/app-icon.png'
            },
            {
              src: '/static/app-icon.png'
            },
            {
              src: '/static/app-icon.png'
            },
            {
              src: '/static/app-icon.png'
            }
          ],
          replyContent: 'sdfasdf手动阀是打发第三方阿的说法阿斯顿发是发送到发阿斯顿发送到发'
        }, {
          id: 1,
          type: 1,
          status: 1,
          name: '关于暴雨天气',
          day: '06-06',
          content: '内容男男女女女女女女女那你是打发打发打发点阿的说法的阿斯蒂芬',
          money: 111,
          imageList: [{
              src: '/static/app-icon.png'
            },
            {
              src: '/static/app-icon.png'
            },
            {
              src: '/static/app-icon.png'
            },
            {
              src: '/static/app-icon.png'
            }
          ]
        }]
      }
    },
    created() {},
    methods: {
      jump(item) {
        const url = `/pages/butler/compraise/details?id=${item.id}&type=${item.type}`
        uni.navigateTo({
          url
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .tf-card {
    margin-bottom: $uni-spacing-col-lg;
  }

  .tf-image-box {
    padding-bottom: 40rpx;
  }
  
  .reply-box {
    border-top-width: 1rpx;
    border-top-style: solid;
    border-top-color: $uni-color-divider;
    padding-bottom: 40rpx;
  }
  
  .reply-title {
    font-size: $uni-font-size-base;
    padding: 30rpx 0;
  }
  
  .reply-content {
    padding: 30rpx;
    background-color: #F0F0F0;
    color: $uni-text-color-grey;
    font-size: 24rpx;
    line-height: 52rpx;
  }

  .details-image {
    width: 200rpx;
    height: 200rpx;
  }

  .details-image--shade {
    position: absolute;
    width: 200rpx;
    height: 200rpx;
    line-height: 200rpx;
    z-index: 1;
    background-color: #000000;
    opacity: 0.6;
    right: 0;
    text-align: center;
    color: #fff;
    font-size: 54rpx;
  }
</style>
