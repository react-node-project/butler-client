type UserInfo = {
  email: string;
  lastName: string;
  firstName: string;
  callingCode: string;
  mobile: string;
};

interface SignUpRequest extends UserInfo {
  password: string;
}

interface SignUpResponse {
  userId: number;
  email: string;
}

export type { SignUpRequest, SignUpResponse, UserInfo };
