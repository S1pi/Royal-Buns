import {Request, Response} from 'express';
import {
  fetchRestaurant,
  fetchRestaurantTablesAvailability,
} from '../models/restaurant-model';
import {FetchResultForTableAvailability, Restaurant} from '../types/restaurant';

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

const getRestaurantTablesAvailability = async (req: Request, res: Response) => {
  const restaurantId = req.params.id as unknown as number;
  const {restaurantDate, startTime, endTime} = req.query as {
    restaurantDate: string;
    startTime: string;
    endTime: string;
  };
  try {
    const result: FetchResultForTableAvailability =
      await fetchRestaurantTablesAvailability(
        restaurantDate,
        startTime,
        endTime,
        restaurantId
      );
    if (result.length > 0) {
      // Returns list of all tables in the restaurant if they are available or not
      res.status(200).json(result);
    } else {
      res.status(404).json({message: `Restaurant (id): ${restaurantId} not found`});
    }
  } catch (err) {
    console.error(err);
    throw new Error('Jokin meni vikaan');
  }
};

export {getRestaurantById, getRestaurantTablesAvailability};
