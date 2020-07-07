<template>
  <dropdown-menu>
    <dropdown-item v-model="value" :list="list">
      <view slot="title">
        <view class="dropdown-item-title">
          <view class="title">自定义title</view>
        </view>
      </view>
    </dropdown-item>
  </dropdown-menu>
</template>

<script>
  import dropdownMenu from '@/components/dropdown/dropdown-menu.vue'
  import dropdownItem from '@/components/dropdown/dropdown-item.vue'
  export default {
    components: {
      dropdownMenu,
      dropdownItem
    },
    props: {},
    data() {
      return {
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
        ],
        value: 1
      }
    },
    methods: {
      choose() {
        let obj = {
          value: 'test'
        }
        this.$refs.dropdownItem.choose(obj)
      },
      close() {
        this.$refs.dropdownItem.closePopup()
      }
    }
  }
</script>

<style lang="scss" scoped>
.dropdown-item-title {
  width:650px;
  height:66rpx;
  background:rgba(255,255,255,0.3);
  border-radius:50%;
  color: #fff;
}
</style>
