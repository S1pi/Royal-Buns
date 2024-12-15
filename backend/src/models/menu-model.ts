import {ResultSetHeader, RowDataPacket} from 'mysql2';
import promisePool from '../utils/database';
import { Burger, OtherMenuItem } from '../types/menu';




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

const changeDrinkData = async (drink: OtherMenuItem) => {
  const sql =
    'UPDATE drinks SET diets = ?, price = ?, name = ?, description = ?, photo = ? WHERE id = ?';
  const params = [
    drink.diets,
    drink.price,
    drink.name,
    JSON.stringify(drink.description),
    drink.photo,
    drink.id,
  ];
  try {
    const result = await promisePool.execute<ResultSetHeader>(sql, params);

    return result[0].affectedRows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const changeSliderData = async (slider: OtherMenuItem) => {
  const sql =
    'UPDATE sliders SET diets = ?, price = ?, name = ?, description = ?, photo = ? WHERE id = ?';
  const params = [
    slider.diets,
    slider.price,
    slider.name,
    JSON.stringify(slider.description),
    slider.photo,
    slider.id,
  ];
  try {
    const result = await promisePool.execute<ResultSetHeader>(sql, params);

    return result[0].affectedRows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const changeSideData = async (side: OtherMenuItem) => {
  const sql =
    'UPDATE sides SET diets = ?, price = ?, name = ?, description = ?, photo = ? WHERE id = ?';
  const params = [
    side.diets,
    side.price,
    side.name,
    JSON.stringify(side.description),
    side.photo,
    side.id,
  ];
  try {
    const result = await promisePool.execute<ResultSetHeader>(sql, params);

    return result[0].affectedRows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// const burgers: Burger[] = result.map((row: any) => ({
//   id: row.id,
//   diets: row.diets,
//   price: row.price,
//   name: row.name,
//   description: {
//     FI: row.descriptionFI,
//     EN: row.descriptionEN,
//   },
//   photo: row.photo,
//   day: row.day,
// }));

const fetchAllDrinks = async () => {
  const sql =
    "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo FROM drinks";
  const [result] = await promisePool.query<RowDataPacket[]>(sql);

  const drinks = result.map((row: any) => ({
    id: row.id,
    diets: row.diets,
    price: row.price,
    name: row.name,
    description: {
      FI: row.descriptionFI,
      EN: row.descriptionEN,
    },
    photo: row.photo,
  }));

  return drinks;
};

const fetchAllSliders = async () => {
  const sql =
    "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo FROM sliders";
  const [result] = await promisePool.query<RowDataPacket[]>(sql);

  const sliders = result.map((row: any) => ({
    id: row.id,
    diets: row.diets,
    price: row.price,
    name: row.name,
    description: {
      FI: row.descriptionFI,
      EN: row.descriptionEN,
    },
    photo: row.photo,
  }));

  return sliders;
};

const fetchAllSides = async () => {
  const sql =
    "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo FROM sides";
  const [result] = await promisePool.query<RowDataPacket[]>(sql);

  const sides = result.map((row: any) => ({
    id: row.id,
    diets: row.diets,
    price: row.price,
    name: row.name,
    description: {
      FI: row.descriptionFI,
      EN: row.descriptionEN,
    },
    photo: row.photo,
  }));

  return sides;
};

export {
  fetchAllBurgers,
  fetchBurgersByDay,
  changeBurgerData,
  fetchAllDrinks,
  fetchAllSliders,
  fetchAllSides,
  changeDrinkData,
  changeSliderData,
  changeSideData,
};
