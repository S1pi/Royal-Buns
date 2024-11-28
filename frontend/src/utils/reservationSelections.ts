const reservationSelections = () => {
  const restaurant = sessionStorage.getItem('restaurant');
  const reservationSize = sessionStorage.getItem('reservation-size');
  const time = sessionStorage.getItem('reservation-time');
  const reservationDay = sessionStorage.getItem('reservation-day');
  return {restaurant, reservationSize, time, reservationDay};
};

const reservationSelectionCheck = () => {
  const selections = reservationSelections();
  // return Object.values(selections).every(
  //   (value) => value !== null && value !== ''
  // );
  return true;
};

export {reservationSelections, reservationSelectionCheck};
