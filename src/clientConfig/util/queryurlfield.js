import { monStorage, Storage } from 'clientConfig/util/StoreData';

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
const ready = (fn) => {
    dd.ready(fn)
}
export { GetQueryString,ready }