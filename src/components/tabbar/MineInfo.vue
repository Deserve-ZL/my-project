<template>
  <div class="myinfo">
    <!-- 登录成功显示用户信息页面 -->
    <div class="user">
      <div class="user-poster">
        <img class="bgimg" src="/static/user_bgimg.png" />
        <div class="name_content">
          <van-image width="90" height="90" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="name">{{this.$store.state.user_name}}</div>
        </div>
      </div>

      <div>
        <van-row class="user-links">
          <van-col span="12" @click="toPublishList">
            <van-icon name="pending-payment" />发布
          </van-col>
          <van-col span="12" @click="toStartList">
            <van-icon name="logistics" />收藏
          </van-col>
        </van-row>

        <van-cell-group class="user-group"></van-cell-group>

        <van-cell-group>
          <!-- <van-cell icon="records" title="全部订单" is-link /> -->
          <van-cell icon="points" title="地址管理" is-link to="/mineinfo/address" />
          <van-cell icon="gold-coin-o" title="修改密码" is-link to="/mineinfo/changepwd" />
          <van-cell icon="close" title="退出登录" @click="loginOut" is-link />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
// 函数导入模态框
import { Dialog } from "vant";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    // 检查登录状态
    checkLogin() {
      let that = this;
      that.$axios.get("/users/checkLogin").then(res => {
        if (res.data.status === "0") {
          console.log("用户已登录");
        }
      });
    },

    // 退出登录事件
    loginOut() {
      // 提示确定模态框
      Dialog.confirm({
        title: "退出登录",
        message: "请确定退出登录"
      })
        .then(() => {
          let that = this;
          that.$axios.post("/users/logout").then(res => {
            if (res.data.status === "0") {
              that.$store.commit("getUserName", "");
              that.$store.commit("getUserId", "");
              this.$notify({ type: "success", message: "退出登录！" });
              that.$router.push({ name: "login" });
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    // 收藏页面点击事件
    toStartList() {
      this.$router.push({ name: "starList" });
    },
    // 发布页面点击事件
    toPublishList() {
      this.$router.push({ name: "publishList" });
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