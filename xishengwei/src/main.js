// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.min.css'
import ElementUI from 'element-ui'
import './common/css/global.css'
import './common/css/page.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
