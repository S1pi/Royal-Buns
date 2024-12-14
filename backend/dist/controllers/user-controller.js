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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileData = exports.getMe = void 0;
/**
 * @api {get} /me Get current user
 * @apiName GetMe
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Get the current authenticated user's information.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user User information.
 * @apiSuccess {Number} user.id User ID.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.email User email.
 * @apiSuccess {String} user.phonenumber User phone number.
 * @apiSuccess {String} user.user_type User type.
 * @apiSuccess {Number} user.favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized.
 */
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user) {
        console.log('getMe', req.user);
        res.json({ message: 'token ok', user: req.user });
    }
    else {
        res.sendStatus(401);
    }
});
exports.getMe = getMe;
/**
 * @api {get} /profile Get profile data
 * @apiName GetProfileData
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Get the current authenticated user's profile data.
 *
 * @apiSuccess {Number} id User ID.
 * @apiSuccess {String} username Username.
 * @apiSuccess {String} email User email.
 * @apiSuccess {String} phonenumber User phone number.
 * @apiSuccess {String} user_type User type.
 * @apiSuccess {Number} favourite_bgr_id Favourite burger ID.
 *
 * @apiError 401 Unauthorized.
 */
const getProfileData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user) {
        console.log('getProfileData', req.user);
        const { id, username, email, phonenumber, user_type, favourite_bgr_id } = req.user;
        if (favourite_bgr_id) {
            // Implement favourite burger fetching
            // Fornow just return it with burger id
        }
        // const userReservations = ;
    }
    else {
        res.sendStatus(401);
    }
});
exports.getProfileData = getProfileData;
