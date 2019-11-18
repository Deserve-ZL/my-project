<template>
  <div>
    <subAddress :component_tag="'user'"></subAddress>
  </div>
</template>
<script>
import subAddress from "@/components/subcomponents/subAddress";
export default {
  data() {
    return {};
  },
  components: {
    subAddress
  }
};
</script>