<template>
  <view>
    <uni-segmented-control style="background-color: #fff;" :current="current" :values="items" @clickItem="onClickItem"
      style-type="text" active-color="#EB5841"></uni-segmented-control>
    <scroll-view class="tf-bg tf-padding-base">
      <view class="content">
        <view v-if="current === 0">
          <uni-list style="background-color: #fff;border-radius: 8rpx;margin-bottom: 30rpx;">
            <uni-list-item title="头像">
              <template v-slot:right>
                <image class="tf-avatar" src="/static/logo.png" mode="widthFix"></image>
              </template>
            </uni-list-item>
            <uni-list-item title="昵称" rightText="这是一个默认昵称" :showArrow="false"></uni-list-item>
            <uni-list-item title="性别" rightText=""></uni-list-item>
            <uni-list-item title="生日" rightText="1990-01-01"></uni-list-item>
          </uni-list>
          <uni-list style="background-color: #fff;border-radius: 8rpx;margin-bottom: 30rpx;">
            <uni-list-item title="姓名" rightText="张三" :showArrow="false">
            </uni-list-item>
            <uni-list-item title="手机号" rightText="1555555555" @tap="jumpPhone"></uni-list-item>
            <uni-list-item title="收货地址" rightText="福建省省福建省福建省福建省福建省省福建省福建省福建省福建省省福建省福建省福建省福建省省福建省福建省福建省" rightWidth="460rpx"></uni-list-item>
          </uni-list>
          <uni-list style="background-color: #fff;border-radius: 8rpx;margin-bottom: 30rpx;">
            <uni-list-item title="人脸采集">
            </uni-list-item>
          </uni-list>
          <uni-list style="background-color: #fff;border-radius: 8rpx;">
            <uni-list-item title="修改支付密码" @tap="editPaymentCode"></uni-list-item>
            <uni-list-item title="修改登录密码" @tap="editLoginPassword"></uni-list-item>
          </uni-list>
        </view>
        <view v-if="current === 1">
          <view class="house-owner house-box">
            <text class="house-owner-current">当前房产</text>
            <view class="tf-row-space-between">
              <view class="tf-row">
                <text class="house-user house-user--owner">
                  业主业主
                </text>
                <view>
                  <text class="house-name">XXXX美好生活家园</text>
                  <text class="house-address">5栋1单元1001</text>
                </view>
              </view>
              <view class="tf-row-vertical-center">
                <text>ren</text>
                <text>4</text>
              </view>
            </view>
          </view>
          <view class="house-box tf-row">
            <text class="house-user house-user--relation">
              业主业主
            </text>
            <view>
              <text class="house-name">XXXX美好生活家园</text>
              <text class="house-address">5栋1单元1001</text>
            </view>
          </view>
          <view class="house-box tf-row">
            <text class="house-user house-user--tenant">
              业主业主
            </text>
            <view>
              <text class="house-name">XXXX美好生活家园</text>
              <text class="house-address">5栋1单元1001</text>
            </view>
          </view>
          <view class="house-box tf-row">
            <text class="house-user house-user--relation">
              业主业主
            </text>
            <view>
              <text class="house-name">XXXX美好生活家园</text>
              <text class="house-address">5栋1单元1001</text>
            </view>
          </view>
          <button type="warn" @tap="addHouse">新增房产</button>
        </view>
        <view class="tf-flex-item" v-if="current === 2">
          <dropdown-menu>
            <!-- <dropdown-item v-model="value2" :list="list"></dropdown-item> -->
            <dropdown-item v-model="value" :list="list">
            </dropdown-item>
          </dropdown-menu>
          <view class="tf-card tf-mt-base">
            <text class="house-address tf-card-header">XXXX美好生活家园 5栋1单元1002</text>
            <view class="tf-card-content tf-row">
              <uni-tag class="user-role tf-mr-base" text="业主" type="error" :inverted="true" size="small"></uni-tag>
              <text>哈哈哈</text>
              <text class="tf-mr-base">(本人)</text>
              <text class="tf-mr-base">女</text>
              <text>12312312312</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
  import uniList from "@/components/uni-list/uni-list.vue"
  import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
  import uniTag from '@/components/uni-tag/uni-tag.vue'
  import dropdownMenu from '@/components/dropdown/dropdown-menu.vue'
  import dropdownItem from '@/components/dropdown/dropdown-item.vue'
  export default {
    components: {
      uniSegmentedControl,
      uniList,
      uniListItem,
      uniTag,
      dropdownMenu,
      dropdownItem
    },
    data() {
      return {
        items: ['基础信息', '房产信息', '成员信息'],
        current: 0,
        value: 0,
        list: [{
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
      };
    },
    methods: {
      onClickItem(e) {
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      },
      addHouse() {
        uni.navigateTo({
          url: '/pages/personage/house/attestation'
        })
      },
      jumpPhone() {
        uni.navigateTo({
          url: '/pages/personage/information/phone'
        })
      },
      editPaymentCode() {
        uni.navigateTo({
          url: '/pages/personage/information/payment-code'
        })
      },
      editLoginPassword() {
        uni.navigateTo({
          url: '/pages/personage/information/login-password'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .house-owner {
    border-width: 3rpx;
    border-color: #EB5841;
    padding-top: 0 !important;
  }

  .house-owner-current {
    // position: absolute;
    // top: 0;
    // left: 50%;
    // transform: -50rpx;
    font-size: 20rpx;
    text-align: center;
    margin-bottom: $uni-spacing-col-base;
    // color: #fff;
  }

  .house-user {
    width: 88rpx;
    padding: 0 20rpx;
    height: 88rpx;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-size: 24rpx;
    margin-right: $uni-spacing-row-base;
  }

  .house-user--owner {
    background-image: linear-gradient(to top left, #EB5841, #F9866B);
  }

  .house-user--relation {
    background-image: linear-gradient(to top left, #FFC017, #FFA110);
  }

  .house-user--tenant {
    background-image: linear-gradient(to top left, #45D5DA, #31B4B9);
  }

  .house-name {
    font-size: 30rpx;
    color: $uni-text-color;
  }

  .house-address {
    font-size: 24rpx;
    color: $uni-text-color-grey;
  }
  
  .house-box {
    background-color: #fff;
    border-radius: 8rpx;
    padding: 40rpx 30rpx;
    margin-bottom: $uni-spacing-col-lg;
  }
</style>
