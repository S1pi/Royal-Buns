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
