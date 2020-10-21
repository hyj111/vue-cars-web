<template>
  <div class="cars-wrap" v-if="carList&&carList.length>0">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in carList" :key="item.id">
          <cars-item :data="item" />
        </swiper-slide>
        <!-- <swiper-slide>
          <cars-item />
        </swiper-slide>
        <swiper-slide>
          <cars-item />
        </swiper-slide>
        <swiper-slide>
          <cars-item />
        </swiper-slide>
        <swiper-slide>
          <cars-item />
        </swiper-slide> -->
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import CarsItem from "./component/CarsList";
// api
import { GetCarsList } from "@/api/cars";
import "swiper/css/swiper.css";
export default {
  name: "Cars",
  components: {
    Swiper,
    SwiperSlide,
    CarsItem,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      carList:[]
    };
  },
  methods: {
    getCarsList(data) {
      GetCarsList({ parkingId: data.id }).then((res) => {
        const data = res.data.data
        this.carList = data
        // 还原状态
        this.$store.commit("app/SET_CARS_LIST_REQUEST",false)
      });
    },
  },
  watch:{
    "$store.state.app.isClickCarsList":{
      handler(newValue){
        if(newValue) {this.carList = []}
        this.$store.commit("app/SET_CARS_LIST_STATUS",true)
        
      }
    }
  }
};
</script>

<style lang="scss">
.cars-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 11;
}
.cars-swiper-wrap {
  padding: 0 155px;
  .swiper-container {
    overflow: initial;
  }
  .swiper-button-next,
  .swiper-button-prev {
    outline: none;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 100px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
    &.swiper-button-disabled {
      opacity: 1;
    }
  }
  .swiper-button-next {
    right: 53px;
  }
  .swiper-button-prev {
    left: 53px;
  }
}
</style>