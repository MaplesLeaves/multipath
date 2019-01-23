import Vue from 'vue'
import Router from 'vue-router'
import demo from './../views/demo'
import index from './../views/index'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: demo
    }
  ]
})
