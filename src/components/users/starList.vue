<template>
  <div>
    <div v-for="item in goods_id_list" :key="item.id">
      <subGoodList :goods_id="item.goodId"></subGoodList>
      <van-cell title=" " :value="item.date | formatDate" />
    </div>
  </div>
</template>
<script>
import subGoodList from "@/components/subcomponents/subGoodsList";
export default {
  data() {
    return {
      goods_id_list: [
        {
          goodId: "87",
          date: "Sat Nov 02 2019 22:27:35 GMT+0800 (中国标准时间)"
        }
      ]
    };
  },
  mounted() {
    this.getStarList("123");
  },
  methods: {
    getStarList(userid) {
      let that = this;
      that.$axios
        .get("/users/star/list?id=" + userid)
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            that.goods_id_list = res.result.list;
            console.log(that.goods_id_list);
          } else {
            console.log("goods_id_list_error");
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