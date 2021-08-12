<template>
  <div id="TuiJian">
    <div class="top-1">
      <span class="yuan"></span>
      <a href="#" class="top-1-1">热门推荐</a>
      <div class="leixing">
        <a href="#">华语</a>| <a href="#">流行</a>| <a href="#">摇滚</a>| <a href="#">民谣</a>|
        <a href="#">电子</a>
      </div>
      <div class="more">
        <a href="#">更多</a>
        <span class="youjiantou"><img src="../../assets/img/youjiantou.png" alt="" /></span>
      </div>
    </div>
    <div class="top-2">
      <ul ref="ul">
        <li v-for="item in arr" :key="item.id">
          <div class="pig"><img :src="item.picUrl" alt="" class="pigone" /></div>
          <div class="heise">
            <span class="pig-erji"></span>
            <span ref="shuju" class="shuju">{{ item.playCount }}</span>
            <a href="#" class="next"></a>
          </div>
          <a href="#" class="musiczi">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/demo.js";
// var index;
export default {
  name: "TuiJian",
  data() {
    return {
      arr: [],
      index: [],
    };
  },
  async created() {
    const params = {
      type: 2,
    };
    const data = await api.getHotImgs(params);
    this.arr = data.result;
  },
  mounted() {
    // console.log(this.$refs.ul.src);
    // this.$refs.ul.li.img.src = this.arr[index].picUrl;
  },
  methods: {},
};
</script>
<style scoped>
#TuiJian {
  width: 730px;
  margin-top: 35px;
  transform: translateX(185px);
}

.top-1 {
  display: flex;
  height: 55px;
  margin: 0 20px 0 20px;
  border-bottom: 2px solid red;
}

.top-1 .yuan {
  display: block;
  width: 15px;
  height: 15px;
  margin-top: 25px;
  border: 3px solid red;
  border-radius: 15px;
}

.top-1-1 {
  margin-top: 15px;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
}

.leixing {
  height: 25px;
  margin-top: 25px;
  margin-left: 25px;
}

.leixing a {
  margin: 0 8px;
}

.top-1 .more {
  float: right;
  margin-top: 26px;
  margin-left: 250px;
}

.top-1 .youjiantou {
  width: 10px;
  height: 10px;
}

.top-2 ul li {
  position: relative;
  display: block;
  float: left;
  width: 140px;
  height: 185px;
  margin: 18px 20px;
}

.pig {
  width: 142px;
  height: 142px;
  background: url(../../assets/img/pig-bl.png) no-repeat 0 9999px;
}

.pigone {
  width: 142px;
  height: 142px;
}

.musiczi {
  font-size: 13px;
  color: rgb(8, 8, 8);
}

.heise {
  position: absolute;
  float: left;
  width: 140px;
  height: 25px;
  margin: -24px 0 0 0;
  text-align: center;
  background-image: url(../../assets/img/pig-bl.png);
  background-position: 0 -542px;
}

.pig-erji {
  display: block;
  float: left;
  width: 15px;
  height: 15px;
  margin: 3px 0 0 5px;
  background-image: url(../../assets/img/erji.png);
  background-position: 0 -21px;
}

.shuju {
  float: left;
  margin: 0 0 0 15px;
  font-size: 15px;
  color: #fff;
}

.next {
  display: block;
  float: left;
  width: 20px;
  height: 20px;
  margin: -19px 0 0 110px;
  background-image: url(../../assets/img/erji.png);
  background-position: 0 0;
}
</style>
