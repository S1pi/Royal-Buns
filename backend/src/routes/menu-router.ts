import express from 'express';
import {body, param} from 'express-validator';
import {
  getAllBurgers,
  getAllDrinks,
  getAllSides,
  getAllSliders,
  getBurgersByDay,
  postBurger,
  postDrink,
  postSide,
  postSlider,
} from '../controllers/menu-controller';
import {validationErrorHandler} from '../middlewares/error-handler';
import {tokenAuth} from '../middlewares/authentication';

const menuRouter = express.Router();

// Meby add some routes here for posting new menu items
// menuRouter.route('/').post();

const validateBurger = [];

menuRouter
  .route('/burgers')
  .get(getAllBurgers)
  .post(tokenAuth, validationErrorHandler, postBurger);

const validDays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
  'everyday',
];

menuRouter
  .route('/burgers/:day')
  .get(
    param('day').isString().isIn(validDays).withMessage('Invalid day parameter'),
    validationErrorHandler,
    getBurgersByDay
  );

menuRouter
  .route('/drinks')
  .get(getAllDrinks)
  .post(tokenAuth, validationErrorHandler, postDrink);
menuRouter
  .route('/sliders')
  .get(getAllSliders)
  .post(tokenAuth, validationErrorHandler, postSlider);
menuRouter
  .route('/sides')
  .get(getAllSides)
  .post(tokenAuth, validationErrorHandler, postSide);

export default menuRouter;
