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
exports.getAllSides = exports.getAllSliders = exports.getAllDrinks = exports.postBurger = exports.getBurgersByDay = exports.getAllBurgers = void 0;
const menu_model_1 = require("../models/menu-model");
const getAllBurgers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const burgers = yield (0, menu_model_1.fetchAllBurgers)();
        res.status(200).json(burgers);
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
exports.getAllBurgers = getAllBurgers;
const getBurgersByDay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const day = req.params.day;
    try {
        const burgers = yield (0, menu_model_1.fetchBurgersByDay)(day);
        res.status(200).json(burgers);
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
exports.getBurgersByDay = getBurgersByDay;
const postBurger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, diets, price, name, description, day } = req.body;
    const photo = '';
    try {
        const burgers = yield (0, menu_model_1.changeBurgerData)({
            id,
            diets,
            price,
            name,
            description,
            photo,
            day,
        });
        if (burgers > 0) {
            res.status(200).json({ message: 'Burger updated successfully' });
        }
        else {
            res.status(400).json({ message: 'Failed to update burger' });
        }
        // res.status(200).json(burgers);
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
exports.postBurger = postBurger;
const getAllDrinks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drinks = yield (0, menu_model_1.fetchAllDrinks)();
        res.status(200).json(drinks);
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
exports.getAllDrinks = getAllDrinks;
const getAllSliders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sliders = yield (0, menu_model_1.fetchAllSliders)();
        res.status(200).json(sliders);
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
exports.getAllSliders = getAllSliders;
const getAllSides = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sides = yield (0, menu_model_1.fetchAllSides)();
        res.status(200).json(sides);
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
exports.getAllSides = getAllSides;
