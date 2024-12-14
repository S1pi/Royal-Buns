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

type SuccesfullBurgerPost = {
  message: string;
};

type AllBurgersResponse = Burger[];

type OtherMenuItemsResponse = OtherMenuItems[];

export type {
  Burger,
  Description,
  AllBurgersResponse,
  OtherMenuItems,
  SuccesfullBurgerPost,
  OtherMenuItemsResponse,
};
