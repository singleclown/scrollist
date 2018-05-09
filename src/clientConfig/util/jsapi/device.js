module.exports = class device {
    static scan(pram, cb) {
        dd.biz.util.scan({
            type: pram.type,//type为qrCode或者barCode
            onSuccess: function (data) {
                cb && cb(true, data);
            },
            onFail: function (err) {
                cb && cb(false, err)
            }
        });
    }
    static scanCard(cb) {
        dd.biz.util.scanCard({ // 无需传参数
            onSuccess: function (data) {
                cb && cb(true, data);
            },
            onFail: function (err) {
                cb && cb(false, err)
            }
        });
    }
    static watchShake(pram, cb) {
        dd.device.accelerometer.watchShake({
            sensitivity: pram.sensitivity,//振动幅度，Number类型，加速度变化超过这个值后触发shake
            frequency: pram.frequency,//采样间隔(毫秒)，Number类型，指每隔多长时间对加速度进行一次采样， 然后对比前后变化，判断是否触发shake
            callbackDelay: pram.callbackDelay,//触发『摇一摇』后的等待时间(毫秒)，Number类型，防止频繁调用
            onSuccess: function (result) {
                alert("成功");
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err) }
        });
    }
    
    static getPhoneInfo(cb) {
        dd.device.base.getPhoneInfo({
            onSuccess: function (result) {
                /*
                {
                    screenWidth: 1080, // 手机屏幕宽度
                    screenHeight: 1920, // 手机屏幕高度
                    brand:'Mi'， // 手机品牌
                    model:'Note4', // 手机型号
                    version:'7.0'. // 版本
                    netInfo:'wifi' , // 网络类型 wifi／4g／3g 
                    operatorType :'xx' // 运营商信息
                }
                */
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err) }
        });
    }
}