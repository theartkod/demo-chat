import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import socket from '@/components/socket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'socket',
      component: socket
    }
  ]
})
