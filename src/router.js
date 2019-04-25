import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/accounts',
      name: 'accounts',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Accounts.vue')
    },
    {
      path: '/account/:id',
      name: 'account',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Account.vue')
    },
    {
      path: '/heroes',
      name: 'heroes',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Heroes.vue')
    },
    {
      path: '/hero/:id',
      name: 'hero',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Hero.vue')
    }
  ]
})
