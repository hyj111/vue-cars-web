import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[
      {
        path: '/user',
        name: 'User',
        component: ()=>import ('../views/user/user.vue') 
      },
      // 安全设置首页
      {
        path: '/safe',
        name: 'Safe',
        component: ()=>import ('../views/safe/safe.vue') 
      },
      {
        path: '/password',
        name: 'Password',
        component: ()=>import ('../views/safe/password.vue') 
      }
    ]
  },
  
]

const router = new VueRouter({
  routes,
  mode:"history",
  base :process.env.BASE_URL

})

export default router
