<template>
  <view class="dropdown-item">
    <!-- selected -->
    <view class="dropdown-item__selected" @click="changePopup">
      <view class="dropdown-item__title">
        <text v-if="icon" class="dropdown-item__icon selectIcon" v-html="icon"></text>
        <slot name="title">
          <view class="selected__name">{{title ? title : selectItem.text}}</view>
        </slot>
      </view>
      <view class="selected__icon" :class="showClass === 'show'? 'up' : 'down'">
        <text class="selectIcon">&#xe99c;</text>
      </view>
    </view>
    <view class="dropdown-item__content" :style="{top: contentTop + 'px'}" v-if="showList">
      <!-- dropdown -->
      <view :class="['list', showClass]" :style="[{left: `${contentLeft}px`}, {right: `${contentLeft}px`}]">
        <slot v-if="$slots.default"></slot>
        <block v-else>
          <view class="list__option" v-for="(item, index) in list" :key="index" @click="choose(item)">
            <view>{{item.text}}</view>
            <icon v-if="item.value === value" type="success_no_circle" size="26" />
          </view>
        </block>
      </view>
      <!-- dropdown-mask -->
      <view :class="['dropdown-mask', showClass]" v-if="showList" @click="closePopup"></view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      value: [Number, String, Object],
      list: {
        type: Array,
        default: () => {
          return []
        }
      },
      title: [Number, String],
      icon: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        showList: "",
        showClass: '',
        selectItem: {},
        contentTop: 0,
        contentLeft: 0
      }
    },
    watch: {},
    mounted() {
      this.showList = this.active;
      this.selectItem = this.list[this.value];
      // document.addEventListener('click', e => {
      // 	//this.$el 可以获取当前组件的容器节点
      // 	if (!this.$el.contains(e.target)) {
      // 		console.log('change');
      // 		this.close()
      // 	}
      // });
    },
    methods: {
      choose(item) {
        this.selectItem = item
        this.$emit('input', item.value)
        this.closePopup()
      },
      changePopup() {
        if (this.showList) {
          this.closePopup()
        } else {
          this.openPopup()
        }
      },
      openPopup() {
        // this.$parent  -> dropdown-menu
        this.$parent.$emit('close')
        this.showList = true
        this.$nextTick(() => {
          this.getElementData('.dropdown-item__selected', (data) => {
            this.contentTop = data[0].bottom
            this.contentLeft = data[0].left
            this.showClass = 'show'
          })
        })
      },
      closePopup() {
        this.showClass = ''
        setTimeout(() => {
          this.showList = false
        }, 300)
      },
      close() {
        this.showClass = ''
        this.showList = false
      },
      getElementData(el, callback) {
        uni.createSelectorQuery().in(this).selectAll(el).boundingClientRect().exec((data) => {
          callback(data[0]);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'selectIcon';
    src: url('//at.alicdn.com/t/font_1908587_ppeo1ml9et.ttf') format('truetype');
  }

  .selectIcon {
    font-family: "selectIcon" !important;
    font-size: 28rpx;
    font-style: normal;
  }

  .dropdown-item {
    width: 100%;
    flex: 1;
    position: relative;

    &__selected {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #fff;
      box-sizing: border-box;
      justify-content: space-between;
      padding: 0 30rpx;
      height: 66rpx;
      line-height: 66rpx;
      border-radius: 33rpx;
      font-size: $uni-font-size-base;

      .dropdown-item__icon {
        font-weight: bold;
        margin-right: 20rpx;
      }

      .dropdown-item__title {
        flex-direction: row;

        .tf-icon {
          color: #fff;
        }
      }

      .selected__name {
        font-size: 32rpx;
      }

      .selected__icon {
        margin-left: 20rpx;

        &.down {
          transition: transform .3s;
          transform: rotateZ(0);
        }

        &.up {
          transition: transform .3s;
          transform: rotateZ(-180deg);
        }
      }
    }

    &__content {
      position: fixed;
      left: 0;
      right: 0;
      overflow: hidden;
      top: 0;
      bottom: 0;
      z-index: 999999;

      .list {
        max-height: 400px;
        overflow-y: auto;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 3;
        background: #fff;
        transform: translateY(-100%);
        transition: all .3s;

        &.show {
          transform: translateY(0);
        }

        &__option {
          font-size: 32rpx;
          padding: 10rpx 30rpx;
          display: flex;
          justify-content: space-between;

          &:not(:last-child) {
            border-bottom: 1rpx solid #DDDDDD;
          }
        }
      }

      .dropdown-mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all .3s;
        z-index: 2;

        &.show {
          background: rgba(0, 0, 0, 0.5);
        }
      }
    }

    &:not(:last-child):after {
      content: ' ';
      position: absolute;
      width: 2rpx;
      top: 36rpx;
      bottom: 36rpx;
      right: 0;
      background: $uni-border-color;
    }
  }
</style>
