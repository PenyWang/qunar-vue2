<template>
  <div class="list-wrapper" ref="listRef">
    <div>
      <div class="hot-city clearfix">
        <div class="header">选择城市</div>
        <ul>
          <li
            v-for="item in hotCities"
            :key="item.id"
            @click.stop="clickHot(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="city-sort clearfix">
        <div class="header">城市排序</div>
        <ul>
          <li
            v-for="(item, key) in cities"
            :key="key"
            @click.stop.prevent="clickCity"
          >
            {{ key }}
          </li>
        </ul>
      </div>
      <div
        class="city-choose clearfix"
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="header">{{ key }}</div>
        <ul>
          <li v-for="ite in item" :key="ite.id" @click.stop="clickHot(ite)">{{ ite.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import axios from "axios";
import { mapActions } from 'vuex';

export default {
  name: "CityList",
  props: {},
  data() {
    return {
      scrollList: null,
      hotCities: [],
      cities: [],
      letter: "",
    };
  },
  components: {},
  methods: {
    clickCity(e) {
      this.letter = e.target.innerText;
    },
    clickHot(city) {
      // this.$store.commit("changeCity", { curCity: city.name });
      // this.$store.dispatch("changeCity", { curCity: city.name });
      this.changeCity1({ curCity: city.name });
      localStorage.curCity = city.name;
      this.$router.push("/"); 
    },
    // ...mapActions(['changeCity']),
    ...mapActions({ changeCity1: 'changeCity' }),
  },
  mounted() {
    this.scrollList = new BScroll(".list-wrapper", {
      movable: true,
      // zoom: true,
    });
    axios.get("/mock/city.json").then((cityData) => {
      this.hotCities = cityData?.data?.data?.hotCities;
      this.cities = cityData?.data?.data?.cities;
    });
  },
  watch: {
    letter() {
      let em = this.$refs[this.letter][0];
      this.scrollList.scrollToElement(em);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

@mixin floatbox {
  float: left;
  width: 33.33%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  border: 1px $cityBgColor solid;
  background: #fff;
  box-sizing: border-box;
}

.list-wrapper {
  // position: absolute;
  // top: 0.88rem;
  // margin-top: 0.88rem;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  overflow: auto;
  .header {
    height: 0.88rem;
    line-height: 0.88rem;
    color: $darkColor;
    background: $cityBgColor;
    padding: 0 0.2rem;
  }
  .clearfix::after {
    display: table;
    content: "";
    clear: both;
  }
  .hot-city {
    li {
      @include floatbox;
    }
  }
  .city-sort {
    li {
      float: left;
      width: 16.67%;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
    }
  }
  .city-choose {
    li {
      @include floatbox;
      width: 25%;
    }
  }
}
</style>
