import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//ElementUI引用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//高德地图的引用
import "./plugin/aMap"
// px转rem
// import './assets/js/rem'

Vue.config.productionTip = false
Vue.use(ElementUI);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
