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
exports.fetchRestaurantOpenHoursById = exports.fetchRestaurantOpenHours = exports.fetchTableCapacity = exports.fetchAllRestaurants = exports.fetchRestaurant = void 0;
const database_1 = __importDefault(require("../utils/database"));
const fetchRestaurant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM restaurant WHERE id = ?';
    try {
        const [result] = yield database_1.default.execute(sql, [id]);
        if (result.length > 0) {
            return result[0];
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchRestaurant = fetchRestaurant;
const fetchAllRestaurants = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM restaurant';
    try {
        const [result] = yield database_1.default.execute(sql);
        return result;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchAllRestaurants = fetchAllRestaurants;
// If you want to fetch only one restaurant's open hours
const fetchRestaurantOpenHoursById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT weekdays, weekends FROM open_hours WHERE restaurant_id = ?';
    try {
        const [result] = yield database_1.default.execute(sql, [id]);
        return result;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchRestaurantOpenHoursById = fetchRestaurantOpenHoursById;
// If you want to fetch all restaurants open hours
const fetchRestaurantOpenHours = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM open_hours';
    try {
        const [result] = yield database_1.default.execute(sql);
        return result;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchRestaurantOpenHours = fetchRestaurantOpenHours;
const fetchTableCapacity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM res_table WHERE restaurant_id = ?';
    try {
        const [result] = yield database_1.default.execute(sql, [id]);
        console.log(result);
        if (result.length > 0) {
            return result;
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchTableCapacity = fetchTableCapacity;
