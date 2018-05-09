module.exports =  class file {
    
    static saveFile(pram,cb){
        dd.biz.cspace.saveFile({
                corpId:pram.corpId,
                url:pram.url,//"https://ringnerippca.files.wordpress.com/20.pdf",
                name:pram.name,
                onSuccess: function(data) {cb&&cb(true,data);
                },
                onFail: function(err) {cb&&cb(false,err)   
                }
            });
    }
    static previewfile(pram,cb,devtype=undefined){
        if(!devtype){
            dd.biz.cspace.preview({
                corpId:pram.corpId,
                spaceId:pram.spaceId,
                fileId:pram.fileId,
                fileName:pram.fileName,
                fileSize:pram.fileSize,
                fileType:pram.fileType,
                onSuccess: function() {
                   cb&&cb(true,data);
                },
                onFail: function(err) {cb&&cb(false,err)
                    
                }
            });
        }else{
            DingTalkPC.biz.cspace.preview({
                corpId:pram.corpId,
                spaceId:pram.spaceId,
                fileId:pram.fileId,
                fileName:pram.fileName,
                fileSize:pram.fileSize,
                fileType:pram.fileType,
                onSuccess: function() {
                   cb&&cb(true,data);
                },
                onFail: function(err) {cb&&cb(false,err)
                    
                } 
        });
    }
       
    }
    static uploadAttachment(pram,cb){
        dd.biz.util.uploadAttachment({
            image:pram.image,
            space:pram.space,
            file:pram.file,
            types:pram.types,
            onSuccess : function(result) {
               cb&&cb(true,result);
        },
            onFail : function(err) {cb&&cb(false,err)}
        });
    }
    static downloadFile(pram,cb){
          DingTalkPC.biz.util.downloadFile({
    url: pram.url,//'//static.dingtalk.com/media/lADOADTWJM0C2M0C7A_748_728.jpg_60x60q90.jpg', //要下载的文件的url
    name: pram.name,//'一个图片.jpg', //定义下载文件名字
    onProgress: function(msg){
          cb&&cb(true,msg);
    },
    onSuccess : function(result) {
         cb&&cb(true,result);
    },
    onFail : function(err) {cb&&cb(false,err)}
})
    }
 static openLocalFile(pram,cb){
        DingTalkPC.biz.util.openLocalFile({
    url: pram.url, //本地文件的url
    onSuccess : function(result) {
        console.log("result="+result);
           cb&&cb(true,result);
    },
    onFail : function(err) {cb&&cb(false,err)}
})
    }
     static isLocalFileExist(pram,cb){
       DingTalkPC.biz.util.isLocalFileExist({
    params: pram.prams,
    onSuccess : function(result) {
        cb&&cb(true,result);
    },
    onFail : function(err) {cb&&cb(false,err)}
})
    }
}