<template>
  <div id="app" @click="clickApp">
    <div id="nav">
    </div>
    <!-- 使用了keep-alive，是将组件缓存起来一直不销毁组件，意味着初始化的生命周期钩子也不会再被触发 -->
    <!-- exclude表示有哪些组件不需要缓存组件 include表示包含哪些组件可以缓存-->
    <keep-alive :exclude="['Cities']"> 
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  methods: {
    clickApp() {
      console.log(this.$children);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
