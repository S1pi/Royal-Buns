import {RowDataPacket} from 'mysql2';
import {Restaurant} from '../types/restaurant';
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

export {fetchRestaurant};
