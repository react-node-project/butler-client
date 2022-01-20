interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  accessToken: string;
  userId: number;
  iss: string;
  exp: string;
}

export type { LoginRequest, LoginResponse };
