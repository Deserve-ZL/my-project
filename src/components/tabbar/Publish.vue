<template>
  <div>
    <!-- 物品标题描述 -->
    <van-cell-group :border="false">
      <van-field
        v-model="title"
        rows="1"
        autosize
        type="content"
        maxlength="10"
        placeholder="请输入物品标题"
        show-word-limit
      />
      <van-field
        v-model="content"
        rows="4"
        autosize
        type="textarea"
        placeholder="请输入品牌型号，新旧程度，入手渠道，转手原因..."
        maxlength="50"
        show-word-limit
      />
    </van-cell-group>
    <!-- Uploader 文件图片上传 子组件-->
    <uploader></uploader>
    <!-- Divider 分割线 -->
    <van-divider />
    <!-- 分类 价格 Cell 单元格 -->
    <van-cell-group>
      <van-cell title="分类" :value="sort" icon="coupon-o" is-link center @click="sortShow" />
      <van-cell title="价格" :value="price" icon="gold-coin-o" is-link center @click="getPrice" />
    </van-cell-group>
    <van-divider />

    <!-- Button 发布按钮 -->
    <van-button
      round
      size="large"
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      @click="pubish"
    >发布</van-button>

    <!-- 分类选择弹出层 -->
    <van-popup v-model="picker_show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="picker_show = false" @confirm="getSort" />
    </van-popup>
    <!-- 价格键盘输入弹出层 -->
    <van-popup v-model="price_show" position="bottom" round :style="{ height: '52%' }">
      <van-field
        label="价格"
        placeholder="出售价格"
        :value="new_price"
        @click="NumKey1=true,NumKey2=false"
        @blur="price=new_price"
        @input="price=new_price"
      />
      <van-field
        label="定价"
        placeholder="入手价格"
        :value="old_price"
        @click="NumKey2=true,NumKey1=false"
      />
      <!-- 是否全新复选框 -->
      <van-checkbox class="tagCheckbox" v-model="tagChecked" shape="square">全新</van-checkbox>
      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="new_price"
        :show="NumKey1"
        :maxlength="8"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @close="price_show =NumKey1= false,price=new_price"
        :transition="false"
      />
      <van-number-keyboard
        v-model="old_price"
        :show="NumKey2"
        :maxlength="8"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @close="price_show =NumKey2= false,price=new_price"
        :transition="false"
      />
    </van-popup>
  </div>
</template>

<script>
// 文件上传
import uploader from "@/components/subcomponents/Uploader";

export default {
  data() {
    return {
      // 输入框
      title: "",
      content: "",
      // 类别
      sort: "分个类",
      picker_show: false,
      columns: ["服装", "数码", "运动", "图书"],
      // 价格
      price_show: false,
      NumKey1: false,
      NumKey2: false,
      new_price: "",
      old_price: "",
      price: "开个价",
      // 是否全新
      tagChecked: false
    };
  },
  methods: {
    sortShow() {
      this.picker_show = true;
    },
    getSort(value) {
      this.sort = value;
      this.picker_show = false;
    },
    getPrice() {
      this.price_show = true;
      this.NumKey1 = true;
      console.log(this.price);
    },
    // 发布点击事件,添加物品请求
    pubish() {
      if (
        this.title != "" &&
        this.content != "" &&
        this.sort != "分个类" &&
        this.new_price != "" &&
        this.old_price != ""
      ) {
        let that = this;
        that.$axios
          .post("/goods/add", {
            goodId: Math.floor(Math.random() * 100 + 1).toString(),
            goodSort: that.sort,
            title: that.title,
            content: that.content,
            new_price: that.new_price,
            old_price: that.old_price,
            img_url: "https://img.yzcdn.cn/vant/leaf.jpg",
            seller_name: "123",
            tag: that.tagChecked ? "全新" : ""
          })
          .then(function(res) {
            if (res.data.status === "0") {
              that.$notify({ type: "success", message: "发布成功" });
              that.title = this.content = "";
              that.tagChecked = false;
            } else {
              that.$notify({ type: "warning", message: "用户未登录" });
            }
            console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.$notify({ type: "warning", message: "请完善物品信息！" });
      }
    }
  },
  //注册子组件，文经上传
  components: {
    uploader
  }
};
</script>
<style lang="scss" scoped>
.tagCheckbox {
  margin: 0.7rem;
  display: flex;
  justify-content: flex-end;
}
</style>