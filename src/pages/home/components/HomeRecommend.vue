<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont icon-heart"></span>
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="recommend-item" v-for="item in recommendList" :key="item.id">
        <div class="recommend-img">
          <img
            class="recommend-img-content"
            :src="item.imgUrl"
          />
          <div class="recommend-img-tag">{{item.tagInfo}}</div>
        </div>
        <div class="recommend-content">
          <div class="content-title">{{item.title}}</div>
          <div class="content-comment">
            <div class="comment-level">
              <!-- <i class="iconfont icon-star" v-for="(star, index) in item.stars" :key="index"></i> -->
              <i class="iconfont icon-star" v-for="(star, index) in generateArr(item.starCount)" :key="index"></i>
            </div>
            <div class="comment-count">{{item.commentNum}}条评论</div>
          </div>
          <div class="content-footer">
            <div class="footer-price">
              <span class="price-content">¥<span class="price-num">{{item.price}}</span></span>起
            </div>
            <div class="footer-area">{{item.area}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {},
  data() {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
          tagInfo: '可订明日',
          title: '北京野生动物园',
          starCount: 5,
          stars: [1, 1, 1, 1, 1],
          commentNum: 44761,
          price: 141,
          area: '大兴区'
        },
        {
          id: 2, imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg', stars: [1, 1, 1, 1, 1], tagInfo: '可订明日', title: '北京野生动物园', starCount: 5, commentNum: 44761, price: 141, area: '大兴区'
        },
        {
          id: 3, imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg', stars: [1, 1, 1, 1, 1], tagInfo: '可订明日', title: '北京野生动物园', starCount: 5, commentNum: 44761, price: 141, area: '大兴区'
        },
        {
          id: 4, imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg', stars: [1, 1, 1, 1, 1], tagInfo: '可订明日', title: '北京野生动物园', starCount: 5, commentNum: 44761, price: 141, area: '大兴区'
        },
        {
          id: 5, imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg', stars: [1, 1, 1, 1, 1], tagInfo: '可订明日', title: '北京野生动物园', starCount: 5, commentNum: 44761, price: 141, area: '大兴区'
        },
      ]
    };
  },
  methods: {
    generateArr(n) {
      if(n % 1 === 0) { // 如果是整数
        return Array(n).fill('all');
      } else { // 如果是非整数
        let tarN = Math.floor(n);
        if(tarN === 0) {
          return Array(1).fill('half');
        } else {
          let arr = Array(tarN).fill('all');
          arr.push('half');
          return arr;
        }
      }
    }
  },
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
  .icon-heart {
    color: #ff0033;
    vertical-align: -0.02rem;
  }
}
.recommend-item {
  display: flex;
  width: 100%;
  height: 2.4rem;
  .recommend-img {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.2rem;
    .recommend-img-content {
      width: 100%;
      height: 100%;
    }
    .recommend-img-tag {
      position: absolute;
      width: 1.06rem;
      height: 0.38rem;
      line-height: 0.38rem;
      left: 0.2rem;
      top: 0.2rem;
      background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);
      background-size: 100% 100%;
      font-size: 0.24rem;
      color: #fff;
    }
  }
  .recommend-content {
    flex: 1;
    .content-title {
      height: 0.44rem;
      line-height: 0.44rem;
      font-size: 0.32rem;
      margin-top: 0.45rem;
      color: $darkColor;
    }
    .content-comment {
      display: flex;
      margin-top: 0.2rem;
      .icon-star {
        font-size: 0.24rem;
        margin-right: 0.02rem;
        color: #ffb436;
      }
      .comment-count {
        margin-left: 0.4rem;
      }
    }
    .content-footer {
      display: flex;
      margin-top: .25rem;
      justify-content: space-between;
      height: .4rem;
      .footer-price {
        font-size: .24rem;
        .price-content {
          color: #ff8300;
          .price-num {
            font-size: 0.4rem;
          }
        }
      }
      .footer-area {
          margin-right: .2rem;
          font-size: .24rem;
          color: #616161;
          line-height: .4rem;
        }
    }
  }
}
</style>
