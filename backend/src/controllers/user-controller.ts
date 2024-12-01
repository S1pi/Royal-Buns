import {Request, Response} from 'express';
import {NewUser} from '../types/user';
import {createUser} from '../models/user-model';

const postUser = async (req: Request, res: Response): Promise<void> => {
  const {username, passwrd, email, phonenumber} = req.body;
  const newUser: NewUser = {
    username,
    passwrd,
    email,
    phonenumber,
    user_type: 'customer',
  };

  if (!username || !passwrd) {
    res.status(400).json({message: 'Username and Password is required'});
    return;
  }

  try {
    const userId = await createUser(newUser);
    res
      .status(201)
      .json({message: `User: ${username} created succesfully`, id: userId});
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('postUser', err.message);
      res.status(503).json({code: 503, message: err.message});
    }
  }
};

export {postUser};
