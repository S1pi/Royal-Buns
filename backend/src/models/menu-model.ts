import promisePool from '../utils/database';

const fetchAllBurgers = async () => {
  const sql = 'SELECT * FROM burgers';
  const burgers = await promisePool.query(sql);

  return burgers[0];
};

const fetchBurgersByDay = async (day: string) => {
  const sql = 'SELECT * FROM burgers WHERE day = ?';
  const burgers = await promisePool.query(sql, [day]);

  return burgers[0];
};

export {fetchAllBurgers, fetchBurgersByDay};
