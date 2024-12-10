import {Request, Response} from 'express';
import {changeBurgerData, fetchAllBurgers, fetchBurgersByDay} from '../models/menu-model';

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

export {getAllBurgers, getBurgersByDay, postBurger};
