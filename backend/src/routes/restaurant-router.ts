import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {getRestaurantById} from '../controllers/restaurant-controller';

const restaurantRouter = express.Router();

// All restaurants example for reservation restaurant list:
restaurantRouter.route('/').get();

// Restaurant table capacity
restaurantRouter.route('/table-capacity').get();

// Hankkii tokenin avulla tiedot itsestään
restaurantRouter.route('/:id').get(getRestaurantById);

export default restaurantRouter;
