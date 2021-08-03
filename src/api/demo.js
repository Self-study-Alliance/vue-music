import request from "@/utils/request";

// 歌手热门50首歌曲
const urlLists = {
  hotSongs: "/artist/top/song",
};

const getHotSongs = params => {
  return request.get(urlLists.hotSongs, params);
};
const bannerImg = {
  bannerImgs: "/banner",
};
const getBannerImg = params => {
  return request.get(bannerImg.bannerImgs, params);
};

export default {
  getHotSongs,
  getBannerImg,
};
