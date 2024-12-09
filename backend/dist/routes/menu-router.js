"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const menu_controller_1 = require("../controllers/menu-controller");
const error_handler_1 = require("../middlewares/error-handler");
const menuRouter = express_1.default.Router();
// Meby add some routes here for posting new menu items
// menuRouter.route('/').post();
menuRouter.route('/burgers').get(menu_controller_1.getAllBurgers);
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
exports.default = menuRouter;
