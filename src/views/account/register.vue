<template>
  <div class="user-container">
    <back>
      <span slot="center">注册</span>
      <template slot="nav-header-right">
        <router-link to="/login" class="color-white opacity-4">登录</router-link>       
      </template>
    </back>
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
           <Username :value.sync="form.username"/>
          <!-- <el-input v-model="form.name" placeholder="原始密码"></el-input> -->
        </el-form-item>
         <el-form-item>
          <el-input v-model="form.name" placeholder="新密码"></el-input>
        </el-form-item>
         <el-form-item>
          <el-input v-model="form.name" placeholder="确认密码"></el-input>
        </el-form-item>
         <el-form-item>
          <Code :username="form.username"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Back from "../../components/back/back";
import Username from "@/components/account/username"
import Code from "../../components/code/index";
export default {
  name: "Password",
  components: {
    Back,
    Username,
    Code
  },
  data() {
    return {
      form: {
        username: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      console.log(this.form);
    },
  },
};
</script>

<style>
</style>