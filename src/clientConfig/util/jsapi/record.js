module.exports =  class record {
    static startRecord(cb){
        dd.device.audio.startRecord({
    onSuccess : function (result) {
        cb&&cb(true,result);
    },
    onFail : function (err) {
        cb&&cb(false,err)
    }
});
    }
    static stopRecord(pram,cb){
        dd.device.audio.stopRecord({
    onSuccess : function(result){
        cb&&cb(true,result);
    },
    onFail : function (err) {cb&&cb(false,err)
    }
});
    }
    static onRecordEnd(pram,cb){
        dd.device.audio.onRecordEnd({
    onSuccess : function(result) {
        cb&&cb(true,result);
    },
    onFail : function (err) {cb&&cb(false,err)
    }
});
    }
    static audiodownload(pram,cb){
        dd.device.audio.download({
    mediaId : pram.mediaId,//"@lATOCLhLfc46kUl8zlUmRlM",
    onSuccess : function(result) {
        cb&&cb(true,result);
    },
    onFail : function (err) {cb&&cb(false,err)
    }
});
    }
    static audioplay(pram,cb){
        dd.device.audio.play({
    localAudioId : pram.localAudioId,//"localAudioId",
    onSuccess : function (result) {
        cb&&cb(true,result);
    },
    onFail : function (err) {cb&&cb(false,err)
    }
});   
    }
    static audiopause(cb){
        dd.device.audio.pause({
    localAudioId : pram.localAudioId,//"localAudioId",
    onSuccess : function(result) {
        cb&&cb(true,result);
    },
    onFail : function(err) {cb&&cb(false,err)
    }
});   
    }
    static audioresume(pram,cb){
        dd.device.audio.resume({
    localAudioId : pram.localAudioId,//"localAudioId",
    onSuccess : function(result) {
        cb&&cb(true,result);
    },
    onFail : function(err) {cb&&cb(false,err)
    }
});  
    }
    static audiostop(pram,cb){
        dd.device.audio.stop({
    localAudioId : pram.localAudioId,//"localAudioId",
    onSuccess : function (result) {
        cb&&cb(true,result);
    },
    onFail : function () {cb&&cb(false,err)
    }
});    
    }
    static audioonPlayEnd(pram,cb){
        dd.device.audio.onPlayEnd({
    onSuccess : function (result) {
        cb&&cb(true,result);
    },
    onFail : function (err) {cb&&cb(false,err)
    }
}); 
    }
    static audiotranslateVoice(pram,cb){
      dd.device.audio.translateVoice({
    mediaId : pram.mediaId,//"@lATOCLhLfc46kUl8zlUmRlM",
    duration : pram.duration,//5.0,
    onSuccess : function (res) {
        cb&&cb(true,result);
    },
    onFail : function (err) {cb&&cb(false,err)
    }
}); 
}   
}