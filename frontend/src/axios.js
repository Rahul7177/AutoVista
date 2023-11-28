import axios from "axios";

const instance = axios.create({
  baseURL: "https://auto-vista-server.vercel.app/",
});

export default instance;