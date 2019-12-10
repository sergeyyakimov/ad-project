import Vue from 'vue'
import VueRouter from 'vue-router'
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
    name: 'ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'adList',
    component: AdList
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
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
