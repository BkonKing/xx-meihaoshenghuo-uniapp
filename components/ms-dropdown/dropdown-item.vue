<template>
  <view ref="dropdownItem" class="dropdown-item">
    <!-- selected -->
    <view id="dropdown-item__selected" class="dropdown-item__selected" @click="changePopup">
      <slot name="title">
        <view class="selected__name">{{title ? title : selectItem.text}}</view>
      </slot>
      <view class="selected__icon" :class="showClass === 'show'? 'selected__icon--up' : 'selected__icon--down'">
        <text class="iconfont">&#xe851;</text>
      </view>
    </view>
    <view class="dropdown-item__content" :style="{top: contentTop + 'rpx'}" v-if="showList">
      <!-- dropdown -->
      <view :class="['content-list', showClass]">
        <slot v-if="$slots.default"></slot>
        <view v-else>
          <view class="content-list__option" v-for="(item, index) in list" :key="index" @click="choose(item)">
            <view>{{item.text}}</view>
            <icon v-if="item.value === value" type="success_no_circle" size="26" />
          </view>
        </view>
      </view>
      <!-- dropdown-mask -->
      <view :class="['dropdown-mask', showClass ? 'dropdown-mask--show' : '']" v-if="showList" @click="closePopup"></view>
    </view>
  </view>
</template>

<script>
  // 注意平台差异
  // #ifdef APP-NVUE
  const dom = weex.requireModule('dom')
  // #endif
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
      title: [Number, String]
    },
    data() {
      return {
        showList: "",
        showClass: '',
        selectItem: {},
        contentTop: 0,
        rect: null
      }
    },
    mounted() {
      // this.rect = dom.getComponentRect(this.$refs.dropdownItem, option => {
      //   console.log('getComponentRect:', option)
      //   this.size = option.size
      // })
      // console.log('return value:', this.rect)
      // console.log('viewport:', dom.getComponentRect('viewport'))
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
          this.getElementData('#dropdown-item__selected', (data) => {
            this.contentTop = data.bottom * 2 + 88
            console.log(this.contentTop)
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
        const query = uni.createSelectorQuery().in(this);
        query.select(el).boundingClientRect(data => {
          callback(data)
        }).exec();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'dropdownIcon';
    /* project id 1564327 */
    src: url('https://at.alicdn.com/t/font_1564327_fcszez4n5i.eot');
    src: url('https://at.alicdn.com/t/font_1564327_fcszez4n5i.ttf') format('truetype');
  }

  .iconfont {
    font-family: "dropdownIcon" !important;
    font-size: 28rpx;
    font-style: normal;
  }

  .selected__name {
    font-size: 32rpx;
  }

  .selected__icon {
    &--down {
      transition: transform .3s;
      transform: rotateZ(0);
    }

    &--up {
      transition: transform .3s;
      transform: rotateZ(-180deg);
    }
  }

  .content-list {
    // max-height: 400px;
    // overflow-y: auto;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: #fff;
    transform: translateY(-100%);
    transition-property: width, height, background-color;
    transition-duration: 0.3s;

    &__option {
      height: 84rpx;
      flex-direction: row;
      font-size: 32rpx;
      padding: 26rpx 28rpx;
      justify-content: space-between;

      // &:not(:last-child) {
      //   border-bottom: 1rpx solid #DDDDDD;
      // }
    }
  }

  .show {
    transform: translateY(0);
  }

  .dropdown-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition-property: width, height, background-color;
    transition-duration: 0.3s;
    z-index: 2;
  }

  .dropdown-mask--show {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dropdown-item {
    flex: 1;
    position: relative;

    &__selected {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 30rpx;
    }

    &__content {
      position: fixed;
      left: 0;
      right: 0;
      overflow: hidden;
      top: 0;
      bottom: 0;
      z-index: 1;
    }

    /* &:not(:last-child):after {
      content: ' ';
      position: absolute;
      width: 2rpx;
      top: 36rpx;
      bottom: 36rpx;
      right: 0;
      background-color: $uni-border-color;
    } */
  }
</style>
