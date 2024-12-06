type ReservationInfo = {
  restaurant_name: string;
  id: number;
  user_id: number;
  reservation_date: string;
  start_time: string;
  end_time: string;
  table_id: number;
  restaurant_id: number;
};

type ReservationData = {
  message: string;
  reservation_info: ReservationInfo;
};

export type {ReservationInfo, ReservationData};
