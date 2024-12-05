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

export type {SuccesfulAuthenticationResponse, ForbiddenResponse};
