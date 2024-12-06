import {Request, Response} from 'express';
import {NewUser} from '../types/user';
import {createUser, selectUserByCreds} from '../models/user-model';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {stat} from 'fs';

const postUser = async (req: Request, res: Response): Promise<void> => {
  const {username, password, email, phonenumber} = req.body;
  const newUser: NewUser = {
    username,
    password,
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
    res.status(201).json({message: `User: ${username} created succesfully`, code: 201});
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('postUser', err.message);
      res.status(503).json({code: 503, message: err.message});
    }
  }
};

const userLogin = async (req: Request, res: Response) => {
  console.log('userLogin: ', req.body);
  const creds = {username: req.body.username, password: req.body.password};
  if (!creds.username || !creds.password) {
    res.status(400).json({message: 'Parameters are undefined or missing'});
    return;
  }
  try {
    const user = await selectUserByCreds(creds);
    if (user) {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPI_TIME,
      });
      res.json({...user, token});
    } else {
      res.sendStatus(401);
      return;
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('userLogin', err.message);
      throw new Error('Error in userLogin: ' + err.message);
    } else {
      throw new Error('Unknown error occured');
    }
  }
};

export {postUser, userLogin};
