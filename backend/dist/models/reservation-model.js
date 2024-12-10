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
exports.fetchUserReservations = exports.fetchReservationById = exports.createReservation = exports.fetchRestaurantTablesAvailability = void 0;
const database_1 = __importDefault(require("../utils/database"));
const fetchRestaurantTablesAvailability = (date, startTime, endTime, restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT t.table_id, t.seats, 
                NOT EXISTS (
                    SELECT 1 
                    FROM reservation res
                    WHERE res.table_id = t.table_id
                      AND res.restaurant_id = ?
                      AND res.reservation_date = ?
                      AND (
                        ? < res.end_time AND ? > res.start_time
                      )
                  ) AS is_free
               FROM
                  res_table t
               WHERE
                  t.restaurant_id = ?`;
    const params = [restaurantId, date, startTime, endTime, restaurantId];
    try {
        const [result] = yield database_1.default.query(sql, params);
        console.log(result);
        return result;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchRestaurantTablesAvailability = fetchRestaurantTablesAvailability;
const fetchReservationById = (reservationId) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT id, user_id, reservation_date, start_time, end_time, table_id, restaurant_id FROM reservation WHERE id = ?`;
    try {
        const [result] = yield database_1.default.execute(sql, [
            reservationId,
        ]);
        const reservation = result[0];
        if (reservation) {
            return Object.assign(Object.assign({}, reservation), { reservation_date: new Date(reservation.reservation_date).toLocaleDateString('fi-FI'), start_time: reservation.start_time.substring(0, 5), end_time: reservation.end_time.substring(0, 5) });
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
exports.fetchReservationById = fetchReservationById;
const fetchUserReservations = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = ` SELECT 
                    r.id,
                    r.user_id,
                    r.reservation_date,
                    r.start_time,
                    r.end_time,
                    r.table_id,
                    r.restaurant_id,
                    rs.res_name AS restaurant_name
                  FROM 
                    reservation r
                  JOIN 
                    restaurant rs
                  ON 
                    r.restaurant_id = rs.id
                  WHERE 
                    r.user_id = ?;
                  `;
    try {
        const [result] = yield database_1.default.execute(sql, [
            userId,
        ]);
        return result.map((reservation) => {
            return Object.assign(Object.assign({}, reservation), { reservation_date: new Date(reservation.reservation_date).toLocaleDateString('fi-FI'), start_time: reservation.start_time.substring(0, 5), end_time: reservation.end_time.substring(0, 5) });
        });
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.fetchUserReservations = fetchUserReservations;
const createReservation = (userId, restaurant_id, table_id, reservation_date, start_time, end_time) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `INSERT INTO reservation (user_id, reservation_date, start_time, end_time, table_id, restaurant_id)
               VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [
        userId,
        reservation_date,
        start_time,
        end_time,
        table_id,
        restaurant_id,
    ];
    try {
        // TODO: Check if reservation is possible
        const [result] = yield database_1.default.execute(sql, params);
        const reservationId = result.insertId;
        const reservation = yield fetchReservationById(reservationId);
        if (!reservation) {
            throw new Error('Error fetching reservation after creation');
        }
        return reservation;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.createReservation = createReservation;
