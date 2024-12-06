import {ReservationData, ReservationInfo} from '../../types/reservation';
import {Table} from '../../types/restaurant';
import fetchData from '../../utils/fetchData';

const fetchTableMap = async (
  restaurantId: number,
  reservationDate: string,
  startTime: string,
  endTime: string
): Promise<Table[]> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const tables = await fetchData<Table[]>(
    `/reservations/${restaurantId}/free-tables?reservation_date=${reservationDate}&start_time=${startTime}&end_time=${endTime}`,
    options
  );

  if (!tables) {
    return [];
  } else {
    return tables;
  }
};

const handleReservation = async (
  reservationDate: string,
  startTime: string,
  endTime: string,
  tableId: number,
  restaurantId: number
): Promise<ReservationInfo | null> => {
  const token = localStorage.getItem('user-token');
  const data = {
    restaurant_id: restaurantId,
    table_id: tableId,
    reservation_date: reservationDate,
    start_time: startTime,
    end_time: endTime,
  };
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const reservation = await fetchData<ReservationData>(
    `/reservations/make-reservation`,
    options
  );

  console.log('Reservation: ', reservation);

  if (!reservation) {
    return null;
  } else {
    return reservation.reservation_info;
  }
};

export {fetchTableMap, handleReservation};
