import express from 'express';
import {postUser} from '../controllers/user-controller';

const userRouter = express.Router();

// Käyttäjän luonti
userRouter.route('/').post(postUser);

// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);

// Käyttäjän kirjautuminen
// userRouter.route('/login').post(userLogin);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
