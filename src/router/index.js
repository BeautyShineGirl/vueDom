import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("@/view/login.vue"),
    },
    {
      path: '/',
      name: 'Layout',
      directive:"/index",
      component: () => import("@/layout/layout.vue"),
      children:[
        {
          path: '/index',
          name: 'index',
          component: () => import("@/view/index.vue")
        },
        {
          path: '/table',
          name: 'table',
          component: () => import("@/view/table.vue")
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: () => import("@/view/404.vue"),
    },
  ]
})
