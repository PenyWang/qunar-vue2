<template>
  <div class="list-wrapper" ref="listRef">
    <div class="hot-city clearfix">
      <div class="header">选择城市</div>
      <ul>
        <li v-for="item in hotCities" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="city-sort clearfix">
      <div class="header">城市排序</div>
      <ul>
        <li
          v-for="(item, key) in cities"
          :key="key"
          :ref="key"
          @click.stop.prevent="clickCity"
        >
          {{ key }}
        </li>
      </ul>
    </div>
    <div class="city-choose clearfix" v-for="(item, key) in cities" :key="key">
      <div class="header">{{ key }}</div>
      <ul>
        <li v-for="ite in item" :key="ite.id">{{ ite.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import axios from "axios";

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
  methods: {},
  components: {},
  methods: {
    clickCity(e) {
      this.letter = e.target.innerText;
    },
  },
  mounted() {
    this.scrollList = new BScroll(this.$refs.listRef);
    // this.scrollList = new BScroll('.list-wrapper', {
    //   movable: true,
    //   zoom: true,
    // });
    axios.get("/mock/city.json").then((cityData) => {
      this.hotCities = cityData?.data?.data?.hotCities;
      this.cities = cityData?.data?.data?.cities;
    });
  },
  watch: {
    letter() {
      this.scrollList.scrollToElement(this.$refs[this.letter]);
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
  position: absolute;
  top: 0.88rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
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
