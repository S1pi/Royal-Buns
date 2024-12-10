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
exports.getUserReservations = exports.getReservationById = exports.postReservation = exports.getRestaurantTablesAvailability = void 0;
const reservation_model_1 = require("../models/reservation-model");
const restaurant_model_1 = require("../models/restaurant-model");
const getRestaurantTablesAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservation_date, start_time, end_time } = req.query;
    const restaurantId = req.params.id;
    try {
        const result = yield (0, reservation_model_1.fetchRestaurantTablesAvailability)(reservation_date, start_time, end_time, restaurantId);
        if (result.length > 0) {
            // Returns list of all tables in the restaurant if they are available or not
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ message: `Restaurant (id): ${restaurantId} not found` });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', status: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', status: 500, error: err });
        }
    }
});
exports.getRestaurantTablesAvailability = getRestaurantTablesAvailability;
const getReservationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reservationId = req.params.id;
    try {
        const reservation = yield (0, reservation_model_1.fetchReservationById)(reservationId);
        console.log('Reservation: ', reservation);
        if (!reservation) {
            res.status(404).json({ message: `Reservation (id): ${reservationId} not found` });
            return;
        }
        res.status(200).json(reservation);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', status: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', status: 500, error: err });
        }
    }
});
exports.getReservationById = getReservationById;
const postReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    const { restaurant_id, table_id, reservation_date, start_time, end_time } = req.body;
    try {
        const reservation = yield (0, reservation_model_1.createReservation)(userId, restaurant_id, table_id, reservation_date, start_time, end_time);
        const restaurant = yield (0, restaurant_model_1.fetchRestaurant)(restaurant_id);
        if (!restaurant) {
            res.status(404).json({ message: 'Restaurant not found' });
            return;
        }
        const reservationInfo = Object.assign(Object.assign({}, reservation), { restaurant_name: restaurant.res_name });
        res
            .status(201)
            .json({ message: 'Reservation created', reservation_info: reservationInfo });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', status: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', status: 500, error: err });
        }
    }
});
exports.postReservation = postReservation;
const getUserReservations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const userReservations = yield (0, reservation_model_1.fetchUserReservations)(userId);
        if (userReservations.length > 0) {
            res.status(200).json(userReservations);
        }
        else {
            res.status(404).json({ message: `User (id): ${userId} has no reservations` });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', status: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', status: 500, error: err });
        }
    }
});
exports.getUserReservations = getUserReservations;
