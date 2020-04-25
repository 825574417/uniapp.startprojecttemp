<template>
	<mescroll-uni ref="mescrollRef" :bottom="_bottom" :top="_top" @init="mescrollInit" @down="downCallback" @up="upCallback"
	 :down="_downOption" :up="_upOption">
		GOGO
	</mescroll-uni>
</template>

<script>
	// doc http://www.mescroll.com/uni.html?v=20200315#mescrolluni
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import vuex from 'vuex'
	export default {
		props: ['bottom', 'top', 'down', 'up'],
		mixins: [MescrollMixin], // 使用mixin
		components: {
			MescrollUni
		},
		computed: {
			...vuex.mapState('config', ['cui']),
			_bottom() {
				if (this.bottom) {
					switch (typeof this.bottom) {
						case 'boolean':
							return '50px';
							break;
						case 'string':
							return this.bottom;
							break;
						case 'number':
							return this.bottom + 'px';
							break;
					}
				} else {
					return '0rpx';
				}
			},
			_top() {
				if (this.top) {
					switch (typeof this.top) {
						case 'boolean':
							return this.cui.CustomBar + 'px';
							break;
						case 'string':
							return this.top;
							break;
						case 'number':
							return this.top + 'px';
							break;
					}
				} else {
					return '0rpx';
				}
			},
			_downOption() {
				if (this.down) {
					return { ...this.default.downOption,
						...this.down
					};
				} else {
					return this.default.downOption;
				}
			},
			_upOption() {
				if (this.up) {
					return { ...this.default.upOption,
						...this.up
					};
				} else {
					return this.default.upOption;
				}
			}
		},
		data() {
			return {
				// 列表数据
				dataList: [],
				default: {
					upOption: {},
					downOption: {}
				}
			}
		},
		methods: {
			downCallback(mescroll) {
				this.$emit('down', mescroll);
			},
			upCallback(mescroll) {
				this.$emit('up', mescroll);
			}
		}
	}
</script>

<style>
</style>
