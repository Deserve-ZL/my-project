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
    <van-tabs v-model="active" sticky>
      <!-- Card 卡片 物品列表-->
      <van-tab title="衣服">
        <subgoodslist @click.native="goDetail(1)"></subgoodslist>
      </van-tab>
      <van-tab title="标签 2">
        <subgoodslist @click.native="goDetail(2)"></subgoodslist>
      </van-tab>
      <van-tab title="标签 3">
        <subgoodslist @click.native="goDetail(3)"></subgoodslist>
      </van-tab>
      <van-tab title="标签 4">
        <subgoodslist @click.native="goDetail(4)"></subgoodslist>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
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
<style scoped>
.swipe img {
  width: 100%;
  height: 180px;
}
</style>
