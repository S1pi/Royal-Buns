import {ReservationInfo} from './reservation';

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

type UserProfilePageData = {
  user_info: Omit<User, 'token' | 'favourite_bgr_id'> & {favourite_bgr?: string};
  reservations: Omit<ReservationInfo, 'user_id' | 'restaurant_id'>[];
};

export type {User, LoginError, UserProfilePageData};
