import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'
import resultPage from '@/components/result'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
    path: '/',
    name: 'indexPage',
    component: indexPage,
    meta: {
      keepAlive: true,
      isBack: false // 此处用不到
    }
  },
  {
    path: '/result',
    name: 'resultPage',
    component: resultPage,
    meta: {
      keepAlive: false,
      isBack: false // 此处用不到
    }
  }]
})
