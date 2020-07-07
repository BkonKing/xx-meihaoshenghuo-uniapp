<template>
	<view>
		<view class="upload-imgs">
			<view class="upload-single" v-for="(item, index) in list" :key="index" >
        <view class="upload-image__box tf-bg"></view>
				<image class="upload-image__box" :src="item" :data-src="item" mode="aspectFill" @tap="previewImg" />
				<text class="upload-del" @tap="deleteItem(index)">-</text> 
			</view>
			<view v-if="limit>list.length" class="upload-single" @tap="chooseFile">
        <view class="upload-image__box tf-bg upload-addNew">
          <text class="upload-add">+</text>
        </view>
			</view>
		</view>
		<view v-if="showLimit" class="upload-num">
			<text class="upload-num--uploaded">{{list.length}}</text>
			<text class="upload-num--limit">/{{limit}}</text>
		</view>
	</view>
</template>

<script>
	
	let toast= msg=>{
		uni.showToast({
			title: msg,
			icon:'none'
		});
	}
	
	export default {
		props: {
			uImgList: {
				type: Array, //附件列表
				default () {
					return {}
				}
			},
			uploadFileUrl: {
				type: String,
				dafault: '#' // 上传文件的服务器url
			},
			header: {
				type: Object, //上传图片到服务器时，HTTP 请求 Header
				default () {
					return {}
				}
			},
			limit: {
				type: Number, //限制可上传的图片数量
				default: 9 //这里有问题???
			},
			fileKeyName: {
				type: String,
				default: 'file' //用于在服务端通过自定义key值获取该文件数据
			},
			canUploadFile: { //是否更新
				type: Boolean,
				default: true
			},
      showLimit: { // 是否显示上传进度
        type: Boolean,
        default: false
      }
		},
		computed: {
			list: {
				get(){
					return this.uImgList
				}
			}
		},
		data() {
			return {
				imageList: [],
			};
		},
		methods: {
			//预览
			previewImg(e) {
				console.log(...this.list);
				uni.previewImage({
					current: e.target.dataset.src,
					loop: true,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success:(data)=> {
							//可以自定义分享操作
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					},
					urls: this.list   //this.imageList,保持删除了的不在
				});
			},
			//删除
			deleteItem(index) {
				uni.showModal({
					title: '提示',
					content: '确定要删除此项吗？',
					success: res => {
						if (res.confirm) {
							this.imageList.splice(index,1)
							this.list.splice(index, 1); //已经达到了数据更新的状态
							// this.$forceUpdate(); //强制更新
							this.$emit('update:uImgList', this.list); //类似双向数据绑定
						}
					}
				});
			},

			chooseFile() {
				//双重保证
				// console.log(this.list);
				if (this.list.length >= this.limit) {
					toast('已达到最大上传数量')
					return; 
				}
				
				let canUploadFile = this.canUploadFile;
				let tempFiles;
				if (canUploadFile) {
					uni.chooseImage({
						count: this.limit - this.list.length,
						sizeType: ['original', 'compressed'], 
						sourceType: ['album', 'camera'],
						success: (res) => {
							// console.log(res.tempFilePaths);
							tempFiles = res.tempFilePaths;
							
							this.imageList = this.imageList.concat(tempFiles)
							
							console.log(this.imageList);
							this.list.push(...tempFiles)//如果图片一次性就超过这个值怎么使他赋的值回退
							
							// #ifdef H5
							if (this.list.length >= this.limit) {
								this.list.splice(this.limit)
								toast('已达到最大上传数量')
								return; 
							}
							// #endif
							
							this.$emit('update:uImgList', this.list); //类似双向数据绑定,更新数据, 使用.sync修饰
							this.$forceUpdate();
							console.log(this.list);
						},
						fail:err=>{
							console.log(err);
						}
					});
						
				} 
			},
			
			upload(){
				let files=[];
				uni.showLoading({
					title: '上传中...',
					mask: false
				});
				//这里改成异步上传会不会更好(对于跨端请求,只能重复调用api)
	
				for(let i=0; i<this.list.length;i++){
					let path=this.list[i]
					let index=i.toString()
					let files={name:index,uri:path}
					console.log(path);
					uni.uploadFile({
						url: this.uploadFileUrl,
						name: this.fileKeyName,
						filePath: path, // 使用files上传数组列表,上面两者都会失效
						files:[ //使用files仅支持app与H5
							{name:index,uri:path}
						],
						success:res=>{
							uni.hideLoading()
							console.log(res);
							this.$emit('uploadSuccess', res);
							if (res.statusCode == 200) {
								//上传成功将原信息,直接删除,
								this.list.splice(i,1)
								console.log(this.list);
								console.log(res);
								this.$forceUpdate();
							} else {
								uni.hideLoading()
								toast('上传失败,请稍后重试')				
							}
						},
						fail:err=>{
							uni.hideLoading()
							toast(err.errMsg)
							console.log(err);
						}
					})
								
				}
				
			},
			
		}
	};
</script>

<style lang="scss" scoped>
	.upload-imgs {
    flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}
	.upload-del {
		position: absolute;
		width: 34rpx;
		height: 34rpx;
		background-color: $uni-color-error;
    border-radius:50%;
		color: #fff;
		top: 0;
		text-align: center;
		right: 0;
		line-height: 28rpx;
		font-size: 30rpx;
		z-index: 100;
	}
	.upload-single {
		width: 124rpx;
		height: 124rpx;
		// border-width: 2rpx;
    // border-style: solid;
    // border-color: $uni-border-color;
		margin: 0 10rpx 10rpx 0;
	}
  .upload-image__box {
    position: absolute;
    top: 20rpx;
    left: 0;
    width: 114rpx;
    height: 114rpx;
    background-color: $uni-bg-color;
  }
	.upload-addNew {
		justify-content: center;
		align-items: center;	
	}
  .upload-add {
    font-size: 40rpx;
  }
	.upload-num{
		flex-direction: row;
		font-size: $uni-font-size-sm;
	}
  .upload-num--uploaded {
    color: $uni-color-primary;
    font-size: $uni-font-size-base;
  }
  .upload-num--limit {
    color: $uni-text-color-grey;
    font-size: $uni-font-size-base;
  }
</style>
