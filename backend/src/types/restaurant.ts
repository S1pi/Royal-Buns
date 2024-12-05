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

type FetchResultForTableAvailability = TableAvailability[];

export type {Restaurant, Coordinates, FetchResultForTableAvailability};
