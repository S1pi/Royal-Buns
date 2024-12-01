interface User {
  id: number;
  username: string;
  passwrd: string;
  email: string | null;
  phonenumber: string | null;
  user_type: string;
  token?: string;
  favourite_bgr_id?: number;
}

type NewUser = Omit<User, 'id' | 'create_day' | 'favourite_bgr_id' | 'token'>;

export type {NewUser};
