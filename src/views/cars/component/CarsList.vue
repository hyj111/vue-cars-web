<template>
  <div>
    <section class="cars-item" @click="getCarsInfo">
      <header>
        <h4 class="cars-logo">
          <img :src="data.imgUrl" :alt="data.carsMode" />
          <span class="name">{{ data.carsNumber }}</span>
        </h4>
        <p class="cars-attr">
          {{ data.carsAttr | energyType }} {{ data.carsAttr | seatNumber }}座
        </p>
      </header>
      <div class="cars-content">
        <div class="info">
          <h4 class="cars-number">{{ data.carsMode }}</h4>
          <div>
            <ul class="cars-electric" :class="data.oil | electricNumber">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="distance">
              <sub>约</sub>
              <strong>{{ data.countKm }}</strong>
              <sub>KM</sub>
            </p>
          </div>
        </div>
        <img src="~@/assets/images/pic001.jpg" alt />
      </div>
      <footer>
        <a href="javascript: void(0)" class="parking-link">
          {{ data.parkingName }}
          <span></span>
        </a>
      </footer>
    </section>
    <section
      class="cars-item cars-detail"
      :style="'height:' + cars_info_height"
      v-if="cars_info_show"
    >
      <div class="scroll">
        <h4 class="column">
          {{ data.parkingName }}
          <i class="close" @click="closeCarsInfo"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
             <img :src="data.imgUrl" :alt="data.carsMode" />
            <span class="name">{{ data.carsNumber }}</span>
          </h4>
          <p class="cars-attr">
            {{ data.carsAttr | energyType }} {{ data.carsAttr | seatNumber }}座
          </p>
        </header>
        <img src="~@/assets/images/pic001.jpg" alt width="100%" />
        <div class="cars-center">
          <h4 class="cars-number pull-left">{{ data.carsMode }}</h4>
          <p class="distance pull-right">
            <sub>约</sub>
            <strong>{{ data.countKm }}</strong>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-electric-box">
          <div :style =" `width: ${Math.round(data.oil/10)*10}%`"></div>
        </div>
        <p class="color-main text-center">
          取车约支付12.0元停车费，实际补贴12.0元
        </p>
        <ul class="price-list">
          <li
            v-for="(item, index) in priceList"
            :class="{ check: leaseId === item.carsLeaseTypeId }"
            :key="item.carsLeaseTypeId"
            @click="check(item)"
          >
            <h4 class="check-name">{{ item.carsLeaseTypeName }}</h4>
            <span class="price">￥{{ item.price }}元</span>
          </li>
        </ul>
        <div class="clause-dec">
          <span>参保《全面保障服务》用车更放心</span>
          <i class="current"></i>
        </div>
      </div>
      <div>
        <li>
          <a href="javascript:void();" class="select-car-btn">预约用车</a>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import { formatCarsAttr, getCarsAttrKey } from "@/utils/format.js";
import {GetLeaseList} from "@/api/cars"
export default {
  name: "CarsList",
  filters: {
    electricNumber(val) {
      const number = Math.round(val / 10);
      return `active-li-${number}`;
    },
    // 过滤能源
    energyType(val) {
      const valJson = formatCarsAttr(val);
      if (!valJson) {
        return "";
      }
      return getCarsAttrKey({
        parentKey: "basics",
        childKey: "energy_type",
        data: valJson,
      });
    },
    // 过滤座位数
    seatNumber(val) {
      if (!val) {
        return "";
      }
      const valJson = JSON.parse(val);
      return getCarsAttrKey({
        parentKey: "carsBody",
        childKey: "seat_number",
        data: valJson,
      });
    },
  },
  data() {
    return {
      priceList: [
      ],

      cars_info_show: false,
      cars_info_height: 0,
      // 定时器
      timer: null,
      // 租赁id
      leaseId:""
    };
  },
  methods: {
    // 选择租赁类型
    check(data) {
      this.leaseId = data.carsLeaseTypeId

    },
    getCarsInfo() {
      this.openCarsInfo();
    },
    //打开车辆详情
    openCarsInfo() {
      // 高度计算
      const viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const height = viewHeight - 100;
      this.cars_info_show = true;
      if (this.timer) {
        clearTimeout(this.timer);
      } //防止连续点击开启多个定时器
      this.timer = setTimeout(() => {
        this.cars_info_height = `${height}px`;
        clearTimeout(this.timer);
      }, 10);
      this.getLaseList()
    },
    // 关闭汽车详情
    closeCarsInfo() {
      this.cars_info_show = false;
      this.cars_info_height = "0px";
    },
    // 获取租赁列表
    getLaseList(){
      if(this.priceList && this.priceList.length>0) {return false}
      GetLeaseList({carsId:this.data.id}).then(res=>{
        let data =  res.data.data
        if(data) {this.priceList = data}      
      })
    }
  },
  props: {
    // 接收车辆信息
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scope>
@import "./CartList.scss";
</style>