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
          <van-button
            @click="delStarOne(item.goodId)"
            icon="delete"
            type="primary"
            size="mini"
            round
          />
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
      goods_id_list: [
        {
          goodId: "87",
          date: "Sat Nov 02 2019 22:27:35 GMT+0800 (中国标准时间)"
        }
      ]
    };
  },
  mounted() {
    this.getStarList(this.user_id);
  },
  beforeUpdate() {
    if (this.goods_id_list.length === 0) {
      Dialog({ message: "您还没收藏任何物品" }).then(() => {
        this.$router.go(-1);
      });
    }
  },
  methods: {
    // 获取用户收藏物品列表
    getStarList(userid) {
      let that = this;
      that.$axios
        .get("/users/star/list?id=" + userid)
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            that.goods_id_list = res.result.list;
            // console.log(that.goods_id_list[0].date);
          } else {
            console.log("获取收藏物品列表失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    delStarOne(goodId) {
      this.$axios
        .post("/users/star/del", {
          userId: this.user_id,
          goodId: goodId
        })
        .then(res => {
          if (res.data.status === "0") {
            // 删除成功重新请求数据
            this.getStarList();
            this.$notify({ type: "success", message: "删除成功" });
          } else {
            this.$notify({ type: "success", message: "删除失败" });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
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