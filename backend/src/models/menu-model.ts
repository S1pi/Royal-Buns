import {ResultSetHeader, RowDataPacket} from 'mysql2';
import promisePool from '../utils/database';

type Description = {
  FI: string;
  EN: string;
};

type Burger = {
  id: number;
  diets: string;
  price: number;
  name: string;
  description: Description;
  photo: string;
  day: string;
};

const fetchAllBurgers = async (): Promise<Burger[]> => {
  // const sql = 'SELECT * FROM burgers'; // Vanha sql kysely ilman mariadb:n longtext kenttää
  const sql =
    "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo, day FROM burgers";
  const [result] = await promisePool.query<RowDataPacket[]>(sql);

  const burgers: Burger[] = result.map((row: any) => ({
    id: row.id,
    diets: row.diets,
    price: row.price,
    name: row.name,
    description: {
      FI: row.descriptionFI,
      EN: row.descriptionEN,
    },
    photo: row.photo,
    day: row.day,
  }));

  return burgers;
};

const fetchBurgersByDay = async (day: string) => {
  const sql =
    "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo, day FROM burgers WHERE day = ?";
  const [result] = await promisePool.query<RowDataPacket[]>(sql, [day]);

  const burgers: Burger[] = result.map((row: any) => ({
    id: row.id,
    diets: row.diets,
    price: row.price,
    name: row.name,
    description: {
      FI: row.descriptionFI,
      EN: row.descriptionEN,
    },
    photo: row.photo,
    day: row.day,
  }));

  return burgers;
};

const changeBurgerData = async (burger: Burger) => {
  const sql =
    'UPDATE burgers SET diets = ?, price = ?, name = ?, description = ?, photo = ?, day = ? WHERE id = ?';
  const params = [
    burger.diets,
    burger.price,
    burger.name,
    JSON.stringify(burger.description),
    burger.photo,
    burger.day,
    burger.id,
  ];
  try {
    const result = await promisePool.execute<ResultSetHeader>(sql, params);

    return result[0].affectedRows;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {fetchAllBurgers, fetchBurgersByDay, changeBurgerData};
