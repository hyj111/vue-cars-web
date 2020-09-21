<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img :src="data.imgUrl" :alt="data.carsMode" />
          <span class="name">{{data.carsNumber}}</span>
        </h4>
        <p class="cars-attr">
          {{data.carsAttr | energyType}} {{data.carsAttr | seatNumber}}座
          </p>
      </header>
      <div class="cars-content">
        <div class="info">
          <h4 class="cars-number">{{data.carsMode}}</h4>
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
              <strong>{{data.countKm}}</strong>
              <sub>KM</sub>
            </p>
          </div>
        </div>
        <img src="~@/assets/images/pic001.jpg" alt />
      </div>
      <footer>
        <a href="javascript: void(0)" class="parking-link">
          {{data.parkingName}}
          <span></span>
        </a>
      </footer>
    </section>
    <!-- <section class="cars-item cars-detail" :style="'height:'+height">
      <div class="scroll">
        <h4 class="column">
          某某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img src="~@/assets/images/cars-logo.png" alt="Mustang 2019款式" />
            <span class="name">Mustang 2019款式</span>
          </h4>
          <p class="cars-attr">新能源汽车 5座</p>
        </header>
        <img src="~@/assets/images/pic001.jpg" alt width="100%" />
        <div class="cars-center">
          <h4 class="cars-number pull-left">粤 B745NB</h4>
          <p class="distance pull-right">
            <sub>约</sub>
            <strong>600</strong>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-electric-box">
          <div></div>
        </div>
        <p class="color-main text-center">取车约支付12.0元停车费，实际补贴12.0元</p>
        <ul class="price-list">
          <li
            v-for="(item,index) in priceList"
            :class="{check:index===currentIndex}"
            @click="check(index)"
          >
            <h4 class="check-name">{{item.type}}</h4>
            <span class="price">{{item.price}}</span>
          </li>
        </ul>
        <div class="clause-dec">
          <span>参保《全面保障服务》用车更放心</span>
          <i class="current"></i>
        </div>
      </div>
      <div>
        <li><a href="javascript:void();" class="select-car-btn">预约用车</a></li>
      </div>
    </section> -->
  </div>
</template>

<script>
import {formatCarsAttr,getCarsAttrKey} from "@/utils/format.js"
export default {
  name: "CarsList",
  filters:{
    electricNumber(val){
      const number = Math.round(val/10)
      return `active-li-${number}`
      
    },
    // 过滤能源
    energyType(val){
      const valJson = formatCarsAttr(val)
      if(!valJson) {return "";}
      return getCarsAttrKey({
        parentKey:"basics",
        childKey:"energy_type",
        data:valJson
      })
      
      
    },
    // 过滤座位数
    seatNumber(val) {
       if(!val){return ""}
      const valJson = JSON.parse(val)
       return getCarsAttrKey({
        parentKey:"carsBody",
        childKey:"seat_number",
        data:valJson
      })
    }
  },
  data() {
    return {
      priceList: [
        { type: "日租车", price: "￥300/1天" },
        { type: "3日租车", price: "￥499/1天" },
        { type: "5日租车", price: "￥799/1天" },
        { type: "小时租车", price: "￥99/1小时" },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    check(index) {
      this.currentIndex = index;
    },
  },
  props: {
    height: {
      type: String,
      default: "257px",
    },
    // 接收车辆信息
    data: {
      type:Object,
      default:()=>({})
    }
  },
};
</script>

<style lang="scss" scope>
@import "./CartList.scss"
</style>