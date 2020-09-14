<template>
  <div>
    <Login />
    <!-- 地图 -->
    <amap @callbackComponent="callbackComponent" ref="map" />
    <!-- car data渲染 -->
    <!-- 导航 -->
    <nav-bar />
    <!-- <cars /> -->
    <transition name="fade">
      <div id="children-view" v-show="isShow">
        <!-- 会员 -->
        <router-view />
      </div>
    </transition>
    
  </div>
</template>

<script>
import amap from "../amap/amap";
import cars from "../cars/cars";
import NavBar from "../../components/navbar/NavBar";
import Login from "./login";
import { Parking } from "@/api/parking";
export default {
  name: "Index",
  components: {
    amap,
    cars,
    NavBar,
    Login,
  },
  data() {
    return {
    
    };
  },
  mounted() {
    // 点击空白处关闭会员页面
    document.addEventListener("mouseup", (e) => {
      const userCon = document.querySelector("#children-view");
      // contains()，js原生方法，用于判断DOM元素的包含关系；判断children-view是否包含点击的目标，包含的话就返回true再取反则不会执行路由跳转
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({ name: "Index" }).catch((err) => err);
      }
    });
  },
  computed: {
    isShow() {
      // 判断会员界面是否打开
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  methods: {
    callbackComponent(params) {
      params.function && this[params.function](params);
    },
    loadMap() {
      this.getParking();
    },
    // 获取停车场信息
    getParking() {
      Parking().then((res) => {
        const data = res.data.data
        data.forEach(item=>{
          item.position = item.lnglat.split(',')
          item.content = "<img src='"+require('@/assets/images/parking_location_img.png')+"'/>"
          item.offset = [-35,-60]
          item.offsetText=[-35,-55]
          item.text = `<div style="width:70px; height:60px;line-height:55px; font-size:20px; color:#fff; text-align:center;">${item.carsNumber}</div>`
          item.events = {
            click:(e)=>{this.walking(e)}
          }
        })
        // 调地图方法   
        this.$refs.map.parkingData(data)
      });
    },
    walking(e){    
      const data = e.target.getExtData();
      this.$refs.map.saveData({
        key:"parkingDatas",
        value:data
      })
      this.$refs.map.handlerWalk(data)
      
    }
  },
};
</script>

<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 408px;
  background-color: #34393f;
  z-index: 101;
  box-shadow: -5px 0 38px 0 rgba(0, 0, 0, 0.4);
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 1s;
}
</style>