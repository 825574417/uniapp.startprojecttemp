<template>
	<view class="content">
		Hmoe {{cui}}
	</view>
</template>

<script>
	import service from '../../service'
	import vuex from 'vuex'
	export default {
		computed: {
			...vuex.mapState('config', ['cui'])
		},
	}
</script>

<style>

</style>
