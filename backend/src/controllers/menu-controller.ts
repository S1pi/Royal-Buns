import {Request, Response} from 'express';
import {
  changeBurgerData,
  changeDrinkData,
  changeSideData,
  changeSliderData,
  fetchAllBurgers,
  fetchAllDrinks,
  fetchAllSides,
  fetchAllSliders,
  fetchBurgersByDay,
} from '../models/menu-model';

const getAllBurgers = async (req: Request, res: Response) => {
  try {
    const burgers = await fetchAllBurgers();
    res.status(200).json(burgers);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
};

const getBurgersByDay = async (req: Request, res: Response) => {
  const day = req.params.day as string;
  try {
    const burgers = await fetchBurgersByDay(day);
    res.status(200).json(burgers);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
};

const postBurger = async (req: Request, res: Response) => {
  const {id, diets, price, name, description, day} = req.body;
  const photo = '';
  try {
    const burgers = await changeBurgerData({
      id,
      diets,
      price,
      name,
      description,
      photo,
      day,
    });

    if (burgers > 0) {
      res.status(200).json({message: 'Burger updated successfully'});
    } else {
      res.status(400).json({message: 'Failed to update burger'});
    }
    // res.status(200).json(burgers);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
};

const getAllDrinks = async (req: Request, res: Response) => {
  try {
    const drinks = await fetchAllDrinks();
    res.status(200).json(drinks);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
};

const getAllSliders = async (req: Request, res: Response) => {
  try {
    const sliders = await fetchAllSliders();
    res.status(200).json(sliders);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
};

const getAllSides = async (req: Request, res: Response) => {
  try {
    const sides = await fetchAllSides();
    res.status(200).json(sides);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
};

const postDrink = async (req: Request, res: Response) => {
  try { 
    const {id, diets, price, name, description} = req.body;
    const photo = '';
    const affectedRows = await changeDrinkData({ id, diets, price, name, description, photo });
    if (affectedRows > 0) {
      res.status(200).json({message: 'Drink updated successfully'});
    } else {
      res.status(400).json({message: 'Failed to update drink'});
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }

};

const postSlider = async (req: Request, res: Response) => {
  try {
    const {id, diets, price, name, description} = req.body;
    const photo = '';
    const affectedRows = await changeSliderData({ id, diets, price, name, description, photo });
    if (affectedRows > 0) {
      res.status(200).json({message: 'Slider updated successfully'});
    } else {
      res.status(400).json({message: 'Failed to update slider'});
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
}

const postSide = async (req: Request, res: Response) => {
  try {
    const {id, diets, price, name, description} = req.body;
    const photo = '';
    const affectedRows = await changeSideData({ id, diets, price, name, description, photo });
    if (affectedRows > 0) {
      res.status(200).json({message: 'Side updated successfully'});
    } else {
      res.status(400).json({message: 'Failed to update side'});
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', status: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', status: 500, error: err});
    }
  }
}

export {
  getAllBurgers,
  getBurgersByDay,
  postBurger,
  getAllDrinks,
  getAllSliders,
  getAllSides,
  postDrink,
  postSlider,
  postSide,
};
