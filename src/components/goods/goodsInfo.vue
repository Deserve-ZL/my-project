<template>
  <div>
    <div class="goods-info">
      <!-- 头部卖家名字部分 -->
      <div class="seller-name">
        <van-image
          fit="fill"
          width="2.6rem"
          height="2.6rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="name">不知道叫什么名字好</span>
        <van-tag mark type="primary">信用极好</van-tag>
      </div>
      <van-divider />
      <!-- 物品价格 -->
      <div class="price">
        <span style="color: red;font-weight: bold;
      font-size: 20px;">￥{{goodInfo.new_price}}</span>
        <span class="old">￥{{goodInfo.old_price}}</span>
      </div>
      <!-- 物品标题 -->
      <div class="title">{{goodInfo.title}}</div>
      <!-- 物品内容 -->
      <div class="info">{{goodInfo.content}}</div>
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
          <van-grid-item icon="cart" text="购买" @click="toBuy" style="color: red;" />
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
      starColor: false,
      goodInfo: [],
      id: this.$route.params.id //从路由参数对象中获取物品的 goodsid
    };
  },
  mounted() {
    this.getGoodInfo();
  },
  methods: {
    // 点赞
    good() {
      this.goodColor = !this.goodColor;
      if (this.goodColor === true) {
        this.$toast({
          message: "点个赞",
          icon: "good-job-o",
          duration: 1500
        });
      }
    },
    // 收藏
    star() {
      this.starColor = !this.starColor;
      if (this.starColor === true) {
        this.$toast({
          message: "值得珍藏",
          icon: "star-o",
          duration: 1500
        });
      }
    },
    // 根据物品goodId请求物品数据
    getGoodInfo() {
      let that = this;
      that.$axios
        .get("/goods/goodinfo?id=" + that.id)
        .then(function(response) {
          let res = response.data;
          if (res.status == "0") {
            console.log("goodinfo_succss");
            that.goodInfo = res.result.list;
          } else {
            console.log("goodinfo_error");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 跳转购买页
    toBuy() {
      let id = this.id;
      this.$router.push({ name: "goodsBuy", params: { id } });
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
      font-size: 1rem;
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
  .title {
    margin: 5px;
    margin-top: 20px;
    font-size: 1.2rem;
  }
  .info {
    margin: 5px;
    margin-top: 20px;
  }
  // .goods-img {
  // }
}
</style>