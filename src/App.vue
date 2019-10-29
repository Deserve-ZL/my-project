<template>
  <div id="app">
    <!-- 导航栏 -->
    <van-nav-bar :title="nav_title" left-text="返回" @click-left="goBack" left-arrow fixed>
      <div class="search" slot="right">
        <van-field v-model="search_value" v-show="in_show" placeholder="搜索" />
        <van-icon class="search_icon" name="search" size="1.7em" @click="search" />
      </div>
    </van-nav-bar>

    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view class="app-center"></router-view>
    </transition>
    <!-- 底部标签栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/publish" icon="plus">发布</van-tabbar-item>
      <van-tabbar-item replace to="/chat" icon="chat-o" info="5">消息</van-tabbar-item>
      <van-tabbar-item replace to="/mineinfo" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-model默认绑定选中标签的索引值，通过修改v-model即可切换选中的标签
      active: 0,
      search_value: "",
      in_show: false,
      icon_show: true,
      nav_title: "二手市场"
    };
  },
  methods: {
    // 返回
    goBack() {
      this.$router.go(-1);
    },
    // 搜索
    search() {
      this.in_show = !this.in_show;
      // this.in_show=!this.in_show;
      this.nav_title = "";
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#app {
  margin-top: 47px;
  // overflow-x: hidden;
  .search {
    display: flex;
    align-items: center;
    .search_icon {
    }
  }
}
// 添加页面切换动画
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>>


