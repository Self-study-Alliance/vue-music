import api from "@/api/demo.js";

export default {
  name: "demo",
  async created() {
    const params = {
      id: 6452,
    };
    const data = await api.getHotSongs(params);
    console.log(data);
  },
};
