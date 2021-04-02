import { createApp } from 'vue'
import App from './App.vue'
import { Carousel, Slide } from '../src/LibEntry'

const app = createApp(App)
app.component(Carousel.name, Carousel)
app.component(Slide.name, Slide)

app.mount('#app')
