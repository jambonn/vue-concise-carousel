// Import vue components
import * as components from './LibEntry'

// install function executed by Vue.use()
const install = function installVueConciseCarousel(app) {
  if (install.installed) return
  install.installed = true
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// Default export is library as a whole, registered via Vue.use()
export default plugin

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './LibEntry'
