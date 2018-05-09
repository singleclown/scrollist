module.exports = class base {
    static getversion(cb) {
        cb && cb(dd.version);
    }
    static getmicrocode(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.runtime.permission.requestAuthCode({
                corpId: pram.corpId,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        } else {
            DingTalkPC.runtime.permission.requestAuthCode({
                corpId: pram.corpId,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        }
    }
    static getservicecode(pram, cb) {
        dd.channel.permission.requestAuthCode({
            corpId: pram.corpId,
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static getoperatecode(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.runtime.permission.requestOperateAuthCode({
                corpId: pram.corpId,
                agentId: pram.agentId,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            })
        } else {
            DingTalkPC.runtime.permission.requestOperateAuthCode({
                corpId: pram.corpId,
                agentId: pram.agentId,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            })
        }

    }
    static getuuid(cb) {
        dd.device.base.getUUID({
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static getInterface(cb) {
        dd.device.base.getInterface({
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static nfcRead(cb) {
        dd.device.nfc.nfcRead({
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static nfcWrite(pram, cb) {
        dd.device.nfc.nfcWrite({
            content: pram.content,
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) {
                cb && cb(false, err);
            }
        });
    }
    /*apps-iOS:应用scheme;Android:应用包名*/
    static checkInstalledApps(pram, cb) {
        dd.device.launcher.checkInstalledApps({
            apps: pram.apps,
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    /*apps-iOS:应用scheme;Android:应用包名
    *activity:仅限Android，打开指定Activity，可不传。如果为空，就打开App的Main入口Activity-非必须
    */
    static launchApp(pram, cb) {
        dd.device.launcher.launchApp({
            app: pram.app,
            activity: pram.activity,
            onSuccess: function (data) {
                cb && cb(true, data);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static getNetworkType(cb) {
        dd.device.connection.getNetworkType({
            onSuccess: function (data) {
                cb && cb(true, data);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static openLink(url,cb) {
        dd.biz.util.openLink({
            url: url,//要打开链接的地址
            onSuccess: (data) => {
                cb && cb(true, data);
            },
            onFail: (err) => { cb && cb(false, err) }
        });
    }
}