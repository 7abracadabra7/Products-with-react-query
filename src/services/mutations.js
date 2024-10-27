import { api } from "./config";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  const mutationFn = (info) => {
    return api.post("auth/register", info);
  };
  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (info) => {
    return api.post("auth/login", info);
  };
  return useMutation({ mutationFn });
};

const useProduct = () => {
  const mutationFn = (info) => {
    return api.post("products", info);
  };
  return useMutation({ mutationFn });
};

export { useRegister, useLogin, useProduct };
