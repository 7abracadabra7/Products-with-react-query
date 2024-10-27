import { useQuery } from "@tanstack/react-query";
import { api } from "./config";

const useFetchProducts = (page) => {
  const queryKey = ["products", page];
  const queryFn = async () => {
    const response = await api.get(`products?page=${page}&limit=10`);
    return response.data;
  };

  return useQuery({ queryKey, queryFn });
};

export { useFetchProducts };
