// 服务 - 不需要维持状态却频繁使用的方法 and 必要的封装确保在底层依赖切换时表现足够一致 and install nodejs模块
import event from './initialization/event.js'
import record from './initialization/record.js'
import cache from './initialization/cache.js'
import moment from './initialization/moment.js'
import http from './initialization/http.js'
export default{
	event,
	record,
	cache,
	moment,
	http
}