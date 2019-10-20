<template>
  <div>
    <van-card
      price="2.00"
      title="低价出售全新衣服"
      desc="因为购买后不喜欢，现在打折出售全新的衣服啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
      origin-price="10.00"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      tag="全新"
    >
      <div slot="tags"></div>
      <div class="card-bottom" slot="bottom">
        <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>不知道叫什么名字好</span>
      </div>
    </van-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.card-bottom span {
  margin-left: 0.5rem;
}
</style>