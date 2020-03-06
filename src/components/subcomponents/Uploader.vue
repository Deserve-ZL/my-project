<template>
  <div>
    <!-- 通过v-model可以绑定已经上传的图片列表，并展示图片列表的预览图 -->
    <!-- 文件上传完毕后会触发after-read回调函数，获取到对应的file对象 -->
    <van-uploader :after-read="afterRead" v-model="fileList" multiple max-count="4" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    // 文件上传前检验
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type.indexOf("image/")) {
          console.log(file.type);
          console.log("请上传图片");
          reject();
        } else if (file.size > 1024 * 1024 * 5) {
          console.log("图片大小超出限制，请重新选择！");
          reject();
        } else {
          resolve();
        }
      });
    },
    // 文件上传完毕后会触发after-read回调函数，获取到对应的file对象
    afterRead(file) {
      // 将文件上传至服务器
      // 提取fileList中的file
      const files = [];
      for (let i = 0; i < this.fileList.length; i++) {
        files.push(this.fileList[i].file)
      }
      // console.log(this.fileList[0].file);
      // console.log(files);
      // 上传文件file数组提交父组件
      this.$emit("func",files);

      // FormData上传
      // let formData = new FormData();
      // formData.append("file",file.file);
      // this.$axios
      //   .post("/goods/uploadone", formData, {
      //     "Content-Type": "multipart/form-data"
      //   })
      //   .then(res => {
      //     if (res.data.status === "0") {
      //       console.log("上传成功" + res.data.status);
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

      // base64上传
      // this.$axios
      //   .post("/goods/upload111", {
      //     frontPic: this.fileList[1].content.replace(
      //       /^data:image\/\w+;base64,/,
      //       ""
      //     )
      //   })
      // 文件读取
      // this.$axios
      //   .get("/goods/loadimg")
      //   .then(res => {
      //     if (res.data.status === "0") {
      //       console.log(res.data);
      //     }
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>