<template>
  <div>
    <!-- 通过v-model可以绑定已经上传的图片列表，并展示图片列表的预览图 -->
    <!-- 文件上传完毕后会触发after-read回调函数，获取到对应的file对象 -->
    <van-uploader :after-read="afterRead" v-model="fileList" multiple />
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    // 文件上传完毕后会触发after-read回调函数，获取到对应的file对象
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>