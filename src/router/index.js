import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'
import resultPage from '@/components/result'
import select from '@/components/base/select'

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
  },
  {
    path: '/test',
    name: 'select',
    component: select
  }]
})
