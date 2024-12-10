import express from 'express';
import {tokenAuth} from '../middlewares/authentication';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';
import {postUser, userLogin} from '../controllers/auth-controller';

const authRouter = express.Router();

/**
 * @api {post} /users Create a new user
 * @apiName PostUser
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Create a new user in the database.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 * @apiParam {String} [email] Email of the user.
 * @apiParam {String} [phonenumber] Phone number of the user.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Number} code Status code.
 *
 * @apiError 400 Bad Request Parameters are undefined or missing.
 * @apiError 503 Service Unavailable Error in user creation.
 */
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

/**
 * @api {post} /users/login Authenticate user
 * @apiName UserLogin
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Authenticate a user with username and password.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 *
 * @apiSuccess {Object} user User information.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 * @apiSuccess {String} token JWT token.
 *
 * @apiError 400 Bad Request Parameters are undefined or missing.
 * @apiError 401 Unauthorized Invalid credentials.
 * @apiError 500 Internal Server Error Error fetching user from the database.
 */
authRouter
  .route('/login')
  .post(
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    validationErrorHandler,
    userLogin
  );

export default authRouter;
