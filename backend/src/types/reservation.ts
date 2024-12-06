type ReservationData = {
  id: number;
  user_id: number;
  reservation_date: string;
  start_time: string;
  end_time: string;
  table_id: number;
  restaurant_id: number;
};

type ReservationInfo = ReservationData & {
  restaurant_name: string;
};

export type {ReservationData, ReservationInfo};
