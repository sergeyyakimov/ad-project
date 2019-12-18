import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../views/Home'
import Ad from '../views/Ads/Ad'
import AdList from '../views/Ads/AdList'
import NewAd from '../views/Ads/NewAd'
import Orders from '../views/User/Orders'
import Login from '../views/Auth/Login'
import Registration from '../views/Auth/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ad/:id',
    props: true,
    name: 'ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'adList',
    component: AdList,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd,
    beforeEnter: AuthGuard
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: AuthGuard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
