<template>
  <div class="navbar">
     <ul>
       <li><i class="icon icon-w-44  icon-help"></i></li>
       <li><i class="icon icon-w-44 icon-search"></i></li>
       <li><a href="javascript:void();" class="select-car-btn">选择车辆</a></li>
       <li><i class="icon icon-w-44 icon-location" @click="selfLocation"></i></li>
       <li><i class="icon icon-w-44 icon-user" @click="toUser"></i></li>
     </ul>
  </div>
</template>

<script>
export default {
    name:"NavBar",
    methods: {
      toUser() {
        this.$router.push({name:"User"}).catch(err => err)
      },
      // 获取当前位置
      selfLocation(){
        this.$store.commit("location/SELF_LOCATION")
      }
    },
}
</script>

<style lang="scss" scoped>
.navbar {
   
  position: fixed;
  bottom: 85px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
  li {
    display: inline-block;
  }
  .icon {
    vertical-align: middle;
    margin-right: 17px;
    cursor: pointer;
    
  }
}

</style>

