<template>
  <div id="BanDan">
    <div class="top-5">
      <div class="bottom"
        ><span class="yuan"></span>
        <a href="#" class="top-5-1">榜单</a>
        <div class="more">
          <a href="#">更多</a>
          <span class="youjiantou"><img src="../../assets/img/youjiantou.png" alt="" /></span> </div
      ></div>
      <div class="bangdan">
        <div class="bangdan-lb bangdan-1">
          <div class="bangdan-top">
            <a href="#" class="bangdan-img"><img src="../../assets/img/bd-1.jpg" alt="" /></a>
            <a href="#" class="bangdan-wenzi">飙升榜</a>
            <a href="#" class="bangdan-bofang bangdan-bofang-1"></a>
            <a href="#" class="bangdan-bofang bangdan-bofang-2"></a>
          </div>
          <ol class="xuhao">
            <li v-for="(item, index) in arr1" :key="item.id">
              <p class="paixu">{{ index + 1 }}</p>
              <a href="#" class="biaoshengbang">{{ item.name }}</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
          </ol>
          <a href="#" class="quanbu">查看全部></a>
        </div>
        <div class="bangdan-lb bangdan-1">
          <div class="bangdan-top">
            <a href="#" class="bangdan-img"><img src="../../assets/img/bd-2.jpg" alt="" /></a>
            <a href="#" class="bangdan-wenzi">新歌榜</a>
            <a href="#" class="bangdan-bofang bangdan-bofang-1"></a>
            <a href="#" class="bangdan-bofang bangdan-bofang-2"></a>
          </div>
          <ol class="xuhao">
            <li>
              <p class="paixu">1</p><a href="#" class="xingebang">不浪漫罪名</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">2</p><a href="#" class="xingebang">青花瓷</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">3</p><a href="#" class="xingebang">你不像她</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">4</p><a href="#" class="xingebang">听妈妈的话</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">5</p><a href="#" class="xingebang">你就不要想起我</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">6</p><a href="#" class="xingebang">十二</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">7</p><a href="#" class="xingebang">六月的雨</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">8</p><a href="#" class="xingebang">遥远的她</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">9</p><a href="#" class="xingebang">老人与海</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">10</p><a href="#" class="xingebang">越过山丘</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
          </ol>
          <a href="#" class="quanbu">查看全部></a>
        </div>
        <div class="bangdan-lb bangdan-1">
          <div class="bangdan-top">
            <a href="#" class="bangdan-img"><img src="../../assets/img/bd-3.jpg" alt="" z-in /></a>
            <a href="#" class="bangdan-wenzi">原创榜</a>
            <a href="#" class="bangdan-bofang bangdan-bofang-1"></a>
            <a href="#" class="bangdan-bofang bangdan-bofang-2"></a>
          </div>
          <ol class="xuhao">
            <li>
              <p class="paixu">1</p><a href="#">不浪漫罪名</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">2</p><a href="#">青花瓷</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">3</p><a href="#">你不像她</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">4</p><a href="#">听妈妈的话</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">5</p><a href="#">你就不要想起我</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">6</p><a href="#">十二</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">7</p><a href="#">六月的雨</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">8</p><a href="#">遥远的她</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">9</p><a href="#">老人与海</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
            <li>
              <p class="paixu">10</p><a href="#">越过山丘</a>
              <div class="three">
                <a href="#" class="three-1"> </a>
                <a href="#" class="three-2"> </a>
                <a href="#" class="three-3"> </a>
              </div>
            </li>
          </ol>
          <a href="#" class="quanbu">查看全部></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/demo.js";

export default {
  name: "BanDan",
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
    this.arr1.length = 10;
  },
  methods: {},
};
</script>
<style scoped>
#BanDan {
  width: 690px;
  margin-left: 205px;
}

.bottom {
  border-bottom: 2px solid red;
}

.top-5 .yuan {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-top: 25px;
  border: 3px solid red;
  border-radius: 15px;
}

.top-5-1 {
  display: inline-block;
  margin-top: 15px;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
}

.top-5 .more {
  float: right;
  margin-top: 26px;
  margin-left: 250px;
}

.top-5 .youjiantou {
  width: 10px;
  height: 10px;
}

.bangdan {
  display: flex;
  width: 690px;
  height: 470px;
  margin: 10px 0;
  background-color: rgb(238, 235, 235);
  border: 1px solid rgb(192, 189, 189);
  border-right: none;
}

.bangdan-lb {
  position: relative;
  width: 230px;
  height: 470px;
  border-right: 1px solid rgb(192, 189, 189);
  border-bottom: 1px solid rgb(192, 189, 189);
}

.bangdan-top {
  position: relative;
  width: 190px;
  height: 80px;
  margin: 20px;
}

.bangdan-img {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.bangdan-img img {
  position: absolute;
  width: 80px;
  height: 80px;
  background-image: url(../../assets/img/pig-bl.png);
  background-position: 0 0;
}

.bangdan-wenzi {
  position: absolute;
  display: inline-block;
  margin-top: 2px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 900;
  color: rgb(19, 17, 17);
}

.bangdan-bofang {
  position: absolute;
  display: inline-block;
  width: 25px;
  height: 25px;
}

.bangdan-bofang-1 {
  margin-top: 30px;
  margin-left: 10px;
  background-image: url(../../assets/img/bofang.png);
  background-position: 146px 234px;
}

.bangdan-bofang-2 {
  margin-top: 30px;
  margin-left: 45px;
  background-image: url(../../assets/img/bofang.png);
  background-position: 113px 234px;
}

.xuhao li {
  position: relative;
  width: 100%;
  height: 31px;
  padding-left: 25px;
  font-size: 15px;
  line-height: 31px;
}

.paixu {
  position: absolute;
  float: left;
  width: 20px;
  height: 31px;
  margin-left: -25px;
  font-size: 16px;
  line-height: 31px;
  text-align: center;
}

.xuhao li:nth-child(odd) {
  background-color: #aeaaaa;
}

.xuhao a {
  font-size: 14px;
}

/* 未实现鼠标经过歌名，后面出现播放等 */
.three a {
  position: absolute;
  display: inline-block;
  display: none;
  width: 20px;
  height: 20px;
}

.three-1 {
  margin-top: -23px;
  margin-left: 110px;
  background-image: url(../../assets/img/bofang.png);
  background-position: 148px 200px;
}

.three-2 {
  margin-top: -23px;
  margin-left: 140px;
  background-image: url(../../assets/img/tianjia.png);
  background-position: 3px -695px;
}

.three-3 {
  margin-top: -23px;
  margin-left: 170px;
  background-image: url(../../assets/img/bofang.png);
  background-position: 118px 200px;
}

.quanbu {
  position: absolute;
  float: left;
  margin-top: 10px;
  margin-left: 150px;
  font-size: 12px;
}
</style>
