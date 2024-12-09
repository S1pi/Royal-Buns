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
const user_model_2 = require("../models/user-model");
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, phonenumber } = req.body;
    const newUser = {
        username,
        password,
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
        res.status(201).json({ message: `User: ${username} created succesfully`, code: 201 });
    }
    catch (err) {
        if (err instanceof user_model_2.DuplicateEntryError) {
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
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('userLogin: ', req.body);
    const creds = { username: req.body.username, password: req.body.password };
    if (!creds.username || !creds.password) {
        res.status(400).json({ message: 'Parameters are undefined or missing' });
        return;
    }
    try {
        const user = yield (0, user_model_1.selectUserByCreds)(creds);
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
            throw new Error('Error in userLogin: ' + err.message);
        }
        else {
            throw new Error('Unknown error occured');
        }
    }
});
exports.userLogin = userLogin;
