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
        // { url: "https://cloud-image", isImage: true }
      ],
      files: {
        name: "",
        type: ""
      }
    };
  },
  methods: {
    // 文件上传完毕后会触发after-read回调函数，获取到对应的file对象
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.files.name = file.file.name; // 获取文件名
      this.files.type = file.file.type; // 获取类型
      console.log(file);
      console.log(file.file.name + file.file.type);
      console.log(
        this.fileList[2].content.replace(/^data:image\/\w+;base64,/, "")
      );
      this.$axios
        .post("/goods/put", {
          frontPic: this.fileList[2].content.replace(
            /^data:image\/\w+;base64,/,
            ""
          )
        })
        
      console.log(this.dataURLtoFile(file.content));
    },
    dataURLtoFile(dataurl) {
      var arr = dataurl.split(","),
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], this.files.name, {
        type: this.files.type
      });
    }
  }
};
</script>