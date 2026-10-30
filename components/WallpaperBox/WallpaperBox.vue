<template>
	<view class="WallpaperBox">
		<view>
			<view class="CommonTitle">

				<view class="slot-name">
					<slot name="name"></slot>
				</view>

				<view class="slot-custom">
					<slot name="custom"></slot>
				</view>

			</view>

			<view class="content">
				<scroll-view class="scroll-view" scroll-x :show-scrollbar="false">
					<view class="all-picture-box" v-for="item in arr" :key="item._id">
						<image class="image" :src="item.imgurl" mode="aspectFill" @click="onPreview(item.imgurl)">
						</image>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "WallpaperBox",
		props: {
			arr: {
				type: Array,
				default () {
					return []
				}
			}
		},

		methods: {
			//`onPreview`：自定义事件函数名；
			//`uni.previewImage(Object)`，调用系统图片预览组件。
			//`current`：打开预览时**默认显示第几张图片**
			onPreview(currentImgUrl) {
				//console.log("预览地址：", currentImgUrl)
				const urlList = this.arr.map(item => item.imgurl)
				uni.previewImage({
					current: currentImgUrl,
					urls: urlList
				})
			},
		},

		mounted() {
			//console.log("WallpaperBox组件挂载完成")
		},

		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	.WallpaperBox {
		padding-top: 30rpx;

		.content {
			width: 720rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;

			.scroll-view {
				white-space: nowrap;

				.all-picture-box {
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;

					.image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}

					/* #ifdef H5 */
					:last-child {
						margin-right: 30rpx;
					}

					/* #endif */

					/* #ifdef MP-WEIXIN */
					.is-last {
						margin-right: 30rpx;
					}

					/* #endif */
				}
			}
		}
	}

	.CommonTitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		height: 30rpx;

		.slot-name {
			width: 200rpx;
			font-size: 40rpx;
			font-weight: 700;
			line-height: 1.2;
		}

		.slot-custom {
			width: 110rpx;
		}

	}
</style>