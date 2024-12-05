import express from 'express';
import {getMe} from '../controllers/user-controller';
import {tokenAuth} from '../middlewares/authentication';

const userRouter = express.Router();

// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);

// Hankkii tokenin avulla tiedot itsestään
userRouter.route('/me').get(tokenAuth, getMe);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
