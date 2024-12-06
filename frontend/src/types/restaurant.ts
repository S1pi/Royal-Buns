type Table = {
  table_id: number;
  seats: number;
  is_free: boolean;
};

type coordinates = {
  latitude: number;
  longitude: number;
};

type RestaurantBase = {
  id: number;
  res_name: string;
  city: string;
  location: string;
  address: string;
  coordinates: coordinates;
};

type Restaurant = RestaurantBase & {
  openHours: {
    weekdays: string;
    weekends: string;
  };
};

export type {Table, Restaurant};
