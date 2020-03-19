import axios from "axios";

export const api = axios.create({
  baseURL: "https://receitas.devari.com.br"
});
