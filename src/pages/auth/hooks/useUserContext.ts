import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

export function useUserContext() {
  return useContext(UserContext);
}
