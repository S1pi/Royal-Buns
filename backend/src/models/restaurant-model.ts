import {QueryResult, RowDataPacket} from 'mysql2';
import {FetchResultForTableAvailability, Restaurant} from '../types/restaurant';
import promisePool from '../utils/database';

const fetchRestaurant = async (id: string): Promise<Restaurant | null> => {
  const sql = 'SELECT * FROM restaurant WHERE id = ?';
  try {
    const [result] = await promisePool.execute<Restaurant[] & RowDataPacket[]>(sql, [id]);
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

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

export {fetchRestaurant, fetchRestaurantTablesAvailability};
