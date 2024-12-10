import promisePool from '../utils/database';
import {NewUser, User, UserCreds, UserReturn} from '../types/user';
import {FieldPacket, ResultSetHeader, RowDataPacket} from 'mysql2';

/**
 * @api {post} /users Create a new user
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Create a new user in the database.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 * @apiParam {String} [email] Email of the user.
 * @apiParam {String} [phonenumber] Phone number of the user.
 * @apiParam {String} user_type Type of the user.
 *
 * @apiSuccess {Number} id The ID of the newly created user.
 *
 * @apiError 500 Internal Server Error Error inserting new user into the database.
 */
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
      throw new Error('Error inserting new user into db');
    } else {
      console.error('Unknown error occured');
      throw new Error('Unknown error occured');
    }
  }
};

/**
 * @api {post} /users/login Authenticate user
 * @apiName AuthenticateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Authenticate a user with username and password.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 *
 * @apiSuccess {Object} user User information.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized Invalid credentials.
 * @apiError 500 Internal Server Error Error fetching user from the database.
 */
const selectUserByCreds = async (credentials: UserCreds): Promise<UserReturn | null> => {
  const sql =
    'SELECT id, username, email, phonenumber, user_type, favourite_brgr_id, passwrd as password FROM users WHERE username = ?';
  const params = [credentials.username];
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
      console.error('Unknown error occurred');
      throw new Error('Unknown error occurred');
    }
  }
};

export {createUser, selectUserByCreds};
