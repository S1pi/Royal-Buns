interface Restaurant {
  id: number;
  res_name: string;
  city: string;
  location: string;
  address: string;
  coordinates: Coordinates;
}

type Coordinates = {
  latitude: number;
  longitude: number;
};

type TableAvailability = {
  table_id: number;
  seats: number;
  is_free: boolean;
};

type RestauratTableData = {
  table_id: number;
  restaurant_id: number;
  seats: number;
  reserved: boolean;
};

type OpenHours = {
  restaurant_id: number;
  weekdays: string;
  weekends: string;
};

type TableDataBySeats = {};

type FetchResultForTableAvailability = TableAvailability[];

export type {
  Restaurant,
  Coordinates,
  FetchResultForTableAvailability,
  TableAvailability,
  RestauratTableData,
  OpenHours,
};
