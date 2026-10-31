<template>
	<!--骨架（HTML）-->
	<view class="userLayout pageBg">

		<navigator url="/pages/login/login">
			<view class="userinfo">
				<view class="avetar">
					<image class="avetarimage" src="/static/icon/individual.png" mode="aspectFill"></image>
				</view>
				<view class="name">请先登录</view>
				<view class="address">来自于：？？</view>
			</view>
		</navigator>


		<view class="list">


			<view class="row" @click="MineLists('download')" hover-class="row-active">
				<view class="left">
					<image class="image" src="/static/icon/Download.png" mode="aspectFit"></image>
					<view class="text">我的下载</view>
				</view>
				<view class="right">
					<view class="text">33</view>
					<image class="image" src="/static/icon/chevron-right.png" mode="aspectFit"></image>
				</view>
			</view>

			<view class="row" @click="MineLists('setting')" hover-class="row-active">
				<view class="left">
					<image class="image" src="/static/icon/Setting.png" mode="aspectFit"></image>
					<view class="text">系统设置</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<image class="image" src="/static/icon/chevron-right.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>

		<view class="list">

			<view class="row" @click="MineLists('data')" hover-class="row-active">
				<view class="left">
					<image class="image" src="/static/icon/PersonalProfile.png" mode="aspectFit"></image>
					<view class="text">个人资料</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<image class="image" src="/static/icon/chevron-right.png" mode="aspectFit"></image>
				</view>
			</view>

			<view class="row" @click="MineLists('contact')" hover-class="row-active">
				<view class="left">
					<image class="image" src="/static/icon/Contact.png" mode="aspectFit"></image>
					<view class="text">联系客服</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<image class="image" src="/static/icon/chevron-right.png" mode="aspectFit"></image>
				</view>
			</view>

			<view class="row" @click="MineLists('We')" hover-class="row-active">
				<view class="left">
					<image class="image" src="/static/icon/AboutUs.png" mode="aspectFit"></image>
					<view class="text">关于我们</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<image class="image" src="/static/icon/chevron-right.png" mode="aspectFit"></image>
				</view>
			</view>

		</view>



	</view>

</template>

<script>
	import Lists from "@/components/Lists/Lists.vue"

	export default {
		components: {
			Lists: Lists
		},
		data() {
			return {}
		},
		onLoad() {},
		login() {
			//console.log("hhhhhhhhhhhhhhhhhhhhh")
			uni.navigateTo({
				url: '@/pages/tabbar/mine/login'
			})
		},
		methods: {
			MineLists(type) {
				//console.log('当前类型：', type)
				if (type === "download") {
					uni.navigateTo({
						url: "/pages/MineList/download"
					})
				} else if (type === 'setting') {
					uni.navigateTo({
						url: "/pages/MineList/setting"
					})
				} else if (type === 'data') {
					uni.navigateTo({
						url: "/pages/MineList/data"
					})
				} else if (type === 'contact') {
					uni.navigateTo({
						url: "/pages/MineList/contact"
					})
				} else if (type === 'We') {
					uni.navigateTo({
						url: "/pages/MineList/We"
					})
				}
			}
		}
	}
</script>


<style scoped lang="scss">
	/*样式（CSS）*/
	.userLayout {



		.userinfo {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 50rpx 0;

			.avetar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;

				.avetarimage {
					width: 100%;
					height: 100%;
				}
			}

			.name {
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}

			.address {
				font-size: 28rpx;
				color: #aaa;

			}

		}

		.list {
			width: 690rpx;
			margin: 50rpx auto;
			border: 1px solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
			background: #fff;

			.row {
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;
				height: 100rpx;
				//底部加一条 1px 浅灰色分割线，做列表分隔
				border-bottom: 1px solid #eee;
				align-items: center;
				//过渡动画，**只监听 transform 和 opacity 两个属性**
				transition: transform 0.2s ease-out, opacity 0.2s ease-out;

				.left {
					display: flex;
					align-items: center;

					.text {
						padding: 20rpx;
						color: #666;
					}

				}

				.right {
					display: flex;
					align-items: center;

					.image {
						padding: 10rpx;
					}

					.text {
						font-size: 28rpx;
						color: #666;
					}
				}

				.image {
					height: 40rpx;
					width: 40rpx;
				}
			}

			.row-active {
				transform: scale(0.97);
				opacity: 0.88;
			}
		}

	}
</style>