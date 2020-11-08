<template>
  <div>
    <button class="button-vcode" type="button" :disabled="disabled" @click="handlerCode">{{buttonText}}</button>
    <el-input v-model="code" placeholder="验证码" ></el-input>
  </div>
</template>

<script>
export default {
    props:{
        username:{
        type:String,
        default:""
        },
    },
    data() {
        return {
            // 按钮状态
            disabled:true,
            code:"",
            timmer:null,
            // 验证码
            buttonText:"获取验证码"
        }
    },
    methods: {
       handlerCode(){
           this.countDown()
       },
       countDown(){
           let second =  60;
           this.disabled = true    
           this.buttonText = `倒计时${second}秒`   
           this.timmer = setInterval(()=>{
               second--
               this.buttonText = `倒计时${second}秒`
               if(second===0){
                   clearInterval(this.timmer)
                   this.buttonText = `重新获取`
                   this.disabled = false    
               }
           },1000)
       }
    },
    watch: {
        username: {
            handler(newValue){
                newValue?this.disabled=false:this.disabled=true
            }
        }
    }
};
</script>

<style>
</style>