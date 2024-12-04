interface User {
  id: number;
  username: string;
  email: string | null;
  phonenumber: string | null;
  user_type: string;
  token?: string;
  favourite_bgr_id?: number;
}

type LoginError = {
  status: number;
  errorText: string;
  message: string;
};

export type {User, LoginError};
