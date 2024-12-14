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
exports.selectUserByCreds = exports.createUser = exports.DuplicateEntryError = void 0;
const database_1 = __importDefault(require("../utils/database"));
/**
 * Custom error class for handling duplicate entries.
 * @class DuplicateEntryError
 * @extends {Error}
 * @param {string} message - The error message.
 * @constructor
 */
class DuplicateEntryError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DuplicateEntryError';
    }
}
exports.DuplicateEntryError = DuplicateEntryError;
/**
 * @api {post} /users Create a new user
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Create a new user in the database.
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 * @apiParam {String} [email] Email of the user.
 * @apiParam {String} [phonenumber] Phone number of the user.
 * @apiParam {String} user_type Type of the user.
 *
 * @apiSuccess {Number} id The ID of the newly created user.
 *
 * @apiError 500 Internal Server Error Error inserting new user into the database.
 */
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `INSERT INTO users (username, passwrd, email, phonenumber, user_type) VALUES (?, ?, ?, ?, ?)`;
    const params = [
        newUser.username,
        newUser.password,
        newUser.email || null,
        newUser.phonenumber || null,
        newUser.user_type,
    ];
    try {
        const [result] = yield database_1.default.execute(sql, params);
        return result.insertId;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('createUser', err.message);
            if (err.message.includes('Duplicate entry')) {
                throw new DuplicateEntryError('Username or email already exists');
            }
            else {
                throw new Error('Error inserting new user into db');
            }
        }
        else {
            console.error('Unknown error occured');
            throw new Error('Unknown error occured');
        }
    }
});
exports.createUser = createUser;
/**
 * @api {post} /users/login Authenticate user
 * @apiName AuthenticateUser
 * @apiGroup User
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
 *
 * @apiError 401 Unauthorized Invalid credentials.
 * @apiError 500 Internal Server Error Error fetching user from the database.
 */
const selectUserByCreds = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT id, username, email, phonenumber, user_type, favourite_brgr_id, passwrd as password FROM users WHERE username = ?';
    const params = [credentials.username];
    try {
        const [rows] = yield database_1.default.execute(sql, params);
        if (rows.length > 0) {
            return rows[0];
        }
        return null;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('selectUserByCreds', err.message);
            throw new Error('Error fetching user from db with credentials');
        }
        else {
            console.error('Unknown error occurred');
            throw new Error('Unknown error occurred');
        }
    }
});
exports.selectUserByCreds = selectUserByCreds;
