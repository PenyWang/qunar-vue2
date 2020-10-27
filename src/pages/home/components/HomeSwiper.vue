<template>
  <div class="swiper-wrapper">
    <swiper class="sw-container" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.url"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList: [
        {
          url:
            "http://img1.qunarzz.com/piao/fusion/1808/66/55bc874f100c2d02.jpg_750x200_ac7c05d2.jpg",
          id: 1,
        },
        {
          url:
            "http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg",
          id: 2,
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 0;
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
