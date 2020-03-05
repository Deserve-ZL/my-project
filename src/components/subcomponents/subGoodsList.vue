<template>
  <div>
    <van-card
      :title="item.title"
      :desc="item.content"
      :origin-price="item.old_price"
      :price="item.new_price"
      :thumb="item.img_url[0].url"
      :tag="item.tag"
      v-for="item in goodsList"
      :key="item.id"
      @click.native="goDetail(item.goodId)"
    >
      <!-- 标记 -->
      <div slot="tags"></div>
      <!-- 发布人头像和名字 -->
      <div class="card-bottom" slot="bottom">
        <van-image round width="2rem" height="2rem" :src="item.seller_img" />
        <span>{{item.seller_name}}</span>
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [],
      list: [
        {
          id: 87,
          title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
          add_time: "2015-04-19T16:51:03.000Z",
          content: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
          click: 0,
          img_url:
            "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
          new_price: "2195.00",
          old_price: "2499.00",
          stock_quantity: 60,
          seller_name: "一个名字而已",
          tag: "全新"
        },
        {
          id: 88,
          seller_name: "第二个名字而已",
          title: "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
          content: "iPhone 6 Plus设计上和iPhone 6",
          img_url:
            "http://demo.dtcms.net/upload/201504/20/thumb_201504200059017695.jpg",
          new_price: 5780,
          old_price: 6388,
          stock_quantity: 200,
          tag: "",
          add_time: "2015-04-19T17:00:58.000Z",
          click: 0
        }
      ] //物品列表数据数组
    };
  },
  mounted() {
    if (this.goods_id === undefined) {
      // Home主页物品分类列表父组件调用
      this.goodsList = [];
      this.getGoodsList(this.sort_id);
    } else {
      // goodsBuy物品购买页，选择物品信息显示父组件调用
      this.goodsList = [];
      this.getGoodOneInfo(this.goods_id);
    }
  },
  beforeUpdate() {},
  methods: {
    // 获取物品列表
    getGoodsList(id) {
      // console.log(this.sort_id);
      // goodsList
      let that = this;
      that.$axios
        .get("/goods/list/" + id)
        .then(function(response) {
          let res = response.data;
          if (res.status === "0") {
            that.goodsList = res.result.list;
            // console.log(that.goodsList);
          } else {
            console.log("goodsList_error");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 获取购买的物品信息
    getGoodOneInfo(id) {
      let that = this;
      that.$axios
        .get("/goods/goodinfo?id=" + id)
        .then(function(response) {
          let res = response.data;
          if (res.status == "0") {
            that.goodsList = [];
            that.goodsList = res.result;
            // 向父组件goodBuy传递物品价格
            let goodInfo = {
              price: res.result.list.new_price,
              name: res.result.list.seller_name
            };
            that.$emit("getGoodInfo", goodInfo);
          } else {
            console.log("error");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //商品详情页跳转-使用编程式路由跳转
    goDetail(id) {
      this.$router.push({ name: "goodsInfo", params: { id } });
    }
  },
  props: ["sort_id", "goods_id"]
};
</script>
<style lang="scss" scoped>
.card-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  span {
    margin-left: 0.5rem;
  }
}
.van-card__price {
  color: #FF0000;
}
</style>
