
import { GetQueryString } from 'clientConfig/util/queryurlfield';
import { getDomRouter } from 'clientConfig/util/Page_router';
const DingClient = require('clientConfig/util/DingClient');
const Storage = require('clientConfig/util/StoreData').Storage;
const DB = require('app/db');
let start = Symbol('fnstart');
let monStorage = require('./StoreData').monStorage
import { Toast } from 'saltui';
function bar(info) {
    this[start](info);
}
class Appjudge {
    /*
     *signUrl:签名的url
     *corpid：授权企业id
     *appid：授权应用id
     *apptype:应用类型0微应用1服务窗应用
     *devtype:1手机2pc
    */
    static init() {
        var t = this;
        let url = location.href.split('#', 1);
        let signUrl = encodeURIComponent(url);
        DB.Auth.get_free_login({
            url: url
        })
            .then((content) => {
                if (content && content.url == url) {
                    let corpid = content.corpId;
                    DingClient.clientConfig(content, function (isSuccessed, data) {
                        if (isSuccessed) {
                            //微应用
                            dd.runtime.permission.requestAuthCode({
                                corpId: corpid,
                                onSuccess: function (result) {
                                    //1.code获取微应用关注者信息
                                    t.loginmicro(result.code, corpid);
                                },
                                onFail: function (err) { }
                            });
                        } else {
                            console.log(JSON.stringify(data));
                        }
                    });
                } else {
                    console.log('签名的url不一致');
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    }
    //微应用获取用户信息
    static loginmicro(code, corpid) {
        DB.Auth.get_user_info({
            code,
            corpid
        })
            .then((content) => {
                if (content) return { mobile: content.mobile, talkId: content.extattr.activeTalkId }

            }).then((params) => {
                if (!params) return;
                DB.Auth.get_redis_info({
                    mobile: params.mobile,
                    talkId: params.talkId
                })
                    .then((content) => {
                        if (content) {
                            bar.call(this, content);
                        } else {
                            console.log('获取用户信息失败');
                            return;
                        }
                    });

            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    }

    static [start](info) {
        dd.ui.webViewBounce.disable();
        Storage.set('user.talkId', info.talkId)//智学号
        Storage.set('user.parentId', info.parentId)
        Storage.set('user.studentId', info.studentId)
        Storage.set('user.classId', info.classId)
        Storage.set('user.name', info.name)
        Storage.set('user.schoolId', info.schoolId)
        Storage.set('user.type', info.type)//0老师1家长
        Storage.set('user.teacherId', info.teacherId)
        Storage.set('user.mobile', info.mobile)
        getDomRouter(info.type);
    }
}

module.exports = Appjudge;