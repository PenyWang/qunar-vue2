<template>
  <div>
    <div class="recommend-title">
      <span>周末去哪</span>
    </div>
    <ul>
      <li class="recommend-item" v-for="item in weekendList" :key="item.id">
        <div class="recommend-img">
          <img
            class="recommend-img-content"
            :src="item.imgUrl"
          />
        </div>
        <div class="recommend-content">
          <div class="content-title">{{item.title}}</div>
          <div class="content-comment">{{item.comment}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
    };
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

div {
  box-sizing: border-box;
}
.recommend-title {
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  background-color: #eee;
}
.recommend-item {
  width: 100%;
  height: 4.04rem;
  .recommend-img {
    width: 100%;
    .recommend-img-content {
      width: 100%;
      height: 100%;
    }
  }
  .recommend-content {
    height: 1.24rem;
    padding: .14rem .2rem .2rem .2rem;
    .content-title {
      height: 0.48rem;
      line-height: 0.48rem;
      font-size: 0.28rem;
      color: $darkColor;
    }
    .content-comment {
      font-size: .24rem; 
      color: #616161;
    }
  }
}
</style>
