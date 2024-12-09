import promisePool from '../utils/database';
import {NewUser, User, UserCreds, UserReturn} from '../types/user';
import {FieldPacket, ResultSetHeader, RowDataPacket} from 'mysql2';

/**
 * Custom error class for handling duplicate entries.
 * @class DuplicateEntryError
 * @extends {Error}
 * @param {string} message - The error message.
 * @constructor
 */

export class DuplicateEntryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuplicateEntryError';
  }
}

const createUser = async (newUser: NewUser): Promise<number> => {
  const sql = `INSERT INTO users (username, passwrd, email, phonenumber, user_type) VALUES (?, ?, ?, ?, ?)`;

  const params = [
    newUser.username,
    newUser.password,
    newUser.email || null,
    newUser.phonenumber || null,
    newUser.user_type,
  ];

  try {
    const [result]: [ResultSetHeader, FieldPacket[]] = await promisePool.execute(
      sql,
      params
    );
    return result.insertId;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('createUser', err.message);
      if (err.message.includes('Duplicate entry')) {
        throw new DuplicateEntryError('Username or email already exists');
      } else {
        throw new Error('Error inserting new user into db');
      }
    } else {
      console.error('Unknown error occured');
      throw new Error('Unknown error occured');
    }
  }
};

const selectUserByCreds = async (credentials: UserCreds): Promise<UserReturn | null> => {
  const sql =
    'SELECT id, username, email, phonenumber, user_type, favourite_brgr_id FROM users WHERE username = ? AND passwrd = ?';
  const params = [credentials.username, credentials.password];
  try {
    const [rows] = await promisePool.execute<UserReturn[] & RowDataPacket[]>(sql, params);

    if (rows.length > 0) {
      return rows[0];
    }

    return null;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('selectUserByCreds', err.message);
      throw new Error('Error fetching user from db with credentials');
    } else {
      console.error('Unknown error occured');
      throw new Error('Unknown error occured');
    }
  }
};

export {createUser, selectUserByCreds};
