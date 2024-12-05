import express from 'express';
import {validationErrorHandler} from '../middlewares/error-handler';
import {body} from 'express-validator';
import {getRestaurantById} from '../controllers/restaurant-controller';

const reservationRouter = express.Router();

reservationRouter.route('/').get();

export default reservationRouter;
