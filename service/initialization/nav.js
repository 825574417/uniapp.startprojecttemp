import Qs from './qs.js'

function createNav(url) {
	return (querys = {}, type = 'navigateTo', options = {}) => {
		let data = {
			url: url + (url.indexOf("?") != -1 ? '&' : '?') + Qs.stringify(querys),
		}
		uni[type](data);
	}
}

// 导航服务
export default {
	// 去首页
	toHome: createNav('/pages/index/index'),
	// 返回上一页
	back(){
		if(getCurrentPages().length == 1){
			this.toHome({}, 'redirectTo');
		}else{
			uni.navigateBack({
				delta: 1
			});
		}
	}
}
