<template>
  <div id="lunbotu">
    <div class="parent">
      <div class="lunbo">
        <ul class="img_ul">
          <li>
            <img ref="banner" src="" />
            <ol class="yuandian">
              <li></li> </ol
          ></li>
        </ul>
        <div class="focus">
          <span class="left lbbtm" @click="goPre()">&lt;</span>
          <span class="right lbbtm" @click="goNext()">&gt;</span>
        </div>
      </div>
      <div class="dw">
        <div class="download">
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import api from "@/api/demo.js";
import Vue from "vue";

var ydindex = 0;
export default {
  name: "LunBo",
  data() {
    return {
      arr: [],
      ydindex: 0,
    };
  },

  async created() {
    const params = {
      type: 2,
    };
    const data = await api.getBannerImg(params);
    console.log(data);
    this.arr = data.banners;
    this.$refs.banner.src = this.arr[ydindex].pic;
  },
  methods: {
    // 上一张函数
    goPre: function () {
      if (ydindex == 0) {
        ydindex = this.arr.length;
      }
      ydindex--;
      this.showimg();
    },
    // 下一张函数
    goNext: function () {
      if (ydindex == this.arr.length - 1) {
        ydindex = -1;
      }
      ydindex++;
      this.showimg();
    },
    showimg: function () {
      this.$refs.banner.src = this.arr[ydindex].pic;
    },
  },
};
</script>
<style scoped>
.parent {
  position: relative;
  width: 985px;
  height: 285px;
}

.lbbtm {
  position: absolute;
  display: block;
  width: 30px;
  height: 50px;
}

.lbbtm:hover {
  background-color: rgb(153, 151, 151);
}

.left {
  top: 145px;
  left: 135px;
  font-size: 35px;
  cursor: pointer;
}

.right {
  top: 145px;
  left: 1190px;
  font-size: 35px;
  cursor: pointer;
}

.img_ul {
  position: absolute;
  top: 35px;
  left: 185px;
  width: 730px;
  height: 285px;
  overflow: hidden;
  text-align: center;
}

.img_ul li {
  width: 730px;
  height: 285px;
}

/* 未实现背景跟随图片变化而改变 */
.img_ul li img {
  width: 730px;
  height: 285px;
}

.download {
  position: absolute;
  top: 35px;
  left: 915px;
  width: 255px;
  height: 284px;
  background-image: url(../../assets/img/download.png);
  background-position: 0 0;
}

.download p {
  padding-top: 260px;
  text-align: center;
}

.yuandian {
  position: absolute;
  bottom: 10px;
  left: 50%;
  text-align: center;
}

.yuandian li {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 3px solid rgb(43, 42, 42);
  border-radius: 15px;
}
</style>
