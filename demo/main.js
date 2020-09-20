import Vue from 'vue'
import App from './App.vue'
import VueConciseCarousel from '../src/VueConciseCarousel'

Vue.config.productionTip = false

Vue.component('carousel', VueConciseCarousel.Carousel)
Vue.component('slide', VueConciseCarousel.Slide)

new Vue({
  render: h => h(App),
}).$mount('#app')
