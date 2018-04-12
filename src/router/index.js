import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'
import resultPage from '@/components/result'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'indexPage',
    component: indexPage
  },
  {
    path: '/result',
    name: 'resultPage',
    component: resultPage
  }]
})
