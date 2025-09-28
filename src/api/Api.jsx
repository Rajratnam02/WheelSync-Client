import axios from "axios";


const createApi = (path) =>
  axios.create({
    baseURL: `https://localhost:3000/api/${path}`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });


export const authApi = createApi("auth");
export const motorApi = createApi("motor");
export const orderApi = createApi("order");
