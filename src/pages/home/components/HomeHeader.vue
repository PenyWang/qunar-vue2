<template>
  <div class="header-wrapper">
    <div class="header-back">
      <i class="iconfont icon-return"></i>
    </div>
    <div class="header-title">
      <i class="iconfont icon-search"></i>
      <div class="search-kw">输入城市/景点/游玩主题</div>
      <input class="header-input" type="text"/>
    </div>
    <div class="header-right">{{city}}<i class="iconfont icon-pull"></i></div>
  </div>
</template>

<script>
export default {
  name: "home-header",
  props: {
    city: String,
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.header-wrapper {
  background-color: $bgColor;
  color: #ffffff;
  display: flex;
  height: 0.88rem;
  .header-back {
    width: 0.8rem;
    height: 100%;
    line-height: .88rem;
    text-align: center;
    .icon-return {
      font-weight: 900;
    }
  }
  .header-right {
    @extend .header-back;
    width: 1.32rem;
    .icon-pull {
      font-size: .01rem;
    }
  }
  .header-title {
    position: relative;
    flex: 1;
    margin: .12rem;
    .icon-search {
      position: absolute;
      left: .2rem;
      top: .15rem;
      color: #e4e7ea;
    }
    .search-kw {
      position: absolute;
      left: .65rem;
      top: .18rem;
      color: #e4e7ea;
    }
    .header-input {
      height: 100%;
      width: 100%;
      border-radius: .06rem;
    }
  }
}
</style>
