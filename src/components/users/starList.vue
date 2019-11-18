<template>
  <div>
    <div v-for="item in goods_id_list" :key="item.id">
      <subGoodList :goods_id="item.goodId"></subGoodList>
      <van-cell title=" " :value="item.date | formatDate" />
    </div>
  </div>
</template>
<script>
// 导入公共物品列表
import subGoodList from "@/components/subcomponents/subGoodsList";
export default {
  data() {
    return {
      user_id:this.$store.state.user_id,
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
            // console.log(that.goods_id_list);
          } else {
            console.log("获取收藏物品列表失败");
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