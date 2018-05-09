require('./app.styl');
import 'babel-polyfill'
import 'whatwg-fetch';
import { getDomRouter } from 'clientConfig/util/Page_router';
const Storage = require('clientConfig/util/StoreData').Storage;
const Appjudge = require('clientConfig/util/AppJudge');
if (__LOCAL__) {
    getDomRouter(0);
} else {
    Appjudge.init();
}