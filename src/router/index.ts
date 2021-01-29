import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SaveTheDate from '../views/SaveTheDate.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SaveTheDate',
    component: SaveTheDate
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
