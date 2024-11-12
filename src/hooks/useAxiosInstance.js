import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-server-ashen-iota.vercel.app",
});

export default function useAxiosInstance() {
  return axiosInstance;
}
