<template>
    <div class="user-container">
       <div class="user-info">
           <img src="@/assets/images/face.png" alt="">
           <div class="mate">
               <h4 class="name">409019683@qq.com</h4>
               <span>文明驾驶分 <strong>0</strong></span>
           </div>
       </div>
       <ul class="group-links">
           <router-link  to="aa" tag="a" class="arrow">
               <i class="icon icon-router-link-1"></i>
               我的账户
           </router-link>
             <router-link  to="aa" tag="a"  class="arrow">
               <i class="icon icon-router-link-2"></i>
               租车订单
           </router-link>
             <router-link  to="aa" tag="a" class="arrow">
               <i class="icon icon-router-link-3"></i>
               实名认证
           </router-link>
             <router-link  to="/safe" tag="a" class="arrow">
               <i class="icon icon-router-link-4"></i>
               安全设置
           </router-link>
             <router-link  to="aa" tag="a" class="arrow">
               <i class="icon icon-router-link-5"></i>
              帮助中心
           </router-link>
       </ul>
       <button class="logout">登出</button>
    </div>
</template>

<script>
export default {
   name :"User"
}
</script>

<style lang="scss" scoped>
@import "./User.scss"

</style>

