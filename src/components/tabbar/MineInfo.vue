<template>
  <div>
    <!-- 顶部区域 -->
    <div class="name_content">
      <van-image width="90" height="90" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">
        <span>没有感情的名字</span>
        <div>
          <van-tag plain type="primary" size="large">信用优秀</van-tag>
        </div>
      </div>
    </div>
    <!-- 我发布的 -->
    <!-- 我购买的 -->
    <!-- 我的联系人 -->
    <!-- 地址设置 -->

  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.name_content {
  display: flex;
  .name {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
  }
}
</style>