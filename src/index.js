import Vue from  'vue';
import VueRouter from 'vue-router';
import store from './store.js';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "./css/fontawesome-free-5.3.1/css/all.min.css";
import './css/index.css';
import axios from 'axios';
import router from './router.js';

//axios.defaults.baseURL = "http://your.host.com/api";
axios.defaults.baseURL = "/api";
axios.defaults.headers.common['xinfo'] = 'somexinfoheader';

var num = 0
axios.interceptors.request.use(function (config) {  //在请求发出之前进行一些操作
    num++
    store.commit("loading",true);
    return config
});

axios.interceptors.response.use(function(response){
    num--;
    if(num <=0){
        store.commit("loading",false);
    } else {
        store.commit("loading",true);
    }
    return response;
});

Vue.prototype.$axios = axios;

Vue.use(Buefy)

const app = new Vue({
    router,
    store
}).$mount('#main');
