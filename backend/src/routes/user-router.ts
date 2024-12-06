import express from 'express';
import {getMe, getProfileData} from '../controllers/user-controller';
import {tokenAuth} from '../middlewares/authentication';

const userRouter = express.Router();

// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);

// Hankkii tokenin avulla tiedot itsestään
userRouter.route('/me').get(tokenAuth, getMe);

// Käyttäjän profiilin data
userRouter.route('/profile-data').get(tokenAuth, getProfileData);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
