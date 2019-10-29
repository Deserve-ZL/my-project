<template>
  <div>
    <!-- 物品信息 -->
    <div>
      <goodBuyInfo :goods_id="id"></goodBuyInfo>
    </div>

    <!-- 交易方式选择 -->
    <van-radio-group v-model="buyRadio">
      <van-cell-group>
        <van-cell title="线下交易" clickable @click="radio = '1'" >
          <van-radio slot="right-icon" name="线下交易" checked-color="#07c160" />
        </van-cell>
        <van-cell title="网上交易" clickable @click="radio = '2'">
          <van-radio slot="right-icon" name="网上交易" checked-color="#07c160" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <!-- 提交订单 -->
    <van-submit-bar label="价格：" :price="buyPrice" button-text="提交" @submit="onSubmit" />
  </div>
</template>
<script>
import subgoodslist from "@/components/subcomponents/subGoodsList";
export default {
  data() {
    return {
      buyPrice: 0,
      id: this.$route.params.id, //从路由参数对象中获取物品的 goodsid
      buyRadio: ""
    };
  },
  methods: {
    onSubmit() {}
  },
  //注册子组件，物品详情
  components: {
    goodBuyInfo: subgoodslist
  }
};
</script>
<style lang="scss" scoped>
</style>