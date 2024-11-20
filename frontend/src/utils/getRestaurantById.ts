import {getRestaurants} from './getRestaurants';

// TODO: Search only 1 restaurant from database by it id
// Function to search restaurant by its id
// One option if you want to search first all restaurants
const getRestaurantById = async (restaurantId: number) => {
  const restaurants = await getRestaurants();
  return restaurants.find((restaurant) => restaurant.id === restaurantId);
};

export {getRestaurantById};
