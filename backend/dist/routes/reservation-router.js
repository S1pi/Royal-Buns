"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = require("../middlewares/error-handler");
const reservation_controller_1 = require("../controllers/reservation-controller");
const express_validator_1 = require("express-validator");
const authentication_1 = require("../middlewares/authentication");
const reservationRouter = express_1.default.Router();
// All reservations mahdollinen filtteröinti parametreillä
reservationRouter.route('/').get();
// Hankkii vapaana olevat pöydät tiettyyn ajankohtaan /restaurants/:id/free-tables
reservationRouter.route('/:id/free-tables').get((0, express_validator_1.check)('id')
    .isInt({ min: 1 })
    .withMessage('Restaurant ID must be integer greater than 1')
    .toInt(), (0, express_validator_1.query)('reservation_date').isISO8601().withMessage('Reservation date must be ISO 8601'), (0, express_validator_1.query)('start_time')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('Start time needs to be in: HH:MM:SS format'), (0, express_validator_1.query)('end_time')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('Start time needs to be in: HH:MM:SS format'), error_handler_1.validationErrorHandler, reservation_controller_1.getRestaurantTablesAvailability);
// Single reservation by its id
reservationRouter
    .route('/:id')
    .get((0, express_validator_1.check)('id')
    .isInt({ min: 1 })
    .withMessage('Restaurant ID must be integer greater than 1')
    .toInt(), error_handler_1.validationErrorHandler, reservation_controller_1.getReservationById)
    .put()
    .delete();
// All single users reservations
// TODO: Handle validation with express-validator
reservationRouter
    .route('/user/all')
    .get(authentication_1.tokenAuth, error_handler_1.validationErrorHandler, reservation_controller_1.getUserReservations);
// Make reservation
reservationRouter.route('/make-reservation').post((0, express_validator_1.body)('restaurant_id')
    .isInt({ min: 1 })
    .withMessage('Restaurant ID must be integer greater than 1')
    .toInt(), (0, express_validator_1.body)('table_id')
    .isInt({ min: 1 })
    .withMessage('Table ID must be integer greater than 1')
    .toInt(), (0, express_validator_1.body)('reservation_date').isISO8601().withMessage('Reservation date must be ISO 8601'), (0, express_validator_1.body)('start_time')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('Start time needs to be in: HH:MM:SS format'), (0, express_validator_1.body)('end_time')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('Start time needs to be in: HH:MM:SS format'), 
// Pyyntö tarvitsee tokenin
authentication_1.tokenAuth, error_handler_1.validationErrorHandler, reservation_controller_1.postReservation);
exports.default = reservationRouter;
