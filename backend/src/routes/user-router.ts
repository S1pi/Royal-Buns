import express from 'express';
import {getMe, postUser, userLogin} from '../controllers/user-controller';
import {tokenAuth} from '../middlewares/authentication';

const userRouter = express.Router();

// Käyttäjän luonti
userRouter.route('/').post(postUser);

// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);

// Käyttäjän kirjautuminen /api/user/auth/login
userRouter.route('/auth/login').post(userLogin);

//Testi user homma
userRouter.route('/auth/login/me').post(tokenAuth, getMe);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
