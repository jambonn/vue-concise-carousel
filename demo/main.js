import Vue from 'vue'
import App from './App.vue'
import { Carousel, Slide } from '../src/lib-entry'

Vue.config.productionTip = false

Vue.component(Carousel.name, Carousel)
Vue.component(Slide.name, Slide)

new Vue({
  render: h => h(App),
}).$mount('#app')
