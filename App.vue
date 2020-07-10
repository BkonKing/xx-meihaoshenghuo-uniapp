<script>
  export default {
    onLaunch: function() {
      // #ifdef APP-PLUS
      //仅支持竖屏显示  
      plus.screen.lockOrientation('portrait-primary');

      let appid = plus.runtime.appid;
      if (appid && appid.toLocaleLowerCase() != "hbuilder") {
        uni.request({
          url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
          data: {
            appid: plus.runtime.appid,
            version: plus.runtime.version
          },
          success: (res) => {
            console.log('success', res);
            if (res.statusCode == 200 && res.data.isUpdate) {
              let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
              // 提醒用户更新
              uni.showModal({
                title: '更新提示',
                content: res.data.note ? res.data.note : '是否选择更新',
                success: (showResult) => {
                  if (showResult.confirm) {
                    plus.runtime.openURL(openUrl);
                  }
                }
              })
            }
          }
        })
      }

      var domModule = weex.requireModule('dom');
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont",
        'src': "url(\'https://at.alicdn.com/t/font_1908587_ppeo1ml9et.ttf\')"
      });
      // #endif
    },
    onShow: function() {
      const token = this.$store.state.access_token;
      if (token) {
        console.log(token);
      } else {
        uni.reLaunch({
          url: '/pages/login/index'
        })
      }
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  /* #ifndef APP-NVUE*/
  * {
    box-sizing: border-box;
  }

  view,
  text,
  span,
  uni-button{
    display: flex !important;
    flex-direction: column;
    position: relative;
  }

  @font-face {
    font-family: 'iconfont';
    src: url('https://at.alicdn.com/t/font_1908587_ppeo1ml9et.ttf') format('truetype');
  }

  @import './styles/uni.css';
  /* #endif */

  @import './styles/common.scss';
  @import './styles/components.scss';

  /*通用 */
  /* 表单label*/
  .form-label {
    font-size: $uni-font-size-base;
    margin-top: $uni-spacing-col-base;
    margin-bottom: $uni-spacing-col-base;
  }

  .image-box {
    flex-direction: row !important;
    flex-wrap: wrap;
  }

  /* 分割线*/
  .divider {
    padding-bottom: 20rpx;
    margin-bottom: 20rpx;
    border-bottom-width: 2rpx !important;
    border-bottom-style: solid;
    border-bottom-color: $uni-color-divider !important;
  }
</style>
