<template>
  <div class="header-back">
      <div class="back"></div>
      <div class="title">
          <slot name="center"></slot>
      </div>     
  </div>
</template>

<script>
export default {
    name:"back"
}
</script>

<style lang="scss" scoped>
.header-back {
    position: relative;
    height: 147px;
   .back{   
        position: absolute;
        top: 50%;
        width: 14px;
        height: 14px;
        border-left: 2px solid #0a93f1 ;
        border-bottom: 2px solid #0a93f1;
        transform: rotate(45deg) translateY(-50%);
        cursor: pointer;
    }
    .title {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 50px;
        color: #fff;
        font-size: 16px;
        
    }
   
}
</style>

