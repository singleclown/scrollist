const Actions = require('./actions');
const DB = require('app/db');
import { Toast } from 'saltui';
import { ready } from 'clientConfig/util/queryurlfield'
import { monStorage, Storage } from 'clientConfig/util/StoreData';
const device = require('clientConfig/util/jsapi/device');
module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
    },
    onFetch: function (pageNum, props, success, error) {
        let t = this;
        
        DB.Reply.teach_get_replayList({
            pageIndex: pageNum,
            schoolId: schoolId,
            noticeId: noticeId,
            replayId: teacherId,
            userType: userType,
        })
            .then((content) => {
                let schoolId = content.check.schoolId;
                content = content.data.replayList;             
                var list = [];
                var obj = {};
                if (content && content.length > 0) {
                    for (let item of content) {
                        obj["badge"] = false;
                        obj["title"] = item.name;
                        obj["subtitle"] = item.replayDate;
                        obj["replayId"] = item.replayId;
                        obj["readStatus"]=item.readStatus;
                        obj["replayType"]=item.replayType;
                        obj["userType"]=item.userType;
                        obj["imgurl"]=item.imgurl;
                        obj["content"] = item.content;
                        list.push(obj);
                        obj = {};
                    }
                }
                const hasNoMore = list.length < props.pageSize;
                t.data.listData = list;
                if (success){
                    success(hasNoMore, list);
                }else if (!content||!success) {
                    error();
                } 
                    
                    
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    //作为发布方回复
    onReplyusermsg: function (params, cb) {
        ready(() => { device.showPreloader() })
        DB.Reply.teach_reply_usermsg({
            schoolId:schoolId,
            noticeId:noticeId,
            replayId:teacherId,
            content: params.text,
            userType:userType
        })
            .then((content) => {
                if (content.code == '1') {
                    ready(() => { device.hidePreloader() })
                    cb&&cb();
                }

            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    updateComponent: function () {
        this.trigger(this.data);
    }
});
