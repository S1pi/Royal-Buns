import {FetchResultForTableAvailability} from '../types/restaurant';
import {Request, Response} from 'express';
import {
  createReservation,
  fetchReservationById,
  fetchRestaurantTablesAvailability,
} from '../models/reservation-model';
import {User, UserReturn} from '../types/user';
import {fetchRestaurant} from '../models/restaurant-model';
import {ReservationInfo} from '../types/reservation';

const getRestaurantTablesAvailability = async (req: Request, res: Response) => {
  const {reservation_date, start_time, end_time} = req.query as {
    reservation_date: string;
    start_time: string;
    end_time: string;
  };

  const restaurantId = req.params.id as unknown as number;
  try {
    const result: FetchResultForTableAvailability =
      await fetchRestaurantTablesAvailability(
        reservation_date,
        start_time,
        end_time,
        restaurantId
      );
    if (result.length > 0) {
      // Returns list of all tables in the restaurant if they are available or not
      res.status(200).json(result);
    } else {
      res.status(404).json({message: `Restaurant (id): ${restaurantId} not found`});
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

const getReservationById = async (req: Request, res: Response) => {
  const reservationId = req.params.id as unknown as number;
  try {
    const reservation = await fetchReservationById(reservationId);
    console.log('Reservation: ', reservation);
    if (!reservation) {
      res.status(404).json({message: `Reservation (id): ${reservationId} not found`});
      return;
    }
    res.status(200).json(reservation);
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

const postReservation = async (req: Request, res: Response) => {
  const userId = req.user?.id as number;
  if (!userId) {
    res.status(404).json({message: 'User not found'});
    return;
  }
  const {restaurant_id, table_id, reservation_date, start_time, end_time} = req.body as {
    restaurant_id: number;
    table_id: number;
    reservation_date: string;
    start_time: string;
    end_time: string;
  };
  try {
    const reservation = await createReservation(
      userId,
      restaurant_id,
      table_id,
      reservation_date,
      start_time,
      end_time
    );

    const restaurant = await fetchRestaurant(restaurant_id);
    if (!restaurant) {
      res.status(404).json({message: 'Restaurant not found'});
      return;
    }

    const reservationInfo: ReservationInfo = {
      ...reservation,
      restaurant_name: restaurant.res_name,
    };

    res
      .status(201)
      .json({message: 'Reservation created', reservation_info: reservationInfo});
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

export {getRestaurantTablesAvailability, postReservation, getReservationById};
