// import { createApp } from 'vue'
import App from './layouts/main.vue'
// import routes from './routers/index.js';
import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import 'reset.css'

console.log(routes);

// const routes = router.options.routes
// console.log(routes);
// createApp(App).use(router).mount('#app')
// ViteSSG(App, { routes })

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  }
)

