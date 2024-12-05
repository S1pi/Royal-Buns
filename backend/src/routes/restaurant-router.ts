import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body, check, query} from 'express-validator';
import {getRestaurantById} from '../controllers/restaurant-controller';

const restaurantRouter = express.Router();

// Hankkii tokenin avulla tiedot itsestään
restaurantRouter.route('/:id').get(getRestaurantById);

export default restaurantRouter;
