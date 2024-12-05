import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body, check, query} from 'express-validator';
import {
  getRestaurantById,
  getRestaurantTablesAvailability,
} from '../controllers/restaurant-controller';

const restaurantRouter = express.Router();

// All restaurants example for reservation restaurant list:
restaurantRouter.route('/').get();

// Restaurant table capacity
restaurantRouter.route('/table-capacity').get();

// Hankkii tokenin avulla tiedot itsestään
restaurantRouter.route('/:id').get(getRestaurantById);

// Hankkii vapaana olevat pöydät tiettyyn ajankohtaan /restaurants/:id/free-tables
// Siirrä ehkä kuitenkin toimimaan reservation-routerissa
restaurantRouter.route('/:id/free-tables').get(
  check('id')
    .isInt({min: 1})
    .withMessage('Restaurant ID must be integer greater than 1')
    .toInt(),
  query('reservation_date').isISO8601().withMessage('Reservation date must be ISO 8601'),
  query('start_time')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('Start time needs to be in: HH:MM:SS format'),
  query('end_time')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('Start time needs to be in: HH:MM:SS format'),
  validationErrorHandler,
  getRestaurantTablesAvailability
);

export default restaurantRouter;
