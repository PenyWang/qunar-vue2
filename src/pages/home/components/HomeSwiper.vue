<template>
  <div class="swiper-wrapper">
    <swiper v-if="isShowSwiper" class="sw-container" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
    };
  },
  mounted() {
  },
  computed: {
    isShowSwiper() {
      return this.swiperList.length ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  margin-top: .88rem;
  padding-bottom: 26.67%;
  background-color: #eee;
  .swiper-img {
    width: 100%;
    height: 100%;
  }
  ::v-deep .swiper-pagination-bullet-active {
    // 样式穿透 或者使用  --swiper-pagination-color: red;  样式穿透产生于scoped不支持动态变化的dom元素样式变化
    background-color: $bgColor;
  }
}
</style>
