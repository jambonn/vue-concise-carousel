import { createApp } from 'vue'
import App from './App.vue'
import '../src/scss/index.scss'
import { Carousel, Slide } from '../src/index.js'

const app = createApp(App)
app.component(Carousel.name, Carousel)
app.component(Slide.name, Slide)

app.mount('#app')
