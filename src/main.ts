import Vue from 'vue';
import FastClick from 'fastclick';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import { Swiper, Pagination, Mousewheel, Autoplay } from 'swiper';
import App from './App.vue';
import router from './router';
import store from './store';

import 'swiper/swiper-bundle.css'
import 'styles/border.css';
import 'styles/reset.css';
// import 'styles/iconfont/iconfont.css';

Vue.config.productionTip = false;
FastClick.attach(document.body);

Swiper.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(Swiper));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
