<script>
	import store from './store'
	import service from './service'
	export default {
		onLaunch() {
			// 设备信息
			let sys = store.state.config.sys;
			// 初始化
			service.load.colorui(sys, store);
			
		},
		onShow() {},
		onHide() {}
	}
</script>

<style>
	/*每个页面公共css */
	@import "@/static/css/colorui/main.css";
	@import "@/static/css/colorui/icon.css";
	@import "@/static/css/colorui/animation.css";
</style>
