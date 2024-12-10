"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.postUser = void 0;
const user_model_1 = require("../models/user-model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * @api {post} /users Create a new user
 * @apiName PostUser
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Create a new user in the database.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 * @apiParam {String} [email] Email of the user.
 * @apiParam {String} [phonenumber] Phone number of the user.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Number} code Status code.
 *
 * @apiError 400 Bad Request Parameters are undefined or missing.
 * @apiError 503 Service Unavailable Error in user creation.
 */
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, phonenumber } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10); // Hash the password with a salt round of 10
    const newUser = {
        username,
        password: hashedPassword,
        email,
        phonenumber,
        user_type: 'customer',
    };
    console.log(newUser);
    try {
        const userId = yield (0, user_model_1.createUser)(newUser);
        if (!userId) {
            throw new Error('Error in user creation');
        }
        res.status(201).json({ message: `User: ${username} created successfully`, code: 201 });
    }
    catch (err) {
        if (err instanceof user_model_1.DuplicateEntryError) {
            console.error('postUser', err.message);
            res.status(409).json({ code: 409, message: err.message });
        }
        else if (err instanceof Error) {
            console.error('postUser', err.message);
            res.status(503).json({ code: 503, message: err.message });
        }
    }
});
exports.postUser = postUser;
/**
 * @api {post} /users/login Authenticate user
 * @apiName UserLogin
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Authenticate a user with username and password.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 *
 * @apiSuccess {Object} user User information.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 * @apiSuccess {String} token JWT token.
 *
 * @apiError 400 Bad Request Parameters are undefined or missing.
 * @apiError 401 Unauthorized Invalid credentials.
 * @apiError 500 Internal Server Error Error fetching user from the database.
 */
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('userLogin: ', req.body);
    const creds = { username: req.body.username, password: req.body.password };
    if (!creds.username || !creds.password) {
        res.status(400).json({ message: 'Parameters are undefined or missing' });
        return;
    }
    try {
        const user = yield (0, user_model_1.selectUserByCreds)({ username: creds.username, password: creds.password });
        if (user) {
            if (!process.env.JWT_SECRET) {
                throw new Error('JWT_SECRET is not defined');
            }
            const token = jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET, {
                expiresIn: process.env.EXPI_TIME,
            });
            res.json(Object.assign(Object.assign({}, user), { token }));
        }
        else {
            res.sendStatus(401);
            return;
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('userLogin', err.message);
            res.status(500).json({ message: 'Error fetching user from the database' });
        }
    }
});
exports.userLogin = userLogin;
