module.exports =  class conver {
    static pickConversation(pram,cb){
        dd.biz.chat.pickConversation({
            corpId: pram.corpId, //企业id
            isConfirm:pram.isConfirm, //是否弹出确认窗口，默认为true
            onSuccess : function(result) {
               cb&&cb(true,result); 
        },
            onFail : function(err) {cb&&cb(false,err);}
        });
    }
    static chooseConversation(pram,cb){
        dd.biz.chat.chooseConversationByCorpId({
            corpId: pram.corpId, //企业id
            onSuccess : function(result) { cb&&cb(true,result);
        },
            onFail : function(err) {cb&&cb(false,err);}
        });
    }
    static toConversation(pram,cb){
        dd.biz.chat.toConversation({
            corpId: pram.corpId, //企业id
            chatId:pram.chatId,//会话Id
            onSuccess : function(result) {cb&&cb(true,result);},
            onFail : function(err) {cb&&cb(false,err);}
        });
    }
    static postding(pram,cb,devtype=undefined){
        if(!devtype){
          dd.biz.ding.post({
            users : pram.users,//用户列表，工号
            corpId:pram.corpId, //企业id
            type: pram.type, //附件类型 1：image  2：link
            alertType: pram.alertType,
            alertDate: pram.alertDate,
            attachment: pram.attachment, //附件信息
            text: pram.text, //消息
            onSuccess : function(result) {
                 cb&&cb(true,result);
            },
            onFail : function(err) {cb&&cb(false,err);}
        });
        }else{
           DingTalkPC.biz.ding.post({
            users : pram.users,//用户列表，工号
            corpId:pram.corpId, //企业id
            type: pram.type, //附件类型 1：image  2：link
            alertType: pram.alertType,
            alertDate: pram.alertDate,
            attachment: pram.attachment, //附件信息
            text: pram.text, //消息
            onSuccess : function(result) {
                 cb&&cb(true,result);
            },
            onFail : function(err) {cb&&cb(false,err);}
        }); 
        }
       
    }
    // static getInterface(cb){
    //     dd.device.base.getInterface({
    //         onSuccess : function(result) {
    //           cb&&cb(true,result);
    //         },
    //        onFail : function(err) {cb&&cb(false,err);}
    //     });    
    // }
    static call(pram,cb){
        dd.biz.telephone.call({
            users: pram.users, //用户列表，工号
            corpId: pram.corpId, //企业id
            onSuccess : function(result) {cb&&cb(true,result);},
            onFail : function(err) {cb&&cb(false,err);}
        });   
    }
    
}