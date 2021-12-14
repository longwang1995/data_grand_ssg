// import { createApp } from 'vue'
import App from './layout/main.vue'
import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import 'reset.css'

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

