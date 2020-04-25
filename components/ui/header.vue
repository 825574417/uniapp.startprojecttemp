<template>
	<view class="cu-bar" :style="{minHeight: cui.CustomBar+'px', paddingTop: cui.StatusBar+'px'}" :class="'bg-'+theme.main">
		<view @tap="back" class="action">
			<text :class="canBack?'cuIcon-back':'cuIcon-homefill'"></text>
		</view>
		<view class="content text-bold">
			{{title}}
		</view>
		<view class="action">
			<!-- <text class="cuIcon-cardboardfill text-grey"></text> -->
			<!-- <text class="cuIcon-recordfill text-red"></text> -->
		</view>
	</view>
</template>

<script>
	import vuex from 'vuex'
	import { Nav } from '@/service'
	export default{
		props:['title'],
		data(){
			return {
				canBack: true,
			};
		},
		mounted() {
			this.canBack = getCurrentPages().length > 1?true:false;
		},
		methods: {
			back(){
				Nav.back();
			}
		},
		computed: {
			...vuex.mapState('config', ['theme', 'cui'])
		}
	}
</script>

<style>
</style>
