// Mockdata for restaurants
// TODO: Search from database
const mockRestaurants = [
  {
    id: 1,
    restaurantName: 'Royal Buns Helsinki',
    openHours: {weekdays: '10:00-22:00', weekends: '12:00-23:00'},
  },
  {
    id: 2,
    restaurantName: 'Royal Buns Espoo',
    openHours: {weekdays: '10:00-21:00', weekends: '12:00-21:00'},
  },
  {
    id: 3,
    restaurantName: 'Royal Buns Tampere',
    openHours: {weekdays: '12:00-20:00', weekends: '12:00-23:00'},
  },
  {
    id: 4,
    restaurantName: 'Royal Buns Rovaniemi',
    openHours: {weekdays: '12:00-20:00', weekends: '12:00-23:00'},
  },
];

const getRestaurants = async () => {
  // Todo fetch from database, type check for function

  // DIIBA DAABA LIIBA LAABA CODE TO GET restaurants
  const restaurants = mockRestaurants;
  return restaurants;
};

export {getRestaurants};
