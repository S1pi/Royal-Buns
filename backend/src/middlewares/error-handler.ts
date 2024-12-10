import {
  ValidationError as BaseValidationError,
  validationResult,
} from 'express-validator';
import {NextFunction, Request, Response} from 'express';

interface ExtendedError extends Error {
  status?: number;
  errors?: {field: any; message: any}[];
}

type ValidationError = BaseValidationError & {path: string};

const customError = (
  message: string,
  status: number,
  errors: {field: any; message: any}[]
) => {
  const error = new Error(message) as ExtendedError;
  error.status = status;
  if (errors) {
    error.errors = errors;
  }
  return error;
};

/**
 * @api {middleware} validationErrorHandler Validation Error Handler Middleware
 * @apiName ValidationErrorHandler
 * @apiGroup Error
 * @apiVersion 1.0.0
 * @apiDescription Middleware to handle validation errors from express-validator.
 *
 * @apiError 400 Bad Request Invalid input data.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Invalid input data",
 *       "errors": [
 *         {
 *           "field": "username",
 *           "message": "Username is required"
 *         },
 *         {
 *           "field": "password",
 *           "message": "Password must be min 8 long"
 *         }
 *       ]
 *     }
 */
const validationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  // console.log('Testi errorit: ', errors);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array({onlyFirstError: true}).map((error) => {
      const typedError = error as ValidationError;
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


/**
 * @api {middleware} notFoundHandler Not Found Handler Middleware
 * @apiName NotFoundHandler
 * @apiGroup Error
 * @apiVersion 1.0.0
 * @apiDescription Middleware to handle 404 Not Found errors.
 *
 * @apiError 404 Not Found The requested resource could not be found.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Not Found - /nonexistent-route"
 *     }
 */
const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`) as ExtendedError;
  error.status = 404;
  return next(error);
};

const errorHandler = (
  err: ExtendedError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status || 500,
      errors: err.errors,
    },
  });
};

export {notFoundHandler, errorHandler, customError, validationErrorHandler};
