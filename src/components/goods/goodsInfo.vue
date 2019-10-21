<template>
  <div>
    <div class="goods-info">
      <!-- 头部卖家名字部分 -->
      <div class="seller-name">
        <van-image fit="fill" width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="name">不知道叫什么名字好</span>
        <van-tag mark type="primary">信用极好</van-tag>
      </div>
      <van-divider />
      <!-- 物品价格 -->
      <div class="price">
        <span style="color: red;font-weight: bold;
      font-size: 20px;">￥100</span>
        <span class="old">￥1000</span>
      </div>

      <!-- 物品内容 -->
      <div class="info">的味道我单位打的味道我的味道我单位打完的我单位大无畏的打完我我的味道我单位打完完大雾</div>
      <!-- 物品图片区域 -->
      <div class="goods-img">
        <van-image
          round
          radius="10px"
          width="100%"
          height="100%"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          round
          radius="10px"
          width="100%"
          height="100%"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <!-- 操作区 -->
      <div class="do">
        <van-grid :gutter="0" :border="false" :clickable="true">
          <van-grid-item
            icon="good-job-o"
            text="超赞"
            @click="good"
            :style="{'color':goodColor? 'red':''}"
          />
          <van-grid-item
            icon="star-o"
            text="收藏"
            @click="star"
            :style="{'color':starColor? 'red':''}"
          />
          <van-grid-item icon="comment-o" text="留言" />
          <van-grid-item icon="cart" text="购买" to="/" style="color: red;" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodColor: false,
      starColor: false
    };
  },
  methods: {
    good() {
      this.goodColor = !this.goodColor;
      this.$toast({
        message: "点个赞",
        icon: "good-job-o"
      });
    },
    star() {
      this.starColor = !this.starColor;
      this.$toast({
        message: "值得珍藏",
        icon: "star-o"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-info {
  padding: 15px 15px 55px 15px;
  .seller-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    .name {
      margin-left: 15px;
      /* 加粗 */
      font-weight: bold;
      font-size: 0.9rem;
      margin-right: 10px;
    }
  }
  .price {
    .old {
      text-decoration: line-through;
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .info {
    margin: 5px;
    margin-top: 20px;
  }
  .goods-img {
  }
}
</style>