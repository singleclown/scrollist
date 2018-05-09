module.exports = class notice {

    static alert(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.device.notification.alert({
                message: pram.message,
                title: pram.title,//可传空
                buttonName: pram.buttonName,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            });
        } else {
            DingTalkPC.device.notification.alert({
                message: pram.message,
                title: pram.title,//可传空
                buttonName: pram.buttonName,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            });
        }

    }
    static confirm(pram, cb, devtype) {
        if (!devtype) {
            dd.device.notification.confirm({
                message: pram.message,
                title: pram.title,
                buttonLabels: pram.buttonLabels,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            });
        } else {
            DingTalkPC.device.notification.confirm({
                message: pram.message,
                title: pram.title,
                buttonLabels: pram.buttonLabels,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            });
        }

    }
    static prompt(pram, cb, devtype) {
        if (!devtype) {
            dd.device.notification.prompt({
                message: pram.message,
                title: pram.title,
                buttonLabels: pram.buttonLabels,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            });
        } else {
            DingTalkPC.device.notification.prompt({
                message: pram.message,
                title: pram.title,
                buttonLabels: pram.buttonLabels,
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            });
        }

    }
    static vibrate(pram, cb) {
        dd.device.notification.vibrate({
            duration: pram.duration, //震动时间，android可配置 iOS忽略
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err) }
        })
    }
    static showPreloader(pram, cb) {
        dd.device.notification.showPreloader({
            text: pram.text,//"使劲加载中..", //loading显示的字符，空表示不显示文字
            showIcon: pram.showIcon, //是否显示icon，默认true
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err) }
        })
    }
    static toast(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.device.notification.toast({
                icon: pram.icon, //icon样式，有success和error，默认为空 0.0.2
                text: pram.text, //提示信息
                duration: pram.duration, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
                delay: pram.delay, //延迟显示，单位秒，默认0
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            })
        } else {
            DingTalkPC.device.notification.toast({
                icon: pram.icon, //icon样式，有success和error，默认为空 0.0.2
                text: pram.text, //提示信息
                duration: pram.duration, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
                delay: pram.delay, //延迟显示，单位秒，默认0
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            })
        }
    }
    static actionSheet(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.device.notification.actionSheet({
                title: "谁是最棒哒？", //标题
                cancelButton: '取消', //取消按钮文本
                otherButtons: ["孙悟空", "猪八戒", "唐僧", "沙和尚"],
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            })
        } else {
            DingTalkPC.device.notification.actionSheet({
                title: "谁是最棒哒？", //标题
                cancelButton: '取消', //取消按钮文本
                otherButtons: ["孙悟空", "猪八戒", "唐僧", "沙和尚"],
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err) }
            })
        }

    }
    static modal(pram, cb) {
        dd.device.notification.modal({
            image: pram.image,//"http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg", // 标题图片地址
            title: pram.title,//"2.4版本更新", //标题
            content: pram.image,//"1.功能更新2.功能更新;", //文本内容
            buttonLabels: pram.buttonLabels,//["了解更多","知道了"],// 最多两个按钮，至少有一个按钮。
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err) }
        })
    }

}