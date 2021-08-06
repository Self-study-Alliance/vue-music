<template>
  <div id="demohome">
    <nav-top></nav-top>
    <nav-next></nav-next>
    <lun-bo></lun-bo>
    <tui-jian></tui-jian>
    <xin-die></xin-die>
    <ban-dan></ban-dan>
    <play></play>
  </div>
</template>

<script>
import NavNext from "../../components/navtop/NavNext.vue";
import NavTop from "../../components/navtop/NavTop.vue";
import LunBo from "../../components/LunBo/LunBo.vue";
import TuiJian from "../../components/TuiJian/TuiJian.vue";
import XinDie from "../../components/TuiJian/XinDie.vue";
import BanDan from "../../components/TuiJian/BanDan.vue";
import Play from "../../components/Play/Play.vue";

export default {
  name: "DemoHome",
  components: {
    NavTop,
    NavNext,
    LunBo,
    TuiJian,
    XinDie,
    BanDan,
    Play,
  },
};
</script>

<style lang="scss" scoped>
@import "./demo";
</style>
