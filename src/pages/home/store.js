const Actions = require('./actions');
const DB = require('app/db.js');
import { Toast } from 'saltui';
import { monStorage, Storage } from 'clientConfig/util/StoreData';
module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        replayList: []
    },
    //已发送的详情
    onFetchSent: function (params, cb) {
        let t = this;
        DB.Notice.get_sentnotice_detail({
            schoolId: params.schoolId,
            noticeId: params.noticeId
        })
            .then((content) => {
                if (content.code == '1') {
                    content = content.data;
                    if (JSON.stringify(content) != '{}') {
                        if (content.fileList && content.fileList instanceof Array && content.fileList.length > 0) {

                            for (let item of content.fileList) {
                                let { url, fileName, type, size } = item;
                                item.imgUrl = "https://www.zxjydev.com" + url;
                                item.title = fileName;
                            }
                        }
                        this.data = {
                            content: content,
                            replayFlag: content.replayFlag,
                            readedUserCount: content.readedUserCount,
                            fileList: content.fileList,
                            noticeMsg: content.noticeMsg,
                            sender: content.releaseName,
                            noticeRang: content.noticeRang,
                            title: content.noticeTitle,
                            senderData: content.noticeTime,
                            sentUserCount: content.sentUserCount,
                            noticeType: content.noticeType
                        }
                        this.updateComponent();
                        cb && cb(content.replayFlag);
                    }
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    //老师端已发送详情获取回复条目
    onGetReplayList: function (params, cb) {
        let t = this;
        DB.Notice.get_replay_list({
            schoolId: params.schoolId,
            noticeId: params.noticeId,
            pageIndex: 1
        })
            .then((content) => {
                if (content.code == '1') {
                    content = content.data;
                    if (JSON.stringify(content) != '{}') {
                        this.data.sentReplayList = content.replayList;
                        this.updateComponent();
                    }
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    onTeachReply: function (params, cb) {
        let t = this;
        DB.Reply.teachReply({
            schoolId: params.schoolId,
            noticeId: params.noticeId,
            content: params.content,
            replayId: params.replayId
        })
            .then((content) => {
                if (content.code == '1') {
                    content = content.data;
                    if (JSON.stringify(content) != '{}') {
                        this.updateComponent();
                    }
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    onParentReply: function (params, cb) {
        let t = this;
        DB.Notice.get_sentnotice_detail({
            schoolId: params.schoolId,
            noticeId: params.noticeId
        })
            .then((content) => {
                if (content.code == '1') {


                    this.updateComponent();

                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    onTeachReplyMsg: function (params, cb) {
        let t = this;
        DB.Reply.teach_reply_msg({
            schoolId: params.data.schoolId,
            noticeId: params.data.noticeId,
            content: params.content,
            replayId: Storage.get('user.teacherId')
        })
            .then((content) => {
                if (content.code == '1') {
                   cb&&cb()
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统异常'
                });
            });
    },
    //查看发布对象
    onFetchNoticeMember: function (params, cb) {
        let t = this;
        DB.Notice.get_notice_member({
            schoolId: params.schoolId,
            noticeId: params.noticeId
        })
            .then((content) => {
                if (content.code == '1') {
                     this.data.listData = content.data.dataList;
                     cb&&cb(this.data.listData)
                    // this.updateComponent();
                }else{
                    cb&&cb()
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
