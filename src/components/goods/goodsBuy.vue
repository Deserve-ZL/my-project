<template>
  <div>
    <!-- 物品信息 -->
    <div>
      <goodBuyInfo @getPirate="getPirate" :goods_id="id"></goodBuyInfo>
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
      opt_address: {}
    };
  },
  methods: {
    // 提交事件
    onSubmit() {
      console.log("提交订单");
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
    getPirate(num) {
      this.buyPrice = parseInt(num) * 100 ;
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