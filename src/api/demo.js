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
const hotImg = {
  hotImgs: "/personalized?limit=8",
};
const getHotImgs = params => {
  return request.get(hotImg.hotImgs, params);
};
const XinDie = {
  XinDies: "/album/newest",
};
const getXinDies = params => {
  return request.get(XinDie.XinDies, params);
};

const BanDan1 = {
  BanDans1: "/artists?id=6452",
};

const getBanDans1 = params => {
  return request.get(BanDan1.BanDans1, params);
};

const DenLu = {
  DenLu: "/login/cellphone",
};
const getDenLu = params => {
  return request.get(DenLu.DenLu, params);
};
export default {
  getHotSongs,
  getBannerImg,
  getHotImgs,
  getXinDies,
  getBanDans1,
  getDenLu,
};
