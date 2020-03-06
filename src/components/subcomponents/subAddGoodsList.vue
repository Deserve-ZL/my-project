<template>
  <div>
    <div v-for="item in goods_id_list" :key="item.id">
      <subGoodList :goods_id="item.goodId"></subGoodList>
      <van-row class="star_do">
        <van-col class="star_text" span="18" offset="1">
          <span class="date_text">{{item.date | formatDate}}</span>
          <!-- <van-cell title=" " :value="item.date | formatDate" /> -->
        </van-col>
        <van-col span="5">
          <van-button @click="del(item.goodId)" icon="delete" type="primary" size="mini" round />
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
// 导入公共物品列表
import subGoodList from "@/components/subcomponents/subGoodsList";
import { Dialog } from "vant";
export default {
  data() {
    return {
      user_id: this.$store.state.user_id,
      goods_id_list: [],
      // 父组件使用页面标记
      page_text: "",
      del_goodId: ""
    };
  },
  mounted() {
    this.getStarList(this.user_id);
    this.ChangePageText();
  },
  beforeUpdate() {
    if (this.goods_id_list === undefined || this.goods_id_list.length === 0) {
      Dialog({ message: `您还没${this.page_text}任何物品` }).then(() => {
        this.$router.go(-1);
      });
    }
  },
  methods: {
    //  获取父组件页面信息标记
    ChangePageText() {
      this.page_text = this.page_tap === "publish" ? "发布" : "收藏";
    },
    // 获取用户收藏物品列表
    getStarList(userid) {
      let that = this;
      that.$axios
        .get(`/users/${this.page_tap}/list?id=` + userid)
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            that.goods_id_list = res.result.list;
            // console.log(that.goods_id_list[0].date);
          } else {
            console.log(`获取${this.page_text}物品列表失败`);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    del(value) {
      this.del_goodId = value;
      // 提示确定模态框
      Dialog.confirm({
        title: `取消${this.page_text}`,
        message: `请确定取消${this.page_text}`
      })
        .then(() => {
          this.delPost();
        })
        .catch(() => {
          // on cancel
        });
    },
    // 删除
    delPost() {
      this.$axios
        .post(`/users/${this.page_tap}/del`, {
          userId: this.user_id,
          goodId: this.del_goodId
        })
        .then(res => {
          if (res.data.status === "0") {
            // 删除成功重新请求数据
            this.getStarList(this.user_id);
            this.$notify({ type: "success", message: "删除成功" });
            if (this.page_tap === "publish") {
              // 下架物品
              this.delGood();
            }
          } else {
            this.$notify({ type: "success", message: "删除失败" });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    delGood() {
      this.$axios
        .post("/goods/del", { goodId: this.del_goodId })
        .then(res => {
          if (res.data.status === "0") {
            console.log("删除物品成功");
          } else {
            console.log("删除物品失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  props: ["page_tap"],
  components: {
    subGoodList
  }
};
</script>
<style lang="scss" scoped>
.star_do {
  background-color: #fafafa;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.35rem;
  .star_text {
    font-size: 1.1rem;
    .date_text {
      font-size: 1rem;
      font-weight: 300;
    }
  }
}
</style>