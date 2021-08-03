<template>
  <div id="app">
    <!-- <nav-top></nav-top>
    <nav-next></nav-next>
    <lun-bo></lun-bo> -->
    <demo-home></demo-home>
  </div>
</template>

<script>
// import NavNext from "./components/navtop/NavNext.vue";
// import NavTop from "./components/navtop/NavTop.vue";
// import LunBo from "./components/LunBo/LunBo.vue";
import DemoHome from "./views/demo/demo.vue";
export default {
  name: "App",
  components: {
    // NavTop,
    // NavNext,
    // LunBo,
    DemoHome,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
