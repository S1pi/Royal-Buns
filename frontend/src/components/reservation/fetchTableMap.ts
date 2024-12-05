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

export default fetchTableMap;
