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
          <div class="content-comment">{{item.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {},
  data() {
    return {
      weekendList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          content: '在帝都过周末，不仅仅是城中游！',
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          content: '在帝都过周末，不仅仅是城中游！',
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          content: '在帝都过周末，不仅仅是城中游！',
        }
      ]
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
