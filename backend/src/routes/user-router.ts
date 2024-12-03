import express from 'express';
import {getMe, postUser, userLogin} from '../controllers/user-controller';
import {tokenAuth} from '../middlewares/authentication';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';

const userRouter = express.Router();

// Käyttäjän luonti
userRouter.route('/').post(
  body('username').trim().isLength({min: 3, max: 20}).isAlphanumeric(),
  body('password').isLength({min: 8, max: 200}).escape(),
  body('email').trim().isEmail().optional().escape(),
  // Selvitä mitä .isMobilePhone tekee ja tarviiko käyttää
  body('phonenumber').trim().optional().isNumeric(),
  validationErrorHandler,
  postUser
);

// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);

// Käyttäjän kirjautuminen /api/user/auth/login
userRouter.route('/auth/login').post(userLogin);

//Testi user homma
userRouter.route('/auth/login/me').get(tokenAuth, getMe);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
