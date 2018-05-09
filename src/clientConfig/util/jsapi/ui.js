module.exports = class ui {
    static setnavbgcolor() {
        self.location.href = "http://192.168.1.134:3000?dd_nav_bgcolor=FF5E97F6/?corpid=ding5d6c09e4312587d335c2f4657eb6378f#/?_k=lrhv9j";
        alert(location.href);
        self.location.assign(self.location.href);
        alert("1" + location.href);
    }
    static setinput(pram, cb) {
        dd.ui.input.plain({
            placeholder: pram.placeholder,//'说点什么吧', //占位符
            text: pram.text, //默认填充文本
            onSuccess: function (data) {
                cb && cb(true, data);
            },
            onFail: function (err) {
                cb && cb(false, err)
            }
        });
    }
    static setrefreshstart(cb) {
        dd.ui.pullToRefresh.enable({
            onSuccess: function (data) {
                data = '开始刷新';
                cb && cb(true, data);
            },
            onFail: function (err) {
                cb && cb(false, err)
            }
        });
    }

    static setRefreshstop() {
        dd.ui.pullToRefresh.stop()
    }
    static setBounceen() {
        dd.ui.webViewBounce.enable()
    }
    static setBouncedis() {
        dd.ui.webViewBounce.disable()
    }
    static setTitle(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.biz.navigation.setTitle({
                title: pram.title,// '邮箱正文',//控制标题文本，空字符串表示显示默认文本
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        } else {
            DingTalkPC.biz.navigation.setTitle({
                title: pram.title,// '邮箱正文',//控制标题文本，空字符串表示显示默认文本
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        }

    }
    static setIcon(pram, cb) {
        dd.biz.navigation.setIcon({
            showIcon: pram.showIcon,//是否显示icon
            iconIndex: pram.iconIndex,//显示的iconIndex,如上图
            onSuccess: function (result) {
                result = "icon点击回调";
                cb && cb(true, result);
            },
            onFail: function (err) {
                cb && cb(false, err);
            }
        });
    }
    static setLeft(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.biz.navigation.setLeft({
                show: pram.show,//控制按钮显示， true 显示， false 隐藏， 默认true
                control: pram.control,//是否控制点击事件，true 控制，false 不控制， 默认false
                showIcon: pram.showIcon,//是否显示icon，true 显示， false 不显示，默认true； 注：具体UI以客户端为准
                text: pram.text,//控制显示文本，空字符串表示显示默认文本
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        } else {
            DingTalkPC.biz.navigation.setLeft({
                show: pram.show,//控制按钮显示， true 显示， false 隐藏， 默认true
                control: pram.control,//是否控制点击事件，true 控制，false 不控制， 默认false
                showIcon: pram.showIcon,//是否显示icon，true 显示， false 不显示，默认true； 注：具体UI以客户端为准
                text: pram.text,//控制显示文本，空字符串表示显示默认文本
                onSuccess: function (result) {
                    cb && cb(true, result);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        }

    }
    static close(cb) {
        dd.biz.navigation.close({
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        });
    }
    static setNavigationRight(pram, cb) {
        dd.biz.navigation.setRight({
            show: pram.show,//控制按钮显示， true 显示， false 隐藏， 默认true
            control: pram.control,//是否控制点击事件，true 控制，false 不控制， 默认false
            text: pram.text,//控制显示文本，空字符串表示显示默认文本
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(true, err); }
        });
    }
    static setBarColors(pram, cb) {
        alert('1');
        dd.ui.progressBar.setColors({
            colors: pram.colors, //array[number] 进度条变化颜色，最多支持4个颜色
            onSuccess: function (data) {
                cb && cb(true, data);
            },
            onFail: function (err) {
                cb && cb(false, err);
            }
        });
    }
    static navigationquit(pram, cb) {
        DingTalkPC.biz.navigation.quit({
            message: pram.message,//"quit message",//退出信息，传递给openModal或者openSlidePanel的onSuccess函数的result参数
            onSuccess: function (result) {
                cb && cb(true, result);
            },
            onFail: function (err) { cb && cb(false, err); }
        })
    }

}