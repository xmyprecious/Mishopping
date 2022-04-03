import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'

//要给axios设置一些基础值

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login'; //这里不用路由跳转，因为跳转是在vue实例的
    } else {
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')