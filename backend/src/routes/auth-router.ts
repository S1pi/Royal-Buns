import express from 'express';
import {tokenAuth} from '../middlewares/authentication';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';
import {getMe, postUser, userLogin} from '../controllers/user-controller';

const authRouter = express.Router();

// Käyttäjän luonti
// Parempi olla rekisteröinti /api/auth/register
authRouter.route('/register').post(
  body('username').trim().isLength({min: 3, max: 20}).isAlphanumeric(),
  body('password').isLength({min: 8, max: 200}).escape(),
  body('email').trim().isEmail().optional().escape(),
  // Selvitä mitä .isMobilePhone tekee ja tarviiko käyttää
  body('phonenumber').trim().optional().isNumeric(),
  validationErrorHandler,
  postUser
);

// login test
authRouter
  .route('/login')
  .post(
    body('username').trim().isAlphanumeric(),
    body('password').escape(),
    validationErrorHandler,
    userLogin
  );

export default authRouter;
