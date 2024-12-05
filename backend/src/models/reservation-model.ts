import promisePool from '../utils/database';
import {FieldPacket, QueryResult, ResultSetHeader} from 'mysql2';
import {FetchResultForTableAvailability} from '../types/restaurant';
import {ReservationData} from '../types/reservation';

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

const fetchReservationById = async (
  reservationId: number
): Promise<ReservationData | null> => {
  const sql = `SELECT id, user_id, reservation_date, start_time, end_time, table_id, restaurant_id FROM reservation WHERE id = ?`;
  try {
    const [result] = await promisePool.execute<ReservationData[] & QueryResult>(sql, [
      reservationId,
    ]);
    const reservation = result[0] as ReservationData;

    if (reservation) {
      return {
        ...reservation,
        reservation_date: new Date(reservation.reservation_date).toLocaleDateString(
          'fi-FI'
        ),
        start_time: reservation.start_time.substring(0, 5),
        end_time: reservation.end_time.substring(0, 5),
      };
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createReservation = async (
  userId: number,
  restaurant_id: number,
  table_id: number,
  reservation_date: string,
  start_time: string,
  end_time: string
): Promise<ReservationData> => {
  const sql = `INSERT INTO reservation (user_id, reservation_date, start_time, end_time, table_id, restaurant_id)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [
    userId,
    reservation_date,
    start_time,
    end_time,
    table_id,
    restaurant_id,
  ];
  try {
    // TODO: Check if reservation is possible
    const [result]: [ResultSetHeader, FieldPacket[]] = await promisePool.execute(
      sql,
      params
    );
    const reservationId = result.insertId;
    const reservation: ReservationData | null = await fetchReservationById(reservationId);
    if (!reservation) {
      throw new Error('Error fetching reservation after creation');
    }
    return reservation;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {fetchRestaurantTablesAvailability, createReservation, fetchReservationById};
