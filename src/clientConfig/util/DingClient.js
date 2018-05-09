class DingClient {
	static clientConfig(param, callback) {
		var apiList = require('../apilist_agent.json');
		let apiListArr = [];
		for (var key in apiList) {
			if (apiList[key])
				apiListArr.push(key);
		};
		dd.config({
			agentId: parseInt(param.agentId),
			corpId: param.corpId,
			timeStamp: param.timeStamp.toString(),
			nonceStr: param.nonceStr,
			signature: param.signature,
			type: 0,
			jsApiList: apiListArr
		});
		dd.ready(function () {
			if (callback) {
				let option = "JSAPI验证成功";
				console.log(option)
				callback(true, option);
			}
		});
		dd.error(function (error) {
			if (callback) {
				callback(false, error);
			}
		});
	}
	/*methodName:string钉钉的jsapi方法名
	*pram:参数
	*cb：方法回调
	*/
	static clientApi(method, prams, cb) {
		var callback = {
			onSuccess: function (result) { cb && cb(true, result); },
			onFail: function (error) { cb && cb(false, error); }
		};
		var object = Object.assign(callback, prams);
		eval('dd.' + method + '(object)');
	}
}
module.exports = DingClient;