<template>
  <div class="login">
    <van-image class="login_img" width="100" height="100" src="/static/login.png" />
    <van-cell-group :border="false">
      <van-field label=" " right-icon="1" placeholder=" " left-icon="1" disabled />
      <van-field
        v-model="userName"
        label-width="20%"
        label="账号"
        right-icon="question-o"
        placeholder="请输入学号"
        @click-right-icon="$toast('默认账号为学号')"
        left-icon="contact"
      />
      <van-field
        v-model="userPwd"
        type="password"
        label-width="20%"
        label="密码"
        placeholder="请输入密码"
        left-icon="contact"
      />
      <van-button
        class="login_btn"
        @click="btnLogin"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
      >登录</van-button>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return { userName: "", userPwd: "" };
  },
  methods: {
    btnLogin() {
      if (this.userName === "" || this.userPwd === "") {
        // this.$toast.fail("请输入账号和密码");
        this.$notify({ type: "warning", message: "请输入账号和密码！" });
      } else {
        // 登录请求
        let that = this;
        that.$axios
          .post("/users/login", {
            userName: that.userName,
            userPwd: that.userPwd
          })
          .then(res => {
            if (res.data.status === "0") {
              that.userName = that.userPwd = "";
              // 把用户名和用户id放入vuex
              that.$router.push({ name: "MineInfo" });
              that.$store.commit("getUserName", res.data.result.user_name);
              that.$store.commit("getUserId", res.data.result.user_id);
              console.log("登录成功" + res.data.status);
            } else {
              console.log("登录失败" + res.data.status);
              this.$notify({ type: "warning", message: "账号或密码错误！" });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  margin-top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login_btn {
    margin: 5px;
    width: 100%;
  }
}
</style>