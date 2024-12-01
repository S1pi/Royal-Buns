import promisePool from '../utils/database';
import {NewUser} from '../types/user';
import {FieldPacket, ResultSetHeader} from 'mysql2';

const createUser = async (newUser: NewUser): Promise<number> => {
  const sql = `INSERT INTO users (username, passwrd, email, phonenumber, user_type) VALUES (?, ?, ?, ?, ?)`;

  const params = [
    newUser.username,
    newUser.passwrd,
    newUser.email || null,
    newUser.phonenumber || null,
    newUser.user_type,
  ];

  try {
    const [result]: [ResultSetHeader, FieldPacket[]] =
      await promisePool.execute(sql, params);
    return result.insertId;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('createUser', err.message);
      throw new Error('Error inserting new user into db');
    } else {
      console.error('Unknown error occured');
      throw new Error('Unknown error occured');
    }
  }
};

export {createUser};
