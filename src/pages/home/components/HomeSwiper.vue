<template>
  <div class="swiper-wrapper">
    <swiper v-if="isShowSwiper" class="sw-container" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        speed: 2500, //匀速时间
        autoplay: true,
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        slidesPerGroup: 1,
        loop: true,
      },
    };
  },
  mounted() {},
  computed: {
    isShowSwiper() {
      return this.swiperList.length ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 0.88rem;
  padding-bottom: 26.67%;
  background-color: #eee;

  -webkit-transition-timing-function: linear !important; /*之前是ease-out*/
  -moz-transition-timing-function: linear !important;
  -ms-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
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
