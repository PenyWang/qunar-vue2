<template>
    <div>
      <home-header :city="city"/>
      <home-swiper :swiperList="swiperList"/>
      <home-icons :iconsList="iconsList"/>
      <home-recommend :recommendList="recommendList"/>
      <home-weekend />
    </div>
</template>

<script>
import axios from 'axios'

import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/HomeSwiper';
import HomeIcons from './components/HomeIcons';
import HomeRecommend from './components/HomeRecommend';
import HomeWeekend from './components/HomeWeekend';

export default {
    data() {
        return {
          city: '', // 城市
          swiperList: [],
          iconsList: [],
          recommendList: []
        };
    },
    methods: {
    },
    async mounted() {
      const res = await axios.get('/mock/index.json')
      const { city, data } = res.data;
      this.city = city;
      Object.assign(this, data);
      // this.swiperList = data.swiperList;
      // this.iconsList = data.iconsList;
      // this.recommendList = 
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
    },
};
</script>

<style>

</style>
