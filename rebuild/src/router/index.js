import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Affairs from '../views/Affairs.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Setting from '../views/Setting.vue'
import About from '../views/About.vue'
import More from '../views/More.vue'
import { GoodsActionButton } from 'vant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/more',
    name: 'more',
    component: More,
  }
]

const router = new VueRouter({
  routes
})

export default router
