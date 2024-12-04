import {Request, Response} from 'express';
import {fetchRestaurant} from '../models/restaurant-model';
import {Restaurant} from '../types/restaurant';

const getRestaurantById = async (req: Request, res: Response) => {
  const resId = req.params.id;
  try {
    const restaurant: Restaurant | null = await fetchRestaurant(resId);
    if (!restaurant) {
      res.status(404).json({message: 'Restaurant not found'});
      return;
    }
    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err);
  }
};

export {getRestaurantById};
