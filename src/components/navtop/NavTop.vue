<template>
  <div class="NavTop">
    <div class="top">
      <div class="top-m">
        <a href="#"
          ><h1 class="logo"><a href="#">网易云</a></h1></a
        >
        <ul>
          <li class="black"><a href="#">发现音乐</a><sub class="sanjiao"></sub></li>
          <li><a href="#">我的音乐</a></li>
          <li><a href="#">朋友</a></li>
          <li><a href="#">商城</a></li>
          <li><a href="#">音乐人</a></li>
          <li class="hot-f"><a href="#">下载客户端</a> <sup class="hot-s"></sup></li>
        </ul>
        <input class="ipt" type="text" placeholder="音乐/电台/用户" />
        <button class="btn">创作者中心</button>
        <div class="dlf"><a href="#" class="dl">登录</a> <img src="" alt="" class="touxiang" /></div>
      </div> </div
  ></div>
</template>
<script>
export default {
  name: "NavTop",
};
</script>
<style scoped>
@import url(../../assets/css/base.css);

.top {
  width: 100%;
  height: 70px;
  background-color: rgb(43, 41, 41);
}

.top-m {
  position: relative;
  width: 1080px;
  height: 70px;
  margin: 0 auto;
}

.logo {
  position: absolute;
  top: 50%;
  width: 165px;
  height: 70px;
  background: url(../../assets/img/topbar.png);
  background-position: 0 0;
  transform: translateY(-50px);
}

.logo a {
  display: block;
  width: 716px;
  height: 17px;
  text-indent: -9999px;
}

.top-m ul li a:hover {
  text-decoration: none;
  background-color: rgb(8, 8, 8);
}

.top-m ul {
  float: left;
  height: 70px;
  line-height: 70px;
  transform: translateX(180px);
}

.top-m ul li {
  display: inline-block;
  height: 70px;
  text-align: center;
}

.top-m ul li a {
  /* 想要将a与li相同大小，使经过li时也可点链接 */
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-size: 15px;
  color: rgb(207, 204, 204);
}

.sanjiao {
  position: absolute;
  bottom: 0;
  left: 48px;
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-bottom: 10px solid red;
  border-left: 5px solid transparent;
}

.hot-f {
  position: relative;
}

.hot-s {
  position: absolute;
  width: 25px;
  height: 15px;
  margin-top: 20px;
  margin-left: -2px;
  background-image: url(../../assets/img/hot-s.png);
}

.ipt {
  width: 120px;
  height: 35px;
  margin: 1px solid rgb(189, 77, 77);
  margin-left: 220px;
  text-align: center;
  border: auto 0;
  border-radius: 15px;
  transform: translateY(-10px);
}

.btn {
  width: 90px;
  height: 35px;
  margin: auto 0;
  margin-left: 20px;
  color: rgb(160, 158, 158);
  background-color: rgb(54, 54, 54);
  border: 1px solid rgb(129, 129, 129);
  border-radius: 15px;
  transform: translateY(-10px);
}

.btn:hover {
  color: rgb(236, 22, 39);
  border: 1px solid rgb(236, 22, 39);
}

.dlf {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 50px;
  transform: translateY(-5px);
}

.dl {
  position: absolute;
  margin: auto 20px;
  line-height: 80px;
  color: rgb(122, 121, 121);
}

.dl:hover {
  color: rgb(255, 255, 255);
}

.touxiang {
  position: absolute;
  display: none;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-left: 20px;
  line-height: 80px;
}
</style>
