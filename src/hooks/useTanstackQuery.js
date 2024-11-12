import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";

export default function useTanstackQuery(endpoint) {
  const axiosInstance = useAxiosInstance();

  const query = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await axiosInstance.get(`${endpoint}`);

      return res.data;
    },
  });

  return query;
}
