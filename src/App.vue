<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
   mounted() {
    // 点击空白处关闭会员页面
    document.addEventListener("mouseup", (e) => {
      // 获取子视图
      const userCon = document.querySelector("#children-view");
      // 获取车辆列表
      const carsSwiper = document.getElementsByClassName("cars-wrap")[0];
       if (carsSwiper && !carsSwiper.contains(e.target)) {
         
         const isRequestCarsList = this.$store.state.app.isRequestCarsList
         if(!isRequestCarsList) {
           this.$store.commit("app/SET_CARS_LIST_STATUS",false)
         }
        // 
      }
      // contains()，js原生方法，用于判断DOM元素的包含关系；判断children-view是否包含点击的目标，包含的话就返回true再取反则不会执行路由跳转
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({ name: "Index" }).catch((err) => err);
      }
    });
  },
}
</script>
<style lang="scss">
#app {
 
}


</style>
