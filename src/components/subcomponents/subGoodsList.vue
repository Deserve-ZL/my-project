<template>
  <div>
    <van-card
      :title="item.title"
      :desc="item.content"
      :origin-price="item.old_price"
      :price="item.new_price"
      :thumb="item.img_url"
      :tag="item.tag"
      v-for="item in list"
      :key="item.id"
      @click.native="goDetail(item.id)"
    >
      <div slot="tags"></div>
      <div class="card-bottom" slot="bottom">
        <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>{{item.seller_name}}</span>
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 87,
          title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
          add_time: "2015-04-19T16:51:03.000Z",
          content: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
          click: 0,
          img_url:
            "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
          new_price: 2195,
          old_price: 2499,
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
  methods: {
    //商品详情页跳转-使用编程式路由跳转
    goDetail(id) {
      this.$router.push({ name: "goodsInfo", params: { id } });
      console.log(this.sort_id);
    }
  },
  props: ["sort_id"]
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
</style>
