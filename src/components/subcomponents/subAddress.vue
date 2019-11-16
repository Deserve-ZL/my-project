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
    <!-- 地址编辑添加弹出层 -->
    <van-popup v-model="address_edit_pop_show" position="bottom" :style="{ height: '70%' }">
      <!-- 地址编辑子组件  子->父传值，获取子组件（地址编辑）添加的地址数据-->
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
      // 地址操作按钮
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
      // 地址编辑弹出层
      address_edit_pop_show: false
    };
  },
  mounted() {
    // 改变add按钮文字
    this.changeButtonText();
    // 根据user_id请求地址列表
    this.getAddressList(this.user_id);
  },
  methods: {
    // 根据user_id请求用户地址列表
    getAddressList(userid) {
      let that = this;
      that.$axios
        .get("/users/address/list?id=" + userid)
        .then(function(response) {
          let res = response.data;
          if (res.status === "0") {
            that.address_list = res.result.list;
            // console.log(that.address_list);
          } else {
            console.log("获取用户地址列表失败");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 根据user_id改变add按钮文字
    changeButtonText() {
      if (this.component_tag === "buy") {
        this.add_button_text = "确定";
      } else {
        this.add_button_text = "添加地址";
      }
    },
    // 监听地址选择，获取选择的地址对象数据
    sel_address(item, index) {
      this.sel_address_data = item;
    },
    // 添加地址
    onAdd() {
      if (this.component_tag === "buy") {
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
    // 获取子组件-subAddressEdit添加的地址数据
    getAddressEdit(obj) {
      if (obj.name != "") {
        this.addAddress(obj);
        // 根据user_id请求地址列表
        this.getAddressList();
        this.address_edit_pop_show = false;
      }
    },
    // 根据user_id,添加地址POST方法
    addAddress(obj) {
      let that = this;
      that.$axios
        .post("/users/address/add", {
          userId: that.user_id,
          id: that.address_list.length + 1,
          name: obj.name,
          tel: obj.tel,
          address: obj.addressDetail
        })
        .then(res => {
          // console.log(res);
          if (res.data.status === "0") {
            console.log("添加地址成功" + res.data.status);
          } else {
            console.log("添加地址失败" + res.data.status);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    subAddressEdit
  },
  // user_id  用户id
  //component_tag 组件标记
  props: ["user_id", "component_tag"]
};
</script>

