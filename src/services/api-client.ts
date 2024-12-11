import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4215c60e94a24ff2aff60622a4a31a3d",
  },
});
