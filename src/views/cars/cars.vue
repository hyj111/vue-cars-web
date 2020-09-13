<template>
  <div class="cars-wrap">
      <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
      <swiper-slide><cars-list height="780px"/></swiper-slide>
      <swiper-slide><cars-list/></swiper-slide>
      <swiper-slide><cars-list/></swiper-slide>
      <swiper-slide><cars-list/></swiper-slide>
      <swiper-slide><cars-list/></swiper-slide>   
    </swiper>
     <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>  
      </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import CarsList from "@c/carsList/CarsList"
import 'swiper/css/swiper.css'
export default {
  name: "Cars",
  components: {
    Swiper,
    SwiperSlide,
    CarsList
  },
    data(){
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 50,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
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
    .swiper-button-next,.swiper-button-prev {
        outline: none;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
        height: 100px;
        border-radius: 100px;
        background-color: #fff;
        box-shadow: 0 0 18px 0 rgba(0,0,0,.2);
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