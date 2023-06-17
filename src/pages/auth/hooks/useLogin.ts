import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api";
import { useUserContext } from "./useUserContext";

export function useLogin() {
  const [_, setUser] = useUserContext();

  const mutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (res) => {
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
    },
  });

  return mutation;
}
