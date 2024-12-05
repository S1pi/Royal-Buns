import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {
  getAllRestaurants,
  getRestaurantById,
  getTableCapacity,
} from '../controllers/restaurant-controller';
import {param} from 'express-validator';

const restaurantRouter = express.Router();

// All restaurants example for reservation restaurant list:
restaurantRouter.route('/').get(getAllRestaurants);

// Get restaurant by id
restaurantRouter
  .route('/:id')
  .get(
    param('id').isInt({min: 1}).withMessage('Id must be positive integer'),
    validationErrorHandler,
    getRestaurantById
  );

// Restaurant table capacity
restaurantRouter
  .route('/:id/table-capacity')
  .get(
    param('id').isInt({min: 1}).withMessage('Id must be positive integer'),
    validationErrorHandler,
    getTableCapacity
  );

export default restaurantRouter;
