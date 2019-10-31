<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="address_list"
      :add-button-text="add_button_text"
      @add="onAdd"
      @edit="onEdit"
      @select="sel_address"
    />
    <van-popup v-model="address_edit_pop_show" position="bottom" :style="{ height: '70%' }">
      <subAddressEdit @son_getAddressEdit="getAddressEdit"></subAddressEdit>
    </van-popup>
  </div>
</template>

<script>
// 导入地址编辑子组件
import subAddressEdit from "@/components/subcomponents/subAddressEdit";
export default {
  data() {
    return {
      // 默认地址选择
      chosenAddressId: "0",
      add_button_text: " ",
      // 地址列表
      address_list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      // 选择的地址数据
      sel_address_data: {},
      address_edit_pop_show: false
    };
  },
  mounted() {
    // 改变add按钮文字
    this.changeButtonText();
  },
  methods: {
    // 改变add按钮文字
    changeButtonText() {
      if (this.user_id == undefined) {
        this.add_button_text = "确定";
      } else {
        this.add_button_text = "添加地址";
      }
    },
    // 监听地址选择，获取选择的地址对象数据
    sel_address(item, index) {
      this.sel_address_data = item;
    },
    onAdd() {
      if (this.user_id == undefined) {
        // 向父组件-goodsBuy物品购买页传递选择的地址数据
        this.$emit("son_getAddress", this.sel_address_data);
      } else {
        // 地址管理页，添加地址
        // console.log(this.user_id);
        this.address_edit_pop_show = true;
      }
    },
    // 编辑地址点击事件
    onEdit(item, index) {
      console.log("编辑地址:" + index);
    },
    // 获取子组件添加的地址数据
    getAddressEdit(obj) {
      if (obj.name != "") {
        this.address_edit_pop_show = false;
        this.address_list.push({
          id: this.address_list.length,
          name: obj.name,
          tel: obj.tel,
          address: obj.addressDetail
        });
      }
    }
  },
  components: {
    subAddressEdit
  },
  // 地址管理页传递的用户id
  props: ["user_id"]
};
</script>

