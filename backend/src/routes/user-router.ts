import express from 'express';
import {getMe, postUser, userLogin} from '../controllers/user-controller';
import {tokenAuth} from '../middlewares/authentication';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';

const userRouter = express.Router();

// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);

// Käyttäjän kirjautuminen /api/user/auth/login
// Siirrä kokonaan auth-router:iin ja auth-controller etc.
userRouter.route('/auth/login').post(userLogin);

// Hankkii tokenin avulla tiedot itsestään
userRouter.route('/auth/login/me').get(tokenAuth, getMe);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
