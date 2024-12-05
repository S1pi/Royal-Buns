import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {UserReturn} from '../types/user';

const tokenAuth = async (req: Request, res: Response, next: NextFunction) => {
  console.log('tokenAuth', req.headers);
  const authHead = req.headers['authorization'];
  const token = authHead && authHead.split(' ')[1];
  // console.log('Token: ', token);
  if (!token) {
    res.sendStatus(401);
    return;
  }
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    // Decodes it to user object
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as UserReturn;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).send({message: 'invalid token'});
  }
};

export {tokenAuth};
