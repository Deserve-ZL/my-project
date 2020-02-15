<template>
  <div class="changePwd">
    <van-cell-group>
      <van-field
        v-model="oldPwd"
        :type="inputType"
        required
        clearable
        label="原密码"
        placeholder="请输入原密码"
        :right-icon="inputIcon"
        @click-right-icon="showPwd"
      />

      <van-field
        v-model="newPwd"
        type="password"
        required
        clearable
        maxlength="12"
        label="修改密码"
        placeholder="请输入修改密码"
      />
      <van-field
        v-model="sameNewPwd"
        type="password"
        required
        maxlength="12"
        clearable
        label="确认密码"
        placeholder="请输入相同密码"
      >
        <!-- <van-switch slot="button" v-model="checked" size="25px"></van-switch> -->
      </van-field>
    </van-cell-group>
    <div class="btn">
      <van-button
        type="default"
        @click="commit"
        size="large"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
      >提交修改</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_id: this.$store.state.user_id,
      oldPwd: "",
      newPwd: "",
      sameNewPwd: "",
      checked: false,
      inputType: "password",
      inputIcon: "eye-o"
    };
  },
  methods: {
    // 提交修改
    commit() {
      if (this.oldPwd != "" && this.newPwd != "" && this.sameNewPwd != "") {
        if (this.newPwd === this.sameNewPwd) {
          let pwdInfo = {
            userId: this.user_id,
            oldPwd: this.oldPwd,
            newPwd: this.newPwd
          };
          this.changePwd(pwdInfo);
          this.oldPwd = this.newPwd = this.sameNewPwd = "";
        } else {
          this.$notify({ type: "warning", message: "请重新输入确认密码！" });
          this.sameNewPwd = ""
        }
      } else {
        this.$notify({ type: "warning", message: "请输入密码！" });
      }
    },
    // 显示隐藏密码
    showPwd() {
      if (this.inputType === "password") {
        this.inputType = "text";
        this.inputIcon = "closed-eye";
      } else {
        this.inputType = "password";
        this.inputIcon = "eye-o";
      }
    },
    changePwd(pwdInfo) {
      this.$axios
        .post("/users/pwd/change", {
          pwdInfo
        })
        .then(res => {
          if (res.data.status === "0" && res.data.result != null) {
            this.$notify({ type: "success", message: "修改密码成功" });
          } else {
            this.$notify({
              type: "danger",
              message: "原密码错误！修改密码失败"
            });
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.changePwd {
  // display: flex;
  margin: 1.5rem;
  .btn {
    padding-top: 2rem;
  }
}
</style>