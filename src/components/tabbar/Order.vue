<template>
  <div>
    <orderInfo v-for="item in orderList" :key="item.id" :orderList="item"></orderInfo>
  </div>
</template>
<script>
import orderInfo from "@/components/order/orderInfo";
import { Dialog } from "vant";
export default {
  data() {
    return {
      orderList: []
    };
  },
  mounted() {
    if (this.$store.state.user_id === "") {
      this.$notify({ type: "warning", message: "用户未登录！" });
    } else {
      this.getOrderList(this.$store.state.user_id);
    }
  },
  methods: {
    getOrderList(userid) {
      this.$axios
        .get("/users/order/list?id=" + userid)
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            this.orderList = res.result.list;
            this.$store.commit(
              "getOrderList_len",
              this.orderList.length.toString()
            );
            console.log(this.orderList.length);
            if (this.orderList.length === 0) {
              Dialog({ message: "您还没有任何交易订单" }).then(() => {
                this.$router.push({ name: "Home" });
              });
            }
            // console.log(this.orderList.orderId);
            console.log("orderList_success");
          } else {
            console.log("orderList_error");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    orderInfo
  }
};
</script>