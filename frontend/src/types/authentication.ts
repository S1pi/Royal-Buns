type SuccesfulAuthenticationResponse = {
  message: string;
  user: {
    id: number;
    username: string;
    email: string | null;
    phonenumber: string | null;
    user_type: string;
    favourite_brgr_id: number | null;
    iat: number;
    exp: number;
  };
};

type ForbiddenResponse = {
  message: string;
};

type InternalServerErrorResponse = {
  status: number;
  errorText: string;
  message: string;
};

type RegisterResponse = {
  message: string;
  code: number;
};

export type {
  SuccesfulAuthenticationResponse,
  ForbiddenResponse,
  InternalServerErrorResponse,
  RegisterResponse,
};
