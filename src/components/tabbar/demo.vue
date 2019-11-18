<template>
  <div class="myinfo">
    <!-- 登录页面 -->
    <div class="login" v-if="login_show">
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
    <!-- 登录成功显示用户信息页面 -->
    <div class="user" v-else>
      <div class="user-poster">
        <img class="bgimg" src="/static/user_bgimg.png" />
        <div class="name_content">
          <van-image width="90" height="90" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="name">{{this.$store.state.user_name}}</div>
        </div>
      </div>

      <div>
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="pending-payment" />发布
          </van-col>
          <van-col span="6">
            <van-icon name="records" />购买
          </van-col>
          <van-col span="6">
            <van-icon name="tosend" />信息
          </van-col>
          <van-col span="6" @click="toStartList">
            <van-icon name="logistics" />收藏
          </van-col>
        </van-row>

        <van-cell-group class="user-group">
          <van-cell icon="records" title="全部订单" is-link />
        </van-cell-group>

        <van-cell-group>
          <van-cell icon="points" title="我的积分" is-link />
          <van-cell icon="gold-coin-o" title="地址管理" is-link to="/mineinfo/address" />
          <van-cell icon="close" title="退出登录" @click="loginOut" is-link />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_show: true,
      userName: "",
      userPwd: ""
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    // 登录按钮事件
    btnLogin() {
      if (this.userName === "" || this.userPwd === "") {
        this.$toast.fail("请输入账号和密码");
      } else {
        // 登录请求
        let that = this;
        that.$axios
          .post("/users/login", {
            userName: that.userName,
            userPwd: that.userPwd
          })
          .then(res => {
            console.log(res.data.result.userName);
            if (res.data.status === "0") {
              // 登录成功清除登录页面，显示用户信息页
              that.login_show = false;
              that.userName = that.userPwd = "";
              // 把用户名和用户id放入vuex
              that.$store.commit('getUserName', res.data.result.user_name);
              that.$store.commit('getUserId', res.data.result.user_id);
              console.log("登录成功" + res.data.status);
            } else {
              console.log("登录失败" + res.data.status);
              that.$toast.fail("账号或密码错误");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    // 检查登录状态
    checkLogin() {
      let that = this;
      that.$axios.get("/users/checkLogin").then(res => {
        if (res.data.status === "0") {
          that.login_show = false;
          console.log("用户已登录");
        }
      });
    },

    // 退出登录事件
    loginOut() {
      let that = this;
      that.$axios.post("/users/logout").then(res => {
        if (res.data.status === "0") {
          that.login_show = true;
          console.log("退出登录");
        }
      });
    },
    // 收藏点击事件
    toStartList() {
      this.$router.push({ name: "starList" });
    }
  }
};
</script>

<style lang="scss" scoped>
.myinfo {
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
}
.user {
  &-poster {
    position: relative;
    width: 100%;
    height: 53vw;
    display: block;
    .bgimg {
      width: 100%;
      position: absolute;
      z-index: -1;
    }
    .name_content {
      height: 100%;
      display: flex;
      padding-top: 1.2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .name {
        margin-top: 0.6rem;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>