<template>
	<view :style="style" class="flex flex-direction">
		<view class="layout-page-header">
			<slot name="header"></slot>
		</view>
		<!-- content -->
		<view class="layout-page-content">
			<slot name="content"></slot>
		</view>
		<!-- 扩展 模态框/加载框 -->
		<view class="layout-page-footer">
			<view class="layout-page-footer-box">
				<slot name="footer"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	import vuex from 'vuex'
	export default {
		computed: {
			...vuex.mapState('config', ['sys', 'cui']),
			style() {
				return {
					width: this.sys.windowWidth + 'px',
					height: this.sys.windowHeight + 'px',
				};
			}
		}
	}
</script>

<style>
	.layout-page-header {
		position: fixed;
		width: 100%;
		top: 0rpx;
		z-index: 49;
	}

	.layout-page-content {
		flex: 1;
		position: relative;
		z-index: 1;
	}

	.layout-page-footer {
		position: fixed;
		width: 100%;
		height: 0rpx;
		bottom: 0rpx;
		z-index: 49;
	}

	.layout-page-footer-box {
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		width: 100%;
	}
</style>
