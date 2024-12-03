import {Request, Response} from 'express';
import {NewUser} from '../types/user';
import {createUser, selectUserByCreds} from '../models/user-model';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

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

  // if (!username || !passwrd) {
  //   res.status(400).json({message: 'Username and Password is required'});
  //   return;
  // }

  try {
    const userId = await createUser(newUser);
    res.status(201).json({message: `User: ${username} created succesfully`, id: userId});
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('postUser', err.message);
      res.status(503).json({code: 503, message: err.message});
    }
  }
};

// old working one
// const postUser = async (req: Request, res: Response): Promise<void> => {
//   const {username, passwrd, email, phonenumber} = req.body;
//   const newUser: NewUser = {
//     username,
//     passwrd,
//     email,
//     phonenumber,
//     user_type: 'customer',
//   };

//   if (!username || !passwrd) {
//     res.status(400).json({message: 'Username and Password is required'});
//     return;
//   }

//   try {
//     const userId = await createUser(newUser);
//     res.status(201).json({message: `User: ${username} created succesfully`, id: userId});
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       console.error('postUser', err.message);
//       res.status(503).json({code: 503, message: err.message});
//     }
//   }
// };

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
      const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '24h'});
      res.json({...user, token});
    } else {
      console.log('Täältä');
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

const getMe = async (req: Request, res: Response) => {
  if (req.user) {
    console.log('getMe', req.user);
    res.json({message: 'token ok', user: req.user});
  } else {
    res.sendStatus(401);
  }
};

export {postUser, userLogin, getMe};
