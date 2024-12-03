import {Result, ValidationError, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';

interface ExtendedError extends Error {
  status?: number;
  errors?: {message: any}[];
}

const customError = (message: string, status: number, errors: {message: any}[]) => {
  const error = new Error(message) as ExtendedError;
  error.status = status;
  if (errors) {
    error.errors = errors;
  }
  return error;
};

const validationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors: Result<ValidationError> = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array({onlyFirstError: true}).map((error) => ({
      message: error.msg,
    }));

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
