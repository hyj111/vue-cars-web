<template>
  <el-input v-model="username" placeholder="手机号" @input="enterInput"></el-input>
</template>

<script>
import {validate_phone} from "@/utils/validate"
export default {
    name:"Username",
    props: {
       placeholder: {
           type:String,
           default:"手机号"
       } 
    },
    data() {
        return {
            username:""
        }
    },
    methods: {
        enterInput(){
            const vailStatus = validate_phone(this.username)
            let value = vailStatus ? this.username:""
            this.$emit("update:value",value)
        }
    },
}
</script>

<style>

</style>