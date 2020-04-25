// doc https://ext.dcloud.net.cn/plugin?id=392
import request from '../../js_sdk/luch-request/request.js'
import store from '../../store'
let http = new request();
// 根据环境变量获取跟请求域名
http.config.baseUrl = store.state.config.env.baseUrl;
// 只允许 statusCode 200 通过，其他视为异常
http.validateStatus = (statusCode) => {
     return statusCode === 200;
}
// 请求拦截器
http.interceptor.request((config, cancel) => {
	// cancel 可以取消本次请求


	return config;
});
// 响应拦截器
http.interceptor.response((response) => {
	// status === 200
	return response;
}, (response) => {
	// status !== 200
	
	return response;
});
export default http;
