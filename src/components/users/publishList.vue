<template>
  <div>
    <subAddGoodList :page_tap="page_tap"></subAddGoodList>
  </div>
</template>
<script>
import subAddGoodList from "../subcomponents/subAddGoodsList";

export default {
  data() {
    return {
      page_tap: "publish"
    };
  },
  components: {
    subAddGoodList
  }
};
</script>