<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      :amap-manager="amapManager"
      :center="center"
      :zoom="zoom"
      :events="events"
      class="amap-demo"
    >
      <!-- 覆盖物 圆 -->
      <el-amap-circle
        v-for="item in circle"
        :key="item.id"
        :fillColor="item.color"
        :strokeColor="item.color"
        :strokeOpacity="item.strokeOpacity"
        :strokeWeight="item.strokeWeight"
        :center="item.center"
        :radius="item.radius"
      ></el-amap-circle>
      <!-- 覆盖物 停车场 -->
      <el-amap-marker
        v-for="(item,index) in parking"
        :position="item.position"
        :offset="item.offset"
        :vid="index"
        :content="item.content"
        :key="item.id"
      ></el-amap-marker>
      <!-- 覆盖物停车场车辆数量 -->
      <el-amap-marker
        v-for="(item,index) in parking"
        :content="item.text"
        :events="item.events"
        :key="item.id+index"
        :offset="item.offsetText"
        :extData="item"
        :position="item.position"
      ></el-amap-marker>
      <!-- 覆盖物停车场距离信息 -->
      <el-amap-marker
        v-for="(item,index) in parkingInfo"
        :content="item.text"
        :key="item.id"
        :offset="item.offset"
        :position="item.position"
        z-index="150"
      ></el-amap-marker>

    </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
import { SelfLocation } from "./location";
import { Walking } from "./walking";
// 导入样式
import StyleCss from "./style"
let amapManager = new AMapManager();
export default {
  name: "Amap",
  data() {
    const _this = this;
    return {
      map: null,
      zoom: 16,
      amapManager,
      center: [121.59996, 31.197646],
      // 自己的经纬度位置
      sele_position: "",
      // 停车场信息
      parkingDatas:{},
      events: {
        init(o) {
          lazyAMapApiLoaderInstance.load().then(() => {
            _this.initMap();
          });
        },
      },
      circle: [
        {
          center: [121.59996, 31.197646],
          radius: 10,
          color: "#393e43",
          strokeOpacity: "0.2",
          strokeWeight: "30",
        },
      ],
      // 停车场图标
      parking: [],
      // 停车场距离信息
      parkingInfo: [],
    };
  },
  methods: {
    // 初始化地图
    initMap() {
      this.map = amapManager.getMap();
      // 地图初始化完成回调
      this.$emit("callbackComponent", {
        // 发送这方法是为了地图加载完成后让index去调用接口获取停车场信息
        function: "loadMap",
      });
      // 调用自身定位方法
      this.selflocation();
    },
    // 自身定位
    selflocation() {
      SelfLocation({
        map: this.map,
        complete: (val) => this.selfLocationComplete(val),
      });
    },
    // 定位成功回调
    selfLocationComplete(data) {
      const lng = data.position.lng;
      const lat = data.position.lat;
      this.sele_position = [lng, lat];
      this.circle[0].center = [lng, lat];
    },
    // 停车场数据获取
    parkingData(data) {
      this.parking = data;
    },
    // 存储数据
    saveData(params){
      if(this[params.key]){
          this[params.key] = params.value
      }
      
    },
    // 步行路线规划
    handlerWalk(data) {
      // 步行路线规划
      Walking({
        map: this.map,
        position_start: this.sele_position,
        position_end: data.position,
        complete: (val) => this.handlerWalkingComplete(val),
      });
    },
    // 步行路线规划数据获取
    handlerWalkingComplete(data) {
      const distance = data.routes[0].distance
      this.parkingInfo = [
        {
          position: this.parkingDatas.position,
          text:`<div style='${StyleCss.parkingInfoWrap}'>
          <span style='${StyleCss.parkingInfoNumber}'>${this.parkingDatas.carsNumber}</span>辆车
          <span style='${StyleCss.parkingInfoLine}'></span>
          距离您${distance}米
          </div>`,
          offset:[-15, -54]
        },
      ];
    },
  },
  watch: {
    "$store.state.location.selfLocation": {
      handler(newvalue) {
        this.selflocation();
      },
      // immediate:true
    },
  },
};
</script>

<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>

