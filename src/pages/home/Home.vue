<template>
    <div>
      <home-header :city="city"/>
      <home-swiper />
      <home-icons />
      <home-recommend />
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
    props: {

    },
    data() {
        return {
          city: '', // 城市
        };
    },
    methods: {

    },
    async mounted() {
      const res = await axios.get('/mock/index.json')
      const { city } = res.data;
      this.city = city;
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
