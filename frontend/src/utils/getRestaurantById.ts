import {getRestaurants} from './getRestaurants';

// TODO: Search only 1 restaurant from database by it's id
// Function to search restaurant by it's id
// One option if you want to search first all restaurants
const getRestaurantById = async (restaurantId: number) => {
  const restaurants = await getRestaurants();
  return restaurants.find((restaurant) => restaurant.id === restaurantId);
};

export {getRestaurantById};
