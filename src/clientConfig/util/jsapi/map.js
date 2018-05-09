module.exports =  class map {
   
    static geolocation(pram,cb){
        dd.device.geolocation.get({
    targetAccuracy : pram.targetAccuracy,
    coordinate : pram.coordinate,
    withReGeocode : pram.withReGeocode,
    onSuccess : function(result) {
       cb&&cb(true,result);
    },
    onFail : function(err) {cb&&cb(false,err) }
});
    }
    static getlocate(pram,cb){
        dd.biz.map.locate({
    latitude: pram.latitude,//39.903578, // 纬度
    longitude: pram.longitude,//116.473565, // 经度
    onSuccess: function (result) {
        cb&&cb(true,result);
    },
    onFail: function (err) {
        cb&&cb(false,err)
    }
});
    }
    static getpoisearch(pram,cb){
        dd.biz.map.search({
    latitude: pram.latitude,//39.903578, // 纬度
    longitude: pram.longitude,//116.473565, // 经度
    scope: 500, // 限制搜索POI的范围；设备位置为中心，scope为搜索半径
    onSuccess: function (poi) {
       cb&&cb(true,poi);
    },
    onFail: function (err) {
        cb&&cb(false,err)
    }
     });
    }
    static getmapview(pram){
        dd.biz.map.view({
    latitude: pram.latitude, // 纬度
    longitude: pram.longitude, // 经度
    title:pram.title // 地址/POI名称
});
    }
   
}