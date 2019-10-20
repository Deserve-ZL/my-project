<template>
  <div class="goods-info">
    <!-- 头部卖家名字部分 -->
    <div class="seller-name">
      <van-image fit="fill" width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span class="name">不知道叫什么名字好</span>
      <van-tag mark type="primary">信用极好</van-tag>
    </div>
    <van-divider />
    <!-- 物品价格 -->
    <div class="price">
      <span class="new">￥100</span>
      <span class="old">￥1000</span>
    </div>

    <!-- 物品内容 -->
    <!-- 物品图片区域 -->
  </div>
</template>
<style lang="scss" scoped>
.goods-info {
  margin: 15px;
}
.seller-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.seller-name .name {
  margin-left: 15px;
  /* 加粗 */
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: 10px;
}
.price .now {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

.price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 7px;
}
</style>