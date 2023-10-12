import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "acb4677091be43c741a8c3b60993b882",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
