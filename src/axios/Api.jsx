import axios from "axios";


const createApi = (path) =>
  axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/${path}`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });


export const authApi = createApi("auth");
export const motorApi = createApi("motor");
export const orderApi = createApi("order");
export const paymentApi = createApi("payment");


