<template>
  <div class="orderInfo">
    <span class="orderNum">{{"订单号："+orderList.orderId}}</span>
    <!-- 订单进度条 -->
    <van-steps
      :active="order_state"
      active-icon="success"
      active-color="#38f"
      inactive-icon="arrow"
    >
      <van-step>提交订单</van-step>
      <van-step>卖家接受</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <!-- 物品信息 -->
    <subgoodslist :goods_id="orderList.goodId+'A'" :page_tag="page_order"></subgoodslist>
    <!-- 订单信息 -->
    <van-collapse v-model="activeNames">
      <van-collapse-item
        title="订单信息"
        name="1"
      >交易方式：{{orderList.buyWay}} {{orderList.date | formatDate}}</van-collapse-item>
      <van-collapse-item
        title="交易信息"
        name="2"
      >买家：{{orderList.buyerName}} 卖家：{{orderList.sellerName}}</van-collapse-item>
      <van-collapse-item
        title="地址信息"
        name="3"
        v-if="orderList.buyWay==='网上交易'?true:false"
      >姓名：{{orderList.address.name}} 电话：{{orderList.address.tel}} 地址：{{orderList.address.address}}</van-collapse-item>
    </van-collapse>
    <!-- 操作区 -->
    <div class="btnDo">
      <van-button
        type="primary"
        @click="orderStateChange"
        :disabled="btnDisplay"
        round
      >{{order_state_text[order_state]}}</van-button>
    </div>
  </div>
</template>
<script>
// 导入物品列表子组件
import subgoodslist from "@/components/subcomponents/subGoodsList";

export default {
  data() {
    return {
      order_state: -1,
      order_state_text: ["接受交易", "确认物品", "交易完成", "交易已完成"],
      activeNames: ["0"],
      btnDisplay: false,
      page_order:"page_order"
    };
  },
  mounted() {
    // 加载订单状态数据
    this.order_state = parseInt(this.orderList.active);
  },
  methods: {
    // 订单状态操作事件
    orderStateChange() {
      this.order_state++;
      this.changeOrderActive();
    },
    // 订单状态修改请求
    changeOrderActive() {
      this.$axios
        .post("/users/order/active", {
          orderId: this.orderList.orderId,
          userId: this.$store.state.user_id,
          buyerName: this.orderList.buyerName,
          sellerName: this.orderList.sellerName,
          active: this.order_state.toString(),
          date: Date()
        })
        .then(res => {
          if (res.data.status === "0") {
          } else {
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  watch: {
    // 订单状态操作用户判断
    order_state(neworder_state, oldorder_state) {
      if (this.$store.state.user_name === this.orderList.buyerName) {
        //   买家
        if (
          neworder_state === 0 ||
          neworder_state === 2 ||
          neworder_state === 3
        ) {
          this.btnDisplay = true;
        }
      } else {
        //   卖家
        if (neworder_state === 1 || neworder_state === 3) {
          this.btnDisplay = true;
        }
      }
    }
  },
  props: ["orderList"],
  components: {
    subgoodslist
  }
};
</script>
<style lang="scss" scoped>
.orderInfo {
  .orderNum {
    margin-left: 0.6rem;
    padding-top: 1rem;
  }
  .btnDo {
    margin: 0.5rem;
    display: flex;

    justify-content: flex-end;
  }
}
</style>