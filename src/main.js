import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.css'
import '../lib/icon/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueResource from 'vue-resource'
import VuePreview from 'vue-preview'
import store from './store/store.js'



var dayjs = require('dayjs')

Vue.use(Vant);
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(VuePreview)



Vue.config.productionTip = false

// vue-resource请求方法
Vue.http.options.emulateJSON = true
Vue.http.options.root = "http://www.liulongbin.top:3005"

Vue.filter('newTime', (val) => {
    return dayjs(val).format("YYYY-MM-DD HH:mm:ss")
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')