import promisePool from '../utils/database';
import {QueryResult} from 'mysql2';
import {FetchResultForTableAvailability} from '../types/restaurant';

const fetchRestaurantTablesAvailability = async (
  date: string,
  startTime: string,
  endTime: string,
  restaurantId: number
): Promise<FetchResultForTableAvailability> => {
  const sql = `SELECT t.table_id, t.seats, 
                NOT EXISTS (
                    SELECT 1 
                    FROM reservation res
                    WHERE res.table_id = t.table_id
                      AND res.restaurant_id = ?
                      AND res.reservation_date = ?
                      AND (
                        ? < res.end_time AND ? > res.start_time
                      )
                  ) AS is_free
               FROM
                  res_table t
               WHERE
                  t.restaurant_id = ?`;

  const params = [restaurantId, date, startTime, endTime, restaurantId];

  console.log('Joo suoritetaan');
  try {
    const [result] = await promisePool.query<
      FetchResultForTableAvailability & QueryResult
    >(sql, params);
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {fetchRestaurantTablesAvailability};
