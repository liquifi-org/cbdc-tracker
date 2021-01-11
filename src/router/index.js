import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/pages/dashboard/Dashboard')
    },
    {
      path: 'currency/:tag',
      name: 'Currency',
      component: () => import('@/views/pages/currency/Currency'),
      props: true
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/pages/news/News')
    },
    {
      path: '/watchlist',
      name: 'Watchlist',
      component: () => import('@/views/pages/watchlist/Watchlist')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
