type Description = {
    FI: string;
    EN: string;
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

type OtherMenuItem = {
    id: number;
    diets: string;
    price: number;
    name: string;
    description: Description;
    photo: string;
  };

  export type {Burger, OtherMenuItem};