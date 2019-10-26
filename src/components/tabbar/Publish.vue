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
    <!-- 价格 Cell 单元格 -->
    <van-cell-group>
      <van-cell title="分类" value="物品类别" icon="coupon-o" is-link center @click="getPrice" />
      <van-cell title="价格" :value="price" icon="gold-coin-o" is-link center @click="getPrice" />
    </van-cell-group>
    <van-divider />
    <!-- Button 发布按钮 -->
    <van-button round size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)">发布</van-button>

    <van-popup v-model="price_show" position="bottom" round :style="{ height: '42%' }">
      <van-cell :value="price_value" />
      <van-number-keyboard
        v-model="price_value"
        :show="NumKey_show"
        :maxlength="6"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @hide="price='1'"
      />
    </van-popup>
  </div>
</template>

<script>
import uploader from "@/components/subcomponents/Uploader";

export default {
  data() {
    return {
      title: "",
      content: "",
      price_show: false,
      NumKey_show: false,
      price_value: "",
      price: "开个价"
    };
  },
  created() {},
  methods: {
    getPrice() {
      // this.$toast.success("成功文案");
      // console.log(this.title + this.content);
      this.price_show = true;
      this.NumKey_show = true;
      console.log(this.price);
    }
  },
  //注册子组件，文经上传
  components: {
    uploader
  }
};
</script>