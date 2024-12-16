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
exports.changeSideData = exports.changeSliderData = exports.changeDrinkData = exports.fetchAllSides = exports.fetchAllSliders = exports.fetchAllDrinks = exports.changeBurgerData = exports.fetchBurgersByDay = exports.fetchAllBurgers = void 0;
const database_1 = __importDefault(require("../utils/database"));
const fetchAllBurgers = () => __awaiter(void 0, void 0, void 0, function* () {
    // const sql = 'SELECT * FROM burgers'; // Vanha sql kysely ilman mariadb:n longtext kenttää
    const sql = "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo, day FROM burgers";
    const [result] = yield database_1.default.query(sql);
    const burgers = result.map((row) => ({
        id: row.id,
        diets: row.diets,
        price: row.price,
        name: row.name,
        description: {
            FI: row.descriptionFI,
            EN: row.descriptionEN,
        },
        photo: row.photo,
        day: row.day,
    }));
    return burgers;
});
exports.fetchAllBurgers = fetchAllBurgers;
const fetchBurgersByDay = (day) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo, day FROM burgers WHERE day = ?";
    const [result] = yield database_1.default.query(sql, [day]);
    const burgers = result.map((row) => ({
        id: row.id,
        diets: row.diets,
        price: row.price,
        name: row.name,
        description: {
            FI: row.descriptionFI,
            EN: row.descriptionEN,
        },
        photo: row.photo,
        day: row.day,
    }));
    return burgers;
});
exports.fetchBurgersByDay = fetchBurgersByDay;
const changeBurgerData = (burger) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'UPDATE burgers SET diets = ?, price = ?, name = ?, description = ?, photo = ?, day = ? WHERE id = ?';
    const params = [
        burger.diets,
        burger.price,
        burger.name,
        JSON.stringify(burger.description),
        burger.photo,
        burger.day,
        burger.id,
    ];
    try {
        const result = yield database_1.default.execute(sql, params);
        return result[0].affectedRows;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.changeBurgerData = changeBurgerData;
const changeDrinkData = (drink) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'UPDATE drinks SET diets = ?, price = ?, name = ?, description = ?, photo = ? WHERE id = ?';
    const params = [
        drink.diets,
        drink.price,
        drink.name,
        JSON.stringify(drink.description),
        drink.photo,
        drink.id,
    ];
    try {
        const result = yield database_1.default.execute(sql, params);
        return result[0].affectedRows;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.changeDrinkData = changeDrinkData;
const changeSliderData = (slider) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'UPDATE sliders SET diets = ?, price = ?, name = ?, description = ?, photo = ? WHERE id = ?';
    const params = [
        slider.diets,
        slider.price,
        slider.name,
        JSON.stringify(slider.description),
        slider.photo,
        slider.id,
    ];
    try {
        const result = yield database_1.default.execute(sql, params);
        return result[0].affectedRows;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.changeSliderData = changeSliderData;
const changeSideData = (side) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'UPDATE sides SET diets = ?, price = ?, name = ?, description = ?, photo = ? WHERE id = ?';
    const params = [
        side.diets,
        side.price,
        side.name,
        JSON.stringify(side.description),
        side.photo,
        side.id,
    ];
    try {
        const result = yield database_1.default.execute(sql, params);
        return result[0].affectedRows;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.changeSideData = changeSideData;
// const burgers: Burger[] = result.map((row: any) => ({
//   id: row.id,
//   diets: row.diets,
//   price: row.price,
//   name: row.name,
//   description: {
//     FI: row.descriptionFI,
//     EN: row.descriptionEN,
//   },
//   photo: row.photo,
//   day: row.day,
// }));
const fetchAllDrinks = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo FROM drinks";
    const [result] = yield database_1.default.query(sql);
    const drinks = result.map((row) => ({
        id: row.id,
        diets: row.diets,
        price: row.price,
        name: row.name,
        description: {
            FI: row.descriptionFI,
            EN: row.descriptionEN,
        },
        photo: row.photo,
    }));
    return drinks;
});
exports.fetchAllDrinks = fetchAllDrinks;
const fetchAllSliders = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo FROM sliders";
    const [result] = yield database_1.default.query(sql);
    const sliders = result.map((row) => ({
        id: row.id,
        diets: row.diets,
        price: row.price,
        name: row.name,
        description: {
            FI: row.descriptionFI,
            EN: row.descriptionEN,
        },
        photo: row.photo,
    }));
    return sliders;
});
exports.fetchAllSliders = fetchAllSliders;
const fetchAllSides = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT id, diets, price, name, JSON_EXTRACT(description, '$.FI') as 'descriptionFI', JSON_EXTRACT(description, '$.EN') as 'descriptionEN', photo FROM sides";
    const [result] = yield database_1.default.query(sql);
    const sides = result.map((row) => ({
        id: row.id,
        diets: row.diets,
        price: row.price,
        name: row.name,
        description: {
            FI: row.descriptionFI,
            EN: row.descriptionEN,
        },
        photo: row.photo,
    }));
    return sides;
});
exports.fetchAllSides = fetchAllSides;
