import {RowDataPacket} from 'mysql2';
import {OpenHours, Restaurant, RestauratTableData} from '../types/restaurant';
import promisePool from '../utils/database';

const fetchRestaurant = async (id: number): Promise<Restaurant | null> => {
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

const fetchAllRestaurants = async (): Promise<Restaurant[]> => {
  const sql = 'SELECT * FROM restaurant';
  try {
    const [result] = await promisePool.execute<Restaurant[] & RowDataPacket[]>(sql);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// If you want to fetch only one restaurant's open hours
const fetchRestaurantOpenHoursById = async (id: number): Promise<OpenHours> => {
  const sql = 'SELECT weekdays, weekends FROM open_hours WHERE restaurant_id = ?';
  try {
    const [result] = await promisePool.execute<OpenHours & RowDataPacket[]>(sql, [id]);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// If you want to fetch all restaurants open hours
const fetchRestaurantOpenHours = async (): Promise<OpenHours[]> => {
  const sql = 'SELECT * FROM open_hours';
  try {
    const [result] = await promisePool.execute<OpenHours[] & RowDataPacket[]>(sql);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchTableCapacity = async (id: number): Promise<RestauratTableData[] | null> => {
  const sql = 'SELECT * FROM res_table WHERE restaurant_id = ?';
  try {
    const [result] = await promisePool.execute<RestauratTableData[] & RowDataPacket[]>(
      sql,
      [id]
    );
    console.log(result);

    if (result.length > 0) {
      return result;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {
  fetchRestaurant,
  fetchAllRestaurants,
  fetchTableCapacity,
  fetchRestaurantOpenHours,
  fetchRestaurantOpenHoursById,
};
