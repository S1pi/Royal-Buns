type Description = {
  EN: string;
  FI: string;
};

type Burger = {
  id: number;
  diets: string;
  price: number;
  name: string;
  description: Description;
  photo: string;
  day: string;
};

type OtherMenuItems = {
  id: number;
  diets: string;
  price: number;
  name: string;
  description: Description;
  photo: string;
};

type AllBurgersResponse = Burger[];

export type {Burger, Description, AllBurgersResponse, OtherMenuItems};
