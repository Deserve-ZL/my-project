<template>
  <div>
    <!-- NoticeBar 通知栏 -->
    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="volume-o"
      mode="closeable"
      :scrollable="true"
    >通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容</van-notice-bar>

    <!-- Swipe 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- Tab 标签页 -->
    <van-tabs v-model="active" sticky animated swipeable>
      <!-- Card 卡片 物品列表-->
      <van-tab title="全部">
        <subgoodslist :sort_id="1"></subgoodslist>
      </van-tab>
      <van-tab title="服装">
        <subgoodslist :sort_id="2"></subgoodslist>
      </van-tab>
      <van-tab title="数码">
        <subgoodslist :sort_id="3"></subgoodslist>
      </van-tab>
      <van-tab title="运动">
        <subgoodslist :sort_id="4"></subgoodslist>
      </van-tab>
      <van-tab title="图书">
        <subgoodslist :sort_id="5"></subgoodslist>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 物品列表
import subgoodslist from "@/components/subcomponents/subGoodsList";

export default {
  data() {
    return {
      active: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    //商品详情页跳转-使用编程式路由跳转
    goDetail(id) {
      this.$router.push({ name: "goodsInfo", params: { id } });
      // console.log("11");
    }
  },
  //注册子组件，物品列表
  components: {
    subgoodslist
  }
};
</script>
<style lang="scss" scoped>
.swipe {
  img {
    width: 100%;
    height: 180px;
  }
}
</style>

