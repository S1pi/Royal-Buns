import {Request, Response} from 'express';
import {fetchAllBurgers, fetchBurgersByDay} from '../models/menu-model';

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

export {getAllBurgers, getBurgersByDay};
