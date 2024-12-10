import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {UserReturn} from '../types/user';

/**
 * @api {middleware} tokenAuth Token Authentication Middleware
 * @apiName TokenAuth
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Middleware to authenticate requests using a JWT token.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiSuccess {Object} user Decoded user information from the token.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized No token provided.
 * @apiError 403 Forbidden Invalid token.
 */
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
