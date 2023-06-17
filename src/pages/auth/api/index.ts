import { movieApi } from "@/lib";
import { User } from "@/providers/UserProvider";

interface SignInProps {
  email: string;
  password: string;
}

interface SignInResponse {
  status: string;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export async function loginRequest(params: SignInProps) {
  const response = await movieApi.post<SignInResponse>("/auth/login", params);
  return response.data;
}
