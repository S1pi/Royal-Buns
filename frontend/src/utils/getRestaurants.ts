// Mockdata for restaurants
// TODO: Search from database
const mockRestaurants = [
  {
    id: 1,
    restaurantName: 'Royal Buns Helsinki',
    openHours: {weekdays: '10:00-22:00', weekends: '12:00-23:00'},
    longitude: 24.94079,
    latitude: 60.16407
    
  },
  {
    id: 2,
    restaurantName: 'Royal Buns Espoo',
    openHours: {weekdays: '10:00-21:00', weekends: '12:00-21:00'},
    longitude: 24.81083,
    latitude: 60.21834
  },
  {
    id: 3,
    restaurantName: 'Royal Buns Tampere',
    openHours: {weekdays: '12:00-20:00', weekends: '12:00-23:00'},
    longitude: 23.76799,
    latitude: 61.49311
  },
  {
    id: 4,
    restaurantName: 'Royal Buns Rovaniemi',
    openHours: {weekdays: '12:00-20:00', weekends: '12:00-23:00'},
    longitude: 25.72978,
    latitude: 66.50292
  },
];

const getRestaurants = async () => {
  // Todo fetch from database, type check for function

  // DIIBA DAABA LIIBA LAABA CODE TO GET restaurants
  const restaurants = mockRestaurants;
  return restaurants;
};

export {getRestaurants};
