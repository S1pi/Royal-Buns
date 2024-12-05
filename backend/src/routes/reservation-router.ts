import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body, query} from 'express-validator';
import {getRestaurantById} from '../controllers/restaurant-controller';

const reservationRouter = express.Router();

// All reservations mahdollinen filtteröinti parametreillä
reservationRouter.route('/').get();

// Single reservation by its id
reservationRouter.route('/:id').get().put().delete();

// All single users reservations
reservationRouter.route('/users/:id').get();

// Make reservation
reservationRouter.route('/');

export default reservationRouter;
