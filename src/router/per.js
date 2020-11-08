import router from './index'
import store from '../store'

// 守卫路由，进入路由之前要做的事情
router.beforeEach((to,from,next)=>{
    if(to.meta && to.meta.title) {
        const routerName = to.meta.title
        document.title = to.meta.title
        store.commit("app/SET_ROUTER_NAME",routerName)     
    }
    next()
})