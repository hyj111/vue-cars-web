<template>
  <div class="header-back">
      <div class="back" @click="goBack"></div>
      <div class="title">
        <slot name="center"></slot>
      </div>
      <div class="right-wrap">
          <slot name="nav-header-right"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "back",
  methods:{
      goBack(){
          this.$router.go(-1)
      }
  },
  computed: {
    title(){
      return this.$store.state.app.routerName;
    }
  },
};
</script>

<style lang="scss" scoped>
.header-back {
  position: relative;
  height: 147px;
  .right-wrap {
      position: absolute;
      top: 50%;
      right: 0%;
      transform: translateY(-50%);
  }
  .back {
    position: absolute;
    top: 50%;
    width: 14px;
    height: 14px;
    border-left: 2px solid #0a93f1;
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

