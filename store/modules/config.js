import envDev from '../../env.dev.js'
import envProd from '../../env.prod.js'
export default{
	namespaced: true,
	state:{
		env: process.env.NODE_ENV === 'development'?envDev:envProd,
		// 通用色
		theme: {
			main: 'black',
			contrast: 'white',
			aux: 'orange'
		},
		cui: {
			StatusBar: null,
			CustomBar: null,
			Custom: null,
		},
		// 设备信息
		sys: uni.getSystemInfoSync()
	},
	mutations: {
		setColorui(state, cui){
			state.cui = cui;
		}
	}
}