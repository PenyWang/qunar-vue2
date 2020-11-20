<template>
  <div class="home-icons-wrapper">
    <swiper v-if="isShowSwiper" class="sw-container" :options="swiperOptions">
      <swiper-slide class="icon-slide" v-for="(page, idx) in pages" :key="idx">
        <router-link to="/detail" tag="div" class="icon-box" v-for="item in page" :key="item.id">
          <div class="icon-box-img-wrapper">
            <img
              :src="item.imgUrl"
              class="icon-box-img"
            />
          </div>
          <div class="desc-wrapper">
            <span class="icon-desc">{{item.description}}</span>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconsList: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
    };
  },
  methods: {},
  components: {},
  computed: {
    pages: function () {
      return this.iconsList.reduce((prev, item, index) => {
        const page = Math.floor(index / 8);
        if(!prev[page]) prev[page] = [];
        prev[page].push(item);
        return prev;
      }, []);
    },
    isShowSwiper() {
      return this.iconsList.length ? true : false;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.home-icons-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 58%;
  margin: .2rem 0;
  .icon-slide {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .icon-box {
    position: relative;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-box-img-wrapper {
      position: absolute;
      width: 100%;
      height: 80%;
      .icon-box-img {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .desc-wrapper {
      position: absolute;
      display: flex;
      bottom: 0;
      height: 20%;
      width: 100%;
      align-items: center;
      justify-content: center;
      color: $darkColor;
    }
    .icon-desc {
      @include ellipsis;
    }
  }
}
</style>
