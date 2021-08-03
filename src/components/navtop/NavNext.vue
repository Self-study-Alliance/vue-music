<template>
  <div class="NavNext">
    <!-- 推荐栏制作开始 -->
    <div class="tuijian">
      <ul>
        <li><a href="#">推荐</a></li>
        <li><a href="#">排行榜</a></li>
        <li class="gedan"><a href="#">歌单</a><sub class="fuhao"></sub></li>
        <li><a href="#">主播电台</a></li>
        <li><a href="#">歌手</a></li>
        <li><a href="#">新碟上架</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavNext",
};
</script>
<style scoped>
@import url(../../assets/css/base.css);

.tuijian {
  float: left;
  width: 100%;
  height: 35px;
  text-align: left;
  background-color: rgba(211, 5, 5, 0.836);
}

.tuijian ul li {
  display: inline-block;
  width: 80px;
  margin: 5px 15px;
  font-size: 15px;
  text-align: center;
  transform: translateX(320px);
}

.tuijian ul li:hover {
  background-color: rgba(165, 0, 0, 0.836);
  border-radius: 15px;
}

.tuijian ul li a {
  color: #fff;
}

.gedan {
  position: relative;
}

.fuhao {
  position: absolute;
  top: 0;
  width: 12px;
  height: 12px;
  background-image: url(../../assets/img/@img.png);
}
</style>
