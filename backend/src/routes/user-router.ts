import express from 'express';
import {getMe, getProfileData} from '../controllers/user-controller';
import {tokenAuth} from '../middlewares/authentication';

const userRouter = express.Router();

/**
 * @api {get} /me Get current user
 * @apiName GetMe
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Get the current authenticated user's information.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user User information.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized.
 */
userRouter.route('/me').get(tokenAuth, getMe);

/**
 * @api {get} /profile-data Get profile data
 * @apiName GetProfileData
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Get the current authenticated user's profile data.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiSuccess {Number} id User ID.
 * @apiSuccess {String} username Username.
 * @apiSuccess {String} email User email.
 * @apiSuccess {String} phonenumber User phone number.
 * @apiSuccess {String} user_type User type.
 * @apiSuccess {Number} favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized.
 */
userRouter.route('/profile-data').get(tokenAuth, getProfileData);

// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);

export default userRouter;
