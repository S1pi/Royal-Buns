import {Restaurant} from '../types/restaurant';
import fetchData from './fetchData';

const getRestaurants = async (): Promise<Restaurant[]> => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const restaurants = await fetchData<Restaurant[]>('/restaurants', options);

  // Log for debugging
  // console.log('Restaurants: ', restaurants);
  if (!restaurants) {
    throw new Error('Failed to fetch restaurants');
  }
  return restaurants;
};

export {getRestaurants};
