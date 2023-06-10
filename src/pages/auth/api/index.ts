import { movieApi } from "@/lib";
import getApiError from "@/utils/getApiError";

interface SignInProps {
  email: string;
  password: string;
}

interface SignInResponse {
  status: string;
  message: string;
  data: {
    token: string;
  };
}

export async function loginRequest(params: SignInProps) {
  try {
    const response = await movieApi.post<SignInResponse>("/auth/login", params);

    return response.data;
  } catch (error) {
    throw getApiError(error);
  }
}
