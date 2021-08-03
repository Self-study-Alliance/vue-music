<template>
  <div id="demohome">
    <nav-top></nav-top>
    <nav-next></nav-next>
    <lun-bo></lun-bo>
  </div>
</template>

<script>
import NavNext from "../../components/navtop/NavNext.vue";
import NavTop from "../../components/navtop/NavTop.vue";
import LunBo from "../../components/LunBo/LunBo.vue";
export default {
  name: "DemoHome",
  components: {
    NavTop,
    NavNext,
    LunBo,
  },
};
</script>

<style lang="scss" scoped>
@import "./demo";
</style>
