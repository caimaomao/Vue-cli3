import Vue from 'vue'
import App from './App.vue'
import ElementUI from  'element-ui';
import router from './config/router.js'
import Axios from './config/axios'
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/main.css'
import echarts from 'echarts'
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$ajax = Axios;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
