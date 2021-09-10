import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.css'
import '../lib/icon/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(MintUI)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')