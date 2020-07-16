<template>
  <view class="tf-bg tf-padding-base">
    <list>
      <cell v-for="(item, i) in data" :key="item.id">
        <view class="tf-card" @tap="jump(item)">
          <view class="tf-card-header">
            <userInfo avatar="/static/app-icon.png" :name="item.name" :time="item.ctime">
              <template v-slot:right>
                <text class="tf-icon">{{item.info_type}}</text>
              </template>
            </userInfo>
          </view>
          <text class="tf-card-content">{{ item.content }}</text>
          <view class="tf-image-box">
            <image class="details-image" mode="aspectFill" v-for="(item, i) in item.images" :key="i" :src="item.src" v-if="i < 3"></image>
            <text class="details-image--shade" v-if="item.images.length > 3">+{{ item.images.length - 3 }}</text>
          </view>
          <view v-if="item.reply" class="reply-box">
            <text class="reply-title">社区回复</text>
            <text class="reply-content">{{ item.reply }}</text>
          </view>
        </view>
      </cell>
    </list>
  </view>
</template>

<script>
import userInfo from '@/pages/components/user-info/index.nvue';
import { getComPraiseList } from '@/api/butler/butler.js';
export default {
  components: {
    userInfo
  },
  data() {
    return {
      data: [
        {
          id: '1',
          content: '厨房下水道堵了都没有及时来处理',
          info_type: 1,
          ctime: '2020-06-03 16:35:26',
          reply: '已经分派相关工作人员去处理了',
          images: [
            {
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
        },
        {
          id: '2',
          content: '厨房下水道堵了都没有及时来处理2',
          info_type: 2,
          ctime: '2020-06-03 16:35:26',
          reply: '已经分派相关工作人员去处理了',
          images: [
            {
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
        }
      ]
    };
  },
  onLoad() {
    this.getComPraiseList()
  },
  methods: {
    getComPraiseList() {
      getComPraiseList().then(res => {
        if (res.success) {
          this.data = res.data;
        }
      });
    },
    jump(item) {
      const url = `/pages/butler/compraise/details?id=${item.id}&type=${item.info_type}`;
      uni.navigateTo({
        url
      });
    }
  }
};
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
  background-color: #f0f0f0;
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
