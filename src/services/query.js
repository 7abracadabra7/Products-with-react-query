import { useQuery } from "@tanstack/react-query";
import { api } from "./config";

const useFetchProducts = () => {
  const queryKey = ["products"];
  const queryFn = async () => {
    const response = await api.get("products");
    return response.data.data;
  };

  return useQuery({ queryKey, queryFn });
};

export { useFetchProducts };
