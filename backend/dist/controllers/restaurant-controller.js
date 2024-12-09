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
exports.getTableCapacity = exports.getAllRestaurants = exports.getRestaurantById = void 0;
const restaurant_model_1 = require("../models/restaurant-model");
const getRestaurantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resId = req.params.id;
    try {
        const restaurant = yield (0, restaurant_model_1.fetchRestaurant)(Number(resId));
        if (!restaurant) {
            res.status(404).json({ message: 'Restaurant not found' });
            return;
        }
        res.status(200).json(restaurant);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', code: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', code: 500, error: err });
        }
    }
});
exports.getRestaurantById = getRestaurantById;
// type Restaurant = {
//   id: number;
//   res_name: string;
//   city: string;
//   location: string;
//   address: string;
//   coordinates: coordinates;
// };
const getAllRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield (0, restaurant_model_1.fetchAllRestaurants)();
        const restaurantsOpenHours = yield (0, restaurant_model_1.fetchRestaurantOpenHours)();
        const restaurantsWithOpenHours = restaurants.map((restaurant) => {
            const openHours = restaurantsOpenHours.find((openHour) => openHour.restaurant_id === restaurant.id);
            if (!openHours) {
                return null;
            }
            else {
                const { weekdays, weekends } = openHours;
                return {
                    id: restaurant.id,
                    res_name: restaurant.res_name,
                    city: restaurant.city,
                    location: restaurant.location,
                    address: restaurant.address,
                    coordinates: restaurant.coordinates,
                    openHours: { weekdays, weekends },
                };
            }
        });
        res.status(200).json(restaurantsWithOpenHours);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', code: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', code: 500, error: err });
        }
    }
});
exports.getAllRestaurants = getAllRestaurants;
const getTableCapacity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantId = req.params.id;
    try {
        const tableCapacity = yield (0, restaurant_model_1.fetchTableCapacity)(restaurantId);
        if (!tableCapacity) {
            res.status(404).json({ message: 'Table capacity not found' });
            return;
        }
        else {
            let smallTable = 0;
            let mediumTable = 0;
            let largeTable = 0;
            tableCapacity.forEach((table) => {
                if (table.seats <= 2) {
                    smallTable++;
                }
                else if (table.seats <= 6) {
                    mediumTable++;
                }
                else {
                    largeTable++;
                }
            });
            res.status(200).json({ smallTable, mediumTable, largeTable });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error: ', err);
            res
                .status(503)
                .json({ message: 'Service unavailable: database error', code: 503, error: err });
        }
        else {
            console.error('Unknown error: ', err);
            res.status(500).json({ message: 'Unknown error', code: 500, error: err });
        }
    }
});
exports.getTableCapacity = getTableCapacity;
