<template>
  <div id="XinDie">
    <div class="top-3">
      <span class="yuan"></span>
      <a href="#" class="top-3-1">新碟上架</a>
      <div class="more">
        <a href="#">更多</a>
        <span class="youjiantou"><img src="../../assets/img/youjiantou.png" alt="" /></span>
      </div>
    </div>
    <div class="top-4">
      <div class="music-d">
        <a href="#" class="houtui top-4-jt">&#60;</a>
        <ul class="flexul">
          <li v-for="item in arr" :key="item.copyrightId">
            <a href="#" class="fengmian"><img :src="item.picUrl" alt="" class="pig-xd" /></a>
            <div class="musicer">
              <a href="#" class="musicname">{{ item.artist.name }}</a
              ><br />
              <a href="#" class="singer">{{ item.name }}</a>
            </div>
          </li>
        </ul>
        <a href="#" class="qianjin top-4-jt">></a>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/demo.js";

export default {
  name: "XinDie",
  data() {
    return {
      arr: [],
    };
  },
  async created() {
    const params = {};
    const data = await api.getXinDies(params);
    this.arr = data.albums;
    // 只获取5条数据
    this.arr.length = 5;
  },
};
</script>
<style scoped>
#XinDie {
  width: 730px;
  margin-top: 35px;
  transform: translateX(185px);
}

.top-3 {
  display: block;
  float: left;
  width: 690px;
  height: 55px;
  margin: 30px 20px 0 20px;
  border-bottom: 2px solid red;
}

.top-3 .yuan {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-top: 25px;
  border: 3px solid red;
  border-radius: 15px;
}

.top-3-1 {
  display: inline-block;
  margin-top: 15px;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
}

.top-3 .more {
  float: right;
  margin-top: 26px;
  margin-left: 250px;
}

.top-3 .youjiantou {
  width: 10px;
  height: 10px;
}

.top-4 {
  position: relative;
  display: inline-block;
  width: 690px;
  height: 190px;
  margin: 10px 20px;
  background-color: rgb(238, 235, 235);
  border: 1px solid rgb(187, 169, 169);
}

.music-d img {
  float: left;
}

.fengmian {
  display: inline-block;
  width: 115px;
  height: 100px;
  background-image: url(../../assets/img/pig-bl.png);
  background-position: 0 -570px;
}

.fengmian img {
  width: 115px;
  height: 100px;
}

.music-d li {
  display: inline-block;
  width: 115px;
  height: 145px;
  margin-top: 30px;
  margin-left: 15px;
  text-align: center;
}

.top-4-jt {
  position: absolute;
  float: right;
  font-size: 18px;
  font-weight: 900;
}

.houtui {
  top: 80px;
  left: 5px;
}

.qianjin {
  top: 80px;
  right: 10px;
}

.musicer {
  text-align: left;
}

.flexul {
  margin-left: 10px;
}
</style>
