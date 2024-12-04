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

export type {Restaurant, Coordinates};
