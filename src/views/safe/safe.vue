<template>
    <div class="user-container">
        <back>
            <span slot="center">安全设置</span>
         </back>   
       <ul class="group-links">
           <router-link  to="/password" tag="a" class="arrow">         
               修改登录密码
           </router-link>
             <router-link  to="aa" tag="a" class="arrow">        
              设置资金密码
           </router-link>
             <router-link  to="aa" tag="a" class="arrow">            
               绑定手机号
           </router-link>
             <router-link  to="aa" tag="a" class="arrow">           
               绑定银行卡号
           </router-link>      
       </ul>
    </div>
</template>

<script>
import Back from "../../components/back/back"

export default {
   name :"Safe",
    components:{
    Back
   }
}
</script>

<style lang="scss" scoped>


</style>

