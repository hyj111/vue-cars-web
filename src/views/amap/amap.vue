<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer" :zoom="zoom" :events="events" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "amap",
  data() {
    return {
      map: null,
      zoom: 14,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(116.403433, 39.903899),
        zoom: this.zoom,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>

