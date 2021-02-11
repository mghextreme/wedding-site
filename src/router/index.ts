import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SaveTheDate from '../views/SaveTheDate.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/savethedate',
    alias: '/',
    name: 'SaveTheDate',
    component: SaveTheDate
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
