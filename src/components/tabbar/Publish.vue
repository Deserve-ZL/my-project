<template>
  <div>
    <!-- <h3>这是发布页面</h3> -->
    <!-- 物品描述 -->
    <van-cell-group>
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        placeholder="请输入品牌型号，新旧程度，入手渠道，转手原因..."
      />
    </van-cell-group>
    <!-- Uploader 文件图片上传 子组件-->
    <uploader></uploader>
    <!-- Divider 分割线 -->
    <van-divider />
    <!-- 价格 Cell 单元格 -->
    <van-cell-group>
      <van-cell title="分类" value="开个价" icon="coupon-o" is-link center @click="getPrice" />
      <van-cell title="价格" value="物品类别" icon="gold-coin-o" is-link center />
    </van-cell-group>
    <van-divider />
    <!-- Button 发布按钮 -->
    <van-button round size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)">发布</van-button>
  </div>
</template>

<script>
import uploader from "@/components/subcomponents/Uploader";

export default {
  data() {
    return {
      message: ""
    };
  },
  created() {},
  methods: {
    getPrice() {
      this.$toast.success('成功文案');
      console.log("123")
    }
  },
  //注册子组件，文经上传
  components: {
    uploader
  }
};
</script>