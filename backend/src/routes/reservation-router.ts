import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';
import {getRestaurantById} from '../controllers/restaurant-controller';
import {getRestaurantTablesAvailability} from '../controllers/reservation-controller';
import {check, query} from 'express-validator';

const reservationRouter = express.Router();

reservationRouter.route('/').get();

// Hankkii vapaana olevat pöydät tiettyyn ajankohtaan /restaurants/:id/free-tables
reservationRouter.route('/:id/free-tables').get(
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

export default reservationRouter;
