import { movieApi } from "@/lib";
import { useUserContext } from "@/pages/auth/hooks/useUserContext";
import { User } from "@/providers/UserProvider";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface MeResponse {
  data: User;
}

export const useAutoLogin = () => {
  const [_, setUser] = useUserContext();

  const query = useQuery({
    queryKey: ["userData"],
    queryFn: () => movieApi.get<MeResponse>("/auth/me"),
  });

  useEffect(() => {
    setUser(query.data ? query.data.data.data : null);
  }, [query.data]);

  return query;
};
