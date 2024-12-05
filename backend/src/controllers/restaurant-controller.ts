import {Request, Response} from 'express';
import {
  fetchAllRestaurants,
  fetchRestaurant,
  fetchTableCapacity,
} from '../models/restaurant-model';
import {Restaurant, RestauratTableData} from '../types/restaurant';

const getRestaurantById = async (req: Request, res: Response) => {
  const resId = req.params.id;
  try {
    const restaurant: Restaurant | null = await fetchRestaurant(resId);
    if (!restaurant) {
      res.status(404).json({message: 'Restaurant not found'});
      return;
    }
    res.status(200).json(restaurant);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', code: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', code: 500, error: err});
    }
  }
};

const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants: Restaurant[] = await fetchAllRestaurants();
    res.status(200).json(restaurants);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', code: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', code: 500, error: err});
    }
  }
};

const getTableCapacity = async (req: Request, res: Response) => {
  const restaurantId = req.params.id as unknown as number;
  try {
    const tableCapacity: RestauratTableData[] | null =
      await fetchTableCapacity(restaurantId);
    if (!tableCapacity) {
      res.status(404).json({message: 'Table capacity not found'});
      return;
    } else {
      let smallTable = 0;
      let mediumTable = 0;
      let largeTable = 0;

      tableCapacity.forEach((table) => {
        if (table.seats <= 2) {
          smallTable++;
        } else if (table.seats <= 6) {
          mediumTable++;
        } else {
          largeTable++;
        }
      });

      res.status(200).json({smallTable, mediumTable, largeTable});
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error: ', err);
      res
        .status(503)
        .json({message: 'Service unavailable: database error', code: 503, error: err});
    } else {
      console.error('Unknown error: ', err);
      res.status(500).json({message: 'Unknown error', code: 500, error: err});
    }
  }
};

export {getRestaurantById, getAllRestaurants, getTableCapacity};
