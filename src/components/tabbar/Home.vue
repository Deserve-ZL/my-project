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
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">
        <img src="@/assets/logo.png" />
        <img src="@/assets/logo.png" />
        <img src="@/assets/logo.png" />
        <img src="@/assets/logo.png" />
        <img src="@/assets/logo.png" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>
<style scoped>
.swipe img {
  width: 100%;
  height: 200px;
}
</style>
