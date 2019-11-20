<template>
  <div>
    <div v-for="item in orderList" :key="item.id">
      <span>{{"订单号："+item.orderId}}</span>
      
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
      <subgoodslist :goods_id="item.goodId"></subgoodslist>
      <!-- 订单信息 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item title="订单信息" name="1">买家：{{item.buyerName}}    卖家：{{item.sellerName}}交易方式：{{item.buyWay}}{{item.date | formatDate}}</van-collapse-item>
        <van-collapse-item title="交易信息" name="2"></van-collapse-item>
      </van-collapse>
      <!-- 操作区 -->
      <div class="btnDo">
        <van-button
          type="primary"
          @click="orderStateChange"
          :disabled="order_state===3?true:false"
          round
        >{{order_state_text[order_state]}}</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import subgoodslist from "@/components/subcomponents/subGoodsList";

export default {
  data() {
    return {
      order_state: 0,
      order_state_text: ["接受交易", "确认物品", "交易完成", "交易已完成"],
      activeNames: ["1"],
      orderList: []
    };
  },
  mounted() {
      if (this.$store.state.user_id===undefined) {
          this.$notify({ type: "warning", message: "用户未登录！" });
      } else {
          this.getOrderList(this.$store.state.user_id);
      }
    
  },
  methods: {
    orderStateChange() {
      this.order_state++;
    },
    getOrderList(userid) {
      let that = this;
      that.$axios
        .get("/users/order/list?id=" + userid)
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            that.orderList = res.result.list;
            console.log(that.orderList.orderId);
            console.log("orderList_success");
          } else {
            console.log("orderList_error");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeOrderActive(){
      let that = this;
      that.$axios.post()
    }
  },
  components: {
    subgoodslist
  }
};
</script>
<style lang="scss" scoped>
.btnDo {
  margin: 0.5rem;
  display: flex;

  justify-content: flex-end;
}
</style>