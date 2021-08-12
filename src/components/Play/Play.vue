<template>
  <div class="Play">
    <!-- 下播放栏制作 -->
    <div class="butmusic">
      <!-- 展开播放栏 -->
      <div class="w butmusic-bx">
        <div class="butmusic-1"
          ><a href="#" class="prv"></a>
          <a href="#" class="ply"></a>
          <a href="#" class="nxt"></a>
        </div>
        <div class="butmusic-2">
          <img src="../../assets/img/shier.jpg" alt="" class="shier" />
          <a href="#" class="shier-name">十二</a>
          <a href="#" class="shier-singer">留声玩具</a>
          <a href="#" class="shier-lj"></a>
          <div class="jdt-f">
            <div class="jdt"></div>
            <div class="time">00:57/04:35</div>
          </div>
        </div>
        <div class="butmusic-3">
          <a href="#" class="butmusic-3-1"></a>
          <a href="#" class="butmusic-3-2"></a>
          <a href="#" class="butmusic-3-3"></a>
        </div>
        <div class="butmusic-4"></div>
        <div class="butmusic-lock"><a href="#" class="abc"></a></div>
      </div>
      <div class="hand-music"></div> </div
  ></div>
</template>
<script>
import api from "@/api/demo.js";

export default {
  name: "Play",
  data() {
    return {
      arr1: [],
      num: "1",
    };
  },
  async created() {
    const params = {};
    const data1 = await api.getBanDans1(params);
    this.arr1 = data1.hotSongs;
  },
};
</script>
<style scoped>
.butmusic {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(58, 58, 58, 0.7);
}

.butmusic-bx {
  height: 100%;
}

.butmusic-1 a {
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin-right: 10px;
}

.butmusic-1 .prv {
  margin-top: 12px;
  background-image: url(../../assets/img/playmusic.png);
  background-position: 0 -130px;
}

.butmusic-1 .ply {
  width: 36px;
  height: 36px;
  margin-top: 5px;
  background-image: url(../../assets/img/playmusic.png);
  background-position: -40px -204px;
}

.butmusic-1 .nxt {
  margin-top: 12px;
  background-image: url(../../assets/img/playmusic.png);
  background-position: -110px -130px;
}

.butmusic-2 {
  position: absolute;
  display: block;
  width: 610px;
  height: 35px;
  margin-top: 7px;
  margin-left: 150px;
}

.shier {
  display: inline-block;
  border-radius: 3px;
}

.butmusic-2 a {
  display: inline-block;
  margin-left: 5px;
  vertical-align: top;
}

.butmusic-2 .shier-name {
  color: beige;
}

.shier-lj {
  position: relative;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  background-image: url(../../assets/img/playmusic.png);
  background-position: -130px -103px;
}

.jdt-f {
  position: relative;
  width: 565px;
  height: 20px;
  margin-top: -15px;
  margin-left: 43px;
}

.jdt {
  display: inline-block;
  width: 465px;
  height: 8px;
  background-color: cyan;
  border-radius: 5px;
}

.time {
  display: inline-block;
  margin-left: 15px;
  color: darkkhaki;
}

.butmusic-lock {
  position: relative;
  float: right;
  width: 50px;
  height: 25px;
  margin-top: -25px;
  margin-right: -160px;
  text-align: center;
  background: rgba(58, 58, 58, 0.7);
  border-radius: 10px 10px 0 0;
}

.butmusic-lock .abc {
  display: inline-block;
  width: 15px;
  height: 25px;
  margin-top: 5px;
  background-image: url(../../assets/img/playmusic.png);
  background-position: -80px -380px;

  /* -100 */
}

.hand-music {
  position: relative;
  width: 100%;
  height: 5px;
  margin-top: -55px;
  background-color: dodgerblue;
}

.butmusic-3 {
  position: absolute;
  top: 12px;
  right: 340px;
}

.butmusic-3 a {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url(../../assets/img/playbar.png);
  background-position: -88px -163px;
}
</style>
