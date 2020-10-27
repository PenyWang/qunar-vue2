<template>
  <div id="app" @click="clickApp">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    clickApp(){
      console.log(this.$children);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
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
