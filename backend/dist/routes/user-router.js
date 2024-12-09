"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const authentication_1 = require("../middlewares/authentication");
const userRouter = express_1.default.Router();
// Käyttäjän tiedot sekä poisto
// userRouter.route('/:id').get(getUser).put(putUser).delete(deleteUser);
// Hankkii tokenin avulla tiedot itsestään
userRouter.route('/me').get(authentication_1.tokenAuth, user_controller_1.getMe);
// Käyttäjän profiilin data
userRouter.route('/profile-data').get(authentication_1.tokenAuth, user_controller_1.getProfileData);
// Käyttäjän lempi burgerit
// userRouter.route('/:id/favourites').get(favBurgers);
exports.default = userRouter;
