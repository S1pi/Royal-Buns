import {Request, Response} from 'express';
import {NewUser} from '../types/user';
import {createUser, selectUserByCreds} from '../models/user-model';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from 'bcrypt';
/**
 * @api {post} /users Create a new user
 * @apiName PostUser
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Create a new user in the database.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 * @apiParam {String} [email] Email of the user.
 * @apiParam {String} [phonenumber] Phone number of the user.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Number} code Status code.
 *
 * @apiError 400 Bad Request Parameters are undefined or missing.
 * @apiError 503 Service Unavailable Error in user creation.
 */
const postUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email, phonenumber } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt round of 10
  const newUser: NewUser = {
    username,
    password: hashedPassword,
    email,
    phonenumber,
    user_type: 'customer',
  };
  console.log(newUser);

  try {
    const userId = await createUser(newUser);
    if (!userId) {
      throw new Error('Error in user creation');
    }
    res.status(201).json({ message: `User: ${username} created successfully`, code: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('postUser', err.message);
      res.status(503).json({ code: 503, message: err.message });
    }
  }
};

/**
 * @api {post} /users/login Authenticate user
 * @apiName UserLogin
 * @apiGroup Authentication
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
 * @apiSuccess {String} token JWT token.
 *
 * @apiError 400 Bad Request Parameters are undefined or missing.
 * @apiError 401 Unauthorized Invalid credentials.
 * @apiError 500 Internal Server Error Error fetching user from the database.
 */
const userLogin = async (req: Request, res: Response) => {
  console.log('userLogin: ', req.body);
  const creds = { username: req.body.username, password: req.body.password };
  if (!creds.username || !creds.password) {
    res.status(400).json({ message: 'Parameters are undefined or missing' });
    return;
  }
  try {
    const user = await selectUserByCreds({ username: creds.username, password: creds.password });
    if (user) {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPI_TIME,
      });
      res.json({ ...user, token });
    } else {
      res.sendStatus(401);
      return;
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('userLogin', err.message);
      res.status(500).json({ message: 'Error fetching user from the database' });
    }
  }
};

export {postUser, userLogin};
