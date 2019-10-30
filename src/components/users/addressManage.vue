<template>
  <div>
    <subAddress :user_id="2"></subAddress>
    <van-popup v-model="address_edit_pop_show" position="bottom" :style="{ height: '90%' }">
      <subAddressEdit></subAddressEdit>
    </van-popup>
  </div>
</template>
<script>
import subAddress from "@/components/subcomponents/subAddress";
import subAddressEdit from "@/components/subcomponents/subAddressEdit";
export default {
  data() {
    return { address_edit_pop_show: true };
  },
  components: {
    subAddress,
    subAddressEdit
  }
};
</script>