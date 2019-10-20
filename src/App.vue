<template>
  <div id="app">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部标签栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/publish" icon="plus" info="5">发布</van-tabbar-item>
      <van-tabbar-item replace to="/chat" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/mineinfo" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-model默认绑定选中标签的索引值，通过修改v-model即可切换选中的标签
      active: 0
    };
  }
};
</script>

<style>
</style>
