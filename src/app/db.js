// See https://github.com/Jias/natty-fetch for more details.
import { monStorage, Storage } from 'clientConfig/util/StoreData';
let nattyFetch = require('natty-fetch');
nattyFetch.setGlobal({
    // 配置整个项目所有接口的参数中都包含`session`字段
    query: {
        session: monStorage.get('user.session')
    }
});
const context = nattyFetch.context({
    mockUrlPrefix: '/mock/',
    urlPrefix: '/app/', 
    header: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    mock: false,
    withCredentials: false,
    traditional: true,
    urlStamp: true,
    urlMark: false,
    timeout: 0,
    fit: function (response) {
        return {
            success: response.success,
            content: response.content,
            error: {
                errorMsg: response.errorMsg,
                errorCode: response.errorCode,
                errorLevel: response.errorLevel
            }
        }
    }
});
//老师端接口
context.create('Notice', {
    get_notice_lists: {
        mockUrl: 'query/getListInfo.json',
        url: 'notice/teacher/tcrReceivedNotices'
    },
    get_sentnotice_lists: {
        mockUrl: 'query/getListInfo.json',
        url: 'notice/teacher/tcrSentNotices'
    },
    get_notice_detail: {
        url: 'notice/teacher/newNoticeDetail'
    },
    get_sentnotice_detail: {
        url: 'notice/teacher/sentNoticeDetail'
    },
    get_org_lists: {
        mockUrl: 'query/getOrgListInfo.json',
        url: 'notice/teacher/chosenNoticeMember'
    },
    deliver_notice: {
        url: 'notice/teacher/sendNoticeWithImg',
        method: 'POST'
    },
    del_sent_notice: {
        url: 'notice/teacher/tchDeleteBatchSentedNotice'
    },
    del_receive_notice: {
        url: 'notice/teacher/deleteBatchReceivedNotice'
    },
    get_notice_member: {
        url: 'notice/teacher/showNoticeMember'
    },
    get_replay_list:{
        url:'notice/teacher/getReplayList'
    },
    showNotice_member_inClass:{
        url:'notice/teacher/chosenNoticeMemberAndStudent'
    }
});
context.create('Reply', {
    teach_reply_msg: {
        url: 'notice/teacher/tchReplayNotice',//老师作为回复方
        method:"post"
    },
    teach_get_replayList:{
        url:'notice/teacher/getPersonalReplayList',
    },
    parent_reply_msg: {
        url: 'notice/parent/prtReplayNotice'
    },
    teach_reply_usermsg:{
        url:'notice/teacher/tchReplayUser',//老师作为发布方
        method: 'POST'
    }
});
//家长端接口
context.create('ParentNotice', {
    get_notice_lists: {
        url: 'notice/parent/prtReceivedNotices'
    },
    get_notice_detail: {
        url: 'notice/parent/prtNoticeDetail'
    },
    del_receive_notice: {
        url: 'notice/parent/prtDeleteBatchReceivedNotice'
    },
    get_replay_list:{
        url:'notice/teacher/getPersonalReplayList'
    },
    sent_replay_msg:{
        url:'notice/parent/prtReplayNotice'
    }
    
});
module.exports = context.api;
