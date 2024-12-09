"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = require("../middlewares/error-handler");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth-controller");
const authRouter = express_1.default.Router();
// Käyttäjän luonti
// Parempi olla rekisteröinti /api/auth/register
authRouter.route('/register').post((0, express_validator_1.body)('username')
    .trim()
    .isLength({ min: 3, max: 20 })
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username must be letters, numbers, underscores and between 3-20 characters'), (0, express_validator_1.body)('password')
    .isLength({ min: 8, max: 200 })
    .isStrongPassword()
    .withMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character'), (0, express_validator_1.body)('email').normalizeEmail().isEmail().optional().withMessage('Email is not valid'), 
// Selvitä mitä .isMobilePhone tekee ja tarviiko käyttää
(0, express_validator_1.body)('phonenumber')
    .trim()
    .optional()
    .isMobilePhone('any', { strictMode: false })
    .withMessage('Phone number is not valid'), error_handler_1.validationErrorHandler, auth_controller_1.postUser);
// login test
authRouter
    .route('/login')
    .post((0, express_validator_1.body)('username').trim().notEmpty().withMessage('Username is required'), (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required'), error_handler_1.validationErrorHandler, auth_controller_1.userLogin);
exports.default = authRouter;
