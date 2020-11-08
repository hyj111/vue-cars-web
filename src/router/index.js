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
        meta: {
          title:'用户中心'
        },
        component: ()=>import ('../views/user/user.vue') 
      },
      // 账户
      {
        path: '/login',
        name: 'Login',
        meta: {
          title:'登录'
        },
        component: ()=>import ('../views/account/login.vue') 
      },
      {
        path: '/forget',
        name: 'Forget',
        meta: {
          title:'忘记密码'
        },
        component: ()=>import ('../views/account/forget.vue') 
      },
      {
        path: '/register',
        name: 'Register',
        meta: {
          title:'注册'
        },
        component: ()=>import ('../views/account/register.vue') 
      },
      // 安全设置首页
      {
        path: '/safe',
        name: 'Safe',
        meta: {
          title:'注册'
        },
        component: ()=>import ('../views/safe/safe.vue') 
      },
      {
        path: '/password',
        name: 'Password',
        meta: {
          title:'重置密码'
        },
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
