<template>
	<layout-page>
		<!-- 头部 -->
		<view slot="header">
			<ui-header title="首页"></ui-header>
			<!-- 可以放置紧贴在头部底部的块 -->
		</view>
		<!-- 内容 -->
		<view slot="content">
			<ui-mescroll-uni @down="down" :up="{ use: false }" :top="true"></ui-mescroll-uni>
		</view>
		<!-- 底部 -->
		<ui-footer slot="footer"></ui-footer>
	</layout-page>
</template>

<script>
	import { Nav } from '../../service'
	import vuex from 'vuex'
	import uiHeader from '../../components/ui/header.vue'
	import uiFooter from '../../components/ui/footer.vue'
	import uiMescrollUni from '../../components/ui/mescrollUni.vue'
	export default {
		methods: {
			down(mescroll){
				mescroll.endSuccess();
			}
		},
		computed: {
			...vuex.mapState('config', ['cui'])
		},
		components: {
			uiHeader,
			uiFooter,
			uiMescrollUni
		}
	}
</script>

<style>

</style>
