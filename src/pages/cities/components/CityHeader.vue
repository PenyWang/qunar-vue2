<template>
    <div class="header-wrapper">
      <router-link to="/">
        <span class="iconfont icon-return"></span>
      </router-link>
      选择城市
    </div>
</template>

<script>
export default {
    name: "CityHeader",
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
.header-wrapper {
  // position: fixed;
  // top: 0;
  width: 100%;
  height: .88rem;
  line-height: .88rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  .icon-return {
    color: #fff;
    float: left;
    margin-left: .1rem;
    font-weight: 900;
  }
}
</style>
