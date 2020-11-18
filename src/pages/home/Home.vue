<template>
  <div>
    <home-header :city="city" />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconsList="iconsList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
import axios from "axios";

import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/HomeIcons";
import HomeRecommend from "./components/HomeRecommend";
import HomeWeekend from "./components/HomeWeekend";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  async mounted() {
    await this.initPageData();
    console.log(this.completeLocal1);
  },
  methods: {
    async initPageData() {
      const res = await axios.get("/mock/index.json");
      const { data } = res.data;
      Object.assign(this, data);
    },
  },
  computed: {
    // ...mapState(['curCity'])
    ...mapState({
      // 挂载store中的state到组件
      // city: 'curCity',
      city: (state) => {
        return state.homeModule.curCity; // homeModule 为模块名称
      },
    }),
    // ...mapGetters(['completeLocal']),
    ...mapGetters({
      // 挂载store中的compute属性到组件
      completeLocal1: "completeLocal",
    }),
  },
  deactivated() { // 配合keep-alive，组件处于未激活状态执行该钩子
    this.lastCity = this.city;
  },
  async activated() { // 配合keep-alive，组件处于激活状态执行该钩子
    if (this.lastCity !== this.city) {
      await this.initPageData();
    }
  },
};
</script>

<style> 
</style>
