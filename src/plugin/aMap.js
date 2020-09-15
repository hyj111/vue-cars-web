import Vue from 'vue'
import VueAMap from 'vue-amap';
//引入高德地图
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    // 高德key
    key: 'd93134d26f5a34a7a77587af3c8076ca', // 自己到官网申请，我随便写的
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Geolocation','AMap.Walking'],
    v: '1.4.15', // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
    uiVersion: '1.0.11' // ui版本号，也是需要写
})