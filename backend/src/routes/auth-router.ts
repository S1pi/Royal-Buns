import express from 'express';
import {tokenAuth} from '../middlewares/authentication';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';
import {postUser, userLogin} from '../controllers/auth-controller';

const authRouter = express.Router();

// Käyttäjän luonti
// Parempi olla rekisteröinti /api/auth/register
authRouter.route('/register').post(
  body('username')
    .trim()
    .isLength({min: 3, max: 20})
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      'Username must be letters, numbers, underscores and between 3-20 characters'
    ),
  body('password')
    .isLength({min: 8, max: 200})
    .isStrongPassword()
    .withMessage(
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character'
    ),
  body('email').normalizeEmail().isEmail().optional().withMessage('Email is not valid'),
  // Selvitä mitä .isMobilePhone tekee ja tarviiko käyttää
  body('phonenumber')
    .trim()
    .optional()
    .isMobilePhone('any', {strictMode: false})
    .withMessage('Phone number is not valid'),
  validationErrorHandler,
  postUser
);

// login test
authRouter
  .route('/login')
  .post(
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    validationErrorHandler,
    userLogin
  );

export default authRouter;
