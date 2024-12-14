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
exports.tokenAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
/**
 * @api {middleware} tokenAuth Token Authentication Middleware
 * @apiName TokenAuth
 * @apiGroup Authentication
 * @apiVersion 1.0.0
 * @apiDescription Middleware to authenticate requests using a JWT token.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiSuccess {Object} user Decoded user information from the token.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized No token provided.
 * @apiError 403 Forbidden Invalid token.
 */
const tokenAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tokenAuth', req.headers);
    const authHead = req.headers['authorization'];
    const token = authHead && authHead.split(' ')[1];
    // console.log('Token: ', token);
    if (!token) {
        res.sendStatus(401);
        return;
    }
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        // Decodes it to user object
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(403).send({ message: 'invalid token' });
    }
});
exports.tokenAuth = tokenAuth;
