<template>
  <div>
    <div class="goods-info">
      <!-- 头部卖家名字部分 -->
      <div class="seller-name">
        <van-image fit="fill" width="2.6rem" height="2.6rem" :src="goodInfo.seller_img" />
        <span class="name">{{goodInfo.seller_name}}</span>
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
          v-for="item in goodInfo.img_url"
          :key="item.id"
          :src="item.url"
        />
      </div>
      <!-- 操作区 -->
      <div class="do">
        <van-grid :column-num="2" :gutter="0" :border="false" :clickable="true">
          <van-grid-item
            icon="star-o"
            text="收藏"
            @click="star"
            :style="{'color':starColor? 'red':''}"
          />
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
      imageUrl: [
        { id: 1, src: "https://img.yzcdn.cn/vant/cat.jpeg" },
        { id: 2, src: "https://img.yzcdn.cn/vant/cat.jpeg" }
      ],
      starColor: false,
      goodInfo: [],
      id: this.$route.params.id //从路由参数对象中获取物品的 goodsid
    };
  },
  mounted() {
    this.getGoodInfo(this.id);
  },
  methods: {
    // 收藏
    star() {
      let that = this;
      that.$axios
        .post("/users/star/add", {
          userId: that.$store.state.user_id,
          goodId: that.id,
          date: Date()
        })
        .then(res => {
          if (res.data.status === "0") {
            console.log("收藏成功" + res.data.status);
          }
        })
        .catch(error => {
          console.log(error);
        });
      // 交互
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
    getGoodInfo(goodId) {
      let that = this;
      that.$axios
        .get("/goods/goodinfo?id=" + goodId)
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            console.log("goodinfo_succss");
            that.goodInfo = res.result.list;
          } else {
            console.log("goodinfo_error");
          }
        })
        .catch(error => {
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