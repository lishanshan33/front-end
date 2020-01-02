import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import home from '@/components/home'
import card from '@/components/card'
import '@/assets/css/mui.min.css'
import '@/assets/css/app.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/index',
      name: 'index',
      component: index
    },
         {
      path: '/card',
      name: 'card',
      component: card
    },
         {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

