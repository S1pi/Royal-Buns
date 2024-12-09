"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorHandler = exports.customError = exports.errorHandler = exports.notFoundHandler = void 0;
const express_validator_1 = require("express-validator");
const customError = (message, status, errors) => {
    const error = new Error(message);
    error.status = status;
    if (errors) {
        error.errors = errors;
    }
    return error;
};
exports.customError = customError;
const validationErrorHandler = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    // console.log('Testi errorit: ', errors);
    if (!errors.isEmpty()) {
        const validationErrors = errors.array({ onlyFirstError: true }).map((error) => {
            const typedError = error;
            console.log(error);
            if (typedError.path === 'password') {
                typedError.msg += '; Password must be min 8 long';
            }
            return {
                field: typedError.path,
                message: typedError.msg,
            };
        });
        return next(customError('Invalid input data', 400, validationErrors));
    }
    next();
};
exports.validationErrorHandler = validationErrorHandler;
const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    return next(error);
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
            status: err.status || 500,
            errors: err.errors,
        },
    });
};
exports.errorHandler = errorHandler;
