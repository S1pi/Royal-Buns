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
exports.getBurgersByDay = exports.getAllBurgers = void 0;
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
