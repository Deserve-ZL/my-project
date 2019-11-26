<template>
  <div>
    <!-- 物品信息 -->
    <div>
      <goodBuyInfo @getGoodInfo="getGoodInfo" :goods_id="id"></goodBuyInfo>
    </div>

    <!-- 交易方式选择 -->
    <van-radio-group v-model="buyRadio" @change="opt_address_show=buyRadio=='网上交易'?true:false">
      <van-cell-group>
        <van-cell title="线下交易" clickable @click="radio = '1'">
          <van-radio slot="right-icon" name="线下交易" checked-color="#07c160" />
        </van-cell>
        <van-cell title="网上交易" clickable @click="radio = '2'">
          <van-radio slot="right-icon" name="网上交易" checked-color="#07c160" />
        </van-cell>
        <!-- 选择地址按钮 -->
        <van-cell title="选择地址" v-show="opt_address_show" clickable @click="address_pop_show=true"></van-cell>
        <!-- 显示地址 -->
        <van-cell
          v-show="address_show"
          :title="opt_address.name+'-'+opt_address.tel"
          :value="opt_address.address"
          label
        />
      </van-cell-group>
    </van-radio-group>
    <!-- 提交订单 -->
    <van-submit-bar label="价格：" :price="buyPrice" button-text="提交" @submit="onSubmit" />
    <!-- 地址选择弹出层 -->
    <van-popup v-model="address_pop_show" position="bottom" :style="{ height: '50%' }">
      <subAddress :user_id="1" :component_tag="'buy'" @son_getAddress="getAddress"></subAddress>
    </van-popup>
  </div>
</template>
<script>
// 导入物品列表和地址组件
import subgoodslist from "@/components/subcomponents/subGoodsList";
import subAddress from "@/components/subcomponents/subAddress";
export default {
  data() {
    return {
      // 总价格
      buyPrice: 0,
      id: this.$route.params.id, //从路由参数对象中获取物品的 goodsid
      // 交易方式选择
      buyRadio: "",
      // 地址显示
      address_show: false,
      // 地址选择弹出层显示
      address_pop_show: false,
      // 选择地址按钮显示
      opt_address_show: false,
      // 选择的地址数据
      opt_address: {},
      seller_name: ""
    };
  },
  methods: {
    // 提交事件
    onSubmit() {
      console.log(this.opt_address.id);
      console.log("提交订单");
      if (this.buyRadio === "") {
        this.$notify({ type: "warning", message: "请选择交易方式" });
      } else if (
        this.buyRadio === "网上交易" &&
        this.opt_address.id === undefined
      ) {
        this.$notify({ type: "warning", message: "请选择地址" });
      } else {
        let that = this;
        that.$axios
          .post("/users/order/add", {
            orderId: "AA" + new Date().getTime(),
            goodId: that.id,
            buyerName: that.$store.state.user_name,
            sellerName: that.seller_name,
            active: "0",
            buyWay: that.buyRadio,
            address: that.opt_address,
            date: Date()
          })
          .then(res => {
            if (res.data.status === "0") {
              that.$notify({ type: "success", message: "用户未登录" });
              that.$router.push({ name: "Order", params: {} });
            } else {
              that.$notify({ type: "warning", message: "用户未登录" });
            }
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    // 获取子组件的选择的地址数据
    getAddress(obj) {
      console.log(obj);
      console.log(obj.name);
      this.opt_address = obj;
      if (obj.id != "") {
        this.address_pop_show = false;
        this.address_show = true;
      }
    },
    // 获子组件传递的物品信息
    getGoodInfo(obj) {
      this.buyPrice = parseInt(obj.price) * 100;
      this.seller_name = obj.name;
    }
  },
  //注册子组件，物品详情
  components: {
    goodBuyInfo: subgoodslist,
    subAddress
  }
};
</script>
<style lang="scss" scoped>
</style>