"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = require("../middlewares/error-handler");
const restaurant_controller_1 = require("../controllers/restaurant-controller");
const express_validator_1 = require("express-validator");
const restaurantRouter = express_1.default.Router();
// All restaurants example for reservation restaurant list:
restaurantRouter.route('/').get(restaurant_controller_1.getAllRestaurants);
// Get restaurant by id
restaurantRouter
    .route('/:id')
    .get((0, express_validator_1.param)('id').isInt({ min: 1 }).withMessage('Id must be positive integer'), error_handler_1.validationErrorHandler, restaurant_controller_1.getRestaurantById);
// Restaurant table capacity
restaurantRouter
    .route('/:id/table-capacity')
    .get((0, express_validator_1.param)('id').isInt({ min: 1 }).withMessage('Id must be positive integer'), error_handler_1.validationErrorHandler, restaurant_controller_1.getTableCapacity);
exports.default = restaurantRouter;
