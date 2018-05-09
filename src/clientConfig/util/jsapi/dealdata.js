module.exports =  class dealdata {
    static encrypt(pram,cb){
        dd.biz.util.encrypt({
           corpId:pram.corpId,//必传,
           data:pram.data,
           onSuccess: function(data) {  
               cb&&cb(true,data);  
           },
           onFail: function(err) {cb&&cb(false,err);
           }
        });
    }
    static decrypt(pram,cb){
       dd.biz.util.decrypt({
        corpId:pram.corpId,//
        data:pram.data,
        onSuccess: function(data) {
             cb&&cb(true,data);
        },
        onFail: function(err) {
             cb&&cb(false,err);
       }
     });
    }   
}