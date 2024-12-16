"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const menu_controller_1 = require("../controllers/menu-controller");
const error_handler_1 = require("../middlewares/error-handler");
const authentication_1 = require("../middlewares/authentication");
const menuRouter = express_1.default.Router();
// Meby add some routes here for posting new menu items
// menuRouter.route('/').post();
const validateBurger = [];
menuRouter
    .route('/burgers')
    .get(menu_controller_1.getAllBurgers)
    .post(authentication_1.tokenAuth, error_handler_1.validationErrorHandler, menu_controller_1.postBurger);
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
    .get((0, express_validator_1.param)('day').isString().isIn(validDays).withMessage('Invalid day parameter'), error_handler_1.validationErrorHandler, menu_controller_1.getBurgersByDay);
menuRouter
    .route('/drinks')
    .get(menu_controller_1.getAllDrinks)
    .post(authentication_1.tokenAuth, error_handler_1.validationErrorHandler, menu_controller_1.postDrink);
menuRouter
    .route('/sliders')
    .get(menu_controller_1.getAllSliders)
    .post(authentication_1.tokenAuth, error_handler_1.validationErrorHandler, menu_controller_1.postSlider);
menuRouter
    .route('/sides')
    .get(menu_controller_1.getAllSides)
    .post(authentication_1.tokenAuth, error_handler_1.validationErrorHandler, menu_controller_1.postSide);
exports.default = menuRouter;
